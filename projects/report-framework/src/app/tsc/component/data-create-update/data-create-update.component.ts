import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ReportingFrameworkDataM } from '@report-framework/model/reporting-framework-data.model';
import { ReportingFrameworkKeyIDEnum } from '@report-framework/enum/reporting-framework.enum';

import { ReportingFrameworkDataController } from '@report-framework/controller/reporting-framework-data.controller';
import { ReportFrameworkController } from '@report-framework/controller/report-framework.controller';

import { ReportingFrameworkDataService } from '@report-framework/service/reporting-framework-data.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { DialogEnum, InvalidForm, MaterialFormFieldAppearance, ResponseM } from '@library/tsc-common';
// / tsc-library

@Component({
	selector: 'app-data-create-update',
	templateUrl: './data-create-update.component.html',
	styleUrls: ['./data-create-update.component.scss']
})
export class DataCreateUpdateComponent implements OnInit {

	@Input() groupID: number;
	@Input() isReadOnly: boolean;
	@Input() pageType: string = null;
    @Input() isAssignee: boolean = false;
    @Input() isApprover: boolean = false;

	@Input() data: ReportingFrameworkDataM[];
	@Output() emit: EventEmitter<string> = new EventEmitter();

	MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ReportingFrameworkKeyIDEnum = ReportingFrameworkKeyIDEnum;

	currentOrgID: any;
	configID: any = null;
	configIntervalID: any = null;

	dynamicForm: ReportingFrameworkDataM[];
	reportDataForm: FormGroup;
	columnData: FormGroup;

	formDataList: any[] = [];

	childFormGroup: FormArray;

	formGroupList: any[] = [];
	formArrayList: any[] = [];

	isUpdate: boolean = false;
	removeDataList: any[] = [];

	reportingPeriodID: any = 1;

	validator: boolean = false;
	columnName: string;

	row: number = 1;

	isFormValid: boolean = false;

    reportingFrameworkKeyID: any;

    showSaveBtn:boolean = false;
    showApproverBtn:boolean = false;

	constructor(
		private fb: FormBuilder,
		private activatedRoute: ActivatedRoute,
		private reportingFrameworkDataController: ReportingFrameworkDataController,
        private reportFrameworkController: ReportFrameworkController,
		private stroageService: StorageService,
		private reportingFrameworkDataService: ReportingFrameworkDataService,
		private toastrService: ToastrService,

	) { }

	ngOnInit(): void {
		this.currentOrgID = this.stroageService.getStorage('currentOrgID');
		this.activatedRoute.params.subscribe((param) => {
			this.configIntervalID = param['configIntervalID'];
			this.configID = param['configID'];
		});

        this.activatedRoute.queryParams.subscribe((queryParams) => {
			if (queryParams['reportingFrameworkKeyID']) {
                this.reportingFrameworkKeyID = queryParams['reportingFrameworkKeyID'];
            }
		});

        this.showBtnLevel();
		this.reportDataForm = this.fb.group({});
		this.getReportFormControl();
	}

    // show button level for assingee and approver bases
    showBtnLevel() {
        if (this.isAssignee) {
            this.showSaveBtn = true;
            this.showApproverBtn = false;
        } 
    
        if (this.isApprover) {
            this.showApproverBtn = true;
            this.showSaveBtn = false;
        } 

        if (this.isAssignee && this.isApprover) {
            this.showSaveBtn = true;
            this.showApproverBtn = false;
        }
    }
    
	// get metric data by config id or config interval id

	async getReportFormControl() {
		if (this.data == null) {
			this.dynamicForm = <ReportingFrameworkDataM[]>await this.reportingFrameworkDataService.getReportFormControl(this.currentOrgID,this.configIntervalID, this.groupID);
		}
		else {
			this.dynamicForm = this.data;
		}
		this.createForm(this.dynamicForm);
	}

	//  create form in specific format where metricStdID, groupStdID, value, serialNumber and 
	//  validation in details its requied data for show metric in form.

