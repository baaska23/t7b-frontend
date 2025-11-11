import { Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Observable, of } from 'rxjs';

import { CoreService } from './core.service';
import { checkDate, cloneDeep } from './utils';

export abstract class CoreFormComponent {
  protected _router: Router;
  protected _activatedRoute: ActivatedRoute;
  protected _translateService: TranslateService;
  protected _messageService: MessageService;

  protected _service: CoreService;
  protected _noneRequireds = ['id', 'createdBy', 'createdDate', 'lastModifiedBy', 'lastModifiedDate'];
  protected _model: any;
  protected _updateMode = 'put';

  isEdit = false;
  form = new FormGroup({});
  data: any;
  isLoading = false;

  constructor(injector: Injector, service: any) {
    this._router = injector.get(Router);
    this._activatedRoute = injector.get(ActivatedRoute);
    this._translateService = injector.get(TranslateService);
    this._messageService = injector.get(MessageService);
    this._service = service;
  }

  init(data: any, model: any): void {
    this.isEdit = data ? true : false;
    this.data = data;
    this._model = cloneDeep(model);

    if (this.isEdit) {
      for (const i in this._model) {
        if (i in data) {
          if (checkDate(data[i])) {
            this._model[i] = new Date(data[i]);
          } else {
            this._model[i] = data[i];
          }
        }
      }
    }

    for (const i in this._model) {
      if (this._noneRequireds.includes(i)) {
        this.form.addControl(i, new FormControl(this._model[i]));
      } else {
        this.form.addControl(i, new FormControl(this._model[i], [Validators.required]));
      }
    }
  }

  get controls(): any {
    return this.form.controls;
  }

  beforeSubmit$(): Observable<boolean> {
    const controls = this.controls;
    for (const i in controls) {
      if (typeof controls[i].value === 'string') {
        controls[i].setValue(controls[i].value.trim());
      }
    }
    return of(true);
  }

  onSubmit(): void {
    this.beforeSubmit$().subscribe((val: boolean) => {
      if (val && this.validSubmit()) {
        const data = this.formRawValue();
        let submit = this._service.post$(data);
        if (this.isEdit) {
          submit = this._updateMode === 'put' ? this._service.put$(data) : this._service.patch$(data);
        }
        this.isLoading = true;

        submit.subscribe({
          next: (n: any) => {
            this._service.fetch$().subscribe(() => {
              this.afterSubmit(n);
            });
          },
          error: (e: any) => {
            this.afterSubmitError(e);
          },
        });
      }
    });
  }

  validSubmit(): boolean {
    if (this.form.invalid) {
      const translate = this._translateService;
      this._messageService.add({
        severity: 'warn',
        summary: translate.instant('common.warn'),
        detail: translate.instant('common.invalidForm'),
      });

      const controls = this.controls;
      for (const i in controls) {
        if (controls[i].invalid) {
          controls[i].markAsDirty();
        }
      }
      return false;
    }
    return true;
  }

  formRawValue(): any {
    const value: any = this.form.getRawValue();
    for (const i in value) {
      if (typeof value[i] === 'string') {
        value[i] = value[i].trim();
      }
      if (value[i] === '') {
        value[i] = null;
      }
    }
    return value;
  }

  afterSubmit(val: any): void {
    const translate = this._translateService;
    this._messageService.add({
      severity: 'success',
      summary: translate.instant('common.success'),
      detail: translate.instant('common.saveSuccess'),
    });
    this.data = val;
    this.isLoading = false;
    if (!this.isEdit) {
      this._router.navigate(['..'], {
        relativeTo: this._activatedRoute,
      });
    }
  }

  afterSubmitError(val: any): void {
    this.isLoading = false;
    const translate = this._translateService;
    this._messageService.add({
      severity: 'error',
      summary: translate.instant('common.error'),
      detail: translate.instant('common.saveError'),
    });
  }
}
