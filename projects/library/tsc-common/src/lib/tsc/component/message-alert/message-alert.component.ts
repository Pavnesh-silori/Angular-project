import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { MessageAlertIconEnum, MessageAlertTypeEnum } from '../../enum/message-alert.enum';

@Component({
    selector: 'lib-message-alert',
    templateUrl: './message-alert.component.html',
    styles: [
    ]
})

export class MessageAlertComponent implements OnInit {
    @Input()
    messageAlertTypeInp: MessageAlertTypeEnum;

    @Input()
    messageAlertIconInp: MessageAlertIconEnum;

    @Input()
    labelInp: string;

    @Input()
    contentInp: string;

    @Input()
    showCloseBtnInp: boolean;

    messageAlertTypeEnum = MessageAlertTypeEnum;
    label: string = '';
    showCloseBtn: boolean = false;
    showInfo = true;

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.labelInp && this.labelInp) {
            this.label = this.labelInp;
        }

        if (changes.showCloseBtnInp && this.showCloseBtnInp) {
            this.showCloseBtn = this.showCloseBtnInp;
        }
    }

}