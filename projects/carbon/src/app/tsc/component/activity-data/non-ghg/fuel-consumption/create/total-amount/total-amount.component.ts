import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { isEqual } from "lodash";
import * as moment from 'moment';
import { Subscription, forkJoin } from 'rxjs';

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import { CustomFuelController } from '@netzero/controller/cutom-fuel.controller';
import { CarbonDocumentController } from '@carbon/controller/document.controller';

import { FuelService } from '@carbon/service/fuel.service';
import { CustomFuelService } from '@netzero/service/custom-fuel.service';

/* tsc-library */
import {
    DateFormatEnum,
    DateInputComponent,
    DateInputTypeEnum,
    DateService
} from '@library/date';
import {
    FormErrorEnum,
    MatSelectSearchService,
    MaterialFormFieldAppearance,
    NocFileUploadEnum,
    TypeConfirmationDialog
} from '@library/tsc-common';
import {
    UnitM,
    UnitService,
    UnitTypeKeyID
} from '@library/unit-service';
import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { startWith } from 'rxjs/operators';
/* tsc-library */

@Component({
    selector: 'app-total-amount',
    templateUrl: './total-amount.component.html',
    styleUrls: ['./total-amount.component.scss']
})
export class TotalAmountComponent implements OnInit {
    FormErrorEnum = FormErrorEnum;
    DateFormatEnum = DateFormatEnum;
    DateInputTypeEnum = DateInputTypeEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    @Input() activityConfig: any;
    @Input() activityDataFG: FormGroup;
    @Input() docFileList: File[];
    @Input() defaultDataCollectionMethodID: Number;

    fuelList: any[];
    customFuelList: any[];
    unitM: UnitM[];
    energyUnitM: UnitM[];

    activityData: any;
    activityStdKeyID: ActivityKeyIDEnum;

    isSource: boolean = false;
    sourceName: string = null;

    isUpdate: boolean = false;
    haveMultipleSource: boolean = false;

    isEqual: boolean = true;
    initialObject: any;
    action: any;

    billFile: File = null;
    billFileName: string;
    file: any;

    fuelTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    customFuelSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    fuelConsumedUnitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    ncvDenominatorSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    energyUnitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    @ViewChildren('fileInput') fileInput: QueryList<ElementRef>;
    fileInputArr: ElementRef[] = [];
    @ViewChildren(DateInputComponent) customDateInputs: QueryList<DateInputComponent>;

    activityID: number;
    currentOrgID: any;

    constructor(
        private dialog: MatDialog,
        private formBuilder: FormBuilder,
        private fuelService: FuelService,
        private customFuelService: CustomFuelService,
        private customFuelController: CustomFuelController,
        private carbonDocumentController: CarbonDocumentController,
        private unitService: UnitService,
        private dateService: DateService,
        private toastrService: ToastrService,
        storageService: StorageService,
        activatedRoute: ActivatedRoute,
    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');

        activatedRoute.queryParams.subscribe(qParams => {
            this.action = qParams['action'];
            this.activityID = Number(qParams['activityID']);
        });
        this.activityStdKeyID = activatedRoute.snapshot.data.activityKeyID;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!this.got_necessary_data) {
            this.getNecessaryData();
        }

        if (changes.activityDataFG.firstChange) {
            this.initFormValidation();
        }

        if (this.action == 'create') {
            if (changes.activityDataFG.firstChange) {
                this.formDataInit();
            }

            if (changes?.defaultDataCollectionMethodID) {
                if (this.defaultDataCollectionMethodID != undefined || this.defaultDataCollectionMethodID != null) {
                    this.setDataCollectionMethod();
                }
            }
        }

        if (changes.activityConfig) {
            if (this.activityConfig != undefined && this.activityConfig != null) {
                if (this.action == 'create') {
                    this.addActivityDataFG();
                }
            }
        }

