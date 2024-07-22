import { Component, ElementRef, EventEmitter, OnInit, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { isEqual } from "lodash";
import * as moment from 'moment';
import { Subscription, forkJoin } from 'rxjs';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';
import { DataCollectionMethodKeyIDEnum } from '@carbon/enum/data-collection-method.enum';

import { FuelService } from '@carbon/service/fuel.service';
import { DataCollectionMethodService } from '@carbon/service/data-collection-method.service';

/* tsc-library */
import {
    DateFormatEnum,
    DateInputComponent,
    DateInputTypeEnum,
    DateService
} from '@library/date';
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import {
    FormErrorEnum,
    MatSelectSearchService,
    MaterialFormFieldAppearance,
    NocFileUploadEnum,
    TSCCommonService,
    TypeConfirmationDialog
} from '@library/tsc-common';
import {
    UnitM,
    UnitService,
    UnitTypeKeyID
} from '@library/unit-service';
/* tsc-library */

import { CustomFuelService } from '@netzero/service/custom-fuel.service';
import { MatDialog } from '@angular/material/dialog';
import { CarbonDocumentController } from '@carbon/controller/document.controller';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class ElectricityHeatExportActivityDataCreateComponent implements OnInit {
    FormErrorEnum = FormErrorEnum;
    DateFormatEnum = DateFormatEnum;
    DateInputTypeEnum = DateInputTypeEnum;
    ActivityKeyIDEnum = ActivityKeyIDEnum;
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    activityData: any;
    activityConfig: any;
    activityDataFG: FormGroup;
    docFileList: File[] = new Array(1).fill(null);
    defaultDataCollectionMethodID: Number;

    @ViewChildren('fileInput') fileInput: QueryList<ElementRef>;
    fileInputArr: ElementRef[];
    @ViewChildren(DateInputComponent) customDateInputs: QueryList<DateInputComponent>;

    activityID: number;

    activityKeyID: ActivityKeyIDEnum;
    dataInputMethoutKeyID: DataInputMethodKeyIDEnum;

    currentOrgID: any;
    action: string = null;

    fuelList: any[];
    customFuelList: any[];

    isUpdate: boolean = false;
    isMeterReading: boolean = false;
    isSourceAvailable: boolean = false;

    isEqual: boolean = false;
    initialObject: any = null;

    billFile: File = null;
    billFileName: string;
    noBillFileAvailable: boolean = true;
    file: any;

    fuelTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    energyUnitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    customFuelSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    ncvNumeratorSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    ncvDenominatorSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    energyExportedUnitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private dialog: MatDialog,
        private carbonDocumentController: CarbonDocumentController,
        private formBuilder: FormBuilder,
        private fuelService: FuelService,
        private customFuelService: CustomFuelService,
        private unitService: UnitService,
        private dateService: DateService,
        private toastrService: ToastrService,
        private tscCommonService: TSCCommonService,
        private dataCollectionMethodService: DataCollectionMethodService,
        storageService: StorageService,
        activatedRoute: ActivatedRoute,
    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');

        activatedRoute.queryParams.subscribe(qParams => {
            this.action = qParams['action'];
            this.isUpdate = (this.action == 'update');
            this.activityID = Number(qParams['activityID']);
        });

        this.activityKeyID = activatedRoute.snapshot.data.activityKeyID;
    }

    ngOnInit(): void {
        this.formInit();
        if (!this.got_necessary_data) {
            this.getNecessaryData();
        }
        this.getDataCollectionMethod();

        if (this.isUpdate) {
            this.getActivityData();
        }
    }

    fileInputLoadSub: Subscription;
    ngAfterViewInit() {
        this.fileInputLoadSub = this.fileInput.changes.subscribe(() => this.updateFileInputArray());
        this.updateFileInputArray();
    }

    private updateFileInputArray() {
        if (this.fileInput && this.fileInput.length > 0) {
            this.fileInputArr = this.fileInput.toArray();
        }
    }
    
    patchActivityData() {
        let formGroup = this.dataFG;
        this.activityDataFA.push(formGroup);

        const activity_data = this.mapDataToPatch(this.activityData);

        const source = activity_data.source;
        const sourceType = activity_data.sourceType;
        const ncvNumeratorUnit = activity_data.ncvNumeratorUnit;
        const ncvDenominatorUnit = activity_data.ncvDenominatorUnit;
        const dataCollectionMethodStd = activity_data.dataCollectionMethodStd;
        const energyExportedUnit = activity_data.energyExportedUnit;
        const customFuel = activity_data.customFuel;
        const standardFuel = activity_data.standardFuel;

        formGroup.patchValue({
            activityDataID: activity_data.id,
            dataCollectionMethodID: dataCollectionMethodStd.id,
            sourceID: this.isSourceAvailable ? source.id : null,
            sourceName: this.isSourceAvailable ? source.name : null,
            sourceTypeID: this.isSourceAvailable ? sourceType.id : null,
            startDate: activity_data.startDate,
            customFuelID: customFuel != null ? customFuel.id : null,
            standardFuelID: standardFuel != null ? standardFuel.id : null,
            netCalorificValue: activity_data.netCalorificValue,
            ncvNumeratorUnitID: ncvNumeratorUnit.unitID,
            ncvDenominatorUnitID: ncvDenominatorUnit.unitID,
            oxidationFactor: activity_data.oxidationFactor,
            biomassPct: activity_data.biomassPct,
            energyExported: activity_data.energyExported,
            energyExportedUnitID: energyExportedUnit.unitID,
        });

        const dataInputMethod = this.activityConfig.activityConfigData.dataInputMethod;
        if (dataInputMethod.keyID == DataInputMethodKeyIDEnum.METER_READING) {
            formGroup.patchValue({
                openingMeterReading: activity_data.openingMeterReading,
                closingMeterReading: activity_data.closingMeterReading,
                meterUnitID: activity_data.meterUnit.unitID,
            });
            formGroup.get('meterUnitID').disable();
        }

        if (activity_data.file != null) {
            formGroup.patchValue({
                docID: activity_data.file.id,
                docName: activity_data.file.name,
                docPath: activity_data.file.path,
            });
        }

        if (this.activityData.sourceName != null) {
            // this.sourceName = this.activityData.sourceName;
            // this.isSource = true;
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
        const isStandard: boolean = this.activityData.standardFuel != null ? true : false;
        this.fuelSelected(isStandard ? 'STANDARD' : 'CUSTOM', isStandard ? this.activityData.standardFuel.id : this.activityData.customFuel.id, this.activityDataFA.get('0'), true);
    }

    formInit() {
        this.activityDataFG = this.formBuilder.group({
            activityData: this.formBuilder.array([])
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.activityDataFG.firstChange) {
            // this.formDataInit();
        }

        if (changes?.defaultDataCollectionMethodID) {
            if (this.defaultDataCollectionMethodID != undefined || this.defaultDataCollectionMethodID != null) {
                this.setDataCollectionMethod();
            }
        }

        if (changes.activityConfig) {
            if (this.activityConfig != undefined && this.activityConfig != null) {
                if (this.action == 'create') {
                    // this.addActivityDataFG();
                }
            }
        }
    }

    addActivityDataFG(formGroup: FormGroup) {
        let sources: any[] = this.activityConfig.activityConfigSource[0].source;

        sources.forEach((source) => {
            formGroup.get('sourceID').patchValue(source.id)
            formGroup.get('sourceName').patchValue(source.name);
            formGroup.get('sourceTypeID').patchValue(this.activityConfig.activityConfigSource[0].sourceTypeID);
        });
    }

    setDataCollectionMethod() {
        this.activityDataFA.controls.forEach(group => {
            group.get('dataCollectionMethodID').patchValue(this.defaultDataCollectionMethodID);
        })
    }

    get dataFG() {
        return this.formBuilder.group({
            activityID: [this.activityID, [Validators.required]],
            activityKeyID: [this.activityKeyID, [Validators.required]],
            activityDataID: [, this.isUpdate ? [Validators.required] : null],
            sourceTypeID: [, this.isSourceAvailable ? [Validators.required] : null],
            sourceID: [, this.isSourceAvailable ? [Validators.required] : null],
            sourceName: [],
            dataCollectionMethodID: [this.defaultDataCollectionMethodID, [Validators.required]],
            startDate: [, [Validators.required]],
            endDate: [, [Validators.required]],
            customFuelID: [, [Validators.required]],
            standardFuelID: [, [Validators.required]],
            fuelName: [, [Validators.required]],
            energyExported: [, !this.isMeterReading ? [Validators.required, Validators.min(0)] : null],
            energyExportedUnitID: [, !this.isMeterReading ? [Validators.required] : null],
            openingMeterReading: [, this.isMeterReading ? [Validators.required, Validators.min(0)] : null],
            closingMeterReading: [, this.isMeterReading ? [Validators.required, Validators.min(0)] : null],
            meterUnitID: [, this.isMeterReading ? [Validators.required] : null],
            netCalorificValue: [, [Validators.required, Validators.min(0)]],
            ncvNumeratorUnitID: [, [Validators.required]],
            ncvDenominatorUnitID: [, [Validators.required]],
            oxidationFactor: [CARBON_CONSTANT.DEFAULT_OXIDATION_FACTOR, [Validators.required, Validators.min(0), Validators.max(1)]],
            biomassPct: [CARBON_CONSTANT.DEFAULT_BIOMASS_PCT, [Validators.required, Validators.min(0), Validators.max(100)]],
            docID: [],
            docType: [],
            docName: [],
            docSize: [],
            docPath: [],
        });
    }

    get activityDataFA(): FormArray {
        return this.activityDataFG.get('activityData') as FormArray;
    }

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

    validFields: string[] = [
        'activityID',
        'activityKeyID',
        'dataCollectionMethodID',
        'startDate',
        'endDate',
        'customFuelID',
        'standardFuelID',
        'fuelName',
        'netCalorificValue',
        'ncvNumeratorUnitID',
        'ncvDenominatorUnitID',
        'oxidationFactor',
        'biomassPct',
        'energyExported',
        'energyExportedUnitID',
    ];

    getFuelRequiredError(formGroup: FormGroup) {
        if ((formGroup.get('customFuelID').invalid && formGroup.get('standardFuelID').invalid) && formGroup.get('customFuelID').touched)
            return true;
        return false;
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

    addValidationToGroup(formGroup: FormGroup) {
        for (let control of this.validFields) {
            formGroup.get(control).addValidators([Validators.required]);
            formGroup.get(control).updateValueAndValidity({ emitEvent: false });
        }
    }

    removeValidationFromGroup(formGroup: FormGroup) {
        for (let control in formGroup.controls) {
            formGroup.get(control).removeValidators([Validators.required]);
            formGroup.get(control).updateValueAndValidity({ emitEvent: false });
        }
    }

    dateInputSub: Subscription;
    config_available: boolean = false;
    async getConfiguration(configuration) {
        if (configuration != null) {
            this.config_available = true;

            this.activityConfig = configuration;
            const activityConfigData = configuration.activityConfigData;
            this.dataInputMethoutKeyID = activityConfigData.dataInputMethod.keyID;
            this.isMeterReading = (this.dataInputMethoutKeyID == DataInputMethodKeyIDEnum.METER_READING);

            this.docFileList = new Array(1).fill(null);
            if (!this.isUpdate) {
                const activityConfigSource = configuration.activityConfigSource;
                if (activityConfigSource.length > 0) {
                    this.isSourceAvailable = true;
                    this.docFileList = new Array(activityConfigSource[0].source.length).fill(null);
                }

                let formGroup: FormGroup = this.dataFG;
                if (this.isSourceAvailable) {
                    this.addActivityDataFG(formGroup)
                }

                if (this.isMeterReading) {
                    const meterRollover = activityConfigData.meterRollover;
                    formGroup.get('meterUnitID').patchValue(meterRollover.unit.unitID);
                    formGroup.get('meterUnitID').disable();
                }
                this.activityDataFA.push(formGroup);
            } else {
                this.activityData = this.activityConfig.activityData;
                this.isSourceAvailable = (this.activityData.source != null);
                this.patchActivityData();
                this.dateInputSub = this.customDateInputs.changes.subscribe((list: QueryList<any>) => {
                    if (list.length > 0) {
                        this.patchDate();
                        this.dateInputSub.unsubscribe();
                    }
                });
            }
        }
    }

    async getDataCollectionMethod() {
        let dataCollectionMethods = await this.dataCollectionMethodService.getDataCollectionMethod()

        let manual_entry = this.tscCommonService.getUniqueObject(dataCollectionMethods, 'keyID', DataCollectionMethodKeyIDEnum.MANUAL_ENTRY);
        this.defaultDataCollectionMethodID = manual_entry.dataCollectionMethodID;
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

    got_necessary_data: boolean = false;
    async getNecessaryData() {
        this.customFuelList = await this.customFuelService.getCustomFuelList(this.currentOrgID);
        this.customFuelSearchUtil.entityArr = this.customFuelList;
        this.customFuelSearchUtil.createSubscription();
        forkJoin([
            this.fuelService.getFuelByActivityKeyID(ActivityKeyIDEnum.STATIONARY_COMBUSTION),
            // this.customFuelService.getCustomFuelList(this.currentOrgID),
            this.unitService.getUnit([])
        ]).subscribe(([fuel, /* customFuel, */ units]: [any[], /* any[], */ UnitM[]]) => {
            this.fuelList = fuel;
            // this.customFuelList = <any[]>customFuel;
            const unitM: UnitM[] = units;

            const energyUnitM: UnitM[] = this.unitService.filterUnit(unitM, [UnitTypeKeyID.ENERGY]);
            const volumeAndMassUnits: UnitM[] = this.unitService.filterUnit(unitM, [UnitTypeKeyID.MASS, UnitTypeKeyID.VOLUME]);

            this.energyUnitSearchUtil.entityArr = energyUnitM;
            this.energyUnitSearchUtil.createSubscription();

            this.energyExportedUnitSearchUtil.entityArr = energyUnitM;
            this.energyExportedUnitSearchUtil.createSubscription();

            this.ncvNumeratorSearchUtil.entityArr = energyUnitM;
            this.ncvNumeratorSearchUtil.createSubscription();

            this.fuelTypeSearchUtil.entityArr = this.fuelList;
            this.fuelTypeSearchUtil.createSubscription();

            // this.customFuelSearchUtil.entityArr = this.customFuelList;
            // this.customFuelSearchUtil.createSubscription();

            this.ncvDenominatorSearchUtil.entityArr = volumeAndMassUnits;
            this.ncvDenominatorSearchUtil.createSubscription();

            this.got_necessary_data = true;
            if (this.isUpdate) {
                this.patchFuel();
            }
        },
            error => {
                console.error('error in formInitialization -', error);
            });
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

        formGroup.get('fuelName').patchValue(selected_fuel.name);

        formGroup.get(reset_field).reset(null);
        formGroup.get(reset_field).removeValidators([Validators.required]);
        formGroup.get(reset_field).updateValueAndValidity();
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
            this.carbonDocumentController.createDocument(this.currentOrgID, formGroup.get('activityDataID').value, this.activityKeyID,
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

    isValidForm(): boolean {
        // let isAnyRowFilled: boolean = this.isAnyRowFilled();

        // if (!isAnyRowFilled) {
        //     this.toastrService.error('Fill atleast one data row!');
        //     return false;
        // }

        if (this.activityDataFG.invalid) {
            this.customDateInputs.toArray()[0].daterange.markAsTouched();
            this.activityDataFG.markAllAsTouched();
            console.error('invalid form -', this.activityDataFG);
            return false;
        }

        this.activityData = {};
        this.activityData = JSON.parse(JSON.stringify(this.mapDataAccordingToActivity()));

        return true;
    }

    mapDataAccordingToActivity() {
        let dataArr = [];
        let activityData = this.activityDataFG.getRawValue().activityData as Array<any>;
        activityData.forEach((data) => {
            dataArr.push(this.mapData(data, this.activityKeyID));
        });

        return dataArr;
    }

    mapData(oldData: { [key: string]: any }, activityKeyID: string): { [key: string]: any } {
        const {
            energyExported,
            energyExportedUnitID,
            ...rest
        } = oldData; // Destructure the properties that need to be renamed

        if (activityKeyID == ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT) {
            return {
                electricityExported: energyExported,
                electricityExportedUnitID: energyExportedUnitID,
                ...rest, // Spread the rest of the properties back into the new object
            };
        } else {
            return {
                heatExported: energyExported,
                heatExportedUnitID: energyExportedUnitID,
                ...rest, // Spread the rest of the properties back into the new object
            };
        }
    }

    mapDataToPatch(oldData: { [key: string]: any }): { [key: string]: any } {
        if (this.activityKeyID == ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT) {

            let {
                electricityExported,
                electricityExportedUnit,
                ...rest
            } = oldData; // Destructure the properties that need to be renamed

            return {
                energyExported: electricityExported,
                energyExportedUnit: electricityExportedUnit,
                ...rest, // Spread the rest of the properties back into the new object
            };
        } else {
            let {
                heatExported,
                heatExportedUnit,
                ...rest
            } = oldData; // Destructure the properties that need to be renamed

            return {
                energyExported: heatExported,
                energyExportedUnit: heatExportedUnit,
                ...rest, // Spread the rest of the properties back into the new object
            };
        }
    }

    activityDataValidity() {
        this.activityDataFG.valueChanges.subscribe(() => this.validity.emit(!this.activityDataFG.invalid));
    }

    getActivityData() {
        return {
            'activityData': this.mapDataAccordingToActivity(),
            'activityDataFile': this.docFileList
        }
    }

    updateActivityData() {
        return this.activityData[0];
    }

    errorHandlingFA = (formGroup: FormGroup, control: string, error: string): boolean => {
        return formGroup.get(control).hasError(error);
    }
}
