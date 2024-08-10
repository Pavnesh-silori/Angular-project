import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { UserM } from '@Account/model/user.model';
// import { EnterpriseEvent } from '@EnterpriseNetZero/common/event/enterprise.event';

import { UserService } from '@Account/service/user.service';
import { UserController } from '@Account/controller/user.controller';

// library
import { ProfileImg } from '@library/user-service';
import { COMMON_CONSTANT } from '@library/tsc-common';

import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { UserService as LibraryUserService } from '@library/user-service';
// /library

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    ProfileImg = ProfileImg;
    COMMON_CONSTANT = COMMON_CONSTANT;

    userID: any;
    currentOrgID: any;

    userM: UserM;
    userNewsLetterSubFC: FormControl = new FormControl();

    constructor(
        private userService: UserService,
        public libraryUserService: LibraryUserService,
        // private enterpriseEvent: EnterpriseEvent,
        private storageService: StorageService,
        private toastrService: ToastrService,
        private userController: UserController
    ) { }

    ngOnInit(): void {
        this.userID = this.storageService.getStorage('userID');
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.getUserByID(this.userID);
    }

    async getUserByID(userID) {
        this.userM = <UserM>await this.userService.getUserByID(userID);

        // this.enterpriseEvent._ActiveUser.next(this.userM);
        this.userNewsLetterSubFC.patchValue(this.userM['newsLetterSub']);
    }

    updateNewsLetterStatus() {
        let newsLetterJson = { userNewsLetterSub: this.userNewsLetterSubFC.value };
        this.userController.updateUserByID(this.userID, newsLetterJson)
            .subscribe(() => {
                if (this.userNewsLetterSubFC.value) {
                    this.toastrService.openToast('Success', 'NewsLetter status updated', 'success');
                } else {
                    this.toastrService.openToast('Info', 'You have unsubscribed from our Newsletter. Subscribe again to stay updated with our feature releases and bug fixes.', 'info');
                }
                this.getUserByID(this.userID);
            });
    }

}
