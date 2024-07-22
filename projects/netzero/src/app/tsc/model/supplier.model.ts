export interface supplierM{
    supplierID: number,
    supplierName: string,
    supplierCode: string,
    supplierTypes: []
}

export interface SupplierTypeM{
    sourceTypeID: number;
    supplierID: number;
    supplierName: string;
    supplierKeyID: string;
    supplierOrgID: number ;
}

export class SupplierType{
    sourceTypeID;
    supplierID;
    supplierName;
    supplierKeyID;
    supplierOrgID;
}
