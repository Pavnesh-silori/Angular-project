export interface ApplicationM {
    id: number;
    name: string;
    keyID: string;
    description: string;
    url: string;
}
export declare class Application implements ApplicationM {
    id: any;
    name: any;
    keyID: any;
    description: any;
    url: any;
}
export interface RoleM {
    id: number;
    name: string;
    totalUsers: number;
}
export declare class Role implements RoleM {
    id: any;
    name: any;
    totalUsers: any;
}
export interface UserApplicationM {
    id: number;
    name: string;
    subscriptionStatus: string;
    roles: Role[];
}
export interface RootObjectM {
    application: Application[];
}
export declare class RootObject implements RootObjectM {
    application: Application[];
}
export declare class UserApplication implements UserApplicationM {
    id: any;
    name: any;
    subscriptionStatus: any;
    roles: Role[];
}
