import { Component } from "@angular/core";

@Component({
    selector: 'app-templates-page',
    templateUrl: './templates-page.component.html',
    styleUrls: ['./templates-page.component.css']
})
export class TemplatesPageComponent {
    constructor() {}

    onReadMore(template: any) {
        alert(`Read more about: ${template.title}`);
    }

    templates = [
        {
            title: 'Software Engineering Basics',
            mainField: 'Computer Science',
            subField: 'Software Engineering',
            createdAt: '2025-11-01',
            onClick: () => this.onReadMore({ title: 'Software Engineering Basics' })
        },
        {
            title: 'Investment Banking 101',
            mainField: 'Business',
            subField: 'Investment Banking',
            createdAt: '2025-10-15',
            onClick: () => this.onReadMore({ title: 'Investment Banking 101' })
        },
        {
            title: 'Introduction to Accounting',
            mainField: 'Business',
            subField: 'Accounting',
            createdAt: '2025-09-20',
            onClick: () => this.onReadMore({ title: 'Introduction to Accounting' })
        },
        {
            title: 'Data Structures',
            mainField: 'Computer Science',
            subField: 'Computer Science',
            createdAt: '2025-08-30',
            onClick: () => this.onReadMore({ title: 'Data Structures' })
        },
        {
            title: 'Corporate Finance',
            mainField: 'Business',
            subField: 'Investment Banking',
            createdAt: '2025-07-12',
            onClick: () => this.onReadMore({ title: 'Corporate Finance' })
        },
        {
            title: 'Web Development',
            mainField: 'Computer Science',
            subField: 'Software Engineering',
            createdAt: '2025-06-05',
            onClick: () => this.onReadMore({ title: 'Web Development' })
        },
        {
            title: 'Financial Reporting',
            mainField: 'Business',
            subField: 'Accounting',
            createdAt: '2025-05-18',
            onClick: () => this.onReadMore({ title: 'Financial Reporting' })
        },
        {
            title: 'Algorithms',
            mainField: 'Computer Science',
            subField: 'Computer Science',
            createdAt: '2025-04-22',
            onClick: () => this.onReadMore({ title: 'Algorithms' })
        },
        {
            title: 'Mergers & Acquisitions',
            mainField: 'Business',
            subField: 'Investment Banking',
            createdAt: '2025-03-10',
            onClick: () => this.onReadMore({ title: 'Mergers & Acquisitions' })
        }
    ]
}