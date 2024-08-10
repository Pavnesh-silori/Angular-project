import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError } from "rxjs/operators";

import { faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';

import { LIST_CONSTANT } from '../../../../constant/list.constant';

import { ScheduleReportTypeEnum } from '../../../../enum/schedule-report.enum';

import { ScheduleReportPage, ScheduleReportPageI } from '../../../../model/schedule-report.model';

import { ScheduleReportController } from '../../../../controller/schedule-report.controller';

// tsc-library
import {
    MATERIAL_CONSTANT,
    TABLE_CONSTANT,
    ButtonTooltipEnum,
    SearchBarOneComponent,
    FormAction,
    COMMON_CONSTANT,
    DialogOneComponent,
    DialogOneEnum,
    FunnelFilterComponent,
    PageM,
    DialogResponseEnum,
    StatusService,
    ButtonLabelEnum,
    ImageService
} from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ApplicationKeyID } from '@library/application-service';
import { ProfileImg, UserService } from '@library/user-service';
// /tsc-library/

@Component({
    selector: 'lib-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class ScheduleReportPageComponent implements OnInit {

    faPlus = faPlus;
    faCaretDown = faCaretDown;

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;

    ButtonTooltipEnum = ButtonTooltipEnum;
    DialogResponseEnum = DialogResponseEnum;
    FormAction = FormAction;
    ProfileImg = ProfileImg;

    searchByPlaceHolder: string = 'report name';

    orgID: any;
    applicationKeyID: string;
    applicationName: string;
    reportType: any[] = [];

    dataSource = [new ScheduleReportPage()];
    dataSourceLength: number = 0;
    displayedColumn: string[] = ['id', 'name', 'type', 'recipients', 'frequency', 'scheduledBy', 'status', 'option'];

    searchFlag: boolean = false;
    searchValue: string;
    searchFC = new FormControl('', Validators.required);

    reportTypeFlag: boolean = false;
    reportTypeFC: FormControl = new FormControl(['all']);
    filterArr: Array<string> = [];
    totalReportTypeCount: number = 0;

    recipientUserList: any[] = [];

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;
    @ViewChild('typeSelect') typeSelect: FunnelFilterComponent;

    constructor(
        private dialog: MatDialog,
        private router: Router,
        private scheduleReportController: ScheduleReportController,

        // tsc-library
        private storageService: StorageService,
        public statusService: StatusService,
        public userService: UserService,
        public imageService: ImageService
        // /tsc-library/
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.applicationName = this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID ? 'water' : 'energy';

        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.reportType = LIST_CONSTANT.ENERGY_APP_SCHEDULE_REPORT_TYPE;
            this.totalReportTypeCount = this.reportType.length;
        } else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.reportType = LIST_CONSTANT.WATER_APP_SCHEDULE_REPORT_TYPE;
            this.totalReportTypeCount = this.reportType.length;
        }
    }

    ngAfterViewInit() {
        merge(
            this.sort.sortChange,
            this.typeSelect.multi,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            switchMap((): any => {

                this.filterArr = [];

                if (this.searchFlag) {
                    var searchValue = 'name:' + this.searchValue;
                }

                if (this.reportTypeFlag) {
                    let selectedReportType = this.reportTypeFC.value.length - 1;
                    if (selectedReportType == this.totalReportTypeCount) {
                        this.reportTypeFlag = false;
                    } else {
                        this.filterArr.push('reportType:' + this.reportTypeFC.value);
                    }
                }

                return this.scheduleReportController.getScheduleReportByPage(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    searchValue,
                    this.filterArr,
                    this.orgID,
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: PageM<ScheduleReportPageI>): any => {
                if (response == null) {
                    this.dataSourceLength = 0;
                    return [];
                }

                this.dataSourceLength = response.totalCount;
                return response.records;
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });
    }

    searchFn(value: string) {
        this.searchFlag = true;
        this.searchValue = value;

        if (value.length == 0) {
            this.resetSearch();
        }

        this.refreshBtn.nativeElement.click();
    }

    resetSearch() {
        this.searchFlag = false;
        this.searchBar.searchClear();
    }

    showAllRecipient(userList) {
        this.recipientUserList = [];

        userList.forEach(user => {
            let metric = {
                profileImg: user.profileImgUrl || this.userService.defaultImage(
                    (user.firstName ? user.firstName + ' ' : '') + (user.lastName ? user.lastName : ''),
                    ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW),
                name: (user.firstName ? user.firstName + ' ' + (user.lastName ? user.lastName : '') : ''),
            };
            this.recipientUserList.push(metric);
        });
    }

    openDeleteDialog(scheduleReport) {

        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '450px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'dangerous',
                header: 'Delete schedule report?',
                body: '<b>' + scheduleReport.name + '</b>' + ' will be deleted permanently.</br></br>Are you sure you want to continue?',
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            if (res) {
                this.deleteScheduledReport(scheduleReport.id);
            }
        })
    }

    deleteScheduledReport(scheduleReportID) {
        this.scheduleReportController.deleteScheduledReport(this.orgID, scheduleReportID).subscribe((deleteRes) => {
            if (deleteRes) {
                this.refreshBtn.nativeElement.click();
            }
        });
    }

    updateReportStatusByID(scheduleReport) {
        let newStatus = scheduleReport.status == 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';

        let requestBody = {
            status: newStatus
        }

        this.scheduleReportController.updateReportStatusByID(this.orgID, scheduleReport.id, requestBody)
            .subscribe(response => {
                if (response) {
                    this.refreshBtn.nativeElement.click();
                }
            }, error => {
                console.log('error in updateReportStatusByID -', error);
            })
    }

    goToReportPage(reportType) {
        switch (reportType) {
            case ScheduleReportTypeEnum.SOURCING_REPORT:
                this.router.navigate([`schedule-report/${this.applicationName}-sourcing`]);
                break;
            case ScheduleReportTypeEnum.CONSUMPTION_REPORT:
                this.router.navigate([`schedule-report/${this.applicationName}-consumption`]);
                break;
            case ScheduleReportTypeEnum.BREAKUP_REPORT:
                this.router.navigate([`schedule-report/${this.applicationName}-breakup`]);
                break;
            case ScheduleReportTypeEnum.CGWA_REPORT:
                this.router.navigate([`schedule-report/cgwa`]);
                break;
            case ScheduleReportTypeEnum.TEMPERATURE_REPORT:
                this.router.navigate([`schedule-report/temperature`]);
                break;
        }
    }

    updateScheduledReport(scheduleReport) {
        switch (scheduleReport.type) {
            case ScheduleReportTypeEnum.SOURCING_REPORT:
                this.router.navigate([`schedule-report/${scheduleReport.id}/${this.applicationName}-sourcing/update`]);
                break;
            case ScheduleReportTypeEnum.CONSUMPTION_REPORT:
                this.router.navigate([`schedule-report/${scheduleReport.id}/${this.applicationName}-consumption/update`]);
                break;
            case ScheduleReportTypeEnum.BREAKUP_REPORT:
                this.router.navigate([`schedule-report/${scheduleReport.id}/${this.applicationName}-breakup/update`]);
                break;
            case ScheduleReportTypeEnum.CGWA_REPORT:
                this.router.navigate([`schedule-report/${scheduleReport.id}/cgwa/update`]);
                break;
            case ScheduleReportTypeEnum.TEMPERATURE_REPORT:
                this.router.navigate([`schedule-report/${scheduleReport.id}/temperature/update`]);
                break;
        }
    }

    getReportTypeLabel(type) {
        let reportLabel: string;
        let applicationName = this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID ? 'Water' : 'Energy';

        switch (type) {
            case ScheduleReportTypeEnum.SOURCING_REPORT:
                reportLabel = `${applicationName} Sourcing Report`;
                break;
            case ScheduleReportTypeEnum.CONSUMPTION_REPORT:
                reportLabel = `${applicationName} Consumption Report`;
                break;
            case ScheduleReportTypeEnum.BREAKUP_REPORT:
                reportLabel = `${applicationName} Breakup Report`;
                break;
            case ScheduleReportTypeEnum.CGWA_REPORT:
                reportLabel = `CGWA Report`;
                break;
            case ScheduleReportTypeEnum.TEMPERATURE_REPORT:
                reportLabel = `Temperature Report`;
                break;
        }

        return reportLabel;
    }

    getFrequencyLabel(type) {
        let frequencyLabel: string;

        switch (type) {
            case 'DAILY':
                frequencyLabel = 'Daily';
                break;
            case 'WEEKLY':
                frequencyLabel = 'Weekly';
                break;
            case 'MONTHLY':
                frequencyLabel = 'Monthly';
                break;
        }

        return frequencyLabel;
    }

}
