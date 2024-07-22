import { Component, OnInit } from '@angular/core';

import {
    faBullseye,
    faEllipsisV,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

import { MatDialog } from '@angular/material/dialog';

import { DeleteGHGBaseYearDialog } from '../delete/delete-dialog/delete-dialog.component';
import { DeleteDialog } from '@carbon/component/sbti/setting/_shared/delete/delete-dialog.component';

import { BaseYearEnum } from '@carbon/enum/base-year.enum';
import { SbtiSettingM } from '@carbon/model/sbti.model';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

import { BaseYearController } from '@carbon/controller/base-year.controller';

import { SbtiService } from '@carbon/service/sbti.service';
import { PreferenceService } from '@carbon/service/preference.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, DialogEnum } from '@library/tsc-common';
// tsc-library

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

    ButtonLabelEnum = ButtonLabelEnum;
    CARBON_CONSTANT = CARBON_CONSTANT;

    BaseYear = BaseYearEnum;
    faGlobe = faGlobe;
    faBullseye = faBullseye;
    faEllipsisV = faEllipsisV;

    currentOrgID: any;

    isGhgBaseYearSetup: boolean = false;
    isSBTiBaseYearSetup: boolean = false;
    isBaseYearSameAsGHG: String = 'DEFAULT';

    loading: boolean = true;
    isPreferenceSet: boolean = false;

    constructor(
        private sbtiService: SbtiService,
        private storageService: StorageService,
        private preferenceService: PreferenceService,
        private matDialog: MatDialog,
        private baseYearController: BaseYearController,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.getOrgPreference();
    }

    async getOrgPreference() {
        let preference = await this.preferenceService.getOrgPreference(this.currentOrgID);
        this.loading = false;
        if (preference.preferenceID != null) {
            this.isPreferenceSet = true;

            this.getSBTiSettingByOrgID();
            this.getBaseYearByOrgIDAndType();
        }
    }

    async getSBTiSettingByOrgID() {
        let settings = <SbtiSettingM>await this.sbtiService.getSbtiSettingsByOrgID(this.currentOrgID);

        if (settings?.orgSizeKeyID) {
            this.isBaseYearSameAsGHG = settings?.isBaseYearSameAsGHG ? CARBON_CONSTANT.YES : CARBON_CONSTANT.NO;
        }
    }

    getBaseYearByOrgIDAndType() {
        this.baseYearController.getBaseYearByType(this.currentOrgID, BaseYearEnum.GHG_BASE_YEAR)
            .subscribe((res: any) => {
                this.isGhgBaseYearSetup = res?.baseYear ? true : false;
            });

        this.baseYearController.getBaseYearByType(this.currentOrgID, BaseYearEnum.SBTI_BASE_YEAR)
            .subscribe((res: any) => {
                this.isSBTiBaseYearSetup = res?.baseYear ? true : false;
            })
    }

    confirmDeleteBaseYear(baseYearType) {
        if (baseYearType == BaseYearEnum.GHG_BASE_YEAR) {
            const title = `Delete ${this.isBaseYearSameAsGHG == CARBON_CONSTANT.YES ? 'GHG and SBTi' : 'GHG'} Base year?`;
            const confirmationMsg = "Are you sure you want to delete base year?";
            const btnLabel = 'Delete';

            const dialogRef = this.matDialog.open(DeleteGHGBaseYearDialog, {
                data: {
                    title: title,
                    isBaseYearSameAsGHG: this.isBaseYearSameAsGHG,
                    confirmationMsg: confirmationMsg,
                    btnLabel: btnLabel
                },
                minWidth: '500px',
                maxWidth: '600px'
            });
            dialogRef.afterClosed().subscribe(res => {
                if (res == DialogEnum.DELETE_DR) { this.deleteBaseYear(baseYearType); }
            });
        } else {
            const title = "Delete SBTi Base year?";
            let message = "All targets for this SBTi base year will be marked inactive.";
            const confirmationMsg = "Are you sure you want to delete base year?";
            const btnLabel = 'Delete';
            const dialogRef = this.matDialog.open(DeleteDialog, {
                data: {
                    title: title,
                    message: message,
                    confirmationMsg: confirmationMsg,
                    btnLabel: btnLabel
                },
                minWidth: '500px',
                maxWidth: '600px'
            });
            dialogRef.afterClosed().subscribe(res => {
                if (res ==  DialogEnum.DELETE_DR) { this.deleteBaseYear(baseYearType); }
            });
        }
    }

    deleteBaseYear(baseYearType) {
        this.baseYearController.deleteBaseYear(this.currentOrgID, baseYearType)
            .subscribe(res => {

                this.getSBTiSettingByOrgID();
                this.getBaseYearByOrgIDAndType();
            })
    }

}
