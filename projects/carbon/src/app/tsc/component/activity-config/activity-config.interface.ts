import { EventEmitter } from "@angular/core";
import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";
import { ActivityKeyIDEnum } from "@carbon/enum/activity.enum";
import { FormAction, FormErrorEnum, MaterialFormFieldAppearance } from "@library/tsc-common";

export interface ActivityConfigI {
    FormAction: typeof FormAction;
    FormErrorEnum: typeof FormErrorEnum;
    ActivityKeyIDEnum: typeof ActivityKeyIDEnum;
    MaterialFormFieldAppearance: typeof MaterialFormFieldAppearance;

    activityID: any;
    activityKeyID: ActivityKeyIDEnum;

    configuration: any;
    initialObject: any;

    saveAsPffFC: FormControl;
    activityConfigFG: FormGroup; /* form group for component */

    /* 
    --------------- example formgroup --------------
    this.activityConfigFG = this.formBuilder.group({
            activityConfig: this.formBuilder.group({
                ...properties: []
            }),
            activityConfigData: this.formBuilder.group({
                ...properties: [, Validators.required]
            }),
            activityConfigSource: this.formBuilder.array([])
        });
    */
    get configNameAC(): AbstractControl; /* getter for configuration name */
    get activityConfigAC(): AbstractControl; /* getter for configuration form group */
    get activityConfigDataAC(): AbstractControl; /* getter for configuration data form group */
    get activityConfigSourceFA(): FormArray; /* getter for configuration sources form array */

    isEqual: EventEmitter<boolean>; /* emitter to emit whether form have same value as init */
    validity: EventEmitter<boolean>; /* emitter to emit for validation */

    formGroupInit(); /* initializes formgroup */
    isValidForm(): boolean; /* triggers form validation and returns if(valid) true; else false; */ 
    isValid(): boolean; /* returns form validity if(valid) true; else false;  */
    activityConfigValidity(); /* creates this.validity subscription to continuously emit form validity */
    readOnlyForm(); /* disables the form to make it readonly */
    patchConfiguration(configuration); /* to patch cofiguration data */
}
