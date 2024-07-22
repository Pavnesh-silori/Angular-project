export interface PageM<T> {
    totalCount: number;
    records: T[];
}
export interface LayoutM {
    id: number;
    name: string;
    isDefault: boolean;
    description: string;
}
export declare class Layout implements LayoutM {
    id: any;
    name: any;
    isDefault: any;
    description: any;
}
