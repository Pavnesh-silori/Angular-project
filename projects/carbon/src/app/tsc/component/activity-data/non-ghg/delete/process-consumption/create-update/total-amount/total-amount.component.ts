import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { isEqual } from "lodash";

//tsc-library
import { StorageService } from '@library/storage-service';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { DateInputTypeEnum, DateService } from '@library/date';
import { FormErrorEnum, InvalidForm, MaterialFormFieldAppearance, NocFileUploadEnum } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'app-total-amount',
    templateUrl: './total-amount.component.html',
    styles: [
    ]
})
export class TotalAmountComponent implements OnInit {

    activityDataFG: FormGroup
    currentOrgID: any;

    currentFormArr: FormArray;
    filled: boolean = false;
    submit: boolean = false;

    action: any;
    activityID: any;
    activityData: any;

    sourceName: string = null;
    isSource: boolean = false;
    dataSource: any = [];

    docList: any[] = [];

    billFile: File = null;
    billFileName: string;
    noBillFileAvailable: boolean = true;

    isEqual: boolean = true;
    initialObject: any;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    formErrorEnum = FormErrorEnum;
    dateInputTypeEnum = DateInputTypeEnum;

    allUnit: any;

    startDate: string;
    endDate: string;
    format = 'YYYY-MM-DD'

    @Input() activityConfig: any;
    @Input() getAllSource: any[] = [];

