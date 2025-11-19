import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-template-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './template-card.component.html',
    styleUrls: ['./template-card.component.css']
})
export class TemplateCard {
    @Input() title: string;
    @Input() mainField: string;
    @Input() subField: string;
    @Input() createdAt: string;
    @Input() onClick: Function;
}