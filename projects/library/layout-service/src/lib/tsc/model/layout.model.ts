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

export class Layout implements LayoutM {
    id;
    name;
    isDefault;
    description;
}