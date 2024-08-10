export interface DataAvailabilityM {
    id: number;
    date: string
    entityName: string;
    deviceName: string;
    parameterName: string;
    avgValue: number;
    minValue: number;
    maxValue: number;
    dataAvailability: number;
}

export class DataAvailability implements DataAvailabilityM {
    id;
    date;
    entityName;
    deviceName;
    parameterName;
    avgValue;
    minValue;
    maxValue;
    dataAvailability;
}