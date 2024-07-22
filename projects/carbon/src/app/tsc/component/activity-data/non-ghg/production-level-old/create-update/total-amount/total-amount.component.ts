import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, SimpleChange, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { isEqual } from "lodash";

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import { CarbonDocumentController } from '@carbon/controller/document.controller';
import { ProcessService } from '@carbon/service/process.service';

//tsc-library
import { StorageService } from '@library/storage-service';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
import { ToastrService } from '@library/toastr-service';
import { DateFormatEnum, DateInputTypeEnum, DateService, DateInputComponent } from '@library/date';
import { FormErrorEnum, MaterialFormFieldAppearance, NocFileUploadEnum, TypeConfirmationDialog } from '@library/tsc-common';
import { Subscription } from 'rxjs';
// /tsc-library/

@Component({
    selector: 'app-total-amount',
    templateUrl: './total-amount.component.html',
    styles: [
    ]
})
export class TotalAmountComponent implements OnInit {

    currentOrgID: any;
    action: any;
    activityID: any;
    activityData: any;

    currentFormArr: FormArray;
    filled: boolean = false;
    submit: boolean = false;

    sourceName: string = null;
    isSource: boolean = false;
    dataSource: any = [];

    billFile: File = null;
    billFileName: string;
    noBillFileAvailable: boolean = true;
    file: any;

    isEqual: boolean = true;
    initialObject: any;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    formErrorEnum = FormErrorEnum;
    dateInputTypeEnum = DateInputTypeEnum;
    DateFomratEnum = DateFormatEnum;

    allUnit: any;

    startDate: string;
    endDate: string;
    allProcess: any;
    activityKeyID: any;
    ActivityKeyIDEnum = ActivityKeyIDEnum;

    @Input() activityDataFG: FormGroup;
    @Input() activityConfig: any;
    @Input() getAllSource: any[] = [];
    @Input() docFileList: File[];
    @Input() defaultDataCollectionMethodID: any;
    @Input() entity: any;
    @Input() sourceTypeID: any;

    @Output() formGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
    @Output() docUploadChange: EventEmitter<any> = new EventEmitter<any>();

    fileInputArr: ElementRef[];
    @ViewChildren('fileInput') fileInput: QueryList<ElementRef>;
    @ViewChildren(DateInputComponent) customDateInputs: QueryList<DateInputComponent>;

    @Output('validFields') private _valid_fields = new EventEmitter<string[]>();


    valid_fields = [
        'productProduced',
        'productProducedUnitID',
        'startDate',
        'endDate',
    ];

