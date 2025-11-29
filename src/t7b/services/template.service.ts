import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class TemplateService {
    constructor(private http: HttpClient) {}

    getTemplates(): Observable<any> {
        return this.http.get<any>(`${environment.url}/templates`);
    }

    create(data: any) {
        return this.http.post<any>(`${environment.url}/templates`, data);
    }

    update(id: number, data: any) {
        return this.http.put<any>(`${environment.url}/templates/${id}`, data);
    }

    delete(id: number) {
        return this.http.delete<any>(`${environment.url}/templates/${id}`);
    }

    getById(id: number) {
        return this.http.get<any>(`${environment.url}/templates/${id}`)
    }
}