export interface UnitM {
    id: number;
    name: string;
    type: string;
}

export class Unit implements UnitM {
    id;
    name;
    type;
}