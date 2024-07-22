import { OnInit, SimpleChanges } from '@angular/core';
import { MessageAlertIconEnum, MessageAlertTypeEnum } from '../../enum/message-alert.enum';
import * as i0 from "@angular/core";
export declare class MessageAlertComponent implements OnInit {
    messageAlertTypeInp: MessageAlertTypeEnum;
    messageAlertIconInp: MessageAlertIconEnum;
    labelInp: string;
    contentInp: string;
    showCloseBtnInp: boolean;
    messageAlertTypeEnum: typeof MessageAlertTypeEnum;
    label: string;
    showCloseBtn: boolean;
    showInfo: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageAlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MessageAlertComponent, "lib-message-alert", never, { "messageAlertTypeInp": "messageAlertTypeInp"; "messageAlertIconInp": "messageAlertIconInp"; "labelInp": "labelInp"; "contentInp": "contentInp"; "showCloseBtnInp": "showCloseBtnInp"; }, {}, never, never>;
}