        this._valid_fields.emit(this.valid_fields);
    }

    valid_fields = ['activityID',
        'activityKeyID',
        'sourceTypeID',
        'sourceID',
        'sourceName',
        'dataCollectionMethodID',
        'startDate',
        'endDate',
        'customFuelID',
        'standardFuelID',
        'netCalorificValue',
        'ncvNumeratorUnitID',
        'ncvDenominatorUnitID',
        'oxidationFactor',
        'biomassPct',
        'fuelConsumed',
        'fuelConsumedUnitID'
    ];

    excluded_controls: string[] = [
        'sourceID',
        'sourceName',
        'sourceTypeID',
        'activityID',
        'activityKeyID',
        'fuelName',
        'dateRange',
        'dataCollectionMethodID',
        'meterUnitID'
    ];

    dateInputSub: Subscription;
    fileInputLoadSub: Subscription;
    ngAfterViewInit() {
        this.fileInputLoadSub = this.fileInput.changes.subscribe(() => this.updateFileInputArray());
        this.updateFileInputArray();

        if (this.action == 'update') {
            this.isUpdate = true;
            this.activityData = this.activityConfig.activityData;
            this.patchActivityData();
            this.dateInputSub = this.customDateInputs.changes.subscribe((list: QueryList<any>) => {
                if (list.length > 0) {
                    this.patchDate();
                    this.dateInputSub.unsubscribe();
                }
            });
        }
    }

    private updateFileInputArray() {
        if (this.fileInput && this.fileInput.length > 0) {
            this.fileInputArr = this.fileInput.toArray();
        }
    }

    addActivityDataFG() {
        const activityConfigSource = this.activityConfig.activityConfigSource;

        if (activityConfigSource ?? false) {
            if (activityConfigSource.length > 0) {
                const sources: any[] = activityConfigSource[0].source;
                this.haveMultipleSource = sources.length > 1;

                sources.forEach((source) => {
                    let fg: FormGroup = this.dataFG;
                    fg.get('sourceID').patchValue(source.id)
                    fg.get('sourceName').patchValue(source.name);
                    fg.get('sourceTypeID').patchValue(this.activityConfig.activityConfigSource[0].sourceTypeID);

                    this.activityDataFA.push(fg);
                });
            }
        }
    }

    async getFuelHhv(fuelID, formGroup: FormGroup) {
        let ncv: { value, numeratorUnit, denominatorUnit } = <any>await this.fuelService.getFuelHhv(this.currentOrgID, fuelID);
        if (ncv.value != null) {
            formGroup.patchValue({
                netCalorificValue: ncv.value,
                ncvNumeratorUnitID: ncv.numeratorUnit.id,
                ncvDenominatorUnitID: ncv.denominatorUnit.id,
                oxidationFactor: CARBON_CONSTANT.DEFAULT_OXIDATION_FACTOR,
                biomassPct: CARBON_CONSTANT.DEFAULT_BIOMASS_PCT,
            });
        }
    }

    async getCustomFuelByID(fuelID, formGroup: FormGroup) {
        let fuel = <any>await this.customFuelService.getCustomFuelByID(this.currentOrgID, fuelID);

        if (fuel != null) {
            formGroup.patchValue({
                netCalorificValue: fuel.netCalorificValue,
                ncvNumeratorUnitID: fuel.ncvNumeratorUnitID,
                ncvDenominatorUnitID: fuel.ncvDenominatorUnitID,
                oxidationFactor: fuel.oxidationFactor,
                biomassPct: fuel.biomassPct
            });
        }
    }

    ngOnInit(): void {
        if (!this.got_necessary_data) {
            this.getNecessaryData();
        }
    }

    formDataInit() {
        // this.activityDataFA.push(this.dataFG);
    }

    get activityDataFA(): FormArray {
        return this.activityDataFG.get('activityData') as FormArray;
    }

    getFuel(fuelID: number) {
        return this.fuelList.find(fuel => fuel.id == fuelID);
    }

    @Output('validFields') private _valid_fields = new EventEmitter<string[]>();

    get dataFG() {
        return this.formBuilder.group({
            activityID: [this.activityID],
            activityKeyID: [this.activityStdKeyID],
            activityDataID: [],
            sourceTypeID: [],
            sourceID: [],
            sourceName: [],
            dataCollectionMethodID: [this.defaultDataCollectionMethodID],
            dateRange: [],
            startDate: [, this.haveMultipleSource ? null : [Validators.required]],
            endDate: [, this.haveMultipleSource ? null : [Validators.required]],
            customFuelID: [, this.haveMultipleSource ? null : [Validators.required]],
            standardFuelID: [, this.haveMultipleSource ? null : [Validators.required]],
            fuelName: [],
            netCalorificValue: [, this.haveMultipleSource ? [Validators.min(0)] : [Validators.required, Validators.min(0)]],
            ncvNumeratorUnitID: [, this.haveMultipleSource ? null : [Validators.required]],
            ncvDenominatorUnitID: [, this.haveMultipleSource ? null : [Validators.required]],
            oxidationFactor: [CARBON_CONSTANT.DEFAULT_OXIDATION_FACTOR, this.haveMultipleSource ? [Validators.min(0), Validators.max(1)] : [Validators.required, Validators.min(0), Validators.max(1)]],
            biomassPct: [CARBON_CONSTANT.DEFAULT_BIOMASS_PCT, this.haveMultipleSource ? [Validators.min(0), Validators.max(100)] : [Validators.required, Validators.min(0), Validators.max(100)]],            fuelConsumed: [, this.haveMultipleSource ? [Validators.min(0)] : [Validators.required, Validators.min(0)]],
            fuelConsumedUnitID: [, this.haveMultipleSource ? null : [Validators.required]],
            docID: [],
            docType: [],
            docName: [],
            docSize: [],
            docPath: []
        });
    }

    setDataCollectionMethod() {
        this.activityDataFA.controls.forEach(group => {
            group.get('dataCollectionMethodID').patchValue(this.defaultDataCollectionMethodID);
        });
    }

    getFuelRequiredError(formGroup: FormGroup) {
        if ((formGroup.get('customFuelID').invalid && formGroup.get('standardFuelID').invalid) && formGroup.get('customFuelID').touched)
            return true;
        return false;
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

    addActivity() {
        // this.activityDataFA.push(this.dataFG);
    }

    patchActivityData() {
        let formGroup = this.dataFG;
        this.activityDataFA.push(formGroup);

        const source = this.activityData.source;
        const sourceType = this.activityData.sourceType;
        const ncvNumeratorUnit = this.activityData.ncvNumeratorUnit;
        const ncvDenominatorUnit = this.activityData.ncvDenominatorUnit;
        const dataCollectionMethodStd = this.activityData.dataCollectionMethodStd;
        const fuelConsumedUnit = this.activityData.fuelConsumedUnit;
        formGroup.patchValue({
            activityDataID: this.activityData.id,
            dataCollectionMethodID: dataCollectionMethodStd.id,
            sourceID: source.id,
            sourceName: source.name,
            sourceTypeID: sourceType.id,
            customFuelID: this.activityData.customFuelID,
            standardFuelID: this.activityData.standardFuelID,
            startDate: this.activityData.startDate,
            endDate: this.activityData.endDate,
            netCalorificValue: this.activityData.netCalorificValue,
            ncvNumeratorUnitID: ncvNumeratorUnit.unitID,
            ncvDenominatorUnitID: ncvDenominatorUnit.unitID,
            oxidationFactor: this.activityData.oxidationFactor,
            biomassPct: this.activityData.biomassPct,
            fuelConsumed: this.activityData.fuelConsumed,
            fuelConsumedUnitID: fuelConsumedUnit.unitID,
        });

        if (this.activityData.file != null) {
            formGroup.patchValue({
                docID: this.activityData.file.id,
                docName: this.activityData.file.name,
                docPath: this.activityData.file.path,
            });
        }

        if (this.activityData.sourceName != null) {
            this.sourceName = this.activityData.sourceName;
            this.isSource = true;
        }

        // this.updateValidators();

        this.activityDataFA.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.activityDataFA.value));

        this.initialObject = this.activityDataFA.value;
        this.isEqual = true;
    }

    patchDate() {
        const customDateInputInstance = this.customDateInputs.toArray()[0];

        if (customDateInputInstance) {
            customDateInputInstance.daterange.patchValue({ startDate: moment(this.activityData['startDate']), endDate: moment(this.activityData['endDate']) });
        }
    }

    patchFuel() {
        const isStandard: boolean = this.activityData.standardFuelID ? true : false;
        this.fuelSelected(isStandard ? 'STANDARD' : 'CUSTOM', isStandard ? this.activityData.standardFuelID : this.activityData.customFuelID, this.activityDataFA.get('0'), true);
    }

    fuelSelected(fuelType: 'CUSTOM' | 'STANDARD', fuelID, formGroup, isPatch: boolean = false) {
        let selected_fuel: any;

        let reset_field: string;
        if (fuelType == 'STANDARD') {
            reset_field = 'customFuelID';
            selected_fuel = this.fuelList.find(fuel => fuel.id == fuelID);
            if (!isPatch) { this.getFuelHhv(fuelID, formGroup); }
        } else {
            reset_field = 'standardFuelID';
            selected_fuel = this.customFuelList.find(fuel => fuel.id == fuelID);
            if (!isPatch) { this.getCustomFuelByID(fuelID, formGroup); }
        }

        this._valid_fields.emit(this.valid_fields);
        formGroup.get('fuelName').patchValue(selected_fuel.name);

        formGroup.get(reset_field).reset(null);
        formGroup.get(reset_field).removeValidators([Validators.required]);
        formGroup.get(reset_field).updateValueAndValidity();
    }

    got_necessary_data: boolean = false;
    async getNecessaryData() {
        this.customFuelList = await this.customFuelService.getCustomFuelList(this.currentOrgID);
        this.customFuelSearchUtil.entityArr = this.customFuelList;
        this.customFuelSearchUtil.createSubscription();

        this.fuelList = await this.fuelService.getFuelByActivityKeyID(ActivityKeyIDEnum.STATIONARY_COMBUSTION);
        this.fuelTypeSearchUtil.entityArr = this.fuelList;
        this.fuelTypeSearchUtil.createSubscription();

        forkJoin([
            // this.fuelService.getFuelByActivityKeyID(ActivityKeyIDEnum.STATIONARY_COMBUSTION),
            // this.customFuelService.getCustomFuelList(this.currentOrgID),
            this.unitService.getUnit([])
        ]).subscribe(([/* fuel, */ /* customFuel, */ units]: [/* any[], */ /* any[], */ UnitM[]]) => {
            // this.fuelList = fuel;
            // this.customFuelList = <any[]>customFuel;
            const unitM: UnitM[] = units;

            const energyUnitM: UnitM[] = this.unitService.filterUnit(unitM, [UnitTypeKeyID.ENERGY]);
            const volumeAndMassUnits: UnitM[] = this.unitService.filterUnit(unitM, [UnitTypeKeyID.MASS, UnitTypeKeyID.VOLUME]);

            this.energyUnitSearchUtil.entityArr = energyUnitM;
            this.energyUnitSearchUtil.createSubscription();

            this.ncvDenominatorSearchUtil.entityArr = volumeAndMassUnits;
            this.ncvDenominatorSearchUtil.createSubscription();

            this.fuelConsumedUnitSearchUtil.entityArr = volumeAndMassUnits;
            this.fuelConsumedUnitSearchUtil.createSubscription();

            this.got_necessary_data = true;

            if (this.isUpdate) {
                this.patchFuel();
            }
        },
            error => {
                console.error('error in formInitialization -', error);
            });
    }

    fileUpload(event, formGroup: FormGroup, index: number) {
        let file = event.target.files[0];
        if (file) {

            if (file.type !== 'application/pdf') {
                this.toastrService.error(NocFileUploadEnum.INVALID_FILE_TYPE_ERROR)
                return;
            }

            if (file.size > NocFileUploadEnum.MAX_FILE_SIZE) {
                this.toastrService.error(NocFileUploadEnum.INVAID_FILE_SIZE_ERROR)
                return;
            }

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e: any) => { };

            this.billFile = file;
            this.billFileName = file['name'];

            formGroup.get('docName').patchValue(file['name']);
            formGroup.get('docSize').patchValue(this.getFileSizeWithUnit(file['size']));

            this.docFileList[index] = file;

            if (this.action == 'update') {
                this.fileCreateUpdate(formGroup);
            }
        } else {
            this.toastrService.error('Please upload a file!');
            return;
        }
    }

    getFileSizeWithUnit(billFileSize: number): string {
        const fileSizeInKB = Math.round(billFileSize / 1024);
        const fileSizeInMB = Math.round(fileSizeInKB / 1024);
        const fileSizeInGB = Math.round(fileSizeInMB / 1024);

        if (fileSizeInGB > 1) {
            return fileSizeInGB + ' GB';
        } else if (fileSizeInMB > 1) {
            return fileSizeInMB + ' MB';
        } else {
            return fileSizeInKB + ' KB';
        }
    }

    removeFile(formGroup: FormGroup, index: number) {
        if (this.action == 'create') {
            this.fileInputArr[index].nativeElement.value = null;
        }

        this.billFile = null;
        this.billFileName = '';

        formGroup.get('docName').reset();
        formGroup.get('docSize').reset();
        formGroup.get('docPath').reset(null);
        formGroup.get('docID').reset();

        this.docFileList[index] = this.billFile;
    }

    toFormData(): FormData {
        const formData = new FormData();
        formData.append('payload', this.billFile);

        return formData;
    }

    fileCreateUpdate(formGroup: FormGroup) {
        if (formGroup.get('docID').value == null) {
            this.carbonDocumentController.createDocument(this.currentOrgID, formGroup.get('activityDataID').value, ActivityKeyIDEnum.PROCESS_FUEL_CONSUMPTION,
                this.toFormData()).subscribe((response) => {
                    this.file = response['response'];
                    this.updateFileFormControl(formGroup);
                }, error => {
                    console.log("error in fileCreate -", error);
                });
        } else {
            this.carbonDocumentController.updateDocument(this.currentOrgID, formGroup.get('docID').value, this.toFormData())
                .subscribe((response) => {
                    this.file = response['response'];
                    this.updateFileFormControl(formGroup);
                }, error => {
                    console.log("error in fileUpdate -", error);
                });
        }
    }

    updateFileFormControl(formGroup) {
        formGroup.get('docID').patchValue(this.file.id);
        formGroup.get('docName').patchValue(this.file.name);
        formGroup.get('docPath').patchValue(this.file.path);
    }

    deleteConfirmation(formGroup: FormGroup, index) {
        const dialogRef = this.dialog.open(TypeConfirmationDialog, {

            minWidth: '650px',
            maxWidth: '600px',
            data: {
                icon: 'delete',
                header: 'Are you sure you want to delete ?',
                body: '<p class = "ps-1"><strong class="pe-1"> Note:</strong>This file will be deleted permanently and you won`t be able to track it`s progress.</p><span class="fw-bold ps-1">Are you sure you want to delete?</span>',
                confirmationInput: 'DELETE',
                buttonOne: 'Cancel',
                buttonTwo: 'Delete'
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.deleteDocument(formGroup.get('docID').value, formGroup, index);
            } else {
                dialogRef.close()
            }
        });
    }

    deleteDocument(docID, formGroup, index) {
        this.carbonDocumentController.deleteDocument(this.currentOrgID, docID).subscribe(res => {
            this.removeFile(formGroup, index);
        }, error => {
            console.log("error in deleteDocument -", error);
        });
    }

    uploadDoc(index: number) {
        this.fileInputArr[index].nativeElement.click();
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.activityDataFG.get(control).hasError(error);
    }

    errorHandlingFA = (formGroup: FormGroup, control: string, error: string): boolean => {
        return formGroup.get(control).hasError(error);
    }

    haveValue(formGroup: FormGroup) {
        for (let control in formGroup.controls) {
            if (!this.excluded_controls.includes(control)) {
                let value = formGroup.get(control).value;

                if (control == 'oxidationFactor' || control == 'biomassPct') {
                    if (control == 'oxidationFactor' && value !== CARBON_CONSTANT.DEFAULT_OXIDATION_FACTOR) {
                        return true;
                    }
                    if (control == 'biomassPct' && value !== CARBON_CONSTANT.DEFAULT_BIOMASS_PCT) {
                        return true;
                    }
                } else if ((value ?? false)) {
                    return true;
                }
            }
        }
        return false;
    }

    isAnyRowFilled(): boolean {
        for (let i = 0; i < this.activityDataFA.controls.length; ++i) {
            let formGroup = this.activityDataFA.get(`${i}`) as FormGroup;
            if (this.haveValue(formGroup)) return true;
        }

        return false;
    }

    initFormValidation() {
        this.activityDataFA.valueChanges.subscribe(() => {
            this.activityDataFA.controls.forEach((formGroup: FormGroup, index) => {
                if (this.haveValue(formGroup)) this.addValidationToGroup(formGroup, index);
                else if (this.haveMultipleSource) this.removeValidationFromGroup(formGroup, index);
            })
        });
    }

    addValidationToGroup(formGroup: FormGroup, index: number) {
        if (this.customDateInputs && this.activityDataFG.touched) {
            this.customDateInputs.toArray()[index].daterange.markAsTouched();
        }

        let skip_custom: boolean = formGroup.get('standardFuelID').value ? true : false;
        let skip_standard: boolean = formGroup.get('customFuelID').value ? true : false;

        for (let control of this.valid_fields) {
            if ((control == 'standardFuelID' && skip_standard)) {
                continue;
            } else if ((control == 'customFuelID' && skip_custom)) {
                continue;
            } else {
                formGroup.get(control).addValidators([Validators.required]);
                formGroup.get(control).updateValueAndValidity({ emitEvent: false });
            }
        }
    }

    removeValidationFromGroup(formGroup: FormGroup, index: number) {
        if (this.customDateInputs)
            this.customDateInputs.toArray()[index].daterange.markAsUntouched();
        for (let control in formGroup.controls) {
            formGroup.get(control).removeValidators([Validators.required]);
            formGroup.get(control).updateValueAndValidity({ emitEvent: false });
        }
    }
}