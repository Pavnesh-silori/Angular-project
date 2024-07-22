import { Component, ElementRef, Input, OnInit, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { isEqual } from "lodash";
import * as moment from 'moment';
import { Subscription } from 'rxjs';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import { FuelController } from '@carbon/controller/fuel.controller';
import { CarbonDocumentController } from '@carbon/controller/document.controller';

import { CustomFuelService } from '@netzero/service/custom-fuel.service';
import { FuelService } from '@carbon/service/fuel.service';

//tsc-library
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
import { DateFormatEnum, DateInputTypeEnum, DateService } from '@library/date';
import {
    COMMON_CONSTANT,
    FormErrorEnum,
    MatSelectSearchService,
    MaterialFormFieldAppearance,
    NocFileUploadEnum,
    TypeConfirmationDialog
} from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'app-total-amount',
    templateUrl: './total-amount.component.html',
    styles: []
})
export class TotalAmountComponent implements OnInit {

    @Input() activityDataFG: FormGroup;
    @Input() defaultDataCollectionMethodID: any;
    @Input() docFileList: any[];
    @Input() activityConfig: any;

    currentOrgID: any;
    action: any;
    activityID: any;
    activityData: any;

    sourceName: string = null;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    formErrorEnum = FormErrorEnum;
    dateInputTypeEnum = DateInputTypeEnum;
    DateFormatEnum = DateFormatEnum;

    COMMON_CONSTANT = COMMON_CONSTANT;

    startDate: string;
    endDate: string;

    fuelUnitList: UnitM[] = [];
    fuelTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    allUnit: any;
    elctrictyUnit: any;
    heatUnit: any;

    showInfo: boolean = true;
    cbamFuelType: any;
    cbamFuelTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    billFile: File = null;
    billFileName: string;
    fileInputArr: ElementRef[];
    file: any;

    isEqual: boolean = true;
    initialObject: any;