	createForm(controls: Array<any>) {
		for (let control of controls) {
			// its one level metric means where single question ask for user.
			if (control.controlTypeKey == 'control') {
				const newGroup = new FormGroup({});
				newGroup.addControl('metricStdID', new FormControl(control.metricStdID));
				newGroup.addControl('groupStdID', new FormControl(control.groupStdID));
				// newGroup.addControl('value', new FormControl(control.value));
				newGroup.addControl('value', this.fb.control({ value: control.value, disabled: this.isReadOnly }));
				newGroup.addControl('serialNumber', new FormControl(this.row));
				newGroup.addControl('inputTypeKey', new FormControl(control.inputTypeKey));
				newGroup.addControl('validators', new FormControl(control.validators))
				if (control.value != null) {
					this.isUpdate = true;
				}
				this.reportDataForm.addControl(control.controlNameKey, newGroup);
			}
			if (control.controlTypeKey == 'array') {
				// its two level metric means where one question has list of data.
				if (control.type == 2) {
					const newArray = new FormArray([]);
					const newGroup = new FormGroup({});

					const valuelength = (control.children[0].value != null ? control.children[0].value.length : null);
					if (valuelength != null && valuelength != 0) {
						this.isUpdate = true;
						this.row = 0;
						for (let i = 0; i < valuelength; i++) {
							const newGroup = new FormGroup({});
							control.children.map(child => {
								const newSubGroup = new FormGroup({});
								newSubGroup.addControl('metricStdID', new FormControl(child.metricStdID));
								newSubGroup.addControl('groupStdID', new FormControl(child.groupStdID));
								// newSubGroup.addControl('value', new FormControl(child.value[i]));
								newSubGroup.addControl('value', this.fb.control({ value: child.value[i], disabled: this.isReadOnly }));
								newSubGroup.addControl('serialNumber', new FormControl(i + 1));
								newSubGroup.addControl('inputTypeKey', new FormControl(control.inputTypeKey));
								newSubGroup.addControl('validators', new FormControl(child.validators))
								newGroup.addControl(child.controlNameKey, newSubGroup);
							});
							newArray.push(newGroup);
							this.reportDataForm.addControl(control.controlNameKey, newArray);
							this.row++;
						}
					} else {
						control.children.map(child => {
							const newSubGroup = new FormGroup({});
							newSubGroup.addControl('metricStdID', new FormControl(child.metricStdID));
							newSubGroup.addControl('groupStdID', new FormControl(child.groupStdID));
							// newSubGroup.addControl('value', new FormControl(null));
							newSubGroup.addControl('value', this.fb.control({ value: null, disabled: this.isReadOnly }));
							newSubGroup.addControl('serialNumber', new FormControl(this.row));
							newSubGroup.addControl('inputTypeKey', new FormControl(control.inputTypeKey));
							newSubGroup.addControl('validators', new FormControl(child.validators))
							newGroup.addControl(child.controlNameKey, newSubGroup);

						});
						newArray.push(newGroup);
						this.reportDataForm.addControl(control.controlNameKey, newArray);
					}
				}
				else {
					// its three level of metric where metric show in row and column format.
					this.row = 1;
					const newArray = new FormArray([]);
					const newGroup = new FormGroup({});
					control.children.map(child => {
						const newSubArray = new FormArray([]);
						child.columns.forEach(col => {
							const newColGroup = new FormGroup({});
							newColGroup.addControl('metricStdID', new FormControl(col.metricStdID))
							newColGroup.addControl('groupStdID', new FormControl(col.groupStdID));
							// newColGroup.addControl('value', new FormControl(col.value != null ? col.value[0] : col.value));
							newColGroup.addControl('value', this.fb.control({ value: (col.value != null ? col.value[0] : col.value), disabled: this.isReadOnly }));

							newColGroup.addControl('serialNumber', new FormControl(this.row));
							newColGroup.addControl('inputTypeKey', new FormControl(col.inputTypeKey));
							newColGroup.addControl('validators', new FormControl(col.validators))
							if (col.value.length != 0) {
								this.isUpdate = true;
							}
							newSubArray.push(newColGroup);
						})
						newGroup.addControl(child.controlNameKey, newSubArray);
					})
					newArray.push(newGroup);
					this.reportDataForm.addControl(control.controlNameKey, newArray);
				}
			}
		}
	}

	formatDataForPost() {
		// create metric in generic format to post data for create.
		this.checkFormGroupControls(this.reportDataForm);
		this.formDataList = [];
		Object.keys(this.reportDataForm.controls).forEach((key) => {
			this.childFormGroup = this.reportDataForm.get(key)['controls'];

			if (this.childFormGroup.length != 0) {
				if (this.formArrayList.includes(key)) {
					Object.keys(this.childFormGroup[0].controls).forEach((controlsKey) => {
						for (let i = 0; i < this.childFormGroup.length; i++) {
							if (this.isFormGroup(this.childFormGroup[i].get(controlsKey))) {
								this.formDataList.push(this.childFormGroup[i].get(controlsKey).value);
							}
							else {
								this.childFormGroup[i].get(controlsKey)['controls'].forEach((col) => {
									this.formDataList.push(col.value);
								})
							}
						}
					})
				} else {
					this.formDataList.push(this.reportDataForm.get(key).value);
				}
			}
		});

		this.checkFormIsValid();
	}

