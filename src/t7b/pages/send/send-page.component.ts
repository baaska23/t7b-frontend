import { Component, Injector, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SendThesisComponent } from "src/t7b/components/send-thesis/send-thesis.component";
import { BaseListComponent } from "src/t7b/core/base-list/base-list.component";
import { SendService } from "src/t7b/services/send.service";

@Component({
    selector: 'app-send-page',
    templateUrl: './send-page.component.html',
    styleUrls: ['./send-page.component.css']
})
export class SendPageComponent extends BaseListComponent {

    constructor(
        injector: Injector,
        private service: SendService,
        private router: Router
    ) {
        super(injector, service)
    }
    
    cols = [
        { field: 'id', header: 'ID' },
        { field: 'name', header: 'Name' },
        { field: 'link', header: 'Link' },
        { field: 'date', header: 'Date' }
    ];

    theses = [
        {
            id: 1,
            name: 'Thesis A',
            link: 'https://example.com/thesis-a',
            date: '2025-11-18'
        },
        {
            id: 2,
            name: 'Thesis B',
            link: 'https://example.com/thesis-b',
            date: '2025-11-17'
        },
        {
            id: 3,
            name: 'Thesis A',
            link: 'https://example.com/thesis-a',
            date: '2025-11-18'
        },
        {
            id: 4,
            name: 'Thesis B',
            link: 'https://example.com/thesis-b',
            date: '2025-11-17'
        },
        {
            id: 5,
            name: 'Thesis A',
            link: 'https://example.com/thesis-a',
            date: '2025-11-18'
        },
        {
            id: 6,
            name: 'Thesis B',
            link: 'https://example.com/thesis-b',
            date: '2025-11-17'
        },
        {
            id: 7,
            name: 'Thesis A',
            link: 'https://example.com/thesis-a',
            date: '2025-11-18'
        },
        {
            id: 8,
            name: 'Thesis B',
            link: 'https://example.com/thesis-b',
            date: '2025-11-17'
        }
    ];
    
    onSend(){
        this._dialogRef = this._dialogService.open(SendThesisComponent, {
            width: '45vw',
            height: '35vw'
        })
        this._dialogRef.onClose.subscribe((v: string) => {})
    }

    // CRITICAL: connect with cloudflare r2
}