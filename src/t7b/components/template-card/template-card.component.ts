import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-template-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './template-card.component.html',
    styleUrls: ['./template-card.component.css']
})
export class TemplateCard {
    @Input() templateId: number;
    @Input() title: string;
    @Input() mainField: string;
    @Input() subField: string;
    @Input() createdAt: string;
    @Output() cardClick = new EventEmitter<number>();
    
    onCardClick() {
        console.log("clicked:", this.templateId);
        this.cardClick.emit(this.templateId);
    }
}