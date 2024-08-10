export interface LookupRequestM {
    lookupCode: string[],
    lookupKey: string[]
}

export interface LookupValueM {
    code: string;
    description: string;
    id: number;
    keyID: string;
    lookupKey: string;
    name: string;
}

// export class LookupValue implements LookupValueM {
//     code: string;
//     description: string;
//     id: number;
//     keyID: string;
//     lookupKey: string;
//     name: string;
// }
