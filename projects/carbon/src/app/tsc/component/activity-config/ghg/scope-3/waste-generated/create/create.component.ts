import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

import { isEqual } from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '@netzero/service/supplier.service';
import { SupplierTypeM } from '@netzero/model/supplier.model';
import { SupplierTypeKeyIDEnum } from '@netzero/enum/supplier.enum';
import { WasteGeneratedService } from '@carbon/service/waste-generated.service'
import { WasteTypeM } from '@carbon/model/waste-generated.model';
import { MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
@Component({
    selector: 'pff-waste-generation',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

    @Output() dataSource = new EventEmitter<{ supplierType: string, wasteType: string[] }>();
    @Output() formDataEvent = new EventEmitter<any>();
    isEqual: EventEmitter<boolean> = new EventEmitter();
    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    origin: string = 'default';
    currentOrgID: any;
    selectedValue: string;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    keyID: any;
    name: any;
    configuration: any;
    SupplierTypeKeyIDEnum = SupplierTypeKeyIDEnum

    activityConfigFG: FormGroup
    formGroup: FormGroup;
    wasteTypeFc = new FormControl()
    refreshBtn: any;

    activityID: any;
    activityKeyID: string;

    supplierList: SupplierTypeM[] = [];
    wasteTypeList: any = [];

    initialObject: any;
    noSuppliers: boolean = false;
    wasteTypeSerarch: MatSelectSearchService = new MatSelectSearchService(['name']);

    constructor(
        private supplierService: SupplierService,
        private formBuilder: FormBuilder,
        private storageService: StorageService,
        private activatedRoute: ActivatedRoute,
        private wasteGeneratedService: WasteGeneratedService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (queryParams['activityID']) {
                this.activityID = queryParams['activityID'];
            }

            if (queryParams['origin']) {
                this.origin = queryParams['origin'];
            }
        });
        this.activityKeyID = this.activatedRoute.snapshot.data['activityKeyID'];

        this.getSupplierByType();
        this.activityConfigInit();
        this.getAllWasteTypes();
    }

    activityConfigInit() {
        this.activityConfigFG = this.formBuilder.group({
            activityConfig: this.formBuilder.group({
                activityID: this.activityID,
                activityKeyID: this.activityKeyID,
                configName: [, Validators.required],
                reminderEnabled: [],
                workflowEnabled: [],
                apiEnabled: []
            }),
            activityConfigData: this.formBuilder.group({
                wasteTypes: [[], Validators.required],
            }),
            activityConfigSource: this.formBuilder.group({
                sourceID: [, Validators.required],
                sourceTypeID: null,
            })

        });
        if (this.origin == 'ad-hoc') { this.configNameAC.disable(); }
    }

    async getSupplierByType() {
        this.supplierList = await this.supplierService.getSupplierByType(this.currentOrgID, SupplierTypeKeyIDEnum.WASTE_DISPOSAL_AND_TREATMENT_SUPPLIER);
        if(this.supplierList) {
            this.activityConfigSourceAC.get('sourceTypeID').patchValue(this.supplierList[0]['sourceTypeID']);
        }
    }

    async getAllWasteTypes() {
        this.wasteTypeList = <WasteTypeM[]>await this.wasteGeneratedService.getAllWasteTypes(this.activityID);
        this.wasteTypeSerarch.entityArr = this.wasteTypeList;
        this.wasteTypeSerarch.createSubscription();
    }

    emitFormData() {
        if (this.formGroup.valid) {
            this.formDataEvent.emit(this.formGroup.value);
        } else {
            this.formGroup.markAllAsTouched();
        }
    }

    isValid = () => { return !this.activityConfigFG.invalid; }

    isValidForm(): boolean {
        if (this.activityConfigFG.invalid) {
            this.activityConfigFG.markAllAsTouched();
            return false;
        }

        this.configuration = {};
        this.configuration = JSON.parse(JSON.stringify(this.activityConfigFG.getRawValue()));
        this.configuration['activityConfigSource']['sourceID'] = [this.configuration['activityConfigSource']['sourceID']];
        // this.configuration['activityConfigSource']['sourceTypeID'] = this.supplierList[0].sourceTypeID;
        return true;
    }

    activityConfigValidity() {
        this.activityConfigFG.valueChanges.subscribe(() => this.validity.emit(!this.activityConfigFG.invalid));
    }

    readOnlyForm() {
        this.activityConfigFG.disable();
    }

    patchConfiguration(configuration: any) {
        this.activityConfigFG.valueChanges.subscribe(() => {
            this.isEqual.next(isEqual(this.initialObject, this.activityConfigFG.getRawValue()));
        });

        let activityConfig = (configuration['activityConfig'] != null ? configuration['activityConfig'] : null);
        let activityConfigData = configuration['activityConfigData'];
        let activityConfigSource = configuration['activityConfigSource'];

        if (activityConfig != null) {
            this.activityConfigAC.patchValue({
                configName: activityConfig['configName'],
            });
        } else {
            this.readOnlyForm();
        }
        this.activityConfigDataAC.patchValue({
            wasteTypes: activityConfigData['wasteTypes'],
        })

        this.activityConfigSourceAC.patchValue({
            sourceID: activityConfigSource['sourceID'][0],
            sourceTypeID: activityConfigSource['sourceTypeID']
        });

        this.isEqual.next(true);
        this.initialObject = this.activityConfigFG.value;
    }

    get getConfigJson() {
        this.configuration = {};
        this.configuration = JSON.parse(JSON.stringify(this.activityConfigFG.value));
        this.configuration['activityConfigSource']['sourceID'] = [this.configuration['activityConfigSource']['sourceID']];
        return this.configuration;
    }

    get activityConfigAC() {
        return this.activityConfigFG.get('activityConfig') as AbstractControl;
    }

    get activityConfigSourceAC(): AbstractControl {
        return this.activityConfigFG.get('activityConfigSource') as AbstractControl;
    }

    get configNameAC() {
        return this.activityConfigAC.get('configName') as AbstractControl;
    }
    get activityConfigDataAC(): AbstractControl {
        return this.activityConfigFG.get('activityConfigData') as AbstractControl;
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.activityConfigFG.get(control).hasError(error);
    }
}

