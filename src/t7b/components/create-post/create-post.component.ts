import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ClassService } from "src/t7b/services/class.service";

@Component({
    selector: 'app-create-post',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
    @Input() author: string;

    constructor(
        private service: ClassService
    ) {}

    onSubmit() {
        this.service.getClasses()
    }

}