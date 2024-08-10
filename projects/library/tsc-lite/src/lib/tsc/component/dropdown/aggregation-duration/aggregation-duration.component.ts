import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { LIST_CONSTANT } from '../../../constant/list.constant';

// tsc-library
import { FormErrorEnum, MaterialFormFieldAppearance } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-aggregation-duration',
    templateUrl: './aggregation-duration.component.html',
    styles: [
    ]
})

export class AggregationDurationComponent implements OnInit {

    listConstant = LIST_CONSTANT;
    materialFormFieldAppearance = MaterialFormFieldAppearance;

    FormErrorEnum = FormErrorEnum;

    aggDurationFC: FormControl = new FormControl('min_15', [Validators.required]);

    @Output()
    emitFilter = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.emitFilter.emit();
    }

    onChange(selectedAD) {
        this.aggDurationFC.patchValue(selectedAD);
        this.emitFilter.emit();
    }

}
