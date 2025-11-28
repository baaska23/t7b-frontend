import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ClassService } from "src/t7b/services/class.service";

@Component({
    selector: 'app-create-class',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './create-class.component.html',
    styleUrls: ['./create-class.component.css']
})

export class CreateClassComponent {   
    name: string = '';
    description: string = ''; 
    professorId: number = 1;
    isCreating: boolean = false;

    constructor(
        private service: ClassService
    ) {}

    
    onCreate() {
        if (this.isCreating) return;
        this.isCreating = true;

        const data = {
            className: this.name,
            description: this.description,
            professorId: this.professorId
        };

        this.service.isExist(this.name, this.description).subscribe(exists => {
            if (exists) {
                console.log("This class is already exists")
            } else {
                this.service.create(data).subscribe(response => {
                    console.log('Class created:', response);
                    this.name = '';
                    this.description = '';
                    this.isCreating = false;
                }, error => {
                    console.error('Error creating class:', error);
                    this.isCreating = false;
                });
            }
        })
    }
}