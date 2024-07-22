import { Component, Input, OnInit } from '@angular/core';

import { CalculationApproachKeyIDEnum } from '@carbon/enum/equiment.enum';
import { COMMON_CONSTANT } from '@library/tsc-common';
@Component({
	selector: 'factor-details',
	templateUrl: './factor-details.component.html',
	styleUrls: ['../../record-details.component.scss']
})
export class FactorDetailsComponent implements OnInit {
	CalculationApproachKeyIDEnum = CalculationApproachKeyIDEnum
	COMMON_CONSTANT = COMMON_CONSTANT;

	@Input() gwpResponse: any;

	factorDetails: any;
	gasResponse: any;

	constructor() { }

	ngOnInit(): void { }

	ngOnChanges() {
		this.factorDetails = this.gwpResponse['factorDetails'];
		this.gasResponse = this.gwpResponse['gasGwpDataSet'];
	}

}