    @Output() formGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
    @Output() docUploadChange: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('fileInput') fileInput: ElementRef;
    @ViewChildren('customDateInput') customDateInputs: QueryList<any>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private toastrService: ToastrService,
        private dateService: DateService,
        private storageService: StorageService,
        private unitService: UnitService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.getUnit();
    }

    ngOnChanges() {
        this.activatedRoute.queryParams.subscribe((queryParam) => {
            this.action = queryParam.action;
            this.activityID = queryParam.activityID;
        });

        this.activityDataInit();
        this.getConfiguration(this.activityConfig);
    }

    dateInpChange(index) {
        if (this.customDateInputs) {
            const customDateInputInstance = this.customDateInputs.toArray()[index];
            let startDate = customDateInputInstance.startDateFC.value;
            let endDate = customDateInputInstance.endDateFC.value;

            if (startDate) {
                // this.startDate = this.dateService.formatDate(startDate, this.format)
                this.activityDataFA.controls[index].get('startDate').patchValue(this.startDate);
                console.log(index, this.startDate);
            }

            if (endDate) {
                // this.endDate = this.dateService.formatDate(endDate, this.format)
                this.activityDataFA.controls[index].get('endDate').patchValue(this.endDate);
                console.log(index, this.endDate);
            }
        }
    }

    activityDataInit() {
        this.activityDataFG = this.formBuilder.group({
            activityDataDetails: this.formBuilder.array([]),
        });
    }

    get activityDataFA(): FormArray {
        return this.activityDataFG.get('activityDataDetails') as FormArray;
    }

    initFormControl(sourceID) {
        this.activityDataFA.push(
            this.formBuilder.group({
                recordID: [],
                sourceTypeID: this.activityConfig.activityConfigSource[0].sourceTypeID,
                sourceID: [sourceID],
                startDate: [],
                endDate: [],
                quantityProduced: [],
                quantityUnit: [],
                openingMeterReading: [],
                closingMeterReading: [],
                meterReadingUnitID: [],
                activityID: this.activityID,
            })
        );
    }

    async getConfiguration(configuration) {
        console.log(configuration);

        if (this.action == 'create') {
            const sourceID = configuration.activityConfigSource[0].sourceID;

            if (sourceID != null && sourceID.length > 0) {
                this.isSource = true;
                this.dataSource = [];
                sourceID.forEach((res) => {
                    this.dataSource.push({
                        id: res,
                    })
                })
            } else {
                this.isSource = false;
            }
            this.addFormControls();
        }
    }

    addFormControls() {
        if (this.isSource) {
            this.dataSource.forEach((ds) => {
                this.initFormControl(ds.id);
            })
        } else {
            this.initFormControl(null);
        }
        this.updateValidators();
    }

    updateValidators() {
        this.currentFormArr = this.activityDataFG.get('activityDataDetails') as FormArray;
        for (let i = 0; i < this.currentFormArr.controls.length; ++i) {
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
        this.formGroupChange.emit(this.activityDataFG);
    }

    isFormFilled(formGroup) {
        if (formGroup.get('quantityProduced').value != null) this.filled = true;
        if (formGroup.get('quantityUnit').value != null) this.filled = true;
    }

    addValidators(formGroup) {
        formGroup.get('quantityProduced').addValidators([Validators.required, Validators.min(0)]);
        formGroup.get('quantityUnit').addValidators([Validators.required, Validators.min(0)]);

        this.updateValueAndValidity(formGroup);
    }

    removeValidators(formGroup) {
        formGroup.get('quantityProduced').clearValidators();
        formGroup.get('quantityUnit').clearValidators();

        this.updateValueAndValidity(formGroup);
    }

    updateValueAndValidity(formGroup) {
        formGroup.get('quantityProduced').updateValueAndValidity({ emitEvent: false });
        formGroup.get('quantityUnit').updateValueAndValidity({ emitEvent: false });
    }


    async getUnit() {
        this.allUnit = await this.unitService.getUnit([`type:${UnitTypeKeyID.MASS}`]);
    }

    getSupplierName(id) {
        if (id) {
            const supplier = this.getAllSource.find(item => item.id === id);
            return supplier.name;
        }
    }

    uploadDoc() {
        this.fileInput.nativeElement.click();
    }

    fileUpload(event) {
        let file = event.target.files[0];
        if (file) {

            if (file.type !== 'application/pdf') {
                this.toastrService.openToast('Error', NocFileUploadEnum.INVALID_FILE_TYPE_ERROR, 'error');
                return;
            }

            if (file.size > NocFileUploadEnum.MAX_FILE_SIZE) {
                this.toastrService.openToast('Error', NocFileUploadEnum.INVAID_FILE_SIZE_ERROR, 'error');
                return;
            }

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e: any) => { };

            this.billFile = file;
            this.noBillFileAvailable = false;
            this.billFileName = file['name'];
            this.fileInput.nativeElement.value = null;
            this.docUploadChange.emit(this.billFile);
        }
    }

    removeFile() {
        this.billFile = null;
        this.billFileName = '';
        this.noBillFileAvailable = true;
        this.fileInput.nativeElement.value = null;
        this.docUploadChange.emit(this.billFile);
    }

    pathFormData() {
        this.activityDataFA.push(
            this.formBuilder.group({
                recordID: this.activityData.recordID,
                sourceTypeID: this.activityData.sourceTypeID,
                sourceTypeName: this.activityData.sourceTypeName,
                sourceID: this.activityData.sourceID,
                startDate: this.activityData.startDate,
                endDate: this.activityData.endDate,
                quantityProduced: this.activityData.quantityProduced,
                quantityUnit: this.activityData.quantityUnit,
                openingMeterReading: this.activityData.openingMeterReading,
                closingMeterReading: this.activityData.closingMeterReading,
                meterReadingUnitID: this.activityData.meterReadingUnitID,
                activityID: this.activityData.activityID,
            })
        );
        if (this.activityData.sourceName != null) {
            this.sourceName = this.activityData.sourceName;
            this.isSource = true;
        }
        this.updateValidators();

        this.activityDataFA.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.activityDataFA.value));

        this.initialObject = this.activityDataFA.value;
        this.isEqual = true;
    }

    isValidForm(): boolean {
        // this.docList = [];
        this.activityDataFG.markAllAsTouched();
        console.log(this.action)
        console.log(this.activityDataFG);

        if (this.action == 'create') {
            if (this.activityDataFG.invalid || this.submit == false) {
                this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, 'Fill at least one record detail', ToastrColor.ERROR);
                return;
            }
        } else if (this.action == 'update') {
            if (!this.isEqual && (this.activityDataFG.invalid || this.submit == false)) {
                this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
        }

        this.activityData = {};
        const validControls: FormGroup[] = [];
        const formArray = this.activityDataFG.get('activityDataDetails') as FormArray;
        console.log(formArray);

        formArray.controls.forEach((control: FormGroup) => {
            if (control.get('quantityProduced').value != null) {
                validControls.push(control);
            }
        });
        const newFormArray = new FormArray(validControls);
        this.activityData = JSON.parse(JSON.stringify(newFormArray.value));
        this.docList.push(null);
        return true;
    }

    errorHandlingForFormArrayData = (control: string, error: string, index: number): boolean => {
        const activityConfigDetailsFA = this.activityDataFG.get('activityDataDetails') as FormArray;
        const formGroup = activityConfigDetailsFA.at(index) as FormGroup;
        return formGroup.get(control).hasError(error);
    }

}