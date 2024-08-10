import * as moment from "moment";

export const DATE_CONSTANT = {
    TODAY_YYYY_MM_DD: moment(new Date()).format("YYYY-MM-DD"),
    CURRENT_YEAR: new Date().getFullYear(),

    MAX_DATE: new Date('9999-12-31'),
    MAX_DATE_YYYY_MM_DD: moment(new Date('9999-12-31')).format("YYYY-MM-DD"),
    MAX_DATE_YYYY_MMM_DD: moment(new Date('9999-12-31')).format("YYYY-MMM-DD"),

    TIME_LIST_24HRS: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
};