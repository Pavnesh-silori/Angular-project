import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

import { FormControl } from '@angular/forms';

import { MatDatepicker } from '@angular/material/datepicker';

import { Moment } from 'moment';
import * as moment from 'moment-timezone';

import { DateInputTypeEnum, DateTypeEnum } from '../../enum/date.enum';

import { DateService } from '../../service/date.service';

// tsc-library
import { FormErrorEnum, MaterialFormFieldAppearance } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-date-input',
    templateUrl: './date-input.component.html',
    styleUrls: []
})

export class DateInputComponent implements OnInit {

    dateInputTypeEnum = DateInputTypeEnum;
    dateTypeEnum = DateTypeEnum;
    formErrorEnum = FormErrorEnum;
    materialFormFieldAppearance = MaterialFormFieldAppearance;

    @Input()
    materialFormFieldAppearanceInp: MaterialFormFieldAppearance;

    @Input()
    materialFieldWidthInp: boolean;

    @Input() frequencyInp: any

    @Input()
    dateInputTypeInp: DateInputTypeEnum;

    @Input()
    dateTypeInp: DateTypeEnum;

    @Input()
    timezoneInp: string;

    @Input()
    labelInp: string;

    @Input()
    rangeInp: any;

    @Input()
    cdrFormatInp: string;

    @Input()
    isMandatoryFieldInp: boolean;

    @Input()
    showRangeInp: boolean;

    @Input()
    showCdrRangeLabelInp: boolean;

    @Input()
    showDefaultDurationInp: boolean;

    @Input()
    showTimeInCDRInp: boolean;

    @Output()
    emitFilter = new EventEmitter();

    dateInputType: DateInputTypeEnum;
    dateType: DateTypeEnum = this.dateTypeEnum.INCLUSIVE;
    formFieldAppearance = '';

    date: any;
    label: string = '';
    cDRformat: string = 'YYYY-MM-DD'
    timezone: string = 'UTC';
    range: any = null;
    materialFieldWidth: boolean = false;
    isMandatoryField: boolean = false;
    showCdrRangeLabel: boolean = false;
    showRange: boolean = false;
    showDefaultDuration: boolean = false;
    showTimeInCDR: boolean = false;

    daterange = new FormControl();
    durationFC = new FormControl();
    startDateFC = new FormControl();
    endDateFC = new FormControl();

    constructor(
        public dateService: DateService,
    ) { }

    ngOnInit(): void {
        this.date = moment().tz(this.timezone).format();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.materialFormFieldAppearanceInp && this.materialFormFieldAppearanceInp) {
            this.formFieldAppearance = this.materialFormFieldAppearanceInp;
        }

        if (changes.materialFieldWidthInp && this.materialFieldWidthInp) {
            this.materialFieldWidth = this.materialFieldWidthInp;
        }

        if (changes.isMandatoryFieldInp && this.isMandatoryFieldInp) {
            this.isMandatoryField = this.isMandatoryFieldInp;
        }

        if (changes.labelInp && this.labelInp) {
            this.label = this.labelInp;
        }

        if (changes.cdrFormatInp && this.cdrFormatInp) {
            this.cDRformat = this.cdrFormatInp;
        }

        if (changes.showCdrRangeLabelInp && this.showCdrRangeLabelInp) {
            this.showCdrRangeLabel = this.showCdrRangeLabelInp;
        }

        if (changes.showRangeInp && this.showRangeInp) {
            this.showRange = this.showRangeInp;
        }

        if (changes.rangeInp && this.rangeInp) {
            this.range = this.rangeInp;
        }

        if (changes.showTimeInCDRInp && this.showTimeInCDRInp) {
            this.showTimeInCDR = this.showTimeInCDRInp;
        }

        if (changes.dateTypeInp && this.dateTypeInp) {
            this.dateType = this.dateTypeInp;
        }

        if (changes.timezoneInp && this.timezoneInp) {
            this.timezone = this.timezoneInp;
        }

        if (changes.dateInputTypeInp && this.dateInputTypeInp) {
            this.dateInputType = this.dateInputTypeInp;
        }

        if (changes.showDefaultDurationInp && this.showDefaultDurationInp) {
            this.showDefaultDuration = this.showDefaultDurationInp;
            this.patchDefaultConfig();
        }

