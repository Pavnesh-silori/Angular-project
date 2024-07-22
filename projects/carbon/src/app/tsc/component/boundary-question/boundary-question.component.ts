import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { isEqual } from 'lodash';

import { BoundaryQuestionController } from '@carbon/controller/boundary-question.controller'; 

import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { InvalidForm, ButtonLabelEnum, ResponseM } from '@library/tsc-common';

@Component({
	selector: 'app-boundary-question',
	templateUrl: './boundary-question.component.html',
	styles: [
	]
})

export class BoundaryQuestionComponent implements OnInit {
	ButtonLabelEnum = ButtonLabelEnum;

	currentOrgID: any;
	bqList: any;

	scope1BQFG: FormGroup;
	scope2BQFG: FormGroup;
	scope3BQFG: FormGroup;

	showScope1Edit: boolean;
	showScope2Edit: boolean;
	showScope3Edit: boolean;

	disableScope1Form: boolean;
	disableScope2Form: boolean;
	disableScope3Form: boolean;

	scope1isEqual: boolean = true;
	scope1initialObject: any;
	scope2isEqual: boolean = true;
	scope2initialObject: any;
	scope3isEqual: boolean = true;
	scope3initialObject: any;

	scope1Message: string;
	scope2Message: string;
	scope3Message: string;
	scope1ActivityList: string[] = [];
	scope2ActivityList: string[] = [];
	scope3ActivityList: string[] = [];

	scope1Activity = [
		{ key: 'stationary-combustion', name: 'Stationary combustion' },
		{ key: 'mobile-combustion', name: 'Mobile combustion' },
		{ key: 'refrigeration-ac-and-fire-suppression', name: 'Refrigeration, AC and Fire Suppression' },
		{ key: 'other-fugitive-emission', name: 'Sector Specific Fugitive Emission' },
		{ key: 'process-emission', name: 'Process Emission' }
	];

	scope2Activity = [
		{ key: 'purchased-electricity', name: 'Purchased Electricity' },
		{ key: 'purchased-heat-steam', name: 'Purchased Heat/Steam' },
		{ key: 'purchased-cooling', name: 'Purchased Cooling' }
	];

	scope3Activity = [
		{ key: 'purchased-goods-and-services', name: 'Category 1: Purchased goods and services' },
		{ key: 'capital-goods', name: 'Category 2: Capital goods' },
		{ key: 'upstream-transportation-and-distribution', name: 'Category 4: Upstream transportation and distribution' },
		{ key: 'waste-generated-in-operations', name: 'Category 5: Waste generated in operations' },
		{ key: 'business-travel', name: 'Category 6: Business travel' },
		{ key: 'employee-commuting', name: 'Category 7: Employee commuting' },
		{ key: 'downstream-transportation-and-distribution', name: 'Category 9: Downstream transportation and distribution' }
	];


	constructor(
		private scopeFB: FormBuilder,
		private boundaryQuestionController: BoundaryQuestionController,
		private storageService: StorageService,
		private toasterService: ToastrService,
	) { }

	ngOnInit(): void {
		this.currentOrgID = this.storageService.getStorage('currentOrgID');

		this.scope1BQInit();
		this.scope2BQInit();
		this.scope3BQInit();
		this.getBoundaryQuestions();
	}

	scope1BQInit() {
		const formControlsConfig = {};
		this.scope1Activity.forEach(activity => {
			formControlsConfig[activity.key] = [null, Validators.required];
		});

		this.scope1BQFG = this.scopeFB.group(formControlsConfig);
	}

	scope2BQInit() {
		const formControlsConfig = {};
		this.scope2Activity.forEach(activity => {
			formControlsConfig[activity.key] = [null, Validators.required];
		});

		this.scope2BQFG = this.scopeFB.group(formControlsConfig);
	}

	scope3BQInit() {
		const formControlsConfig = {};
		this.scope3Activity.forEach(activity => {
			formControlsConfig[activity.key] = [null, Validators.required];
		});

		this.scope3BQFG = this.scopeFB.group(formControlsConfig);
	}

	patchScope1BQ() {
		this.scope1BQFG.patchValue(this.bqList.scope1);

		if (Object.keys(this.bqList.scope1).length > 0) {
			this.scope1initialObject = this.scope1BQFG.value;
			this.scope1isEqual = true;
		}
	}

