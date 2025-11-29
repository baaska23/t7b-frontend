import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TemplateService } from "src/t7b/services/template.service";

@Component({
    selector: 'app-template-page',
    templateUrl: './template-page.component.html',
    styleUrls: ['./template-page.component.css']
})
export class TemplatePageComponent implements OnInit {
    template: any = {};

    constructor(
        private service: TemplateService,
        private route: ActivatedRoute
    ) {}
    ngOnInit(): void {
        const templateId = this.route.snapshot.paramMap.get("templateId");
        this.service.getById(+templateId).subscribe((data: any) => {
            this.template = data;
            console.log("data in template: ", this.template)
        })
    }

    getMinutesAgo(dateString: string): string {
        const created = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - created.getTime();
        const diffMin = Math.floor(diffMs / 60000);
        if (diffMin < 1) return 'just now';
        if (diffMin === 1) return '1 min ago';
        if (diffMin > 60) return `${Math.floor(diffMin/60)} h ago`;
        if (diffMin > 1440) return `${Math.floor(diffMin/1440)} days ago`;
        return `${diffMin} min ago`;
    }
}