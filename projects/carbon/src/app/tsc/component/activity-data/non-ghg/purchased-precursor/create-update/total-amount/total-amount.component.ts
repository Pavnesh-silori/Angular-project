import { Component, ElementRef, Input, OnInit, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import * as moment from 'moment';
import { isEqual } from "lodash";
import { Subscription } from 'rxjs';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import { CurrencyM } from '@carbon/model/currency.model';
import { UNLCodeM } from '@carbon/model/un-location-code.model';
import { ProductAndService, ProductAndServiceM } from '@netzero/model/product-service.model';

import { CarbonDocumentController } from '@carbon/controller/document.controller';
import { ProductAndServiceController } from '@netzero/controller/product-and-service.controller';

import { CurrencyService } from '@carbon/service/currency.service';
import { UNLocationCodeService } from '@carbon/service/un-location-code.service';

//tsc-library
import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
import { DateFormatEnum, DateInputTypeEnum, DateService } from '@library/date';
import {
    COMMON_CONSTANT,
    CountryM,
    CountryService,
    FormErrorEnum,
    MatSelectSearchService,
    MaterialFormFieldAppearance,
    NocFileUploadEnum,
    TypeConfirmationDialog
} from '@library/tsc-common';
// /tsc-library
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
    sourceName: any;
    supplierName: any;

    dateInputSub: Subscription;
    fileInputLoadSub: Subscription;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    formErrorEnum = FormErrorEnum;
    dateInputTypeEnum = DateInputTypeEnum;
    DateFormatEnum = DateFormatEnum;

    COMMON_CONSTANT = COMMON_CONSTANT;

    countryM: CountryM[] = [];
    countryFiltered: MatSelectSearchService = new MatSelectSearchService(['countryName']);

    unlCodeM: UNLCodeM[] = [];
    unlCodeFiltered: MatSelectSearchService = new MatSelectSearchService(['name']);

    startDate: any;
    endDate: any;

    standardPRList: any[] =[];
    haveStandardName: boolean = false;
    productionRouteSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    units: any;
    unitFiltered: MatSelectSearchService = new MatSelectSearchService(['name']);

    quantityUnitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    currencyList: CurrencyM[] = [];
    currencyTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['currencyName']);

    templateFileSrc: string;
    billFile: File = null;
    billFileName: string;
    fileInputArr: ElementRef[];
    file: any;

    isEqual: boolean = true;
    initialObject: any;

    source: ProductAndServiceM = new ProductAndService();
    sourceID: number;

    showSpecificParameter: boolean = false;
    parentKeyID: any;
    aggregatedGoodFilterList: any;
    aggregatedGoodsDataControlList: any[] = [
        {
            "parentKeyID": "Calcined clay",
            "type": "radio",
            "keyID": "Whether or not the clay is calcined."
        },
        {
            "parentKeyID": "Cement",
            "type": "number",
            "keyID": "Mass ratio of tonnes cement clinker consumed per produced tonne of cement (clinker to cement ratio expressed in per cent)."
        },
        {
            "parentKeyID": "Urea",
            "type": "number",
            "keyID": "Mass % urea contained."
        },
        {
            "parentKeyID": "Urea",
            "type": "number",
            "keyID": "mass % N contained."
        },
        {
            "parentKeyID": "Nitric acid",
            "type": "number",
            "keyID": "Concentration (mass %)."
        },
        {
            "parentKeyID": "Ammonia",
            "type": "text",
            "keyID": "Concentration, if hydrous solution."
        },
        {
            "parentKeyID": "Mixed fertilisers",
            "type": "text",
            "keyID": "content of N as ammonium (NH4)"
        },
        {
            "parentKeyID": "Mixed fertilisers",
            "type": "text",
            "keyID": "content of N as nitrate (NO3)"
        },
        {
            "parentKeyID": "Mixed fertilisers",
            "type": "text",
            "keyID": "content of N as urea"
        },
        {
            "parentKeyID": "Mixed fertilisers",
            "type": "text",
            "keyID": "content of N in other (organic) forms."
        },
        {
            "parentKeyID": "Pig iron",
            "type": "text",
            "keyID": "The main reducing agent used."
        },
        {
            "parentKeyID": "Pig iron",
            "type": "number",
            "keyID": " Mass % of Mn."
        },
        {
            "parentKeyID": "Pig iron",
            "type": "number",
            "keyID": " Mass % of Cr."
        },
        {
            "parentKeyID": "Pig iron",
            "type": "number",
            "keyID": " Mass % of Ni."
        },
        {
            "parentKeyID": "Pig iron",
            "type": "number",
            "keyID": " Mass % of total of other alloy elements."
        },
        {
            "parentKeyID": "FeMn",
            "type": "number",
            "keyID": "Mass % of Mn."
        },
        {
            "parentKeyID": "FeMn",
            "type": "number",
            "keyID": "Mass % of carbon."
        },
        {
            "parentKeyID": "FeCr",
            "type": "number",
            "keyID": "Mass % of Cr."
        },
        {
            "parentKeyID": "FeCr",
            "type": "number",
            "keyID": "Mass % of carbon."
        },
        {
            "parentKeyID": "FeNi",
            "type": "number",
            "keyID": "Mass % of Ni."
        },
        {
            "parentKeyID": "FeNi",
            "type": "number",
            "keyID": "Mass % of carbon"
        },
        {
            "parentKeyID": "DRI",
            "type": "text",
            "keyID": "The main reducing agent used."
        },
        {
            "parentKeyID": "DRI",
            "type": "number",
            "keyID": "Mass % of Mn."
        },
        {
            "parentKeyID": "DRI",
            "type": "number",
            "keyID": "Mass % of Cr."
        },
        {
            "parentKeyID": "DRI",
            "type": "number",
            "keyID": "Mass % of Ni."
        },
        {
            "parentKeyID": "DRI",
            "type": "number",
            "keyID": "Mass % of total of other alloy elements."
        },
        {
            "parentKeyID": "Crude steel",
            "type": "text",
            "keyID": "The main reducing agent of the precursor, if known."
        },
        {
            "parentKeyID": "Crude steel",
            "type": "number",
            "keyID": "Mass % of Mn."
        },
        {
            "parentKeyID": "Crude steel",
            "type": "number",
            "keyID": "Mass % of Cr."
        },
        {
            "parentKeyID": "Crude steel",
            "type": "number",
            "keyID": "Mass % of Ni."
        },
        {
            "parentKeyID": "Crude steel",
            "type": "number",
            "keyID": "Mass % of total of other alloy elements."
        },
        {
            "parentKeyID": "Crude steel",
            "type": "number",
            "keyID": "Tonnes scrap used for producing 1 t crude steel."
        },
        {
            "parentKeyID": "Crude steel",
            "type": "number",
            "keyID": "% of scrap that is pre-consumer scrap."
        },
        {
            "parentKeyID": "Iron or steel products",
            "type": "text",
            "keyID": "The main reducing agent used in precursor production, if known."
        },
        {
            "parentKeyID": "Iron or steel products",
            "type": "number",
            "keyID": "Mass % of Mn."
        },
        {
            "parentKeyID": "Iron or steel products",
            "type": "number",
            "keyID": "Mass % of Cr."
        },
        {
            "parentKeyID": "Iron or steel products",
            "type": "number",
            "keyID": "Mass % of Ni."
        },
        {
            "parentKeyID": "Iron or steel products",
            "type": "number",
            "keyID": "Mass % of total of other alloy elements."
        },
        {
            "parentKeyID": "Iron or steel products",
            "type": "number",
            "keyID": "Mass % of materials contained which are not iron or steel if their mass is more than 1 % to 5 % of the total goods’ mass."
        },
        {
            "parentKeyID": "Iron or steel products",
            "type": "number",
            "keyID": "Tonnes scrap used for producing 1 t of the product."
        },
        {
            "parentKeyID": "Iron or steel products",
            "type": "number",
            "keyID": "% of scrap that is pre-consumer scrap"
        },

        {
            "parentKeyID": "Unwrought aluminium",
            "type": "number",
            "keyID": "Tonnes scrap used for producing 1 t of the product."
        },
        {
            "parentKeyID": "Unwrought aluminium",
            "type": "number",
            "keyID": "% of scrap that is pre-consumer scrap."
        },
        {
            "parentKeyID": "Unwrought aluminium",
            "type": "number",
            "keyID": "If the total content of elements other than aluminium exceeds 1 %, the total percentage of such elements."
        },
        {
            "parentKeyID": "Aluminium products",
            "type": "number",
            "keyID": "Tonnes scrap used for producing 1 t of the product."
        },
        {
            "parentKeyID": "Aluminium products",
            "type": "number",
            "keyID": "% of scrap that is pre-consumer scrap."
        },
        {
            "parentKeyID": "Aluminium products",
            "type": "number",
            "keyID": "If the total content of elements other than aluminium exceeds 1 %, the total percentage of such elements."
        }
    ];

    @ViewChildren('customDateInput') customDateInputs: QueryList<any>;
    @ViewChildren('fileInput') fileInput: QueryList<ElementRef>;

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        private carbonDocumentController: CarbonDocumentController,
        private productAndServiceController: ProductAndServiceController,
        private unlCodeservice: UNLocationCodeService,
        private currencyService: CurrencyService,
        private countryService: CountryService,
        storageService: StorageService,
        private dateService: DateService,
        private unitService: UnitService,
        private toastrService: ToastrService
    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');
    }

    ngOnInit(): void {
        this.supplierName = this.activityConfig.activityConfigData.supplier.name;
        this.templateFileSrc = "/assets/files/cbam-communication-template.xlsx";
        this.getCountry();
        this.getUnit();
        this.getCurrency();
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

    ngAfterViewInit() {
        this.fileInputLoadSub = this.fileInput.changes.subscribe(() => this.updateFileInputArray());
        this.updateFileInputArray();

        if (this.action == 'update') {
            this.activityData = this.activityConfig.activityData;
            this.getUnLCode(this.activityData.country.countryCode);
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
                countryCode: [, Validators.required],
                cordinates: this.formBuilder.group({
                    latitude: [, Validators.required],
                    longitude: [, Validators.required]
                }),
                unlCode: [, Validators.required],
                identifier: [],
                address: [, Validators.required],
                standardPRID: [],
                name: [, Validators.required],
                startDate: [, Validators.required],
                endDate: [, Validators.required],
                quantity: [, [Validators.required, Validators.min(0)]],
                quantityUnitID: [, Validators.required],
                precursorDirectEmission: [, [Validators.required, Validators.required]],
                precursorDirectEmissionUnitID: [, Validators.required],
                precursorIndirectEmission: [, [Validators.required, Validators.min]],
                precursorIndirectEmissionUnitID: [, Validators.required],
                dueCarbonPrice: [, Validators.required],
                currencyID: [, Validators.required],
                dueCarbonPriceEmission: [, [Validators.required, Validators.min]],
                dueCarbonPriceEmissionUnitID: [, Validators.required],
                dueCarbonPriceValue: [, [Validators.required, Validators.min]],
                rebate: [, [Validators.required, Validators.min]],
                dataCollectionMethodID: [this.defaultDataCollectionMethodID, Validators.required],
                activityDataID: [],
                activityStdID: [this.activityID, Validators.required],
                docID: [],
                docName: [],
                docPath: [],
                docSize: []
            })
        );
        this.sourceID = this.activityConfig.activityConfigSource[0].sourceID[0];
        this.getSource();
    }

    get standardPRIDAC(): AbstractControl {
        return this.activityDataFA.at(0).get('standardPRID') as AbstractControl;
    }

    get nameAC(): AbstractControl {
        return this.activityDataFA.at(0).get('name') as AbstractControl;
    }

    pathFormData() {
        this.activityDataFA.push(
            this.formBuilder.group({
                recordID: this.activityData.id,
                sourceTypeID: this.activityData.sourceType.id,
                sourceID: this.activityData.source.id,
                countryCode: this.activityData.country.countryCode,
                unlCode: this.activityData.unlCode.locationCode,
                cordinates: this.formBuilder.group({
                    latitude: this.activityData.cordinates.latitude,
                    longitude: this.activityData.cordinates.longitude
                }),
                identifier: this.activityData.identifier,
                address: this.activityData.address,
                standardPRID: null,
                name: this.activityData.name,
                startDate: this.activityData.startDate,
                endDate: this.activityData.endDate,
                quantity: [this.activityData.quantity, [Validators.min(0)]],
                quantityUnitID: [this.activityData.quantityUnit.unitID],
                precursorDirectEmission: this.activityData.precursorDirectEmission,
                precursorDirectEmissionUnitID: this.activityData.precursorDirectEmissionUnit.unitID,
                precursorIndirectEmission: this.activityData.precursorIndirectEmission,
                precursorIndirectEmissionUnitID: this.activityData.precursorIndirectEmissionUnit.unitID,
                dueCarbonPrice: this.activityData.dueCarbonPrice,
                currencyID: this.activityData.currency?.id,
                dueCarbonPriceEmission: this.activityData.dueCarbonPriceEmission,
                dueCarbonPriceEmissionUnitID: this.activityData.dueCarbonPriceEmissionUnit?.unitID,
                dueCarbonPriceValue: this.activityData.dueCarbonPriceValue,
                rebate: this.activityData.rebate,
                dataCollectionMethodID: this.defaultDataCollectionMethodID,
                activityDataID: this.activityData.id,
                activityID: this.activityID,
                docID: this.activityData.file ? this.activityData.file.id : null,
                docName: this.activityData.file ? this.activityData.file.name : null,
                docPath: this.activityData.file ? this.activityData.file.path : null,
                docSize: []
            })
        );

        this.sourceID = this.activityData.source.id;
        this.sourceName = this.activityData.source.name;
        this.activityDataFA.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.initialObject, this.activityDataFA.value)
        });
        this.initialObject = this.activityDataFA.value;
        this.getSource();
    }

    getSource() {
        this.productAndServiceController.getProductByID(this.currentOrgID, this.sourceID).subscribe(res => {
            this.source = res;
            this.standardPRList = res['standardProductionRouteList'];

            if (this.standardPRList != null && this.standardPRList.length != 0) {
                this.haveStandardName = true;
                this.productionRouteSearchUtil.filterUnsubscribe.next();

                this.productionRouteSearchUtil.entityArr = this.standardPRList;
                this.productionRouteSearchUtil.createSubscription();
            } else {
                this.haveStandardName = false;
                this.productionRouteSearchUtil.entityArr = null;
                this.productionRouteSearchUtil.filterUnsubscribe.next();

                if (!(this.action == 'update')) this.nameAC.reset();
                this.nameAC.enable();
            }
            this.standardPRIDAC.reset(null, { emitEvent: false });

            this.standardPRIDAC.valueChanges.subscribe((id) => {
                const pr = this.standardPRList.find(pr => pr.id == id);

                if (pr ?? false) {
                    this.nameAC.patchValue(pr.name);
                }
            });

            this.aggregatedGoodFilterList = this.aggregatedGoodsDataControlList.filter(a => a.parentKeyID == this.source.aggregatedCode);
            if (this.aggregatedGoodFilterList.length > 0) {
                this.parentKeyID = this.source.aggregatedCode;
                this.showSpecificParameter = true;
                this.createFormGroup();
            }
        }, error => {
            console.log('Error in getProductByID', error);
        })
    }

    createFormGroup() {
        let formArray: FormArray = new FormArray([]);
        if (this.action == 'create') {
            this.aggregatedGoodFilterList.forEach(ag => {
                const newSubGroup = new FormGroup({
                    keyID: new FormControl(ag.keyID),
                    type: new FormControl(ag.type),
                    value: new FormControl(null, [Validators.required]),
                    unitID: new FormControl(null),
                });
                formArray.push(newSubGroup);
            });
        }
        else {

            this.aggregatedGoodFilterList.forEach(ag => {
                const agPatchValue = this.activityData['sectorSpecificParameter'].find(item => item.keyID == ag.keyID);
                const newSubGroup = new FormGroup({
                    keyID: new FormControl(ag.keyID),
                    type: new FormControl(ag.type),
                    value: new FormControl(agPatchValue.value, [Validators.required]),
                    unitID: new FormControl(null),
                });
                formArray.push(newSubGroup);
            });
        }
        const activityDataDetailsArray = this.activityDataFG.get('activityDataDetails') as FormArray;
        const firstGroup = activityDataDetailsArray.at(0) as FormGroup;

        firstGroup.addControl('sectorSpecificParameter', formArray);
    }

    getAggregatedArray(group: FormGroup) {
        return group.get('sectorSpecificParameter') as FormArray;
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
        });
    }

    async getCountry() {
        this.countryM = <CountryM[]>await this.countryService.getCountry();
        this.countryFiltered.entityArr = this.countryM;
        this.countryFiltered.createSubscription();
    }

    async getUnLCode(countryCode) {
        this.unlCodeM = <UNLCodeM[]>await this.unlCodeservice.getUNLCode(countryCode);
        this.unlCodeFiltered.entityArr = this.unlCodeM;
        this.unlCodeFiltered.createSubscription();
    }

    onCountrySelectionChange(event: any) {
        this.activityDataFA.controls.forEach(group => {
            group.get('unlCode').reset();
        });

        const selectedCountryCode = event.value;
        const selectedCountry = this.countryM.find(country => country.countryCode === selectedCountryCode);
        this.getUnLCode(selectedCountry.countryCode);

        this.activityDataFA.controls.forEach(group => {
            group.get('cordinates.longitude').reset();
            group.get('cordinates.latitude').reset();
        });
    }

    getCordinates(locationCode) {
        this.unlCodeM.filter(res => {
            if (res.locationCode == locationCode) {
                this.activityDataFA.controls.forEach(group => {
                    group.get('cordinates.longitude').patchValue(res.longitude);
                    group.get('cordinates.latitude').patchValue(res.latitude);
                });
            }
        });
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


    async getUnit() {
        this.units = await this.unitService.getUnit([]);
        const emissionUnits = this.unitService.filterUnit(this.units, [`${UnitTypeKeyID.EQUIVALENT_EMISSION}`]);
        this.unitFiltered.entityArr = emissionUnits;
        this.unitFiltered.createSubscription();

        const quantityUnits = this.unitService.filterUnit(this.units, [`${UnitTypeKeyID.MASS}`, `${UnitTypeKeyID.VOLUME}`]);
        this.quantityUnitSearchUtil.entityArr = quantityUnits;
        this.quantityUnitSearchUtil.createSubscription();
    }

    alterValidators(index) {
        let formGroup = this.activityDataFA.at(index) as FormGroup;
        if (formGroup.get('dueCarbonPrice').value) {
            this.setValidators(formGroup, ['currencyID', 'dueCarbonPriceEmission', 'dueCarbonPriceEmissionUnitID', 'dueCarbonPriceValue', 'rebate'])
        } else {
            this.clearValidators(formGroup, ['currencyID', 'dueCarbonPriceEmission', 'dueCarbonPriceEmissionUnitID', 'dueCarbonPriceValue', 'rebate'])
        }
        formGroup.updateValueAndValidity({ emitEvent: false });
    }

    setValidators(formGroup: FormGroup, controls: string[]) {
        for (let control of controls) {
            formGroup.get(control).setValidators([Validators.required]);
        }
    }

    clearValidators(formGroup: FormGroup, controls: string[]) {
        for (let control of controls) {
            formGroup.get(control).clearValidators();
            formGroup.get(control).reset();
        }
    }

    async getCurrency() {
        this.currencyList = <CurrencyM[]>await this.currencyService.getCurrency();
        this.currencyTypeSearchUtil.entityArr = this.currencyList;
        this.currencyTypeSearchUtil.createSubscription();
    }

    fileUpload(event, index) {
        let file = event.target.files[0];

        if (file) {
            if (file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                this.toastrService.error("Invalid file type! Please upload file types: .xlxs");
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

        if (this.fileInputArr[index]) {
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
            this.carbonDocumentController.createDocument(this.currentOrgID, formGroup.get('activityDataID').value, ActivityKeyIDEnum.PURCHASED_PRECURSOR,
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

        if (formGroup && formGroup.get(control)) {
            return formGroup.get(control).hasError(error);
        }

        const nestedFormGroup = formGroup.get('cordinates') as FormGroup;
        if (nestedFormGroup && nestedFormGroup.get(control)) {
            return nestedFormGroup.get(control).hasError(error);
        }
    }
}