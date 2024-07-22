import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import * as moment from 'moment-timezone';

import { AuditTrail } from '@report-framework/model/reporting-framework-data.model';

import { ReportingFrameworkDataController } from '@report-framework/controller/reporting-framework-data.controller';

// tsc-library
import { ProfileImg, UserService } from '@library/user-service';
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, DialogEnum, MessageAlertTypeEnum } from '@library/tsc-common';
import { MessageAlertIconEnum } from '@library/tsc-common';
import { DateService } from '@library/date';
import { ViewChangesComponent } from './view-changes/view-changes.component';
// /tsc-library/

@Component({
    selector: 'app-audit-trail',
    templateUrl: './audit-trail.component.html',
    styleUrls: ['./audit-trail.component.scss']
})
export class AuditTrailComponent implements OnInit {
    rootOrgID: any;

    auditT = new AuditTrail();
    sectionID: any
    groupID: any;
    configIntervalID: any = null;
    msgTrail: any[] = [];
    messageAlertTypeEnum = MessageAlertTypeEnum;
    messageAlertIconEnum = MessageAlertIconEnum;

    constructor(
        // public dialogRef: MatDialogRef<AuditTrailComponent>,
        // @Inject(MAT_DIALOG_DATA) public data,
        private reportingFrameworkDataController: ReportingFrameworkDataController,
        private storageService: StorageService,
        private userService: UserService,
        private dateService: DateService,
        private dialog: MatDialog
    ) {
        // this.dialogRef.disableClose = true;
        // this.sectionID = data.sectionID;
        // this.groupID = data.groupID;
        // this.configIntervalID = data.configIntervalID;
    }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.getAuditTrailDetails();
    }

    getAuditTrailDetails() {
        // this.reportingFrameworkDataController.getAuditTrailDetails(this.rootOrgID, this.sectionID, this.groupID, this.configIntervalID).subscribe((response) => {
        //     this.auditT = response;
        //     this.msgTrail = response.msgTrail;
        // },
        //     error => {
        //         console.log('error in getAuditTrailDetails() -', error);
        //     });
    }

    defaultImage(user: any) {
        return this.userService.defaultImage(
            (user.firstName ? user.firstName + ' ' : '') + (user.lastName ? user.lastName : ''),
            ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW
        );
    }

    getDateTime(dateTime) {
        const utcDateTime = moment.utc(dateTime).format();
        return ' ' + this.dateService.convertUtcToTimeZone(utcDateTime, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MMM-DD h:mm a')
    }

    viewChanges() {
        const dialogRef = this.dialog.open(ViewChangesComponent,
            {
                // data: {
                //     dataSource: data
                // },
                height: '100vh',
                width: '800px',
                position: { right: '-2px', top: '0px' },
                disableClose: true,
                panelClass: 'matDialogContainerOverride',
            });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result == DialogEnum.SUCCESS_DR) {
                    // this.refreshBtn.nativeElement.click();
                }
            });
    }
}
