import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { DeclineRequestDialog } from '../_shared/decline-request/decline-request.component';
import { RequestEmissionDataDialogComponent } from '@carbon/component/subsidiary-emission-data/request-emission-data-dialog/request-emission-data-dialog.component';

import { ReceivedEmissionRequestM } from '@carbon/model/received-emission-request.model';
import { RequestStatusEnum } from '@carbon/enum/subsidiary.enum';

import { SubsidiaryController } from '@carbon/controller/subsidiary.controller';

// tsc-library
import { COMMON_CONSTANT, DialogEnum } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';

// /tsc-library

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;

    currentOrgID: any;

    requestID: any;
    request: ReceivedEmissionRequestM;
    RequestStatus = RequestStatusEnum;

    assignee: any[];
    consolidationApproaches: any = [];

    constructor(
        private dialog: MatDialog,
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private subsidiaryController: SubsidiaryController,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.activatedRoute.params
            .subscribe(params => {
                this.requestID = params['responseID'];
                this.getRequestByID(this.requestID);
            });
    }

    getRequestByID(requestID) {
        this.subsidiaryController.getEmissionRequestByID(requestID)
            .subscribe((res: ReceivedEmissionRequestM) => {
                this.request = res;
                this.consolidationApproaches = this.request['consolidationApproach'].map(consilidationApproach => consilidationApproach.name)

                if (this['request'].assigneeEmail.length) this.assignee = this['request'].assigneeEmail;
                else this.assignee = this.request['assigneeUser'].map(assignee => assignee['name']);
            })
    }

    confirmDeclineRequest(parentOrg) {
        const dialogRef = this.dialog.open(DeclineRequestDialog, {
            data: { parentOrgName: parentOrg['name']},
            minWidth: '500px'
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result?.CARBON_CONSTANT.DECLINE_DR) {
                this.declineRequest(this.requestID, result['reason']);
            }
        })
    }

    declineRequest(requestID, reason) {
        let json = { note: reason };
        this.subsidiaryController.declineRequest(this.currentOrgID, requestID, json)
            .subscribe((declineRes) => {
                this.getRequestByID(requestID);
            });
    }

    enterData() {
        let dialogRef;
        dialogRef = this.dialog.open(RequestEmissionDataDialogComponent, {
            data: {
                requestID: this.requestID,
                source: 'INTERNAL'
            },
            minWidth: '70vw',
            maxWidth: '70vw',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result == DialogEnum.SUCCESS_DR) {
                    this.getRequestByID(this.requestID);
                }
            })
    }
}
