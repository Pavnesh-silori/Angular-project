import { OnInit, SimpleChanges } from '@angular/core';
import { MessageAlertIconEnum, MessageAlertTypeEnum } from '../../enum/message-alert.enum';
import * as i0 from "@angular/core";
export declare class MessageAlertComponent implements OnInit {
    messageAlertTypeInp: MessageAlertTypeEnum;
    messageAlertIconInp: MessageAlertIconEnum;
    labelInp: string;
    contentInp: string;
    messageAlertTypeEnum: typeof MessageAlertTypeEnum;
    label: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageAlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MessageAlertComponent, "lib-message-alert", never, { "messageAlertTypeInp": "messageAlertTypeInp"; "messageAlertIconInp": "messageAlertIconInp"; "labelInp": "labelInp"; "contentInp": "contentInp"; }, {}, never, never>;
}
