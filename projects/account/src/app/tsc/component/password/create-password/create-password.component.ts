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

import { environment } from 'src/environments/environment';

import { PASSWORD_CONSTANT } from '@Account/constants/password.constants';

import { TokenService } from '@Account/service/token.service';
import { CustomValidators } from '@Account/service/custom-validator.service';

import { LoginController } from '@Account/controller/login.controller';

// library
import { ToastrColor, ToastrService } from '@library/toastr-service';

import {
    InvalidForm,
    MaterialFormFieldAppearance,
    ResponseM
} from '@library/tsc-common';
// /library

@Component({
    selector: 'app-reset-password',
    templateUrl: './create-password.component.html',
    styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    token: string;
    tokenID: string;

    hide: boolean = true;
    confirmHide: boolean = true;
    skipSuccessStatus: string;

    createPasswordFG: FormGroup;

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
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private loginController: LoginController,
        private toastrService: ToastrService,
        private tokenService: TokenService
    ) { }

    ngOnInit(): void {

        this.activatedRoute.queryParams
            .subscribe(queryParam => {
                this.token = queryParam.token;
                this.tokenID = queryParam.tokenID;

                if (queryParam['token'] && queryParam['tokenID']) {
                    this.skipSuccessStatus = '1';
                    this.tokenValidate(this.skipSuccessStatus);
                } else {
                    this.router.navigate(['/invalid-link']);
                }
            });

        this.createPasswordInit();
    }

    createPasswordInit() {
        this.createPasswordFG = this.newPasswordFB.group({
            token: this.token,
            tokenID: parseInt(this.tokenID),
            password: ['', [Validators.required, Validators.pattern(PASSWORD_CONSTANT.pattern), Validators.minLength(8)]],
            confirmPassword: ['', Validators.required],
        },
            { validator: CustomValidators.confirmPassword } as AbstractControlOptions);
    }

    isPasswordPolicyMatch(policy: any): boolean {
        const newPassword = this.createPasswordFG.get('password').value;

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

    async tokenValidate(skipSuccessStatus) {
        let tokenM: ResponseM;
        let tokenRes: any;

        tokenM = <ResponseM>await this.tokenService.tokenValidate(this.token, this.tokenID, skipSuccessStatus);
        tokenRes = tokenM.status;

        if (tokenRes != 'success') {
            this.router.navigate(['/link-expired']);
        }
    }

    createPassword() {
        if (this.createPasswordFG.invalid) {
            console.log('invalid form - ', this.createPasswordFG);
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.loginController.createPassword(this.createPasswordFG.value)
            .subscribe((createPassRes) => {
                let toast = this.toastrService.getToastStatus(createPassRes['status']);

                this.toastrService.openToast(toast.title, `${createPassRes['message']}`, toast.color);
                // this.router.navigate(['/login'], { queryParams: { redirectUrl: environment.NETZERO_URL } });
                // this.router.navigate(['/login']);
                window.location.href = environment.ADMIN_URL;
            },
                error => {
                    console.log('error in createPassword() -', error);
                });
    }

    public errorHandling = (control: string, error: string) => {
        return this.createPasswordFG.controls[control].hasError(error);
    }
}
