import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Moment } from 'moment';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { MatDatepicker } from '@angular/material/datepicker';
import { FrequencyEnum } from '../../enum/frequency.enum';
import { DateService } from '../../service/date.service';
import * as i0 from "@angular/core";
export declare class DateFilterComponent implements OnInit {
    dateService: DateService;
    frequencyOptions: any[];
    defaultSelectedFrequency: string;
    emitFilter: EventEmitter<any>;
    FrequencyEnum: typeof FrequencyEnum;
    today: Date;
    daterange: FormControl;
    frequencyFC: FormControl;
    durationFC: FormControl;
    startDateFC: FormControl;
    endDateFC: FormControl;
    durationField: any;
    pickerDirective: DaterangepickerDirective;
    constructor(dateService: DateService);
    ngOnInit(): void;
    frequencyChange(): void;
    openDatepicker(): void;
    openDatepickerOnClick(datepicker: MatDatepicker<Moment>): void;
    takeFocusAway(durationField: any): void;
    dailyDateSelectedHandler(chosenDate: Moment): void;
    monthlyDateSelectedHandler(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>): void;
    yearlyDateSelectedHandler(normalizedYear: Moment, datepicker: MatDatepicker<Moment>): void;
    customDateRange(selectedValue: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateFilterComponent, "lib-date-filter", never, { "frequencyOptions": "frequencyOptions"; "defaultSelectedFrequency": "defaultSelectedFrequency"; }, { "emitFilter": "emitFilter"; }, never, never>;
}
