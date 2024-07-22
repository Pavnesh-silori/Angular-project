export interface EsgActivityTypeI {
    id: number;
    name: string;
    esgTypeName: string;
    esgTypeKeyID: string;
}

export class EsgActivityType implements EsgActivityTypeI {
    id;
    name;
    esgTypeName;
    esgTypeKeyID;
}
