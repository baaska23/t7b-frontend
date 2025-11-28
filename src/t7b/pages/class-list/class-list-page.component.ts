import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ClassService } from "src/t7b/services/class.service";

@Component({
    selector: 'app-class-list',
    templateUrl: './class-list-page.component.html',
    styleUrls: ['./class-list-page.component.css'],
})
export class ClassListPageComponent implements OnInit {
    constructor(
        private service: ClassService,
        private router: Router
    ) {}

    classes: any[] = [];
    professorId: number = 1;

    ngOnInit(): void {
        this.service.getByProfessorId(this.professorId).subscribe((data: any) => {
            this.classes = data;
        })
    }

    goToClass(classId: number) {
        this.router.navigate(['t7b', 'class-list', classId]);
    }
}