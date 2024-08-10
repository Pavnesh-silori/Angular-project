import { Injectable } from "@angular/core";

import { Location } from '@angular/common';

import { FormAction } from "../enum/form.enum";
import { ButtonLabelEnum } from "../enum/button.enum";

@Injectable({
    providedIn: 'root'
})

export class TSCCommonService {

    constructor(
        private location: Location,
    ) { }

    nullToBlank(value) {
        return value ? value : '';
    }

    back() {
        this.location.back();
    }

    formatLargeNumber(value, roundOff, decimalPlace) {
        if (!roundOff) {
            roundOff = true;
        }

        if (!decimalPlace) {
            decimalPlace = 0;
        }
        var preFix = "";
        var postFix = "";

        if (value < 0) {
            value *= -1;
            preFix = "-";
        }

        if (value >= 1000) {
            if (value > 1000000000) {
                value = value / 1000000000;
                postFix = " G";
            } else if (value > 1000000) {
                value = value / 1000000;
                postFix = " M";
            } else if (value > 1000) {
                value = value / 1000;
                postFix = " K";
            }

            value = (roundOff == "true" ? Math.round(value) : value);
            if (roundOff == "false") {
                value = value.toFixed(decimalPlace);
            }
        }

        var formattedNumber = preFix + value + postFix;
        return formattedNumber;
    }

    removeSelectAllID(arr: any[]) {
        return arr.filter(item => item != -1);
    }

    getUniqueObject(objList: any[], key: string, value: any) {
        return objList.find(obj => obj[key] == value);
    }

    getButtonLabel(action: string): string {
        let label: string;

        switch (action) {
            case FormAction.CREATE:
                label = ButtonLabelEnum.CREATE_BTN_LABEL;
                break;
            case FormAction.UPDATE:
                label = ButtonLabelEnum.UPDATE_BTN_LABEL;
                break;
            default:
                label = ButtonLabelEnum.SAVE_BTN_LABEL;
                break;
        }

        return label;
    }

    isValidEmail(email: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

}