import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { CreateComponent } from '../run/create/create.component';

// tsc-library
import {
    MATERIAL_CONSTANT,
    ButtonTooltipEnum
} from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
    faPlus = faPlus;

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;

    activeLink: any;

    tab: any = [
        {
            label: 'CBAM Ledger',
            routerLink: '/cbam/ledger/page',
        },
        {
            label: 'Ongoing Runs',
            routerLink: '/cbam/run/page',
        },
        {
            label: 'CBAM Records',
            routerLink: '/cbam/activity-data/activity/chp-attribution/page',
        },
        {
            label: 'CBAM Reports',
            routerLink: '/cbam/report/page',
        }
    ];



    constructor(
        private dialog: MatDialog,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.setRoute();
            }
        });

        this.setRoute();
    }

    setRoute() {
        let currentPath = window.location.pathname;

        for (let i = 0; i < this.tab.length; i++) {
            if (currentPath == this.tab[i].routerLink) {
                this.activeLink = this.tab[i].routerLink;
                break;
            }
        }
    }

    openDialog() {
        const dialogRef = this.dialog.open(CreateComponent, {
            data: {},
            minWidth: '500px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && result.status) {
                let productID = result.newRunFG.productID;
                let productionRouteID = result.newRunFG.productionRouteID;
                let startDate = result.newRunFG.reportingPeriod.startDate;
                let endDate = result.newRunFG.reportingPeriod.endDate;

                const queryParams = { productID: productID, productionRouteID: productionRouteID, startDate: startDate, endDate: endDate };
                const navigationExtras = { queryParams: queryParams };

                this.router.navigate(['/cbam/run/create'], navigationExtras);
            }
        });
    }
}
