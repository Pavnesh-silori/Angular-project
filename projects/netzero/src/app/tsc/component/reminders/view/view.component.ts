import { Component, OnInit } from '@angular/core';

import { ReminderController } from '@netzero/controller/reminder.controller';

import { Moment } from 'moment';
import * as moment from 'moment';

import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';

import { ReminderM } from '@netzero/model/reminder.model';
import { ReminderDialogComponent } from '../reminder-dialog/reminder-dialog/reminder-dialog.component';

import { StorageService } from '@library/storage-service';
import { InvalidForm, MaterialFormFieldAppearance } from '@library/tsc-common';
import { ToastrService } from '@library/toastr-service';
import { DateService } from '@library/date';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
})

export class ViewComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    currentOrgID: any;

    today: Date;

    gridRows = 6;
    gridCols = 7;
    gridData: any;
    daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    durationViewFC: FormControl = new FormControl();
    durationFC = new FormControl(moment().format("YYYY-MM"));

    reminderM: ReminderM[] = [];

    constructor(
        private dialog: MatDialog,
        private reminderController: ReminderController,

        storageService: StorageService,
        public dateService: DateService,
        private toastrService: ToastrService
    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');
    }

    ngOnInit(): void {
        const today = moment().format('YYYY-MM');

        this.durationViewFC.setValue(today);
        this.durationFC.setValue(today);

        this.getReminderList();
        this.generateGridData(today);
    }

    monthSelectedHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>): void {
        datepicker.close();

        const duration = normalizedMonth.format('YYYY-MM');
        this.durationFC.setValue(duration);
        this.durationViewFC.setValue(duration);

        this.getReminderList();
        this.generateGridData(duration);
    }

    getReminderList() {
        if (this.durationViewFC.invalid) {
            this.toastrService.error(InvalidForm.INVALID_FORM_MESSAGE);
            return;
        }
        this.reminderController.getReminderDetails(this.currentOrgID, this.durationFC.value).subscribe(
            (reminderRes: ReminderM[]) => {
                this.reminderM = reminderRes;

                // Call the method to generate grid data
                this.generateGridData(this.durationFC.value);
            },
            error => {
                console.log('Error in getReminderList -', error);
                this.toastrService.error('Error in getting Reminder');
            }
        );
    }

    generateGridData(date) {
        const firstDayOfMonth = moment(date).startOf('month').day();
        const daysInMonth = moment(date).daysInMonth();
        const currentDate = moment().date(); // Get the current day of the month

        const gridData = [];
        for (let index = 0; index < this.gridCols * this.gridRows; index++) {
            const dayOfMonth = index - firstDayOfMonth + 1;
            const isToday = dayOfMonth === currentDate && moment(date).isSame(moment(), 'month');
            if (dayOfMonth >= 1 && dayOfMonth <= daysInMonth) {
                const monthDate = moment(date).startOf('month').add(dayOfMonth - 1, 'days').format('YYYY-MM-DD');
                const reminderDetails = this.getRemindersForDate(monthDate);
                gridData.push({ dayOfMonth, reminderDetails, isToday, monthDate });
            } else {
                gridData.push({ dayOfMonth: null, reminderDetails: null });
            }
        }

        this.gridData = gridData;
    }

    getRemindersForDate(monthDates) {
        let reminders = this.reminderM.find(reminder => reminder['date'] == monthDates)
        if (reminders) {
            return reminders
        }
    }

    seeReminders(date, reminderData) {
        const dialogRef = this.dialog.open(ReminderDialogComponent, {
            data: {
                date: date,
                reminderData: reminderData,
            },
            width: '500px',
            height: '400px',
        });
        dialogRef.afterClosed();
    }

}