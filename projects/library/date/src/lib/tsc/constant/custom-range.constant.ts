import * as moment from "moment";

export const CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE = {
    'Today': [moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day'), moment()],
    'Yesterday': [moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(1, 'days'), moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day')],
    'Last 7 Days': [moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(7, 'days'), moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day')],
    'Last 30 Days': [moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(30, 'days'), moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day')],
    'This Month': [moment().startOf('month'), moment().add(1, 'months').startOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().startOf('month')]
};