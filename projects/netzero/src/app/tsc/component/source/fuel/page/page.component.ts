import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus, faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { merge, fromEvent, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from '@angular/material/sort';

import { FuelM, Fuel } from '@netzero/model/fuel.model';
import { FuelController } from '@netzero/controller/fuel.controller';
import { DialogComponent } from '../dialog/dialog.component';

// tsc-library
import { TABLE_CONSTANT, DialogOneComponent, BulkUploadDialogLib, DialogOneEnum, COMMON_CONSTANT, FormAction, TypeConfirmationDialog, MATERIAL_CONSTANT, ButtonTooltipEnum } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrService, ToastrTitle } from '@library/toastr-service';
import { ToastrColor } from '@library/toastr-service';
// /tsc-library/

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent {

    source = 'Fuel';
    displayedColumns: string[] = ['code', 'name', 'description', 'netCalorificValue', 'biomassPct', 'oxidationFactor', 'options'];
    dataSource: FuelM[] = [new Fuel()];
    resultLength: any;
    fuelID: any = null;
    refreshBtnTooltip = 'Refresh'

    COMMON_CONSTANT = COMMON_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    FormAction = FormAction
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    currentOrgID: any;

    faPlus = faPlus;
    faSearch = faSearch;
    faEllipsisV = faEllipsisV;

    searchValue: any
    searchFlag: boolean = false;
    refreshFlag: boolean = false;

    bulkUploadResponse: any;
    title: any;
    response: any;
    message: any;
    error: boolean = false;
    duplicateData: string;
    mandatoryData: string;

    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        private fuelController: FuelController,
        private storageService: StorageService,
        private toastrService: ToastrService,
        private router: Router
    ) { }

    ngOnInit() {
        this.currentOrgID = this.storageService.getStorage('currentOrgID')
    }

	searchFn($event) {
		this.searchValue = $event;
		if (this.searchValue.length > 0) {
			this.searchFlag = true;
		}
		else {
			this.searchFlag = false;
		}
		this.refreshBtn.nativeElement.click();
	}

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.refreshBtn.nativeElement, 'click').subscribe(() => this.paginator.pageIndex = 0);
        merge(
            this.paginator.page,
            this.sort.sortChange,
            fromEvent(this.refreshBtn.nativeElement, 'click'))
            .pipe(
                startWith({}),
                switchMap(() => {

                    if (this.refreshFlag) {
                        this.refreshFlag = false;
                    }

                    if (this.searchFlag) {
						this.searchValue = this.searchValue;
					}

                    return this.fuelController.getFuelByPage(
                        this.paginator.pageIndex,
                        this.paginator.pageSize,
                        this.sort.active,
                        this.sort.direction,
                        this.currentOrgID,
                        this.searchValue,
                        this.searchFlag
                    ).pipe(catchError(() => observableOf(null)));
                }),
                map(dataSource => {

                    if (dataSource === null) {
                        return [];
                    }
                    this.resultLength = dataSource.totalCount;
                    return dataSource.record;
                })
            ).subscribe((dataSource: FuelM[]) => (this.dataSource = dataSource));
    }

    handleClick(func: Function, params) {
        func(...params);
    }

    createUpdateFuel = (row, action) => {
        let dialogRef;
        if (action == FormAction.CREATE) {
            dialogRef = this.dialog.open(DialogComponent, {
                data: {
                    action: action,
                    source: this.source,
                    code: row.code
                },
                minWidth: '40vw',
                maxWidth: '40vw',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });
        }
        else {
            dialogRef = this.dialog.open(DialogComponent, {
                data: {
                    action: action,
                    source: this.source,
                    id: row.id
                },
                minWidth: '40vw',
                maxWidth: '40vw',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });
        }

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result) {
                    this.refreshBtn.nativeElement.click();
                }
            })
    }

    bulkUpload() {
        const dialogRef = this.dialog.open(BulkUploadDialogLib, {
            data: { source: "assets/files/fuel-upload.xlsx" },
            minWidth: "600px",
            maxWidth: "600px",
        });

        dialogRef.afterClosed().subscribe((response) => {
            this.bulkUploadResponse = response;
            if (this.bulkUploadResponse) { this.fuelBulkUpload(); }

        });
    }

    toFormData(): FormData {
        const formData = new FormData();
        formData.append('file', this.bulkUploadResponse);
        return formData;
    }

    fuelBulkUpload() {
        this.fuelController.fuelBulkUpload(this.currentOrgID, this.toFormData())
            .subscribe((bulkUploadRes) => {
                if (bulkUploadRes['title'] == 'Success') {
                    this.toastrService.openToast(ToastrTitle.SUCCESS, bulkUploadRes['message'], bulkUploadRes['result']);

                } else if (bulkUploadRes['title'] == 'Error') {
                    this.error = true;
                    this.title = bulkUploadRes['title']
                    this.message = bulkUploadRes['message'];
                    this.response = bulkUploadRes['response'];
                    this.errorDialog(this.title, this.message, this.response);
                    this.getErrorData();
                }
            });
    }

    errorDialog(title, message, response) {
        const dialogRef = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '700px',
            data: {
                type: DialogOneEnum.CONFIRMATION,
                icon: 'warning',
                header: title,
                body: message,
                buttonOne: 'Cancel',
                buttonTwo: 'Try again'
            }
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result) {
                    this.bulkUpload()
                }
                else { }
            })
    }

    getErrorData() {
        if (this.response['duplicateDataInRows'].length != 0) {
            let dupDataInRows = this.response['duplicateDataInRows'];
            this.duplicateData = [dupDataInRows.slice(0, -1).join(', '), dupDataInRows.slice(-1)[0]].join(dupDataInRows.length < 2 ? '' : ' and ');
        }
        if (this.response['mandatoryDataMissingInRows'].length != 0) {
            let manDataMissingInRows = this.response['mandatoryDataMissingInRows'];
            this.mandatoryData = [manDataMissingInRows.slice(0, -1).join(', '), manDataMissingInRows.slice(-1)[0]].join(manDataMissingInRows.length < 2 ? '' : ' and ');
        }
    }

    deleteFuelDialog = (row) => {
        this.fuelID = row['id'];
        const dialogRef = this.dialog.open(TypeConfirmationDialog, {
            minWidth: '650px',
            maxWidth: '600px',
            data: {
                icon: 'delete',
                header: `Are you sure you want to delete fuel?`,
                body: 'This data will be deleted permanently and will not be recovered.',
                confirmationInput: 'delete',
                buttonOne: 'Cancel',
                buttonTwo: 'Delete'
            }
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result) {
                    this.fuelController.deleteFuel(this.currentOrgID, this.fuelID).subscribe((response) => {
                        this.refreshBtn.nativeElement.click();
                    })
                }
                else {
                    dialogRef.close()
                }
            })
    }

    navigateTo(row) {
        return this.router.navigate([`./source/fuel/${row['id']}/view`]);
    }
}
