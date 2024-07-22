export class Scope3Activity implements Scope3ActivityM {
    recordID;
    calculationErrorReason;
    startDate;
    endDate;
    supplier;
    wasteType;
    wasteTreatment;
    wasteTreated;
    bill;
    emission;
}

export interface Scope3ActivityM {
    recordID: number,
    calculationErrorReason: string;
    startDate: string,
    endDate: string;
    supplier: string,
    wasteType: string;
    wasteTreatment: string;
    wasteTreated: string,
    bill: number,
    emission: number
}

export class WasteType implements WasteTypeM {
    id;
    keyID;
    name;
    treatmentMethodList: TreatmentMethodM[];
}

export interface WasteTypeM {
    id: number;
    keyID: string;
    name: string;
}

export class WasteTreatment implements WasteTreatmentM {
    keyID;
    value;
}

export interface WasteTreatmentM {
    keyID: string,
    value: string
}

export interface TreatmentMethodM {
    id: number;
    name: string;
    keyID: string;
}

class TreatmentMethod implements TreatmentMethodM {
    id;
    name;
    keyID;
}
