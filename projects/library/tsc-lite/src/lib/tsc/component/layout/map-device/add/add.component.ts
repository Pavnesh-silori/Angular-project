import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { isEqual } from 'lodash';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { catchError, filter, map, startWith, switchMap, tap } from 'rxjs/operators';

import { Entity } from '../../../../model/entity.model';
import { DeviceMappingM } from '../../../../model/device.model';
import { SourceConsumerConfigure, SourceConsumerConfigureM } from '../../../../model/source-consumer.model';

import { SourceLoadComponent } from '../../_dialog/create-update/source-load/source-load.component';

import { DeviceController } from '../../../../controller/device.controller';
import { SourceController } from '../../../../controller/source.controller';

import { EntityService } from '../../../../service/entity.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, DialogOneComponent, DialogOneEnum, PageM, ResponseM, SearchBarOneComponent, TABLE_CONSTANT, TSCCommonService } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

    TABLE_CONSTANT = TABLE_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum;

    orgID: any;
    layoutID: any;
    entityID: any;
    searchValue: string;
    intialObject: any;
    redirectUrl: string;
    searchArr: any[] = [];
    dataSource: any[] = [];
    searchFlag: boolean = false;
    resultLength: number = 0;
    isEqual: boolean = true;
    showEdit: boolean = false;
    allowBackendCall: boolean = true;
    entityM = new Entity();
    sourceConsumerConfiguredM = new SourceConsumerConfigure();

    initialMappingRecords: { [id: number]: any[] } = {};

    displayedColumn: string[] = ['mapDevice', 'id', 'name', 'make', 'model', 'type'];

    deviceMappingFG: FormGroup;

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;

    constructor(
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private tscCommonService: TSCCommonService,
        private entityService: EntityService,
        private deviceController: DeviceController,
        private sourceController: SourceController,
        private deviceMappingFB: FormBuilder,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.activatedRoute.params.subscribe((param) => {
            this.layoutID = param.layoutID;
            this.entityID = param.entityID;

            this.getEntityByID();
        })

        this.getSourceConsumerConfig();
        this.deviceMappingInit();
    }

    getSourceConsumerConfig() {
        this.sourceController.getSourceConsumerConfig(this.orgID).subscribe((res: SourceConsumerConfigureM) => {
            this.sourceConsumerConfiguredM = res;
            this.redirectUrl = this.getRedirectUrl();
        },
            error => console.log('Error:', error)
        );
    }

    getRedirectUrl() {
        if (!this.sourceConsumerConfiguredM.sourceTypeConfigured) {
            return 'preference/source/create';
        }

        if (!this.sourceConsumerConfiguredM.consumerTypeConfigured) {
            return 'preference/consumer/create';
        }

        return 'preference/source/page';
    }

    async getEntityByID() {
        this.entityM = await this.entityService.getEntityByID(this.orgID, this.layoutID, this.entityID);
    }

    deviceMappingInit() {
        this.deviceMappingFG = this.deviceMappingFB.group({
            deviceRecords: this.deviceMappingFB.array([])
        });
    }

    get deviceRecords() {
        return this.deviceMappingFG.get('deviceRecords') as FormArray;
    }

    ngAfterViewInit() {
        merge(
            this.paginator.page,
            this.sort.sortChange,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            filter(() => this.handleBackendTrigger()),
            switchMap(() => this.getUnmappedDevice())
        ).subscribe();
    }

    getUnmappedDevice() {

        this.deviceMappingFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.intialObject, this.deviceMappingFG.value);
        });

        this.searchArr = [];
        if (this.searchFlag) {
            this.searchArr.push('name:' + this.searchValue)
        }

        return this.deviceController.getUnMappedDevices(
            this.paginator.pageIndex,
            this.paginator.pageSize,
            this.sort.active,
            this.sort.direction,
            this.searchArr,
            this.orgID,
            this.layoutID,
            this.entityID,
        ).pipe(
            catchError(() => observableOf(null)),
            map((response: PageM<DeviceMappingM>) => {
                if (response == null) {
                    this.resultLength = 0;
                    return [];
                }
                this.resultLength = response["totalCount"];
                return response["records"];
            }),
            tap((dataSource) => {
                this.dataSource = dataSource;

                this.deviceMappingFG.reset();
                this.deviceRecords.clear();

                dataSource.forEach((record, index) => {
                    this.deviceRecords.push(this.deviceMappingFB.group({
                        id: [record.id],
                        isDeviceMapped: [false],
                        type: [record.type],
                        parameter: [record.parameter],
                        mappingRecords: this.deviceMappingFB.array([])
                    }));
                });

                this.intialObject = this.deviceMappingFG.value;
                this.isEqual = true;

            })
        );
    }

    handleBackendTrigger(): boolean {
        if (this.intialObject != undefined && !isEqual(this.intialObject, this.deviceMappingFG.value)) {
            this.openConfirmationDialog();
            return false;
        }
        return true;
    }

    openConfirmationDialog() {
        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '450px',
            data: {
                type: DialogOneEnum.CONFIRMATION,
                icon: 'warning',
                header: 'Confirm?',
                body: 'Changes made will not be saved. Are you sure you want to proceed?',
                buttonOne: ButtonLabelEnum.NO_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.YES_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            this.allowBackendCall = res;
            if (this.allowBackendCall == true) {
                this.deviceMappingFG.reset();
                this.getUnmappedDevice().subscribe();
            } else {
                this.searchBar.searchClear();
            }
        })
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

    onCheckboxChange(index: number, isChecked: boolean) {
        const deviceGroup = this.deviceRecords.at(index);
        deviceGroup.get('isDeviceMapped').setValue(isChecked);

        if (isChecked) {
            if (deviceGroup.get('isDeviceMapped').value && deviceGroup.get('type').value == 'METER' && deviceGroup.get('parameter').value.length > 0) {
                this.openSourceLoadDialog(deviceGroup.value);
            }
        } else {
            const mappingRecordsArray = deviceGroup.get('mappingRecords') as FormArray;
            mappingRecordsArray.clear();
        }
    }

    openSourceLoadDialog(device) {
        const dialog = this.dialog.open(SourceLoadComponent,
            {
                data: {
                    deviceInfo: device,
                    entityID: this.entityID
                },
                minWidth: '40vw',
                maxWidth: '40vw',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });
        dialog.afterClosed()
            .subscribe((dialogRes) => {
                const deviceIndex = this.findIndexByDeviceID(device.id);

                if (dialogRes && dialogRes.sourceLoadMappingRes) {
                    if (deviceIndex != -1) {
                        const deviceRecordsControl = this.deviceMappingFG.get('deviceRecords') as FormArray;
                        const mappingRecordsControl = deviceRecordsControl.at(deviceIndex).get('mappingRecords') as FormArray;
                        mappingRecordsControl.clear();

                        dialogRes.sourceLoadMappingRes.forEach(mappingItem => {
                            const parameterID = mappingItem.parameterID;
                            const mappings = mappingItem.mapping.map(mapping => {
                                return this.deviceMappingFB.group(mapping);
                            });

                            const mappingGroup = this.deviceMappingFB.group({
                                parameterID,
                                mapping: this.deviceMappingFB.array(mappings)
                            });

                            mappingRecordsControl.push(mappingGroup);
                        });

                    }
                }

                if (dialogRes && dialogRes.sourceLoadMappingRes.length == 0) {
                    if (deviceIndex != -1) {
                        const isDeviceMappedControl = this.deviceMappingFG.get('deviceRecords')['controls'][deviceIndex].get('isDeviceMapped');
                        isDeviceMappedControl.setValue(false);
                    }
                }
            })
    }

    findIndexByDeviceID(id) {
        return this.deviceMappingFG.get('deviceRecords')['controls']
            .findIndex((d: any) => d.value.id == id);
    }

    saveDeviceMapping() {
        const deviceRecordsArray = this.deviceMappingFG.get('deviceRecords') as FormArray;

        deviceRecordsArray.controls.forEach((deviceGroup: FormGroup) => {
            const isDeviceMapped = deviceGroup.get('isDeviceMapped').value;
            const type = deviceGroup.get('type').value;
            const mappingRecordsControl = deviceGroup.get('mappingRecords') as FormArray;

            if (type == 'METER' && !isDeviceMapped) {
                mappingRecordsControl.clear();
            }

            deviceGroup.removeControl('parameter');
        });

        this.deviceController.saveDeviceMapping(this.orgID, this.layoutID, this.entityID, this.deviceMappingFG.getRawValue()).subscribe((mappedDevicesRes: ResponseM) => {
            this.tscCommonService.back();
        },
            error => {
                console.log('error in saveDeviceMapping() - ', error);
            });
    }

}