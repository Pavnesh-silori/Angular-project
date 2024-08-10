import { Component, OnInit } from '@angular/core';

import { LatPasswordChange, LatPasswordChangeM } from '@Account/model/security.model';
// import { SecurityService } from '@AccountSrc/app/net-zero/service/security.service';

import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordDialog } from '@Account/component/profile/update/dialog/change-password-dialog/change-password-dialog.component';

import * as moment from 'moment';
import { COMMON_CONSTANT } from '@library/tsc-common';
import { SecurityController } from '@Account/controller/security.controller';
@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styles: [
    ]
})
export class ChangePasswordComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;

    latPasswordChange = new LatPasswordChange();

    constructor(
        private securityController: SecurityController,
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.getLastPasswordChangeInfo();
    }

    getLastPasswordChangeInfo() {
        this.securityController.getLastPasswordChangeInfo().subscribe(
            (changePasswordRes: LatPasswordChangeM) => {
                if (changePasswordRes) {
                    this.latPasswordChange = changePasswordRes;
                } else {
                    this.latPasswordChange = new LatPasswordChange();
                }
            },
            (error) => {
                console.log('error in getLastPasswordChangeInfo -', error);
                this.latPasswordChange = new LatPasswordChange();
            }
        );
    }

    getTimeRemaining(creationDate) {
        return (this.latPasswordChange.lastChangeDate)?(moment.utc(creationDate).fromNow()):COMMON_CONSTANT.HYPHEN;
    }

    changePassword() {
        const dialogRef = this.dialog.open(ChangePasswordDialog, {
            width: '500px',
            maxWidth: '600px'
        });
    }

}
