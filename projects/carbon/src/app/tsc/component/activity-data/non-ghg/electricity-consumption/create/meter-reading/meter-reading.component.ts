import { Component, ElementRef, Input, OnInit, QueryList, SimpleChanges, ViewChildren } from '@angular/core';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CarbonDocumentController } from '@carbon/controller/document.controller';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import * as moment from 'moment-timezone';
import { Subscription } from 'rxjs';

// tsc-library
import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
import { DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateService } from '@library/date';
import { COMMON_CONSTANT, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance, NocFileUploadEnum, TypeConfirmationDialog } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'electricity-consumption-meter-reading',
    templateUrl: './meter-reading.component.html',
    styles: [
    ]
})
export class ElectricityConsumptionMeterReadingComponent implements OnInit {
    FormErrorEnum = FormErrorEnum;
    DateFormatEnum = DateFormatEnum;
    DateInputTypeEnum = DateInputTypeEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    COMMON_CONSTANT = COMMON_CONSTANT;

    @Input() docFileList: File[];
    @Input() activityConfig: any;
    @Input() activityDataFG: FormGroup;
    @Input() defaultDataCollectionMethodID: number;

    currentOrgID: any;

    unit: any[] = [];

    action: string = null;
    isUpdate: boolean = false;

    activityID: number;
    activityKeyID: string;

    activityData: any;

    meterUnitID: number;

    billFile: File = null;
    billFileName: string;
    file: any;

    unitSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);
    meterUnitSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);

    @ViewChildren('fileInput') fileInput: QueryList<ElementRef>;
    fileInputArr: ElementRef[];
    @ViewChildren(DateInputComponent) customDateInputs: QueryList<DateInputComponent>;

    constructor(
        private dialog: MatDialog,
        private formBuilder: FormBuilder,
        private carbonDocumentController: CarbonDocumentController,
        // tsc-library
        private unitService: UnitService,
        private dateService: DateService,
        private toastrService: ToastrService,
        storageService: StorageService,
        // /tsc-library/
        activatedRoute: ActivatedRoute,
    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');

        activatedRoute.queryParams.subscribe(qParams => {
            this.action = qParams['action'];
            this.activityID = Number(qParams['activityID']);
        })
        this.activityKeyID = activatedRoute.snapshot.data.activityKeyID;
    }

    ngOnInit(): void {
        this.getUnit();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.activityDataFG.firstChange) {
            if (this.action == 'create')
                this.formDataInit();
        }

        if (changes.defaultDataCollectionMethodID ?? false) {
            this.setDataToControl('dataCollectionMethodID', this.defaultDataCollectionMethodID);
        }

        if (changes.activityConfig) {
            if (this.activityConfig != undefined && this.activityConfig != null) {
                const meterRollover = this.activityConfig.activityConfigData.meterRollover;
                this.meterUnitID = meterRollover.unit.unitID;

                this.setDataToControl('meterUnitID', this.meterUnitID);
            }
        }
    }

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

    setDataToControl(control, data) {
        this.activityDataFA.controls.forEach(group => group.get(control).patchValue(data));
    }

    get dataFG() {
        return this.formBuilder.group({
            activityDataID: [],
            activityID: [this.activityID, [Validators.required]],
            activityKeyID: [this.activityKeyID, [Validators.required]],
            startDate: [, [Validators.required]],
            endDate: [, [Validators.required]],
            dateRange: [],
            dataCollectionMethodID: [this.defaultDataCollectionMethodID, [Validators.required]],
            openingMeterReading: [, [Validators.required, Validators.min(0)]],
            closingMeterReading: [, [Validators.required, Validators.min(0)]],
            meterUnitID: [{value: this.meterUnitID, disabled: true}, [Validators.required]],
            docID: [],
            docName: [],
            docPath: [],
            docSize: [],
        });
    }

    patchActivityData() {
        let formGroup = this.dataFG;

        const activity_data = this.mapDataToPatch(this.activityData);
        const dataCollectionMethodStd = activity_data.dataCollectionMethodStd;
        const meterUnit = activity_data.meterUnit;

        formGroup.patchValue({
            activityDataID: activity_data.id,
            startDate: activity_data.startDate,
            endDate: activity_data.endDate,
            dateRange: activity_data.dateRange,
            dataCollectionMethodID: dataCollectionMethodStd.id,
            openingMeterReading: activity_data.openingMeterReading,
            closingMeterReading: activity_data.closingMeterReading,
            meterUnitID: meterUnit.unitID,
            docName: activity_data.docName,
            docSize: activity_data.docSize,
        });

        if (activity_data.file != null) {
            formGroup.patchValue({
                docID: activity_data.file.id,
                docName: activity_data.file.name,
                docPath: activity_data.file.path,
            });
        }

        this.activityDataFA.push(formGroup);
    }

    mapDataToPatch(oldData: { [key: string]: any }): { [key: string]: any } {
        if (this.activityKeyID == ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION) {

            let {
                electricityConsumed,
                electricityConsumedUnit,
                ...rest
            } = oldData; // Destructure the properties that need to be renamed

            return {
                energyConsumed: electricityConsumed,
                energyConsumedUnit: electricityConsumedUnit,
                ...rest, // Spread the rest of the properties back into the new object
            };
        } else {
            let {
                heatConsumed,
                heatConsumedUnit,
                ...rest
            } = oldData; // Destructure the properties that need to be renamed

            return {
                energyConsumed: heatConsumed,
                energyConsumedUnit: heatConsumedUnit,
                ...rest, // Spread the rest of the properties back into the new object
            };
        }
    }

    patchDate() {
        const customDateInputInstance = this.customDateInputs.toArray()[0];

        if (customDateInputInstance) {
            customDateInputInstance.daterange.patchValue({ startDate: moment(this.activityData['startDate']), endDate: moment(this.activityData['endDate']) });
        }
    }

    formDataInit() {
        this.activityDataFA.push(this.dataFG);
    }

    get activityDataFA(): FormArray {
        return this.activityDataFG.get('activityData') as FormArray;
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

    async getUnit() {
        this.unit = await this.unitService.getUnit([]);
        const energyUnits = this.unitService.filterUnit(this.unit, [UnitTypeKeyID.ENERGY]);

        this.unitSelectSearch.entityArr = energyUnits;
        this.unitSelectSearch.createSubscription();

        this.meterUnitSelectSearch.entityArr = energyUnits;
        this.meterUnitSelectSearch.createSubscription();
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

    errorHandlingFA = (formGroup: FormGroup, controlPath: string, error: string): boolean => {
        return formGroup.get(controlPath).hasError(error);
    }
}
