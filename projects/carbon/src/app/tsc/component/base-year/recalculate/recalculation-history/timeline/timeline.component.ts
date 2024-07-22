import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import { 
    MAT_DIALOG_DATA, 
    MatDialog, 
    MatDialogConfig 
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';


import { startWith } from 'rxjs/operators';

import { StorageService } from '@library/storage-service';

import { ActivityChangeDialog } from '../../changes/activity-change/activity-change.component';
import { GroupLevelChangeComponent } from '../../changes/group-level/group-level.component';
import { TimelineController } from '@carbon/controller/timeline.controller';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

@Component({
    selector: 'dialog-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['../recalculation-history.component.scss']
})
export class TimelineComponent implements OnInit {

    recalculatedOn: any;
    recalculationID: any;
    recalculationTime: any;

    timeline: any[] = [];

    rootOrgID;
    baseYearKeyID;
    totalCount: number = 0;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private dialog: MatDialog,
        private storageService: StorageService,
        private timelineController: TimelineController,
        @Inject(MAT_DIALOG_DATA) private data,
    ) {
        this.baseYearKeyID = data['baseYearKeyID'];
        this.recalculatedOn = data['recalculatedOn'];
        this.recalculationID = data['recalculationID'];
        this.recalculationTime = data['recalculationTime'];
    }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
    }

    ngAfterViewInit() {
        this.paginator.page.pipe(startWith({})).subscribe(() => {
            this.getRecalculationHistory(this.paginator.pageIndex + 1, this.paginator.pageSize);
        });
    }

    getRecalculationHistory(pageNo, pageSize) {
        this.timelineController.getRecalculationHistoryTimeline(this.rootOrgID, this.baseYearKeyID, pageNo, pageSize, this.recalculationID)
            .subscribe((history: any) => {
                this.timeline = history['records'];
                this.totalCount = history['totalCount'];
            })
    }

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
        let config: MatDialogConfig = CARBON_CONSTANT['RIGHT_DIALOG_CONFIG'];
        config['minWidth'] = isUpdate ? '60vw' : '40vw';
        config['data'] = {
            isUpdate: isUpdate,
            rootOrgID: this.rootOrgID,
            activityDataID: entity['dataID'],
            activityKeyID: entity['activityStdKeyID'],
            baseYearKeyID: this.baseYearKeyID,
            showRedirectToView: false
        };

        this.dialog.open(ActivityChangeDialog, config);
    }

    viewGroupLevelChange(entity, isUpdate) {
        let config: MatDialogConfig = CARBON_CONSTANT['RIGHT_DIALOG_CONFIG'];
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
            case CARBON_CONSTANT['ACTIVITY_DATA_CREATE']:
                this.viewActivityChange(entity, false);
                break;
            case CARBON_CONSTANT['ACTIVITY_DATA_UPDATE']:
                this.viewActivityChange(entity, true);
                break;
            case CARBON_CONSTANT['SETTING_CHANGE']:
                this.viewGroupLevelChange(entity, true);
                break;
            case CARBON_CONSTANT['CUSTOM_EMISSION_FACTOR_CHANGE']:
                this.viewGroupLevelChange(entity, true);
                break;
            case CARBON_CONSTANT['CUSTOM_ESTIMATION_FACTOR_CHANGE']:
                this.viewGroupLevelChange(entity, true);
                break;
            default:
                console.log('view change default');
        }
    }

}
