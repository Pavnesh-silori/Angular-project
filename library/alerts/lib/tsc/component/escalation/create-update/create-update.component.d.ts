import { OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import { EscalationController } from '../../../controller/escalation.controller';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ProfileImg, User, UserContext, UserService } from '@library/user-service';
import { ButtonLabelEnum, MaterialFormFieldAppearance, TSCCommonService, InvalidForm, DialogEnum, PageTitleEnum, MatSelectSearchService, FormErrorEnum } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class CreateUpdateEscalationComponent implements OnInit {
    dialogRef: MatDialogRef<CreateUpdateEscalationComponent>;
    data: any;
    private escalationFB;
    private escalationController;
    private storageService;
    private toastrService;
    userService: UserService;
    tscCommonService: TSCCommonService;
    COMMON_CONSTANT: {
        PRIVACY: string;
        TERMS: string;
        PRICING: string;
        SUPPORT_EMAIL: string;
        HYPHEN: string;
        NO_DATA_FOUND: string;
        NO_DATA: string;
        EMAIL_PATTERN: string;
        ZIPCODE_PATTERN: string;
        GST_NUMBER_PATTERN: string;
        SPECIAL_CHARACTERS_PATTERN: string;
        ALLOWED_IMAGE_TYPES: string[];
        DECIMAL_PATTERN: string;
        MAX_IMAGE_SIZE: number;
        ASIAN_KOLKATA: string;
        VIEW_API_KEY_ID: string;
        NO_MATCH_FOUND: string;
    };
    MATERIAL_CONSTANT: {
        MAT_RIPPLE_CENTER: boolean;
    };
    LIST_CONSTANT: {
        CONDITION: {
            label: string;
            value: string;
        }[];
        EMAIL_FREQUENCY: {
            label: string;
            value: string;
        }[];
        SMS_FREQUENCY: {
            label: string;
            value: string;
        }[];
        ESCALATION_FREQUENCY: {
            label: string;
            value: string;
        }[];
        ALERT_RULE_FREQUENCY: {
            label: string;
            value: string;
        }[];
        TREND_DATE_RANGE: {
            label: string;
            value: string;
        }[];
        AGGREGATION_DURATION: [{
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }];
        AGGREGATION: [{
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }];
        DOWNLOAD_TYPE: [{
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }];
        SOURCE_LOAD: [{
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }];
        HOURLY_NOTIFICATION_FREQUENCY: [{
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }];
        HOURLY_REMINDER_FREQUENCY: [{
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }, {
            hour: number;
            label: string;
            value: string;
        }];
        ENERGY_APP_SCHEDULE_REPORT_TYPE: [{
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }];
        WATER_APP_SCHEDULE_REPORT_TYPE: [{
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }, {
            label: string;
            value: string;
        }];
    };
    ButtonLabelEnum: typeof ButtonLabelEnum;
    PageTitleEnum: typeof PageTitleEnum;
    DialogEnum: typeof DialogEnum;
    FormErrorEnum: typeof FormErrorEnum;
    InvalidForm: typeof InvalidForm;
    ToastrColor: typeof ToastrColor;
    UserContext: typeof UserContext;
    ProfileImg: typeof ProfileImg;
    MaterialFormFieldAppearance: typeof MaterialFormFieldAppearance;
    userContext: any;
    inputPlaceholder: string;
    orgID: any;
    alertRuleID: any;
    levelID: any;
    action: any;
    escalationRuleID: any;
    isEqual: boolean;
    initialObject: any;
    allUserID: any[];
    totalUserCount: number;
    selectable: boolean;
    removable: boolean;
    addOnBlur: boolean;
    readonly separatorKeysCodes: readonly [13, 188];
    userM: User[];
    rootOrgUserM: User[];
    currentOrgUserM: User[];
    escalationFG: FormGroup;
    userFC: FormControl;
    userSearchUtil: MatSelectSearchService;
    constructor(dialogRef: MatDialogRef<CreateUpdateEscalationComponent>, data: any, escalationFB: FormBuilder, escalationController: EscalationController, storageService: StorageService, toastrService: ToastrService, userService: UserService, tscCommonService: TSCCommonService);
    ngOnInit(): void;
    initializeData(): Promise<void>;
    escalationInit(): void;
    integerValidator(): ValidatorFn;
    patchEscalation(escalationLevelConfig: any): void;
    getUsersByOrgID(): Promise<void>;
    getCurrentOrgUserAccess(): Promise<void>;
    userContextChange(): void;
    selectUser(): void;
    selectAllUsers(): void;
    setValidatorsForOtherUser(): void;
    addOtherUser(event: any): void;
    onInput(): void;
    get otherUserEmail(): AbstractControl;
    add(event: MatChipInputEvent): void;
    removeEmail(email: any): void;
    createUpdateEscalationRule(): any[];
    errorHandling: (control: string, error: string) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateUpdateEscalationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreateUpdateEscalationComponent, "lib-create-update", never, {}, {}, never, never>;
}
