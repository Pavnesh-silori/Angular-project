export interface OldUnitM {
    unitID: number;
    uomName: string;
    uomCode: string;
    unitType: string;
    unitTypeName: string;
    unitSubType: string;
}

export class OldUnit implements OldUnitM {
    unitID = null;
    uomName = null;
    uomCode = null;
    unitType = null;
    unitTypeName: string;
    unitSubType = null;
}

export interface UnitM {
    id: number;
    name: string;
    uomCode: string;
    type: string;
    typeName: string;
    subType: string;
}

export class Unit implements UnitM {
    id = null;
    name = null;
    uomCode = null;
    type = null;
    typeName: string;
    subType = null;
}
