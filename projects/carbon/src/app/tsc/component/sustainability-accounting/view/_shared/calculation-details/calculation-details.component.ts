import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { COMMON_CONSTANT } from '@library/tsc-common';
@Component({
	selector: 'calculation-details',
	templateUrl: './calculation-details.component.html',
	styleUrls: [
		'../../view.component.scss',
		'./calculation-details.component.scss'
	]
})
export class CalculationDetailsComponent implements OnInit {
	COMMON_CONSTANT = COMMON_CONSTANT;

	@Input() emissionData: any;

	calculationDetail: any;

	constructor() { }

	ngOnInit(): void { }

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.emissionData && !changes.emissionData.firstChange) {
			this.calculationDetail = this.emissionData;
		}
	}

}
