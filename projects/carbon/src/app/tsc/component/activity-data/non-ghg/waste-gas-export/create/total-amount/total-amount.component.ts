import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { isEqual } from "lodash";
import { Subscription } from 'rxjs';
import * as moment from 'moment-timezone';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import { CarbonDocumentController } from '@carbon/controller/document.controller';

// tsc-library
import { DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateService } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { COMMON_CONSTANT, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance, NocFileUploadEnum, TypeConfirmationDialog } from '@library/tsc-common';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
// / tsc-library

@Component({
    selector: 'app-total-amount',
    templateUrl: './total-amount.component.html',
    styles: [
    ]
})
export class TotalAmountComponent implements OnInit {

    @Input() activityConfig: any;
    @Input() activityDataFG: FormGroup;
    @Input() docFileList: File[];
    @Input() defaultDataCollectionMethodID: Number;

    @Output() formGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
    @Output() docUploadChange: EventEmitter<any> = new EventEmitter<any>();


    COMMON_CONSTANT = COMMON_CONSTANT;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    DateInputTypeEnum = DateInputTypeEnum;
    FormErrorEnum = FormErrorEnum;
    DateFormatEnum = DateFormatEnum;

    unitM: UnitM[];
    filterUnitM: UnitM[];
    unitSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);

    activityID: number;
    currentOrgID: any;
    activityData: any;
    activityStdKeyID: ActivityKeyIDEnum;
    action: any;

    billFile: File = null;
    billFileName: string;
    noBillFileAvailable: boolean = true;

    isEqual: boolean = true;
    initialObject: any;

    file: any;

    @ViewChildren('fileInput') fileInput: QueryList<ElementRef>;
    fileInputArr: ElementRef[];
    @ViewChildren('customDateInput') customDateInputs: QueryList<DateInputComponent>;

    constructor(
        private dialog: MatDialog,
        private formBuilder: FormBuilder,
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
        })
        this.activityStdKeyID = activatedRoute.snapshot.data.activityKeyID;
    }

    ngOnInit(): void {
        this.getUnit();
    }

    ngOnChanges(changes: SimpleChanges) {
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

    formDataInit() {
        this.activityDataFA.push(
            this.formBuilder.group({
                activityID: [this.activityID],
                activityKeyID: [this.activityStdKeyID],
                activityDataID: [],
                startDate: [, Validators.required],
                endDate: [, Validators.required],
                dataCollectionMethodID: [this.defaultDataCollectionMethodID],
                gasExported: [, [Validators.required,Validators.min(0)]],
                gasExportedUnitID: [, Validators.required],
                docID: [],
                docType: [],
                docName: [],
                docPath: [],
                docSize: [],
            }));
        this.formGroupChange.emit(this.activityDataFG);
    }

    get activityDataFA(): FormArray {
        return this.activityDataFG.get('activityData') as FormArray;
    }

    patchActivityData() {
        this.activityDataFA.push(
            this.formBuilder.group({
                activityID: [this.activityID],
                activityKeyID: [this.activityStdKeyID],
                activityDataID: [this.activityData.id],
                startDate: [this.activityData.startDate],
                endDate: [this.activityData.endDate],
                dataCollectionMethodID: [this.defaultDataCollectionMethodID],
                gasExported: [this.activityData.gasExported],
                gasExportedUnitID: [this.activityData.gasExportedUnit.unitID],
                docID: [this.activityData.file ? this.activityData.file.id : null],
                docName: [this.activityData.file ? this.activityData.file.name : null],
                docPath: [this.activityData.file ? this.activityData.file.path : null],
                docSize: []
            }));

        this.formGroupChange.emit(this.activityDataFG);
        this.activityDataFG.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.activityDataFG.value));

        this.initialObject = this.activityDataFG.value;
        this.isEqual = true;
        this.patchDate();
    }

    patchDate() {
        const customDateInputInstance = this.customDateInputs.toArray()[0];
        if (customDateInputInstance) {
            customDateInputInstance.daterange.patchValue({ startDate: moment(this.activityData['startDate']), endDate: moment(this.activityData['endDate']) });
        }
    }

    setDataCollectionMethod() {
        this.activityDataFA.controls.forEach(group => {
            group.get('dataCollectionMethodID').patchValue(this.defaultDataCollectionMethodID);
        })
    }

    async getUnit() {
        let unit: UnitM[] = await this.unitService.getUnit([]);
        this.unitM = this.unitService.filterUnit(unit, [UnitTypeKeyID.MASS, UnitTypeKeyID.VOLUME]);

        this.unitSelectSearch.entityArr = this.unitM;
        this.unitSelectSearch.createSubscription();
    }

    dateInpChange(formGroup: FormGroup, index) {
        if (this.customDateInputs) {
            const customDateInputInstance = this.customDateInputs.toArray()[index];
            let startDate;
            let endDate;
            if (customDateInputInstance) {
                startDate = customDateInputInstance.startDateFC.value;
                endDate = customDateInputInstance.endDateFC.value;
            }

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
            this.carbonDocumentController.createDocument(this.currentOrgID, formGroup.get('activityDataID').value, ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT,
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
                this.deleteDocument(formGroup.get('docID').value,formGroup, index);
            } else {
                dialogRef.close()
            }
        });
    }

    deleteDocument(docID,formGroup, index) {
        this.carbonDocumentController.deleteDocument(this.currentOrgID, docID).subscribe(res => {
            this.removeFile(formGroup, index);
        }, error => {
            console.log("error in deleteDocument -", error);
        });
    }

    errorHandlingFA = (formArray: FormArray, index: number, controlPath: string, error: string): boolean => {
        const formGroup = formArray.at(index) as FormGroup;
        return formGroup.get(controlPath).hasError(error);
    }

}
