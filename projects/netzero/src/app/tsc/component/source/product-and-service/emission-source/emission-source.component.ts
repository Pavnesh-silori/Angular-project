import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// tsc-library
import { MessageAlertIconEnum, MessageAlertTypeEnum } from '@library/tsc-common';
import { MessagesConstant } from '@netzero/enum/message.enum';
import { combineLatest } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
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
	activityKeyID: any;
	source: string;
	sourceID: any;
	messagesConstant = MessagesConstant;

	constructor(private activatedRoute: ActivatedRoute) {
	}

	ngOnInit(): void {
		combineLatest([
			this.activatedRoute.parent?.parent?.params.pipe(filter(params => !!params)),
			this.activatedRoute.data.pipe(filter(data => !!data))
		]).pipe(
			take(1), // Take only the first emission and automatically unsubscribe
			map(([params, data]) => ({
				sourceID: params['productID'] ?? null, // Use null coalescing operator to handle undefined or null
				source: data['tabType'] ?? null,
				activityKeyID : data['ActivityKeyID'] ?? null
			})),
			filter(({ sourceID, source }) => sourceID && source) // Ensure both sourceID and source are not null
		).subscribe(({ sourceID, source, activityKeyID }) => {
			this.sourceID = sourceID;
			this.source = source;
			this.activityKeyID = activityKeyID;
		});
	}

	updateFormData(childData: any, childIdentifier: string) {
		// Update the aggregated form data with child form data
		this.aggregatedFormData[childIdentifier] = childData;
	}



}