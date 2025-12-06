import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/t7b/services/profile.service';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
    fullname: string = '';
    teamsAddress: string = '';
    school: string = '';

    id: number = 1;
    // TODO: figure out how to take/extract user id from url

    constructor(private service: ProfileService) {}

    ngOnInit(): void {
        this.service.getById(this.id).subscribe((data: any) => {
            this.fullname = data?.fullname || 'Kai Uuganbadrakh';
            this.teamsAddress = data?.teamsAddress || 'Baasandorj Uuganbadrakh';
            this.school = data?.school || 'School of Applied Science';
        });
    }
}
