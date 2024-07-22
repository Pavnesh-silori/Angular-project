import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { AssignmentController } from '@report-framework/controller/assignment.controller';

//tsc-library
import { DialogResponseEnum, ResponseM } from '@library/tsc-common';
import { ProfileImg, UserService } from '@library/user-service';
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
// /tsc-library/

@Component({
    selector: 'app-remainder',
    templateUrl: './reminder.component.html',
    styles: []
})
export class ReminderComponent implements OnInit {
    currentOrgID: any;
    assigneeApproverList: any[] = [];
    type: string;
    sectionGroupMetricList: any[] = [];
    configIntervalID: number;

    constructor(
        private activatedRoute: ActivatedRoute,
        public dialogRef: MatDialogRef<ReminderComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private assignmentController: AssignmentController,
        private userService: UserService,
        private storageService: StorageService,
        private toastrService: ToastrService

    ) {
        this.dialogRef.disableClose = true;
        this.assigneeApproverList = data.assigneeApproverList;
        this.type = data.type;
        this.sectionGroupMetricList = data.sectionGroupMetricList;
        this.configIntervalID = data.configIntervalID;
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
    }

    close() {
        this.dialogRef.close();
    }

    defaultImage(user: any) {
        return this.userService.defaultImage(
            (user.firstName ? user.firstName + ' ' : '') + (user.lastName ? user.lastName : ''),
            ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW
        );
    }

    sendReminder() {
        if (this.type == 'assignees') {
            this.assignmentController.sendReminderAssignee(this.currentOrgID, this.configIntervalID, this.sectionGroupMetricList).subscribe((res: ResponseM) => {

                if (res.status == 'success') {
                    this.dialogRef.close(DialogResponseEnum.SUCCESS);
                }
            }, error => {
                console.error('Error updating data:', error);
            });
        }
        else if (this.type == 'approvers') {
            this.assignmentController.sendReminderApprover(this.currentOrgID, this.configIntervalID, this.sectionGroupMetricList).subscribe((res: ResponseM) => {
                if (res.status == 'success') {
                    this.dialogRef.close(DialogResponseEnum.SUCCESS);
                }
            }, error => {
                console.error('Error updating data:', error);
            });
        }
    }
}
