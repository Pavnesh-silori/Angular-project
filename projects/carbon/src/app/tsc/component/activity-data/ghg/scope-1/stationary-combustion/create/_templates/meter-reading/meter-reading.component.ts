import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { Subscription, forkJoin } from 'rxjs';
import { isEqual } from "lodash";

import * as moment from 'moment';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { FuelMatterStateKeyIDEnum } from '@carbon/enum/fuel-matter-state.enum';

import { CarbonDocumentController } from '@carbon/controller/document.controller';

import { FuelService } from '@carbon/service/fuel.service';
import { CustomFuelService } from '@netzero/service/custom-fuel.service';

//tsc-library
import { COMMON_CONSTANT, FormErrorEnum, InvalidForm, MatSelectSearchService, MaterialFormFieldAppearance, NocFileUploadEnum, TypeConfirmationDialog } from '@library/tsc-common';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateService } from '@library/date';
import { EMISSION_FACTOR_SOUREC_KEYID_ENUM } from '@library/netzero'; 
// /tsc-library

@Component({
    selector: 'stationary-combustion-meter-reading',
    templateUrl: './meter-reading.component.html',
    styles: [
    ]
})
export class MeterReadingComponent implements OnInit {

    @Input() activityConfig: any;
    @Input() getAllSource: any[] = [];
    @Input() docFileList: File[];
    @Input() activityID: number;
    @Input() emissionFactorDatabaseID: number = null;
    @Input() emissionFactorDatabaseKeyID: string = null;

    @Output() formGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    COMMON_CONSTANT = COMMON_CONSTANT;
    FormErrorEnum = FormErrorEnum;
    DateFormatEnum = DateFormatEnum;
    DateInputTypeEnum = DateInputTypeEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    action: any = 'create';

    currentOrgID: any;

    activityDataFG: FormGroup;

    dataSource: any = [];
    sourceName: string = null;

    fuelUnitList: UnitM[] = [];
    unitM: UnitM[] = [];
    energyUnitM: UnitM[] = [];
    volumnUnitM: any[] = [];
    massUnitM: any[] = [];

    currentFormArr: FormArray;
    filled: boolean = false;
    submit: boolean = false;

    activityData: any;
    isSource: boolean = false;

    isReadOnly: boolean = true;

    docList: any[] = [];
    isEqual: boolean = true;
    initialObject: any;

    billFile: File = null;
    billFileName: string;
    file: any;

    fuelSource: string;

    fuelTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    energySearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    @ViewChildren('fileInput') fileInput: QueryList<ElementRef>;
    fileInputArr: ElementRef[];
    @ViewChildren('customDateInput') customDateInputs: QueryList<DateInputComponent>;

    constructor(
        private dialog: MatDialog,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private carbonDocumentController: CarbonDocumentController,
        private unitService: UnitService,
        private fuelService: FuelService,
        private customFuelService: CustomFuelService,
        private storageService: StorageService,
        private toastrService: ToastrService,
        private dateService: DateService,
    ) { }

    ngOnInit(): void {

        this.storageService.setStorage('switchOrgRedirect', 'YES');
        this.currentOrgID = parseInt(this.storageService.getStorage(['currentOrgID']));

        this.getUnitList();
    }

    ngOnChanges() {
        this.activatedRoute.queryParams.subscribe((queryParam) => {
            this.action = queryParam['action'];
            this.activityID = queryParam['activityID'];
        });
        this.ActivityDataInit();
        this.getConfiguration(this.activityConfig);
    }

    dateInputSub: Subscription;
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

