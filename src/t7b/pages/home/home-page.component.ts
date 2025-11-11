import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "src/app/demo/service/product.service";
import { BaseListComponent } from "src/t7b/core/base-list/base-list.component";
import { Injector } from "@angular/core";
import { LoginDialogComponent } from "src/t7b/dialogs/login/login-dialog.component";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent extends BaseListComponent {
    constructor(
        injector: Injector,
        private sampleService: ProductService,
        private router: Router
    ) {
        super(injector, sampleService);
    }

    handleClick() {
        this._dialogRef = this._dialogService.open(LoginDialogComponent, {
            header: 'Нэвтрэх',
            width: '25vw',
            height: '15vw'
        })
        this._dialogRef.onClose.subscribe((v: string) => {});
    }
}