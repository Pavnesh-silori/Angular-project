import { Component, OnInit } from '@angular/core';

import { ProductServiceTabTypeEnum } from '@netzero/enum/product-service-type.enum';

//  tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, TABLE_CONSTANT } from '@library/tsc-common';
// / tsc-library

import { ProductAndServiceController } from '@netzero/controller/product-and-service.controller';
import { ActivatedRoute } from '@angular/router';

import { combineLatest } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
@Component({
	selector: 'app-emission-record',
	templateUrl: './emission-record.component.html',
})

export class EmissionRecordComponent implements OnInit {

	TABLE_CONSTANT = TABLE_CONSTANT;
	COMMON_CONSTANT = COMMON_CONSTANT;

	currentOrgID: any;
	sourceID: any;
	source: string;
	emissionRecords: any[] = [];
	groupedEmissionRecords: any[] = [];

	constructor(
		private storageService: StorageService,
		private productAndServiceController: ProductAndServiceController,
		private activatedRoute: ActivatedRoute
	) { }

	ngOnInit(): void {

		this.currentOrgID = this.storageService.getStorage('currentOrgID');
		combineLatest([
			this.activatedRoute.parent?.parent?.params.pipe(filter(params => !!params)),
			this.activatedRoute.data.pipe(filter(data => !!data))
		]).pipe(
			take(1), // Take only the first emission and automatically unsubscribe
			map(([params, data]) => ({
				sourceID: params['productID'] ?? null, // Use null coalescing operator to handle undefined or null
				source: data['tabType'] ?? null
			})),
			filter(({ sourceID, source }) => sourceID && source) // Ensure both sourceID and source are not null
		).subscribe(({ sourceID, source }) => {
			this.sourceID = sourceID;
			this.source = source;
		});
		console.log('tab type', this.source)
	}

	ngAfterViewInit() {
		this.getEmissionRecords();
	}

	getEmissionRecords() {
		this.productAndServiceController.getEmissionRecordsBySourceID(this.currentOrgID, this.source.toLowerCase(), this.sourceID).subscribe((res: any) => {
			this.emissionRecords = res;
		});

		const emissionRecordsByKeyID = {};
		this.emissionRecords.forEach(record => {
			emissionRecordsByKeyID[record.keyID] = record;
		});
	}

}