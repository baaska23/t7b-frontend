import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Button } from "primeng/button";

@Component({
    selector: 'app-thesis-card',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './thesis-card.component.html',
    styleUrls: ['./thesis-card.component.css']
})
export class ThesisCard {
    @Input() thesisId: number;
    @Input() author: string;
    @Input() title: string;
    @Input() mainField: string;
    @Input() subField: string;
    @Input() publishedYear: number;
    @Input() school: string;
    @Input() grade: number;
    @Input() rating: number;
    @Output() cardClick = new EventEmitter<number>();

    onCardClick() {
        console.log("clicked:", this.thesisId);
        this.cardClick.emit(this.thesisId);
    }
}