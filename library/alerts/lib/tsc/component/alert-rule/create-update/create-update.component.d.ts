import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { AlertButtonLabelEnum, AlertTypeEnum, AlertPageLabelEnum } from '../../../enum/alert.enum';
import { AlertRule } from '../../../model/alert.model';
import { AlertRuleController } from '../../../controller/alert.controller';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, MaterialFormFieldAppearance, TSCCommonService, InvalidForm, SearchBarTwoComponent, MatSelectSearchService, FormAction, PageTitleEnum } from '@library/tsc-common';
import { ParameterComponent, EntityService, EntityTree, DevicesWithEntities, EntityDeviceService, Shift, ShiftService, Unit, UnitService } from '@library/tsc-lite';
import { ProfileImg, User, UserContext, UserM, UserService } from '@library/user-service';
import * as i0 from "@angular/core";
export declare class CreateUpdateComponent implements OnInit {
    private activatedRoute;
    private storageService;
    private entityService;
    private entityDeviceService;
    private unitService;
    private shiftService;
    userService: UserService;
    tscCommonService: TSCCommonService;
    private alertRuleFB;
    private toastrService;
    private alertController;
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
    AlertTypeEnum: typeof AlertTypeEnum;
    AlertPageLabelEnum: typeof AlertPageLabelEnum;
    AlertButtonLabelEnum: typeof AlertButtonLabelEnum;
    FormAction: typeof FormAction;
    PageTitleEnum: typeof PageTitleEnum;
    ButtonLabelEnum: typeof ButtonLabelEnum;
    InvalidForm: typeof InvalidForm;
    ToastrColor: typeof ToastrColor;
    UserContext: typeof UserContext;
    ProfileImg: typeof ProfileImg;
    MaterialFormFieldAppearance: typeof MaterialFormFieldAppearance;
    orgID: any;
    alertRuleFG: FormGroup;
    alertLabel: any;
    action: any;
    alertRuleID: any;
    initialObject: any;
    isEntityPanelExpanded: boolean;
    isFormSubmit: boolean;
    otherUser: boolean;
    isEqual: boolean;
    selectable: boolean;
    removable: boolean;
    addOnBlur: boolean;
    readonly separatorKeysCodes: readonly [13, 188];
    userContext: any;
    inputPlaceholder: string;
    entityM: EntityTree[];
    devicesWithEntitiesM: DevicesWithEntities[];
    unitM: Unit[];
    userM: User[];
    rootOrgUserM: User[];
    currentOrgUserM: User[];
    shiftM: Shift[];
    alertRuleM: AlertRule;
    selectedEntities: number[];
    manualSelectedEntities: number[];
    allDeviceID: number[];
    allShiftID: number[];
    selectedUserIds: number[];
    totalDeviceCount: number;
    totalShiftCount: number;
    userFC: FormControl;
    selectedUserFC: FormControl;
    unitSearchUtil: MatSelectSearchService;
    userSearchUtil: MatSelectSearchService;
    searchBar: SearchBarTwoComponent;
    parameterFilterChild: ParameterComponent;
    constructor(activatedRoute: ActivatedRoute, storageService: StorageService, entityService: EntityService, entityDeviceService: EntityDeviceService, unitService: UnitService, shiftService: ShiftService, userService: UserService, tscCommonService: TSCCommonService, alertRuleFB: FormBuilder, toastrService: ToastrService, alertController: AlertRuleController);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    valueChange(): void;
    alertInit(): void;
    getAlertRuleByID(): void;
    patchAlertFG(): void;
    patchUserFields(): void;
    getEntityHierarchyByParameterID(parameterID: any): Promise<void>;
    entityPanelOpened(): void;
    entityPanelClosed(): void;
    entityChange(entityID: any, event: any): void;
    checkChildren(entityID: any, selectedEntities: any): void;
    getAllEntityID(entities: any[]): number[];
    isSelected(entityId: number): boolean;
    selectAllSubEntities(event: any): void;
    private checkAllSubEntities;
    private uncheckAllSubEntities;
    findEntityById(entities: any[], entityId: number): any;
    setValidatorsForAlertLevelPref(): void;
    setValidatorsForDevice(): void;
    getDevicesWithEntities(entityID: any, parameterID: any): Promise<void>;
    selectAllDevices(): void;
    selectDevices(): void;
    getUnitByParameterID(parameterID: any): Promise<void>;
    unitChange(selectedUnit: any): void;
    conditionChange(condition: any): void;
    showValueField(): boolean;
    showStartEndFields(): boolean;
    validateStartEndValues(): {
        invalidRange: boolean;
    };
    getFrequency(): {
        label: string;
        value: string;
    }[];
    getUsersByOrgID(): Promise<void>;
    getCurrentOrgUserAccess(): Promise<void>;
    userContextChange(): void;
    onUserSelectionChange(userId: number): void;
    removeSelectedUsers(userId: number): void;
    getSelectedUsers(): UserM[];
    setValidatorsForOtherUser(): void;
    addOtherUser(event: any): void;
    onInput(): void;
    get otherUserEmail(): import("@angular/forms").AbstractControl;
    isValidEmail(email: string): boolean;
    add(event: MatChipInputEvent): void;
    removeEmail(email: any): void;
    getShift(): Promise<void>;
    selectAllShifts(): void;
    selectedShift(): void;
    createUpdateAlert(): void;
    errorHandling: (control: string, error: string) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateUpdateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreateUpdateComponent, "lib-create-update", never, {}, {}, never, never>;
}
