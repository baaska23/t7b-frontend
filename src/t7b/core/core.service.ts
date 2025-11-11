import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { cloneDeep, toLocalDate } from './utils';

export interface Pageable {
  page: number,
  size: number,
  sort: string,
}

export interface CriteriaObj {
  type: 'text' | 'number' | 'boolean' | 'dropdown' | 'multiSelect' | 'localDate' | 'instant' | 'autoComplete' | 'button',
  value: any,
  mode: 'equals' | 'notEquals' | 'in' | 'notIn' | 'specified' | 'contains' | 'greaterThan' | 'lessThan' | 'greaterThanOrEqual' | 'lessThanOrEqual' | 'single' | 'range' | 'multiple',
  header?: string,
  frozen?: boolean
}

export interface CriteriaObjMisc {
  [x: string]: CriteriaObj[],
}

export interface Criteria {
  [x: string]: CriteriaObj | CriteriaObjMisc,
  misc: CriteriaObjMisc,
}

export interface ListSubject {
  list: any[],
  pageable: Pageable,
  criteria: Criteria,
  total: number,
  lastModified: number,
}

export abstract class CoreService {

  protected _http: HttpClient;
  protected _api: string;
  protected _list: any[] = [];
  protected _defaultPageable: Pageable;
  protected _pageable: Pageable;
  protected _criteria: Criteria;
  protected _total = 0;
  protected _lastModified = 0;
  protected _cacheTime = 10000;
  protected _listSubject$ = new Subject<ListSubject>();

  constructor(http: HttpClient, api: string, pageable: Pageable, criteria: Criteria) {
    this._http = http;
    this._api = api;
    this._defaultPageable = pageable;
    this._pageable = cloneDeep(pageable);
    this._criteria = cloneDeep(criteria);
  }

  get api(): string { return this._api; }
  get list(): any[] { return cloneDeep(this._list); }
  get defaultPageable(): Pageable { return cloneDeep(this._defaultPageable); }
  get pageable(): Pageable { return cloneDeep(this._pageable); }
  get criteria(): Criteria { return cloneDeep(this._criteria); }
  get total(): number { return this._total; }
  get lastModified(): number { return this._lastModified; }
  get listSubject$(): Subject<ListSubject> { return this._listSubject$; }
  get listLength(): number { return this._list.length; }

  get cacheExpired(): boolean {
    return this._lastModified + this._cacheTime < Date.now();
  }

  set criteria(criteria: Criteria) { this._criteria = cloneDeep(criteria); }
  set pageable(pageable: Pageable) { this._pageable = cloneDeep(pageable); }
  set page(page: number) { this._pageable.page = page; }
  set size(size: number) { this._pageable.size = size; }
  set sort(sort: string) { this._pageable.sort = sort; }

  pageable$(pageable: Pageable): Observable<any> {
    this._pageable = cloneDeep(pageable);
    return this.fetch$();
  }

  resetPageable$(): Observable<any> {
    return this.pageable$(this._defaultPageable);
  }

  empty(next: boolean = false): void {
    this._list = [];
    if (next) {
      this._listSubject$.next(this.getListSubject());
    }
  }

  getListSubject(): ListSubject {
    return {
      list: cloneDeep(this._list),
      pageable: cloneDeep(this._pageable),
      criteria: cloneDeep(this._criteria),
      total: this._total,
      lastModified: this._lastModified,
    };
  }

  fetchById$(key: string): Observable<any> {
    return this._http.get<any>(this._api + '/' + key);
  }

  fetch$(criteria?: Criteria): Observable<any> {
    if (criteria) {
      this._criteria = cloneDeep(criteria);
    }
    const query = this.query(this._pageable, this._criteria);
    return this._http.get<any>(
      this._api, { params: query, observe: 'response' }
    ).pipe(
      map(val => {
        if (Array.isArray(val.body.data)) {
          this._list = this.mapList(val.body.data);
          this._total = Number(val.body.total) || this._list.length;
          this._lastModified = Date.now();

          const subject = this.getListSubject();
          this._listSubject$.next(subject);
          return subject;
        } else {
          return val.body;
        }
      }),
    );
  }

  mapList(list: any[]): any[] { return list; }

