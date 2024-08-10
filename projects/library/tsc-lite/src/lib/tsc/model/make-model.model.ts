export interface MakeModelI {
    id: number;
    name: string;
}

export class MakeModel implements MakeModelI {
    id;
    name;
}