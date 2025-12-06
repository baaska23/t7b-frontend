import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { R2Service } from "src/t7b/services/r2.service";
import { TemplateService } from "src/t7b/services/template.service";
import { ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: 'app-template-list-page',
    templateUrl: './template-list-page.component.html',
    styleUrls: ['./template-list-page.component.css']
})
export class TemplateListPageComponent implements OnInit{
    @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
    templates : any[] = [];
    

    constructor(
        private service: TemplateService,
        private r2Service: R2Service,
        private router: Router
    ) {}

    onReadMore(template: any) {
        alert(`Read more about: ${template.title}`);
    }

    ngOnInit(): void {
        this.service.getTemplates().subscribe((data: any) => {
            this.templates = data;
            console.log("data in templates: ", this.templates);
        })
    }

    goToTemplate(templateId: number){
        this.router.navigate(['t7b', 'template-list', templateId])
    }

    

    triggerFileInput() {
        this.fileInput.nativeElement.click();
    }

    onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        const file = input.files[0];
        const formData = new FormData();
        formData.append('authorId', '1'); // Replace with actual authorId
        formData.append('file', file);
        formData.append('fileName', file.name);
        formData.append('contentType', file.type);
        formData.append('title', file.name); // Or prompt for title
        formData.append('fileSize', file.size.toString()); // <-- Add this line

        this.r2Service.upload(formData).subscribe({
            next: (res) => {
                alert('Upload successful!');
                // Optionally refresh the template list
            },
            error: (err) => {
                alert('Upload failed!');
            }
        });
    }
}
}