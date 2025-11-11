import { Injector } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { Criteria } from '../core.service';
import { CoreListComponent } from '../core-list.component';

export interface ListColumn {
    field: string;
    header: string;
    type?: string;
    mode?: string;
    alias: string;
    frozen?: boolean;
    optionValue?: string;
}

export abstract class BaseListComponent extends CoreListComponent {
    protected _aliasColumns: any = {};
    selectedColumns!: ListColumn[];
    columns: ListColumn[] = [];
    frozenColumns: ListColumn[] = [];
    listOptions: any = {};
    title: string = '';
    employerEnums: any = {};
    defaultCol!: ListColumn[];
    permission!: any;
    deleteWarnMsg: any[] = [];

    menus!: MenuItem[];
    selectedItem: any[] = [];

    newChildTooltip = '';
    emptyOptionValue = { code: 'empty', name: 'Хоосон' };

    protected _dialogService: DialogService;
    protected _dialogRef!: DynamicDialogRef;
    constructor(injector: Injector, service: any) {
        super(injector, service);
        this._dialogService = injector.get(DialogService);
    }
    override init(search?: Criteria): void {
        super.init();
        const translate = this._translateService;
        for (const key in search) {
            if (key !== 'misc' && search[key].header) {
                const column: ListColumn = {
                    field: key,
                    header: translate.instant(<string>search[key].header),
                    type: <string>search[key].type,
                    mode: <string>search[key].mode,
                    alias: this._aliasColumns[key] ? this._aliasColumns[key] : key,
                    frozen: <boolean>search[key].frozen || false,
                };
                if (column.frozen) {
                    this.frozenColumns.push(column);
                } else {
                    this.columns.push(column);
                }
            }
        }
        const columnData = localStorage.getItem('column-data:' + window.location.pathname);
        if (columnData) {
            this.selectedColumns = JSON.parse(columnData);
        } else {
            if (this.defaultCol) {
                this.defaultCol.map((item) => {
                    item.header = translate.instant(item.header);
                });
                this.selectedColumns = [...this.defaultCol];
            } else {
                this.selectedColumns = [...this.columns];
            }
        }
    }

    onShow(item: any) {
        let publishMenu = this.menus.find((menu) => menu.id == 'publish');
        if (publishMenu) {
            publishMenu['disabled'] = item.published;
        }
    }

    onView(item: any): void {
        this._router.navigate(['view/' + item.id], {
            relativeTo: this._activatedRoute,
        });
    }

    onColumn(event: any): void {
        const unselected = this.columns.filter(
            (column) => !this.selectedColumns.find((selectedColumn) => column.field === selectedColumn.field),
        );
        this.columns = [];
        this.columns = [...this.selectedColumns, ...unselected];
        localStorage.setItem('column-data:' + window.location.pathname, JSON.stringify(this.selectedColumns));
    }
}
