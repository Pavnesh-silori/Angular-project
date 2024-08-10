import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import { EscalationController } from '../../../controller/escalation.controller';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, MaterialFormFieldAppearance, TSCCommonService, InvalidForm, DialogEnum, PageTitleEnum, MatSelectSearchService } from '@library/tsc-common';
import { ProfileImg, User, UserContext, UserService } from '@library/user-service';
import * as i0 from "@angular/core";
export declare class CreateUpdateEscalationComponent implements OnInit {
    dialogRef: MatDialogRef<CreateUpdateEscalationComponent>;
    data: any;
    private escalationFB;
    private activatedRoute;
    private storageService;
    userService: UserService;
    tscCommonService: TSCCommonService;
    private toastrService;
    private escalationController;
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
        ALLOWED_IMAGE_TYPES: string[];
        MAX_IMAGE_SIZE: number;
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
    };
    MaterialFormFieldAppearance: typeof MaterialFormFieldAppearance;
    ButtonLabelEnum: typeof ButtonLabelEnum;
    PageTitleEnum: typeof PageTitleEnum;
    DialogEnum: typeof DialogEnum;
    InvalidForm: typeof InvalidForm;
    ToastrColor: typeof ToastrColor;
    UserContext: typeof UserContext;
    ProfileImg: typeof ProfileImg;
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
    constructor(dialogRef: MatDialogRef<CreateUpdateEscalationComponent>, data: any, escalationFB: FormBuilder, activatedRoute: ActivatedRoute, storageService: StorageService, userService: UserService, tscCommonService: TSCCommonService, toastrService: ToastrService, escalationController: EscalationController);
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
    isValidEmail(email: string): boolean;
    add(event: MatChipInputEvent): void;
    removeEmail(email: any): void;
    adjustArrayValues(): void;
    adjustArray(arr: any[]): void;
    createUpdateEscalationRule(): any[];
    errorHandling: (control: string, error: string) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateUpdateEscalationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreateUpdateEscalationComponent, "lib-create-update", never, {}, {}, never, never>;
}
