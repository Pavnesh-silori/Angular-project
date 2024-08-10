import { Component, Inject, OnInit } from '@angular/core';

import { ProfileImg } from '@library/user-service'
import { User, UserM } from '@library/user-service';

import { StorageService } from '@library/storage-service';
import { UserService } from '@library/user-service';
import { TSCCommonService } from '../../../../service/tsc-common.service';
import { ApplicationService } from '@library/application-service';

@Component({
    selector: 'lib-user-drawer',
    templateUrl: './user-drawer.component.html',
    styleUrls: ['./user-drawer.component.scss']
})

export class UserDrawerComponent implements OnInit {
    ProfileImg: ProfileImg;

    userID: any;
    userM = new User();

    constructor(
        @Inject('environment') public environment: any,
        private storageService: StorageService,
        private userService: UserService,
        private applicationService: ApplicationService,
        public tscCommonService: TSCCommonService,
    ) { }

    ngOnInit(): void {
        this.userID = this.storageService.getStorage('userID');
        this.getUserByID();
    }

    async getUserByID() {
        this.userM = <UserM>await this.userService.getUserByID(this.userID);
    }

    defaultImage(userM: UserM) {
        return this.userService.defaultImage(
            (userM?.['firstName'] ? userM['firstName'] + ' ' : '') +
            (userM?.['lastName'] == null ? '' : userM['lastName']),
            ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW);
    }

    logout() {
        let applicationKeyID: string = '';

        applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.applicationService.appBtnLogout(applicationKeyID);
    }

}