import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgOtpInputComponent } from 'ng-otp-input';
import { MATERIAL_CONSTANT } from '@library/tsc-common';
import { ToastrColor, ToastrTitle } from '@library/toastr-service';
import * as i0 from "@angular/core";
import * as i1 from "@library/toastr-service";
import * as i2 from "ng-otp-input";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/core";
export class GenerateOtpComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGUtb3RwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZ2VuZXJhdGUtb3RwL3NyYy9saWIvZ2VuZXJhdGUtb3RwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZ2VuZXJhdGUtb3RwL3NyYy9saWIvZ2VuZXJhdGUtb3RwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBaUIsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQVFsRixNQUFNLE9BQU8sb0JBQW9CO0lBaUM3QixZQUNZLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBakN4QyxVQUFVO1FBQ1Ysc0JBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDdEMsWUFBWTtRQUVGLGVBQVUsR0FBc0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWdCN0Ysc0JBQWlCLEdBQVcsY0FBYyxDQUFDO1FBQzNDLGlCQUFZLEdBQVcsUUFBUSxDQUFDO1FBS2hDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyx1QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFDbkMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIseUJBQW9CLEdBQVcsR0FBRyxDQUFDO1FBQ25DLGtCQUFhLEdBQVcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBSTlDLENBQUM7SUFFTCxRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtR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LENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRTtnQkFDekIsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMseUNBQXlDO2FBQ3RFO1FBQ0wsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxVQUFVO1FBQ04sYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDbkMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNsRCxNQUFNLGdCQUFnQixHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFdEMsT0FBTyxHQUFHLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVDLENBQUM7O2tIQXRIUSxvQkFBb0I7c0dBQXBCLG9CQUFvQixtVUFtQmxCLG1CQUFtQixxRUNoQ2xDLDJ0Q0E4QkE7NEZEakJhLG9CQUFvQjtrQkFOaEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixXQUFXLEVBQUUsK0JBQStCO29CQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztpQkFDL0M7b0dBT2EsVUFBVTtzQkFBbkIsTUFBTTtnQkFHUCxpQkFBaUI7c0JBRGhCLEtBQUs7Z0JBSU4sc0JBQXNCO3NCQURyQixLQUFLO2dCQUlOLGlCQUFpQjtzQkFEaEIsS0FBSztnQkFJTixrQkFBa0I7c0JBRGpCLEtBQUs7Z0JBRzZDLFVBQVU7c0JBQTVELFNBQVM7dUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5nT3RwSW5wdXRDb21wb25lbnQgfSBmcm9tICduZy1vdHAtaW5wdXQnO1xuXG5pbXBvcnQgeyBNQVRFUklBTF9DT05TVEFOVCB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuaW1wb3J0IHsgVG9hc3RyQ29sb3IsIFRvYXN0clNlcnZpY2UsIFRvYXN0clRpdGxlIH0gZnJvbSAnQGxpYnJhcnkvdG9hc3RyLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1nZW5lcmF0ZS1vdHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9nZW5lcmF0ZS1vdHAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2dlbmVyYXRlLW90cC5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgR2VuZXJhdGVPdHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vIGxpYnJhcnlcbiAgICBNQVRFUklBTF9DT05TVEFOVCA9IE1BVEVSSUFMX0NPTlNUQU5UO1xuICAgIC8vIC9saWJyYXJ5L1xuXG4gICAgQE91dHB1dCgpIG90cEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjx7IG90cDogc3RyaW5nLCByZXNlbmRPdHA6IGJvb2xlYW4gfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBASW5wdXQoKVxuICAgIHNob3dFbnRlck90cElucHV0OiBhbnk7XG5cbiAgICBASW5wdXQoKVxuICAgIGdlbmVyYXRlT3RwQnRuTGJsSW5wdXQ6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgc3VibWl0QnRuTGJsSW5wdXQ6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcmVtYWluaW5nVGltZUlucHV0OiBudW1iZXI7XG5cbiAgICBAVmlld0NoaWxkKE5nT3RwSW5wdXRDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSBuZ090cElucHV0OiBOZ090cElucHV0Q29tcG9uZW50O1xuXG4gICAgZ2VuZXJhdGVPdHBCdG5MYmw6IHN0cmluZyA9ICdHZW5lcmF0ZSBPVFAnO1xuICAgIHN1Ym1pdEJ0bkxibDogc3RyaW5nID0gJ1N1Ym1pdCc7XG4gICAgcHJpdmF0ZSBjb3VudGRvd25JbnRlcnZhbDogYW55O1xuICAgIG90cFZhbHVlOiBhbnk7XG5cbiAgICBjaGVja090cDogYm9vbGVhbjtcbiAgICByZXNlbmRPdHBCb29sZWFuOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0dlbnJlYXRlT3RwQnRuOiBib29sZWFuID0gdHJ1ZTtcbiAgICBzaG93RW50ZXJPdHA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBkZWZhdWx0UmVtYWluaW5nVGltZTogbnVtYmVyID0gMTAwO1xuICAgIHJlbWFpbmluZ1RpbWU6IG51bWJlciA9IHRoaXMuZGVmYXVsdFJlbWFpbmluZ1RpbWU7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB0b2FzdHJTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuc3VibWl0QnRuTGJsSW5wdXQgJiYgdGhpcy5zdWJtaXRCdG5MYmxJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRCdG5MYmwgPSB0aGlzLnN1Ym1pdEJ0bkxibElucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMuZ2VuZXJhdGVPdHBCdG5MYmxJbnB1dCAmJiB0aGlzLmdlbmVyYXRlT3RwQnRuTGJsSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVPdHBCdG5MYmwgPSB0aGlzLmdlbmVyYXRlT3RwQnRuTGJsSW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5yZW1haW5pbmdUaW1lSW5wdXQgJiYgdGhpcy5yZW1haW5pbmdUaW1lSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFJlbWFpbmluZ1RpbWUgPSB0aGlzLnJlbWFpbmluZ1RpbWVJbnB1dDtcbiAgICAgICAgICAgIHRoaXMucmVtYWluaW5nVGltZSA9IHRoaXMucmVtYWluaW5nVGltZUlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd0VudGVyT3RwSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0VudGVyT3RwRm5jKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZU90cCgpIHtcbiAgICAgICAgdGhpcy5vdHBFbWl0dGVyLmVtaXQoeyBvdHA6IHRoaXMub3RwVmFsdWUsIHJlc2VuZE90cDogdGhpcy5yZXNlbmRPdHBCb29sZWFuIH0pO1xuICAgIH1cblxuICAgIHNob3dFbnRlck90cEZuYygpIHtcbiAgICAgICAgdGhpcy5zaG93R2VucmVhdGVPdHBCdG4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93RW50ZXJPdHAgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbWFpbmluZ1RpbWUgPSB0aGlzLmRlZmF1bHRSZW1haW5pbmdUaW1lO1xuXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBjb3VudGRvd24gdGltZXJcbiAgICAgICAgdGhpcy5zdGFydENvdW50ZG93bigpO1xuICAgIH1cblxuICAgIG9uT3RwQ2hhbmdlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgLy8gSGFuZGxlIE9UUCBjaGFuZ2UgaWYgbmVlZGVkXG4gICAgICAgIHRoaXMub3RwVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGVja090cCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVzZW5kT3RwKCkge1xuICAgICAgICB0aGlzLnNob3dFbnRlck90cElucHV0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubmdPdHBJbnB1dC5zZXRWYWx1ZShudWxsKTtcbiAgICAgICAgdGhpcy5vdHBWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hlY2tPdHAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXNlbmRPdHBCb29sZWFuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vdHBFbWl0dGVyLmVtaXQoeyBvdHA6IHRoaXMub3RwVmFsdWUsIHJlc2VuZE90cDogdGhpcy5yZXNlbmRPdHBCb29sZWFuIH0pO1xuICAgICAgICB0aGlzLnN0YXJ0Q291bnRkb3duKCk7XG4gICAgfVxuXG4gICAgc3VibWl0T3RwKCkge1xuICAgICAgICB0aGlzLnJlc2VuZE90cEJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tPdHAgJiYgdGhpcy5vdHBWYWx1ZS5sZW5ndGggPT0gNikge1xuICAgICAgICAgICAgdGhpcy5vdHBFbWl0dGVyLmVtaXQoeyBvdHA6IHRoaXMub3RwVmFsdWUsIHJlc2VuZE90cDogdGhpcy5yZXNlbmRPdHBCb29sZWFuIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2FzdHJTZXJ2aWNlLm9wZW5Ub2FzdChUb2FzdHJUaXRsZS5FUlJPUiwgJ1BsZXNlIGVudGVyIDYgZGlnaXQgT1RQLicsIFRvYXN0ckNvbG9yLkVSUk9SKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0Q291bnRkb3duKCkge1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IDEwMDA7IC8vIFVwZGF0ZSBldmVyeSBzZWNvbmRcbiAgICAgICAgdGhpcy5yZW1haW5pbmdUaW1lID0gdGhpcy5kZWZhdWx0UmVtYWluaW5nVGltZTtcblxuICAgICAgICBjb25zdCBjb3VudGRvd24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbWFpbmluZ1RpbWUtLTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucmVtYWluaW5nVGltZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd24pOyAvLyBTdG9wIHRoZSBjb3VudGRvd24gd2hlbiB0aW1lIHJlYWNoZXMgMFxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgZm9ybWF0VGltZSgpOiBzdHJpbmcge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuY291bnRkb3duSW50ZXJ2YWwpO1xuICAgICAgICBjb25zdCBzZWNvbmRzID0gdGhpcy5yZW1haW5pbmdUaW1lO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoc2Vjb25kcyAlIDM2MDApIC8gNjApO1xuICAgICAgICBjb25zdCByZW1haW5pbmdTZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xuXG4gICAgICAgIHJldHVybiBgJHttaW51dGVzfToke3JlbWFpbmluZ1NlY29uZHN9YDtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidGV4dC1lbmRcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwic2hvd0dlbnJlYXRlT3RwQnRuXCIgKGNsaWNrKT1cImdlbmVyYXRlT3RwKClcIiBtYXRSaXBwbGVcbiAgICAgICAgW21hdFJpcHBsZUNlbnRlcmVkXT1cIk1BVEVSSUFMX0NPTlNUQU5ULk1BVF9SSVBQTEVfQ0VOVEVSXCI+XG4gICAgICAgIHt7IGdlbmVyYXRlT3RwQnRuTGJsIH19XG4gICAgPC9idXR0b24+XG5cbiAgICA8ZGl2ICpuZ0lmPVwic2hvd0VudGVyT3RwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwdC0yXCI+XG4gICAgICAgICAgICA8c3Bhbj5FbnRlciBhIE9UUDwvc3Bhbj5cbiAgICAgICAgICAgIDxuZy1vdHAtaW5wdXQgKG9uSW5wdXRDaGFuZ2UpPVwib25PdHBDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW2NvbmZpZ109XCJ7bGVuZ3RoOjYsaW5wdXRDbGFzczonZG90JyxhbGxvd051bWJlcnNPbmx5OnRydWV9XCI+XG4gICAgICAgICAgICA8L25nLW90cC1pbnB1dD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB0LTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJyZW1haW5pbmdUaW1lID4gMFwiIGNsYXNzPVwiYnRuIHBzLTEgZnctbm9ybWFsXCIgKGNsaWNrKT1cInJlc2VuZE90cCgpXCI+PHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3Vyc29yUG9pbnRlciBidG4tbGlua1wiPlJlc2VuZCBPVFAgPC9zcGFuPiA8c3BhbiAqbmdJZj1cInJlbWFpbmluZ1RpbWUgPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWwtMlwiPmluIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRUaW1lKCkgfX08L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInB0LTEgc20tM1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIChjbGljayk9XCJzdWJtaXRPdHAoKVwiIG1hdFJpcHBsZVxuICAgICAgICAgICAgICAgIFttYXRSaXBwbGVDZW50ZXJlZF09XCJNQVRFUklBTF9DT05TVEFOVC5NQVRfUklQUExFX0NFTlRFUlwiPlxuICAgICAgICAgICAgICAgIHt7IHN1Ym1pdEJ0bkxibCB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==