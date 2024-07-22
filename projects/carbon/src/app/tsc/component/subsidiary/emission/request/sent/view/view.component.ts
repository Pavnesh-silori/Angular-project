import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { CreateComponent } from '../create-update/create.component';

import { RequestStatusEnum, SubsidiaryTypeEnum } from '@carbon/enum/subsidiary.enum';
import { EmissionRequestM } from '@carbon/model/emission-request.model'; 

import { SubsidiaryController } from '@carbon/controller/subsidiary.controller';

// tsc-library
import { COMMON_CONSTANT, DialogEnum } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    RequestStatus = RequestStatusEnum;
    SubsidiaryType = SubsidiaryTypeEnum

    requestID: any;
    request: EmissionRequestM;

    assignee: any[];
    consolidationApproaches: any = [];

    constructor(
        private dialog: MatDialog,
        private activatedRoute: ActivatedRoute,
        private subsidiaryController: SubsidiaryController,
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params
            .subscribe(params => {
                this.requestID = params['requestID'];
                this.getRequestByID(this.requestID);
            });
    }

    getRequestByID(requestID) {
        this.subsidiaryController.getEmissionRequestByID(requestID)
            .subscribe((res: EmissionRequestM) => {
                this.request = res;
                if (this['request'].assigneeEmail.length) this.assignee = this['request'].assigneeEmail;
                else this.assignee = this.request['assigneeUser'].map(assignee => assignee['name']);

                this.consolidationApproaches = this.request['consolidationApproach'].map(consilidationApproach => consilidationApproach.name);
            });
    }

    editEmissionRequest() {
        const dialogRef = this.dialog.open(CreateComponent, {
            data: { requestID: this.requestID },
            minWidth: '40vw',
            maxWidth: '40vw',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });

        dialogRef.afterClosed().subscribe((res) => {
            if (res == DialogEnum.SUCCESS_DR)
                this.getRequestByID(this.requestID);
        });
    }
}
