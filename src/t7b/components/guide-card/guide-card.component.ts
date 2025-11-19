import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-guide-card',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './guide-card.component.html',
    styleUrls: ['./guide-card.component.css']
})
export class GuideCard {
    @Input() author: string;
    @Input() title: string;
    @Input() category: string;
    @Input() school: string;
    @Input() createdAt: string;
    @Input() onClick: Function;
}