import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatDatepicker } from '@angular/material/datepicker';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';

import * as moment from 'moment';
import { Moment } from 'moment';

import { FrequencyEnum } from '../../enum/frequency.enum';
import { FREQUENCY_CONSTANT } from '../../constant/frequency.constant';

import { StorageService } from '@library/storage-service';

@Component({
	selector: 'lib-date-filter',
	templateUrl: './date-filter.component.html',
	styleUrls: ['./date-filter.component.scss']
})
export class DateFilterComponent implements OnInit {

	@Input() frequency: any[] = [];
	@Input() defaultFlag: string = null;

	@Output()
	emitFilter = new EventEmitter();

	FrequencyEnum: FrequencyEnum;

	rootOrgID: any;
	currentOrgType: any;

	today: Date = new Date();
	durationField: any;
	durationValueFC = new FormControl(moment().format("YYYY-MM"));
	daterange = new FormControl();
	startDate = new FormControl(moment().startOf('month').format("YYYY-MM-DD"));
	endDate = new FormControl(moment().endOf('month').format("YYYY-MM-DD"));

	frequencyKeyIDFC = new FormControl();

	@ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;

	constructor(
		private storageService: StorageService,
	) { }

	ngOnInit(): void {
		if (this.defaultFlag) {
			this.frequencyKeyIDFC.patchValue(this.defaultFlag);
		}else {
			this.frequencyKeyIDFC.patchValue(FrequencyEnum.MONTHLY_KEY_ID);
		}

		if (this.frequency.length == 0) {
			this.frequency = FREQUENCY_CONSTANT;
		}

		this.frequencyChange();
	}

	frequencyChange() {
		let duration;
		let startDate;
		let endDate;
		switch (this.frequencyKeyIDFC.value) {
			case FrequencyEnum.DAILY_KEY_ID:
				duration = moment(this.today).format("YYYY-MM-DD");
				startDate = moment().format("YYYY-MM-DD");
				endDate = moment().format("YYYY-MM-DD");
				break;
			case FrequencyEnum.MONTHLY_KEY_ID:
				duration = moment(this.today).format("YYYY-MM");
				startDate = moment().startOf('month').format("YYYY-MM-DD");
				endDate = moment().endOf('month').format("YYYY-MM-DD");
				break;
			case FrequencyEnum.YEARLY_KEY_ID:
				duration = moment(this.today).format("YYYY");
				startDate = moment().startOf('year').format("YYYY-MM-DD");
				endDate = moment().endOf('year').format("YYYY-MM-DD");
				break;
			case FrequencyEnum.CUSTOM_KEY_ID:
				console.log("Frequency: ", this.frequencyKeyIDFC.value)
				break;
			default:
				console.log('undefined case encountered!');
		}
		this.durationValueFC.patchValue(duration);

		if (this.frequencyKeyIDFC.value != FrequencyEnum.CUSTOM_KEY_ID) {
			this.daterange.patchValue('');
			this.startDate.patchValue(startDate);
			this.endDate.patchValue(endDate);
			this.emitFilter.emit();
		}
	}

	openDatepicker() {
		if (this.frequencyKeyIDFC.value == FrequencyEnum.CUSTOM_KEY_ID) {
			this.pickerDirective.open();
		}
	}

	openDatepickerOnClick(datepicker: MatDatepicker<Moment>) {
		if (!datepicker.opened) {
			datepicker.open();
		}
	}

	takeFocusAway(durationField) {
		this.durationField = document.getElementById(durationField);
		this.durationField.classList.remove('mat-focused', 'mat-form-field-should-float');
	}

	dateSelectedHandler(chosenDate: Moment) {

		this.durationValueFC.patchValue(moment(chosenDate).format("YYYY-MM-DD"));

		this.startDate.patchValue(moment(chosenDate).format("YYYY-MM-DD"));
		this.endDate.patchValue(moment(chosenDate).format("YYYY-MM-DD"));
		this.emitFilter.emit();
	}

	monthSelectedHandler(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
		datepicker.close();
		let duration = moment(normalizedMonthAndYear).format("YYYY-MM");
		this.durationValueFC.patchValue(duration);

		this.startDate.patchValue(moment(normalizedMonthAndYear).startOf('month').format("YYYY-MM-DD"));
		this.endDate.patchValue(moment(normalizedMonthAndYear).endOf('month').format("YYYY-MM-DD"));
		this.emitFilter.emit();
	}

	yearSelectedHandler(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
		datepicker.close();
		let duration = moment(normalizedYear).format("YYYY");
		this.durationValueFC.patchValue(duration);
		this.startDate.patchValue(moment(normalizedYear).startOf('year').format("YYYY-MM-DD"));
		this.endDate.patchValue(moment(normalizedYear).endOf('year').format("YYYY-MM-DD"));

		this.emitFilter.emit();
	}

	customDateRange(selectedValue: any) {
		if (this.frequencyKeyIDFC.value == FrequencyEnum.CUSTOM_KEY_ID) {
			this.startDate.patchValue(moment(selectedValue.startDate).format('YYYY-MM-DD'));
			this.endDate.patchValue(moment(selectedValue.endDate).format('YYYY-MM-DD'));
			this.durationValueFC.patchValue(this.endDate);
			this.emitFilter.emit();
		}
	}
}
