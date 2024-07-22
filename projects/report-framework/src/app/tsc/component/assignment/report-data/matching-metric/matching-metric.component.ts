import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { cloneDeep } from 'lodash-es';

import * as moment from 'moment-timezone';

import { ReportingFrameworkDataController } from '@report-framework/controller/reporting-framework-data.controller';

//tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DateService } from '@library/date';
// /tsc-library

@Component({
    selector: 'app-matching-metric',
    templateUrl: './matching-metric.component.html',
    styles: ['']
})
export class MatchingMetricComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    currentOrgID: any;
    configIntervalID: any = null;
    configID: any = null;
    groupID: any = null;
    reportingFrameworkID: any = null;
    // referenceGroupList: any[] = [];

    matchingMetric: any[] = [];

    reportingPeriodFC: FormControl = new FormControl();
    intervalIDFC: FormControl = new FormControl();

    reportingPeriodList: any[] = [];
    intervalList: any[] = [];

    filterMetricData: any[] = [];

    @ViewChild('yearBtn', { static: true }) yearBtn: ElementRef;
    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        public dialogRef: MatDialogRef<MatchingMetricComponent>,
        private reportingFrameworkDataController: ReportingFrameworkDataController,
        private storageService: StorageService,
        private dateService: DateService
    ) {
        this.dialogRef.disableClose = true;
        this.configIntervalID = data.configIntervalID;
        this.groupID = data.groupID;
        this.reportingFrameworkID = data.reportingFrameworkID;
        this.matchingMetric = data.referenceGroupList;
    }

    ngOnInit(): void {
        this.currentOrgID = parseInt(this.storageService.getStorage('currentOrgID'));
        this.getMatchingMetric();

    }

    getMatchingMetric() {
            this.createReportingPeriodDropDown();

            // create list for show in html
            this.filterMetricData = [];
            let filterData = cloneDeep(this.matchingMetric);
            for (let i = 0; i < this.matchingMetric.length; i++) {

                let reportingPeriod = filterData[i]['configYearList'].find(item => item.showDefault === true);
                filterData[i]['reportingPeriodFC'] = new FormControl(reportingPeriod['id']);

                let interval = filterData[i]['configIntervalList'].find(item => item.showDefault === true);
                filterData[i]['intervalIDFC'] = new FormControl(interval['id']);

                filterData[i]['intervalData'] = filterData[i]['intervalData'].find(item => item.id == interval['id']);
            }
            this.filterMetricData = filterData;

    }

    createReportingPeriodDropDown() {
        this.matchingMetric.forEach(metric => {
            let yearSearchUtil: MatSelectSearchService = new MatSelectSearchService(['reportingPeriod']);
            yearSearchUtil.entityArr = metric['configYearList'];
            yearSearchUtil.createSubscription();
            this.reportingPeriodList.push(yearSearchUtil);

            let intervalSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
            intervalSearchUtil.entityArr = metric['configIntervalList'];
            intervalSearchUtil.createSubscription();
            this.intervalList.push(intervalSearchUtil);

        });
    }

    getData(index, event) {
        this.reportingFrameworkDataController.getMatchingMetricByFilter(this.currentOrgID, this.reportingFrameworkID, event, this.groupID).subscribe((res: any[]) => {
            this.intervalList[index].filteredEntities.next(res['configIntervalList']);
            this.matchingMetric[index] = res;

            // create list for show in html
            let filterData = cloneDeep(this.matchingMetric[index]);
          
            // set intervalIDFC 
            let interval = res['configIntervalList'].find(item => item.showDefault === true);
            filterData['intervalIDFC'] = new FormControl(interval['id']);

            // set intervalData
            filterData['intervalData'] = filterData['intervalData'].find(item => item.id == interval['id']);

            // set reportingPeriod value from pre value
            filterData['reportingPeriodFC'] = new FormControl(this.filterMetricData[index]['reportingPeriodFC'].value);

            this.filterMetricData[index] = filterData;

        }, error => {
            console.log('error in getMatchingMetric', error);
        });
    }

    filterDataByInterVal(event, index) {
        this.filterMetricData[index]['intervalData'] = [];
        let intervalData = this.matchingMetric[index]['intervalData'];
        this.filterMetricData[index]['intervalData'] = intervalData.find(item => item['id'] == event);
    }

    getMetricIntervalLength(index) {
        let length = this.matchingMetric[index]['intervalData'].length;
        return length - 1;
    }

    getDateTime(dateTime) {
        const utcDateTime = moment.utc(dateTime).format();
        return ' ' + this.dateService.convertUtcToTimeZone(utcDateTime, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MMM-DD h:mm a')
    }

}
