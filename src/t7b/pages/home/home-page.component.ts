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
            header: 'Adipisicing consectetur do duis officia exercitation.',
            paragraph: 'Magna exercitation aliqua officia nulla culpa cupidatat cupidatat. Reprehenderit occaecat exercitation veniam culpa labore consectetur culpa consequat. Occaecat aute minim culpa occaecat consequat aliqua id ea esse ut pariatur exercitation et. Quis anim ullamco irure velit esse dolore adipisicing dolor.',
            imageUrl: 'assets/t7b/features1.svg',
            buttonText: 'Learn More',
            reverse: false
        },
        {
            header: 'Id ad Lorem minim ea magna duis.',
            paragraph: 'Cupidatat ipsum nostrud est nostrud officia anim anim nisi eiusmod amet aliquip. Amet pariatur proident sint eiusmod cillum. Reprehenderit aliqua in amet sunt velit pariatur veniam nostrud qui laboris cupidatat. Proident proident minim ea amet laboris enim consectetur sunt. Ex ut ad id eu. Sit irure laboris duis labore dolor eu consequat id veniam do amet ut dolore. Nisi ea anim magna excepteur.',
            imageUrl: 'assets/t7b/features2.svg',
            buttonText: 'Login',
            reverse: true
        },
        {
            header: 'Id enim et ex in.',
            paragraph: 'Ullamco do nisi ad velit tempor officia amet. Minim reprehenderit quis nulla do adipisicing minim cupidatat in consectetur proident sint consequat voluptate mollit. Eiusmod veniam excepteur esse ex et magna. Laborum ex dolor laboris sunt incididunt labore deserunt qui nisi consectetur deserunt id veniam. Exercitation fugiat enim aute consectetur aute sunt.',
            imageUrl: 'assets/t7b/features3.svg',
            buttonText: 'Submit',
            reverse: false
        }
    ]
}