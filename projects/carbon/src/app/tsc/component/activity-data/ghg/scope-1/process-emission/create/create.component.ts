import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import * as moment from 'moment-timezone';

import { DataCollectionMethodKeyIDEnum } from '@carbon/enum/data-collection-method.enum';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import { CarbonDocumentController } from '@carbon/controller/document.controller';

import { ActivityService } from '@carbon/service/activity.service';
import { DataCollectionMethodService } from '@carbon/service/data-collection-method.service';

// tsc-library
import { COMMON_CONSTANT, FormAction, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance, TSCCommonService, NocFileUploadEnum, TypeConfirmationDialog } from "@library/tsc-common";
import { DateInputComponent, DateService, DateFormatEnum, DateInputTypeEnum } from '@library/date';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
// /tsc-library

@Component({
    selector: 'app-process-emission-activity-data-create',
    templateUrl: './create.component.html',
    styles: [
    ]
})

export class ProcessEmissionActivityDataCreateComponent implements OnInit {
    constructor(
        activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        private formBuilder: FormBuilder,

        private carbonDocumentController: CarbonDocumentController,

        private dataCollectionMethodService: DataCollectionMethodService,
        private activityService: ActivityService,

        private tSCCommonService: TSCCommonService,
        private dateService: DateService,
        private unitService: UnitService,
        private toastrService: ToastrService,
        storageService: StorageService,
    ) {

        this.currentOrgID = storageService.getStorage('currentOrgID');

        activatedRoute.queryParams.subscribe(qParams => {
            this.activityID = Number(qParams['activityID']);
        });

        activatedRoute.params.subscribe(params => {
            this.activityDataID = Number(params['id']);
        });

        this.activityKeyID = activatedRoute.snapshot.data.activityKeyID;
        this.action = activatedRoute.snapshot.data.action;
        this.isUpdate = (this.action === FormAction.UPDATE);
    }

    COMMON_CONSTANT = COMMON_CONSTANT;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    FormErrorEnum = FormErrorEnum;
    DateInputTypeEnum = DateInputTypeEnum;
    DateFormatEnum = DateFormatEnum;
    inputFieldlabel: string = 'Amount';
    FormAction: typeof FormAction = FormAction;

    currentOrgID: any;

    activityKeyID: ActivityKeyIDEnum;
    action: FormAction;
    manualDataCollectionMethodID: number;
    activityID: number;
    activityDataID: number;
    activityData: any;
    docFileList: any = new Array(1).fill(null);
    docFile: File = null;
    docFileName: string;
    noDocFileAvailable: boolean = true;
    // docFileList: any = null;
    file: any;
    initialObject: any;
    isEqual: EventEmitter<boolean> = new EventEmitter();
    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    activityDataFG: FormGroup;

