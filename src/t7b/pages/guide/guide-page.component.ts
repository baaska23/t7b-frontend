import { Component } from "@angular/core";

@Component({
    selector: 'app-guide-page',
    templateUrl: './guide-page.component.html',
    styleUrls: ['./guide-page.component.css']
})
export class GuidePageComponent {
    constructor() {}

    onReadMore(guide: any) {
        alert(`Read more about: ${guide.title}`);
    }

    guides = [
        {
            author: "Enkhjin Bat",
            title: "How to Structure Your Bachelor Thesis",
            category: "Writing Tips",
            school: "Business School",
            createdAt: "2025-03-12",
            onClick: () => this.onReadMore(this.guides[0])
        },
        {
            author: "Batbayar Bold",
            title: "Effective Research Methods for Undergraduates",
            category: "Research",
            school: "School of Art and Sciences",
            createdAt: "2025-02-28",
            onClick: () => this.onReadMore(this.guides[0])
        },
        {
            author: "Solongo Enkh",
            title: "Time Management for Thesis Success",
            category: "Productivity",
            school: "School of Engineering and Applied Sciences",
            createdAt: "2025-01-15",
            onClick: () => this.onReadMore(this.guides[0])
        },
        {
            author: "Tuvshinbayar Gan",
            title: "Citing Sources Correctly: APA & MLA",
            category: "Academic Skills",
            school: "Business School",
            createdAt: "2025-03-01",
            onClick: () => this.onReadMore(this.guides[0])
        },
        {
            author: "Nomin Erdene",
            title: "Designing Effective Presentations",
            category: "Presentation",
            school: "School of Art and Sciences",
            createdAt: "2025-02-10",
            onClick: () => this.onReadMore(this.guides[0])
        },
        {
            author: "Bilegt Bat",
            title: "Avoiding Plagiarism in Academic Writing",
            category: "Academic Integrity",
            school: "School of Engineering and Applied Sciences",
            createdAt: "2025-01-22",
            onClick: () => this.onReadMore(this.guides[0])
        },
        {
            author: "Munkhzul Purev",
            title: "Choosing a Thesis Topic",
            category: "Getting Started",
            school: "Business School",
            createdAt: "2025-03-05",
            onClick: () => this.onReadMore(this.guides[0])
        },
        {
            author: "Erdene Ochir",
            title: "Collaborating with Your Supervisor",
            category: "Supervision",
            school: "School of Art and Sciences",
            createdAt: "2025-02-18",
            onClick: () => this.onReadMore(this.guides[0])
        },
        {
            author: "Sarnai Tseren",
            title: "Editing and Proofreading Your Thesis",
            category: "Editing",
            school: "School of Engineering and Applied Sciences",
            createdAt: "2025-03-08",
            onClick: () => this.onReadMore(this.guides[0])
        }
    ];
}