  query(pageable: Pageable, criteria: Criteria): HttpParams {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('page', pageable.page);
    httpParams = httpParams.set('size', pageable.size);
    httpParams = httpParams.set('sort', pageable.sort);
    if (!pageable.sort.startsWith('id,')) { httpParams = httpParams.append('sort', 'id,desc'); }

    for (const key in criteria) {
      if (key !== 'misc') {
        httpParams = this.convert(key, <CriteriaObj>criteria[key], httpParams);
      }
    }

    if (criteria.misc) {
      const misc = criteria.misc;
      for (const key in misc) {
        for (const obj of misc[key]) {
          httpParams = this.convert(key, obj, httpParams);
        }
      }
    }

    return httpParams;
  }

  convert(key: string, obj: CriteriaObj, httpParams: HttpParams): HttpParams {
    if (obj.value === null || obj.value === undefined || obj.value === '' || (Array.isArray(obj.value) && obj.value.length === 0)) {
      return httpParams;
    }

    if (obj.type === 'multiSelect') {
      httpParams = httpParams.set(key + '.in', obj.value.toString());
    } else if (obj.type === 'localDate') {
      switch (obj.mode) {
        case 'single':
          httpParams = httpParams.set(key + '.equals', toLocalDate(obj.value));
          break;
        case 'range':
          if (Array.isArray(obj.value)) {
            if (obj.value[0]) { httpParams = httpParams.set(key + '.greaterThanOrEqual', toLocalDate(obj.value[0])); }
            if (obj.value[1]) { httpParams = httpParams.set(key + '.lessThanOrEqual', toLocalDate(obj.value[1])); }
          }
          break;
        case 'multiple':
          if (Array.isArray(obj.value)) {
            httpParams = httpParams.set(key + '.in', obj.value.map((date: Date) => toLocalDate(date)).toString());
          }
          break;
        default:
          if (obj.mode === 'specified') {
            httpParams = httpParams.set(key + '.specified', obj.value ? true : false);
          } else {
            httpParams = httpParams.set(key + '.' + obj.mode, toLocalDate(obj.value));
          }
          break;
      }
    } else if (obj.type === 'instant') {
      switch (obj.mode) {
        case 'single':
          httpParams = httpParams.set(key + '.greaterThanOrEqual', obj.value.toJSON());
          const date = new Date(obj.value.getTime() + 24 * 60 * 60000);
          httpParams = httpParams.set(key + '.lessThan', date.toJSON());
          break;
        case 'range':
          if (Array.isArray(obj.value)) {
            httpParams = httpParams.set('startDate', obj.value[0].toJSON());
            let date = new Date(obj.value[0].getTime() + 24 * 60 * 60000);
            if (obj.value[1]) {
              date = new Date(obj.value[1].getTime() + 24 * 60 * 60000);
            }
            httpParams = httpParams.set('endDate', date.toJSON());
          }
          break;
        default:
          if (obj.mode === 'specified') {
            httpParams = httpParams.set(key + '.specified', obj.value ? true : false);
          } else {
            httpParams = httpParams.set(key + '.' + obj.mode, obj.value.toJSON());
          }
          break;
      }
    } else if (obj.type === 'autoComplete') {
      switch (obj.mode) {
        case 'multiple':
          httpParams = httpParams.set(key + '.in', obj.value.toString());
          break;
        default:
          httpParams = httpParams.set(key + '.' + obj.mode, obj.value.toString());
          break;
      }
    } else {
      if (obj.mode === 'specified') {
        httpParams = httpParams.set(key + '.specified', obj.value ? true : false);
      } else {
        httpParams = httpParams.set(key, obj.value.toString());
      }
    }
    return httpParams;
  }

  post$(data: any): Observable<any> { return this._http.post<any>(this._api, data); }
  put$(data: any): Observable<any> { return this._http.put<any>(this._api + '/' + data.id, data); }
  patch$(data: any): Observable<any> { return this._http.patch<any>(this._api + '/' + data.id, data); }
  delete$(data: any): Observable<any> { return this._http.delete(this._api + '/' + data.id); }
  static getToday(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Сар 0-ээс эхэлдэг тул 1-ийг нэмнэ
    const day = String(today.getDate()).padStart(2, '0'); // Өдрийг 2 оронтой болгоно
    return year+"-"+month+"-"+day+"T16:00:00Z";
  }
}
