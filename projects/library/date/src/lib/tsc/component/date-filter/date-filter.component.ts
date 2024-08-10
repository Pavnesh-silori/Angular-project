import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';

import { Moment } from 'moment';
import * as moment from 'moment';

import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { MatDatepicker } from '@angular/material/datepicker';

import { FrequencyEnum } from '../../enum/frequency.enum';
import { FREQUENCY_CONSTANT } from '../../constant/frequency.constant';

import { DateService } from '../../service/date.service';
@Component({
    selector: 'lib-date-filter',
    templateUrl: './date-filter.component.html',
    styleUrls: ['./date-filter.component.scss']
})

export class DateFilterComponent implements OnInit {

    @Input() frequencyOptions: any[] = [];
    @Input() defaultSelectedFrequency: string = null;

    @Output() emitFilter = new EventEmitter();

    FrequencyEnum = FrequencyEnum;

    today: Date = new Date();

    daterange = new FormControl();

    frequencyFC = new FormControl();
    durationFC = new FormControl();
    startDateFC = new FormControl();
    endDateFC = new FormControl();

    durationField: any;

    @ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;

    constructor(
        public dateService: DateService,
    ) { }

    ngOnInit(): void {
        this.frequencyFC.patchValue(this.defaultSelectedFrequency || FrequencyEnum.MONTHLY);
        this.frequencyOptions = this.frequencyOptions.length ? this.frequencyOptions : FREQUENCY_CONSTANT;
        this.frequencyChange();
    }

    frequencyChange() {
        let duration;
        let startDate;
        let endDate;

        switch (this.frequencyFC.value) {
            case FrequencyEnum.DAILY:
                duration = moment(this.today).format("YYYY-MM-DD");
                startDate = moment().startOf('day').utc().format();
                endDate = moment().endOf('day').utc().format();
                break;
            case FrequencyEnum.MONTHLY:
                duration = moment(this.today).utc().format("YYYY-MM");
                startDate = moment().startOf('month').utc().format();
                endDate = moment().endOf('month').utc().format();
                break;
            case FrequencyEnum.YEARLY:
                duration = moment(this.today).utc().format("YYYY");
                startDate = moment().startOf('year').utc().format();
                endDate = moment().endOf('year').utc().format();
                break;
            case FrequencyEnum.CUSTOM:
                console.log("frequency: ", this.frequencyFC.value)
                break;
            default:
                console.log('undefined case encountered!');
        }

        this.durationFC.patchValue(duration);

        if (this.frequencyFC.value != FrequencyEnum.CUSTOM) {
            this.daterange.patchValue('');
            this.startDateFC.patchValue(startDate);
            this.endDateFC.patchValue(endDate);
            this.emitFilter.emit();
        }
    }

    openDatepicker() {
        if (this.frequencyFC.value == FrequencyEnum.CUSTOM) {
            this.pickerDirective.open();
        }
    }

    openDatepickerOnClick(datepicker: MatDatepicker<Moment>) {
        this.dateService.openDatepickerOnClick(datepicker);
    }

    takeFocusAway(durationField) {
        this.durationField = document.getElementById(durationField);
        this.durationField.classList.remove('mat-focused', 'mat-form-field-should-float');
    }

    dailyDateSelectedHandler(chosenDate: Moment) {
        let duration = this.dateService.dailySelectedHandler(chosenDate);
        this.durationFC.patchValue(duration);
        this.startDateFC.patchValue(moment(chosenDate).startOf('day').utc().format());
        this.endDateFC.patchValue(moment(chosenDate).endOf('day').utc().format());
        this.emitFilter.emit();
    }

    monthlyDateSelectedHandler(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
       let duration = this.dateService.monthSelectedHandler(normalizedMonthAndYear,datepicker);
        this.durationFC.patchValue(duration);
        this.startDateFC.patchValue(moment(normalizedMonthAndYear).startOf('month').utc().format());
        this.endDateFC.patchValue(moment(normalizedMonthAndYear).endOf('month').utc().format());
        this.emitFilter.emit();
    }

    yearlyDateSelectedHandler(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
        let duration = this.dateService.yearSelectedHandler(normalizedYear,datepicker);
        this.durationFC.patchValue(duration);
        this.startDateFC.patchValue(moment(normalizedYear).startOf('year').utc().format());
        this.endDateFC.patchValue(moment(normalizedYear).endOf('year').utc().format());

        this.emitFilter.emit();
    }

    customDateRange(selectedValue: any) {
        if (this.frequencyFC.value == FrequencyEnum.CUSTOM) {
            this.startDateFC.patchValue(moment(selectedValue.startDate).utc().format());
            this.endDateFC.patchValue(moment(selectedValue.endDate).utc().format());
            this.durationFC.patchValue(this.endDateFC);
            this.emitFilter.emit();
        }
    }
}