	patchScope2BQ() {
		this.scope2BQFG.patchValue(this.bqList.scope2);

		if (Object.keys(this.bqList.scope2).length > 0) {
			this.scope2initialObject = this.scope2BQFG.value;
			this.scope2isEqual = true;
		}
	}

	patchScope3BQ() {
		this.scope3BQFG.patchValue(this.bqList.scope3);

		if (Object.keys(this.bqList.scope2).length > 0) {
			this.scope3initialObject = this.scope3BQFG.value;
			this.scope3isEqual = true;
		}
	}

	ngAfterViewInit() {
		this.scope1BQFG.valueChanges
			.subscribe(() => {
				this.scope1isEqual = isEqual(this.scope1initialObject, this.scope1BQFG.value);
				this.scope1InfoMessage();
			});

		this.scope2BQFG.valueChanges
			.subscribe(() => {
				this.scope2isEqual = isEqual(this.scope2initialObject, this.scope2BQFG.value);
				this.scope2InfoMessage();
			});

		this.scope3BQFG.valueChanges
			.subscribe(() => {
				this.scope3isEqual = isEqual(this.scope3initialObject, this.scope3BQFG.value);
				this.scope3InfoMessage();
			});
	}

	changeFormEnabledFlag(scope) {
		if (scope == 'One') {
			this.disableScope1Form = !this.disableScope1Form;
		} else if (scope == 'Two') {
			this.disableScope2Form = !this.disableScope2Form;
		} else if (scope = 'Three') {
			this.disableScope3Form = !this.disableScope3Form;
		}
	}

	showEditButton() {
		if (Object.keys(this.bqList.scope1).length > 0) {
			this.showScope1Edit = true;
			this.disableScope1Form = true;
		}

		if (Object.keys(this.bqList.scope2).length > 0) {
			this.showScope2Edit = true;
			this.disableScope2Form = true;
		}

		if (Object.keys(this.bqList.scope3).length > 0) {
			this.showScope3Edit = true;
			this.disableScope3Form = true;
		}
	}

	onSubmit(scopeFG) {
		if (scopeFG.invalid) {
			scopeFG.markAllAsTouched();
			this.toasterService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
			return;
		}

		this.createBoundaryQuestion(scopeFG.value);
	}

	getBoundaryQuestions() {
		this.boundaryQuestionController.getBoundaryQuestions(this.currentOrgID).subscribe((response) => {
			this.bqList = response;

			this.patchScope1BQ();
			this.patchScope2BQ();
			this.patchScope3BQ();
			this.showEditButton();
		}, error => {
			console.log('error in getBoundaryQuestions() -', error);
		});
	}

	createBoundaryQuestion(formData) {
		this.boundaryQuestionController.createBoundaryQuestions(this.currentOrgID, formData).subscribe((response: ResponseM) => {

			this.getBoundaryQuestions();
			let toast = this.toasterService.getToastStatus(response.status);
			this.toasterService.openToast(toast.title, response.message, toast.color);
		}, error => {
			console.log('error in createBoundaryQuestion() -', error);
		});
	}

	scope1InfoMessage() {
		this.scope1ActivityList = this.scope1Activity
			.filter(activity => this.scope1BQFG.get(activity.key).value)
			.map(activity => activity.name);

		this.scope1Message = this.getMessage(this.scope1ActivityList);
	}

	scope2InfoMessage() {
		this.scope2ActivityList = this.scope2Activity
			.filter(activity => this.scope2BQFG.get(activity.key).value)
			.map(activity => activity.name);

		this.scope2Message = this.getMessage(this.scope2ActivityList);
	}

	scope3InfoMessage() {
		this.scope3ActivityList = this.scope3Activity
			.filter(activity => this.scope3BQFG.get(activity.key).value)
			.map(activity => activity.name);

		this.scope3Message = this.getMessage(this.scope3ActivityList);
	}

	getMessage(activityList) {
		return [activityList.slice(0, -1).join(', '), activityList.slice(-1)[0]].join(activityList.length < 2 ? '' : ' and ');
	}

	errorHandling = (control: string, scopeFG): boolean => {
		return (scopeFG.get(control).hasError('required') && scopeFG.get(control).touched == true);
	}
}
