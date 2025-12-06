import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "src/app/demo/service/product.service";
import { BaseListComponent } from "src/t7b/core/base-list/base-list.component";
import { Injector } from "@angular/core";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent extends BaseListComponent {
    constructor(
        injector: Injector,
        private sampleService: ProductService,
        private router: Router
    ) {
        super(injector, sampleService);
    }

    featureCards = [
        {
            header: 'Share your thesis documents instantly with your professor',
            paragraph: 'Skip the wait and paperwork—send your thesis online and receive prompt feedback from your professor, anytime.',
            imageUrl: 'assets/t7b/features1.svg',
            buttonText: 'Learn More',
            reverse: false
        },
        {
            header: 'Track your thesis progress and collaborate with peers',
            paragraph: 'Post updates, ask questions, and learn together with fellow students to improve your research journey.',
            imageUrl: 'assets/t7b/features2.svg',
            buttonText: 'Learn more',
            reverse: true
        },
        {
            header: 'Explore top-graded thesis works for inspiration',
            paragraph: 'Access the best thesis projects from NUM and discover new ideas to elevate your own research.',
            imageUrl: 'assets/t7b/features3.svg',
            buttonText: 'Learn more',
            reverse: false
        }
    ]
}