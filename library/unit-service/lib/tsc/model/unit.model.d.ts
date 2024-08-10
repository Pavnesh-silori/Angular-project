export interface OldUnitM {
    unitID: number;
    uomName: string;
    uomCode: string;
    unitType: string;
    unitTypeName: string;
    unitSubType: string;
}
export declare class OldUnit implements OldUnitM {
    unitID: any;
    uomName: any;
    uomCode: any;
    unitType: any;
    unitTypeName: string;
    unitSubType: any;
}
export interface UnitM {
    id: number;
    name: string;
    uomCode: string;
    type: string;
    typeName: string;
    subType: string;
}
export declare class Unit implements UnitM {
    id: any;
    name: any;
    uomCode: any;
    type: any;
    typeName: string;
    subType: any;
}
