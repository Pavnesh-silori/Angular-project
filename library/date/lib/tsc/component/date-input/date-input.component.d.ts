import { EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Moment } from 'moment';
import { DateInputTypeEnum, DateTypeEnum } from '../../enum/date.enum';
import { DateService } from '../../service/date.service';
import { FormErrorEnum, MaterialFormFieldAppearance } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class DateInputComponent implements OnInit {
    dateService: DateService;
    dateInputTypeEnum: typeof DateInputTypeEnum;
    dateTypeEnum: typeof DateTypeEnum;
    formErrorEnum: typeof FormErrorEnum;
    materialFormFieldAppearance: typeof MaterialFormFieldAppearance;
    materialFormFieldAppearanceInp: MaterialFormFieldAppearance;
    materialFieldWidthInp: boolean;
    frequencyInp: any;
    dateInputTypeInp: DateInputTypeEnum;
    dateTypeInp: DateTypeEnum;
    timezoneInp: string;
    labelInp: string;
    rangeInp: any;
    cdrFormatInp: string;
    isMandatoryFieldInp: boolean;
    showRangeInp: boolean;
    showCdrRangeLabelInp: boolean;
    showDefaultDurationInp: boolean;
    showTimeInCDRInp: boolean;
    emitFilter: EventEmitter<any>;
    dateInputType: DateInputTypeEnum;
    dateType: DateTypeEnum;
    formFieldAppearance: string;
    date: any;
    label: string;
    cDRformat: string;
    timezone: string;
    range: any;
    materialFieldWidth: boolean;
    isMandatoryField: boolean;
    showCdrRangeLabel: boolean;
    showRange: boolean;
    showDefaultDuration: boolean;
    showTimeInCDR: boolean;
    daterange: FormControl;
    durationFC: FormControl;
    startDateFC: FormControl;
    endDateFC: FormControl;
    constructor(dateService: DateService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    patchDefaultConfig(): void;
    ngAfterViewInit(): void;
    dayDateInput(selectedDate: Moment): void;
    monthDateInput(selectedDate: Moment, datepicker: MatDatepicker<Moment>): void;
    yearDateInput(selectedDate: Moment, datepicker: MatDatepicker<Moment>): void;
    customDateInput(selectedDate: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateInputComponent, "lib-date-input", never, { "materialFormFieldAppearanceInp": "materialFormFieldAppearanceInp"; "materialFieldWidthInp": "materialFieldWidthInp"; "frequencyInp": "frequencyInp"; "dateInputTypeInp": "dateInputTypeInp"; "dateTypeInp": "dateTypeInp"; "timezoneInp": "timezoneInp"; "labelInp": "labelInp"; "rangeInp": "rangeInp"; "cdrFormatInp": "cdrFormatInp"; "isMandatoryFieldInp": "isMandatoryFieldInp"; "showRangeInp": "showRangeInp"; "showCdrRangeLabelInp": "showCdrRangeLabelInp"; "showDefaultDurationInp": "showDefaultDurationInp"; "showTimeInCDRInp": "showTimeInCDRInp"; }, { "emitFilter": "emitFilter"; }, never, never>;
}
