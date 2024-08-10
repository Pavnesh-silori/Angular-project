import { Injectable } from "@angular/core";

import * as moment from "moment";

@Injectable({
    providedIn: 'root'
})

export class DateService {

    constructor() { }

    getTimePassed(date) {
        return moment.utc(date).fromNow();
    }

    getTimeAgo(input: string | Date): string {
        if (!input) {
            return 'Invalid Date';
        }

        let value: Date;

        if (input instanceof Date) {
            value = input;
        } else if (typeof input === 'string') {
            // Try to parse the input string into a Date
            value = new Date(input);
            if (isNaN(value.getTime())) {
                return 'Invalid Date';
            }
        } else {
            return 'Invalid Date';
        }

        const seconds = Math.floor((+new Date() - +value) / 1000);
        if (seconds < 29) {
            return 'Just now';
        }

        const intervals = {
            'year': 31536000,
            'month': 2592000,
            'week': 604800,
            'day': 86400,
            'hour': 3600,
            'minute': 60,
            'second': 1
        };

        let counter;
        for (const i in intervals) {
            counter = Math.floor(seconds / intervals[i]);
            if (counter > 0) {
                if (counter === 1) {
                    return counter + ' ' + i + ' ago';
                } else {
                    return counter + ' ' + i + 's ago';
                }
            }
        }

        return 'Invalid Date';
    }

    getCurrentMonthDates(): { startDate: Date; endDate: Date } {
        const today = new Date();
        const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        const endDate = today;

        return { startDate, endDate };
    }

    getCurrentYear() {
        const currentYear = new Date().getFullYear();
        return currentYear;
    }

}
