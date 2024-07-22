import { Component } from '@angular/core';

import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { isEqual } from 'lodash';

import { ActivityConfig } from '@carbon/component/activity-config/activity-config';
import { ProductAndServiceService } from '@netzero/service/product-and-service.service';

import { StorageService } from '@library/storage-service';
import { ActivityFormTypeEnum, MatSelectSearchService } from '@library/tsc-common';
import { PROCESS_OUTPUT_ENUM } from '@netzero/enum/process.enum';
import { ActivatedRoute } from '@angular/router';
import { ENTITY_KEY_ID_ENUM } from '@carbon/enum/entity.enum';
import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styleUrls: ['./create-update.component.scss']
})
export class CarbonPriceActivityConfigCreateUpdateComponent extends ActivityConfig {
    ActivityConfigEnum = ActivityConfigEnum;

    origin: string = null;
    action: string = null;

    isPffForm: boolean = false;
    isActivityDataAdHoc: boolean = false;
    isActivityFormUpdate: boolean = false;

    currentOrgID: any;
    productSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    constructor(
        private formBuilder: FormBuilder,
        private productService: ProductAndServiceService,
        storageService: StorageService,
        activatedRoute: ActivatedRoute,
    ) {
        super();
        this.initComponent(storageService, activatedRoute);
    }

    initComponent(storageService: StorageService, activatedRoute: ActivatedRoute) {
        this.currentOrgID = storageService.getStorage('currentOrgID');
        activatedRoute.queryParams.subscribe((queryParams) => {
            this.action = queryParams['action'];

            if (queryParams['activityID']) {
                this.activityID = queryParams['activityID'];
            }
            if (queryParams['origin']) {
                this.origin = queryParams['origin'];
                this.isPffForm = (this.origin == ActivityFormTypeEnum.PFF);
            }
        });

        let routeData = activatedRoute.snapshot.data;
        if (
            routeData.action == this.FormAction.UPDATE &&
            routeData.entity == ENTITY_KEY_ID_ENUM.ACTIVITY_FORM
        ) {
            this.isActivityFormUpdate = true;
        }

        this.activityKeyID = routeData.activityKeyID;
        if (routeData.entity == ENTITY_KEY_ID_ENUM.ACTIVITY_DATA) {
            this.isActivityDataAdHoc = true;
        }

    }

    ngOnInit(): void {
        this.formGroupInit();
        this.getProductList();
    }

    formGroupInit(): void {
        this.activityConfigFG = this.formBuilder.group({
            activityConfig: this.formBuilder.group({
                activityID: [this.activityID, [Validators.required]],
                activityKeyID: [this.activityKeyID, [Validators.required]],
                configName: [, Validators.required],
                reminderEnabled: [],
                workflowEnabled: [],
                apiEnabled: []
            }),
            activityConfigData: this.formBuilder.group({}),
            activityConfigSource: this.formBuilder.array([])
        });

        if (!this.isActivityFormUpdate && !this.isActivityDataAdHoc) { this.activityConfigSourceFA.push(this.sourceFG) };
    }

    get sourceFG(): FormGroup {
        return this.formBuilder.group({
            sourceID: [, [Validators.required]],
            sourceTypeID: []
        });
    }

    get activityConfigAC(): FormGroup {
        return this.activityConfigFG.get('activityConfig') as AbstractControl as FormGroup;
    }

    get activityConfigSourceFA(): FormArray {
        return this.activityConfigFG.get('activityConfigSource') as AbstractControl as FormArray;
    }

    async getProductList() {
        const products = await this.productService.getProductList(this.currentOrgID);
        const cbam_products = products.filter(product => (product.productCategory as Array<any>).some(category => category.keyID == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT || category.keyID == PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT));
        this.productSearchUtil.entityArr = cbam_products;
        this.productSearchUtil.createSubscription();
    }

    setSourceTypeID(index: string, data) {
        this.activityConfigSourceFA.get(`${index}`).get('sourceTypeID').patchValue(data.sourceTypeID, { emitEvent: false });
    }

    patchConfiguration(configuration: any) {
        this.activityConfigFG.valueChanges.subscribe(() => {
            this.isEqual.next(isEqual(this.initialObject, this.activityConfigFG.getRawValue()));
        });

        const activityConfig = (configuration['activityConfig'] ?? null);
        if (activityConfig != null) {
            this.activityConfigAC.patchValue({ configName: activityConfig.configName });
        }
        
        if (activityConfig != null) {
            this.activityConfigAC.patchValue({ configName: activityConfig.configName });

            const activityConfigSource = configuration['activityConfigSource'];
            if (activityConfigSource.length > 0) {
                activityConfigSource.forEach((source: any) => {
                    this.activityConfigSourceFA.push(
                        this.formBuilder.group({
                            sourceID: [source.sourceID],
                            sourceTypeID: source.sourceTypeID
                        })
                    );
                });
            }
        } else {
            const activityData = configuration.activityData;
            if (activityData.source ?? false) {
                let s_id = [activityData.source.id];
                let form = this.formBuilder.group({
                    sourceID: [s_id],
                    sourceTypeID: activityData.sourceType.id
                })
                this.activityConfigSourceFA.push(form);
            }
            this.readOnlyForm();
        }

        this.isEqual.next(true);
        this.initialObject = this.activityConfigFG.value;
    }

    public errorHandlingFA = (formGroup: FormGroup, control: string, error: string) => {
        return formGroup.get(control).hasError(error);
    }

}
