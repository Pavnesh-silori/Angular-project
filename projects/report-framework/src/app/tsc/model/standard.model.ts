export interface StandardI {
    id: number,
    name: string
    keyID: number,
}

export class Standard implements StandardI {
    id;
    name;
    keyID;
}