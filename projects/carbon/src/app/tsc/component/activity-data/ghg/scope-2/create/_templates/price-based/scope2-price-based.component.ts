import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

// import { AddUpdateNocDocumentDialog } from '@WaterNetZero/component/source/_dialog/add-update-noc-document/add-update-noc-document-dialog.component';

import * as moment from 'moment';
import { combineLatest, ReplaySubject, Subject } from 'rxjs';

import { CarbonDocumentController } from '@carbon/controller/document.controller';

import { CurrencyService } from '@carbon/service/currency.service';

// tsc-library
import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { FileService } from '@library/tsc-common';
import { DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateService } from '@library/date';
import { FormErrorEnum, MaterialFormFieldAppearance, MatSelectSearchService, NocFileUploadEnum, TypeConfirmationDialog } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-scope2-price-based',
    templateUrl: './scope2-price-based.component.html',
    styles: [
    ]
})
export class Scope2PriceBasedComponent implements OnInit {
    @Input() activityConfig: any;
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
    activityKeyID: any;

    currency: any[];

    billFile: File = null;
    billFileName: string;
    noBillFileAvailable: boolean = true;
    file: any;

    workflow: any;

    action: any = 'create';

    currencyFilterFC: FormControl = new FormControl();
    currencyFilterUnsubscribe = new Subject<void>();
    currencyFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    @ViewChild('fileInput') fileInput: ElementRef;
    @ViewChild('customDateInput') customDateInputs: DateInputComponent;

    constructor(
        private carbonDocumentController: CarbonDocumentController,
        private storageService: StorageService,
        private toastrService: ToastrService,
        private fileService: FileService,
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
        private activatedRoute: ActivatedRoute,
        private currencyService: CurrencyService,
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
        this.FormDataInit();
        this.getCurrency();
    }

    ngAfterViewInit() {
        if (this.action == 'update') {
            this.patchActivityData(this.activityConfig['activityData']);
        }
    }

    FormDataInit() {
        this.activityDataFG = this.formBuilder.group({
            activityDataID: [],
            recordID: [],
            activityKeyID: [],
            startDate: [],
            endDate: [],
            dateRange: [],
            billAmount: [],
            currencyUnitID: [],
            currencyUomCode: [],
            currencyUomName: [],
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
            billAmount: activityData['billAmount'],
            currencyUnitID: activityData['currencyUnitID'],
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

    currencySearch: MatSelectSearchService = new MatSelectSearchService(['currencyName']);
    async getCurrency() {
        this.currency = <any>await this.currencyService.getCurrency();

        this.currencySearch.entityArr = this.currency;
        this.currencySearch.createSubscription();
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
