import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { DropdownTypeEnum } from '../../../enum/dropdown.enum';
import { Device, DeviceM } from '../../../model/device.model';

import { DeviceService } from '../../../service/device.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, FormErrorEnum, MaterialFormFieldAppearance, MatSelectSearchService } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-device',
    templateUrl: './device.component.html',
    styles: [
    ]
})

export class DeviceComponent implements OnInit {

    @Input()
    dropdownTypeInp: DropdownTypeEnum;

    @Input()
    entityInp: any;

    commonConstant = COMMON_CONSTANT;
    materialFormFieldAppearance = MaterialFormFieldAppearance;
    dropdownTypeEnum = DropdownTypeEnum;
    FormErrorEnum = FormErrorEnum;

    deviceM = [new Device()];

    orgID: any;
    dropdownType: any;
    allDeviceID: any[] = [];
    totalDeviceCount: number = 0;

    deviceFC: FormControl = new FormControl('', [Validators.required]);
    multipleDeviceFC: FormControl = new FormControl([], [Validators.required]);

    deviceSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    @Output()
    emitFilter = new EventEmitter();

    constructor(
        private storageService: StorageService,
        private deviceService: DeviceService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.dropdownTypeInp && this.dropdownTypeInp) {
            this.dropdownType = this.dropdownTypeInp;
        }

        if (this.entityInp && this.entityInp?.length != 0) {
            if (changes.entityInp) {
                this.getDevicesByEntityID(this.entityInp);

                this.deviceFC.patchValue(null);
                this.emitFilter.emit();
            }
        }
    }

    async getDevicesByEntityID(entityID) {
        const requestBody = { 'entityID': this.dropdownTypeInp == 'SINGLE' ? [entityID] : entityID };

        this.deviceM = <DeviceM[]>await this.deviceService.getDevicesByEntityID(this.orgID, requestBody);

        this.deviceSearchUtil.entityArr = this.deviceM;
        this.deviceSearchUtil.createSubscription();

        this.totalDeviceCount = this.deviceM.length;
        this.deviceM.forEach(device => this.allDeviceID.push(device['id']));
        this.emitFilter.emit();
    }

    onChange(selectedDevice) {
        this.deviceFC.patchValue(selectedDevice);
        this.emitFilter.emit();
    }

    selectAllDevices() {
        if (!this.multipleDeviceFC.value.includes(-1)) {
            this.multipleDeviceFC.reset([]);
            return;
        }
        this.multipleDeviceFC.setValue([-1, ...this.allDeviceID]);
        this.emitFilter.emit();
    }

    selectedDevices() {
        const selected = this.multipleDeviceFC.value;

        if (selected.includes(-1)) {
            selected.shift();
            this.multipleDeviceFC.patchValue(selected);
        } else if (this.multipleDeviceFC.value.length == this.totalDeviceCount) {
            this.allDeviceID.splice(0, 0, -1);
            this.multipleDeviceFC.patchValue(this.allDeviceID);
        } else {
            const filteredSelected = selected.filter(s => s != -1);
            this.multipleDeviceFC.patchValue(filteredSelected);
        }

        this.emitFilter.emit();
    }

}