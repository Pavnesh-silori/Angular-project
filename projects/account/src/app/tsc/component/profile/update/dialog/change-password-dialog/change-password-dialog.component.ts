import { Component, Inject, OnInit } from '@angular/core';

import { 
    FormGroup, 
    Validators,
    FormBuilder, 
    AbstractControlOptions, 
} from '@angular/forms';

import { 
    MatDialogRef,
    MAT_DIALOG_DATA, 
} from '@angular/material/dialog';

import { CustomValidators } from '@Account/service/custom-validator.service';
import { ToastrService } from '@library/toastr-service';

@Component({
    selector: 'app-change-password-dialog',
    templateUrl: './change-password-dialog.component.html',
    styleUrls: ['./change-password-dialog.component.scss']
})
export class ChangePasswordDialog implements OnInit {
    ToastrColor = ToastrColor;
    InvalidForm = InvalidForm;
    ButtonLabelEnum = ButtonLabelEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    newPasswordFG: FormGroup;
    currentPasswordFG: FormGroup;

    passwordVerified: boolean = false;

    hidePassword = true;
    hideConfirmPassword = true;
    hideCurrentPassword = true;
    userID: any;

    passwordPolicyList = [
        { name: '8 characters' },
        { name: '1 uppercase' },
        { name: '1 lowercase' },
        { name: '1 number' },
        { name: '1 special character (@,#,$,&,*,!)' },
        { name: 'No space' }
    ];

    constructor(
        private toastrService: ToastrService,
        private formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) private data,
        private dialogRef: MatDialogRef<ChangePasswordDialog>,
        private userController: UserController,
        private storageService: StorageService,
    ) { 
        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.userID = this.storageService.getStorage('userID');
        this.changePasswordInit();
        this.newPasswordInit();
    }

    changePasswordInit() {
        this.currentPasswordFG = this.formBuilder.group({
            password: [, [Validators.required]],
        });
    }

    newPasswordInit() {
        this.newPasswordFG = this.formBuilder.group({
            otp: [, [Validators.required]],
            tokenValidateID: [, [Validators.required]],
            newPassword: ['', [Validators.required, Validators.pattern(COMMON_CONSTANT['passwordPattern']), Validators.minLength(8)]],
            confirmPassword: ['', [Validators.required]]
        },
        { validator: CustomValidators.confirmPassword('newPassword', 
        'confirmPassword')} as AbstractControlOptions);
    }

    get newPasswordFGControls() {
        return this.newPasswordFG.controls;
    }

    isPasswordPolicyMatch(policy: any): boolean {
        const newPassword = this.newPasswordFG.get('newPassword').value;

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

    verifyPassword() {
        if (this.currentPasswordFG.invalid) {
            console.log('invalid form');
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.userController.validatePassword(this.userID, this.currentPasswordFG.value)
            .subscribe((res) => {
                let toast = this.toastrService.getToastStatus(res['status']);
                this.toastrService.openToast(toast['title'], res['message'], toast['color']);

                if(res['response']['otpSent'] === 'YES') {
                    this.passwordVerified = true;
                    this.newPasswordFGControls['tokenValidateID'].patchValue(res['response']['tokenValidateID']);
                    this.newPasswordFGControls['tokenValidateID'].updateValueAndValidity();
                } else if(res['response']['otpSent'] === 'NO'){
                    this.currentPasswordFG.controls['password'].setErrors({wrongPassword: true});
                }
            },
                error => {
                    console.log('error in verifyPassword -', error);
                }
            );
    }

    changePassword() {
        if (this.newPasswordFG.invalid) {
            console.log('invalid form');
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.userController.changePassword(this.userID, this.newPasswordFG.value)
            .subscribe((res) => {
                let toast = this.toastrService.getToastStatus(res['status']);
                this.toastrService.openToast(toast['title'], res['message'], toast['color']);

                if(res['status'] == 'success') {
                    this.dialogRef.close();
                } else {
                    this.newPasswordFGControls['otp'].setErrors({invalid:true});
                }
            },
                error => {
                    console.log('error in changePassword -', error);
            });
    }

    public errorHandlingCP = (control: string, error: string) => {
        return this.currentPasswordFG.controls[control].hasError(error);
    }

    public errorHandlingNP = (control: string, error: string) => {
        return this.newPasswordFG.controls[control].hasError(error);
    }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

// TODO
import { ButtonLabelEnum, COMMON_CONSTANT, InvalidForm, MATERIAL_CONSTANT, MaterialFormFieldAppearance } from '@library/tsc-common';
import { ToastrColor } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { UserController } from '@Account/controller/user.controller';

@NgModule({
    imports: [
        CommonModule,
        RoundProgressModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatRippleModule,
        MatDialogModule,
        MatButtonModule,
        MatTooltipModule,
    ],
    declarations: [
        ChangePasswordDialog
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatTooltipModule,
        ChangePasswordDialog
    ]
})

export class ChangePasswordModule { }
