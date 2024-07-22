import { ActivityM } from "./activity.model";

export interface ScopeM {
    id: number;
    keyID: string;
    name: string;
}

export class Scope implements ScopeM {
    id;
    keyID;
    name;
}
export interface ScopeWithActivityM {
    id: number;
    keyID: string;
    name: string;
    activity: ActivityM[];
}

export class ScopeWithActivity implements ScopeWithActivityM {
    id;
    keyID;
    name;
    activity;
}
