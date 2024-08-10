import { Component, OnInit } from '@angular/core';

import {
    FormGroup,
    Validators,
    FormBuilder,
    AbstractControlOptions,
} from '@angular/forms';

import {
    Router,
    ActivatedRoute
} from '@angular/router';

import { PASSWORD_CONSTANT } from '@Account/constants/password.constants';

import { TokenService } from '@Account/service/token.service';
import { CustomValidators } from '@Account/service/custom-validator.service';

import { LoginController } from '@Account/controller/login.controller';

// library
import { ResponseM } from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';

import {
    COMMON_CONSTANT,
    InvalidForm,
    MaterialFormFieldAppearance
} from '@library/tsc-common';
// /library

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    hide: boolean = true;
    confirmHide: boolean = true;
    token: string;
    tokenID: any;

    newPasswordFG: FormGroup;

    passwordPolicyList = [
        { name: '8 characters' },
        { name: '1 uppercase' },
        { name: '1 lowercase' },
        { name: '1 number' },
        { name: '1 special character (@,#,$,&,*,!)' },
        { name: 'No space' }
    ];

    constructor(
        private newPasswordFB: FormBuilder,
        private toastrService: ToastrService,
        private tokenService: TokenService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private loginController: LoginController,
    ) { }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((queryParams) => {
            this.token = queryParams['token'];
            this.tokenID = queryParams['tokenID'];
        });

        this.resetPasswordInit();
        this.tokenValidate();
    }

    resetPasswordInit() {
        this.newPasswordFG = this.newPasswordFB.group({
            password: ['', [Validators.required, Validators.pattern(PASSWORD_CONSTANT.pattern), Validators.minLength(8)]],
            confirmPassword: ['', Validators.required],
            tokenValidateID: [this.tokenID]
        },
            { validator: CustomValidators.confirmPassword } as AbstractControlOptions);
    }

    isPasswordPolicyMatch(policy: any): boolean {
        const newPassword = this.newPasswordFG.get('password').value;

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

    async tokenValidate() {
        let tokenM: ResponseM;
        let tokenRes: any;

        tokenM = <ResponseM>await this.tokenService.tokenValidate(this.token, this.tokenID);
        tokenRes = tokenM.status;

        if (tokenRes != 'success') {
            this.router.navigate(['/link-expired']);
        } else {
            return tokenM;
        }
    }

    async resetPassword() {
        if (this.newPasswordFG.invalid) {
            console.log('invalid form');
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        let tokenM;
        let tokenRes: any;

        tokenM = <any>await this.tokenValidate();
        tokenRes = tokenM.status;

        if (tokenRes == 'success') {
            this.loginController.resetPassword(this.newPasswordFG.value)
                .subscribe((resetPasswordRes) => {
                    let toast = this.toastrService.getToastStatus(resetPasswordRes['status']);

                    this.toastrService.openToast(toast.title, `${resetPasswordRes['message']}`, toast.color);
                    this.router.navigate(['/login']);
                },
                    error => {
                        console.log('error in resetPassword() -', error);
                    });
        } else {
            this.router.navigate(['/link-expired']);
        }
    }

    public errorHandling = (control: string, error: string) => {
        return this.newPasswordFG.controls[control].hasError(error);
    }
}
