import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { LIST_CONSTANT } from '../../../constant/list.constant';

// tsc-library
import { FormErrorEnum, MaterialFormFieldAppearance } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-aggregation',
    templateUrl: './aggregation.component.html',
    styles: [
    ]
})
export class AggregationComponent implements OnInit {

    listConstant = LIST_CONSTANT;
    materialFormFieldAppearance = MaterialFormFieldAppearance;

    FormErrorEnum = FormErrorEnum;

    allAggregationIDs: any[] = [];
    totalAggregationCount: number = 0;
    aggregationFC: FormControl = new FormControl(['avg'], [Validators.required]);

    @Output()
    emitFilter = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
        let aggregationList = this.listConstant.AGGREGATION;

        this.totalAggregationCount = aggregationList.length;
        aggregationList.forEach(aggregation => this.allAggregationIDs.push(aggregation['value']));
    }

    ngAfterViewInit() {
        this.emitFilter.emit();
    }

    selectAllAggregation() {
        if (!this.aggregationFC.value.includes(-1)) {
            this.aggregationFC.reset([]);
            return;
        }
        this.aggregationFC.setValue([-1, ...this.allAggregationIDs]);
        this.emitFilter.emit();
    }

    selectedAggregation() {
        const selected = this.aggregationFC.value;

        if (selected.includes(-1)) {
            selected.shift();
            this.aggregationFC.patchValue(selected);
        } else if (this.aggregationFC.value.length == this.totalAggregationCount) {
            this.allAggregationIDs.splice(0, 0, -1);
            this.aggregationFC.patchValue(this.allAggregationIDs);
        } else {
            const filteredSelected = selected.filter(s => s != -1);
            this.aggregationFC.patchValue(filteredSelected);
        }

        this.emitFilter.emit();
    }

}