    ActivityDataInit() {
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
                sourceTypeID: this.activityConfig['activityConfigSource']['sourceTypeID'],
                sourceID: [sourceID],
                dateRange: [],
                startDate: [],
                endDate: [],
                standardFuelID: [],
                fuelSourceID: [],
                customFuelID: [],
                hhv: [],
                hhvNumeratorUnitID: [],
                hhvNumeratorUomCode: [],
                hhvDenominatorUnitID: [],
                hhvDenominatorUomCode: [],
                amountOfFuel: [],
                amountOfFuelUnitID: [],
                amountOfEnergy: [],
                amountOfEnergyUnitID: [],
                openingMeterReading: [],
                closingMeterReading: [],
                meterReadingUnitID: this.activityConfig['activityConfigData']['meterUnitID'],
                activityID: this.activityID,
                emissionFactorDatabaseID: this.emissionFactorDatabaseID,
                density: [],
                densityNumeratorUnitID: [],
                densityDenominatorUnitID: [],
                docID: [],
                docType: [],
                docName: [],
                docSize: [],
                docPath: [],
            })
        );
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

    patchFormData() {
        let fuelSource;
        if (this.activityData.standardFuelID != null) {
            fuelSource = 'S' + this.activityData.standardFuelID;
        } else if (this.activityData.customFuelID != null) {
            fuelSource = 'C' + this.activityData.customFuelID;
        }

        this.fuelSource = fuelSource;

        this.activityDataFA.push(
            this.formBuilder.group({
                activityDataID: this.activityData.id,
                recordID: this.activityData.recordID,
                sourceTypeID: this.activityData.sourceTypeID,
                sourceTypeName: this.activityData.sourceTypeName,
                sourceID: this.activityData.sourceID,
                dateRange: { startDate: moment(this.activityData['startDate']), endDate: moment(this.activityData['endDate']) },
                startDate: this.activityData.startDate,
                endDate: this.activityData.endDate,
                fuelSourceID: fuelSource,
                standardFuelID: this.activityData.standardFuelID,
                customFuelID: this.activityData.customFuelID,
                hhv: this.activityData.hhv,
                hhvNumeratorUnitID: this.activityData.hhvNumeratorUnitID,
                hhvNumeratorUomCode: this.activityData.hhvNumeratorUomCode,
                hhvDenominatorUnitID: this.activityData.hhvDenominatorUnitID,
                hhvDenominatorUomCode: this.activityData.hhvDenominatorUomCode,
                amountOfFuel: this.activityData.amountOfFuel,
                amountOfFuelUnitID: this.activityData.amountOfFuelUnitID,
                amountOfEnergy: this.activityData.amountOfEnergy,
                amountOfEnergyUnitID: this.activityData.amountOfEnergyUnitID,
                openingMeterReading: this.activityData.openingMeterReading,
                closingMeterReading: this.activityData.closingMeterReading,
                meterReadingUnitID: this.activityData.meterReadingUnitID,
                activityID: this.activityData.activityID,
                emissionFactorDatabaseID: this.activityData.emissionFactorDatabase.id,
                density: this.activityData.density != null ? this.activityData.density.value : null,
                densityNumeratorUnitID: this.activityData.density != null ? this.activityData.density.numeratorUnit.unitID : null,
                densityDenominatorUnitID: this.activityData.density != null ? this.activityData.density.denominatorUnit.unitID : null,
                docID: this.activityData.file ? this.activityData.file.id : null,
                docName: this.activityData.file ? this.activityData.file.name : null,
                docPath: this.activityData.file ? this.activityData.file.path : null,
                docSize: [],
            })
        );

        this.emissionFactorDatabaseKeyID = this.activityData.emissionFactorDatabase.keyID;

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
        if (formGroup.get('dateRange').value != null) this.filled = true;
        if (formGroup.get('fuelSourceID').value != null) this.filled = true;
        if (formGroup.get('openingMeterReading').value != null) this.filled = true;
        if (formGroup.get('closingMeterReading').value != null) this.filled = true;
        if (formGroup.get('meterReadingUnitID').value != null) this.filled = true;
    }

    addValidators(formGroup) {
        formGroup.get('dateRange').addValidators([Validators.required]);
        formGroup.get('fuelSourceID').addValidators([Validators.required]);
        formGroup.get('openingMeterReading').addValidators([Validators.required, Validators.min(0)]);
        formGroup.get('closingMeterReading').addValidators([Validators.required, Validators.min(0)]);
        formGroup.get('meterReadingUnitID').addValidators([Validators.required]);

        this.updateValueAndValidity(formGroup);
    }


    removeValidators(formGroup) {
        formGroup.get('dateRange').clearValidators();
        formGroup.get('fuelSourceID').clearValidators();
        formGroup.get('openingMeterReading').clearValidators();
        formGroup.get('closingMeterReading').clearValidators();
        formGroup.get('meterReadingUnitID').clearValidators();

        this.updateValueAndValidity(formGroup);
    }

    updateValueAndValidity(formGroup) {
        formGroup.get('dateRange').updateValueAndValidity({ emitEvent: false });
        formGroup.get('fuelSourceID').updateValueAndValidity({ emitEvent: false });
        formGroup.get('openingMeterReading').updateValueAndValidity({ emitEvent: false });
        formGroup.get('closingMeterReading').updateValueAndValidity({ emitEvent: false });
        formGroup.get('meterReadingUnitID').updateValueAndValidity({ emitEvent: false });
    }

    async getConfiguration(configuration) {
        if (this.action == 'create') {
            const sourceID = configuration.activityConfigSource.sourceID;
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

    getAssetName(id) {
        const asset = this.getAllSource.find(item => item.assetID === id);
        return asset.assetName;
    }

    formatDate(index) {
        let date = this.activityDataFA.controls[index].get('dateRange').value;
        let startDate = moment(date.startDate).format("YYYY-MM-DD");
        let endDate = moment(date.endDate).format("YYYY-MM-DD");
        this.activityDataFA.controls[index].get('startDate').patchValue(startDate);
        this.activityDataFA.controls[index].get('endDate').patchValue(endDate);
    }

    getUnitList() {
        forkJoin([
            this.unitService.getUnit([])
        ]).subscribe(([unitM]) => {
            this.unitM = unitM;
            this.energyUnitM = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.ENERGY]);
            this.volumnUnitM = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.VOLUME]);
            this.massUnitM = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.MASS]);

            // ngx mat select search
            this.energySearchUtil.entityArr = this.energyUnitM;
            this.energySearchUtil.createSubscription();

            this.getFuel();

            if (this.action == 'update') {
                this.activityData = this.activityConfig.activityData;
                this.patchFormData();
                this.dateInputSub = this.customDateInputs.changes.subscribe((list: QueryList<any>) => {
                    if (list.length > 0) {
                        this.patchDate();
                        this.dateInputSub.unsubscribe();
                    }
                });
            }
        },
            error => {
                console.error('error in formInitialization -', error);
            });
    }

    async getFuel() {
        let stdFuel: any[];
        let customFuel: any[];
        let modifiedStdFuel: any[];
        let modifiedCustomFuel: any[];
        let filterFuel: any[];

        [stdFuel, customFuel] = await Promise.all([
            this.fuelService.getFuelByActivityKeyID(ActivityKeyIDEnum.STATIONARY_COMBUSTION),
            this.customFuelService.getCustomFuelList(this.currentOrgID)
        ]);

        if (this.action == 'create') {
            filterFuel = stdFuel.filter(fuel => fuel.efSourceKeyID == this.emissionFactorDatabaseKeyID);
        }
        if (this.action == 'update') {
            filterFuel = stdFuel.filter(fuel => fuel.efSourceKeyID == this.activityConfig.activityData.emissionFactorDatabase.keyID);
        }
        modifiedStdFuel = filterFuel.map((fuel: any) => {
            return {
                ...fuel,
                isStandard: true,
                uID: 'S' + fuel['id']
            };
        });

        modifiedCustomFuel = customFuel.map((fuel: any) => {
            return {
                ...fuel,
                isStandard: false,
                uID: 'C' + fuel['id']
            };
        });

        this.fuelUnitList = modifiedStdFuel.concat(modifiedCustomFuel);

        this.fuelTypeSearchUtil.entityArr = this.fuelUnitList;
        this.fuelTypeSearchUtil.createSubscription();

    }

    dateInpChange(formGroup: FormGroup, index) {
        if (this.customDateInputs) {
            const customDateInputInstance = this.customDateInputs.toArray()[index];
            const startDate = customDateInputInstance?.startDateFC.value;
            const endDate = customDateInputInstance?.endDateFC.value;
            const dateRange = customDateInputInstance?.daterange.value;

            if (startDate) {
                const formattedStartDate = this.dateService.formatDate(startDate, DateFormatEnum.YYYY_MM_DD);
                formGroup.get('startDate').patchValue(formattedStartDate);
            }

            if (endDate) {
                const formattedEndDate = this.dateService.formatDate(endDate, DateFormatEnum.YYYY_MM_DD);
                formGroup.get('endDate').patchValue(formattedEndDate);
            }

            if (dateRange) {
                const dateRangeFormate = this.dateService.formatDate(dateRange, DateFormatEnum.YYYY_MM_DD);
                formGroup.get('dateRange').patchValue(dateRangeFormate);

            }
        }
    }

    patchDate() {
        const customDateInputInstance = this.customDateInputs.toArray()[0];

        if (customDateInputInstance) {
            customDateInputInstance.daterange.patchValue({ startDate: moment(this.activityData['startDate']), endDate: moment(this.activityData['endDate']) });
        }
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
            this.carbonDocumentController.createDocument(this.currentOrgID, formGroup.get('activityDataID').value, ActivityKeyIDEnum.STATIONARY_COMBUSTION,
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
        this.activityDataFG.markAllAsTouched();
        if (this.action == 'create') {
            if (this.activityDataFG.invalid || this.submit == false) {
                this.toastrService.openToast('Error', 'Fill at least one record detail', 'error');
                return;
            }
        } else if (this.action == 'update') {
            if (!this.isEqual && (this.activityDataFG.invalid || this.submit == false)) {
                this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR); return;
            }
        }

        this.activityData = {};
        const validControls: FormGroup[] = [];
        const formArray = this.activityDataFG.get('activityDataDetails') as FormArray;

        formArray.controls.forEach((control: FormGroup, index: number) => {
            if (control.get('openingMeterReading').value != null) {
                validControls.push(control);
            }
            if (control.get('openingMeterReading').value == null) {
                this.docFileList.splice(index, 1);
            }
        });
        const newFormArray = new FormArray(validControls);
        this.activityData = JSON.parse(JSON.stringify(newFormArray.value));
        return true;
    }

    standardFuelChange(index) {
        if (this.activityDataFA.controls[index].get('fuelSourceID').value != null) {
            let fuel = this.fuelUnitList.find(fuel => fuel['uID'] == this.activityDataFA.controls[index].get('fuelSourceID').value);
            this.activityDataFA.controls[index].get('standardFuelID').patchValue(fuel.id);
            this.activityDataFA.controls[index].get('customFuelID').reset(null);
        }
    }

    customFuelChange(index) {
        if (this.activityDataFA.controls[index].get('fuelSourceID').value != null) {
            let fuel = this.fuelUnitList.find(fuel => fuel['uID'] == this.activityDataFA.controls[index].get('fuelSourceID').value);
            this.activityDataFA.controls[index].get('customFuelID').patchValue(fuel.id);
            this.activityDataFA.controls[index].get('standardFuelID').reset(null);
        }
    }

    errorHandlingFA = (formGroup: FormGroup, control: string, error: string): boolean => {
        return formGroup.get(control).hasError(error);
    }

    ngOnDestroy() {
        this.storageService.setStorage('switchOrgRedirect', 'NO');
    }

}
