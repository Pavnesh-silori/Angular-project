import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { EscalationLevelCount, EscalationLevelCountM, EscalationLevelInfo, EscalationLevelInfoM } from '../../../model/escalation.model';

import { EscalationController } from '../../../controller/escalation.controller';

import { CreateUpdateEscalationComponent } from '../../escalation/create-update/create-update.component';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, COMMON_CONSTANT, DialogEnum, DialogOneComponent, DialogOneEnum, MATERIAL_CONSTANT, PageTitleEnum, ResponseM } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    ButtonLabelEnum = ButtonLabelEnum;
    PageTitleEnum = PageTitleEnum;
    DialogEnum = DialogEnum;

    orgID: any;
    alertRuleID: any;

    escalationLevelJSON: any[] = [];

    escalationLevelCountM = new EscalationLevelCount();
    escalationLevelInfoM = [new EscalationLevelInfo()];

    constructor(
        private dialog: MatDialog,
        private activatedRoute: ActivatedRoute,
        private escalationController: EscalationController,

        // tsc-library
        private storageService: StorageService,
        private toastrService: ToastrService
        // /tsc-library/
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.getEscalationLevelCount();

        this.activatedRoute.params.subscribe((pathParam) => {
            if (pathParam.alertID != null) {
                this.alertRuleID = pathParam.alertID;
            }
        })
        this.getAllLevelEscalation();
    }

    getEscalationLevelCount() {
        this.escalationController.getEscalationLevelCount(this.orgID).subscribe((escalationLevelCountRes: EscalationLevelCountM) => {
            this.escalationLevelCountM = escalationLevelCountRes;

            if (this.escalationLevelCountM.level && this.escalationLevelCountM != null) {
                this.escalationLevelJSON = this.getEscalationLevelJSON(this.escalationLevelCountM);
            }

        }, error => {
            console.log('error in getEscalationLevelCount() -', error);
        })
    }

    getAllLevelEscalation() {
        this.escalationController.getAllLevelEscalation(this.orgID, this.alertRuleID).subscribe((escalationLevelRes: EscalationLevelInfoM[]) => {
            this.escalationLevelInfoM = escalationLevelRes;
        }, error => {
            console.log('error in getAllLevelEscalation() -', error);
        })
    }

    getEscalationLevelJSON(escalationLevel) {
        const levelsArray = [];

        for (let i = 1; i <= escalationLevel.level; i++) {
            levelsArray.push({
                id: i,
                name: `Level ${i}`
            });
        }

        return levelsArray;
    }

    isLevelConfigured(levelId: number): boolean {
        return this.escalationLevelInfoM?.some(level => level.level == levelId);
    }

    getCorresondingEscLevelConfig(levelId: number): any {
        return this.escalationLevelInfoM?.find(level => level.level == levelId);
    }

    hasEscalationDataForPreviousLevel(levelId: number): boolean {
        return levelId > 1 && this.hasEscalationDataForLevel(levelId - 1);
    }

    hasEscalationDataForLevel(levelId: number): boolean {
        const escalationData = this.escalationLevelInfoM?.find(level => level.level == levelId);
        return !!escalationData;
    }
    

    createUpdateEscalationRuleDialog(levelID: number, action: PageTitleEnum, escLevelConfig?: any) {
        const dialog = this.dialog.open(CreateUpdateEscalationComponent,
            {
                data: {
                    alertRuleID: this.alertRuleID,
                    levelID: levelID,
                    action: action,
                    escLevelConfig: escLevelConfig
                },
                minWidth: '50vw',
                maxWidth: '50vw',
                height: '100%',
                position: { right: '-2px', top: '0px' }
            });
        dialog.afterClosed().subscribe((result) => {
            if (result == DialogEnum.SUCCESS_DR) {
                this.getAllLevelEscalation();
            }
        })
    }

    openDeleteEscRuleDialog(levelID, escLevelConfig) {

        const escalationRuleID = escLevelConfig.escalationRuleID;

        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '500px',
            maxWidth: '500px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'dangerous',
                header: 'Delete escalation ?',
                body: 'Escalation configuration for level ' + '<b>' + levelID + '</b>' + ' will be deleted permanently.</br></br>Are you sure you want to continue?',
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            if (res) {
                this.deleteEscalationRuleDialog(escalationRuleID);
            }
        })
    }

    deleteEscalationRuleDialog(escalationRuleID) {
        this.escalationController.deleteEsclationByLevelID(this.orgID, escalationRuleID).subscribe((deleteRes: ResponseM) => {

            window.location.reload();

            let toast = this.toastrService.getToastStatus(deleteRes.status);
            this.toastrService.openToast(toast.title, deleteRes.message, toast.color);
        });
    }

}