    constructor(
        private dialog: MatDialog,
        private carbonDocumentController: CarbonDocumentController,
        private processService: ProcessService,
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

    ngOnChanges(changes: SimpleChanges) {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.queryParams.subscribe((queryParam) => {
            this.action = queryParam.action;
            this.activityID = queryParam.activityID;
            this.activityKeyID = this.activatedRoute.snapshot.data.activityKeyID;
        });

        if (changes?.defaultDataCollectionMethodID) {
            if (this.defaultDataCollectionMethodID != undefined || this.defaultDataCollectionMethodID != null)
                this.setDataCollectionMethod();
        }

        this.getConfiguration(this.activityConfig);

        if (this.activityKeyID === ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT || this.activityKeyID === ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT) {
            this.valid_fields.push('productExported');
            this.valid_fields.push('productExportedUnitID');
        }

        console.log('valid details', this.valid_fields)
        this._valid_fields.emit(this.valid_fields);
    }
    getLabelText(activityKeyID: any): string {
        switch (activityKeyID) {
            case ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT:
                return 'Quantity of total intermediate product produce in this process';
            case ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL:
                return 'Quantity of total product produced at production level';
            case ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT:
                return 'Quantity of precursor produced in this process';
            case ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION:
                return 'Quantity of precursor consumed';
            default:
                return '';
        }
    }

    getLabelOnExport(activityKeyID: any): string {
        switch (activityKeyID) {
            case ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT:
                return 'Quantity of total intermediate product exported out of this process';
            case ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT:
                return 'Quantity of precursor exported out of this process';
            default:
                return '';
        }
    }

    isExportActivity() {
        if (this.activityKeyID === ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT || this.activityKeyID === ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT) {
            return true;
        } else {
            return false;
        }
    }

    setDataCollectionMethod() {
        this.activityDataFA.controls.forEach(group => {
            group.get('dataCollectionMethodID').patchValue(this.defaultDataCollectionMethodID);
        })
    }

    dateInputSub: Subscription;
    fileInputLoadSub: Subscription;
    ngAfterViewInit() {
        this.fileInputLoadSub = this.fileInput.changes.subscribe(() => this.updateFileInputArray());
        this.updateFileInputArray();

        if (this.action == 'update') {
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

    patchDate() {
        const customDateInputInstance = this.customDateInputs.toArray()[0];
        if (customDateInputInstance) {
            customDateInputInstance.daterange.patchValue({ startDate: moment(this.activityData['startDate']), endDate: moment(this.activityData['endDate']) });
        }
    }

    dateInpChange(index) {
        if (this.customDateInputs) {
            const customDateInputInstance = this.customDateInputs.toArray()[index];
            let startDate = customDateInputInstance.startDateFC.value;
            let endDate = customDateInputInstance.endDateFC.value;

            if (startDate) {
                this.startDate = this.dateService.formatDate(startDate, DateFormatEnum.YYYY_MM_DD);
                this.activityDataFA.controls[index].get('startDate').patchValue(this.startDate);
            }

            if (endDate) {
                this.endDate = this.dateService.formatDate(endDate, DateFormatEnum.YYYY_MM_DD);
                this.activityDataFA.controls[index].get('endDate').patchValue(this.endDate);
            }
        }
    }

    get activityDataFA(): FormArray {
        return this.activityDataFG.get('activityDataDetails') as FormArray;
    }

    initFormControl(sourceID) {
        this.activityDataFA.push(
            this.formBuilder.group({
                activityDataID: [],
                sourceTypeID: this.sourceTypeID,
                sourceID: sourceID.id,
                startDate: [],
                endDate: [],
                productProduced: [],
                productProducedUnitID: [],
                activityID: this.activityID,
                dataCollectionMethodID: this.defaultDataCollectionMethodID,
                productExported: [],
                productExportedUnitID: [],
                docID: [],
                docType: [],
                docName: [],
                docSize: [],
                docPath: []
            })
        );
    }

    async getConfiguration(configuration) {

        if (this.action == 'create') {
            this.entity.forEach((res: any) => {
                this.isSource = true;
                this.dataSource.push({
                    id: res,
                })
            })
            this.addFormControls();
        } else {
            this.docFileList = new Array(1).fill(null);
        }
    }

    async getProcess(processID: number) {
        let process = await this.processService.getProcessByID(this.currentOrgID, processID, true);
        return process;
    }

    addFormControls() {
        if (this.isSource) {
            this.dataSource.forEach((ds) => {
                this.initFormControl(ds.id);
            })
        } else {
            this.initFormControl(null);
        }

    }

    async getUnit() {
        this.allUnit = await this.unitService.getUnit([`type:${UnitTypeKeyID.MASS}`]);
    }

    getProductName(row) {
        let ans;
        if (row) {
            let allSources = this.allProcess.output[0].entities;
            const ans = allSources.find(res => res.id === row.id);
        }
        if (ans) {
            return ans.name;
        }
    }

    patchActivityData() {
        this.activityData = this.activityConfig.activityData;
        let source = this.activityConfig.source;
        this.sourceName = source.source.name;
        this.sourceTypeID = this.activityConfig.source.sourceType.id;
        let sourceID = source.source.id;
        this.activityDataFA.push(
            this.formBuilder.group({
                activityDataID: this.activityData.id,
                recordID: this.activityData.recordID,
                sourceTypeID: this.sourceTypeID,
                sourceTypeName: this.sourceName,
                sourceID: sourceID,
                startDate: this.activityData.startDate,
                endDate: this.activityData.endDate,
                productProduced: this.activityData.productProduced,
                productProducedUnitID: this.activityData.productProducedUnitID,
                openingMeterReading: this.activityData.openingMeterReading,
                closingMeterReading: this.activityData.closingMeterReading,
                activityID: this.activityID,
                productExported: this.activityData.productExported,
                productExportedUnitID: this.activityData.productExportedUnitID,
                meterRolloverUnitID: this.activityData.meterUnitID,
                docID: [this.activityData.file ? this.activityData.file.id : null],
                docName: [this.activityData.file ? this.activityData.file.name : null],
                docPath: [this.activityData.file ? this.activityData.file.path : null],
                docSize: []
            })
        );

        this.dataSource.push({
            id: this.activityData.source
        })

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

            this.docFileList[index] = this.billFile;

            if (this.action == 'update') {
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

    errorHandlingForFormArrayData = (control: string, error: string, index: number): boolean => {
        const activityConfigDetailsFA = this.activityDataFG.get('activityDataDetails') as FormArray;
        const formGroup = activityConfigDetailsFA.at(index) as FormGroup;
        return formGroup.get(control).hasError(error);
    }
}