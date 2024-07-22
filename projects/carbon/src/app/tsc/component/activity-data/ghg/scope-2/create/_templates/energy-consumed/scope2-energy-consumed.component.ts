import { FormBuilder, FormGroup } from '@angular/forms';

import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import * as moment from 'moment';

import { MatDialog } from '@angular/material/dialog';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { ActivatedRoute } from '@angular/router';
// import { AddUpdateNocDocumentDialog } from '@WaterNetZero/component/source/_dialog/add-update-noc-document/add-update-noc-document-dialog.component';
import { combineLatest } from 'rxjs';

import { CarbonDocumentController } from '@carbon/controller/document.controller';

// tsc-library
import { DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateService } from '@library/date';
import { FormErrorEnum, MaterialFormFieldAppearance, MatSelectSearchService, NocFileUploadEnum, TypeConfirmationDialog } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { UnitService } from '@library/unit-service';
// /tsc-library

@Component({
    selector: 'app-scope2-energy-consumed',
    templateUrl: './scope2-energy-consumed.component.html',
    styles: [
    ]
})
export class Scope2EnergyCunsumedComponent implements OnInit {
    @Input() activityConfigValue: any;
    @Input() docFileList: File[];
    @Output() formGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    FormErrorEnum = FormErrorEnum;
    DateInputTypeEnum = DateInputTypeEnum;
    DateFormatEnum = DateFormatEnum;

    faEllipsisV = faEllipsisV;

    currentOrgID: any;

    activityDataFG: FormGroup;
    activityData: any;

    unit: any[];

    billFile: File = null;
    billFileName: string;
    noBillFileAvailable: boolean = true;

    activityConfig: any;
    activityConfigData: any;
    workflow: any;

    isReadOnly: boolean = false;

    haveContractualInstrument: any;
    renewablePercentage: any;

    activityDataID: any = null;
    activityKeyID: any;

    action: any = 'create';

    noDocFileAvailable: boolean = true;
    file: any;

    @ViewChild('fileInput') fileInput: ElementRef;
    @ViewChild('customDateInput') customDateInputs: DateInputComponent;

    constructor(
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
        private carbonDocumentController: CarbonDocumentController,
        private storageService: StorageService,
        private toastrService: ToastrService,
        private activatedRoute: ActivatedRoute,
        private unitService: UnitService,
        private dateService: DateService,

    ) {
        this.storageService.setStorage('switchOrgRedirect', 'YES');
        this.currentOrgID = parseInt(this.storageService.getStorage(['currentOrgID']));

        combineLatest([this.activatedRoute.queryParams, this.activatedRoute.params]).subscribe(([queryParam2, param2]) => {

            this.action = queryParam2['action'];
            this.activityKeyID = queryParam2['activityKeyID'];
        });
    }

    ngOnInit(): void {
        this.ActivityDataInit();
        this.setConfigValue(this.activityConfigValue);
        this.getUnit();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.activityDataFG) {

        } else {
            console.log('else');
        };
        this.haveContractualInstrument = this.activityConfigValue['activityConfigData']['haveContractualInstrument'];
        this.renewablePercentage = this.activityConfigValue['activityConfigData']['energy']['percentage'];

        if (!changes.renewablePercentage?.firstChange) {
            this.UpdateRenewableValue(null, 'renewable', this.haveContractualInstrument);
        }
    }

    ngAfterViewInit() {
        if (this.action == 'update') {
            this.patchActivityData(this.activityConfigValue['activityData']);
        }
    }

    ActivityDataInit() {
        this.activityDataFG = this.formBuilder.group({
            activityDataID: [],
            recordID: [],
            activityKeyID: [],
            energyConsumption: [],
            energyUnitID: [],
            energyUomCode: [],
            energyUomName: [],
            renewableAmount: [],
            renewableUnitID: [],
            startDate: [],
            endDate: [],
            dateRange: [],
            docID: [],
            docType: [],
            docName: [],
            docPath: [],
            docSize: [],
        });

        this.formGroupChange.emit(this.activityDataFG);
    }

    patchActivityData(activityData) {
        this.activityDataFG.patchValue({
            activityDataID: activityData['activityDataID'],
            recordID: activityData['recordID'],
            activityKeyID: activityData['activityKeyID'],
            energyConsumption: activityData['energyConsumption'],
            energyUnitID: activityData['energyConsumptionUnitID'],
            energyUomCode: activityData[''],
            energyUomName: activityData[''],
            renewableAmount: activityData['renewableAmount'],
            renewableUnitID: activityData['renewableUnitID'],
            startDate: activityData['startDate'],
            endDate: activityData['endDate'],
            dateRange: { startDate: moment(activityData['startDate']), endDate: moment(activityData['endDate']) },
            docID: activityData.file ? activityData.file.id : null,
            docName: activityData.file ? activityData.file.name : null,
            docPath: activityData.file ? activityData.file.path : null,
        });
        this.customDateInputs.daterange.patchValue({ startDate: moment(activityData.startDate), endDate: moment(activityData.endDate) });
    }

    formatDate() {
        let date = this.activityDataFG.get('dateRange').value;

        let startDate = moment(date.startDate).format("YYYY-MM-DD");
        let endDate = moment(date.endDate).format("YYYY-MM-DD");
        this.activityDataFG.get('startDate').patchValue(startDate);
        this.activityDataFG.get('endDate').patchValue(endDate);

    }

    unitSearch: MatSelectSearchService = new MatSelectSearchService(['name']);
    async getUnit() {
        let unitFilter: any[] = [];
        unitFilter = ['unitType:ENERGY'];
        this.unit = <any>await this.unitService.getUnit(unitFilter);

        this.unitSearch.entityArr = this.unit.slice();
        this.unitSearch.createSubscription();
    }

    setConfigValue(activityConfigRes) {
        this.activityConfig = activityConfigRes['activityConfig'];
        this.activityConfigData = activityConfigRes['activityConfigData'];
        this.workflow = activityConfigRes['workflow'];
        this.haveContractualInstrument = activityConfigRes['activityConfigData']['haveContractualInstrument'];
    }

    UpdateRenewableValue(event, col, haveContractualInstrument) {
        if (haveContractualInstrument == 'YES') {
            let renewable;
            renewable = this.renewablePercentage;

            if (event != null) {
                if (col == 'energyConsumption') {
                    this.activityDataFG.patchValue({
                        renewableAmount: (event.target.value * renewable) / 100,
                        renewableUnitID: this.activityDataFG.get('energyUnitID').value,
                    });
                } else {
                    this.activityDataFG.patchValue({
                        renewableUnitID: event
                    });
                }
            }

            if (this.activityDataFG && col == 'renewable') {
                if (this.activityDataFG.get('energyConsumption').value != null) {
                    this.activityDataFG.patchValue({
                        renewableAmount: (this.activityDataFG.get('energyConsumption').value * renewable) / 100,
                        renewableUnitID: this.activityDataFG.get('energyUnitID').value,
                    });
                }
            }
        }
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
            this.fileInput.nativeElement.value = null;
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

    public errorHandling = (control: string, error: string) => {
        return this.activityDataFG.controls[control].hasError(error);
    }

    ngOnDestroy() {
        this.storageService.setStorage('switchOrgRedirect', 'NO');
    }

}
