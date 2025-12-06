import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(
        private router: Router
    ) {}

    profileId: number = 1;

    goToProfile(profileId: number) {
        this.router.navigate(['t7b', 'profile', profileId]);
    }
}