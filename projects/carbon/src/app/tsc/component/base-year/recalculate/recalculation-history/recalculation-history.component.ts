import { Component, OnInit, ViewChild } from '@angular/core';

import { 
    MatDialog, 
    MatDialogConfig 
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

import { ActivatedRoute } from '@angular/router';

import { startWith } from 'rxjs/operators';

import { TimelineComponent } from './timeline/timeline.component';

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

import { TimelineController } from '@carbon/controller/timeline.controller';

import { StorageService } from '@library/storage-service';

// tsc-library
import { ProfileImg, UserService } from '@library/user-service';
import { TABLE_CONSTANT } from '@library/tsc-common';
// tsc-library


@Component({
    selector: 'app-recalculation-history',
    templateUrl: './recalculation-history.component.html',
    styleUrls: ['./recalculation-history.component.scss']
})
export class RecalculationHistoryComponent implements OnInit {

    TABLE_CONSTANT = TABLE_CONSTANT;

    recalculationHistory: any[] = [];

    rootOrgID;
    baseYearKeyID;
    totalCount: number = 0;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private dialog: MatDialog,
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private timelineController: TimelineController,
        private userService: UserService,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');

        this.activatedRoute.data.subscribe((data) => {
            this.baseYearKeyID = data['base_year'];
        });
    }

    ngAfterViewInit() {
        this.paginator.page.pipe(startWith({})).subscribe(() => {
            this.getRecalculationHistory(this.paginator.pageIndex + 1, this.paginator.pageSize);
        });
    }

    getRecalculationHistory(pageNo, pageSize) {
        this.timelineController.getRecalculationHistory(this.rootOrgID, this.baseYearKeyID, pageNo, pageSize)
            .subscribe((history: any) => {
                this.recalculationHistory = history['records'];
                this.totalCount = history['totalCount'];
            })
    }

    viewHistoricTimeline(history) {
        let config: MatDialogConfig = CARBON_CONSTANT['RIGHT_DIALOG_CONFIG'];
        config['minWidth'] = '80vw';
        config['data'] = {
            rootOrgID: this.rootOrgID,
            baseYearKeyID: this.baseYearKeyID,
            recalculatedOn: history['recalculatedOn'],
            recalculationID: history['recalculationID'],
            recalculationTime: history['recalculationTime']
        };

        this.dialog.open(TimelineComponent, config);
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
