import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { isEqual } from "lodash";
import { Subscription } from 'rxjs';
import * as moment from 'moment-timezone';

import { MatDialog } from '@angular/material/dialog';

import { CurrencyM } from '@carbon/model/currency.model';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { ActivityData } from '@carbon/component/activity-data/activity-data';
import { DataCollectionMethodKeyIDEnum } from '@carbon/enum/data-collection-method.enum';

import { CurrencyService } from '@carbon/service/currency.service';
import { CarbonDocumentController } from '@carbon/controller/document.controller';
import { DataCollectionMethodService } from '@carbon/service/data-collection-method.service';

/* tsc-library */
import { DateService } from '@library/date';
import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
import {
    CountryM,
    CountryService,
    MatSelectSearchService,
    NocFileUploadEnum,
    TSCCommonService,
    TypeConfirmationDialog
} from '@library/tsc-common';
/* tsc-library */

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styleUrls: ['./create-update.component.scss']
})
export class CarbonPriceActivityDataCreateUpdateComponent extends ActivityData implements OnInit {

    action: string = 'create';
    currentOrgID: any;

    activityDataFG: FormGroup;
    docFileList: any[] = [];

    countryM: CountryM[] = [];
    countryFiltered: MatSelectSearchService = new MatSelectSearchService(['countryName']);

    units: any;
    unitFiltered: MatSelectSearchService = new MatSelectSearchService(['name']);

