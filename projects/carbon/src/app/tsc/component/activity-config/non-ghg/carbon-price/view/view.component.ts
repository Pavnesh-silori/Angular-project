import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';

//tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styles: []
})
export class CarbonPriceViewComponent implements OnInit {
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    COMMON_CONSTANT = COMMON_CONSTANT;

    currentOrgID: any;
    activityKeyID: any;

    activityConfig: any;
    activityConfigSource: any;

    process: any;
    getProcessByIDCall: boolean = true;

    entity: any[] = [];
    entityTypeLabel: string = null;

    constructor(
        storageService: StorageService,
        activatedRoute: ActivatedRoute,
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
        this.activityKeyID = activatedRoute.snapshot.data.activityKeyID;
    }

    ngOnInit(): void {
    }

    ngAfterContentChecked() {
        if (this.activityConfig) {
            this.activityConfigSource = this.activityConfig.activityConfigSource;
            if (this.activityConfigSource.length) {
                this.entity = this.activityConfigSource[0].source;
            }
        }
    }
}