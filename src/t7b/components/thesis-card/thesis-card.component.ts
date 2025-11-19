import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
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
    @Input() author: string;
    @Input() title: string;
    @Input() mainField: string;
    @Input() subField: string;
    @Input() publishedYear: number;
    @Input() school: string;
    @Input() grade: number;
    @Input() rating: number;
    @Input() onClick: Function;
}