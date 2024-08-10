export interface StateM {
    stateCode: string;
    stateName: string;
}

export class State implements StateM{
    stateCode;
    stateName;
}