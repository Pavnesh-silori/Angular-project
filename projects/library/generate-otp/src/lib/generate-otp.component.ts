import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { NgOtpInputComponent } from 'ng-otp-input';

import { MATERIAL_CONSTANT } from '@library/tsc-common';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';

@Component({
    selector: 'lib-generate-otp',
    templateUrl: './generate-otp.component.html',
    styleUrls: ['./generate-otp.component.scss']
})

export class GenerateOtpComponent implements OnInit {
    // library
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    // /library/

    @Output() otpEmitter: EventEmitter<{ otp: string, resendOtp: boolean }> = new EventEmitter();

    @Input()
    showEnterOtpInput: any;

    @Input()
    generateOtpBtnLblInput: string;

    @Input()
    submitBtnLblInput: string;

    @Input()
    remainingTimeInput: number;

    @ViewChild(NgOtpInputComponent, { static: false }) ngOtpInput: NgOtpInputComponent;

    generateOtpBtnLbl: string = 'Generate OTP';
    submitBtnLbl: string = 'Submit';
    private countdownInterval: any;
    otpValue: any;

    checkOtp: boolean;
    resendOtpBoolean: boolean = false;
    showGenreateOtpBtn: boolean = true;
    showEnterOtp: boolean = false;
    defaultRemainingTime: number = 100;
    remainingTime: number = this.defaultRemainingTime;

    constructor(
        private toastrService: ToastrService
    ) { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
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

    onOtpChange(value: any) {
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
        } else {
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

    formatTime(): string {
        clearInterval(this.countdownInterval);
        const seconds = this.remainingTime;
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        return `${minutes}:${remainingSeconds}`;
    }
}
