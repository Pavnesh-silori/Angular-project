import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { merge } from 'rxjs';
import { isEqual } from "lodash";

import { AlertTypeEnum, AlertTypeLabelEnum } from '../../../enum/alert.enum';

import { AlertRule, AlertRuleM } from '../../../model/alert.model';

import { AlertRuleController } from '../../../controller/alert.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ProfileImg, User, UserContext, UserM, UserService } from '@library/user-service';
import { COMMON_CONSTANT, ButtonLabelEnum, MATERIAL_CONSTANT, MaterialFormFieldAppearance, TSCCommonService, InvalidForm, SearchBarTwoComponent, MatSelectSearchService, ResponseM, FormAction, PageTitleEnum, FormErrorEnum, StaticI, Static } from '@library/tsc-common';
import { LIST_CONSTANT, ParameterComponent, EntityService, ParameterEntityM, ParameterEntity, DevicesWithEntities, EntityDeviceService, DevicesWithEntitiesM, Shift, ShiftM, ShiftService, Unit, UnitM, UnitService } from '@library/tsc-lite';
// /tsc-library/

@Component({
    selector: 'lib-create-update',
    templateUrl: './create-update.component.html',
    styleUrls: ['./create-update.component.scss']
})

export class CreateUpdateComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    LIST_CONSTANT = LIST_CONSTANT;

    AlertTypeEnum = AlertTypeEnum;
    AlertTypeLabelEnum = AlertTypeLabelEnum;
    FormAction = FormAction;
    FormErrorEnum = FormErrorEnum;
    PageTitleEnum = PageTitleEnum;
    ButtonLabelEnum = ButtonLabelEnum;
    ProfileImg = ProfileImg;
    InvalidForm = InvalidForm;
    ToastrColor = ToastrColor;
    UserContext = UserContext;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    orgID: any;

    alertRuleFG: FormGroup;

    alertLabel: any;
    action: any;
    alertRuleID: any;
    initialObject: any;

    isEntityPanelExpanded: boolean = false;
    isFormSubmit: boolean = false;
    otherUser: boolean = false;
    isEqual: boolean = true;

    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    userContext: any = UserContext.ROOT_ORG_USER;

    inputPlaceholder = "email1@domain.com, email2@domain.com";

    periodicAlertType = [new Static()];
    conditionConstant: any[] = [];
    entityM = [new ParameterEntity()];
    devicesWithEntitiesM = [new DevicesWithEntities()];
    unitM = [new Unit()];
    userM = [new User()];
    rootOrgUserM = [new User()];
    currentOrgUserM = [new User()];
    shiftM = [new Shift()];
    alertRuleM = new AlertRule();

    selectedEntities: number[] = [];
    manualSelectedEntities: number[] = [];
    allDeviceID: number[] = [];
    allShiftID: number[] = [];
    selectedUserIds: number[] = [];
    totalDeviceCount: number = 0;
    totalShiftCount: number = 0;

    userFC: FormControl = new FormControl(true, Validators.required);
    selectedUserFC: FormControl = new FormControl([], [Validators.required]);

    unitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    userSearchUtil: MatSelectSearchService = new MatSelectSearchService(['firstName', 'lastName', 'email']);

    @ViewChild('searchBar') searchBar: SearchBarTwoComponent;
    @ViewChild('parameterFilterChild') parameterFilterChild: ParameterComponent;

    constructor(
        private activatedRoute: ActivatedRoute,
        private alertRuleFB: FormBuilder,
        private alertController: AlertRuleController,

        // tsc-library
        private storageService: StorageService,
        private entityService: EntityService,
        private entityDeviceService: EntityDeviceService,
        private unitService: UnitService,
        private shiftService: ShiftService,
        private toastrService: ToastrService,
        public userService: UserService,
        public tscCommonService: TSCCommonService
        // /tsc-library/
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.conditionConstant = LIST_CONSTANT.CONDITION;

        this.activatedRoute.data.subscribe(data => {
            this.alertLabel = data['alertType'];

            if(this.alertLabel == AlertTypeLabelEnum.PERIODIC_LABEL) {
                this.getPeriodicAlertType();
            }
            this.action = data['alertAction'];
        })

        this.getUsersByOrgID();
        this.getCurrentOrgUserAccess();
        this.getShift();

        this.alertInit();

        this.activatedRoute.params.subscribe((pathParam) => {
            if (pathParam.alertID != null) {
                this.alertRuleID = pathParam.alertID;
                this.getAlertRuleByID();
            }
        })

    }

    getPeriodicAlertType() {
        this.alertController.getPeriodicAlertType(this.orgID).subscribe((res: StaticI[]) => {
            this.periodicAlertType = res;
        }, error => {
            console.log('error in getPeriodicAlertType() -', error);
        })
    }

    ngAfterViewInit() {
        merge(
            this.parameterFilterChild.emitFilter
        ).subscribe(() => this.valueChange())
    }

    valueChange() {
        if (this.parameterFilterChild.selectedParameterFC.value) {
            const selectedParameter = this.parameterFilterChild.selectedParameterFC.value;
            this.alertRuleFG.controls['parameterID'].patchValue(selectedParameter);

            this.alertRuleFG.get('entityID').reset([]);
            this.alertRuleFG.get('isSubEntitiesSelected').patchValue(false);
            this.alertRuleFG.get('isAlertAtDeviceLevel').reset();
            this.allDeviceID = [];
            this.alertRuleFG.get('deviceID').reset([]);
            this.alertRuleFG.get('unitID').reset();

            this.getEntitiesByParameterID(selectedParameter);
            this.getUnitByParameterID(selectedParameter);
        }
    }

    alertInit() {
        this.alertRuleFG = this.alertRuleFB.group({
            alertType: [this.alertLabel == AlertTypeLabelEnum.INSTANTANEOUS_LABEL ? AlertTypeEnum.INSTANTANEOUS : AlertTypeEnum.PERIODIC],
            name: [, Validators.required],
            parameterID: [, Validators.required],
            entityID: [[], Validators.required],
            isSubEntitiesSelected: [false],
            isAlertAtDeviceLevel: [],
            deviceID: [[]],
            periodicAlertType: [, this.alertLabel == AlertTypeLabelEnum.PERIODIC_LABEL ? Validators.required : []],
            unitID: [, Validators.required],
            condition: [, Validators.required],
            frequency: [, Validators.required],
            value: [],
            startValue: [],
            endValue: [],
            userChoice: [UserContext.ROOT_ORG_USER],
            userID: [[], Validators.required],
            isAnyOtherUser: [false],
            otherUserEmail: [[]],
            smsFrequency: [, Validators.required],
            emailFrequency: [, Validators.required],
            isShift: [, Validators.required],
            shiftID: [[]]
        });

        if (this.alertLabel == AlertTypeLabelEnum.INSTANTANEOUS_LABEL) {
            this.setValidatorsForAlertLevelPref();
            this.setValidatorsForDevice();
        }

        this.alertRuleFG.get('periodicAlertType')?.valueChanges.subscribe(value => {
            if (value == 'BUDGET') {
                this.conditionConstant = LIST_CONSTANT.CONDITION.filter(condition => condition.value != 'BETWEEN');
            } else {
                this.conditionConstant = LIST_CONSTANT.CONDITION;
            }
        });

        this.alertRuleFG.get('isShift')?.valueChanges.subscribe(value => {
            const shiftControl = this.alertRuleFG.get('shiftID');
            shiftControl?.clearValidators();

            if (value) {
                this.addValidation(shiftControl, [Validators.required]);
            } else {
                shiftControl?.clearValidators();
            }
            shiftControl?.updateValueAndValidity();
        });
    }

    addValidation(control: AbstractControl, validators: ValidatorFn[]) {
        control.setValidators(validators);
        control.updateValueAndValidity();
    }

    getAlertRuleByID() {
        this.alertController.getAlertRuleByID(this.orgID, this.alertRuleID).subscribe((alertRuleRes: AlertRuleM) => {
            this.alertRuleM = alertRuleRes;
            this.initialObject = this.alertRuleM;

            this.getEntitiesByParameterID(this.alertRuleM.parameterID);
            this.getUnitByParameterID(this.alertRuleM.parameterID);
            this.setValidatorsForOtherUser();
            this.patchAlertFG();
        }, error => {
            console.log('error in getAlertRuleByID() -', error);
        })
    }

    patchAlertFG() {
        this.alertRuleFG.patchValue({
            alertType: this.alertRuleM.alertType,
            name: this.alertRuleM.name,
            parameterID: this.alertRuleM.parameterID,
            isAlertAtDeviceLevel: this.alertRuleM.isAlertAtDeviceLevel,
            entityID: this.alertRuleM.entityID,
            isSubEntitiesSelected: this.alertRuleM.isSubEntitiesSelected,
            periodicAlertType: this.alertRuleM.periodicAlertType,
            frequency: this.alertRuleM.frequency,
            unitID: this.alertRuleM.unitID,
            condition: this.alertRuleM.condition,
            value: this.alertRuleM.value,
            startValue: this.alertRuleM.startValue,
            endValue: this.alertRuleM.endValue,
            userChoice: this.alertRuleM.userChoice,
            userID: this.alertRuleM.userID,
            isAnyOtherUser: this.alertRuleM.isAnyOtherUser,
            otherUserEmail: this.alertRuleM.otherUserEmail,
            smsFrequency: this.alertRuleM.smsFrequency,
            emailFrequency: this.alertRuleM.emailFrequency,
            isShift: this.alertRuleM.isShift
        })

        this.conditionChange(this.alertRuleFG.get('condition').value);

        this.alertRuleFG.get('deviceID').patchValue((this.alertRuleM.deviceID.length == this.totalDeviceCount) ? [-1, ...this.alertRuleM.deviceID] : [...this.alertRuleM.deviceID]);
        this.alertRuleFG.get('shiftID').patchValue((this.alertRuleM.shiftID.length == this.totalShiftCount) ? [-1, ...this.alertRuleM.shiftID] : [...this.alertRuleM.shiftID]);

        this.parameterFilterChild.selectedParameterFC.patchValue(this.alertRuleM.parameterID);

        this.userFC.patchValue(this.alertRuleM.userChoice == UserContext.CURRENT_ORG_USER ? false : true);
        this.patchUserFields();

        this.alertRuleFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.initialObject, this.alertRuleFG.value);
        });
    }

    patchUserFields() {
        this.selectedUserIds = this.alertRuleM.userID;

        this.selectedUserFC.setValue(this.selectedUserIds);
        this.alertRuleFG.get('userID').setValue(this.selectedUserIds);

        if (this.userContext == UserContext.ROOT_ORG_USER) {
            this.userM = this.rootOrgUserM.filter(user => !this.selectedUserIds.includes(user.id));
        } else {
            this.userM = this.currentOrgUserM.filter(user => !this.selectedUserIds.includes(user.id));
        }

        this.userSearchUtil.entityArr = this.userM;
        this.userSearchUtil.createSubscription();
    }


    /* entities code */
    async getEntitiesByParameterID(parameterID) {
        this.entityM = <ParameterEntityM[]>await this.entityService.getEntitiesByParameterID(this.orgID, parameterID);
    }

    entityPanelOpened() {
        this.isEntityPanelExpanded = true;
    }

    entityPanelClosed() {
        this.isEntityPanelExpanded = false;
    }

    entityChange(entityID, event) {
        this.allDeviceID = [];
        this.alertRuleFG.get('deviceID').reset([]);

        let manualSelectedEntities = [...this.manualSelectedEntities];
        let selctedEntity = this.alertRuleFG.get('entityID').value || [];

        if (event.checked) {
            selctedEntity.push(entityID);
            manualSelectedEntities.push(entityID)
            if (this.alertRuleFG.get('isSubEntitiesSelected').value == true) {
                this.checkChildren(entityID, selctedEntity);
            }
        } else {
            selctedEntity = selctedEntity.filter(id => id != entityID);
            manualSelectedEntities = manualSelectedEntities.filter(id => id != entityID);
        }
        this.manualSelectedEntities = manualSelectedEntities;
        this.alertRuleFG.get('entityID').setValue(selctedEntity);
    }

    checkChildren(entityID, selectedEntities) {
        const entity = this.findEntityById(this.entityM, entityID);

        if (entity && entity.children && entity.children.length > 0) {
            const childIds = this.getAllEntityID(entity.children);
            childIds.forEach(id => {
                if (!selectedEntities.includes(id)) {
                    selectedEntities.push(id);
                }
            });
            this.alertRuleFG.get('entityID').setValue([...selectedEntities, ...childIds]);
        }
    }

    getAllEntityID(entities: any[]): number[] {
        let allIds: number[] = [];
        for (const entity of entities) {
            allIds.push(entity.id);
            if (entity.children && entity.children.length > 0) {
                allIds = allIds.concat(this.getAllEntityID(entity.children));
            }
        }
        return allIds;
    }

    isSelected(entityId: number): boolean {
        const selectedEntities = this.alertRuleFG.get('entityID').value || [];
        return selectedEntities.includes(entityId);
    }

    selectAllSubEntities(event: any) {
        this.alertRuleFG.get('deviceID').reset([]);

        const isSubEntitiesSelected = this.alertRuleFG.get('isSubEntitiesSelected');
        let selectedEntities = this.alertRuleFG.get('entityID').value || [];

        isSubEntitiesSelected.setValue(event.checked);

        if (isSubEntitiesSelected.value) {
            this.checkAllSubEntities(selectedEntities);
        } else {
            this.uncheckAllSubEntities(selectedEntities);
        }
    }

    private checkAllSubEntities(selectedEntities: number[]) {

        let entitiesToAdd: Set<number> = new Set(selectedEntities);

        for (const entityId of selectedEntities) {
            const entity = this.findEntityById(this.entityM, entityId);

            if (entity && entity.children && entity.children.length > 0) {
                const childIds = this.getAllEntityID(entity.children);
                childIds.forEach(id => entitiesToAdd.add(id));
            }
        }

        this.alertRuleFG.get('entityID').setValue([...entitiesToAdd]);
    }

    private uncheckAllSubEntities(selectedEntities: number[]) {
        let updatedSelectedEntities;

        if (this.action == FormAction.UPDATE) {
            updatedSelectedEntities = selectedEntities.filter(entityId => {
                const entity = this.findEntityById(this.entityM, entityId);

                if (entity && entity.children) {
                    selectedEntities = selectedEntities.filter(id => !entity.children.some(child => child.id == id));
                }
                this.alertRuleFG.get('entityID').setValue(selectedEntities);
            });

        } else {
            updatedSelectedEntities = selectedEntities.filter(id => this.manualSelectedEntities.includes(id));
            this.alertRuleFG.get('entityID').setValue(updatedSelectedEntities);
        }
    }

    findEntityById(entities: any[], entityId: number): any {
        for (const entity of entities) {
            if (entity.id == entityId) {
                return entity;
            } else if (entity.children && entity.children.length > 0) {
                const foundEntity = this.findEntityById(entity.children, entityId);
                if (foundEntity) {
                    return foundEntity;
                }
            }
        }
        return null;
    }
    /* entities code */


    setValidatorsForAlertLevelPref() {
        this.alertRuleFG.get('entityID').valueChanges.subscribe((value) => {
            const isAlertAtDeviceLevelControl = this.alertRuleFG.get('isAlertAtDeviceLevel');

            if (value && value.length > 0) {
                isAlertAtDeviceLevelControl.setValidators([Validators.required]);
            } else {
                isAlertAtDeviceLevelControl.clearValidators();
            }

            isAlertAtDeviceLevelControl.updateValueAndValidity();
        });
    }


    /* devices code */
    setValidatorsForDevice() {
        this.alertRuleFG.get('isAlertAtDeviceLevel').valueChanges.subscribe((value) => {

            const deviceIDControl = this.alertRuleFG.get('deviceID');
            const parameterID = this.alertRuleFG.get('parameterID').value;
            const entityID = this.alertRuleFG.get('entityID').value;

            if (value && this.alertLabel == AlertTypeLabelEnum.INSTANTANEOUS_LABEL) {
                if (parameterID && entityID?.length > 0) {
                    this.getDevicesWithEntities(entityID, parameterID);
                }
                this.alertRuleFG.get('deviceID').reset([]);
                deviceIDControl.setValidators([Validators.required]);
            } else {
                this.alertRuleFG.get('deviceID').reset([]);
                deviceIDControl.clearValidators();
            }

            deviceIDControl.updateValueAndValidity();
        })
    }

    async getDevicesWithEntities(entityID, parameterID) {
        let requestBody = {};
        requestBody['entityID'] = entityID;
        requestBody['parameterID'] = parameterID;

        this.devicesWithEntitiesM = <DevicesWithEntitiesM[]>await this.entityDeviceService.getDevicesWithEntities(this.orgID, requestBody);

        this.devicesWithEntitiesM?.forEach(entity => {
            this.totalDeviceCount += entity?.devices?.length;

            const deviceIDs = entity?.devices?.map(device => device?.id);
            this.allDeviceID?.push(...deviceIDs);
        });
    }

    selectAllDevices() {
        if (!this.alertRuleFG.get('deviceID').value.includes(-1)) {
            this.alertRuleFG.get('deviceID').reset([]);
            return;
        }
        this.alertRuleFG.get('deviceID').setValue([-1, ...this.allDeviceID]);
    }

    selectDevices() {
        const selected = this.alertRuleFG.get('deviceID').value;

        if (selected.includes(-1)) {
            selected.shift();
            this.alertRuleFG.get('deviceID').patchValue(selected);
        } else if (this.alertRuleFG.get('deviceID').value.length == this.totalDeviceCount) {
            this.allDeviceID.splice(0, 0, -1);
            this.alertRuleFG.get('deviceID').patchValue(this.allDeviceID);
        } else {
            const filteredSelected = selected.filter(s => s != -1);
            this.alertRuleFG.get('deviceID').patchValue(filteredSelected);
        }
    }
    /* devices code */


    async getUnitByParameterID(parameterID) {
        this.unitM = <UnitM[]>await this.unitService.getUnitByParameterID(this.orgID, parameterID);

        this.unitSearchUtil.entityArr = this.unitM;
        this.unitSearchUtil.createSubscription();
    }

    unitChange(selectedUnit) {
        this.alertRuleFG.get('unitID').patchValue(selectedUnit);
    }

    conditionChange(condition) {
        if (condition == 'BETWEEN') {
            this.alertRuleFG.get('value').clearValidators();
            this.alertRuleFG.get('startValue').setValidators([Validators.required, this.validateStartEndValues.bind(this)]);
            this.alertRuleFG.get('endValue').setValidators([Validators.required, this.validateStartEndValues.bind(this)]);
        } else {
            this.alertRuleFG.get('startValue').clearValidators();
            this.alertRuleFG.get('endValue').clearValidators();
            this.alertRuleFG.get('value').setValidators([Validators.required]);
        }

        this.alertRuleFG.get('value').updateValueAndValidity();
        this.alertRuleFG.get('startValue').updateValueAndValidity();
        this.alertRuleFG.get('endValue').updateValueAndValidity();
    }

    showValueField(): boolean {
        return this.alertRuleFG.controls['condition'].value != 'BETWEEN';
    }

    showStartEndFields(): boolean {
        return this.alertRuleFG.controls['condition'].value == 'BETWEEN';
    }

    validateStartEndValues() {
        const startValue = this.alertRuleFG.get('startValue').value;
        const endValue = this.alertRuleFG.get('endValue').value;

        if (startValue != null && endValue != null && startValue >= endValue) {
            return { 'invalidRange': true };
        }

        return null;
    }

    getFrequency() {
        return this.alertLabel == AlertTypeLabelEnum.INSTANTANEOUS_LABEL
            ? this.LIST_CONSTANT.ALERT_RULE_FREQUENCY.filter(option => option.value == 'INSTANT')
            : this.LIST_CONSTANT.ALERT_RULE_FREQUENCY.filter(option => option.value != 'INSTANT');
    }


    /* users code */
    async getUsersByOrgID() {
        this.rootOrgUserM = <UserM[]>await this.userService.getUsersByOrgID(this.orgID);

        this.userM = this.rootOrgUserM;
        this.userSearchUtil.entityArr = this.userM;
        this.userSearchUtil.createSubscription();
    }

    async getCurrentOrgUserAccess() {
        this.currentOrgUserM = <UserM[]>await this.userService.getCurrentOrgUserAccess(this.orgID);
    }

    userContextChange() {
        this.selectedUserIds = [];

        if (this.userFC.value) {
            this.userContext = UserContext.ROOT_ORG_USER;
            this.userM = this.rootOrgUserM;
            this.alertRuleFG.get('userChoice').setValue(this.userContext);
        } else {
            this.userContext = UserContext.CURRENT_ORG_USER;
            this.userM = this.currentOrgUserM;
            this.alertRuleFG.get('userChoice').setValue(this.userContext);
        }

        this.selectedUserFC.setValue(this.selectedUserIds);
        this.alertRuleFG.get('userID').setValue(this.selectedUserIds);

        this.userSearchUtil.entityArr = this.userM;
        this.userSearchUtil.createSubscription();
    }

    onUserSelectionChange(userId: number) {
        const index = this.selectedUserIds.indexOf(userId);

        if (index == -1) {
            this.selectedUserIds.push(userId);

            this.userM = this.userM.filter(user => user.id != userId);
            this.userSearchUtil.entityArr = this.userM;
            this.userSearchUtil.createSubscription();
        }
        this.selectedUserFC.setValue(this.selectedUserIds);
        this.alertRuleFG.get('userID').setValue(this.selectedUserIds);
    }

    removeSelectedUsers(userId: number) {
        const index = this.selectedUserIds.indexOf(userId);

        if (index != -1) {
            this.selectedUserIds.splice(index, 1);
            this.selectedUserFC.setValue(this.selectedUserIds);
            this.alertRuleFG.get('userID').setValue(this.selectedUserIds);

            const removedUser = this.userContext == UserContext.ROOT_ORG_USER ? this.rootOrgUserM.find(user => user.id == userId) : this.currentOrgUserM.find(user => user.id == userId);
            if (removedUser) {
                this.userM.push(removedUser);
                this.userSearchUtil.entityArr = this.userM;
                this.userSearchUtil.createSubscription();
            }
        }
    }

    getSelectedUsers(): UserM[] {
        return this.userContext == UserContext.ROOT_ORG_USER ? this.rootOrgUserM.filter(user => this.selectedUserIds.includes(user.id)) : this.currentOrgUserM.filter(user => this.selectedUserIds.includes(user.id));
    }

    setValidatorsForOtherUser() {
        this.alertRuleFG.get('isAnyOtherUser').valueChanges.subscribe((value) => {

            if (value == true) {
                this.otherUserEmail.setValidators([Validators.required]);
            } else {
                this.otherUserEmail.reset([]);
                this.otherUserEmail.clearValidators();
            }

            this.otherUserEmail.updateValueAndValidity();
        });
    }

    addOtherUser(event: any) {
        const isAnyOtherUser = this.alertRuleFG.get('isAnyOtherUser');

        isAnyOtherUser.setValue(event.checked);

        if (isAnyOtherUser.value) {
            this.otherUserEmail.setValidators([Validators.required]);
        } else {
            this.otherUserEmail.reset([]);
            this.otherUserEmail.clearValidators();
        }

        this.otherUserEmail.updateValueAndValidity();
    }

    onInput() {
        this.inputPlaceholder = '';
    }

    get otherUserEmail() {
        return this.alertRuleFG.get('otherUserEmail');
    }

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();
        if (value) {
            const emails = value.split(',').map(email => email.trim());
            const validEmails = emails.filter(email => this.tscCommonService.isValidEmail(email));
            if (validEmails.length > 0) {
                this.otherUserEmail.patchValue(this.otherUserEmail.value.concat(validEmails));
            }
        }
        event.chipInput!.clear();
    }

    removeEmail(email): void {
        const index = this.otherUserEmail.value.indexOf(email);
        if (index >= 0) {
            const emails = [...this.otherUserEmail.value];
            emails.splice(index, 1);
            this.otherUserEmail.setValue(emails);
        }
    }
    /* users code */


    /* shift code */
    async getShift() {
        this.shiftM = <ShiftM[]>await this.shiftService.getShift(this.orgID, 'NO');

        this.totalShiftCount = this.shiftM.length;
        this.shiftM.forEach(shift => this.allShiftID.push(shift['id']));
    }

    selectAllShifts() {
        if (!this.alertRuleFG.get('shiftID').value.includes(-1)) {
            this.alertRuleFG.get('shiftID').reset([]);
            return;
        }
        this.alertRuleFG.get('shiftID').setValue([-1, ...this.allShiftID]);
    }

    selectedShift() {
        const selected = this.alertRuleFG.get('shiftID').value;

        if (selected.includes(-1)) {
            selected.shift();
            this.alertRuleFG.get('shiftID').patchValue(selected);
        } else if (this.alertRuleFG.get('shiftID').value.length == this.totalShiftCount) {
            this.allShiftID.splice(0, 0, -1);
            this.alertRuleFG.get('shiftID').patchValue(this.allShiftID);
        } else {
            const filteredSelected = selected.filter(s => s != -1);
            this.alertRuleFG.get('shiftID').patchValue(filteredSelected);
        }
    }
    /* shift code */


    createUpdateAlert() {

        this.isFormSubmit = true;

        let shiftID = this.tscCommonService.removeSelectAllID(this.alertRuleFG.controls['shiftID'].value);
        let deviceID = this.tscCommonService.removeSelectAllID(this.alertRuleFG.controls['deviceID'].value);

        this.alertRuleFG.get('deviceID').patchValue(deviceID);
        this.alertRuleFG.get('shiftID').patchValue(shiftID);

        if (this.alertRuleFG.invalid) {
            this.alertRuleFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        if (this.action == FormAction.CREATE) {
            this.alertController.createAlertRule(this.orgID, this.alertRuleFG.value)
                .subscribe((createRes: ResponseM) => {

                    let toast = this.toastrService.getToastStatus(createRes.status);
                    this.toastrService.openToast(toast.title, createRes.message, toast.color);

                    this.tscCommonService.back();
                },
                    error => {
                        console.log('error in createAlertRule - ', error);
                    });
        } else if (this.action == FormAction.UPDATE) {

            this.alertController.updateAlertRule(this.orgID, this.alertRuleID, this.alertRuleFG.value)
                .subscribe((updatedRes: ResponseM) => {

                    let toast = this.toastrService.getToastStatus(updatedRes.status);
                    this.toastrService.openToast(toast.title, updatedRes.message, toast.color);

                    this.tscCommonService.back();
                },
                    error => {
                        console.log('error in updateAlertRule - ', error);
                    });
        }
    }

    public errorHandling = (control: string, error: string) => {
        return this.alertRuleFG.controls[control].hasError(error);
    }

}