import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { forkJoin } from 'rxjs';
import { cloneDeep } from 'lodash-es';
import * as moment from 'moment';

import { HhvCreateUpdateDialog } from '../../../stationary-combustion/_shared/create-update-hhv/create-update-hhv.dialog';

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import { FuelService } from '@carbon/service/fuel.service';
import { CarbonDocumentController } from '@carbon/controller/document.controller';

// tsc-library/
import { COMMON_CONSTANT, FormErrorEnum, InvalidForm, MatSelectSearchService, MaterialFormFieldAppearance, NocFileUploadEnum, TypeConfirmationDialog } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrService, ToastrColor } from '@library/toastr-service';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
import { EMISSION_FACTOR_SOUREC_KEYID_ENUM } from '@library/netzero';
import { FuelMatterStateKeyIDEnum } from '@carbon/enum/fuel-matter-state.enum';
// tsc-library.

@Component({
    selector: 'fuel-odometer-reading',
    templateUrl: './fuel-odometer-reading.component.html',
    styleUrls: ['./fuel-odometer-reading.component.scss']

})
export class FuelOdometerReadingComponent implements OnInit {

    @Input() activityConfig: any;
    @Input() allVechile: any[] = [];
    @Input() activityID: number;
    @Input() docFileList: File[];
    @Input() emissionFactorDatabaseID: number = null;
    @Input() emissionFactorDatabaseKeyID: string = null;

    @Output() docUploadChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() formGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    FuelMatterStateKeyIDEnum = FuelMatterStateKeyIDEnum;
    EmissionFactorSourecKeyIDEnum = EMISSION_FACTOR_SOUREC_KEYID_ENUM;

    @ViewChild('fileInput') fileInput: ElementRef;

    COMMON_CONSTANT = COMMON_CONSTANT;

    fileInputArr: ElementRef[] = [];
    currentFormArr: FormArray;
    activityDataFG: FormGroup;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    noOfVeh: number;
    activityData: any;
    vechileTypeID: number;
    vehicleName: string;
    odometerUnit: string;
    milageNum: any;
    milageDenum: any;
    billFile: File = null;
    billFileName: string;
    file: any;
    currentOrgID: any;
    action: any = 'create';
    milageNumFlag: boolean = false;
    milagedenumFlag: boolean = false;
    dataSourceLength: any;
    isEqual: boolean = true;
    isSource: boolean = false;
    filled: boolean = false;
    submit: boolean = false;
    CARBON_CONSTANT = CARBON_CONSTANT;
    FormErrorEnum = FormErrorEnum;
    dataSource: any = [];
    sourceTypeArray: any = [];
    unitM: UnitM[] = [];
    massUnitList: UnitM[] = [];
    fuelUnitList: any[] = [];
    distanceUnitlist: UnitM[] = [];
    volumnUnitList: UnitM[] = [];
    energyUnitList: UnitM[] = [];
    unitIDList: UnitM[] = [];

    technologyList: any[] = [];

    showNcvErrorFlag: boolean = false;
    densityFlag: boolean = false

    fuelTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['fuelSourceName']);
    technologySearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    volumnUnitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    massUnitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    constructor(
        private carbonDocumentController: CarbonDocumentController,
        private dialog: MatDialog,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private unitService: UnitService,
        private fuelService: FuelService,
        private storageService: StorageService,
        private toastrService: ToastrService,
    ) { }

    ngOnChanges() {
        this.activatedRoute.queryParams.subscribe((queryParam) => {
            this.action = queryParam.action;
        });

        this.vechileTypeID = this.activityConfig.activityConfigData.vehicleTypeID;

        this.activityDataInit();
        this.getConfiguration(this.activityConfig);
    }

    ngOnInit(): void {
        this.vechileTypeID = this.activityConfig.activityConfigData.vehicleTypeID;
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.odometerUnit = this.activityConfig.activityConfigData.meterUnitID;
        this.getUnitList();
    }

    activityDataInit() {
        this.activityDataFG = this.formBuilder.group({
            activityDataDetails: this.formBuilder.array([]),
        });
        this.addFormControls();
    }

    toggleFlag(checked: boolean, flag: string) {
        switch (flag) {
            case 'milageNumFlag':
                this.milageNumFlag = checked;
                break;
            case 'milagedenumFlag':
                this.milagedenumFlag = checked;
                break;
            default:
        }
    }

    selectedvalue(value, dropdownType: string) {
        switch (dropdownType) {

            case 'milageNumerator':
                this.milageNum = value;
                this.updateFormControls();
                break;
            case 'milageDenumerator':
                this.milageDenum = value;
                this.updateFormControls();
                break;
        }
    }

    updateFormControls() {
        this.activityDataDetailsFA.controls.forEach((formGroup: FormGroup) => {
            if (this.milageNum) {
                formGroup.get('mileageNumeratorUnitID').setValue(this.milageNum);
            }
            if (this.milageDenum) {
                formGroup.get('mileageDenominatorUnitID').setValue(this.milageDenum);
            }
        });
    }

    get activityDataDetailsFA(): FormArray {
        return this.activityDataFG.get('activityDataDetails') as FormArray;
    }

    haveOdometerUnit() {
        return this.activityConfig.activityConfigData.meterUnitID ? true : false;
    }

    addFormControls() {
        this.activityDataDetailsFA.clear();
        this.dataSource.forEach((ds) => {
            let name = "";
            this.sourceTypeArray.forEach((res) => {
                if (ds.id == res.id) {
                    name = res.name;
                }
            });
            this.activityDataDetailsFA.push(
                this.formBuilder.group({
                    recordID: [],
                    sourceTypeID: this.activityConfig.activityConfigSource.sourceTypeID,
                    sourceID: [ds.id],
                    dateRange: [],
                    startDate: [],
                    endDate: [],
                    fuelTypeID: [],
                    fuelAmount: [],
                    fuelAmountUnitID: [],
                    openingOdometerReading: [],
                    closingOdometerReading: [],
                    odometerReadingUnitID: this.activityConfig.activityConfigData.meterUnitID,
                    mileage: [],
                    mileageNumeratorUnitID: this.activityConfig.activityConfigData.meterUnitID,
                    mileageDenominatorUnitID: [],
                    emissionFactorDatabaseID: this.emissionFactorDatabaseID,
                    technologyID: [],
                    docID: [],
                    docType: [],
                    docName: [],
                    docSize: [],
                    docPath: [],
                    activityID: this.activityID,
                    activityDataID: [],
                    ncv: [],
                    ncvNumeratorUnitID: [],
                    ncvNumeratorUomCode: [],
                    ncvDenominatorUnitID: [],
                    ncvDenominatorUomCode: [],
                    density: [],
                    densityNumeratorUnitID: [],
                    densityDenominatorUnitID: [],
                })
            );
        });
        this.updateValidators();
    }

    formatDate(index) {
        let date = this.activityDataDetailsFA.controls[index].get('dateRange').value;
        let startDate = moment(date.startDate).format("YYYY-MM-DD");
        let endDate = moment(date.endDate).format("YYYY-MM-DD");
        this.activityDataDetailsFA.controls[index].get('startDate').patchValue(startDate);
        this.activityDataDetailsFA.controls[index].get('endDate').patchValue(endDate);
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
        if (formGroup.get('fuelTypeID').value != null) this.filled = true;
        if (formGroup.get('fuelAmount').value != null) this.filled = true;
        if (formGroup.get('fuelAmountUnitID').value != null) this.filled = true;
        if (formGroup.get('openingOdometerReading').value != null) this.filled = true;
        if (formGroup.get('closingOdometerReading').value != null) this.filled = true;
        if (formGroup.get('odometerReadingUnitID').value != null) this.filled = true;
        if (formGroup.get('mileage').value != null) this.filled = true;
        if (formGroup.get('mileageNumeratorUnitID').value != null) this.filled = true;
        if (formGroup.get('mileageDenominatorUnitID').value != null) this.filled = true;
    }

    addValidators(formGroup) {
        formGroup.get('dateRange').addValidators([Validators.required]);
        formGroup.get('fuelTypeID').addValidators([Validators.required]);
        formGroup.get('fuelAmount').addValidators([Validators.required, Validators.min(0)]);
        formGroup.get('fuelAmountUnitID').addValidators([Validators.required]);
        formGroup.get('openingOdometerReading').addValidators([Validators.required, Validators.min(0)]);
        formGroup.get('closingOdometerReading').addValidators([Validators.required, Validators.min(0)]);
        formGroup.get('odometerReadingUnitID').addValidators([Validators.required]);
        formGroup.get('mileage').addValidators([Validators.required, Validators.min(0)]);
        formGroup.get('mileageNumeratorUnitID').addValidators([Validators.required]);
        formGroup.get('mileageDenominatorUnitID').addValidators([Validators.required]);

        const fuelAmount = formGroup.get('fuelAmount').value;
        const opeaningOdometer = formGroup.get('openingOdometerReading').value;
        const closingOdometer = formGroup.get('closingOdometerReading').value;
        const mileage = formGroup.get('mileage').value;

        if (fuelAmount != null && opeaningOdometer != null && closingOdometer != null) {
            formGroup.get('mileage').clearValidators();
            formGroup.get('mileageNumeratorUnitID').clearValidators();
            formGroup.get('mileageDenominatorUnitID').clearValidators();
        }
        if (fuelAmount != null && mileage != null) {
            formGroup.get('openingOdometerReading').clearValidators();
            formGroup.get('closingOdometerReading').clearValidators();
            formGroup.get('odometerReadingUnitID').clearValidators();
        }
        if (opeaningOdometer != null && closingOdometer != null && mileage != null) {
            formGroup.get('fuelAmount').clearValidators();
            formGroup.get('fuelAmountUnitID').clearValidators();
        }


        this.updateValueAndValidity(formGroup);
    }

    removeValidators(formGroup) {
        formGroup.get('dateRange')?.clearValidators();
        formGroup.get('fuelTypeID')?.clearValidators();
        formGroup.get('fuelAmount')?.clearValidators();
        formGroup.get('fuelAmountUnitID')?.clearValidators();
        formGroup.get('openingOdometerReading')?.clearValidators();
        formGroup.get('closingOdometerReading')?.clearValidators();
        formGroup.get('odometerReadingUnitID')?.clearValidators();
        formGroup.get('mileage')?.clearValidators();
        formGroup.get('mileageNumeratorUnitID')?.clearValidators();
        formGroup.get('mileageDenominatorUnitID')?.clearValidators();

        this.updateValueAndValidity(formGroup);
    }

    updateValueAndValidity(formGroup) {
        formGroup.get('dateRange')?.updateValueAndValidity({ emitEvent: false });
        formGroup.get('fuelTypeID')?.updateValueAndValidity({ emitEvent: false });
        formGroup.get('fuelAmount')?.updateValueAndValidity({ emitEvent: false });
        formGroup.get('fuelAmountUnitID')?.updateValueAndValidity({ emitEvent: false });
        formGroup.get('openingOdometerReading')?.updateValueAndValidity({ emitEvent: false });
        formGroup.get('closingOdometerReading')?.updateValueAndValidity({ emitEvent: false });
        formGroup.get('odometerReadingUnitID')?.updateValueAndValidity({ emitEvent: false });
        formGroup.get('mileage')?.updateValueAndValidity({ emitEvent: false });
        formGroup.get('mileageNumeratorUnitID')?.updateValueAndValidity({ emitEvent: false });
        formGroup.get('mileageDenominatorUnitID')?.updateValueAndValidity({ emitEvent: false });
    }

    async getConfiguration(configuration) {
        if (this.action == 'create') {
            const sourceID = configuration.activityConfigSource.sourceID;
            this.noOfVeh = configuration.activityConfigSource.sourceID.length;

            if (sourceID != null && sourceID.length > 0) {
                this.isSource = true;
                this.dataSource = [];
                sourceID.forEach((res) => {
                    const vehicle = this.allVechile.find(item => item.id == res);
                    this.dataSource.push({
                        id: res,
                        name: vehicle.vehicleName,
                    })
                })
            } else {
                this.isSource = false;
            }
            this.dataSourceLength = 0;
            this.addFormControls();
        }
    }

    patchData() {
        this.activityDataDetailsFA.push(
            this.formBuilder.group({
                recordID: this.activityData.recordID,
                sourceTypeID: this.activityData.sourceTypeID,
                sourceID: this.activityData.sourceID,
                startDate: this.activityData.startDate,
                endDate: this.activityData.endDate,
                dateRange: { startDate: moment(this.activityData.startDate), endDate: moment(this.activityData.endDate) },
                fuelTypeID: this.activityData.fuelTypeID,
                fuelAmount: this.activityData.fuelAmount,
                fuelAmountUnitID: this.activityData.fuelAmountUnitID,
                openingOdometerReading: this.activityData.openingOdometerReading,
                closingOdometerReading: this.activityData.closingOdometerReading,
                odometerReadingUnitID: this.activityData.odometerReadingUnitID,
                mileage: this.activityData.mileage,
                mileageNumeratorUnitID: this.activityData.mileageNumeratorUnitID,
                mileageDenominatorUnitID: this.activityData.mileageDenominatorUnitID,
                emissionFactorDatabaseID: this.activityData.emissionFactorDatabase.id,
                technologyID: [this.activityData.technology != null ? this.activityData.technology.id : null],
                docID: [this.activityData?.file?.id],
                docType: [this.activityData?.docType],
                docName: [this.activityData?.file?.name],
                docPath: [this.activityData?.file?.path],
                docSize: [this.activityData?.docSize],
                activityID: this.activityID,
                activityDataID: this.activityData.id,
                ncv: this.activityData.ncv != null ? this.activityData.ncv.value : null,
                ncvNumeratorUnitID: this.activityData.ncv != null ? this.activityData.ncv.numeratorUnit.unitID : null,
                ncvNumeratorUomCode: this.activityData.ncv != null ? this.activityData.ncv.numeratorUnit.uomCode : null,
                ncvDenominatorUnitID: this.activityData.ncv != null ? this.activityData.ncv.denominatorUnit.unitID : null,
                ncvDenominatorUomCode: this.activityData.ncv != null ? this.activityData.ncv.denominatorUnit.uomCode : null,
                density: this.activityData.density != null ? this.activityData.density.value : null,
                densityNumeratorUnitID: this.activityData.density != null ? this.activityData.density.numeratorUnit.unitID : null,
                densityDenominatorUnitID: this.activityData.density != null ? this.activityData.density.denominatorUnit.unitID : null,
            })
        );
        this.emissionFactorDatabaseKeyID = this.activityData.emissionFactorDatabase.keyID;

        if (this.activityData.sourceName != null) {
            this.vehicleName = this.activityData.sourceName;
            this.isSource = true;
        }

        this.getTechnology(this.activityData.fuelTypeID, null);

        this.updateValidators();
    }

    getNcvValue(index): number {
        return this.activityDataDetailsFA.controls[index].get('ncv').value;
    }

    haveFuel(index): boolean {
        return this.activityDataDetailsFA.controls[index].get('fuelTypeID').value ? true : false;
    }

    getNcvNumerator(index) {
        return this.activityDataDetailsFA.controls[index].get('ncvNumeratorUomCode').value;
    }

    getNcvDenominator(index) {
        return this.activityDataDetailsFA.controls[index].get('ncvDenominatorUomCode').value;
    }

    isValidForm() {
        this.activityDataFG.markAllAsTouched();
        if (this.action == 'create') {
            if (this.activityDataFG.invalid || this.submit == false) {
                this.toastrService.openToast('Error', 'Fill at least one record detail', 'error');
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

        formArray.controls.forEach((control: FormGroup) => {
            if (control.get('fuelTypeID').value != null) {
                validControls.push(control);
            }
        });
        const newFormArray = new FormArray(validControls);
        this.activityData = JSON.parse(JSON.stringify(newFormArray.value));
        return true;
    }

    getUnitList() {
        forkJoin([
            this.fuelService.getFuelSource(),
            this.unitService.getUnit([])
        ]).subscribe(([fuelUnitM, unitM]) => {
            let fuelUnitList = fuelUnitM;
            this.unitM = unitM;
            this.massUnitList = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.MASS]);
            this.distanceUnitlist = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.LENGTH]);
            this.volumnUnitList = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.VOLUME]);

            // ngx mat select search
            this.volumnUnitSearchUtil.entityArr = this.volumnUnitList;
            this.volumnUnitSearchUtil.createSubscription();

            // ngx mat select search
            this.massUnitSearchUtil.entityArr = this.massUnitList;
            this.massUnitSearchUtil.createSubscription();

            if (this.action == 'create') {
                this.fuelUnitList = fuelUnitList.filter(fuel => fuel.emissionFactorSource.keyID == this.emissionFactorDatabaseKeyID);
            }

            if (this.action == 'update') {
                this.activityData = this.activityConfig.activityData;
                this.fuelUnitList = fuelUnitList.filter(fuel => fuel.emissionFactorSource.keyID == this.activityData.emissionFactorDatabase.keyID);
                this.patchData();
            }

            // ngx mat select search
            this.fuelTypeSearchUtil.entityArr = this.fuelUnitList;
            this.fuelTypeSearchUtil.createSubscription();
        },
            error => {
                console.error('error in getUnitList -', error);
            });
    }

    getTechnology(fuelID, formGroup) {
        this.technologyList = [];
        if (this.emissionFactorDatabaseKeyID == EMISSION_FACTOR_SOUREC_KEYID_ENUM.IPCC_GUIDELINES_FOR_NATIONAL_GREENHOUSE_GAS_INVENTORIES) {
            let fuel = this.fuelUnitList.find(fuel => fuel.fuelSourceID == fuelID);
            if (fuel) {
                this.technologyList = cloneDeep(fuel.technologies);

                if (this.technologyList != null) {
                    let metric = {
                        id: null,
                        name: 'None',
                        keyID: 'none'
                    }
                    this.technologyList.unshift(metric);

                    if (fuelID == 12) {
                        this.technologyList.shift();
                    }

                    if (formGroup != null) {
                        if (fuelID == 12) {
                            formGroup.get('technologyID').addValidators([Validators.required]);
                        } else {
                            formGroup.get('technologyID').patchValue(null);
                            formGroup.get('technologyID').clearValidators();
                        }
                        formGroup.get('technologyID').updateValueAndValidity();
                    }

                    // ngx mat select search
                    this.technologySearchUtil.entityArr = this.technologyList;
                    this.technologySearchUtil.createSubscription();
                }
            }
        }

        this.fuelSelected(fuelID, formGroup);

    }

    fuelSelected(fuelID, formGroup) {
        if (this.emissionFactorDatabaseKeyID == EMISSION_FACTOR_SOUREC_KEYID_ENUM.IPCC_GUIDELINES_FOR_NATIONAL_GREENHOUSE_GAS_INVENTORIES) {
            let fuel = this.fuelUnitList.find(fuel => fuel.fuelSourceID == fuelID);

            if (fuel['isNcvEnabled']) {
                this.unitIDList = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.VOLUME, UnitTypeKeyID.MASS]);
            } else {
                this.unitIDList = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.VOLUME]);
            }

            if (formGroup != null) {
                if (fuel['isNcvEnabled']) {
                    formGroup.get('ncv').patchValue(fuel.ncv.value);
                    formGroup.get('ncvNumeratorUnitID').patchValue(fuel.ncv.numeratorUnit.id);
                    formGroup.get('ncvNumeratorUomCode').patchValue(fuel.ncv.numeratorUnit.uomCode);
                    formGroup.get('ncvDenominatorUnitID').patchValue(fuel.ncv.denominatorUnit.id);
                    formGroup.get('ncvDenominatorUomCode').patchValue(fuel.ncv.denominatorUnit.uomCode);
                    this.showNcvErrorFlag = false;
                }
                else {
                    formGroup.get('ncv').reset(null);
                    formGroup.get('ncvNumeratorUnitID').reset(null);
                    formGroup.get('ncvNumeratorUomCode').reset(null);
                    formGroup.get('ncvDenominatorUnitID').reset(null);
                    formGroup.get('ncvDenominatorUomCode').reset(null);
                    this.showNcvErrorFlag = true;
                }
                formGroup.get('ncv').addValidators([Validators.required, Validators.min(0)]);
                formGroup.get('ncvNumeratorUnitID').addValidators([Validators.required]);
                formGroup.get('ncvDenominatorUnitID').addValidators([Validators.required]);

                formGroup.updateValueAndValidity();

            }

            const isIPCCGuidelines = this.emissionFactorDatabaseKeyID === EMISSION_FACTOR_SOUREC_KEYID_ENUM.IPCC_GUIDELINES_FOR_NATIONAL_GREENHOUSE_GAS_INVENTORIES;
            const isLiquidOrGas = fuel && (fuel['stateOfMatterKeyID'] === FuelMatterStateKeyIDEnum.LIQUID || fuel['stateOfMatterKeyID'] === FuelMatterStateKeyIDEnum.GAS);

            if (isIPCCGuidelines && isLiquidOrGas) {
                this.densityFlag = true;
                if (formGroup != null) {
                    this.addDensityValidators(formGroup);
                }
            } else {
                this.densityFlag = false;
                if (formGroup != null) {
                    this.clearDensityValidators(formGroup);
                }
            }

            if (formGroup != null) {
                this.updateDensityValidators(formGroup);
            }
        }
    }

    addDensityValidators(formGroup) {
        formGroup.get('density').addValidators([Validators.required]);
        formGroup.get('densityNumeratorUnitID').addValidators([Validators.required]);
        formGroup.get('densityDenominatorUnitID').addValidators([Validators.required]);
    }

    clearDensityValidators(formGroup) {
        formGroup.get('density').clearValidators();
        formGroup.get('densityNumeratorUnitID').clearValidators();
        formGroup.get('densityDenominatorUnitID').clearValidators();
    }

    updateDensityValidators(formGroup) {
        formGroup.get('density').updateValueAndValidity();
        formGroup.get('densityNumeratorUnitID').updateValueAndValidity();
        formGroup.get('densityDenominatorUnitID').updateValueAndValidity();
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
            this.carbonDocumentController.createDocument(this.currentOrgID, formGroup.get('activityDataID').value, ActivityKeyIDEnum.MOBILE_COMBUSTION,
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

    editHhvValue(index: any) {
        const dialogRef = this.dialog.open(HhvCreateUpdateDialog,
            {
                data: {
                    energyUnits: this.energyUnitList,
                    massVolumeUnits: this.unitIDList,
                    hhv: {
                        hhv: this.activityDataDetailsFA.controls[index].get('ncv').value,
                        hhvNumeratorUnitID: this.activityDataDetailsFA.controls[index].get('ncvNumeratorUnitID').value,
                        hhvNumeratorUomCode: this.activityDataDetailsFA.controls[index].get('ncvNumeratorUomCode').value,
                        hhvDenominatorUnitID: this.activityDataDetailsFA.controls[index].get('ncvDenominatorUnitID').value,
                        hhvDenominatorUomCode: this.activityDataDetailsFA.controls[index].get('ncvDenominatorUomCode').value
                    }
                },
                minWidth: '600px',
                maxWidth: '600px',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });

        dialogRef.afterClosed().subscribe((res: any) => {
            if (res instanceof Object) {
                let hhv = res['hhv'];
                this.activityDataDetailsFA.controls[index].patchValue({
                    ncv: hhv.hhv,
                    ncvNumeratorUnitID: hhv.hhvNumeratorUnitID,
                    ncvNumeratorUomCode: hhv.hhvNumeratorUomCode,
                    ncvDenominatorUnitID: hhv.hhvDenominatorUnitID,
                    ncvDenominatorUomCode: hhv.hhvDenominatorUomCode,
                });
                this.showNcvErrorFlag = false;

                this.getNcvValue(index);
                this.getNcvNumerator(index);
                this.getNcvDenominator(index);
            }
        });
    }

}
