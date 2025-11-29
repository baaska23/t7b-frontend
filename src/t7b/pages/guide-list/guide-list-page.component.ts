import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GuidanceService } from "src/t7b/services/guidance.service";

@Component({
    selector: 'app-guide-list-page',
    templateUrl: './guide-list-page.component.html',
    styleUrls: ['./guide-list-page.component.css']
})
export class GuideListPageComponent implements OnInit {
    constructor(
        private service: GuidanceService,
        private router: Router
    ) {}

    guides: any[] = [];

    ngOnInit(): void {
        this.service.getGuidances().subscribe((data: any) => {
            this.guides = data;
            console.log("data in guides: ", this.guides);
        })
    }

    goToGuidance(guideId: number) {
        this.router.navigate(['t7b', 'guide-list', guideId]);
    }
}