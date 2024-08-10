import {
    Component,
    OnInit,
} from '@angular/core';

import { COMMON_CONSTANT } from '../../../../constant/common.constant'; 

@Component({
    selector: 'app-footer-one',
    templateUrl: './footer-one.component.html',
    styleUrls: ['./footer-one.component.scss']
})

export class FooterOneComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;

    constructor() {
    }

    ngOnInit() {
    }

}
