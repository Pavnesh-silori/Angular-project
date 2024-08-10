import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { MaterialFormFieldAppearance, TimeZoneM } from '@library/tsc-common';
import { ToastrService, } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { FacilityController } from '@Admin/controller/facility.controller';

import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import {
    Subject,
    ReplaySubject
} from 'rxjs';

import { takeUntil } from 'rxjs/operators';

import {
    StateM,
    CountryM,
    ResponseM,
    MatSelectSearchService,
    CountryService,
    StateService,
    InvalidForm,
    COMMON_CONSTANT
    , TimeZoneService,
} from '@library/tsc-common';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styles: [
    ]
})

export class CreateComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    createFacilityFG: FormGroup;

    rootOrgID: any;

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

    constructor(
        private toastrService: ToastrService,
        private timeZoneService: TimeZoneService,
        private countryService: CountryService,
        private stateService: StateService,
        private storageService: StorageService,
        private facilityController: FacilityController,
        private createFacilityFB: FormBuilder,
        private router: Router,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');

        this.createFacilityInit();
        this.getCountry();
        this.getTimeZone();
    }

    createFacilityInit() {
        this.createFacilityFG = this.createFacilityFB.group({
            name: ['', [Validators.required]],
            timeZoneID: [''],
            address1: ['', [Validators.required]],
            countryCode: [, Validators.required],
            stateCode: ['', [Validators.required]],
            city: ['', [Validators.required]],
            zipCode: [, [Validators.required, Validators.pattern(COMMON_CONSTANT.ZIPCODE_PATTERN)]],
        });
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

    createFacility() {

        if (this.createFacilityFG.invalid) {
            this.createFacilityFG.markAllAsTouched();
            this.toastrService.openToast("Error", InvalidForm.INVALID_FORM_MESSAGE, "error");
            return;
        }
        this.facilityController.createFacility(this.rootOrgID, this.createFacilityFG.value)
            .subscribe((facilityRes: ResponseM) => {
                let toast = this.toastrService.getToastStatus(facilityRes['status']);
                this.toastrService.openToast(toast['title'], facilityRes['message'], toast['color']);

                this.router.navigate(['/facility/page'])
            },
                error => {
                    console.log('error in createFacility - ', error);
                });
    }

    cancelButtonAction() {
        this.location.back();
    }

    public errorHandling = (control: string, error: string) => {
        return this.createFacilityFG.controls[control].hasError(error);
    }

}