    @ViewChildren('customDateInput') customDateInputs: QueryList<any>;
    @ViewChildren('fileInput') fileInput: QueryList<ElementRef>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
        private fuelController: FuelController,
        private carbonDocumentController: CarbonDocumentController,
        private customFuelService: CustomFuelService,
        private fuelService: FuelService,
        private toastrService: ToastrService,
        private dateService: DateService,
        private storageService: StorageService,
        private unitService: UnitService,
    ) { }

    ngOnInit() {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.getUnit();
        this.getChpFuelType();
        this.getFuel();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.activatedRoute.queryParams.subscribe((queryParam) => {
            this.action = queryParam.action;
            this.activityID = queryParam.activityID;
        });

        if (this.action == 'create') {
            this.sourceName = this.activityConfig.activityConfigSource[0].source[0].name;
            if (changes.activityDataFG.firstChange) {
                this.initFormControl();
            }

            if (changes?.defaultDataCollectionMethodID) {
                if (this.defaultDataCollectionMethodID != undefined || this.defaultDataCollectionMethodID != null)
                    this.setDataCollectionMethod();
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
            this.pathFormData();
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

    get activityDataFA(): FormArray {
        return this.activityDataFG.get('activityDataDetails') as FormArray;
    }

    initFormControl() {
        this.activityDataFA.push(
            this.formBuilder.group({
                recordID: [],
                sourceTypeID: [this.activityConfig.activityConfigSource[0].sourceTypeID, Validators.required],
                sourceID: [this.activityConfig.activityConfigSource[0].sourceID[0], Validators.required],
                startDate: [, Validators.required],
                endDate: [, Validators.required],
                fuelSourceID: [, Validators.required],
                standardFuelID: [],
                customFuelID: [],
                electricityGenerated: [, [Validators.required, Validators.min]],
                electricityUnitID: [, Validators.required],
                heatGenerated: [, [Validators.required, Validators.min]],
                heatUnitID: [, Validators.required],
                chpFuelID: [, Validators.required],
                dataCollectionMethodID: [this.defaultDataCollectionMethodID, Validators.required],
                activityID: [this.activityID, Validators.required],
                activityDataID: [],
                docID: [],
                docName: [],
                docPath: [],
                docSize: []
            })
        );
    }

    pathFormData() {
        let fuelSource;
        if (this.activityData.standardFuel?.id != null) {
            fuelSource = 'S' + this.activityData.standardFuel.id;
        } else if (this.activityData.customFuel?.id != null) {
            fuelSource = 'C' + this.activityData.customFuel.id;
        }

        this.activityDataFA.push(
            this.formBuilder.group({
                recordID: this.activityData.id,
                sourceTypeID: this.activityData.sourceType.id,
                sourceID: this.activityData.source.id,
                startDate: this.activityData.startDate,
                endDate: this.activityData.endDate,
                fuelSourceID: fuelSource,
                standardFuelID: this.activityData.standardFuel?.id,
                customFuelID: this.activityData.customFuel?.id,
                electricityGenerated: this.activityData.electricityGenerated,
                electricityUnitID: this.activityData.electricityUnit.unitID,
                heatGenerated: this.activityData.heatGenerated,
                heatUnitID: this.activityData.heatUnit.unitID,
                chpFuelID: this.activityData.chpFuel.id,
                dataCollectionMethodID: this.defaultDataCollectionMethodID,
                activityDataID: this.activityData.id,
                activityID: this.activityID,
                docID: this.activityData.file ? this.activityData.file.id : null,
                docName: this.activityData.file ? this.activityData.file.name : null,
                docPath: this.activityData.file ? this.activityData.file.path : null,
                docSize: []
            })
        );

        this.sourceName = this.activityData.source.name;
        this.activityDataFA.valueChanges.subscribe(() => this.isEqual = isEqual(this.initialObject, this.activityDataFA.value));
        this.initialObject = this.activityDataFA.value;
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
            if (customDateInputInstance) {
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
    }

    async getFuel() {
        let stdFuel: any[];
        let customFuel: any[];
        let modifiedStdFuel: any[];
        let modifiedCustomFuel: any[];

        [stdFuel, customFuel] = await Promise.all([
            this.fuelService.getFuelByActivityKeyID(ActivityKeyIDEnum.STATIONARY_COMBUSTION),
            this.customFuelService.getCustomFuelList(this.currentOrgID)
        ]);

        modifiedStdFuel = stdFuel.map((fuel: any) => {
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

    async getUnit() {
        this.allUnit = await this.unitService.getUnit([`type:${UnitTypeKeyID.ENERGY}`]);
        let electricity = this.allUnit.filter(source => source.typeName == 'Electric');
        this.elctrictyUnit = electricity;
        let heat = this.allUnit.filter(source => source.typeName == 'Heat');
        this.heatUnit = heat;
    }

    getChpFuelType() {
        this.fuelController.getChpFuelList().subscribe((res: any) => {
            this.cbamFuelType = res;
            this.cbamFuelTypeSearchUtil.entityArr = this.cbamFuelType;
            this.cbamFuelTypeSearchUtil.createSubscription();
        },
            (error: any) => {
                console.error('Error fetching fuel type:', error)
            }
        );
    }

    setDataCollectionMethod() {
        this.activityDataFA.controls.forEach(group => {
            group.get('dataCollectionMethodID').patchValue(this.defaultDataCollectionMethodID);
        })
    }

    fileUpload(event, index) {
        let file = event.target.files[0];
        if (file) {

            if (file.type !== 'application/pdf') {
                this.toastrService.error(NocFileUploadEnum.INVALID_FILE_TYPE_ERROR);
                return;
            }

            if (file.size > NocFileUploadEnum.MAX_FILE_SIZE) {
                this.toastrService.error(NocFileUploadEnum.INVAID_FILE_SIZE_ERROR);
                return;
            }

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e: any) => { };

            this.billFile = file;
            this.billFileName = file['name'];
            this.docFileList[index] = this.billFile;

            this.activityDataFA.controls.forEach((control: AbstractControl) => {
                const group = control as FormGroup;
                group.get('docName').patchValue(this.billFileName);
                group.get('docSize').patchValue(this.getFileSizeWithUnit(file['size']));
                if (this.action == 'update') {
                    this.fileCreateUpdate(group);
                }
            });
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

    removeFile(index) {
        this.activityDataFA.controls.forEach(group => {
            group.get('docName').reset();
            group.get('docSize').reset();
            group.get('docPath').reset(null);
            group.get('docID').reset();
        });
        this.docFileList[index] = null;

        if(this.fileInputArr[index]){
            this.fileInputArr[index].nativeElement.value = null;
        }
    }

    toFormData(): FormData {
        const formData = new FormData();
        formData.append('payload', this.billFile);
        return formData;
    }

    fileCreateUpdate(formGroup: FormGroup) {
        if (formGroup.get('docID').value == null) {
            this.carbonDocumentController.createDocument(this.currentOrgID, formGroup.get('activityDataID').value, ActivityKeyIDEnum.CHP_ATTRIBUTION,
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

    errorHandlingForFormArrayData = (control: string, error: string, index: number): boolean => {
        const activityConfigDetailsFA = this.activityDataFG.get('activityDataDetails') as FormArray;
        const formGroup = activityConfigDetailsFA.at(index) as FormGroup;
        return formGroup.get(control).hasError(error);
    }
}
