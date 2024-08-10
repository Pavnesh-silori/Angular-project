export interface StaticI {
    id: number;
    keyID: string;
    name: string;
}

export class Static implements StaticI {
    id;
    keyID;
    name;
}