        if (changes.frequencyInp && this.frequencyInp) {
            this.patchDefaultConfig();
        }

    }

    patchDefaultConfig() {

        if (this.dateInputType == this.dateInputTypeEnum.DAY_INPUT) {

            if (this.showDefaultDuration) {
                this.durationFC.patchValue(moment(this.date).format('YYYY-MM-DD'));
                this.startDateFC.patchValue(moment().startOf('day').tz(this.timezone).format());

                const endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
                    ? moment().tz(this.timezone).format()
                    : moment().add(1, 'days').startOf('day').tz(this.timezone).format();

                this.endDateFC.patchValue(endDateValue);
            }

        } else if (this.dateInputType == this.dateInputTypeEnum.MONTH_INPUT) {

            if (this.showDefaultDuration) {
                this.durationFC.patchValue(moment(this.date).format('YYYY-MM'));
                this.startDateFC.patchValue(moment().startOf('month').tz(this.timezone).format());

                const endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
                    ? moment().endOf('month').tz(this.timezone).format()
                    : moment().add(1, 'months').startOf('month').tz(this.timezone).format();

                this.endDateFC.patchValue(endDateValue);
            }

        } else if (this.dateInputType == this.dateInputTypeEnum.YEAR_INPUT) {

            if (this.showDefaultDuration) {
                this.durationFC.patchValue(moment(this.date).format('YYYY'));
                this.startDateFC.patchValue(moment().startOf('year').tz(this.timezone).format());

                const endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
                    ? moment().endOf('year').tz(this.timezone).format()
                    : moment().add(1, 'year').startOf('year').tz(this.timezone).format();

                this.endDateFC.patchValue(endDateValue);
            }

        } else if (this.dateInputType == this.dateInputTypeEnum.CUSTOM_INPUT) {

            if (this.showDefaultDuration) {
                if (this.showTimeInCDR) {
                    this.daterange.patchValue({ startDate: moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day'), endDate: moment() });
                } else {
                    this.daterange.patchValue({ startDate: moment().startOf('day'), endDate: moment() });
                }
                this.startDateFC.patchValue(moment(this.daterange.value.startDate).tz(this.timezone).format());
                this.endDateFC.patchValue(moment(this.daterange.value.endDate).tz(this.timezone).format());
            }

        }
    }

    ngAfterViewInit() {
        this.emitFilter.emit();
    }

    dayDateInput(selectedDate: Moment) {
        let duration = this.dateService.dailySelectedHandler(selectedDate);

        this.durationFC.patchValue(duration);
        this.startDateFC.patchValue(moment(selectedDate).startOf('day').tz(this.timezone).format());

        const endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
            ? moment(selectedDate).endOf('day').tz(this.timezone).format()
            : moment(selectedDate).add(1, 'days').startOf('day').tz(this.timezone).format();

        this.endDateFC.patchValue(endDateValue);

        this.emitFilter.emit();
    }

    monthDateInput(selectedDate: Moment, datepicker: MatDatepicker<Moment>) {
        let duration = this.dateService.handleDateInput(selectedDate, datepicker, "YYYY-MM");

        this.durationFC.patchValue(duration);
        this.startDateFC.patchValue(moment(selectedDate).startOf('month').tz(this.timezone).format());

        const endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
            ? moment(selectedDate).endOf('month').tz(this.timezone).format()
            : moment(selectedDate).add(1, 'months').startOf('month').tz(this.timezone).format();

        this.endDateFC.patchValue(endDateValue);

        this.emitFilter.emit();
    }

    yearDateInput(selectedDate: Moment, datepicker: MatDatepicker<Moment>) {
        let duration = this.dateService.handleDateInput(selectedDate, datepicker, "YYYY");

        this.durationFC.patchValue(duration);
        this.startDateFC.patchValue(moment(selectedDate).startOf('year').tz(this.timezone).format());

        const endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
            ? moment(selectedDate).endOf('year').tz(this.timezone).format()
            : moment(selectedDate).add(1, 'year').startOf('year').tz(this.timezone).format();

        this.endDateFC.patchValue(endDateValue);

        this.emitFilter.emit();
    }

    customDateInput(selectedDate: any) {
        this.startDateFC.patchValue(moment(selectedDate.startDate).tz(this.timezone).format());
        this.endDateFC.patchValue(moment(selectedDate.endDate).tz(this.timezone).format());

        this.emitFilter.emit();
    }

}