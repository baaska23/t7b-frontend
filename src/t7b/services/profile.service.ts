import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    constructor(private http: HttpClient) {}

    getById(id: number): Observable<any> {
        return this.http.get<any>(`${environment.url}/profiles/${id}`);
    }

    update(id: number, data: any): Observable<any> {
        return this.http.put<any>(`${environment.url}/profiles/${id}`, data);
    }
}