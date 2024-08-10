import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { isEqual } from "lodash";

import {
    Subject,
    ReplaySubject
} from 'rxjs';

import { takeUntil } from 'rxjs/operators';

//tsc-library
import { ToastrService, ToastrTitle, ToastrColor } from '@library/toastr-service';
import { MatSelectSearchService, StateService, CountryService, MaterialFormFieldAppearance, COMMON_CONSTANT, InvalidForm } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { FacilityService } from '@library/facility-service';
import {
    StateM,
    CountryM,
    ResponseM,
    TimeZoneM,
    TimeZoneService
} from '@library/tsc-common';
import { FacilityM } from '@library/facility-service';
import { FacilityController } from '@Admin/controller/facility.controller';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styles: [
    ]
})
export class EditComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    // month = month;
    month: any;
    rootOrgID: any;
    facilityID: any;
    FacilityM: FacilityM;

    monthFilterFC: FormControl = new FormControl();
    monthFilterUnsubscribe = new Subject<void>();
    monthFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    stateM: StateM[] = [];
    stateFilterFC: FormControl = new FormControl();
    stateFilterUnsubscribe = new Subject<void>();
    stateFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
    stateSearch = new MatSelectSearchService(['name']);

    countryM: CountryM[] = [];
    countryFilterFC: FormControl = new FormControl();
    countryFilterUnsubscribe = new Subject<void>();
    countryFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
    CountrySearch = new MatSelectSearchService(['CountryName']);

    timezoneM: TimeZoneM[] = [];
    timezoneFilterFC: FormControl = new FormControl();
    timezoneFilterUnsubscribe = new Subject<void>();
    timezoneFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    updateFacilityFG: FormGroup;

    initialObject: any;
    isEqual: boolean = true;

    constructor(
        private toastrService: ToastrService,
        private storageService: StorageService,
        private timeZoneService: TimeZoneService,
        private facilityService: FacilityService,
        private activatedRoute: ActivatedRoute,
        private updateFacilityFB: FormBuilder,
        private facilityController: FacilityController,
        private stateService: StateService,
        private countryService: CountryService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');

        this.activatedRoute.params.subscribe((param) => {
            this.facilityID = param['facilityID']
        });
        this.updateFacilityInit();
        this.getFacilityByID();
        this.getCountry();
        this.getTimeZone();
    }

    updateFacilityInit() {
        this.updateFacilityFG = this.updateFacilityFB.group({
            id: [{ value: null, disabled: true }],
            name: ['', [Validators.required]],
            timeZoneID: [, Validators.required],
            address1: ['', [Validators.required]],
            countryCode: [, Validators.required],
            stateCode: ['', [Validators.required]],
            city: ['', [Validators.required]],
            zipCode: [, [Validators.required, Validators.pattern(COMMON_CONSTANT.ZIPCODE_PATTERN)]],
        });
    }

    ngAfterContentInit() {
        // ngx mat select search for month
        this.monthFiltered.next(this.month.slice());
        this.monthFilterFC.valueChanges
            .pipe(takeUntil(this.monthFilterUnsubscribe)).subscribe(async () => {
                this.monthFiltered = await this.stateSearch.filterMultipleValue(this.month, this.monthFilterFC.value, ['name']);
            });

        this.updateFacilityFG.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.updateFacilityFG.value));

    }

    async getFacilityByID() {
        this.FacilityM = <FacilityM>await this.facilityService.getFacilityByID(this.rootOrgID, this.facilityID);
        this.patchFacilityDetails();
    }

    patchFacilityDetails() {
        this.updateFacilityFG.patchValue({
            id: this.FacilityM['id'],
            name: this.FacilityM['name'],
            timeZoneID: this.FacilityM['timeZoneID'],
            address1: this.FacilityM['address1'],
            countryCode: this.FacilityM['countryCode'],
            city: this.FacilityM['city'],
            zipCode: this.FacilityM['zipCode'],
        });

        this.countryChange(this.FacilityM['countryCode']);
        this.updateFacilityFG.patchValue({ 'stateCode': this.FacilityM['stateCode'] });

        this.initialObject = this.updateFacilityFG.value;
        this.isEqual = true;
    }

    async getTimeZone() {
        this.timezoneM = <TimeZoneM[]>await this.timeZoneService.getTimeZone();

        this.timezoneFiltered.next(this.timezoneM.slice());
        this.timezoneFilterFC.valueChanges
            .pipe(takeUntil(this.timezoneFilterUnsubscribe)).subscribe(async () => {
                this.timezoneFiltered = await this.CountrySearch.filterMultipleValue(this.timezoneM, this.timezoneFilterFC.value, ['countryName']);
            });
    }

    async getCountry() {
        this.countryM = <CountryM[]>await this.countryService.getCountry();

        // ngx mat select search
        this.countryFiltered.next(this.countryM.slice());
        this.countryFilterFC.valueChanges
            .pipe(takeUntil(this.countryFilterUnsubscribe)).subscribe(async () => {
                this.countryFiltered = await this.CountrySearch.filterMultipleValue(this.countryM, this.countryFilterFC.value, ['countryName']);
            });
    }

    async countryChange(countryCode) {
        this.stateM = <StateM[]>await this.stateService.getState(countryCode);

        // ngx mat select search
        this.stateFiltered.next(this.stateM.slice());
        this.stateFilterFC.valueChanges
            .pipe(takeUntil(this.stateFilterUnsubscribe)).subscribe(async () => {
                this.stateFiltered = await this.stateSearch.filterMultipleValue(this.stateM, this.stateFilterFC.value, ['name']);
            });
    }

    updateFacility() {
        if (this.isEqual) return;

        if (this.updateFacilityFG.invalid) {
            this.updateFacilityFG.markAllAsTouched();
            this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor);
            return;
        }

        this.facilityController.updateFacility(this.rootOrgID, this.facilityID, this.updateFacilityFG.value)
            .subscribe((updatedOrgRes: ResponseM) => {
                let toast = this.toastrService.getToastStatus(updatedOrgRes['status']);
                this.toastrService.openToast(toast['title'], updatedOrgRes['message'], toast['color']);

                this.cancelButtonAction();
            },
                error => {
                    console.log('error in updateFacility - ', error);
                });
    }

    cancelButtonAction() {
        this.location.back();
    }

    public errorHandling = (control: string, error: string) => {
        return this.updateFacilityFG.controls[control].hasError(error);
    }

}