import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import { UserM } from '@Account/model/user.model';

import { UserController } from '@Account/controller/user.controller';

// import { EnterpriseEvent } from '@EnterpriseNetZero/common/event/enterprise.event';

import { MatDialog } from '@angular/material/dialog';

import { ViewProfilePicDialog } from './dialog/view-profile-pic-dialog/view-update-profileImg-dialog.component';
import { DeleteDialogComponent } from './dialog/delete-dialog/delete-dialog.component';

// library
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { UserService as LibraryUserService, ProfileImg} from '@library/user-service';
import { NetzeroService } from '@library/netzero';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, CountryM, GENDER_CONSTANT, InvalidForm, MaterialFormFieldAppearance } from '@library/tsc-common';
// /library

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    GENDER_CONSTANT = GENDER_CONSTANT;
    ProfileImg = ProfileImg;
    InvalidForm = InvalidForm;
    ButtonLabelEnum = ButtonLabelEnum;

    userID: any;
    userM: UserM;
    countryM: CountryM[] = [];

    updateUserDetailFG: FormGroup;

    separateDialCode = true;
    SearchCountryField = SearchCountryField;
    CountryISO = CountryISO;
    PhoneNumberFormat = PhoneNumberFormat;

    preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.UnitedStates, CountryISO.UnitedKingdom];

    phoneFormControl: FormControl = new FormControl();

    @ViewChild('dpUpdate') profilePicture: ElementRef;

    constructor(
        private updateUserDetailFB: FormBuilder,
        private router: Router,
        private netzeroService: NetzeroService,
        private userController: UserController,
        private toastrService: ToastrService,
        public libraryUserService: LibraryUserService,
        // private enterpriseEvent: EnterpriseEvent,
        private dialog: MatDialog,
        private storageService: StorageService,
    ) { }

    ngOnInit(): void {
        this.userID = this.storageService.getStorage('userID');

        this.updateUserInit();

        this.getCountry();
        this.getUserByID(this.userID);
    }

    updateUserInit() {
        this.updateUserDetailFG = this.updateUserDetailFB.group({
            firstName: [, [Validators.required]],
            lastName: [],
            gender: [],
            countryCode: [],
            contactNumber: [],
        });

        // Subscribe to the valueChanges of phoneFormControl
        this.phoneFormControl.valueChanges.subscribe((value) => {
            if (value) {
                // Extract country code and number from the phoneFormControl value
                const countryCode = value.countryCode;
                const number = value.number;

                // Set the values in the userSignUpFG controls
                this.updateUserDetailFG.get('countryCode').setValue(countryCode);
                this.updateUserDetailFG.get('contactNumber').setValue(number);
            }
        });
    }

    getCountry() {
        // this.netzeroService.getCountry()
        //     .subscribe((countryRes: CountryM[]) => {
        //         this.countryM = countryRes;
        //     },
        //         error => {
        //             console.log('error in getCountry() - ' + error);
        //             this.toastrService.openToast('Error', 'Error in getting country list.', 'error');
        //         });
    }

    async getUserByID(userID) {
        this.userM = <UserM>await this.libraryUserService.getUserByID(userID);
        this.userPatchValue();
        
        // this.enterpriseEvent._ActiveUser.next(this.userM);
    }

    userPatchValue() {
        this.updateUserDetailFG.patchValue({
            firstName: this.userM['firstName'],
            lastName: this.userM['lastName'],
            gender: this.userM['gender'],
        });

        // Patch the values directly in phoneFormFG
        this.phoneFormControl.patchValue({
            countryCode: this.userM['countryCode'],
            number: this.userM['contactNumber'],
        });

        this.userM['profileImgUrl'] = this.userM['profileImgUrl'] ||
            this.libraryUserService.defaultImage(this.userM['firstName'] + ' ' + this.userM['lastName'],
                ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW);
        // this.enterpriseEvent._ActiveUser.next(this.userM);
    }

    updateUserDetail() {
        console.log('this.updateUserDetailFG.invalid || this.phoneFormControl.invalid',this.updateUserDetailFG.invalid , this.phoneFormControl.invalid)
        if (this.updateUserDetailFG.invalid || this.phoneFormControl.invalid) {
            console.log('invalid form -', this.updateUserDetailFG.value);
            this.phoneFormControl.markAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_TITLE, ToastrColor.ERROR);
            return;
        }

        this.userController.updateUserByID(this.userID, this.updateUserDetailFG.value)
            .subscribe(() => {
                this.toastrService.openToast(ToastrTitle.SUCCESS, 'Profile updated successfully.', ToastrColor.SUCCESS);
                this.router.navigate(['user/profile']);
            });
    }

    chooseProfilePicture() {
        this.profilePicture.nativeElement.click();
    }

    updateProfilePicture(fileEvent) {
        const dialogRef = this.dialog.open(ViewProfilePicDialog, {
            data: {
                user: this.userM,
                fileEvent: fileEvent
            },
            minWidth: '400px',
        });

        dialogRef.afterClosed()
            .subscribe(result => {
                if (result === 'success') {
                    this.getUserByID(this.userID);
                }
                this.profilePicture.nativeElement.value = null;
            });
    }

    deleteProfilePicture(){
        const dialogRef = this.dialog.open(DeleteDialogComponent,{
            data: {
                user: this.userM,
                // fileEvent: fileEvent
            },
             minHeight:'200px',
             minWidth: '450px',
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'success') {
                this.userM['profileImgUrl'] = null;
            }
        });
    }

    public errorHandling = (control: string, error: string) => {
        return this.updateUserDetailFG.controls[control].hasError(error);
    }
}
