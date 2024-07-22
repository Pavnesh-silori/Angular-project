import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MeterReadingComponent } from './meter-reading/meter-reading.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';

import { DataInputMethod, DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';

import { DataInputMethodService } from '@carbon/service/data-input-method.service';

//tsc-library
import { StorageService } from '@library/storage-service';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
import { ToastrService } from '@library/toastr-service';
import { DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateService } from '@library/date';
import { COMMON_CONSTANT, FormErrorEnum, ImageErrorEnum, MaterialFormFieldAppearance } from '@library/tsc-common';
import { SupplierTypeKeyIDEnum } from '@netzero/enum/supplier.enum';
import { SupplierService } from '@netzero/service/supplier.service';
// /tsc-library/

@Component({
    selector: 'app-create',
    templateUrl: './create-update.component.html',
    styles: []
})
export class CreateUpdateComponent implements OnInit {

    activityDataFG: FormGroup
    currentOrgID: any;

    action: any;
    activityData: any;
    activityID: any;
    dataInputMethodKeyID: any;
    activityConfig: any;

    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    docFileList: any[] = [];
    getAllSource: any[] = [];
    dataInputMethodList: any[] = [];

    startDate: string;
    endDate: string;
    gridSuppliers: any[]=[];
    privateSuppliers: any[]=[];


    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('MeterReadingComponent') MeterReadingComponent: MeterReadingComponent;
    @ViewChild('TotalAmountComponent') TotalAmountComponent: TotalAmountComponent;

    constructor(
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private dataInputMethodService: DataInputMethodService,
        private supplierService: SupplierService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.activatedRoute.queryParams.subscribe((queryParam) => {
            this.action = queryParam.action;
            this.activityID = queryParam.activityID

            if (this.action == 'create') {
                this.getSupplierByType();
                this.getDataInputMethodList(this.activityID)
            }
        });

        // this.route.data.subscribe(data => {
        //     this.sourceData = data.activityKeyID;
        //     console.log("source", this.sourceData)
        //     if (this.sourceData == ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION) {
        //         this.source = 'electricity'
        //     } else if (this.sourceData == ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION) {
        //         this.source = 'heat'
        //     }
        // });

        // this.activityDataInit();
        // this.getUnit();
    }

    // dateInpChange() {
    //     let startDate = this.customDateInput.startDateFC.value;
    //     let endDate = this.customDateInput.endDateFC.value;

    //     if (startDate) {
    //         this.startDate = this.dateService.formatDate(startDate, this.format)
    //     }

    //     if (endDate) {
    //         this.endDate = this.dateService.formatDate(endDate, this.format)
    //     }
    // }

    // activityDataInit() {
    //     this.activityDataFG = this.formBuilder.group({
    //         quantityConsumed: [],
    //         unitID: [],
    //         returnHeat: [],
    //         returnUnitID: []
    //     });

    //     if (this.sourceData == ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION) {
    //         this.activityDataFG.get('returnHeat')?.enable();
    //         this.activityDataFG.get('returnUnitID')?.enable();
            
    //     } else {
    //         this.activityDataFG.get('returnHeat')?.disable();
    //         this.activityDataFG.get('returnUnitID')?.disable();
    //     }
    // }

    // async getUnit() {
    //     this.allUnit = await this.unitService.getUnit([`type:${UnitTypeKeyID.ENERGY}`]);
    //     if (this.allUnit && this.sourceData == ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION) {
    //         let electricity = this.allUnit.filter(source => source.typeName == 'Electric');
    //         console.log(electricity);
    //         this.units = electricity;
    //     }
    //     else if (this.allUnit && this.sourceData == ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION) {
    //         let heat = this.allUnit.filter(source => source.typeName == 'Heat');
    //         console.log(heat);
    //         this.units = heat;
    //     }
    // }

    // fileUpload(event) {
    //     let file = event.target.files[0];
    //     if (file) {

    //         if (file.type !== 'application/pdf') {
    //             this.toastrService.openToast('Error', ImageErrorEnum.INVALID_IMAGE_TYPE_ERROR, 'error');
    //             return;
    //         }

    //         if (file.size > COMMON_CONSTANT.MAX_IMAGE_SIZE) {
    //             this.toastrService.openToast('Error', ImageErrorEnum.INVALID_IMAGE_SIZE_ERROR, 'error');
    //             return;
    //         }

    //         let reader = new FileReader();
    //         reader.readAsDataURL(file);
    //         reader.onload = (e: any) => { };

    //         this.billFile = file;
    //         this.noBillFileAvailable = false;
    //         this.billFileName = file['name'];
    //         console.log(this.billFileName);

    //         this.fileInput.nativeElement.value = null;
    //         // this.docUploadChange.emit(this.billFile);

    //     }
    // }

    // removeFile() {
    //     this.billFile = null;
    //     this.billFileName = '';
    //     this.noBillFileAvailable = true;
    //     this.fileInput.nativeElement.value = null;
    //     // this.docUploadChange.emit(this.billFile);
    // }

    // uploadDoc() {
    //     this.fileInput.nativeElement.click();
    // }

    // onSubmit() {
    //     console.log("Valid", this.activityDataFG.valid);
    //     console.log("Invalid", this.activityDataFG.invalid);
    // }

    // errorHandling = (control: string, error: string): boolean => {
    //     return this.activityDataFG.get(control).hasError(error);
    // }

    async getSupplierByType() {
        console.log('called function');

        this.gridSuppliers = await this.supplierService.getSupplierByType(this.currentOrgID, SupplierTypeKeyIDEnum.ENERGY_SUPPLIER);
        console.log(this.gridSuppliers)
        // this.privateSuppliers = await this.supplierService.getSupplierByType(this.currentOrgID, SupplierTypeKeyIDEnum.PRIVATE_SUPPLIER);
        // console.log(this.privateSuppliers);

    }

    // async getProducts() {
    //     this.getAllSource = await this.productService.getProductList(this.currentOrgID);
    // }

    onChildFormGroupChange(formGroup: FormGroup) {
        this.activityDataFG = formGroup;
    }

    getActivityData() {
        return {
            'activityData': this.activityData,
            'activityDataFile': this.docFileList
        }
    }

    updateActivityData() {
        return this.activityData[0];
    }

    activityDataValidity() {
        this.activityDataFG.valueChanges.subscribe(() => this.validity.emit(!this.activityDataFG.invalid));
    }

    async getDataInputMethodList(id) {
        this.dataInputMethodList = await this.dataInputMethodService.getDataInputMethodByActivityAndType(id, DataInputMethod.STANDARD);
    }

    async getConfiguration(configuration) {
        console.log(configuration);
        
        if (this.action == 'update' && this.dataInputMethodList.length == 0) {
            await this.getDataInputMethodList(configuration);
        }
        this.activityConfig = configuration;
        if (configuration != null && configuration.activityConfigData.dataInputMethodStdID) {

            const dataInputMethod = this.dataInputMethodList.find(item => item.id === configuration.activityConfigData.dataInputMethodStdID);
            if (dataInputMethod) {
                this.dataInputMethodKeyID = dataInputMethod.keyID;
            }
            else {
                console.log('dataInputMethodID not found');
            }
        }
    }

    isValidForm(): boolean {
        if (this.dataInputMethodKeyID == DataInputMethodKeyIDEnum.METER_READING) {
            if (this.MeterReadingComponent.isValidForm()) {
                this.activityData = {};
                this.activityData = this.MeterReadingComponent.activityData;
                // this.docFileList = this.MeterReadingComponent.docList;
                return true;
            }
        }
        // else if (this.dataInputMethodKeyID == DataInputMethodKeyIDEnum.TOTAL_AMOUNT) {
        //     if (this.TotalAmountComponent.isValidForm()) {
        //         this.activityData = {};
        //         this.activityData = this.TotalAmountComponent.activityData;
        //         // this.docFileList = this.TotalAmountComponent.docList;
        //         return true;
        //     }
        // }
        else {
            return false;
        }
    }
}