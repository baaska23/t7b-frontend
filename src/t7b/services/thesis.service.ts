import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, retry } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ThesisService {
    constructor(private http: HttpClient) {}

    getTheses(): Observable<any> {
        return this.http.get<any>(`${environment.url}/theses-examples`);
    }

    getById(id: number): Observable<any> {
        return this.http.get<any>(`${environment.url}/theses-examples/${id}`);
    }

    create(data: any): Observable<any> {
        return this.http.post<any>(`${environment.url}/theses-examples`, data);
    }

    update(data: any, id: number): Observable<any> {
        return this.http.put(`${environment.url}/theses-examples/${id}`, data);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${environment.url}/theses-examples/${id}`);
    }
}