	// Check if a control is a FormGroup
	isFormGroup(control: AbstractControl): boolean {
		return control instanceof FormGroup;
	}

	// Check if a control is a FormControl
	isFormControl(control: AbstractControl): boolean {
		return control instanceof FormControl;
	}

	// Check if a control is a FormArray
	isFormArray(control: AbstractControl): boolean {
		return control instanceof FormArray;
	}

	// Recursively check the types of controls in a dynamic FormGroup
	checkFormGroupControls(formGroup: FormGroup): void {

		for (const controlName in formGroup.controls) {
			const control = formGroup.controls[controlName];

			if (this.isFormGroup(control)) {
				this.formGroupList.push(controlName);
				this.checkFormGroupControls(control as FormGroup);
			}

			if (this.isFormArray(control)) {
				this.formArrayList.push(controlName);
			}
		}
	}

	getFormArray(key) {
		return <FormArray>this.reportDataForm.controls[key];
	}

	// for two level metric where we add row.
	addFormArray(arrayName, dynamicForm) {
		const control = this.getFormArray(arrayName);
		const newGroup = new FormGroup({});
		dynamicForm.map(child => {
			const newSubGroup = new FormGroup({});
			newSubGroup.addControl('metricStdID', new FormControl(child.metricStdID))
			newSubGroup.addControl('groupStdID', new FormControl(child.groupStdID));
			// newSubGroup.addControl('value', new FormControl());
			newSubGroup.addControl('value', this.fb.control({ value: null, disabled: this.isReadOnly }));
			newSubGroup.addControl('serialNumber', new FormControl(control.value.length + 1));
			newSubGroup.addControl('validators', new FormControl(child.validators))
			newGroup.addControl(child.controlNameKey, newSubGroup);

		});
		control.push(newGroup);
	}

	// for two level metric where we delete row.
	removeFormArray(arrayName, index) {
		const control = this.getFormArray(arrayName);
		const deleteRow = control.controls[index];
		control.removeAt(index);
		if (this.isUpdate) {
			Object.keys(deleteRow['controls']).forEach((key) => {
				this.childFormGroup = deleteRow['controls'];
				this.removeDataList.push(this.childFormGroup[key].value);
			});
		}

		// Object.keys(control['controls']).forEach(key => {
		// 	let childControls = control['controls'][key]['controls'];
		// 	Object.keys(childControls).forEach(group => {
		// 		childControls[group]['controls']['serialNumber'].patchValue(Number(key) + Number(1));
		// 	})
		// })
	}

	getChildFormArrayChild(formGroup, index, formArray) {
		return this.reportDataForm.get(formGroup)['controls'][index].get(formArray) as FormArray;
	}

	// create json while we update data remove data generally occured while we delete data from two level metric.
	createJsonForUpdateData: { data, removeData } = {
		data: undefined,
		removeData: undefined
	};
	createDataForUpdate() {
		this.createJsonForUpdateData['data'] = this.formDataList;
		this.createJsonForUpdateData['removeData'] = this.removeDataList;

		return this.createJsonForUpdateData;
	}

	submitForm() {
		if (this.reportDataForm.invalid) {
			this.reportDataForm.markAllAsTouched();
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
			return;
		}
		this.formatDataForPost();

		if (!this.isFormValid) {
			this.reportDataForm.markAllAsTouched();
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, 'Alteast fill one data for submit.', ToastrColor.ERROR);
			return;
		}

