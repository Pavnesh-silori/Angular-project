import { Injectable } from "@angular/core";

import { AlertM } from "../model/alert.model";

@Injectable({
    providedIn: 'root'
})

export class AlertService {

    setAlertProperties(alertObject: AlertM, label: string, content: string, type: string, icon: string): AlertM {
        alertObject.showAlert = true;
        alertObject.alertLabel = label;
        alertObject.alertContent = content;
        alertObject.messageAlertType = type;
        alertObject.messageAlertIcon = icon;

        return alertObject;
    }

    resetAlertProperties(alertObject: AlertM): AlertM {
        alertObject.showAlert = false;
        alertObject.alertLabel = '';
        alertObject.alertContent = '';
        alertObject.messageAlertType = '';
        alertObject.messageAlertIcon = '';

        return alertObject;
    }
}