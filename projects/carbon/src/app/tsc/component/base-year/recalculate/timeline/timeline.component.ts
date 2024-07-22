import { Component, Input, OnInit } from '@angular/core';

import {
    MatDialog,
    MatDialogConfig
} from '@angular/material/dialog';

import { ActivityChangeDialog } from '../changes/activity-change/activity-change.component';
import { GroupLevelChangeComponent } from '../changes/group-level/group-level.component';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

// tsc-library
import { ProfileImg, UserService } from '@library/user-service';
import { ButtonLabelEnum } from '@library/tsc-common';
// tsc-library

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['../recalculation-history/recalculation-history.component.scss']
})
export class TimelineComponent implements OnInit {

    ButtonLabelEnum = ButtonLabelEnum;

    recalculationTime: any;

    @Input() rootOrgID;
    @Input() baseYearKeyID;
    @Input() recalculationID: any;
    @Input() timeline: any[] = [];

    constructor(
        private dialog: MatDialog,
        private userService: UserService
    ) { }

    ngOnInit(): void { }

    icon = (action: string) => {
        switch (action) {
            case CARBON_CONSTANT.ACTIVITY_DATA_UPDATE:
                return 'edit';
            case 'DELETE':
                return 'delete';
            case CARBON_CONSTANT.ACTIVITY_DATA_CREATE:
                return 'add';
            case CARBON_CONSTANT.SETTING_CHANGE:
                return 'tune';
            default:
                return 'display_settings';
        }
    }

    action = (action: string) => {
        switch (action) {
            case CARBON_CONSTANT.ACTIVITY_DATA_UPDATE:
                return 'edited';
            case 'DELETE':
                return 'deleted';
            case CARBON_CONSTANT.ACTIVITY_DATA_CREATE:
                return 'created';
            case CARBON_CONSTANT.SETTING_CHANGE:
                return 'edited';
            default:
                return action;
        }
    }

    entity = (timeline: any) => {
        let activityName: string = timeline['activityStdName'];
        activityName = activityName.toLowerCase();
        let _case = timeline['trigger'] + '&' + timeline['dataType'];
        switch (_case) {
            case 'SETTING_CHANGE&ACTIVITY_DATA':
                return `calculation preferences`;
            case 'ACTIVITY_DATA_UPDATE&ACTIVITY_DATA':
                return `a ${activityName} record`;
            case 'ACTIVITY_DATA_CREATE&ACTIVITY_DATA':
                return `a new ${activityName} record`;
            default:
                return timeline;
        }
    }

    viewActivityChange(entity, isUpdate) {
        let config: MatDialogConfig = CARBON_CONSTANT.RIGHT_DIALOG_CONFIG;
        config['minWidth'] = isUpdate ? '60vw' : '40vw';
        config['data'] = {
            isUpdate: isUpdate,
            rootOrgID: this.rootOrgID,
            baseYearKeyID: this.baseYearKeyID,
            cedID: entity['cedID'],
            activityDataID: entity['dataID'],
            activityKeyID: entity['activityStdKeyID'],
            showRedirectToView: false
        };

        this.dialog.open(ActivityChangeDialog, config);
    }

    viewGroupLevelChange(entity, isUpdate) {
        let config: MatDialogConfig = CARBON_CONSTANT.RIGHT_DIALOG_CONFIG;
        config['minWidth'] = isUpdate ? '60vw' : '40vw';
        config['data'] = {
            rootOrgID: this.rootOrgID,
            baseYearKeyID: this.baseYearKeyID,
            recalculationID: this.recalculationID,
            recalculationTrigger: entity['trigger'],
            recalculationRequestID: entity['recalculationRequestID'],
        };

        this.dialog.open(GroupLevelChangeComponent, config);
    }

    viewChange(entity) {
        switch (entity['trigger']) {
            case CARBON_CONSTANT.ACTIVITY_DATA_CREATE:
                this.viewActivityChange(entity, false);
                break;
            case CARBON_CONSTANT.ACTIVITY_DATA_UPDATE:
                this.viewActivityChange(entity, true);
                break;
            case CARBON_CONSTANT.SETTING_CHANGE:
                this.viewGroupLevelChange(entity, true);
                break;
            case CARBON_CONSTANT.CUSTOM_EMISSION_FACTOR_CHANGE:
                this.viewGroupLevelChange(entity, true);
                break;
            case CARBON_CONSTANT.CUSTOM_ESTIMATION_FACTOR_CHANGE:
                this.viewGroupLevelChange(entity, true);
                break;
            default:
                console.log('view change default');
        }
    }


    defaultImage(user: any) {
        user = user.split(' ');
        let firstName = user[0];
        let lastName = user[1];
        return this.userService.defaultImage(
            (firstName ? firstName + ' ' : '') + (lastName ? lastName : ''),
            ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW
        );
    }
}
