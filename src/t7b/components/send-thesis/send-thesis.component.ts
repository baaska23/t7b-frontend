import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { SendService } from "src/t7b/services/send.service";

@Component({
    selector: 'app-send-thesis',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './send-thesis.component.html',
    styleUrls: ['./send-thesis.component.css']
})
export class SendThesisComponent {
    @Input() professor: string;
    @Input() author: string;
    @Input() comment: string;

    constructor(
        private service: SendService
    ) {}

    onSubmit() {

    }
}