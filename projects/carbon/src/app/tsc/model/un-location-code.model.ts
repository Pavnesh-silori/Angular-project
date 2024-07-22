export interface UNLCodeM{
        name:string;
        countryCode:string;
        locationCode:string;
        longitude:string;
        latitude:string
}

export class UNLCode implements UNLCode{
    name;
    countryCode;
    locationCode;
    longitude;
    latitude;
}