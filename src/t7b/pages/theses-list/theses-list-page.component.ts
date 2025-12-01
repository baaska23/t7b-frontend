import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ThesisService } from "src/t7b/services/thesis.service";

@Component({
    selector: 'app-theses-list-page',
    templateUrl: './theses-list-page.component.html',
    styleUrls: ['./theses-list-page.component.css']
})
export class ThesesListPageComponent implements OnInit {
    theses: any[] = [];

    constructor(
        private service: ThesisService,
        private router: Router
    ) {}

    onReadMore(thesis: any) {
        alert(`Read more about: ${thesis.title}`);
    }

    ngOnInit(): void {
        this.service.getTheses().subscribe((data: any) => {
            this.theses = data;
            console.log("data in theses:", this.theses);
        })
    }

    goToThesis(thesisId: number) {
        this.router.navigate(['t7b', 'theses-list', thesisId]);
    }
}