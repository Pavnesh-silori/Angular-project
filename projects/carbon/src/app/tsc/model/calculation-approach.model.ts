export interface CalculationApproachI {
    id: number,
    name: string,
    keyID: string
}

export class CalculationApproach implements CalculationApproachI {
    id;
    name;
    keyID;
}
