import { CommonModule } from "@angular/common";
import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";


@Component({
    selector: 'app-class-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './class-card.component.html',
    styleUrls: ['./class-card.component.css']
})
export class ClassCard {
    @Input() className: string;
    @Input() description: string;
    @Input() classId: number;
    @Output() cardClick = new EventEmitter<number>();

    onCardClick() {
        console.log("clicked:", this.classId);
        this.cardClick.emit(this.classId);
    }
}