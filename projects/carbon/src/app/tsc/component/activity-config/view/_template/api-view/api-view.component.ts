import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'app-api-view',
    templateUrl: './api-view.component.html',
    styles: [
    ]
})

export class ApiViewComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;

    @Input() activityConfigApiInp: any;

    activityConfigApi: any;

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.activityConfigApiInp && this.activityConfigApiInp) {
            this.activityConfigApi = this.activityConfigApiInp;
        }
    }
}