    unit: UnitM[];
    unitSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);

    isUpdate: boolean = false;

    @ViewChild('customDateInput') customDateInputs: DateInputComponent;
    @ViewChild('fileInput') fileInput: ElementRef;

    ngOnInit(): void {
        this.formDataInit();
        this.getUnit([`type:${UnitTypeKeyID.MASS}`]);
        this.formActionHandler();
    }

    async getConfiguration(configuration) {
        let activityConfigData: any;

        if (configuration != null) {
            activityConfigData = configuration.activityConfigData;
            this.inputFieldlabel = activityConfigData.dataInputField;

            if (this.isUpdate) {
                this.patchActivityData(configuration);
            }
        }
    }

    patchActivityData(configuration) {
        let activityConfigData: any;
        let activityData: any;

        if (configuration != null) {
            activityConfigData = configuration.activityConfigData;
            activityData = configuration.activityData;

            this.activityDataFG.patchValue({
                activityDataID: activityData.id,
                amount: activityData.amount,
                amountUnitID: activityData.amountUnit.unitID,
                docID: activityData.file ? activityData.file.id : null,
                docName: activityData.file ? activityData.file.name : null,
                docPath: activityData.file ? activityData.file.path : null,
            });

            this.customDateInputs.daterange.patchValue({ startDate: moment(activityData.startDate), endDate: moment(activityData.endDate) });
        }
    }

    formActionHandler() {
        // if (this.action == FormAction.CREATE) {
        //     this.getAllDataCollectionMethod();
        //     this.getAllActivity();
        // } else if (this.action == FormAction.UPDATE) {

        // }
        this.getAllDataCollectionMethod();
        this.getAllActivity();
    }

    formDataInit() {
        this.activityDataFG = this.formBuilder.group({
            activityID: [this.activityID],
            activityDataID: [],
            startDate: [],
            endDate: [],
            dataCollectionMethodID: [this.manualDataCollectionMethodID],
            amount: [],
            amountUnitID: [],
            docID: [],
            docType: [],
            docName: [],
            docPath: [],
            docSize: [],
        });
    }

    async getUnit(filter) {
        this.unit = await this.unitService.getUnit(filter);

        this.unitSelectSearch.entityArr = this.unit;
        this.unitSelectSearch.createSubscription();
    }

    errorHandling = (formGroup: FormGroup, controlPath: string, error: string): boolean => {
        return formGroup.get(controlPath).hasError(error);
    }

    dateInpChange(formGroup: FormGroup) {
        if (this.customDateInputs) {
            let startDate;
            let endDate;

            startDate = this.customDateInputs.startDateFC.value;
            endDate = this.customDateInputs.endDateFC.value;

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

    getAllActivity() {
        let allActivity: any[] = [];

        this.activityService
            .getAllActivityNew()
            .then((res) => {
                allActivity = res;
                this.setActivityID(allActivity);
            })
            .catch((error) => {
                console.error('error in getAllActivity -', error);
            });
    }

    async getAllDataCollectionMethod() {
        let allDataCollectionMethod: any[] = [];
        allDataCollectionMethod = await this.dataCollectionMethodService.getDataCollectionMethod();
        this.setManualDataCollectionMethodID(allDataCollectionMethod);
    }

    setActivityID(allActivity) {
        let activtiy: any;
        let activityID: string;

        activtiy = this.tSCCommonService.getUniqueObject(allActivity, 'keyID', this.activityKeyID);
        activityID = activtiy.id;

        this.patchControl(this.activityDataFG, 'activityID', activityID);
    }

    setManualDataCollectionMethodID(allDataCollectionMethod) {
        let manualEntry: any;
        manualEntry = this.tSCCommonService.getUniqueObject(allDataCollectionMethod, 'keyID', DataCollectionMethodKeyIDEnum.MANUAL_ENTRY);
        this.manualDataCollectionMethodID = manualEntry.dataCollectionMethodID;

        this.patchControl(this.activityDataFG, 'dataCollectionMethodID', this.manualDataCollectionMethodID);
    }


    patchControl(formGroup: FormGroup, controlPath: string, value: any) {
        formGroup.get(controlPath).patchValue(value);
    }

    isValidForm(): boolean {
        if (this.activityDataFG.invalid) {
            console.error('invalid form -', this.activityDataFG);
            this.activityDataFG.markAllAsTouched();
            return false;
        }

        this.activityData = {};
        this.activityData = JSON.parse(JSON.stringify(this.activityDataFG.value));

        return true;
    }

    activityDataValidity() {
        this.activityDataFG.valueChanges.subscribe(() => this.validity.emit(!this.activityDataFG.invalid));
    }

    getActivityData() {
        return {
            'activityData': this.activityData,
            'activityDataFile': this.docFileList
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

            this.docFile = file;
            this.docFileName = file['name'];

            formGroup.get('docName').patchValue(file['name']);
            formGroup.get('docSize').patchValue(this.getFileSizeWithUnit(file['size']));

            this.docFileList[index] = this.docFile;

            if (this.action == FormAction.UPDATE) {
                this.fileCreateUpdate(formGroup);
            }
        }
        else {
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

        if (this.action == FormAction.CREATE) {
            this.fileInput.nativeElement.value = null;
        }

        this.docFile = null;
        this.docFileName = '';

        formGroup.get('docName').reset();
        formGroup.get('docSize').reset();
        formGroup.get('docPath').reset(null);
        formGroup.get('docID').reset();

        this.docFileList[index] = this.docFile;
    }

    toFormData(): FormData {
        const formData = new FormData();
        formData.append('payload', this.docFile);

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

    updateActivityData() {
        return this.activityData;
    }

}
