import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { COMMON_CONSTANT } from '../../../../constant/common.constant';

import { CommonEvent } from '../../../../event/common.event';

import { StorageService } from '@library/storage-service';
import { Layout, LayoutM, LayoutService } from '@library/layout-service';

@Component({
    selector: 'lib-layout-drawer',
    templateUrl: './layout-drawer.component.html',
    styleUrls: ['./layout-drawer.component.scss']
})

export class LayoutDrawerComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;

    orgID: any;

    layoutM = [new Layout()];
    selectedLayout: any;

    constructor(
        private router: Router,
        private storageService: StorageService,
        private layoutService: LayoutService,
        private commonEvent: CommonEvent,
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage(['currentOrgID']);

        this.commonEvent.layoutChange.subscribe((msg: any) => {
            this.getLayoutByOrgID();
        });
    }

    async getLayoutByOrgID() {
        this.layoutM = <LayoutM[]>await this.layoutService.getLayoutByOrgID(this.orgID);
        const layoutID = this.storageService.getStorage('layoutID');
        if (layoutID) {
            this.selectedLayout = this.layoutM.find(layout => layout.id == layoutID)
        } else {
            const defaultLayout = this.layoutM.find(layout => layout.isDefault);
            if (defaultLayout) {
                this.selectedLayout = defaultLayout;
                this.storageService.setStorage('layoutID', defaultLayout.id);
            }
        }
    }

    changeLayout(layout: LayoutM) {
        this.storageService.setStorage('layoutID', layout.id);
        this.selectedLayout = layout;
        window.location.reload();
    }

    viewLayout(layoutID) {
        this.router.navigate([`layout/${layoutID}/list`]);
    }

}
