export interface UniqueIDCode {
    uniqueID: string;
    uniqueCode: string;
}
export interface ProductM {
    id: number;
    name: string;
    description: string;
    productionRoute: ProductionRouteM[];
}
export class Product implements ProductM {
    id;
    name;
    description: string;
    productionRoute;
}
export interface ProductionRouteM {
    id: number;
    name: string;
}
export interface ProductAndServiceM {
    name: string;
    code: string;
    description: string;
    type: string;
    isCbamCompliant: boolean;
    productionRouteName: string;
    categoryName: string[];
    productCategory: any[];
    categoryID: number[];
    uniqueIDCodes: UniqueIDCode[];
    cn: string;
    hsn: string;
    ean: string;
    upc: string;
    isbn: string;
    aggregatedCode: string;
    keyID: string;
    productTypeName: string;
}
export class ProductAndService implements ProductAndServiceM {
    productCategory: any[];
    name;
    code;
    description;
    type;
    isCbamCompliant;
    productionRouteName: string;
    categoryName;
    categoryID;
    uniqueIDCodes;
    cn;
    hsn;
    ean;
    upc;
    isbn;
    aggregatedCode;
    keyID;
    productTypeName;
}

export interface ProductCategoryM {
    id: number;
    name: string;
    keyID: string;
}

export class ProductCategory implements ProductCategoryM {
    id;
    name;
    keyID;
}

export interface ProductPageDataM {
    totalCount: number;
    record: ProductData[];
}
export interface ProductData {
    id: number;
    code: number;
    name: String;
    category: string[];
    isCbam: boolean;
    productionRouteID: number;
}

