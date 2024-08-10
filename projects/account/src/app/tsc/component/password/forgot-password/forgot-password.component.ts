import { Component, OnInit } from '@angular/core';

import {
    FormGroup,
    Validators,
    FormBuilder
} from '@angular/forms';

import { Router } from '@angular/router';

import { LoginController } from '@Account/controller/login.controller';

// library
import {
    COMMON_CONSTANT,
    InvalidForm,
    MATERIAL_CONSTANT,
    MaterialFormFieldAppearance
} from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';
// /library

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    forgotPasswordFG: FormGroup;

    constructor(
        private forgotPasswordFB: FormBuilder,
        private loginController: LoginController,
        private router: Router,
        private toastrService: ToastrService,
    ) { }

    ngOnInit(): void {
        this.forgotPasswordInit();
    }

    forgotPasswordInit() {
        this.forgotPasswordFG = this.forgotPasswordFB.group({
            email: ['', [Validators.required, Validators.email]],
        });
    }

    forgotPassword() {
        if (this.forgotPasswordFG.invalid) {
            console.log('invalid form - ', this.forgotPasswordFG);
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, `${InvalidForm.INVALID_FORM_MESSAGE}`, ToastrColor.ERROR);
            return;
        }

        this.loginController.forgotPassword(this.forgotPasswordFG.value)
            .subscribe((forgotPasswordRes) => {
                let toast = this.toastrService.getToastStatus(forgotPasswordRes['status']);

                if (forgotPasswordRes['status'] == 'success') {
                    this.toastrService.openToast(toast.title, `${forgotPasswordRes['message']}`, toast.color);
                    this.router.navigate(['/login']);
                } else {
                    this.toastrService.openToast(toast.title, `${forgotPasswordRes['message']}`, toast.color);
                }
            },
                error => {
                    console.log('error in login() -', error);
                });
    }

    public errorHandling = (control: string, error: string) => {
        return this.forgotPasswordFG.controls[control].hasError(error);
    }
}

