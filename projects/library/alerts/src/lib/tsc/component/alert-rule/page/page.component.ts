import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError } from "rxjs/operators";

import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { AlertTypeEnum, AlertTypeLabelEnum } from '../../../enum/alert.enum';

import { AlertPageM } from '../../../model/alert.model';
import { EscalationPermission, EscalationPermissionM } from '../../../model/escalation.model';

import { AlertRuleController } from '../../../controller/alert.controller';
import { EscalationController } from '../../../controller/escalation.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { TABLE_CONSTANT, COMMON_CONSTANT, ButtonLabelEnum, DialogEnum, DialogOneEnum, PageM, SearchBarOneComponent, DialogOneComponent, ResponseM, MATERIAL_CONSTANT } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {
    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    AlertTypeEnum = AlertTypeEnum;
    AlertTypeLabelEnum = AlertTypeLabelEnum;
    ButtonLabelEnum = ButtonLabelEnum;
    DialogEnum = DialogEnum;

    orgID: any;
    alertLabel: any;

    baseUrl: any;

    displayedColumn: string[] = ['id', 'name', 'associatedWith', 'ruleDescription', 'status', 'action'];
    resultLength: number = 0;
    dataSource: any[] = [];

    searchFlag: boolean = false;
    searchValue: string;
    searchArr: any[] = [];

    escalationPermissionM = new EscalationPermission();

    alertStatusFC: FormControl = new FormControl();

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private toastrService: ToastrService,
        private alertController: AlertRuleController,
        private escalationController: EscalationController,
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.activatedRoute.data.subscribe(data => {
            this.alertLabel = data['alertType'];
        })

        const currentUrl = this.router.url;
        const segments = currentUrl.split('/');
        segments.pop();

        this.baseUrl = segments.join('/');

        this.getEscalationPermission();
    }

    ngAfterViewInit() {
        merge(
            this.paginator.page,
            this.sort.sortChange,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            switchMap((): any => {
                this.searchArr = [];
                if (this.searchFlag) {
                    this.searchArr.push('name:' + this.searchValue)
                }

                const alertType = this.alertLabel == AlertTypeLabelEnum.INSTANTANEOUS_LABEL ? AlertTypeEnum.INSTANTANEOUS : AlertTypeEnum.PERIODIC;

                return this.alertController.getAlertRuleByPage(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.searchArr,
                    alertType,
                    this.orgID
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: PageM<AlertPageM>): any => {
                if (response == null) {
                    this.resultLength = 0;
                    return [];
                }
                this.resultLength = response["totalCount"];
                return response["records"];
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
            this.dataSource.forEach(alert => {
                this.alertStatusFC[alert.id] = new FormControl(alert.status);
            });
        });
    }

    getEscalationPermission() {
        this.escalationController.getEscalationPermission(this.orgID).subscribe((escalationPermissionRes: EscalationPermissionM) => {
            this.escalationPermissionM = escalationPermissionRes;
        }, error => {
            console.log('error in getEscalationPermission() -', error);
        })
    }

    getAlertStatusFC(alertID: number): FormControl {
        return this.alertStatusFC[alertID];
    }

    alertStatusChange(alertID) {
        let requestBody = {};
        requestBody['status'] = this.alertStatusFC[alertID].value;

        this.alertController.updateAlertRuleStatus(this.orgID, alertID, requestBody)
            .subscribe((alertStatusRes: ResponseM) => {
                let toast = this.toastrService.getToastStatus(alertStatusRes['status']);
                this.toastrService.openToast(toast.title, alertStatusRes.message, toast.color);
            },
                error => {
                    console.log('error in alertStatusChange - ', error);
                });
    }

    searchFn(value: string) {
        this.searchFlag = true;
        this.searchValue = value;
        if (value.length == 0) {
            this.resetSearch();
        } else {
            this.paginator.pageIndex = 0;
        }
        this.refreshBtn.nativeElement.click();
    }

    resetSearch() {
        this.searchFlag = false;
        this.searchBar.searchClear();
    }

    openDeleteAlertDialog(alertID, alertName) {
        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '450px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'dangerous',
                header: 'Delete alert rule?',
                body: '<b>' + alertName + '</b>' + ' will be deleted permanently.</br></br>Are you sure you want to continue?',
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            if (res) {
                this.deleteAlertRule(alertID);
            }
        })
    }

    deleteAlertRule(alertID) {
        this.alertController.deleteAlertRule(this.orgID, alertID).subscribe((deleteRes: ResponseM) => {
            this.refreshBtn.nativeElement.click();
            let toast = this.toastrService.getToastStatus(deleteRes.status);
            this.toastrService.openToast(toast.title, deleteRes.message, toast.color);
        });
    }

}