		this.reportingFrameworkDataController.createData(this.currentOrgID, this.configIntervalID, this.groupID, this.formDataList).subscribe((res) => {
			this.emit.next(DialogEnum.SUCCESS_DR);
			this.getReportFormControl();

		}, error => {
			console.log('error in submit form - -', error);
		});
	}

	updateData() {
		if (this.reportDataForm.invalid) {
			this.reportDataForm.markAllAsTouched();
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
			return;
		}

		this.formatDataForPost();

		if (!this.isFormValid) {
			this.reportDataForm.markAllAsTouched();
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, 'Alteast fill one data for submit.', ToastrColor.ERROR);
			return;
		}

		this.reportingFrameworkDataController.updateData(this.currentOrgID, this.configIntervalID, this.groupID, this.createDataForUpdate()).subscribe((res: ResponseM) => {
			this.emit.next(DialogEnum.SUCCESS_DR);
			this.getReportFormControl();

		}, error => {
			console.log('error in save report() -', error);
		});
	}

	checkFormIsValid() {
		this.isFormValid = false;
	    for (const form of this.formDataList) {
			if (form['value'] != null && form['value'] != '') {
				this.isFormValid = true;
				break; 
			}
		}
	}

	// Custom validator function for three level metric
	threeLevelValidation(formArray: FormArray) {
		let haveValues = 0;
		let maxLength = formArray.length;

		for (let i = 0; i < formArray.length; i++) {
			const group = formArray[i] as FormGroup;
			if (!group.controls.value.value) {
				++haveValues;
			}
		}
		if (haveValues == maxLength) {
			for (let i = 0; i < maxLength; ++i) {
				const group = formArray[i] as FormGroup;
				group.controls.value.setErrors(null);
				group.controls.value.clearValidators();
				group.controls.value.updateValueAndValidity();

			}
		} else {
			for (let i = 0; i < formArray.length; i++) {
				const group = formArray[i] as FormGroup;
				if (formArray[i].value['validators']) {
					let validatorsToAdd = [];
					for (const [key, value] of Object.entries(formArray[i].value['validators'])) {
						validatorsToAdd = this.activeValidators(key, value);
					}

					group.controls.value.setValidators(validatorsToAdd);
					group.controls.value.setErrors(validatorsToAdd);
					group.controls.value.updateValueAndValidity();
				}
			}
		}
	}

	// Custom validator function for two level metric
	twoLevelValidation(formGroup: FormArray) {
		let haveValues = 0;
		let maxLength = Object.keys(formGroup['controls']).length;

		Object.keys(formGroup['controls']).forEach(key => {
			let formControl = formGroup['controls'][key]['controls'];
			if (!formControl.value.value) {
				++haveValues;
			}
		})

		if (haveValues == maxLength) {
			Object.keys(formGroup['controls']).forEach(key => {
				let formControl = formGroup['controls'][key]['controls'];
				formControl['value'].setErrors(null);
				formControl['value'].clearValidators();
				formControl['value'].updateValueAndValidity();
			})
		} else {
			Object.keys(formGroup['controls']).forEach(key => {
				let formControl = formGroup['controls'][key]['controls'];
				if (formControl['validators'].value) {
					let validatorsToAdd = [];
					for (const [key, value] of Object.entries(formControl['validators'].value)) {
						validatorsToAdd = this.activeValidators(key, value);

					}
					formControl['value'].setValidators(validatorsToAdd);
					formControl['value'].setErrors(validatorsToAdd);
					formControl['value'].updateValueAndValidity();
				}
			})
		}
	}

	// Custom validator function for one level metric
	oneLevelValidation(key) {
		const formGroup = this.reportDataForm.controls[key];
		if (formGroup['controls']['validators'].value) {
			let validatorsToAdd = [];
			for (const [key, value] of Object.entries(formGroup['controls']['validators'].value)) {
				validatorsToAdd = this.activeValidators(key, value);
			}
			formGroup['controls']['value'].setValidators(validatorsToAdd);
			formGroup['controls']['value'].setErrors(validatorsToAdd);
			formGroup['controls']['value'].updateValueAndValidity();
		}
	}

	activeValidators(key, value) {
		let validatorsToAdd = [];
		switch (key) {
			case 'min':
				validatorsToAdd.push(Validators.min(Number(value)));
				break;
			case 'max':
				validatorsToAdd.push(Validators.max(Number(value)));
				break;
			// case 'required':
			//     if (value) {
			//         validatorsToAdd.push(Validators.required);
			//     }
			//     break;
			case 'email':
				if (value) {
					validatorsToAdd.push(Validators.email);
				}
				break;
			case 'minLength':
				validatorsToAdd.push(Validators.minLength(Number(value)));
				break;
			case 'maxLength':
				validatorsToAdd.push(Validators.maxLength(Number(value)));
				break;
			default:
				break;
		}

		return validatorsToAdd;

	}

	// cancelBtn() {
	// 	this.router.navigate(['report/framework/brsr/data/framework'],
	// 		{ queryParams: { viewSectionList: "YES", reportingPeriodID: this.reportingPeriodID } });
	// }


}
