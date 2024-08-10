import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Output, Input, ViewChild, NgModule } from '@angular/core';
import * as i2 from 'ng-otp-input';
import { NgOtpInputComponent, NgOtpInputModule } from 'ng-otp-input';
import { MATERIAL_CONSTANT } from '@library/tsc-common';
import * as i1 from '@library/toastr-service';
import { ToastrTitle, ToastrColor } from '@library/toastr-service';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';

class GenerateOtpService {
    constructor() { }
}
GenerateOtpService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GenerateOtpService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
GenerateOtpService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GenerateOtpService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GenerateOtpService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class GenerateOtpComponent {
    constructor(toastrService) {
        this.toastrService = toastrService;
        // library
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        // /library/
        this.otpEmitter = new EventEmitter();
        this.generateOtpBtnLbl = 'Generate OTP';
        this.submitBtnLbl = 'Submit';
        this.resendOtpBoolean = false;
        this.showGenreateOtpBtn = true;
        this.showEnterOtp = false;
        this.defaultRemainingTime = 100;
        this.remainingTime = this.defaultRemainingTime;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.submitBtnLblInput && this.submitBtnLblInput) {
            this.submitBtnLbl = this.submitBtnLblInput;
        }
        if (changes.generateOtpBtnLblInput && this.generateOtpBtnLblInput) {
            this.generateOtpBtnLbl = this.generateOtpBtnLblInput;
        }
        if (changes.remainingTimeInput && this.remainingTimeInput) {
            this.defaultRemainingTime = this.remainingTimeInput;
            this.remainingTime = this.remainingTimeInput;
        }
        if (this.showEnterOtpInput) {
            this.showEnterOtpFnc();
        }
    }
    generateOtp() {
        this.otpEmitter.emit({ otp: this.otpValue, resendOtp: this.resendOtpBoolean });
    }
    showEnterOtpFnc() {
        this.showGenreateOtpBtn = false;
        this.showEnterOtp = true;
        this.remainingTime = this.defaultRemainingTime;
        // Start the countdown timer
        this.startCountdown();
    }
    onOtpChange(value) {
        // Handle OTP change if needed
        this.otpValue = value;
        this.checkOtp = true;
    }
    resendOtp() {
        this.showEnterOtpInput = false;
        this.ngOtpInput.setValue(null);
        this.otpValue = null;
        this.checkOtp = false;
        this.resendOtpBoolean = true;
        this.otpEmitter.emit({ otp: this.otpValue, resendOtp: this.resendOtpBoolean });
        this.startCountdown();
    }
    submitOtp() {
        this.resendOtpBoolean = false;
        if (this.checkOtp && this.otpValue.length == 6) {
            this.otpEmitter.emit({ otp: this.otpValue, resendOtp: this.resendOtpBoolean });
        }
        else {
            this.toastrService.openToast(ToastrTitle.ERROR, 'Plese enter 6 digit OTP.', ToastrColor.ERROR);
            return;
        }
    }
    startCountdown() {
        const interval = 1000; // Update every second
        this.remainingTime = this.defaultRemainingTime;
        const countdown = setInterval(() => {
            this.remainingTime--;
            if (this.remainingTime <= 0) {
                clearInterval(countdown); // Stop the countdown when time reaches 0
            }
        }, interval);
    }
    formatTime() {
        clearInterval(this.countdownInterval);
        const seconds = this.remainingTime;
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds}`;
    }
}
GenerateOtpComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GenerateOtpComponent, deps: [{ token: i1.ToastrService }], target: i0.ɵɵFactoryTarget.Component });
GenerateOtpComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: GenerateOtpComponent, selector: "lib-generate-otp", inputs: { showEnterOtpInput: "showEnterOtpInput", generateOtpBtnLblInput: "generateOtpBtnLblInput", submitBtnLblInput: "submitBtnLblInput", remainingTimeInput: "remainingTimeInput" }, outputs: { otpEmitter: "otpEmitter" }, viewQueries: [{ propertyName: "ngOtpInput", first: true, predicate: NgOtpInputComponent, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"text-end\">\n    <button class=\"btn btn-success\" type=\"button\" *ngIf=\"showGenreateOtpBtn\" (click)=\"generateOtp()\" matRipple\n        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n        {{ generateOtpBtnLbl }}\n    </button>\n\n    <div *ngIf=\"showEnterOtp\">\n        <div class=\"pt-2\">\n            <span>Enter a OTP</span>\n            <ng-otp-input (onInputChange)=\"onOtpChange($event)\"\n                [config]=\"{length:6,inputClass:'dot',allowNumbersOnly:true}\">\n            </ng-otp-input>\n\n            <div class=\"pt-2\">\n                <button [disabled]=\"remainingTime > 0\" class=\"btn ps-1 fw-normal\" (click)=\"resendOtp()\"><span\n                        class=\"cursorPointer btn-link\">Resend OTP </span> <span *ngIf=\"remainingTime > 0\"\n                        class=\"ml-2\">in {{\n                        formatTime() }}</span></button>\n            </div>\n        </div>\n\n        <div class=\"pt-1 sm-3\">\n            <button class=\"btn btn-success\" (click)=\"submitOtp()\" matRipple\n                [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n                {{ submitBtnLbl }}\n            </button>\n        </div>\n\n    </div>\n</div>\n", styles: ["::ng-deep .otp-input{width:25px!important;height:25px!important;border-radius:5px!important;text-align:center!important;font-size:12px!important}\n"], components: [{ type: i2.NgOtpInputComponent, selector: "ng-otp-input", inputs: ["config", "formCtrl"], outputs: ["onInputChange"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GenerateOtpComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-generate-otp',
                    templateUrl: './generate-otp.component.html',
                    styleUrls: ['./generate-otp.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.ToastrService }]; }, propDecorators: { otpEmitter: [{
                type: Output
            }], showEnterOtpInput: [{
                type: Input
            }], generateOtpBtnLblInput: [{
                type: Input
            }], submitBtnLblInput: [{
                type: Input
            }], remainingTimeInput: [{
                type: Input
            }], ngOtpInput: [{
                type: ViewChild,
                args: [NgOtpInputComponent, { static: false }]
            }] } });

class GenerateOtpModule {
}
GenerateOtpModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GenerateOtpModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GenerateOtpModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GenerateOtpModule, declarations: [GenerateOtpComponent], imports: [CommonModule,
        MatRippleModule,
        NgOtpInputModule], exports: [GenerateOtpComponent] });
GenerateOtpModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GenerateOtpModule, imports: [[
            CommonModule,
            MatRippleModule,
            NgOtpInputModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GenerateOtpModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        GenerateOtpComponent
                    ],
                    imports: [
                        CommonModule,
                        MatRippleModule,
                        NgOtpInputModule
                    ],
                    exports: [
                        GenerateOtpComponent,
                    ]
                }]
        }] });

/*
 * Public API Surface of generate-otp
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GenerateOtpComponent, GenerateOtpModule, GenerateOtpService };
//# sourceMappingURL=library-generate-otp.js.map
