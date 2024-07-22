import { Component, OnInit } from '@angular/core';

import { of as observableOf } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { FailedRun, FailedRunM } from '@carbon/model/ongoing-run.model';

import { CbamRunController } from '@carbon/controller/cbam-run.controller';

//tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, TABLE_CONSTANT } from '@library/tsc-common';
// /tsc-library/
@Component({
    selector: 'app-failed-run',
    templateUrl: './failed-run.component.html',
    styles: []
})
export class FailedRunComponent implements OnInit {

    currentOrgID: any;
    noOfErrors: any;

    dataSource: FailedRunM[] = [new FailedRun()];
    displayedColumns: string[] = ['errorNumber', 'recordID', 'activityType', 'error', 'correctiveAction'];
    
    COMMON_CONSTANT = COMMON_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;

    constructor(
        private cbamRunController: CbamRunController,
        private storageService: StorageService,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.getFailedRunDetails();
    }

    getFailedRunDetails() {
        this.cbamRunController.getFailedRunDetails().pipe(
            catchError(() => observableOf(null)),
            map((dataSource) => {
                if (dataSource == null) {
                    return [];
                }
                this.noOfErrors = dataSource.totalCount;
                return dataSource.records;
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
            console.log("this.dataSource", this.dataSource);
        });
    }
}
