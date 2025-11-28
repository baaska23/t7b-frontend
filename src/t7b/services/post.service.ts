import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(private http: HttpClient) {}

    create(data: any): Observable<any> {
        return this.http.post<any>(`${environment.url}/posts`, data);
    }

    update(id: number, data: any): Observable<any> {
        return this.http.put<any>(`${environment.url}/posts/${id}`, data);
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(`${environment.url}/posts/${id}`);
    }

    getById(id: number): Observable<any[]> {
        return this.http.get<any>(`${environment.url}/posts/${id}`);
    }

    getByClassId(classId: number): Observable<any[]> {
        return this.http.get<any[]>(`${environment.url}/posts/class/${classId}`);
    }
}