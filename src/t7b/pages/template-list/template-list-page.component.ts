import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TemplateService } from "src/t7b/services/template.service";

@Component({
    selector: 'app-template-list-page',
    templateUrl: './template-list-page.component.html',
    styleUrls: ['./template-list-page.component.css']
})
export class TemplateListPageComponent implements OnInit{
    templates : any[] = [];

    constructor(
        private service: TemplateService,
        private router: Router
    ) {}

    onReadMore(template: any) {
        alert(`Read more about: ${template.title}`);
    }

    ngOnInit(): void {
        this.service.getTemplates().subscribe((data: any) => {
            this.templates = data;
            console.log("data in templates: ", this.templates);
        })
    }

    goToTemplate(templateId: number){
        this.router.navigate(['t7b', 'template-list', templateId])
    }
}