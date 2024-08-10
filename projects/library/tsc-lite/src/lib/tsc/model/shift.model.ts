export interface ShiftM {
    id: number;
    name: string;
    keyID: string;
    startTime: string;
    endTime: string;
}

export class Shift implements ShiftM {
    id;
    name;
    keyID;
    startTime;
    endTime;
}