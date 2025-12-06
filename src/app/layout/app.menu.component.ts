import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                // label: 't7b',
                items: [
                    {label: 'Class', icon: 'pi pi-fw pi-home', routerLink: ['/t7b/class-list']},
                    {label: 'Send', icon: 'pi pi-fw pi-home', routerLink: ['/t7b/send']},
                    {label: 'Theses', icon: 'pi pi-fw pi-home', routerLink: ['/t7b/theses-list']},
                    {label: 'Templates', icon: 'pi pi-fw pi-home', routerLink: ['/t7b/template-list']},
                    {label: 'Guide', icon: 'pi pi-fw pi-home', routerLink: ['/t7b/guide-list']},
                    // TODO: add logout menu here
                ]
            },
        ];
    }
}