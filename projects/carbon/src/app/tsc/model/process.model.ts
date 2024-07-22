export interface ProcessM {
    id: number,
    name: string,
    description: string,
    dataInputField: string,
    isCBAMProcess: boolean,
    input: InputM[],
    output: OutputM[]
}

export class Process implements ProcessM {
    id: number;
    name: string;
    description: string;
    dataInputField: string;
    isCBAMProcess: boolean;
    input: InputM[];
    output: OutputM[];
}

export interface InputM {
    typeID: number;
    typeKeyID: string;
    typeName: string;
    fuelID: number;
    productID: number;
    sourceID: number;

}

export interface OutputM {
    typeID: number;
    typeKeyID: string;
    typeName: string;
    productID: number;
    treatmentID: number;
    generationID: number;
}
