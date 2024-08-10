export interface AlertM {
    showAlert: boolean;
    alertLabel: string;
    alertContent: string;
    messageAlertType: string;
    messageAlertIcon: string;
}

export class Alert implements AlertM {
    showAlert = false;
    alertLabel = '';
    alertContent = '';
    messageAlertType = '';
    messageAlertIcon = '';
}