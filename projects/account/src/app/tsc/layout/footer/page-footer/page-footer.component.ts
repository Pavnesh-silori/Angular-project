import { Component, OnInit } from '@angular/core';

import { COMMON_CONSTANT } from '@library/tsc-common';

@Component({
    selector: 'app-page-footer',
    templateUrl: './page-footer.component.html',
    styleUrls: ['./page-footer.component.scss']
})

export class PageFooterComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;

    constructor() { }

    ngOnInit() { }
}
