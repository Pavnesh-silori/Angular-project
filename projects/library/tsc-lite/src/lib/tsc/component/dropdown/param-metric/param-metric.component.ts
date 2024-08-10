import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Parameter, ParameterM } from '../../../model/parameter.model';

import { ParameterService } from '../../../service/parameter.service';

// tsc-library
import { COMMON_CONSTANT, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// /tsc-library/

@Component({
    selector: 'lib-param-metric',
    templateUrl: './param-metric.component.html',
    styles: [
    ]
})
export class ParamMetricComponent implements OnInit {
    materialFormFieldAppearance = MaterialFormFieldAppearance
    commonConstant = COMMON_CONSTANT;

    FormErrorEnum = FormErrorEnum;

    @Input()
    deviceInp: any;

    orgID: any;
    parameterM = [new Parameter()];

    allParameterID: any[] = [];
    totalParameterCount: number = 0;

    parameterFC: FormControl = new FormControl([], [Validators.required]);
    paramSearchUtil: MatSelectSearchService = new MatSelectSearchService(['label']);

    @Output()
    emitFilter = new EventEmitter();

    constructor(
        private storageService: StorageService,
        private parameterService: ParameterService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.deviceInp && this.deviceInp) {
            this.getParameterByDeviceID(this.deviceInp);

            this.parameterFC.reset([]);
            this.emitFilter.emit();
        }
    }

    async getParameterByDeviceID(selectedDevices) {
        this.allParameterID = [];

        let requestBody = {};
        requestBody['deviceID'] = [selectedDevices];

        this.parameterM = <ParameterM[]>await this.parameterService.getParameterByDeviceID(this.orgID, requestBody);

        this.paramSearchUtil.entityArr = this.parameterM;
        this.paramSearchUtil.createSubscription();

        this.totalParameterCount = this.parameterM.length;
        this.parameterM.forEach(parameter => this.allParameterID.push(parameter['paramMetric']));

        this.emitFilter.emit();
    }

    selectAllParameters() {
        if (!this.parameterFC.value.includes(-1)) {
            this.parameterFC.reset([]);
            return;
        }
        this.parameterFC.setValue([-1, ...this.allParameterID]);

        this.emitFilter.emit();
    }

    selectedParameters() {
        const selected = this.parameterFC.value;

        if (selected.includes(-1)) {
            selected.shift();
            this.parameterFC.patchValue(selected);
        } else if (this.parameterFC.value.length == this.totalParameterCount) {
            this.allParameterID.splice(0, 0, -1);
            this.parameterFC.patchValue(this.allParameterID);
        } else {
            const filteredSelected = selected.filter(s => s != -1);
            this.parameterFC.patchValue(filteredSelected);
        }

        this.emitFilter.emit();
    }

}
