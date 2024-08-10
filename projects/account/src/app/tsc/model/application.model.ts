export interface ApplicationM {
    id: number;
    name: string;
    keyID: string;
    description: string;
}

export class Application implements ApplicationM {
    id: number;
    name: string;
    keyID: string;
    description: string;
}
