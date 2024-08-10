import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { FacilityI, Facility } from '../tsc/model/facility.model';
import { FacilityService } from '../tsc/service/facility.service';

import { CreateUpdateComponent } from '../create-update/create-update.component';

// tsc-library
import {
    COMMON_CONSTANT,
    MATERIAL_CONSTANT,
    ButtonTooltipEnum,
    DialogEnum,
    FormAction,
    StatusService
} from '@library/tsc-common';

import { StorageService } from '@library/storage-service';
// tsc-library

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styles: [
    ]
})

export class ViewComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    FormAction = FormAction;

    rootOrgID: any;
    facilityID: any;
    facility = new Facility();

    constructor(
        private dialog: MatDialog,
        private activatedRoute: ActivatedRoute,
        private facilityService: FacilityService,
        private storageService: StorageService,
        public statusService: StatusService
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');

        this.activatedRoute.params.subscribe((param) => {
            this.facilityID = param['facilityID'];
            this.facilityID = 123456781;
            this.getFacilityByID(this.rootOrgID, this.facilityID);
        });
    }

    async getFacilityByID(rootOrgID: any, facilityID: any) {
        this.facility = <FacilityI>await this.facilityService.getFacilityByID(this.rootOrgID, this.facilityID);
    }

    updateFacility = (action, facility: FacilityI) => {
        const dialogRef = this.dialog.open(CreateUpdateComponent,
            {
                height: '100vh',
                width: '600px',
                position: { right: '-2px', top: '0px' },
                disableClose: true,
                panelClass: 'matDialogContainerOverride',
                data: {
                    action: action,
                    facilityID: facility.id
                }
            });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if(result.status == DialogEnum.SUCCESS_DR) {
                    this.getFacilityByID(this.rootOrgID, this.facilityID);
                }
            });
    }

}
