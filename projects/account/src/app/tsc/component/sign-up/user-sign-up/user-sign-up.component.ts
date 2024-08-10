import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {
    Router,
    ActivatedRoute
} from '@angular/router';

import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
    AbstractControlOptions,
} from '@angular/forms';

import {
    Subject,
    ReplaySubject
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { PASSWORD_CONSTANT } from '@Account/constants/password.constants';

import { LocationUtility } from '@Account/service/location.utility';

import { MatDialog } from '@angular/material/dialog';
import { CropProfilePicDialog } from './dialog/crop-profile-image/crop-profileImg-dialog.component';

import { CustomValidators } from '@Account/service/custom-validator.service';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import { SignUpController } from '@Account/controller/sign-up.controller';

// library
import {
    GENDER_CONSTANT,
    CountryM,
    ResponseM,
    InvalidForm,
    MatSelectSearchService,
    MATERIAL_CONSTANT,
    COMMON_CONSTANT, 
    MaterialFormFieldAppearance
} from '@library/tsc-common';

import { CountryService } from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';
// /library

@Component({
    selector: 'app-user-sign-up',
    templateUrl: './user-sign-up.component.html',
    styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent implements OnInit {
    genderM = GENDER_CONSTANT;
    environment = environment;
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    hidePassword = true;
    hideConfirmPass: boolean = true;

    userID: string;
    profileImg;
    profileImgData = null;

    token: string;
    tokenID: string;
    orgID: any;

    user: any;
    userSignUpFG: FormGroup;
    userNewsLetterSub: boolean = true;

    countryM: CountryM[] = [];
    countryFilter: FormControl = new FormControl();
    protected unsubscribeCountryFilter = new Subject<void>();
    public countryFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    matSelectSearchService = new MatSelectSearchService(['countryName']);

    submitted: boolean = false;
    isTCAcceptedValue: boolean;
    isTCAcceptedTouched: boolean;

    separateDialCode = true;
    SearchCountryField = SearchCountryField;
    CountryISO = CountryISO;
    PhoneNumberFormat = PhoneNumberFormat;

    preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.UnitedStates, CountryISO.UnitedKingdom];

    phoneFormControl: FormControl = new FormControl('', Validators.required);

    userCountryCode: any;

    passwordPolicyList = [
        { name: '8 characters' },
        { name: '1 uppercase' },
        { name: '1 lowercase' },
        { name: '1 number' },
        { name: '1 special character (@,#,$,&,*,!)' },
        { name: 'No space' }
    ];

    @ViewChild('imageInput') imageInput: ElementRef;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userSignUpFB: FormBuilder,
        private signUpController: SignUpController,
        private countryService: CountryService,
        private toastrService: ToastrService,
        private locationUtility: LocationUtility,
        private dialog: MatDialog,
    ) { }

    ngOnInit() {
        this.activatedRoute.queryParams
            .subscribe(queryParam => {
                if (queryParam['token'] && queryParam['tokenID']) {
                    this.token = queryParam.token;
                    this.tokenID = queryParam.tokenID;
                    this.orgID = queryParam['orgID'];

                    this.tokenValidate();
                } else {
                    this.router.navigate(['login']);
                }
            });
        this.getCountry();
        this.getUserInfo();
        this.userSignUpInit();
    }

    async getUserInfo() {
        this.userCountryCode = await this.locationUtility.getUserInfo();
    }

    ngAfterViewInit() {
        this.userSignUpFG.valueChanges.subscribe(() => {
            this.isTCAcceptedValue = this.userSignUpFG.controls['isTCAccepted'].value;
            this.isTCAcceptedTouched = this.userSignUpFG.controls['isTCAccepted'].touched;
        });
    }

    userSignUpInit() {
        this.userSignUpFG = this.userSignUpFB.group({
            firstName: [, [Validators.required]],
            lastName: [],
            gender: [],
            countryCode: [, [Validators.required]],
            contactNumber: [, [Validators.required]],
            password: ['', [Validators.required, Validators.pattern(PASSWORD_CONSTANT.pattern), Validators.minLength(8)]],
            confirmPassword: ['', Validators.required],
            newsLetterSub: [true, [Validators.required]],
            isTCAccepted: [, Validators.requiredTrue],
        },
            { validator: CustomValidators.confirmPassword('password', 'confirmPassword') } as AbstractControlOptions);

        // Subscribe to the valueChanges of phoneFormControl
        this.phoneFormControl.valueChanges.subscribe((value) => {
            if (value) {
                // Extract country code and number from the phoneFormControl value
                const countryCode = value.countryCode;
                const number = value.number;

                // Set the values in the userSignUpFG controls
                this.userSignUpFG.get('countryCode').setValue(countryCode);
                this.userSignUpFG.get('contactNumber').setValue(number);
            }
        });
    }

    isPasswordPolicyMatch(policy: any): boolean {
        const newPassword = this.userSignUpFG.get('password').value;

        if (policy.name === '1 uppercase') {
            return /[A-Z]/.test(newPassword);
        } else if (policy.name === '1 lowercase') {
            return /[a-z]/.test(newPassword);
        } else if (policy.name === '1 number') {
            return /\d/.test(newPassword);
        } else if (policy.name === '1 special character (@,#,$,&,*,!)') {
            return /[@#$&*!]/.test(newPassword);
        } else if (policy.name === '8 characters') {
            return newPassword.length >= 8;
        } else if (policy.name === 'No space') {
            return !/\s/.test(newPassword);
        }

        return false;
    }

    async getCountry() {
        this.countryM = <CountryM[]>await this.countryService.getCountry();

        this.countryFiltered.next(this.countryM.slice());
        this.countryFilter.valueChanges
            .pipe(takeUntil(this.unsubscribeCountryFilter)).subscribe(async () => {
                this.countryFiltered = await this.matSelectSearchService.filterMultipleValue(this.countryM, this.countryFilter.value, ['countryName']);
            });
    }

    tokenValidate() {
        this.signUpController.tokenValidate(this.token, this.tokenID)
            .subscribe((tokenValidateRes: ResponseM) => {
                if (tokenValidateRes['status'] !== 'success') {
                    this.router.navigate(['link-expired']);
                }
            });
    }

    fileUploadBtn(controlName) {
        document.getElementById(controlName).click();
    }

    onFileChange(event, formControl) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];

            const reader = new FileReader();

            if (formControl == 'profileImg') {
                this.profileImgData = file;
            }

            reader.readAsDataURL(file);
            this.viewUpdateProfilePicture(event);
        }
    }

    toFormData() {
        const formData = new FormData();

        formData.append('profileImg', this.profileImgData);
        let signUp = this.userSignUpFG.value;
        delete signUp.isTCAccepted;
        formData.append('payload', JSON.stringify(signUp));
        return formData;
    }

    userSignUp() {
        this.submitted = true;

        if (this.userSignUpFG.invalid || this.phoneFormControl.invalid) {
            console.log('invalid form - ', this.userSignUpFG, this.phoneFormControl);
            this.phoneFormControl.markAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.signUpController.userSignUp(this.tokenID, this.orgID, this.toFormData())
            .subscribe((response: ResponseM) => {
                let toast = this.toastrService.getToastStatus(response['status']);
                this.toastrService.openToast(toast.title, response['message'], toast.color);
                this.router.navigate(['login'], { queryParams: { userSignUp: 'success' } });
            });
    }

    viewUpdateProfilePicture(fileEvent) {
        const dialogRef = this.dialog.open(CropProfilePicDialog, {
            data: {
                fileEvent: fileEvent
            },
            minWidth: '350px',
        });

        dialogRef.afterClosed()
            .subscribe(result => {
                if (result == 'image_load_error') {
                    this.profileImgData = null;
                } else if (result) {
                    this.profileImg = result['croppedImage'];
                    this.profileImgData = result['imageFile']
                } else {
                    // TO DO
                }
                this.imageInput.nativeElement.value = null;
            });
    }

    public errorHandling = (control: string, error: string) => {
        return this.userSignUpFG.controls[control].hasError(error);
    }

    ngOnDestroy() {
        this.unsubscribeCountryFilter.next();
        this.unsubscribeCountryFilter.complete();
    }
}
