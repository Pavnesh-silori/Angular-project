
import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { ActivityDataI } from "./activity-data.interface";
import { DataInputMethodKeyIDEnum } from "@carbon/enum/data-input-method.enum";

import { COMMON_CONSTANT, FormErrorEnum, MaterialFormFieldAppearance, TSCCommonService } from "@library/tsc-common";
import { DateFormatEnum, DateInputTypeEnum } from "@library/date";

export abstract class ActivityData implements ActivityDataI {
    constructor(
        protected tSCCommonService: TSCCommonService
    ) { }

    FormErrorEnum: typeof FormErrorEnum = FormErrorEnum;
    DateFormatEnum: typeof DateFormatEnum = DateFormatEnum;
    DataInputMethodKeyIDEnum: typeof DataInputMethodKeyIDEnum;
    DateInputTypeEnum: typeof DateInputTypeEnum = DateInputTypeEnum;
    MaterialFormFieldAppearance: typeof MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    COMMON_CONSTANT = COMMON_CONSTANT;

    activityData: any;
    manualDataCollectionMethodID: number;

    activityDataFG: FormGroup;

    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    isValidForm(): boolean {
        
        if (this.activityDataFG.invalid) {
            this.activityDataFG.markAllAsTouched();
            console.error('invalid form -', this.activityDataFG);
            return false;
        }

        this.activityData = {};
        this.activityData = JSON.parse(JSON.stringify(this.activityDataFG.value));

        return true;
    }

    activityDataValidity() {
        this.activityDataFG.valueChanges.subscribe(() => this.validity.emit(!this.activityDataFG.invalid));
    }

    getActivityData() {
        return {
            'activityData': this.activityData,
            'activityDataFile': []
        }
    }
    

    getManualDataCollectionMethodID() {
    //     let manualDataCollectionMethod: any

    //     manualDataCollectionMethod = this.tSCCommonService.getUniqueObject.();
    }

    abstract getConfiguration(configuration);

}
