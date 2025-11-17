import { Component, Injector } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from 'src/app/demo/service/product.service';
import { BaseListComponent } from 'src/t7b/core/base-list/base-list.component';
import { LoginDialogComponent } from 'src/t7b/dialogs/login/login-dialog.component';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends BaseListComponent {
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
        this._dialogRef.onClose.subscribe((v: string) => {})
    }
}