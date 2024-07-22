import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { ReplaySubject, Subject } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { startWith } from 'rxjs/operators';

import * as moment from 'moment';

import { EmissionDataComponent } from '../emission-data/emission-data.component';

import { SubsidiaryEnum } from '@carbon/enum/subsidiary.enum';

import { SubsidiaryEmissionDataController } from '@carbon/controller/subsidiary-emission-data.controller';
import { SubsidiaryController } from '@carbon/controller/subsidiary.controller';

import { ConsolidationApproachService } from '@carbon/service/consolidation-approach.service';

// tsc-library
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, DialogEnum, FormAction, InvalidForm, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';

// /tsc-library
@Component({
	selector: 'app-subsidiary-form',
	templateUrl: './subsidiary-form.component.html',
	styleUrls: ['./subsidiary-form.component.scss']
})

export class SubsidiaryFormComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

	currentOrgID: any;
	rootOrgID: any;

	formDataFG: FormGroup;
	orgSubsidaryList: any[];
	consolidationApproachList: any[] = [];
	approachList: any[];
	action: string;
	isDisable: boolean = false;
	emissionData: any;
	pageTitle: string;
	submitBtnLabel: string = '';
	subsidaryEmissionID: any;

	subsidaryFilterFC: FormControl = new FormControl();
	subsidaryFilterUnsubscribe = new Subject<void>();
	subsidaryFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

	daterange: FormControl = new FormControl(null, Validators.required);
	startDate: any;
	endDate: any;
	accountingPeriod: any;

	subsidaryEmissionData: any;
	selectedConsolidationApproaches: any[] = [];

    subSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);


	subsidiary: any = null;
	isInternal: boolean = false;

	@ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;
	@ViewChild('emissionDataComp') emissionDataComp: EmissionDataComponent;

	constructor(
		private fb: FormBuilder,
		public toastrService: ToastrService,

		private storageService: StorageService,
		private consolidationApproachService: ConsolidationApproachService,
		private subsidiaryEmissionDataController: SubsidiaryEmissionDataController,
		private subsidiaryController: SubsidiaryController,
		private dialogRef: MatDialogRef<SubsidiaryFormComponent>,
		@Inject(MAT_DIALOG_DATA) private data,
	) {
		dialogRef.disableClose = true;
		this.action = this.data['action'];
		this.currentOrgID = this.data['currentOrgID'];
	}

	async ngOnInit() {
		this.formDataInit();
		this.currentOrgID = parseInt(this.storageService.getStorage('currentOrgID'));
		this.rootOrgID = parseInt(this.storageService.getStorage('rootOrgID'));
		this.getSubsidaryByOrgID(this.currentOrgID);

		this.getAllConsolidationApproachByOrgID();

		this.formDataFG.valueChanges.pipe(startWith({})).subscribe((value) => {
		});

		if (this.action == FormAction.CREATE) {
			this.submitBtnLabel = ButtonLabelEnum.CREATE_BTN_LABEL;
			this.pageTitle = "New";
		}

		if (this.action == FormAction.UPDATE) {
			this.submitBtnLabel = ButtonLabelEnum.SAVE_BTN_LABEL;
			this.pageTitle = "Edit";
			this.subsidaryEmissionID = this.data['subsidaryEmissionID'];
			this.isDisable = true;

			this.getSubsidaryEmissionDataByID();
		}
	}

	formDataInit() {
		this.formDataFG = this.fb.group({
			recordID: [],
			requestID: [],
			orgID: [this.currentOrgID],
			rootOrgID: [this.currentOrgID],
			subsidiaryID: [, Validators.required],
			dateRange: [],
			startDate: [, Validators.required,],
			endDate: [, Validators.required],
			consolidationApproachIDs: [, Validators.required],
			consolidationApproachKeyID: [this.selectedConsolidationApproaches],
			emission: []
		});

		this.formDataFG.get('consolidationApproachIDs').valueChanges.pipe(startWith({}))
			.subscribe((caIDs: any[]) => {
				let caIDList = caIDs;
				let consolidationApproachKeyID = [];
				for (let i = 0; i < caIDList?.length; i++) {
					let consolidationApproach = this.consolidationApproachList.find(ca => ca['id'] == caIDList[i]);
					consolidationApproachKeyID.push(consolidationApproach?.keyID);
				}
				this.formDataFG.get('consolidationApproachKeyID').patchValue(consolidationApproachKeyID);
				this.approachList = this.formDataFG.get('consolidationApproachKeyID').value;

			});
	}

	getSubsidaryByOrgID(orgID) {
		this.subsidiaryController.getSubsidiaryByOrgID(orgID, SubsidiaryEnum.APPROVED)
			.subscribe((response: any) => {
				this.orgSubsidaryList = response;
				this.subSelectSearch.entityArr = response;
				this.subSelectSearch.createSubscription();
			});

	}
	setSubsidary(subsidiaryID): boolean {
		this.subsidiary = this.orgSubsidaryList.find(subsidiary => (subsidiary['id'] == subsidiaryID));
		return this.isInternal = this.subsidiary['isInternal'];
	}

	getSubsidiaryUserListByOrgIDAndsubsidiaryID(id) {
		this.setSubsidary(id);
	}

	accodingPeriodDateRange(selectedValue: any) {
		this.startDate = moment(selectedValue.startDate).format('YYYY-MM-DD');
		this.endDate = moment(selectedValue.endDate).format('YYYY-MM-DD');
		this.accountingPeriod = this.startDate + ' to ' + this.endDate;
		this.formDataFG.patchValue({
			startDate: this.startDate,
			endDate: this.endDate
		});
	}

	async getAllConsolidationApproachByOrgID() {
		this.consolidationApproachList = await this.consolidationApproachService.getAllConsolidationApproachByOrgID(this.rootOrgID);
		this.selectedConsolidationApproaches = this.consolidationApproachList;

		if (this.action == FormAction.CREATE) {
			let preSelectedConsolidationApproachID: any = [];
			let preSelectedConsolidationApproachKeyID: any = [];

			this.consolidationApproachList.forEach((data) => {
				preSelectedConsolidationApproachID.push(data.id);
				preSelectedConsolidationApproachKeyID.push(data.keyID);
			});

			this.formDataFG.get('consolidationApproachIDs').patchValue(preSelectedConsolidationApproachID);
			this.formDataFG.get('consolidationApproachKeyID').patchValue(preSelectedConsolidationApproachKeyID);
			this.approachList = this.formDataFG.get('consolidationApproachKeyID').value;
		}
	}

	getSubsidaryEmissionDataByID() {
		this.subsidiaryEmissionDataController.getSubsidaryEmissionDataByID(this.currentOrgID, this.subsidaryEmissionID).subscribe(response => {
			this.subsidaryEmissionData = response;
			this.patchSubsidiaryEmissionData(this.subsidaryEmissionData);
		},
			error => {
				console.log('error in getSubsidiaryEmission -', error);
			});
	}

	patchSubsidiaryEmissionData(subsidaryEmissionData) {
		this.formDataFG.patchValue({
			recordID: subsidaryEmissionData['recordID'],
			orgID: subsidaryEmissionData['rootOrgID'],
			rootOrgID: subsidaryEmissionData['rootOrgID'],
			subsidiaryID: subsidaryEmissionData['subsidiaryID'],
			startDate: subsidaryEmissionData['startDate'],
			endDate: subsidaryEmissionData['endDate'],
			consolidationApproachIDs: subsidaryEmissionData['consolidationApproachIDs'],
			consolidationApproachKeyID: subsidaryEmissionData['consolidationApproachKeyID'],
			emission: subsidaryEmissionData['emission'],

		});

		this.daterange.patchValue({ startDate: moment(subsidaryEmissionData['startDate']), endDate: moment(subsidaryEmissionData['endDate']) });

		this.getSubsidiaryUserListByOrgIDAndsubsidiaryID(subsidaryEmissionData['subsidiaryID']);

		// this.initialObject = this.equipmentFG.value;
		// this.isEqual = true;
	}

	openCalendar() {
		this.pickerDirective.open();
	}

	submitBtnClk() {

		if (this.formDataFG.invalid) {
			this.formDataFG.markAllAsTouched();
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
			return;
		}

		if (this.emissionDataComp.saveEmission()) {
			this.formDataFG.controls['emission'].patchValue(this.emissionDataComp.activityEmissionDataFG.controls['emissionRecords'].value);

			if (this.action == FormAction.CREATE) {
				this.subsidiaryEmissionDataController.createSubsidaryEmissiondata(this.currentOrgID, this.formDataFG.value).subscribe((response) => {
					this.toastrService.openToast(response['title'], response['message'], response['result']);
					this.dialogRef.close(DialogEnum.SUCCESS_DR);
				}, error => {
					console.log('error in submitEmissionData() -', error);
				});
			}

			if (this.action == FormAction.UPDATE) {
				this.subsidiaryEmissionDataController.updateSubsidaryEmissiondata(this.currentOrgID, this.formDataFG.value, this.subsidaryEmissionID).subscribe((response) => {
					this.toastrService.openToast(response['title'], response['message'], response['result']);
					this.dialogRef.close(DialogEnum.SUCCESS_DR);
				}, error => {
					console.log('error in submitEmissionData() -', error);
				});
			}
		}
	}

	public errorHandling = (control: string, error: string) => {
		return this.formDataFG.controls[control].hasError(error);
	}

	ngOnDestroy() {
		this.subsidaryFilterUnsubscribe.next();
		this.subsidaryFilterUnsubscribe.complete();
	}
}
