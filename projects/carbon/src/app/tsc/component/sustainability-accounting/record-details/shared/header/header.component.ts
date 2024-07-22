import { Component, Input, OnInit } from '@angular/core';

import { CalculationApproachKeyIDEnum } from '@carbon/enum/equiment.enum';
@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['../../record-details.component.scss']
})
export class HeaderComponent implements OnInit {
	CalculationApproachKeyIDEnum = CalculationApproachKeyIDEnum

	@Input() recordData: any
	@Input() gasName: any

	constructor() { }

	ngOnInit(): void {
	}

}
