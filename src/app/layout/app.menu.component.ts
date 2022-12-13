import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from 'src/app/services/app.layout.service';


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
                items: [
                    { label: 'Company', icon: 'pi pi-fw pi-building', routerLink: ['/'] },
                    { label: 'Tenant', icon: 'pi pi-fw pi-user', routerLink: ['/tenant'] },
                    { label: 'Task Sale Transaction', icon: 'pi pi-fw pi-dollar', routerLink: ['/transaction'] },
                ]
            }, 
        ];
    }
}