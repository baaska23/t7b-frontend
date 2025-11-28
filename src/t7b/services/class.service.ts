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

    getClasses(): Observable<any[]> {
        return this.http.get<any[]>(`${environment.url}/classes`);
    }

    create(data: any): Observable<any> {
        return this.http.post<any>(`${environment.url}/classes`, data);
    }

    update(id: string, data: any): Observable<any> {
        return this.http.put<any>(`${environment.url}/classes/${id}`, data);
    }

    delete(id: string): Observable<any> {
        return this.http.delete<any>(`${environment.url}/classes/${id}`);
    }

    getById(id: number): Observable<any> {
        return this.http.get<any>(`${environment.url}/classes/${id}`)
    }

    getByProfessorId(id: number): Observable<any[]> {
        return this.http.get<any[]>(`${environment.url}/classes/professor/${id}`)
    }

    isExist(className: string, description: string): Observable<boolean> {
        return this.getClasses().pipe(
            map((classes: any[]) => 
                classes.some(
                    c => c.className === className && c.description === description
                )
            )
        );
    }
}