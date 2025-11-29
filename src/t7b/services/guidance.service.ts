import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class GuidanceService {
    constructor(private http: HttpClient) {}

    getGuidances(): Observable<any> {
        return this.http.get<any>(`${environment.url}/guidances`);
    }

    create(data: any): Observable<any> {
        return this.http.post<any>(`${environment.url}/guidances`, data);
    }

    update(data: any, id: number): Observable<any> {
        return this.http.put<any>(`${environment.url}/guidances/${id}`, data);
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(`${environment.url}/guidances/${id}`);
    }

    getById(id: number): Observable<any> {
        return this.http.get<any>(`${environment.url}/guidances/${id}`);
    }
}