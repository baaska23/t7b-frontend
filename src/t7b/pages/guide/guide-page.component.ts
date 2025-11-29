import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GuidanceService } from "src/t7b/services/guidance.service";

@Component({
    selector: 'app-guide-page',
    templateUrl: './guide-page.component.html',
    styleUrls: ['./guide-page.component.css']
})
export class GuidePageComponent implements OnInit {
    guide: any = {};

    constructor(
        private service: GuidanceService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const guideId = this.route.snapshot.paramMap.get('guideId');
        if (guideId) {
            this.service.getById(+guideId).subscribe((data: any) => {
                this.guide = data;
                console.log("data in guide:", this.guide);
            }, error => {
                console.error('Error loading guidance:', error);
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