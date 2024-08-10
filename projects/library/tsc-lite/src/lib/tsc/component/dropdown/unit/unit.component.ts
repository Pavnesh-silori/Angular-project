import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Unit, UnitM } from '../../../model/unit.model';

import { UnitService } from '../../../service/unit.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, FormErrorEnum, MaterialFormFieldAppearance, MatSelectSearchService } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-unit',
    templateUrl: './unit.component.html',
    styles: [
    ]
})

export class UnitComponent implements OnInit {

    @Input()
    selectedParameterID: any;

    COMMON_CONSTANT = COMMON_CONSTANT;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    FormErrorEnum = FormErrorEnum;

    @Output()
    emitFilter = new EventEmitter();

    orgID: any;

    unitM = [new Unit()];

    selectedUnitFC: FormControl = new FormControl('', [Validators.required]);

    unitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    constructor(
        private storageService: StorageService,
        private unitService: UnitService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.selectedParameterID) {
            if (changes.selectedParameterID) {
                this.getUnitByParameterID(this.selectedParameterID);
            }
        }
    }

    async getUnitByParameterID(parameterID) {
        this.unitM = <UnitM[]>await this.unitService.getUnitByParameterID(this.orgID, parameterID);

        this.unitSearchUtil.entityArr = this.unitM;
        this.unitSearchUtil.createSubscription();
    }

    unitChange(selectedUnit) {
        this.selectedUnitFC.patchValue(selectedUnit);
        this.emitFilter.emit();
    }

}