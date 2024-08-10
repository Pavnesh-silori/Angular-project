import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';

import { DateInputTypeEnum, DateTypeEnum } from '../../enum/date.enum';
import { FrequencyEnum } from '../../enum/frequency.enum';
import { FREQUENCY_CONSTANT } from '../../constant/frequency.constant';

import { DateInputComponent } from '../date-input/date-input.component';

import { DateService } from '../../service/date.service';

// tsc-library
import { MaterialFormFieldAppearance } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-date-filter-two',
    templateUrl: './date-filter-two.component.html',
    styleUrls: []
})

export class DateFilterTwoComponent implements OnInit {
    frequencyEnum = FrequencyEnum;
    dateInputTypeEnum = DateInputTypeEnum;

    @Input()
    materialFormFieldAppearanceInp: MaterialFormFieldAppearance;

    @Input()
    frequencyInp: any[] = [];

    @Input()
    defaultFrequencyInp: string;

    @Input()
    dateTypeInp: DateTypeEnum;

    @Input()
    timezoneInp: string;

    @Input()
    labelInp: string;

    @Input()
    showDefaultDurationInp: boolean;

    @Input()
    cdrFormatInp: string;                   /*CDR: Custom Date Range */

    @Input()
    rangeInp: any;

    @Input()
    showRangeInp: boolean;

    @Input()
    showTimeInCDRInp: boolean;

    @Input()
    showCdrRangeLabelInp: boolean;

    formFieldAppearance = MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE_STANDARD;
    frequency = FREQUENCY_CONSTANT;

    label: string;
    dateType: string;
    cdrFormat: string;
    showDefaultDuration: boolean;
    range: any;
    showRange: boolean;
    showTimeInCDR: boolean;
    showCdrRangeLabel: boolean;
    timezone: string;

    frequencyFC = new FormControl(this.frequencyEnum.DAILY);
    durationFC = new FormControl();
    startDateFC = new FormControl();
    endDateFC = new FormControl();

    @Output() dateFilterEmitter: EventEmitter<{ frequency: string, duration: string, startDate: string, endDate: string }> = new EventEmitter();

    @ViewChild('dayDateInput') dayDateInput: DateInputComponent;
    @ViewChild('monthDateInput') monthDateInput: DateInputComponent;
    @ViewChild('yearDateInput') yearDateInput: DateInputComponent;
    @ViewChild('customDateInput') customDateInput: DateInputComponent;

    constructor(
        public dateService: DateService,
    ) { }

    ngOnInit(): void {
        this.formFieldAppearance = this.materialFormFieldAppearanceInp;
        this.dateType = this.dateTypeInp;
        this.timezone = this.timezoneInp;
        this.label = this.labelInp;
        this.cdrFormat = this.cdrFormatInp;
        this.range = this.rangeInp;
        this.showRange = this.showRangeInp;
        this.showTimeInCDR = this.showTimeInCDRInp;
        this.showCdrRangeLabel = this.showCdrRangeLabelInp;
        this.showRange = this.showRangeInp;
        this.showTimeInCDR = this.showTimeInCDRInp;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.defaultFrequencyInp && this.defaultFrequencyInp) {
            this.frequencyFC.patchValue(this.defaultFrequencyInp);
        }

        if (changes.frequencyInp && this.frequencyInp) {
            this.frequency = this.frequencyInp;
        }

        if (changes.showDefaultDurationInp && this.showDefaultDurationInp) {
            this.showDefaultDuration = this.showDefaultDurationInp;
        }
    }

    onChange() {
        let duration;
        let startDate;
        let endDate;

        switch (this.frequencyFC.value) {
            case this.frequencyEnum.DAILY:
                duration = this.dayDateInput.durationFC.value;
                startDate = this.dayDateInput.startDateFC.value;
                endDate = this.dayDateInput.endDateFC.value;
                break;
            case this.frequencyEnum.MONTHLY:
                duration = this.monthDateInput.durationFC.value;
                startDate = this.monthDateInput.startDateFC.value;
                endDate = this.monthDateInput.endDateFC.value;
                break;
            case this.frequencyEnum.YEARLY:
                duration = this.yearDateInput.durationFC.value;
                startDate = this.yearDateInput.startDateFC.value;
                endDate = this.yearDateInput.endDateFC.value;
                break;
            case this.frequencyEnum.CUSTOM:
                duration = this.customDateInput.durationFC.value;
                startDate = this.customDateInput.startDateFC.value;
                endDate = this.customDateInput.endDateFC.value;
                break;
            default:
                console.log('undefined case encountered!');
        }

        this.durationFC.patchValue(duration);
        this.startDateFC.patchValue(startDate);
        this.endDateFC.patchValue(endDate);

        this.dateFilterEmitter.emit({ frequency: this.frequencyFC.value, duration: this.durationFC.value, startDate: this.startDateFC.value, endDate: this.endDateFC.value });
    }

}