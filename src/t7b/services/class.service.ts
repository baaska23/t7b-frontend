import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ClassService {
    constructor(private http: HttpClient) {}

    getClasses(): Observable<any> {
        return this.http.get<any>('/classes').pipe(
            map(res => res.data)
        );
    }
}