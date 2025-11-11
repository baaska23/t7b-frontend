import { Component, OnInit } from "@angular/core";
import { msalInstance, loginRequest } from "src/t7b/lib/msal.config";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login-dialog.component.css']
})

export class LoginDialogComponent implements OnInit {

    async ngOnInit() {
        await msalInstance.initialize()
    }

    async verifyStudent() {
        try {
            const response = await msalInstance.loginPopup(loginRequest);
            const email = response.account?.username || "";
            if(!email.endsWith("@stud.num.edu.mn")) {
                alert("Only NUM students can access this app");
            } else {
                alert('Login successful')
            }
        } catch (error) {
            console.error("Login failed:", error)
        }
    }
}