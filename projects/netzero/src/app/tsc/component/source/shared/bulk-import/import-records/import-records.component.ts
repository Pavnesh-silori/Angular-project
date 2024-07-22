import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

// tsc-library
import { StorageService } from '@library/storage-service';
// /tsc-library/

@Component({
	selector: 'app-import-records',
	templateUrl: './import-records.component.html',
	styleUrls: ['./import-records.component.scss']
})

export class ImportRecordsComponent implements OnInit {
	rootOrgID: any;
	isPreviewRecordsError: boolean = false;
	@Input('sourceName') pageTitle: string = "Products";
	// @ViewChild(ConfigureRecordsComponent) configureRecordsComponent: ConfigureRecordsComponent;
	// @ViewChild(PreviewRecordErrorComponent) previewRecordErrorComponent: PreviewRecordErrorComponent;
	@ViewChild('stepper') stepper: MatStepper;

	importedRecords: any;
	previewRecords: any;
	isPreviewRecord: boolean = false;

	constructor(private storageService: StorageService) {
	}

	ngOnInit(): void {
		this.rootOrgID = this.storageService.getStorage('rootOrgID');
		// this.importedRecords = {
		// 	records: [
		// 		{
		// 			"id": null,
		// 			"recordID": null,
		// 			"code": "24",
		// 			"name": "Abc",
		// 			"description": "abc",
		// 			"categoryID": [],
		// 			"category": [
		// 				"absdf"
		// 			],
		// 			"isCbamCompliant": false,
		// 			"cn": "324",
		// 			"hsn": "234",
		// 			"ean": "234",
		// 			"upc": "234",
		// 			"isbn": "324",
		// 			"sac": null,
		// 			"productTypeID": null,
		// 			"productTypeName": "absdf",
		// 			"materialTypeID": null,
		// 			"materialTypeName": null,
		// 			"materialOriginTypeID": null,
		// 			"materialOriginTypeName": null,
		// 			"categoryStdID": null,
		// 			"categoryStdName": "",
		// 			"validator": {
		// 				"code": null,
		// 				"name": null,
		// 				"cn": null,
		// 				"isValid": false,
		// 				"productTypeName": "Product type is missing.",
		// 				"productCategory": "Product category mismatched."
		// 			}
		// 		}
		// 	],
		// 	headers: ['includeExcludeRecord', 'internalCode', 'name', 'description', 'type', 'category', 'isCbamCompliant', 'cnCode', 'hsnCode',
		// 		'eanCode', 'upcCode', 'isbnCode'],
		// };
		// this.isPreviewRecordsError = true;
	}

	// stepperTitle(index: number): string {
	// 	switch (index) {
	// 		case 0:
	// 			return 'New Report';
	// 		case 1:
	// 			return 'New Report: Assign';
	// 		default:
	// 			return 'Unknown';
	// 	}
	// }

	// nextStepper(event) {
	// 	console.log(event);
	// 	this.previewRecordsError = true;
	// 	this.stepper.next();
	// }

	configureRecords(event) {
		this.importedRecords = event;
		this.isPreviewRecordsError = true;
		this.stepper.next();
	}

	previewErrorRecordsEmit(event){
		this.previewRecords = event;
		console.log(this.previewRecords);
		this.isPreviewRecord = true;
		this.stepper.next();
	}

	nextStepper(event) {
		console.log(event);
		this.stepper.next();
	}
}
