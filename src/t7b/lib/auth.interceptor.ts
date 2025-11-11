import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { from, Observable, switchMap } from "rxjs";
import { msalInstance } from "./msal.config";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.getAccessToken()).pipe(
        switchMap(token => {
            if (token) {
            const clonedRequest = req.clone({
                setHeaders: {
                Authorization: `Bearer ${token}`
                }
            });
            return next.handle(clonedRequest);
            }
            return next.handle(req);
        })
        );
    }

    private async getAccessToken(): Promise<string | null> {
        try {
            const accounts = msalInstance.getAllAccounts();
            if(accounts.length == 0) {
                return null;
            }

            const response = await msalInstance.acquireTokenSilent({
                scopes: ['User.Read'],
                account: accounts[0]
            });

            return response.accessToken;
        } catch(error) {
            console.error("Failed to access token: ", error);
            return null;
        }
    }
}