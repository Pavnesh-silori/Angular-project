export interface ActivityI {
    id: number,
    name: string,
    keyID: string,
    scopeID: number
}

export class ActivityM implements ActivityI {
    id: number;
    name: string;
    keyID: string;
    scopeID: number;
}