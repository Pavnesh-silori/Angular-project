export interface FuelM {
    code: string;
    name: string;
    description: string;
    netCalorificValue: number;
    netCalorificValueunit: string;
    biomassPct: number;
    oxidationFactor: number;
}

export class Fuel implements FuelM {
    code;
    name;
    description;
    netCalorificValue;
    netCalorificValueunit;
    biomassPct;
    oxidationFactor;
}

export interface FuelPageM {
    totalCount: number;
    pageNo: number;
    fuel: FuelM[]
}

export interface newFuelM {
    id: number;
    code: string;
    name: string;
    description: string;
    netCalorificValue: number;
    ncvNumeratorUnitCode: string;
    netCalorificValueUnitID: number;
    biomassPct: number;
    ncvDenominatorUnitCode: string;
    oxidationFactor: number;
}

export class newFuel implements newFuelM {
    id;
    code;
    name;
    description;
    netCalorificValue;
    ncvNumeratorUnitCode;
    netCalorificValueUnitID;
    ncvDenominatorUnitCode;
    biomassPct;
    oxidationFactor;
}
