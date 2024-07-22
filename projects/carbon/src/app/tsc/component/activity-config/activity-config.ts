import { EventEmitter } from "@angular/core";
import { FormControl, FormGroup, AbstractControl, FormArray } from "@angular/forms";

import { isEqual } from 'lodash';
import { startWith } from 'rxjs/operators';

import { ActivityKeyIDEnum } from "@carbon/enum/activity.enum";
import { ActivityConfigI } from "./activity-config.interface";
import { COMMON_CONSTANT, FormAction, FormErrorEnum, MaterialFormFieldAppearance } from "@library/tsc-common";

export abstract class ActivityConfig implements ActivityConfigI {
    FormAction: typeof FormAction = FormAction;
    FormErrorEnum: typeof FormErrorEnum = FormErrorEnum;
    ActivityKeyIDEnum: typeof ActivityKeyIDEnum = ActivityKeyIDEnum;
    MaterialFormFieldAppearance: typeof MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    COMMON_CONSTANT = COMMON_CONSTANT;

    activityID: any;
    activityKeyID: ActivityKeyIDEnum;
    configuration: any;
    initialObject: any;
    saveAsPffFC: FormControl;
    activityConfigFG: FormGroup;

    isEqual: EventEmitter<boolean> = new EventEmitter();
    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    get activityConfigAC() {
        return this.activityConfigFG.get('activityConfig') as AbstractControl;
    }

    get activityConfigDataAC(): AbstractControl {
        return this.activityConfigFG.get('activityConfigData') as AbstractControl;
    }

    isValid = () => {
        return !this.activityConfigFG.invalid;
    }

    isValidForm() {
        if (this.activityConfigFG.invalid) {
            this.activityConfigFG.markAllAsTouched();
            console.error('invalid activityConfigFG -', this.activityConfigFG);
            return false;
        }

        this.configuration = {};
        this.configuration = JSON.parse(JSON.stringify(this.activityConfigFG.getRawValue()));
        return true;
    }

    activityConfigValidity() {
        this.activityConfigFG.valueChanges.subscribe(() => this.validity.emit(this.activityConfigFG.invalid));
    }

    readOnlyForm() {
        this.activityConfigFG.disable();
    }

    abstract formGroupInit(): void;

    abstract patchConfiguration(configuration: any);

    get configNameAC(): AbstractControl {
        throw new Error('Method not implemented.');
    }

    get activityConfigSourceFA(): FormArray {
        throw new Error("Method not implemented.");
    }

    errorHandling = (formGroup: FormGroup, controlPath: string, error: string): boolean => {
        return formGroup.get(controlPath).hasError(error);
    }

    errorHandlingForRadio = (formGroup: FormGroup, controlPath: string, error: string): boolean => {
        return formGroup.get(controlPath).hasError(error) && formGroup.get(controlPath).touched;
    }

    updateInitialObject() {
        this.initialObject = this.activityConfigFG.getRawValue();       
        this.activityConfigFG.valueChanges.pipe(startWith({})).subscribe(() => {
            this.isEqual.next(isEqual(this.initialObject, this.activityConfigFG.getRawValue()));
        });
    }
}
