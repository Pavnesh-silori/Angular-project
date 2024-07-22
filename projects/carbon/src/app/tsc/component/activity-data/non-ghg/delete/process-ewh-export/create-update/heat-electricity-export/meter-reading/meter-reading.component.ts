import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


import { DateFormatEnum, DateInputTypeEnum, DateService } from '@library/date';

import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { FormAction, MatSelectSearchService, MaterialFormFieldAppearance, NocFileUploadEnum } from '@library/tsc-common';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
@Component({
    selector: 'app-meter-reading',
    templateUrl: './meter-reading.component.html',
    styleUrls: ['./meter-reading.component.scss']
})
export class MeterReadingComponent implements OnInit {
    DateInputTypeEnum = DateInputTypeEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    @Input() activityDataFG: FormGroup;
    @Input() defaultDataCollectionMethodID: FormGroup;

    @Input() docFileList: any[];
    @Input() activityData: any;

    action: any;
    billFile: File = null;
    billFileName: string;
    noBillFileAvailable: boolean = true;

    fuelUnitList: UnitM[] = [];
    energyUnitList: UnitM[] = [];
    unitM: UnitM[] = [];

    source: string = 'heat'
    currentOrgID: string;

    fuelUnitTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    energyUnitListSearch: MatSelectSearchService = new MatSelectSearchService(['name']);
    
    @ViewChild('fileInput') fileInput: ElementRef;
    @ViewChildren('customDateInput') customDateInputs: QueryList<any>;

    constructor(
        private formBuilder: FormBuilder,
        private dateService: DateService,
        private storageService: StorageService,
        private toastrService: ToastrService,
        private unitService: UnitService,
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.activityDataFG.firstChange) {
            this.formDataInit();
        }

        if (changes?.defaultDataCollectionMethodID) {
            if (this.defaultDataCollectionMethodID != undefined || this.defaultDataCollectionMethodID != null)
                this.setDataCollectionMethod();
        }

        if(changes.activityData?? false) {
            console.log('found activity data');
            
            this.patchActivityData();
        }
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID')
        this.getUnitList();
    }

    formDataInit() {
        this.activityDataFA.push(this.dataFG);

        if (this.action == FormAction.CREATE) {
        }

        if (this.action == FormAction.UPDATE) {
        }
    }

    patchActivityData() {
        this.activityDataFG.get('0').patchValue(this.activityData);
    }

    get dataFG() {
        return this.formBuilder.group({
            activityDataID: [],
            recordID: [],
            activityKeyID: [],
            dataCollectionMethodID: [/* , [Validators.required] */],
            startDate: [/* , [Validators.required] */],
            endDate: [/* , [Validators.required] */],
            dateRange: [],
            openingMeterReading: [/* , [Validators.required] */],
            closingMeterReading: [/* , [Validators.required] */],
            meterUnitID: [/* , [Validators.required] */],
            netCalorificValue: [/* , [Validators.required] */],
            ncvNumeratorUnitID: [/* , [Validators.required] */],
            ncvDenominatorUnitID: [/* , [Validators.required] */],
            energyExported: [/* , [Validators.required] */],
            energyExportedUnitID: [/* , [Validators.required] */],
            biomassPct: [],
            docID: [],
            docType: [],
            docName: [],
            docPath: [],
        });
    }

    get activityDataFA(): FormArray {
        return this.activityDataFG.get('activityData') as FormArray;
    }

    setDataCollectionMethod() {
        this.activityDataFA.controls.forEach(group => {
            group.get('dataCollectionMethodID').patchValue(this.defaultDataCollectionMethodID);
        })
    }

    dateInpChange(formGroup: FormGroup, index) {
        if (this.customDateInputs) {
            const customDateInputInstance = this.customDateInputs.toArray()[index];
            const startDate = customDateInputInstance.startDateFC.value;
            const endDate = customDateInputInstance.endDateFC.value;

            if (startDate) {
                const formatted_startDate = this.dateService.formatDate(startDate, DateFormatEnum.YYYY_MM_DD);
                formGroup.get('startDate').patchValue(formatted_startDate);
                console.log(index, formatted_startDate);
            }

            if (endDate) {
                const formatted_endDate = this.dateService.formatDate(endDate, DateFormatEnum.YYYY_MM_DD);
                formGroup.get('endDate').patchValue(formatted_endDate);
                console.log(index, formatted_endDate);
            }
        }
    }

    pathFormData() {

    }

    async getUnitList() {
        this.unitM = await this.unitService.getUnit([]);
        this.fuelUnitList = this.unitM.filter(unit => unit.type == UnitTypeKeyID.VOLUME)
        this.fuelUnitTypeSearchUtil.entityArr = this.fuelUnitList;
        this.fuelUnitTypeSearchUtil.createSubscription();
        this.energyUnitList = this.unitM.filter(unit => unit.type == UnitTypeKeyID.ENERGY)
        this.energyUnitListSearch.entityArr = this.energyUnitList;
        this.energyUnitListSearch.createSubscription();
    }

    fileUpload(event) {
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
            this.noBillFileAvailable = false;
            this.billFileName = file['name'];
            this.fileInput.nativeElement.value = null;
            this.docFileList[0] = this.billFile;
        }
    }

    removeFile() {
        this.billFile = null;
        this.billFileName = '';
        this.noBillFileAvailable = true;
        this.fileInput.nativeElement.value = null;
        this.docFileList[0] = this.billFile;
    }

    uploadDoc() {
        this.fileInput.nativeElement.click();
    }

    errorHandling = (formGroup: FormGroup, control: string, error: string): boolean => {
        return formGroup.get(control).hasError(error);
    }

}
