export interface TimeZoneM {
    timeZoneID: number;
    timeZoneName: string;
    gmtOffSet: string;
}

export class TimeZone implements TimeZoneM{
    timeZoneID;
    timeZoneName;
    gmtOffSet;
}
