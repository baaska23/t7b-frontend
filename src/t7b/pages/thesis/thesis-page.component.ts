import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ThesisService } from "src/t7b/services/thesis.service";

@Component({
    selector: 'app-thesis-page',
    templateUrl: './thesis-page.component.html',
    styleUrls: ['./thesis-page.component.css']
})
export class ThesisPageComponent implements OnInit {
    thesis: any = {};

    constructor(
        private service: ThesisService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const thesisId = this.route.snapshot.paramMap.get("thesisId");
        if (thesisId) {
            this.service.getById(+thesisId).subscribe((data: any) => {
                this.thesis = data;
                console.log("data in thesis:", this.thesis);
            }, error => {
                console.error('Error loading thesis:', error);
            });
        }
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