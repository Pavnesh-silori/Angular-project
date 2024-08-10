import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {fromEvent,merge,of as observableOf} from 'rxjs';
import {map,switchMap,startWith,catchError} from 'rxjs/operators';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

// tsc-library
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { TABLE_CONSTANT } from '@library/tsc-common';
// /tsc-library/
import { ClientIdController } from '@Admin/controller/client-id.controller'; 

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styles: [
    ]
})
export class ViewComponent implements OnInit {

    faPlus = faPlus;
    TABLE_CONSTANT = TABLE_CONSTANT;

    currentOrgID: any;

    dataSource: any[];
    resultLength: number = 0;
    isClientAvailable: string = 'YES';
    displayedColumns: string[] = ['clientID', 'clientSecretKey', 'creationDate'];

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;

    constructor(
        private storageService: StorageService,
        private ClientIdController: ClientIdController,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage(['currentOrgID']);
    }

    ngAfterViewInit() {
        merge(
            this.paginator.page,
            this.sort.sortChange,
            fromEvent(this.refreshBtn.nativeElement,'click')
        )
            .pipe(
                startWith({}),
                switchMap(() => {

                    return this.ClientIdController.getClientKey(
                        this.paginator.pageIndex,
                        this.paginator.pageSize,
                        this.sort.active,
                        this.sort.direction,
                        this.currentOrgID
                    ).pipe(catchError(() => observableOf(null)));

                }),
                map(dataSource => {
                    if (dataSource === null) { return []; }

                    this.resultLength = dataSource['totalCount'];
                    this.isClientAvailable = dataSource['generateClientID'];

                    return dataSource['clientID'];
                }),
            )
            .subscribe(dataSource => (this.dataSource = dataSource));
    }

    refreshPage() {
        this.refreshBtn.nativeElement.click();
    }

    generateKey() {
        const dialogRef = this.dialog.open(GenerateClientSecretDialog, {
            data: {
                currentOrgID: this.currentOrgID,
            },
            minWidth: '600px',
            maxWidth: '600px'
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result === 'clientSecretGenerated') {
                    this.refreshPage();
                }
            })
    }
}

@Component({
    selector: 'app-generate-client-secret',
    templateUrl: './create-client-secret-dialog.component.html',
    styles: [
    ]
})
export class GenerateClientSecretDialog implements OnInit {

    currentOrgID: any;

    constructor(
        private toastrService:ToastrService,
        @Inject(MAT_DIALOG_DATA) public data,
        private clientIdController: ClientIdController,
        public dialogRef: MatDialogRef<GenerateClientSecretDialog>,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.data['currentOrgID'];
    }

    generateClientID() {
        this.clientIdController.generateClientID(this.currentOrgID)
            .subscribe((clientSecretRes) => {
                this.toastrService.openToast(ToastrTitle.SUCCESS, 'Client ID/Secret generated successfully', ToastrColor.SUCCESS);
                this.dialogRef.close('clientSecretGenerated');
            },
                error => {
                    console.log('error in generateClientSecret -', error);
                    this.toastrService.openToast(ToastrTitle.ERROR, 'Client ID generation failed',  ToastrColor.ERROR);
                })
    }

}
