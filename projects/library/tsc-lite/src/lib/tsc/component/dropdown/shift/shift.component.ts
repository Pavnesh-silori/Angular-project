import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Shift, ShiftM } from '../../../model/shift.model';

import { ShiftService } from '../../../service/shift.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, FormErrorEnum, MaterialFormFieldAppearance, MatSelectSearchService } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-shift',
    templateUrl: './shift.component.html',
    styles: [
    ]
})
export class ShiftComponent implements OnInit {

    @Output()
    emitFilter = new EventEmitter();

    COMMON_CONSTANT = COMMON_CONSTANT;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    FormErrorEnum = FormErrorEnum;

    orgID: any;

    shiftM = [new Shift()];

    allShiftID: any[] = [];
    totalShiftCount: number = 0;

    multiSelectedShiftFC: FormControl = new FormControl([], [Validators.required]);

    shiftSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    constructor(
        private storageService: StorageService,
        private shiftService: ShiftService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.getShift();
    }

    async getShift() {
        this.shiftM = <ShiftM[]>await this.shiftService.getShift(this.orgID, 'NO');

        this.shiftSearchUtil.entityArr = this.shiftM;
        this.shiftSearchUtil.createSubscription();

        this.totalShiftCount = this.shiftM.length;
        this.shiftM.forEach(shift => this.allShiftID.push(shift['id']));
        this.emitFilter.emit();
    }

    selectAllShifts() {
        if (!this.multiSelectedShiftFC.value.includes(-1)) {
            this.multiSelectedShiftFC.reset([]);
            return;
        }
        this.multiSelectedShiftFC.setValue([-1, ...this.allShiftID]);
        this.emitFilter.emit();
    }

    selectedShift() {
        const selected = this.multiSelectedShiftFC.value;

        if (selected.includes(-1)) {
            selected.shift();
            this.multiSelectedShiftFC.patchValue(selected);
        } else if (this.multiSelectedShiftFC.value.length == this.totalShiftCount) {
            this.allShiftID.splice(0, 0, -1);
            this.multiSelectedShiftFC.patchValue(this.allShiftID);
        } else {
            const filteredSelected = selected.filter(s => s != -1);
            this.multiSelectedShiftFC.patchValue(filteredSelected);
        }
        this.emitFilter.emit();
    }

}
