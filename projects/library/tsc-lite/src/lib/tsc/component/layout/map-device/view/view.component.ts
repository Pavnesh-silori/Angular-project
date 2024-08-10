import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { Entity } from '../../../../model/entity.model';
import { DeviceMappingM } from '../../../../model/device.model';

import { SourceLoadComponent } from '../../_dialog/create-update/source-load/source-load.component';

import { DeviceController } from '../../../../controller/device.controller';
import { EntityService } from '../../../../service/entity.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, DialogEnum, DialogOneComponent, DialogOneEnum, FormAction, PageM, SearchBarOneComponent, TABLE_CONSTANT } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

    TABLE_CONSTANT = TABLE_CONSTANT;

    orgID: any;
    layoutID: any;
    entityID: any;
    filter: string;
    searchValue: string;
    searchArr: any[] = [];
    dataSource: any[] = [];
    searchFlag: boolean = false;
    resultLength: number = 0;

    displayedColumn: string[] = ['checkbox', 'body', 'delete'];

    allDeviceIDs: any = [];
    selection = new SelectionModel(true, []);

    entityM = new Entity();

    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;

    constructor(
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private deviceController: DeviceController,
        private entityService: EntityService,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.activatedRoute.params.subscribe((param) => {
            this.layoutID = param.layoutID;
            this.entityID = param.entityID;

            this.getEntityByID();
        })
    }

    async getEntityByID() {
        this.entityM = await this.entityService.getEntityByID(this.orgID, this.layoutID, this.entityID);
    }

    ngAfterViewInit() {

        this.selection.clear();

        merge(
            this.paginator.page,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            switchMap((): any => {

                this.searchArr = [];
                if (this.searchFlag) {
                    this.searchArr.push('name:' + this.searchValue)
                }

                return this.deviceController.getMappedDevices(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.searchArr,
                    this.orgID,
                    this.layoutID,
                    this.entityID,
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: PageM<DeviceMappingM>): any => {
                if (response == null) {
                    this.resultLength = 0;
                    return [];
                }
                this.resultLength = response["totalCount"];
                return response["records"];
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;

            dataSource.forEach((record) => {
                this.allDeviceIDs.push(record.id);
            });
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

    selectAll() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.allDeviceIDs);
    }

    isAllSelected() {
        const selected = this.selection.selected.length;
        const numRows = this.dataSource.length;
        return selected == numRows;
    }

    openSourceLoadDialog(device) {
        const dialog = this.dialog.open(SourceLoadComponent,
            {
                data: {
                    deviceInfo: device,
                    layoutID: this.layoutID,
                    entityID: this.entityID,
                    updateFromDialog: true
                },
                minWidth: '600px',
                maxWidth: '600px',
            });
        dialog.afterClosed()
            .subscribe((dialogRes) => {
                if (dialogRes && dialogRes.result == DialogEnum.SUCCESS_DR && dialogRes.action == FormAction.UPDATE) {
                    this.refreshBtn.nativeElement.click();
                }
            })
    }

    openDeleteDialog(actionType, id?: number, name?: string) {

        let entityName = this.entityM.name;
        let bodyText: string;

        if (actionType == 'BULK_DELETE' && !this.isAllSelected()) {
            bodyText = 'From <b>' + entityName + '</b> entity, mapping of devices <b> ' + this.selection.selected.join(', ') + '</b>' + ' will be removed.</br></br>Are you sure you want to continue?';
        } else if (actionType == 'BULK_DELETE' && this.isAllSelected()) {
            bodyText = 'From <b>' + entityName + '</b> entity, all mapped devices will be removed.</br></br>Are you sure you want to continue?';
        }
        else {
            bodyText = 'From <b>' + entityName + '</b> entity, mapping of device <b> ' + name + '</b>' + ' will be removed.</br></br>Are you sure you want to continue?';
        }

        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '450px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'dangerous',
                header: 'Delete device mapping?',
                body: bodyText,
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            if (res) {
                if (actionType == 'BULK_DELETE' && !this.isAllSelected()) {
                    this.deleteDeviceMapping(this.selection.selected);
                } else if (actionType == 'BULK_DELETE' && this.isAllSelected()) {
                    this.deleteDeviceMapping(this.allDeviceIDs);
                }
                else {
                    this.deleteDeviceMapping(id);
                }
            }
        })
    }

    deleteDeviceMapping(deviceID) {
        this.deviceController.deleteDeviceMapping(this.orgID, this.layoutID, this.entityID, deviceID).subscribe((deleteRes) => {
            this.refreshBtn.nativeElement.click();
        });
    }

}
