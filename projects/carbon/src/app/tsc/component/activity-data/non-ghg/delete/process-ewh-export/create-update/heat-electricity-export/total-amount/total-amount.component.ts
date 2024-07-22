import { Component, ElementRef, Input, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

import { DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateService } from '@library/date';

import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { FormAction, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
import * as moment from 'moment-timezone';

@Component({
    selector: 'app-total-amount',
    templateUrl: './total-amount.component.html',
    styleUrls: ['./total-amount.component.scss']
})
export class TotalAmountComponent implements OnInit {
    formErrorEnum = FormErrorEnum;
    DateInputTypeEnum = DateInputTypeEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    @Input() activityDataFG: FormGroup;
    @Input() activityConfigSource: FormGroup;
    @Input() defaultDataCollectionMethodID: FormGroup;

    @Input() docFileList: any[];
    @Input() activityData: any;

    @Input() customFuel: any;
    @Input() standardFuel: any;

    action: any;

    billFile: File = null;
    billFileName: string;
    noBillFileAvailable: boolean = true;

    fuelUnitList: UnitM[] = [];
    energyUnitList: UnitM[] = [];
    unitM: UnitM[] = [];

    fuelSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    fuelUnitTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    energyUnitListSearch: MatSelectSearchService = new MatSelectSearchService(['name']);

    @ViewChild('fileInput') fileInput: ElementRef;
    @ViewChildren(DateInputComponent) customDateInputs: QueryList<any>;

    constructor(
        private formBuilder: FormBuilder,
        private dateService: DateService,
        private toastrService: ToastrService,
        private unitService: UnitService,
    ) { }

    isActivityDataAvailable: boolean = false;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.activityDataFG ?? false) {
            this.formDataInit();
        }

        if (changes.defaultDataCollectionMethodID ?? false) {
            this.setDataToControl('dataCollectionMethodID', this.defaultDataCollectionMethodID);
        }

        if (changes?.activityConfigSource && changes.activityConfigSource?.currentValue) {
            let sourceID = this.activityConfigSource[0].sourceID[0];
            this.setDataToControl('sourceID', sourceID);
            let sourceTypeID = this.activityConfigSource[0].sourceTypeID;
            this.setDataToControl('sourceTypeID', sourceTypeID);
        }

        if (changes.activityData ?? false) {
            this.isActivityDataAvailable = true;
        }
    }

    ngOnInit(): void {
        this.getUnitList();
    }

    ngAfterViewInit() {
        if (this.isActivityDataAvailable) {
            this.patchActivityData(this.activityData);
        }
    }

    formDataInit() {
        this.activityDataFA.push(this.dataFG);

        if (this.action == FormAction.CREATE) {
        }

        if (this.action == FormAction.UPDATE) {
        }
    }

    get activityDataFA(): FormArray {
        return this.activityDataFG.get('activityData') as FormArray;
    }

    get dataFG() {
        return this.formBuilder.group({
            activityDataID: [],
            recordID: [],
            activityKeyID: [],
            sourceID: [],
            sourceTypeID: [],
            dataCollectionMethodID: [],
            startDate: [],
            endDate: [],
            fuelTypeKeyID: [, [Validators.required]],
            standardFuelID: [],
            customFuelID: [],
            oxidationFactor: [CARBON_CONSTANT.DEFAULT_OXIDATION_FACTOR],
            amountOfFuel: [],
            fuelUnitID: [],
            netCalorificValue: [],
            ncvNumeratorUnitID: [],
            ncvDenominatorUnitID: [],
            energyExported: [],
            energyExportedUnitID: [],
            biomassPct: [],
            docID: [],
            docType: [],
            docName: [],
            docPath: [],
        });
    }

    setDataToControl(control, data) {
        this.activityDataFA.controls.forEach(group => group.get(control).patchValue(data));
    }

    patchActivityData(activityData) {
        let current_fg = this.activityDataFA.get('0') as FormGroup;
        current_fg.patchValue(activityData);

        const fuel_type_key_id: 'custom' | 'standard' = activityData.customFuel == null? 'custom' : 'standard'; 
        let entityArr = [];
        if(fuel_type_key_id == 'custom') {
            entityArr = this.customFuel;
        } else {
            entityArr = this.standardFuel;
        }
        this.fuelSearchUtil.entityArr = entityArr;
        this.fuelSearchUtil.createSubscription();

        current_fg.patchValue({
            activityDataID: activityData.id,
            fuelTypeKeyID: fuel_type_key_id,
            // fuelUnitID: activityData.fuelUnit.unitID, TODO_PN add as it comes from backend
            ncvNumeratorUnitID: activityData.ncvNumeratorUnit.unitID,
            /* ncvDenominatorUnitID: activityData.ncvDenominatorUnit.unitID, TODO_PN add as it comes from backend */
            energyExportedUnitID: activityData.energyExportedUnit.unitID
        });

        const customDateInputInstance = this.customDateInputs.toArray()[0];
        customDateInputInstance.daterange.patchValue({ startDate: moment(activityData.startDate), endDate: moment(activityData.endDate) });
    }

    dateInpChange(formGroup: FormGroup, index) {
        if (this.customDateInputs) {
            const customDateInputInstance = this.customDateInputs.toArray()[index];
            const startDate = customDateInputInstance.startDateFC.value;
            const endDate = customDateInputInstance.endDateFC.value;

            if (startDate) {
                const formatted_startDate = this.dateService.formatDate(startDate, DateFormatEnum.YYYY_MM_DD);
                formGroup.get('startDate').patchValue(formatted_startDate);
            }

            if (endDate) {
                const formatted_endDate = this.dateService.formatDate(endDate, DateFormatEnum.YYYY_MM_DD);
                formGroup.get('endDate').patchValue(formatted_endDate);
            }
        }
    }

    resetAndClearValidators(formGroup: FormGroup, control) {
        formGroup.get(control).reset();
        formGroup.get(control).clearValidators();
        formGroup.get(control).updateValueAndValidity();
    }

    fuelTypeSelected(fuelType: 'custom' | 'standard', formGroup: FormGroup, control: string) {
        if(fuelType == 'custom') {
            this.fuelSearchUtil.filterUnsubscribe.next();
            this.fuelSearchUtil.entityArr = this.customFuel;
            this.fuelSearchUtil.createSubscription();
        } else {
            this.fuelSearchUtil.filterUnsubscribe.next();
            this.fuelSearchUtil.entityArr = this.standardFuel;
            this.fuelSearchUtil.filteredEntities.next(this.standardFuel);
            this.fuelSearchUtil.createSubscription();
        }

        this.resetAndClearValidators(formGroup, control);
    }

    getFuelTypeAC(index) {
        return this.activityDataFA.get(`${index}.fuelTypeKeyID`);
    }

    radioError = (formGroup: FormGroup, control: string, error: string): boolean => {
        return formGroup.get(control).hasError(error) && formGroup.get(control).touched;
    }

    async getUnitList() {
        this.unitM = await this.unitService.getUnit([]);
        this.fuelUnitList = this.unitM.filter(unit => unit.type == UnitTypeKeyID.VOLUME)
        this.fuelUnitTypeSearchUtil.entityArr = this.fuelUnitList;
        this.fuelUnitTypeSearchUtil.createSubscription();
        this.energyUnitList = this.unitM.filter(unit => unit.type == UnitTypeKeyID.ENERGY)
        this.energyUnitListSearch.entityArr = this.energyUnitList;
        this.energyUnitListSearch.createSubscription();
    }

    fileUpload(event) {
        let file = event.target.files[0];
        if (file) {
            if (file.type !== 'application/pdf') {
                this.toastrService.openToast('Error', file, 'error');
                return;
            }

            if (file.size > 10485760) {
                this.toastrService.openToast(ToastrTitle.ERROR, 'fileSizeError', ToastrColor.ERROR);
                return;
            }

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e: any) => { };

            this.billFile = file;
            this.noBillFileAvailable = false;
            this.billFileName = file['name'];
            this.fileInput.nativeElement.value = null;
            this.docFileList[0] = this.billFile;
        }
    }

    removeFile() {
        this.billFile = null;
        this.billFileName = '';
        this.noBillFileAvailable = true;
        this.fileInput.nativeElement.value = null;
        this.docFileList[0] = this.billFile;
    }

    uploadDoc() {
        this.fileInput.nativeElement.click();
    }

    errorHandling = (formGroup: FormGroup, control: string, error: string): boolean => {
        return formGroup.get(control).hasError(error);
    }

}
