import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { FrequencyService } from '@carbon/service/frequency.service';

// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';

import { DateFormatEnum, DateService } from '@library/date';
// /tsc-library/

@Component({
    selector: 'app-scheduler-view',
    templateUrl: './scheduler-view.component.html',
    styles: [
    ]
})

export class SchedulerViewComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;
    DateFormatEnum = DateFormatEnum;

    @Input() activityConfigSchedulerInp: any;

    activityConfigScheduler: any;

    constructor(
        private frequencyService: FrequencyService,

        // tsc-library
        private dateService: DateService
        // /tsc-library/
    ) { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.activityConfigSchedulerInp && this.activityConfigSchedulerInp) {
            this.activityConfigScheduler = this.activityConfigSchedulerInp;
        }
    }

}
