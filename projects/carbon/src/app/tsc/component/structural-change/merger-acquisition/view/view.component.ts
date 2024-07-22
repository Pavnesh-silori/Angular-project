import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { StructuralChangeTabTypeEnum, StructuralChangeTypeEnum } from '@carbon/enum/ghg.enum';
import { StructuralChangeData, StructuralChangeDataM } from '@carbon/model/ghg-base-year.model';

import { GhgBaseYearController } from '@carbon/controller/ghg-base-year.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styles: [
    ]
})
export class ViewComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;

    tabType: any;
    type: any;

    rootOrgID: any;
    recordID: any;

    structuralChangeRes = new StructuralChangeData();

    constructor(
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private ghgBaseYearController: GhgBaseYearController
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');

        this.activatedRoute.data.subscribe(data => {
            this.tabType = data['tabType'];
            if (this.tabType == StructuralChangeTabTypeEnum.MERGER_ACQUISITION) {
                this.type = StructuralChangeTypeEnum.MERGER_ACQUISITION;
            } else if (this.tabType == StructuralChangeTabTypeEnum.DIVESTMENT) {
                this.type = StructuralChangeTypeEnum.DIVESTMENT;
            }
        })

        this.activatedRoute.params.subscribe((param) => {
            this.recordID = param['recordID']
        });

        this.getStructuralChangeOrgByID();
    }

    getStructuralChangeOrgByID() {
        this.ghgBaseYearController.getStructuralChangeOrgByID(this.rootOrgID, this.recordID, this.type).subscribe(
            (res: StructuralChangeDataM) => {
                if (res) {
                    this.structuralChangeRes = res;
                }
                else {
                    this.structuralChangeRes = new StructuralChangeData();
                }
            },
            (error) => {
                console.log('error in getStructuralChangeOrgByID -', error);
                this.structuralChangeRes = new StructuralChangeData();
            }
        );
    }

}
