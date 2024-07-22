import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import {
	AbstractControl,
	FormBuilder,
	FormArray,
	FormGroup,
	Validators
} from '@angular/forms';

import { EmployeeM } from '@netzero/model/employee.model';
import { TokenService } from '@carbon/service/token.service';
import { EmployeeSurveyController } from '@carbon/controller/employee-survey.controller';
import { CountdownComponent } from 'ngx-countdown';

import { ActivatedRoute, Router } from '@angular/router';
//tsc-library
import { ResponseM, MaterialFormFieldAppearance } from '@library/tsc-common';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
import { ToastrService } from '@library/toastr-service';
// /tsc-library/
@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

	@Input() receivedOtp: string | undefined;
	@Output() checkBoolean = new EventEmitter<{ formCheck: boolean }>();

	MaterialFormFieldAppearance = MaterialFormFieldAppearance;

	isValidOTP1: boolean = false;
	surveyFG: FormGroup;
	emailVerificationFG: FormGroup;

	unitM: UnitM[];
	currentFormArr: FormArray;

	filled: boolean = false;
	submit: boolean = false;

	otpField: boolean = false;
	subTypes: any;
	subTypes1: any;

	modeOfTransport: any = [];
	surveyForm: any = {};
	allTypes: any;

	resendEmailDisable: string = 'YES';

	status: boolean = false;
	authToken: string;
	otpToken: string;
	tokenID: string;
	rootOrgID: any;
	employeeID: number;

	employeeCode: string;
	employeeName: string;
	employeeLastName: string;

	submitBtnLblInput: string = 'Submit and Save';
	remainingTimeInput: number = 600;

	@ViewChild('emailResendCountdown', { static: false }) private emailResendCountdown: CountdownComponent;
	resendOtp: any;

	rowDetails: any = [];

	constructor(
		private activatedRoute: ActivatedRoute,
		private formBuilder: FormBuilder,
		private employeeSurveyController: EmployeeSurveyController,
		private toastrService: ToastrService,
		private router: Router,
		private tokenService: TokenService,
		private unitService: UnitService
	) { }

	ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe(queryParam => {
			this.authToken = queryParam.token
			this.tokenID = queryParam.tokenID;
			this.rootOrgID = queryParam.rootOrgID;
			this.employeeID = Number(queryParam.employeeID);
			this.tokenValidate();
		})
		this.getEmployeeData();
		this.getUnit();
		this.employeeFG();
	}

	employeeFG() {
		this.surveyFG = this.formBuilder.group({
			employeeID: [this.employeeID],
			workingDays: ['', [Validators.required, Validators.min(0), Validators.max(31)]],
			distanceDetails: this.formBuilder.array([])
		})
		this.createDistanceDetailFormGroup();
		this.updatevalidators();
		this.modeOfTravel();
	}

	modeOfTravel() {
		this.employeeSurveyController.getAllModeOfTransport(this.rootOrgID).subscribe((res: any) => {
			if (res == null) {
				this.modeOfTransport = [];
			} else {
				this.modeOfTransport = res;
			}
		}, error => {
			this.modeOfTransport = [];
			console.error('mode of transport', error);
		})
	}

	createDistanceDetailFormGroup() {
		this.distanceDetailsArray.push(
			this.formBuilder.group({
				distance: ['', [Validators.min(0)]],
				distanceUnitID: ['', Validators.required],
				modeOfTransportID: ['', Validators.required],
				modeOfTransportLevelOneID: [],
				modeOfTransportLevelTwoID: [],
				modeOfTransportLevelThreeID: [],
				rows: [],
				childRows: [],
				childRows1: []
			})
		);
	}

	get distanceDetailsArray(): FormArray {
		return (this.surveyFG.get('distanceDetails') as FormArray);
	}

	add() {
		this.distanceDetailsArray.push(this.newFormArray());
		this.updatevalidators();
	}

	newFormArray() {
		return this.formBuilder.group({
			distance: ['', [Validators.min(0)]],
			distanceUnitID: ['',],
			modeOfTransportID: [''],
			rows: [],
			modeOfTransportLevelOneID: [],
			modeOfTransportLevelTwoID: [],
			modeOfTransportLevelThreeID: [],
			childRows: [],
			childRows1: []
		});
	}

	updatevalidators() {
		this.currentFormArr = this.surveyFG.get('distanceDetails') as FormArray;
		for (let i = 0; i < this.currentFormArr.controls.length; i++) {
			let item = this.currentFormArr.controls[i];
			this.removeValidators(item);
			item.valueChanges.subscribe(() => {
				this.removeValidators(item);
				this.isFormFilled(item);
				this.submit = false;
				if (this.filled) {
					this.submit = true;
					this.addValidators(item);
				}
				this.filled = false;
			});
		}
	}

	addValidators(formGroup) {
		formGroup.get('distance').addValidators([Validators.required]);
		formGroup.get('distanceUnitID').addValidators([Validators.required]);
		formGroup.get('modeOfTransportID').addValidators([Validators.required]);

		// this.handleDynamicValidation(formGroup.get('modeOfTransport'), );
		this.handleDynamicValidation(formGroup.get('modeOfTransportLevelOneID'), formGroup.get('rows'));
		this.handleDynamicValidation(formGroup.get('modeOfTransportLevelTwoID'), formGroup.get('childRows'));
		this.handleDynamicValidation(formGroup.get('modeOfTransportLevelThreeID'), formGroup.get('childRows1'));

		this.updateValueAndValidity(formGroup);
	}

	handleDynamicValidation(control: AbstractControl, control1: AbstractControl): void {
		if (control1.value !== null) {
			control.setValidators([Validators.required]);
		} else {
			control.clearValidators();
		}
	}

	removeValidators(formGroup) {
		formGroup.get('distance').clearValidators();
		formGroup.get('distanceUnitID').clearValidators();
		formGroup.get('modeOfTransportID').clearValidators();
		formGroup.get('modeOfTransportLevelOneID').clearValidators();
		formGroup.get('modeOfTransportLevelTwoID').clearValidators();
		this.updateValueAndValidity(formGroup);
	}

	updateValueAndValidity(formGroup) {
		formGroup.get('distance').updateValueAndValidity({ emitEvent: false });
		formGroup.get('distanceUnitID').updateValueAndValidity({ emitEvent: false });
		formGroup.get('modeOfTransportID').updateValueAndValidity({ emitEvent: false });
		formGroup.get('modeOfTransportLevelOneID').updateValueAndValidity({ emitEvent: false });
		formGroup.get('modeOfTransportLevelTwoID').updateValueAndValidity({ emitEvent: false });
		formGroup.get('modeOfTransportLevelThreeID').updateValueAndValidity({ emitEvent: false });
	}

	isFormFilled(formGroup) {
		if (formGroup.get('distance').value != null) this.filled = true;
		if (formGroup.get('distanceUnitID').value != null) this.filled = true;
		if (formGroup.get('modeOfTransportID').value != null) this.filled = true;
		if (formGroup.get('modeOfTransportLevelOneID').value != null) this.filled = true;
		if (formGroup.get('modeOfTransportLevelTwoID').value != null) this.filled = true;
		if (formGroup.get('modeOfTransportLevelThreeID').value != null) this.filled = true;

	}

	async getUnit() {
		try {
			this.unitM = await this.unitService.getUnitUsingPublicUrl([`type:${UnitTypeKeyID.LENGTH}`]);
		} catch (error) {
			console.error(error);
		}
	}

	getEmployeeData() {
		this.employeeSurveyController.getEmployeeData(this.employeeID).subscribe((res: EmployeeM[]) => {
			this.employeeCode = res['code'];
			this.employeeName = res['firstName'];
			this.employeeLastName = res['lastName']
		})
	}

	async tokenValidate() {
		let tokenM: ResponseM;
		let tokenRes: any;

		tokenM = <ResponseM>await this.tokenService.tokenValidate(this.authToken, this.tokenID);
		tokenRes = tokenM.status;

		if (tokenRes != 'success') {
			this.router.navigate(['/link-expired']);
		} else {
			return tokenM;
		}
	}

	onRowClick(event: any, index: number) {
		this.modeOfTransport.forEach((res: any) => {
			if (event == res.id) {
				this.allTypes = res.subList;
			}
		})

		this.setModeOfTravelLabels(event, index);

		const formArray = this.surveyFG.get('distanceDetails') as FormArray;
		const formGroup = formArray.at(index) as FormGroup;
		formGroup.get('rows').setValue(this.allTypes);

		if (formGroup.get('modeOfTransportID').value != null) {
			formGroup.patchValue({
				modeOfTransportLevelOneID: null,
				modeOfTransportLevelTwoID: null,
				modeOfTransportLevelThreeID: null,
			});
		}
	}

	setModeOfTravelLabels(event: number, index: number): void {
		while (this.rowDetails.length <= index) {
			this.rowDetails.push({ event: 0, labels: { label1: '', label2: '', label3: '' } });
		}

		switch (event) {
			case 1:
				this.rowDetails[index].labels.label1 = 'Choose vehicle for land';
				this.rowDetails[index].labels.label2 = 'Choose vehicle by size';
				this.rowDetails[index].labels.label3 = 'Choose your vehicle';
				break;
			case 2:
				this.rowDetails[index].labels.label1 = 'Choose vehicle for water';
				this.rowDetails[index].labels.label2 = 'Choose Vehicle by segment';
				this.rowDetails[index].labels.label3 = 'Choose your vehicle';
				break;
			case 3:
				this.rowDetails[index].labels.label1 = 'Choose vehicle for air';
				this.rowDetails[index].labels.label2 = 'Choose Vehicle by distance';
				this.rowDetails[index].labels.label3 = 'Choose Vehicle by class';
				break;
			case 4:
				this.rowDetails[index].labels.label1 = 'Select type of railways';
				this.rowDetails[index].labels.label2 = 'Select railway by category';
				this.rowDetails[index].labels.label3 = 'Label for railway 3';
				break;
		}
		this.rowDetails[index].event = event;
	}

	onRowClickForChildMode(event: any, index: number) {
		const formArray = this.surveyFG.get('distanceDetails') as FormArray;
		const formGroup = formArray.at(index) as FormGroup;
		let loop = formGroup.value['rows'];
		loop.forEach((res: any) => {
			if (res.id == event) {
				formGroup.get('childRows').setValue(res.subList);
			}
		})
	}

	onRowClickforChildren2(event: any, index: number) {
		const formArray = this.surveyFG.get('distanceDetails') as FormArray;
		const formGroup = formArray.at(index) as FormGroup;
		let loop = formGroup.value['childRows'];
		loop.forEach((res: any) => {
			if (res.id == event) {
				formGroup.get('childRows1').setValue(res.subList);
			}
		})
	}

	onDeleteRow(index: number) {
		const distanceDetailsArray = this.surveyFG.get('distanceDetails') as FormArray;

		if (distanceDetailsArray.length > 1) {
			distanceDetailsArray.removeAt(index);
		} else {
			this.toastrService.openToast('Error', 'Fill at least one mode of transport', 'error');
		}
	}

	checkForm() {
		if (this.surveyFG.invalid || this.submit == false) {
			this.toastrService.openToast('Error', 'Fill all valid form', 'error');
		} else {
			const formArray = this.surveyFG.get('distanceDetails') as FormArray;

			const modifiedValue = formArray.controls.map((control: AbstractControl) => {
				const filteredControl = control.value;

				if ('rows' in filteredControl && Array.isArray(filteredControl.rows)) {
					filteredControl.rows = null;
				}

				if ('childRows' in filteredControl && Array.isArray(filteredControl.childRows)) {

					filteredControl.childRows = null;
				}

				if ('childRows1' in filteredControl && Array.isArray(filteredControl.childRows1)) {
					filteredControl.childRows1 = null;
				}
				return filteredControl;
			});

			// Set the modified value back to the formArray
			this.surveyFG.get('distanceDetails').setValue(modifiedValue);

			// Here i remove those row not field by user
			for (let i = formArray.length - 1; i >= 0; i--) {
				const control = formArray.at(i) as FormGroup;

				if (control.get('modeOfTransportLevelOneID').value === null) {
					formArray.removeAt(i);
				}
			}

			this.surveyFG.value.otp = this.receivedOtp;
			this.surveyFG.value.token = this.otpToken;
			this.surveyForm = this.surveyFG.value;
			// Send data to the backend
			this.employeeSurveyController.createSurveyData(this.surveyForm).subscribe((res: any) => {
				this.toastrService.openToast(res['title'], res['message'], res['result']);
				this.router.navigate(['employee-commuting/survey/data/submitted-successfully']);
			}, error => {
				console.error('error in form', error);
			});
		}
	}

	// "I check whether the 'Generate OTP' button is shown in the UI through a library function call."
	onOtpEmitted(data: any) {
		this.receivedOtp = data.otp;
		this.resendOtp = data.resendOtp;
		if (this.surveyFG.invalid) {
			this.surveyFG.markAllAsTouched();
			this.surveyFG.get('distanceDetails').markAllAsTouched();
			this.toastrService.openToast('Error', 'Please fill in all the required fields', 'error');
		} else if (this.submit == true && (this.isValidOTP1 == false || this.resendOtp == true)) {
			this.isValidOTP1 = true;
			this.resendOtp = false;
			this.employeeSurveyController.genreateOTP(this.authToken).subscribe((res: any) => {
				this.otpToken = res.response;
			})
		} else if (this.receivedOtp != undefined) {
			this.resendOtp = false;
			this.checkForm();
		} else if (this.submit == false) {
			this.surveyFG.markAllAsTouched();
			this.toastrService.openToast('Error', 'Fill at least one mode of transport', 'error');
		}

	}
	errorHandling = (control: string, error: string): boolean => {
		return this.surveyFG.get(control).hasError(error);
	}

	errorHandlingForFormArrayData = (control: string, error: string, index: number): boolean => {
		const distanceDetailsArray = this.surveyFG.get('distanceDetails') as FormArray;
		const formGroup = distanceDetailsArray.at(index) as FormGroup;

		const formControl = formGroup.get(control);

		if (!formControl) {
			return false;
		}
		return formControl.hasError(error);
	}
}

