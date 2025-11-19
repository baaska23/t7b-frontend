import { Component } from "@angular/core";

@Component({
    selector: 'app-theses-page',
    templateUrl: './theses-page.component.html',
    styleUrls: ['./theses-page.component.css']
})
export class ThesesPageComponent {
    constructor() {}

    onReadMore(thesis: any) {
        alert(`Read more about: ${thesis.title}`);
    }

    theses = [
        {
            author: "Anu Baatar",
            title: "Cognitive Development in Early Childhood",
            mainField: "Psychology",
            subField: "Developmental Psychology",
            publishedYear: 2023,
            school: "National University of Mongolia",
            grade: 95,
            rating: 5
        },
        {
            author: "Bat-Erdene Bold",
            title: "Machine Learning for Mongolian Text Analysis",
            mainField: "Computer Science",
            subField: "Artificial Intelligence",
            publishedYear: 2022,
            school: "Mongolian University of Science and Technology",
            grade: 92,
            rating: 4,
            onClick: () => this.onReadMore(this.theses[0])
        },
        {
            author: "Solongo Enkh",
            title: "Renewable Energy Adoption in Rural Areas",
            mainField: "Environmental Science",
            subField: "Renewable Energy",
            publishedYear: 2024,
            school: "Mongolian State University of Education",
            grade: 88,
            rating: 4,
            onClick: () => this.onReadMore(this.theses[0])
        },
        {
            author: "Tuvshinbayar Gan",
            title: "Economic Impacts of Tourism in Mongolia",
            mainField: "Economics",
            subField: "Tourism Economics",
            publishedYear: 2021,
            school: "University of Finance and Economics",
            grade: 90,
            rating: 3,
            onClick: () => this.onReadMore(this.theses[0])
        },
        {
            author: "Nomin Erdene",
            title: "Modern Approaches to Urban Planning",
            mainField: "Architecture",
            subField: "Urban Design",
            publishedYear: 2023,
            school: "Mongolian University of Architecture and Construction",
            grade: 97,
            rating: 5,
            onClick: () => this.onReadMore(this.theses[0])
        },
        {
            author: "Tuvshinbayar Gan",
            title: "Economic Impacts of Tourism in Mongolia",
            mainField: "Economics",
            subField: "Tourism Economics",
            publishedYear: 2021,
            school: "University of Finance and Economics",
            grade: 90,
            rating: 3,
            onClick: () => this.onReadMore(this.theses[0])
        }
    ];
}