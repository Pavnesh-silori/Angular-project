import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError } from "rxjs/operators";

import {
    faPlus,
    faEllipsisV
} from '@fortawesome/free-solid-svg-icons';

import { SourceConsumerPage, SourceConsumerPageM, UtilitySourceTypeM } from '../../../../model/source-consumer.model';

import { SourceController } from '../../../../controller/source.controller';

import { SourceService } from '../../../../service/source.service';

import { SourceCreateUpdateComponent } from '../../_dialog/source/create-update/create-update.component';

// tsc-library
import {
    MATERIAL_CONSTANT,
    TABLE_CONSTANT,
    ButtonTooltipEnum,
    ButtonLabelEnum,
    SearchBarOneComponent,
    FormAction,
    COMMON_CONSTANT,
    DialogOneComponent,
    DialogOneEnum,
    FunnelFilterComponent,
    PageM,
    DialogResponseEnum
} from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// /tsc-library/

@Component({
    selector: 'lib-page',
    templateUrl: './page.component.html',
    styles: [
    ]
})
export class SourcePageComponent implements OnInit {

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;

    ButtonTooltipEnum = ButtonTooltipEnum;
    DialogResponseEnum = DialogResponseEnum;
    FormAction = FormAction;

    searchByPlaceHolder: string = 'source name';

    orgID: any;
    utilitySourceI: any;
    dataSource = [new SourceConsumerPage()];
    dataSourceLength: number = 0;
    displayedColumn: string[] = ['id', 'name', 'utilitySourceName', 'type', 'option'];
    searchFlag: boolean = false;
    searchValue: string;
    searchFC = new FormControl('', Validators.required);

    utilitySource: boolean = false;
    utilitySourceFC: FormControl = new FormControl();
    filterArr: Array<string> = [];

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;
    @ViewChild('typeSelect') typeSelect: FunnelFilterComponent;

    constructor(
        private dialog: MatDialog,
        private storageService: StorageService,
        private sourceController: SourceController,
        private sourceService: SourceService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.getUtilitySourceAndType();
    }

    async getUtilitySourceAndType() {
        const result = <UtilitySourceTypeM>await this.sourceService.getUtilitySourceAndType(this.orgID);
        const allKey = {
            "id": 0,
            "name": "All",
            "keyID": "ALL",
            "type": []
        }
        result.utilitySource.unshift(allKey);
        this.utilitySourceI = result.utilitySource;
    }

    ngAfterViewInit() {
        merge(
            this.sort.sortChange,
            this.typeSelect.mono,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            switchMap((): any => {

                this.filterArr = [];

                if (this.searchFlag) {
                    var searchValue = 'name:' + this.searchValue;
                }

                if (this.utilitySource) {
                    if (this.utilitySourceFC.value == 'ALL') {
                        this.utilitySource = false;
                    } else {
                        this.filterArr.push('utilitySource:' + this.utilitySourceFC.value);
                    }
                }

                return this.sourceController.getSourceTypeByPage(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    searchValue,
                    this.filterArr,
                    this.orgID,
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: PageM<SourceConsumerPageM>): any => {
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

    createSource(action: string) {
        const dialogRef = this.dialog.open(SourceCreateUpdateComponent,
            {
                height: '100vh',
                width: '600px',
                position: { right: '-2px', top: '0px' },
                disableClose: true,
                panelClass: 'matDialogContainerOverride',
                data: {
                    action: action
                }
            });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result.status == DialogResponseEnum.SUCCESS) {
                    this.refreshBtn.nativeElement.click();
                }
            });
    }

    updateSource = (action, row) => {
        const dialogRef = this.dialog.open(SourceCreateUpdateComponent,
            {
                height: '100vh',
                width: '600px',
                position: { right: '-2px', top: '0px' },
                disableClose: true,
                panelClass: 'matDialogContainerOverride',
                data: {
                    action: action,
                    sourceID: row.id
                }
            });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result.status == DialogResponseEnum.SUCCESS) {
                    this.refreshBtn.nativeElement.click();
                }
            });
    }

    openDeleteDialog(source) {

        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '450px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'dangerous',
                header: 'Delete source type?',
                body: '<b>' + source.name + '</b>' + ' will be deleted permanently.</br></br>Are you sure you want to continue?',
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            if (res) {
                this.deleteSourceType(source.id);
            }
        })
    }

    deleteSourceType(sourceID) {
        this.sourceController.deleteSourceType(this.orgID, sourceID).subscribe((deleteRes) => {
            if (deleteRes) {
                this.refreshBtn.nativeElement.click();
            }
        });
    }

}
