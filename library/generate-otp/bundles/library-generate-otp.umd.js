(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-otp-input'), require('@library/tsc-common'), require('@library/toastr-service'), require('@angular/common'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@library/generate-otp', ['exports', '@angular/core', 'ng-otp-input', '@library/tsc-common', '@library/toastr-service', '@angular/common', '@angular/material/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.library = global.library || {}, global.library["generate-otp"] = {}), global.ng.core, global.i2, global.tscCommon, global.i1, global.ng.common, global.ng.material.core));
})(this, (function (exports, i0, i2, tscCommon, i1, i3, i4) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);

    var GenerateOtpService = /** @class */ (function () {
        function GenerateOtpService() {
        }
        return GenerateOtpService;
    }());
    GenerateOtpService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GenerateOtpService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    GenerateOtpService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GenerateOtpService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GenerateOtpService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var GenerateOtpComponent = /** @class */ (function () {
        function GenerateOtpComponent(toastrService) {
            this.toastrService = toastrService;
            // library
            this.MATERIAL_CONSTANT = tscCommon.MATERIAL_CONSTANT;
            // /library/
            this.otpEmitter = new i0.EventEmitter();
            this.generateOtpBtnLbl = 'Generate OTP';
            this.submitBtnLbl = 'Submit';
            this.resendOtpBoolean = false;
            this.showGenreateOtpBtn = true;
            this.showEnterOtp = false;
            this.defaultRemainingTime = 100;
            this.remainingTime = this.defaultRemainingTime;
        }
        GenerateOtpComponent.prototype.ngOnInit = function () {
        };
        GenerateOtpComponent.prototype.ngOnChanges = function (changes) {
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
        };
        GenerateOtpComponent.prototype.generateOtp = function () {
            this.otpEmitter.emit({ otp: this.otpValue, resendOtp: this.resendOtpBoolean });
        };
        GenerateOtpComponent.prototype.showEnterOtpFnc = function () {
            this.showGenreateOtpBtn = false;
            this.showEnterOtp = true;
            this.remainingTime = this.defaultRemainingTime;
            // Start the countdown timer
            this.startCountdown();
        };
        GenerateOtpComponent.prototype.onOtpChange = function (value) {
            // Handle OTP change if needed
            this.otpValue = value;
            this.checkOtp = true;
        };
        GenerateOtpComponent.prototype.resendOtp = function () {
            this.showEnterOtpInput = false;
            this.ngOtpInput.setValue(null);
            this.otpValue = null;
            this.checkOtp = false;
            this.resendOtpBoolean = true;
            this.otpEmitter.emit({ otp: this.otpValue, resendOtp: this.resendOtpBoolean });
            this.startCountdown();
        };
        GenerateOtpComponent.prototype.submitOtp = function () {
            this.resendOtpBoolean = false;
            if (this.checkOtp && this.otpValue.length == 6) {
                this.otpEmitter.emit({ otp: this.otpValue, resendOtp: this.resendOtpBoolean });
            }
            else {
                this.toastrService.openToast(i1.ToastrTitle.ERROR, 'Plese enter 6 digit OTP.', i1.ToastrColor.ERROR);
                return;
            }
        };
        GenerateOtpComponent.prototype.startCountdown = function () {
            var _this = this;
            var interval = 1000; // Update every second
            this.remainingTime = this.defaultRemainingTime;
            var countdown = setInterval(function () {
                _this.remainingTime--;
                if (_this.remainingTime <= 0) {
                    clearInterval(countdown); // Stop the countdown when time reaches 0
                }
            }, interval);
        };
        GenerateOtpComponent.prototype.formatTime = function () {
            clearInterval(this.countdownInterval);
            var seconds = this.remainingTime;
            var minutes = Math.floor((seconds % 3600) / 60);
            var remainingSeconds = seconds % 60;
            return minutes + ":" + remainingSeconds;
        };
        return GenerateOtpComponent;
    }());
    GenerateOtpComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GenerateOtpComponent, deps: [{ token: i1__namespace.ToastrService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    GenerateOtpComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: GenerateOtpComponent, selector: "lib-generate-otp", inputs: { showEnterOtpInput: "showEnterOtpInput", generateOtpBtnLblInput: "generateOtpBtnLblInput", submitBtnLblInput: "submitBtnLblInput", remainingTimeInput: "remainingTimeInput" }, outputs: { otpEmitter: "otpEmitter" }, viewQueries: [{ propertyName: "ngOtpInput", first: true, predicate: i2.NgOtpInputComponent, descendants: true }], usesOnChanges: true, ngImport: i0__namespace, template: "<div class=\"text-end\">\n    <button class=\"btn btn-success\" type=\"button\" *ngIf=\"showGenreateOtpBtn\" (click)=\"generateOtp()\" matRipple\n        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n        {{ generateOtpBtnLbl }}\n    </button>\n\n    <div *ngIf=\"showEnterOtp\">\n        <div class=\"pt-2\">\n            <span>Enter a OTP</span>\n            <ng-otp-input (onInputChange)=\"onOtpChange($event)\"\n                [config]=\"{length:6,inputClass:'dot',allowNumbersOnly:true}\">\n            </ng-otp-input>\n\n            <div class=\"pt-2\">\n                <button [disabled]=\"remainingTime > 0\" class=\"btn ps-1 fw-normal\" (click)=\"resendOtp()\"><span\n                        class=\"cursorPointer btn-link\">Resend OTP </span> <span *ngIf=\"remainingTime > 0\"\n                        class=\"ml-2\">in {{\n                        formatTime() }}</span></button>\n            </div>\n        </div>\n\n        <div class=\"pt-1 sm-3\">\n            <button class=\"btn btn-success\" (click)=\"submitOtp()\" matRipple\n                [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n                {{ submitBtnLbl }}\n            </button>\n        </div>\n\n    </div>\n</div>\n", styles: ["::ng-deep .otp-input{width:25px!important;height:25px!important;border-radius:5px!important;text-align:center!important;font-size:12px!important}\n"], components: [{ type: i2__namespace.NgOtpInputComponent, selector: "ng-otp-input", inputs: ["config", "formCtrl"], outputs: ["onInputChange"] }], directives: [{ type: i3__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GenerateOtpComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-generate-otp',
                        templateUrl: './generate-otp.component.html',
                        styleUrls: ['./generate-otp.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.ToastrService }]; }, propDecorators: { otpEmitter: [{
                    type: i0.Output
                }], showEnterOtpInput: [{
                    type: i0.Input
                }], generateOtpBtnLblInput: [{
                    type: i0.Input
                }], submitBtnLblInput: [{
                    type: i0.Input
                }], remainingTimeInput: [{
                    type: i0.Input
                }], ngOtpInput: [{
                    type: i0.ViewChild,
                    args: [i2.NgOtpInputComponent, { static: false }]
                }] } });

    var GenerateOtpModule = /** @class */ (function () {
        function GenerateOtpModule() {
        }
        return GenerateOtpModule;
    }());
    GenerateOtpModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GenerateOtpModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    GenerateOtpModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GenerateOtpModule, declarations: [GenerateOtpComponent], imports: [i3.CommonModule,
            i4.MatRippleModule,
            i2.NgOtpInputModule], exports: [GenerateOtpComponent] });
    GenerateOtpModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GenerateOtpModule, imports: [[
                i3.CommonModule,
                i4.MatRippleModule,
                i2.NgOtpInputModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GenerateOtpModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            GenerateOtpComponent
                        ],
                        imports: [
                            i3.CommonModule,
                            i4.MatRippleModule,
                            i2.NgOtpInputModule
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

    exports.GenerateOtpComponent = GenerateOtpComponent;
    exports.GenerateOtpModule = GenerateOtpModule;
    exports.GenerateOtpService = GenerateOtpService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-generate-otp.umd.js.map
