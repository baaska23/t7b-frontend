import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-feature-card',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './feature-card.component.html',
    styleUrls: ['./feature-card.component.css']
})

export class FeatureCard{
    @Input() headerText: string;
    @Input() paragraphText: string;
    @Input() buttonText: string;
    @Input() imageUrl: string;
    @Input() reverse: boolean = false;

}