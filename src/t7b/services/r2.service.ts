import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class R2Service {
    constructor(private http: HttpClient) {}

    upload(formData: any) {
        return this.http.post<any>(`${environment.url}/templates/upload`, formData);
    }
}