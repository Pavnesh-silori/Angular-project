import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { DataInputMethodKeyIDEnum } from "@carbon/enum/data-input-method.enum";

export interface ActivityDataI {
    DataInputMethodKeyIDEnum: typeof DataInputMethodKeyIDEnum;

    activityData: any;
    manualDataCollectionMethodID: number;

    activityDataFG: FormGroup;

    validity: EventEmitter<boolean>;

    isValidForm(): boolean;

    activityDataValidity();

    getActivityData();

    getManualDataCollectionMethodID();
    
    getConfiguration(configuration);
}
