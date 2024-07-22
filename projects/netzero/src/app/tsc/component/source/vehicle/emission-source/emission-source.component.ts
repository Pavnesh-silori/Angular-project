import { Component, OnInit } from '@angular/core';

// tsc-library
import { MessageAlertIconEnum, MessageAlertTypeEnum } from '@library/tsc-common';
import { MessagesConstant } from '@netzero/enum/message.enum';

// /tsc-library


@Component({
	selector: 'app-emission-source',
	templateUrl: './emission-source.component.html',
	styles: []
})

export class EmissionSourceComponent implements OnInit {

	messageAlertIconEnum = MessageAlertIconEnum;
	messageAlertTypeEnum = MessageAlertTypeEnum;
	aggregatedFormData: any = {};
	messagesConstant = MessagesConstant;

	constructor() {
	}

	ngOnInit(): void {
	}

	updateFormData(childData: any, childIdentifier: string) {
		console.log('Child Form Data:', childData);
		// Update the aggregated form data with child form data
		this.aggregatedFormData[childIdentifier] = childData;
		console.log('Updated Aggregated Form Data:', this.aggregatedFormData);
	}

}