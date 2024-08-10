import { Component, OnInit, AfterViewInit } from '@angular/core';

import {
    Router,
    ActivatedRoute,
} from '@angular/router';

import {
    FormBuilder,
    FormGroup,
    Validators,
    FormControl,
} from '@angular/forms';

import {
    Subject,
    ReplaySubject,
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LocationUtility } from '@Account/service/location.utility';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import { SignUpController } from '@Account/controller/sign-up.controller';

// library
import {
    COMMON_CONSTANT,
    CountryM,
    InvalidForm,
    MATERIAL_CONSTANT,
    MatSelectSearchService,
    MaterialFormFieldAppearance
} from '@library/tsc-common';

import { CountryService } from '@library/tsc-common';
import { ApplicationKeyID } from '@library/application-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
// /library

@Component({
    selector: 'app-org-sign-up',
    templateUrl: './org-sign-up.component.html',
    styleUrls: ['./org-sign-up.component.scss']
})

export class OrgSignUpComponent implements OnInit, AfterViewInit {
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    imageSrc: string = '/assets/images/sign-up-02.png';
    applicationKeyID: string = '';
    countryM: CountryM[] = [];
    signUpFG: FormGroup;

    submitted: boolean = false;
    isTCAcceptedValue: boolean;
    isTCAcceptedTouched: boolean;

    countryFilterFC: FormControl = new FormControl();
    countryFilterUnsubscribe = new Subject<void>();
    countryFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    separateDialCode = true;
    SearchCountryField = SearchCountryField;
    CountryISO = CountryISO;
    PhoneNumberFormat = PhoneNumberFormat;
    preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.UnitedStates, CountryISO.UnitedKingdom, CountryISO.UnitedArabEmirates];

    phoneFormControl: FormControl = new FormControl('', Validators.required);

    userCountryCode: any;
    source: string = '';

    matSelectSearchService = new MatSelectSearchService(['countryName']);

    constructor(
        protected router: Router,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private toastrService: ToastrService,
        private countryService: CountryService,
        private signUpController: SignUpController,
        private locationUtility: LocationUtility,
    ) { }

    ngOnInit(): void {

        this.getUserInfo();

        this.activatedRoute.data.subscribe(data => {
            this.applicationKeyID = data.applicationKeyID;

            if (this.applicationKeyID == ApplicationKeyID.NETZERO_KEY_ID 
                || this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID 
                || this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID 
                || this.applicationKeyID == ApplicationKeyID.ENVIRO_KEY_ID) {
                this.getCountry();
                this.signUpFGInit();
            } else {
                this.toastrService.openToast('Error', 'Invalid sign-up link', 'error');
                this.router.navigate(['login']);
            }
        });

        this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (queryParams['source']) {
                this.source = queryParams['source'];
            }
        });
    }

    async getUserInfo() {
        this.userCountryCode = await this.locationUtility.getUserInfo();
    }

    ngAfterViewInit() {
        this.signUpFG.valueChanges.subscribe(() => {
            this.isTCAcceptedValue = this.signUpFG.controls['isTCAccepted'].value;
            this.isTCAcceptedTouched = this.signUpFG.controls['isTCAccepted'].touched;
        });
    }

    signUpFGInit() {
        this.signUpFG = this.formBuilder.group({
            orgName: [, Validators.required],
            firstName: [, Validators.required],
            lastName: [],
            email: [, [Validators.required, Validators.pattern(COMMON_CONSTANT.EMAIL_PATTERN)]],
            contactCountryCode: [, Validators.required],
            contactNumber: [, Validators.required],
            applicationKeyID: [this.applicationKeyID],
            isTCAccepted: [, Validators.requiredTrue]
        });

        this.countryCode();
    }

    countryCode() {
        // Subscribe to the valueChanges of phoneFormControl
        this.phoneFormControl.valueChanges.subscribe((value) => {
            if (value) {
                // Extract country code and number from the phoneFormControl value
                const countryCode = value.countryCode;
                const number = value.number;

                // Set the values in the userSignUpFG controls
                this.signUpFG.get('contactCountryCode').setValue(countryCode);
                this.signUpFG.get('contactNumber').setValue(number);
            }
        });
    }

    async getCountry() {
        this.countryM = <CountryM[]>await this.countryService.getCountry();

        // ngx mat select search
        this.countryFiltered.next(this.countryM.slice());
        this.countryFilterFC.valueChanges
            .pipe(takeUntil(this.countryFilterUnsubscribe)).subscribe(async () => {
                this.countryFiltered = await this.matSelectSearchService.filterMultipleValue(this.countryM, this.countryFilterFC.value, ['countryName']);
            });
    }

    singUpSubmit() {
        this.submitted = true;

        if (this.signUpFG.invalid || this.phoneFormControl.invalid) {
            console.warn('invalid form -', this.signUpFG);
            this.phoneFormControl.markAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.signUpController.orgSignUp(this.signUpFG.getRawValue(), this.source)
            .subscribe((res: any) => {
                if (res.response.isGating) {
                    this.router.navigate([`/sign-up/netzero/successful`]);
                } else {
                    this.router.navigate([`/sign-up/netzero/successful-to-login`]);
                }
            }, error => {
                console.error('error in singUpSubmit -', error);
                this.toastrService.openToast(error.error.title, error.error.message, error.error.result);
            });
    }

    errorHandling = (group: string, control: string, error: string) => {
        return this[group].controls[control].hasError(error);
    }

    ngOnDestroy() {
        this.countryFilterUnsubscribe.next();
        this.countryFilterUnsubscribe.complete();
    }

}