    currencyList: CurrencyM[] = [];
    currencyTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['currencyName']);

    fileInputArr: Array<ElementRef>;
    @ViewChildren('fileInput') fileInput: QueryList<ElementRef>;

    custom_date_input_loaded: boolean = false;
    @ViewChildren('customDateInput') customDateInputs: QueryList<any>;

    activityID
    activityKeyID

    currencySign = null;
    activityConfig: any;

    isEqual: boolean = false;
    isUpdate: boolean = false;
    initialObject: any;

    isSourceAvailable: boolean = false;
    haveMultipleSource: boolean = false;

    dateInputSub: Subscription;
    fileInputLoadSub: Subscription;

    constructor(
        private dialog: MatDialog,
        private formBuilder: FormBuilder,
        private unitService: UnitService,
        private countryService: CountryService,
        private currencyService: CurrencyService,
        private toastrService: ToastrService,
        private dateService: DateService,
        private dataCollectionMethodService: DataCollectionMethodService,
        private carbonDocumentController: CarbonDocumentController,
        private tscCommonService: TSCCommonService,
        tSCCommonService: TSCCommonService,
        activatedRoute: ActivatedRoute,
        storageService: StorageService,
    ) {
        super(tSCCommonService);

        this.initComponent(storageService, activatedRoute);
    }

    initComponent(storageService: StorageService, activatedRoute: ActivatedRoute) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
        this.activityKeyID = activatedRoute.snapshot.data.activityKeyID;

        activatedRoute.queryParams.subscribe(qParams => {
            this.action = qParams['action'];
            this.isUpdate = (this.action == 'update');
            this.activityID = Number(qParams['activityID']);
        });
    }

    ngOnInit(): void {
        this.initFormControl();
        this.getDataCollectionMethod();
        this.getCountry();
        this.getUnit();
        this.getCurrency();
    }

    ngAfterViewInit() {
        this.fileInputLoadSub = this.fileInput.changes.subscribe(() => this.updateFileInputArray());
        this.updateFileInputArray();

        this.dateInputSub = this.customDateInputs.changes.subscribe((list: QueryList<any>) => {
            if (list.length > 0) {
                this.custom_date_input_loaded = true;
                if (this.isUpdate) {
                    this.patchDate();
                }
                this.dateInputSub.unsubscribe();
            }
        });
    }

    private updateFileInputArray() {
        if (this.fileInput && this.fileInput.length > 0) {
            this.fileInputArr = this.fileInput.toArray();
        }
    }

    async getCountry() {
        this.countryM = <CountryM[]>await this.countryService.getCountry();
        this.countryFiltered.entityArr = this.countryM;
        this.countryFiltered.createSubscription();
    }

    async getCurrency() {
        this.currencyList = <CurrencyM[]>await this.currencyService.getCurrency();
        this.currencyTypeSearchUtil.entityArr = this.currencyList;
        this.currencyTypeSearchUtil.createSubscription();
    }

    initFormControl() {
        this.activityDataFG = this.formBuilder.group({
            activityData: this.formBuilder.array([])
        });

        this.initFormValidation();
    }

    defaultDataCollectionMethodID: number;
    async getDataCollectionMethod() {
        let dataCollectionMethods = await this.dataCollectionMethodService.getDataCollectionMethod()

        let manual_entry = this.tscCommonService.getUniqueObject(dataCollectionMethods, 'keyID', DataCollectionMethodKeyIDEnum.MANUAL_ENTRY);
        this.defaultDataCollectionMethodID = manual_entry.dataCollectionMethodID;

        this.setDataCollectionMethod();
    }

    setDataCollectionMethod() {
        this.activityDataFA.controls.forEach(group => {
            group.get('dataCollectionMethodID').patchValue(this.defaultDataCollectionMethodID);
        });
    }

    get dataFG(): FormGroup {
        return this.formBuilder.group({
            activityID: [this.activityID],
            activityKeyID: [this.activityKeyID],
            dataCollectionMethodID: [this.defaultDataCollectionMethodID],
            recordID: [],
            activityDataID: [],
            startDate: [, this.haveMultipleSource ? null : [Validators.required]],
            endDate: [, this.haveMultipleSource ? null : [Validators.required]],
            sourceID: [, this.haveMultipleSource ? null : [Validators.required]],
            sourceName: [],
            sourceTypeID: [, this.haveMultipleSource ? null : [Validators.required]],
            currencyID: [],
            dueCarbonPriceEmission: [],
            dueCarbonPriceEmissionUnitID: [],
            dueCarbonPriceValue: [],
            rebate: [, this.haveMultipleSource ? [Validators.min(0)] : [Validators.required, Validators.min(0)]],
            docID: [],
            docName: [],
            docPath: [],
            docSize: []
        });
    }

    get activityDataFA(): FormArray {
        return this.activityDataFG.get('activityData') as FormArray;
    }

    getConfiguration(configuration: any) {
        if (configuration != null) {
            this.activityConfig = configuration;

            if (!this.isUpdate) {
                const activityConfigSource = configuration.activityConfigSource;
                if (activityConfigSource.length > 0) {
                    this.isSourceAvailable = true;
                    this.docFileList = new Array(activityConfigSource[0].source.length).fill(null);

                    this.addActivityDataFG()
                }
            } else {
                this.docFileList = new Array(1).fill(null);
                this.activityData = this.activityConfig.activityData;
                this.isSourceAvailable = (this.activityData.source != null);
                this.patchActivityData();
            }
        }
    }

    private readonly excluded_controls: string[] = [
        'recordID',
        'sourceID',
        'sourceName',
        'sourceTypeID',
        'activityID',
        'activityDataID',
        'activityKeyID',
        'dataCollectionMethodID',
        'docID',
        'docName',
        'docPath',
        'docSize'
    ];

    private readonly valid_fields: string[] = [
        'startDate',
        'endDate',
        'currencyID',
        'dueCarbonPriceEmission',
        'dueCarbonPriceEmissionUnitID',
        'dueCarbonPriceValue',
        'rebate',
        'docName',
        'docSize'
    ];

    haveValue(formGroup: FormGroup, index = undefined) {
        for (let control of this.valid_fields) {
            let value = formGroup.get(control).value;
            if (value ?? false) {
                if (index != undefined && this.custom_date_input_loaded) {
                    this.customDateInputs.toArray()[index].daterange.markAsTouched();
                }
                return true;
            }
        }
        return false;
    }

    isAnyRowFilled(): boolean {
        for (let i = 0; i < this.activityDataFA.controls.length; ++i) {
            let formGroup = this.activityDataFA.get(`${i}`) as FormGroup;
            if (this.haveValue(formGroup, i)) return true;
        }

        return false;
    }

    initFormValidation() {
        this.activityDataFA.valueChanges.subscribe(() => {
            this.activityDataFA.controls.forEach((formGroup: FormGroup, index: number) => {
                if (this.haveValue(formGroup, index)) this.addValidationToGroup(formGroup);
                else if (this.haveMultipleSource) this.removeValidationFromGroup(formGroup, index);
            })
        });
    }

    addValidationToGroup(formGroup: FormGroup) {
        for (let control in formGroup.controls) {
            if (!this.excluded_controls.includes(control)) {
                formGroup.get(control).addValidators([Validators.required]);
                formGroup.get(control).updateValueAndValidity({ emitEvent: false });
            }
        }
    }

    removeValidationFromGroup(formGroup: FormGroup, index) {
        if (this.custom_date_input_loaded) {
            this.customDateInputs.toArray()[index].daterange.markAsUntouched();
        }

        for (let control in formGroup.controls) {
            if (!this.excluded_controls.includes(control)) {
                formGroup.get(control).reset(null, { emitEvent: false });
                formGroup.get(control).removeValidators([Validators.required]);
                formGroup.get(control).updateValueAndValidity({ emitEvent: false });
            }
        }
    }

    addActivityDataFG() {
        const activityConfigSource = this.activityConfig.activityConfigSource[0];

        let sources: any[] = activityConfigSource.source;
        this.haveMultipleSource = sources.length > 1;

        sources.forEach((source) => {
            let formGroup: FormGroup = this.dataFG;

            formGroup.get('sourceID').patchValue(source.id)
            formGroup.get('sourceName').patchValue(source.name);
            formGroup.get('sourceTypeID').patchValue(activityConfigSource.sourceTypeID);

            this.activityDataFA.push(formGroup);
        });
    }

    patchActivityData() {
        let formGroup = this.dataFG;
        this.activityDataFA.push(formGroup);

        const activity_data = this.activityData;

        const source = activity_data.source;
        const sourceType = activity_data.sourceType;
        const dataCollectionMethodStd = activity_data.dataCollectionMethodStd;

        formGroup.patchValue({
            activityDataID: activity_data.id,
            dataCollectionMethodID: dataCollectionMethodStd.id,
            sourceID: this.isSourceAvailable ? source.id : null,
            sourceName: this.isSourceAvailable ? source.name : null,
            sourceTypeID: this.isSourceAvailable ? sourceType.id : null,
            startDate: activity_data.startDate,
            currencyID: activity_data.currencyID,
            dueCarbonPriceEmission: activity_data.dueCarbonPriceEmission,
            dueCarbonPriceEmissionUnitID: activity_data.dueCarbonEmissionUnitID,
            dueCarbonPriceValue: activity_data.dueCarbonPriceValue,
            rebate: activity_data.rebate,
        });

        if (activity_data.file != null) {
            formGroup.patchValue({
                docID: activity_data.file.id,
                docName: activity_data.file.name,
                docPath: activity_data.file.path,
            });
        }

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

    async getUnit() {
        this.units = await this.unitService.getUnit([`type:${UnitTypeKeyID.EQUIVALENT_EMISSION}`]);
        this.unitFiltered.entityArr = this.units;
        this.unitFiltered.createSubscription();
    }

    dateInpChange(index) {
        if (this.custom_date_input_loaded) {
            const customDateInputInstance = this.customDateInputs.toArray()[index];
            if (customDateInputInstance) {
                let startDate = customDateInputInstance.startDateFC.value;
                let endDate = customDateInputInstance.endDateFC.value;

                if (startDate) {
                    const _formatted_startDate = this.dateService.formatDate(startDate, this.DateFormatEnum.YYYY_MM_DD);
                    this.activityDataFA.controls[index].get('startDate').patchValue(_formatted_startDate);
                }

                if (endDate) {
                    const _formatted_endDate = this.dateService.formatDate(endDate, this.DateFormatEnum.YYYY_MM_DD);
                    this.activityDataFA.controls[index].get('endDate').patchValue(_formatted_endDate);
                }
            }
        }
    }

    fileUpload(event, index) {
        let file = event.target.files[0];

        if (file) {
            if (file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                this.toastrService.error("Invalid file type! Please upload file types: .xlxs");
                return;
            }

            if (file.size > NocFileUploadEnum.MAX_FILE_SIZE) {
                this.toastrService.error(NocFileUploadEnum.INVAID_FILE_SIZE_ERROR);
                return;
            }

            this.docFileList[index] = file;
            const formGroup: FormGroup = this.activityDataFA.get(`${index}`) as AbstractControl as FormGroup;
            formGroup.patchValue({
                docName: file['name'],
                docSize: this.getFileSizeWithUnit(file['size'])
            });
            if (this.action == 'update') {
                this.fileCreateUpdate(formGroup);
            }
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

    removeFile(index: string) {
        const group = this.activityDataFA.get(`${index}`);
        group.get('docName').reset(null);
        group.get('docSize').reset(null);
        group.get('docPath').reset(null);
        group.get('docID').reset(null);

        this.docFileList[index] = null;

        if (this.fileInputArr[index]) {
            this.fileInputArr[index].nativeElement.value = null;
        }
    }

    isValidForm(): boolean {
        if (this.haveMultipleSource) {
            let isAnyRowFilled: boolean = this.isAnyRowFilled();
            if (!isAnyRowFilled) {
                this.toastrService.error('Fill atleast one data row!');
                return false;
            }
        }

        if (this.activityDataFG.invalid) {
            console.error('invalid form -', this.activityDataFG);
            this.activityDataFG.markAllAsTouched();
            return false;
        }

        this.activityData = {};
        this.activityData = JSON.parse(JSON.stringify(this.getDataWithValue()));

        return true;
    }

    getActivityData() {
        return {
            'activityData': JSON.parse(JSON.stringify(this.getDataWithValue())),
            'activityDataFile': this.docFileList
        }
    }

    updateActivityData() {
        return this.activityData[0];
    }

    getDataWithValue() {
        let dataArr = [];
        this.activityDataFA.controls.forEach((formGroup: FormGroup) => {
            if (this.haveValue(formGroup)) dataArr.push(formGroup.value);
        });
        return dataArr;
    }

    toFormData(): FormData {
        const formData = new FormData();
        formData.append('payload', this.docFileList[0]);
        return formData;
    }

    fileCreateUpdate(formGroup: FormGroup) {
        if (formGroup.get('docID').value == null) {
            this.carbonDocumentController.createDocument(this.currentOrgID, formGroup.get('activityDataID').value, ActivityKeyIDEnum.CARBON_PRICING,
                this.toFormData()).subscribe((response) => {
                    let file = response['response'];
                    this.updateFileFormControl(formGroup, file);
                }, error => {
                    console.log("error in fileCreate -", error);
                });
        } else {
            this.carbonDocumentController.updateDocument(this.currentOrgID, formGroup.get('docID').value, this.toFormData())
                .subscribe((response) => {
                    let file = response['response'];
                    this.updateFileFormControl(formGroup, file);
                }, error => {
                    console.log("error in fileUpdate -", error);
                });
        }
    }

    updateFileFormControl(formGroup: FormGroup, file: any) {
        formGroup.get('docID').patchValue(file.id);
        formGroup.get('docName').patchValue(file.name);
        formGroup.get('docPath').patchValue(file.path);
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
                this.deleteDocument(formGroup.get('docID').value, index);
            } else {
                dialogRef.close()
            }
        });
    }

    deleteDocument(docID, index) {
        this.carbonDocumentController.deleteDocument(this.currentOrgID, docID).subscribe(res => {
            this.removeFile(index);
        }, error => {
            console.log("error in deleteDocument -", error);
        });
    }

    public errorHandlingFA = (formGroup: FormGroup, control: string, error: string) => {
        return formGroup.get(control).hasError(error);
    }

}
