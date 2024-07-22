import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { UNLCodeM } from '@carbon/model/un-location-code.model';
import { UNLocationCodeService } from '@carbon/service/un-location-code.service';

import { isEqual } from 'lodash';

import {
    CountryISO,
    PhoneNumberFormat,
    SearchCountryField,
} from 'ngx-intl-tel-input';

import { InstallationDetailController } from '@carbon/controller/installation-detail.controller';

//tsc-lib
import {
    CountryM,
    CountryService,
    FormAction,
    FormErrorEnum,
    InvalidForm,
    MatSelectSearchService,
    MaterialFormFieldAppearance
} from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
// /tsc-lib/

@Component({
    selector: 'app-installation-detail',
    templateUrl: './installation-detail.component.html',
    styleUrls: ['./installation-detail.component.scss']
})
export class InstallationDetailComponent implements OnInit {
    FormErrorEnum = FormErrorEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    PhoneNumberFormat = PhoneNumberFormat;
    SearchCountryField = SearchCountryField;

    @Input() runStatus;

    @Output() data: EventEmitter<any> = new EventEmitter<any>();
    @Output() formStatus: EventEmitter<String> = new EventEmitter<String>();

    runID;
    action: any = FormAction.CREATE;
    productionRouteID: any;
    startDate: any;
    endDate: any;

    public readonly streetCharLength: number = 400;

    currentOrgID: any;

    installationDetailFG: FormGroup;

    phoneFormControl: FormControl = new FormControl(null, [Validators.required]);
    installation: any;
    installationID: any
    separateDialCode = true;
    CountryISO = CountryISO;
    isEqual: boolean = true;
    initialObject: any;
    productID: any;

    maxLength = 15;

    countryM: CountryM[] = [];
    countryFiltered: MatSelectSearchService = new MatSelectSearchService(['countryName']);

    unLocationCode: UNLCodeM[] = [];
    unLocationCodeFiltered: MatSelectSearchService = new MatSelectSearchService(['name']);

    preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.UnitedStates, CountryISO.UnitedKingdom];

    currentCountryCode: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private storageService: StorageService,
        private toastrService: ToastrService,
        private countryService: CountryService,
        private uNLocationCodeService: UNLocationCodeService,
        private installationDetailController: InstallationDetailController,
        private router: Router
    ) {
        this.action = this.activatedRoute.snapshot.data['action'];
        this.currentOrgID = this.storageService.getStorage('currentOrgID')
    }

    ngOnInit() {
        this.getCountry();

        this.activatedRoute.queryParams.subscribe(queryParams => {

            this.productID = queryParams.productID
            this.runID = queryParams.runID;
            this.productID = queryParams.productID
            this.startDate = queryParams.startDate;
            this.endDate = queryParams.endDate;
            this.productionRouteID = Number(queryParams.productionRouteID);

            if (this.runID ?? false) {
                this.action = FormAction.UPDATE;
                this.getInstallationByRunID(this.runID);
            } else {
                this.getCurrentCountry();
            }
            
            this.installationDetailFGInit();
        });
    }

    getCoordinates(locationCode) {
        this.unLocationCode.filter(res => {
            if (res.locationCode == locationCode) {
                this.installationDetailFG.get('coordinates.longitude').setValue(res.longitude);
                this.installationDetailFG.get('coordinates.latitude').setValue(res.latitude);
            }
        });
    }

    installationDetailFGInit() {
        this.installationDetailFG = this.formBuilder.group({
            name: [, Validators.required],
            street: [, [Validators.required, Validators.maxLength(this.streetCharLength)]],
            prID: [this.productionRouteID],
            periodStartDate: [this.startDate],
            periodEndDate: [this.endDate],
            economicActivity: [],
            postCode: [, Validators.required],
            postBox: [, Validators.required],
            city: [, Validators.required],
            countryCode: [, Validators.required],
            unLocationCode: [, Validators.required],
            representativeName: [],
            email: [, [Validators.required, Validators.email]],
            contactCountryCode: [, Validators.required],
            contactNumber: [, Validators.required],
            runStatus: [],
            coordinates: this.formBuilder.group({
                longitude: [, Validators.required],
                latitude: [, Validators.required],
            }),
        });

        this.phoneFormControl.valueChanges.subscribe((value) => {
            if (value) {
                const number = value.number;
                const countryCode = value.countryCode;
                this.installationDetailFG.get('contactNumber').setValue(number);
                this.installationDetailFG.get('contactCountryCode').setValue(countryCode);
            }
        });
    }

    getInstallationByRunID(runID) {
        this.installationDetailController.getInstallationByRunID(this.currentOrgID, runID).subscribe(res => {
            this.installation = res;
            this.getUnLCode(this.installation.country.code)
            this.patchInstallationDetails();
        })
    }

    patchInstallationDetails() {
        this.installationDetailFG.patchValue({
            name: this.installation.name,
            street: this.installation.street,
            prID: this.installation.prID,
            periodStartDate: this.installation.startDate,
            periodEndDate: this.installation.endDate,
            economicActivity: this.installation.economicActivity,
            postCode: this.installation.postCode,
            postBox: this.installation.postBox,
            city: this.installation.city,
            countryCode: this.installation.country.code,
            unLocationCode: this.installation.location.code,
            representativeName: this.installation.representativeName,
            email: this.installation.emailID,
            contactCountryCode: this.installation.contactCountryCode,
            contactNumber: this.installation.contactNumber,
            runStatus: this.runStatus,
        });

        this.installationDetailFG.get('coordinates').patchValue({
            longitude: this.installation.cordinates.longitude,
            latitude: this.installation.cordinates.latitude,
        })

        this.installationDetailFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.initialObject, this.installationDetailFG.value);
        });

        const contactCountry = this.installation.contactCountry;
        this.phoneFormControl.patchValue({
            countryCode: contactCountry.code,
            number: this.installation.contactNumber,
        });

        this.installationID = this.installation.id;
    }

    async getCountry() {
        this.countryM = <CountryM[]>await this.countryService.getCountry();
        this.countryFiltered.entityArr = this.countryM;
        this.countryFiltered.createSubscription();
    }

    onCountrySelectionChange(event: any) {
        this.installationDetailFG.get('unLocationCode').reset();
        const selectedCountryCode = event.value;
        const selectedCountry = this.countryM.find(country => country.countryCode === selectedCountryCode);
        this.getUnLCode(selectedCountry.countryCode);
        this.installationDetailFG.get('coordinates.longitude').reset();
        this.installationDetailFG.get('coordinates.latitude').reset();
    }

    haveCountry(): boolean {
        return this.installationDetailFG.get('countryCode').value ? true : false;
    }

    async getUnLCode(countryCode) {
        this.unLocationCode = <UNLCodeM[]>await this.uNLocationCodeService.getUNLCode(countryCode);
        this.unLocationCodeFiltered.filterUnsubscribe.next();
        this.unLocationCodeFiltered.entityArr = this.unLocationCode;
        this.unLocationCodeFiltered.createSubscription();
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.installationDetailFG.get(control).hasError(error);
    }

    // isValid = () => { return !this.installationDetailFG.invalid; }

    async onSubmit(runStatus): Promise<boolean> {
        this.installationDetailFG.get('runStatus').setValue(runStatus);
        
        if (this.installationDetailFG.invalid) {
            this.phoneFormControl.markAsTouched();
            this.installationDetailFG.markAllAsTouched();
            console.error("invalid form - ", this.installationDetailFG);
            this.toastrService.error(InvalidForm.INVALID_FORM_MESSAGE);
            return false;
        }

        if (this.action == FormAction.CREATE) {
            let promise = this.installationDetailController.createInstallation(
                this.currentOrgID,
                this.productID,
                this.installationDetailFG.value)
                .toPromise();

            try {
                let s_response = await promise;
                const finalResult = s_response['response'];
                let runID = finalResult.productRunConfig.id;
                this.installationID = finalResult.id;
                this.addQueryParam(runID)

                return true;
            } catch (error) {
                console.error('error in create installation details - ', error);
                return false;
            }
        } else if (this.action == FormAction.UPDATE) {
            let promise = this.installationDetailController.updateInstallation(
                this.currentOrgID,
                this.productID,
                this.installationID,
                this.installationDetailFG.value)
                .toPromise();

            try {
                let s_response = await promise;
                const finalResult = s_response['response'];
                this.installationID = finalResult.id;

                return true;
            } catch (error) {
                console.error('error in update installation details - ', error);
                return false;
            }
        }
    }

    addQueryParam(runID: number) {
        const queryParams = { ...this.activatedRoute.snapshot.queryParams };
        queryParams['runID'] = runID;
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams,
            queryParamsHandling: 'merge'
        });
    }

    charactersRemainingFn = (fg: FormGroup): number => {
        let description = fg.get('street').value;
        if (description) return (this.streetCharLength - description.length);
        else return this.maxLength;
    }

    saveAsDraft(runStatus: any) {

        // Here i remove a validation 

        //     Object.keys(this.installationDetailFG.controls).forEach(key => {
        //         this.installationDetailFG.get(key).clearValidators();
        //         console.log(key);
        //         if(key == 'coordinates') {
        //             console.log(key)
        //             const coordinatesGroup = this.installationDetailFG.get('coordinates') as FormGroup;
        //             coordinatesGroup.get('longitude').clearValidators();
        //             coordinatesGroup.get('latitude').clearValidators();
        //             coordinatesGroup.get('longitude').updateValueAndValidity();
        //             coordinatesGroup.get('latitude').updateValueAndValidity();

        //         }
        //         this.installationDetailFG.get(key).updateValueAndValidity();
        //       });
        // console.log(this.installationDetailFG)          
        //     console.log(runStatus)
        return true;
    }

    // it give error
    async getCurrentCountry() {
        // this.currentCountryCode = <any>await this.countryService.getCurrentCountry();
    }
}
