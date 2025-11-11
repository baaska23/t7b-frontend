import { Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService, SortEvent } from 'primeng/api';

import { Criteria, Pageable, CoreService, ListSubject } from './core.service';
import { cloneDeep } from './utils';

export abstract class CoreListComponent {

  protected _router: Router;
  protected _activatedRoute: ActivatedRoute;
  protected _translateService: TranslateService;
  protected _confirmationService: ConfirmationService;
  protected _messageService: MessageService;

  protected _service: CoreService;
  protected _subscription!: Subscription;

  list: any[] = [];
  pageable!: Pageable;
  total = 0;
  search!: Criteria;

  rowsPerPageOptions = [50, 100, 200, 1000];
  sortField = 'id';
  sortOrder = -1;

  isFiltered = false;
  isRefresh = false;

  deleteMessage = '';

  constructor(
    injector: Injector,
    service: any,
  ) {
    this._router = injector.get(Router);
    this._activatedRoute = injector.get(ActivatedRoute);
    this._translateService = injector.get(TranslateService);
    this._confirmationService = injector.get(ConfirmationService);
    this._messageService = injector.get(MessageService);
    this._service = service;
  }

  init(): void {
    this.search = cloneDeep(this._service.criteria);
    this._subscription = this._service.listSubject$.subscribe((val: ListSubject) => {
      this.afterListSubject(val);
    });
    this.list = this._service.list;
    this.pageable = this._service.pageable;
    this.total = this._service.total;

    const sort = this.pageable.sort.split(',');
    this.sortField = sort[0];
    this.sortOrder = sort[1] === 'asc' ? 1 : -1;
    this.filtered();
  }

  destroy(): void {
    if (this._subscription) { this._subscription.unsubscribe(); }
  }

  afterListSubject(val: ListSubject): void {
    this.list = val.list;
    this.pageable = val.pageable;
    this.total = val.total;
    this.isRefresh = false;
  }

  filtered(): boolean {
    for (const key in this.search) {
      if (key !== 'misc') {
        const value = this.search[key].value;
        if (value !== null && value !== undefined && value !== '') { return this.isFiltered = true; }
      }
    }
    return this.isFiltered = false;
  }

  onClear(): void {
    for (const key in this.search) {
      if (key !== 'misc') {
        this.search[key].value = null;
      }
    }
    this.filtered();
    this.refresh();
  }

  refresh(): void {
    this.isRefresh = true;
    this._service.fetch$(this.search).subscribe({
      next: () => this.afterRefresh(),
      error: (e) => this.afterRefreshError(e),
    });
  }

  afterRefresh(): void { }

  afterRefreshError(e: any): void {
    this.isRefresh = false;
    const translate = this._translateService;
    this._messageService.add({ severity: 'error', summary: translate.instant('common.error'), detail: translate.instant('common.listError') });
  }

  onSearch(event: any, field: string = ''): boolean {
    if (field !== '') {
      const cval = this._service.criteria[field].value;
      const sval = this.search[field].value;
      if (((cval === null || cval === undefined || cval === '')
        && (sval === null || sval === undefined || sval === ''))
        || cval === sval) { return false; }
    }

    this.filtered();

    if (this.pageable.page === 0) {
      this.refresh();
    } else {
      this._service.fetch$(this.search);
      this.onPage({ page: 0, rows: this.pageable.size });
    }

    return true;
  }

  onPage(event: any): void {
    const page = event.page;
    const size = event.rows;
    if (this.pageable.page !== page || this.pageable.size !== size) {
      this.isRefresh = true;
      this._router.navigate([], { relativeTo: this._activatedRoute, queryParams: { page, size }, queryParamsHandling: 'merge' });
    }
  }

  onSort(event: SortEvent): void {
    if (this.sortField !== event.field || this.sortOrder !== event.order) {
      this.sortField = <string>event.field;
      this.sortOrder = <number>event.order;
      const sort = event.field + ',' + (event.order === 1 ? 'asc' : 'desc');
      if (this.pageable.sort !== sort) {
        this.isRefresh = true;
        this._router.navigate([], { relativeTo: this._activatedRoute, queryParams: { sort }, queryParamsHandling: 'merge' });
      }
    }
  }

  onNew(): void { this._router.navigate(['new'], { relativeTo: this._activatedRoute }); }
  onEdit(item: any): void { this._router.navigate([item.id], { relativeTo: this._activatedRoute }); }

  beforeDelete$(): Observable<boolean> { return of(true); }

  onDelete(item: any): void {
    this.beforeDelete$().subscribe((val: boolean) => {
      if (val) {
        const translate = this._translateService;
        this._confirmationService.confirm({
          message: translate.instant('common.deleteConfirm', { id: '#' + item.id }) + ' ' + this.deleteMessage,
          header: translate.instant('common.deleteConfirmHeader'),
          icon: 'pi pi-trash',
          acceptLabel: translate.instant('common.yes'),
          rejectLabel: translate.instant('common.no'),
          rejectButtonStyleClass: 'p-button-text',
          accept: () => {
            this.delete(item);
          }
        });
      }
    });
  }

  delete(item: any): void {
    this._service.delete$(item).subscribe({
      next: () => this.afterDelete(item),
      error: (e) => this.afterDeleteError(e),
    });
  }

  afterDelete(item: any): void {
    this.refresh();
    const translate = this._translateService;
    this._messageService.add({ severity: 'success', summary: translate.instant('common.success'), detail: translate.instant('common.deleteSuccess') });
  }

  afterDeleteError(e: any): void {
    const translate = this._translateService;
    this._messageService.add({ severity: 'error', summary: translate.instant('common.error'), detail: translate.instant('common.deleteError') });
  }

}
