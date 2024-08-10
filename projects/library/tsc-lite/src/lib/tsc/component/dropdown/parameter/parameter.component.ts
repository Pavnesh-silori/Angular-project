import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Parameter, ParameterM } from '../../../model/parameter.model';

import { ParameterService } from '../../../service/parameter.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, FormErrorEnum, MaterialFormFieldAppearance, MatSelectSearchService } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-parameter',
    templateUrl: './parameter.component.html',
    styles: [
    ]
})
export class ParameterComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    FormErrorEnum = FormErrorEnum;

    @Output()
    emitFilter = new EventEmitter();

    orgID: any;

    parameterM = [new Parameter()];

    selectedParameterFC: FormControl = new FormControl('', [Validators.required]);

    parameterSearchUtil: MatSelectSearchService = new MatSelectSearchService(['label']);

    constructor(
        private storageService: StorageService,
        private parameterService: ParameterService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.getParameterByLayoutID();
    }

    async getParameterByLayoutID() {
        this.parameterM = <ParameterM[]>await this.parameterService.getParameterByLayoutID(this.orgID);

        this.parameterSearchUtil.entityArr = this.parameterM;
        this.parameterSearchUtil.createSubscription();
    }

    parameterChange(selectedParameter) {
        this.selectedParameterFC.patchValue(selectedParameter);
        this.emitFilter.emit();
    }

}
