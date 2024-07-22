import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { faLock } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';

import { ReportStatusEnum } from '@report-framework/enum/report-status.enum';
import { RecordConfigInterval } from '@report-framework/model/report-config-interval.model';

import { ReportConfigIntervalController } from '@report-framework/controller/report-config-interval.controller';
import { PdfController } from '@report-framework/controller/pdf.controller';

// tsc-library
import { COMMON_CONSTANT, ResponseM } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// /tsc-library
@Component({
    selector: 'app-interval-config-details',
    templateUrl: './interval-config-details.component.html',
    styleUrls: ['./interval-config-details.component.scss']
})
export class IntervalConfigDetailsComponent implements OnInit {
    @Input() configIntervalID: any = null;
    @Input() refresh: boolean = false;

    COMMON_CONSTANT = COMMON_CONSTANT;
    ReportStatusEnum = ReportStatusEnum

    faLock = faLock;

    currentOrgID: any;

    configIntervalRes = new RecordConfigInterval();

    constructor(
        private router: Router,
        private reportConfigIntervalController: ReportConfigIntervalController,
        private pdfController: PdfController,
        private storageService: StorageService,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = parseInt(this.storageService.getStorage('currentOrgID'));
        this.getConfigIntervalByID();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!changes.refresh?.firstChange) {
            this.getConfigIntervalByID();
        }
    }

    getConfigIntervalByID() {
        this.reportConfigIntervalController.getReportConfigInterrvalByID(this.currentOrgID, this.configIntervalID).subscribe(res => {
            this.configIntervalRes = res;
        }, error => {
            console.log('error in getRecordDetails -', error);
        });
    }

    circleA = {
        radius: 15,
        space: -10,
        outerStrokeGradient: true,
        outerStrokeWidth: 7,
        outerStrokeColor: "#4882c2",
        outerStrokeGradientStopColor: "#53a9ff",
        innerStrokeColor: "#e7e8ea",
        innerStrokeWidth: 7,
        animateTitle: false,
        animationDuration: 1000,
        showTitle: false,
        showSubtitle: false,
        showUnits: false,
        showBackground: false,
        progress: 10
    }

    textColor(metric, totalMetric) {
        if (metric) {
            let value = (metric * 100) / totalMetric;
            if (value < 33) {
                return 'valueLess33';
            } else if (value > 33 && value < 66) {
                return 'valueLess66';
            } else {
                return 'valueGreated66';
            }
        }
    }

    // lock report 
    lockReport(configIntervalID, progressPct) {
        if (progressPct == 100) {
            this.pdfController.lockReport(this.currentOrgID, configIntervalID).subscribe((response: ResponseM) => {
                this.router.navigate([`/reporting-framework/tab/history/page`]);
            }, error => {
                console.log('error in unlockReport() -', error);
            });
        }
    }
}
