import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MatChipInputEvent } from '@angular/material/chips';

import { isEqual } from 'lodash';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { ActivityConfig } from '@carbon/component/activity-config/activity-config';

import { SupplierTypeKeyIDEnum } from '@netzero/enum/supplier.enum';
import { PROCESS_INPUT_ENUM } from '@netzero/enum/process.enum';
import { DataInputMethod } from '@carbon/enum/data-input-method.enum';
import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';

import { SupplierService } from '@netzero/service/supplier.service';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';
import { ProductAndServiceService } from '@netzero/service/product-and-service.service';

//tsc-library
import { COMMON_CONSTANT, MatSelectSearchService, TSCCommonService } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// /tsc-library/

@Component({
    selector: 'app-create',
    templateUrl: './create-update.component.html',
    styles: []
})
export class CreateUpdateComponent extends ActivityConfig implements OnInit {

    currentOrgID: any;
    origin: any;

    ActivityConfigEnum = ActivityConfigEnum;

    COMMON_CONSTANT = COMMON_CONSTANT;

    allProduct: any;
    allPrecursor: any;
    productSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    suppliers: any;
    supplierSearchUtil: MatSelectSearchService = new MatSelectSearchService(['supplierName'])

    dataInputMethodList: any[] = [];

    inputPlaceholder = "email1@domain.com, email2@domain.com";
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private storageService: StorageService,
        private supplierService: SupplierService,
        private dataInputMethodService: DataInputMethodService,
        private productService: ProductAndServiceService,
        private tscCommonService: TSCCommonService
    ) {
        super();
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (queryParams.activityID) {
                this.activityID = queryParams.activityID;
                this.origin = queryParams.origin;
            }
        });

        this.activatedRoute.data.subscribe((data) => {
            this.activityKeyID = data.activityKeyID;
        });

        this.formGroupInit();
        this.getPrecursor();
        this.getDataInputMethodList(this.activityID);
        this.getSupplierByType();
    }

    formGroupInit() {
        this.activityConfigFG = this.formBuilder.group({
            activityConfig: this.formBuilder.group({
                activityID: [this.activityID, Validators.required],
                activityKeyID: [this.activityKeyID, Validators.required],
                configName: [, Validators.required],
                reminderEnabled: [],
                workflowEnabled: [],
                apiEnabled: []
            }),
            activityConfigData: this.formBuilder.group({
                supplierID: [, Validators.required],
                dataInputMethodStdID: [, Validators.required],
                producerEmails: [[], Validators.required]
            }),
            activityConfigSource: this.formBuilder.array([])
        });
        this.createFormGroup();
    }

    createFormGroup() {
        this.activityConfigSourceFA.push(
            this.formBuilder.group({
                sourceID: [[]],
                sourceTypeID: null
            })
        );
    }

    setSourceTypeID(data) {
        this.activityConfigFG.get('activityConfigSource').get([0]).get('sourceTypeID').patchValue(data.sourceTypeID, { emitEvent: false });
    }

    get activityConfigSourceFA(): FormArray {
        return this.activityConfigFG.get('activityConfigSource') as FormArray;
    }

    async getPrecursor() {
        this.allProduct = await this.productService.getProductList(this.currentOrgID);
        this.allPrecursor = this.allProduct.filter(p => p.productCategory.some(c => c.keyID == PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT));
        this.productSearchUtil.entityArr = this.allPrecursor;
        this.productSearchUtil.createSubscription();
    }

    async getSupplierByType() {
        this.suppliers = await this.supplierService.getSupplierByType(this.currentOrgID, SupplierTypeKeyIDEnum.PRECURSOR_SUPPLIER);
        this.supplierSearchUtil.entityArr = this.suppliers;
        this.supplierSearchUtil.createSubscription();
    }

    get producerEmails() {
        return this.activityConfigDataAC.get('producerEmails');
    }

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();
        if (value) {
            const emails = value.split(',').map(email => email.trim());
            const validEmails = emails.filter(email => this.tscCommonService.isValidEmail(email));
            if (validEmails.length > 0) {
                this.producerEmails.patchValue(this.producerEmails.value.concat(validEmails));
            }
        }
        event.chipInput!.clear();
    }

    removeEmail(email): void {
        const index = this.producerEmails.value.indexOf(email);
        if (index >= 0) {
            const emails = [...this.producerEmails.value];
            emails.splice(index, 1);
            this.producerEmails.setValue(emails);
        }
    }

    onInput() {
        this.inputPlaceholder = '';
    }

    async getDataInputMethodList(id) {
        this.dataInputMethodList = await this.dataInputMethodService.getDataInputMethodByActivityAndType(id, DataInputMethod.STANDARD);
        this.activityConfigFG.get('activityConfigData.dataInputMethodStdID').patchValue(this.dataInputMethodList[0].id);
    }

    patchConfiguration(configuration: any) {
        let activityConfig = (configuration.activityConfig != null ? configuration.activityConfig : null);
        let activityConfigData = configuration.activityConfigData;
        let activityConfigSource = configuration.activityConfigSource;


        if (activityConfig != null) {
            this.activityConfigAC.patchValue({
                configName: activityConfig.configName,
            });
        } else {
            this.readOnlyForm();
        }

        this.activityConfigDataAC.patchValue({
            supplierID: activityConfigData.supplier.id,
            dataInputMethodStdID: activityConfigData.dataInputMethod.id,
            producerEmails: activityConfigData.producerEmails
        });

        this.activityConfigSourceFA.clear();

        if (activityConfig != null) {
            activityConfigSource.forEach((source: any) => {
                this.activityConfigSourceFA.push(
                    this.formBuilder.group({
                        sourceID: [source.sourceID[0]],
                        sourceTypeID: source.sourceTypeID
                    })
                );
            });
        } else {
            const source = configuration.source;
            this.activityConfigSourceFA.push(
                this.formBuilder.group({
                    sourceID: [source.source.id],
                    sourceTypeID: source.sourceType.id
                })
            );
            this.readOnlyForm();
        }

        this.activityConfigFG.valueChanges.subscribe(() => {
            this.isEqual.next(isEqual(this.initialObject, this.activityConfigFG.getRawValue()));
        });

        this.isEqual.next(true);
        this.initialObject = this.activityConfigFG.value;
    }

    errorHandlingForFormArrayData = (control: string, error: string, index: number): boolean => {
        const activityConfigSourceFA = this.activityConfigFG.get('activityConfigSource') as FormArray;
        const formGroup = activityConfigSourceFA.at(index) as FormGroup;
        return formGroup.get(control).hasError(error);
    }
}
