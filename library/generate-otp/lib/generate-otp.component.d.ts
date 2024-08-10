import { EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { NgOtpInputComponent } from 'ng-otp-input';
import { ToastrService } from '@library/toastr-service';
import * as i0 from "@angular/core";
export declare class GenerateOtpComponent implements OnInit {
    private toastrService;
    MATERIAL_CONSTANT: {
        MAT_RIPPLE_CENTER: boolean;
    };
    otpEmitter: EventEmitter<{
        otp: string;
        resendOtp: boolean;
    }>;
    showEnterOtpInput: any;
    generateOtpBtnLblInput: string;
    submitBtnLblInput: string;
    remainingTimeInput: number;
    ngOtpInput: NgOtpInputComponent;
    generateOtpBtnLbl: string;
    submitBtnLbl: string;
    private countdownInterval;
    otpValue: any;
    checkOtp: boolean;
    resendOtpBoolean: boolean;
    showGenreateOtpBtn: boolean;
    showEnterOtp: boolean;
    defaultRemainingTime: number;
    remainingTime: number;
    constructor(toastrService: ToastrService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    generateOtp(): void;
    showEnterOtpFnc(): void;
    onOtpChange(value: any): void;
    resendOtp(): void;
    submitOtp(): void;
    startCountdown(): void;
    formatTime(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<GenerateOtpComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GenerateOtpComponent, "lib-generate-otp", never, { "showEnterOtpInput": "showEnterOtpInput"; "generateOtpBtnLblInput": "generateOtpBtnLblInput"; "submitBtnLblInput": "submitBtnLblInput"; "remainingTimeInput": "remainingTimeInput"; }, { "otpEmitter": "otpEmitter"; }, never, never>;
}
