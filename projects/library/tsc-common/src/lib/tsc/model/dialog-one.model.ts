export interface DialogOneM {
    type: string,
    icon: string,
    header: string,
    body: string,
    buttonOne: string,
    buttonTwo: string
}

export class DialogOne implements DialogOneM {
    icon = null;
    type = null;
    header = null;
    body = null;
    buttonOne = null;
    buttonTwo = null;
}