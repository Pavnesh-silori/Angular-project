export interface PurchasedGoodsServicesI {
    id: number;
    recordID: number;
    activityKeyID: number;
    activityDataID: number;

    supplierID: number;
    supplierName: string;

    sourceTypeID: number;
    sourceTypeName: string;
    productQuantity: number;
    productQuantityUnitName: string;
    productQuantityUnitID: number;

    recordDate: string;
    startDate: string;
    endDate: string;

    docName: string;
    docID: number;
    docPath: string;
    userName: string;
    note: number;
    createdBy: number;
    creationDate: string;
    lastUpdatedBy: number;
    lastUpdationDate: string;
    file: any;

    materialTypeID: number;
    materialTypeName: string;
    materialTypeOriginID: number;
    materialTypeOriginName: string;
    activityMetadata: any;
    activityData: any;
}

export class PurchasedGoodsServicesM implements PurchasedGoodsServicesI {
    id: number;
    recordID: number;
    activityKeyID: number;
    activityDataID: number;

    supplierID: number;
    supplierName: string;

    sourceTypeID: number;
    sourceTypeName: string;
    productQuantity: number;
    productQuantityUnitName: string;
    productQuantityUnitID: number;

    recordDate: string;
    startDate: string;
    endDate: string;

    docID: number;
    docName: string;
    docType: string;
    docPath: string;
    file: any;

    userName: string;
    note: number;
    createdBy: number;
    creationDate: string;
    lastUpdatedBy: number;
    lastUpdationDate: string;

    materialTypeID: number;
    materialTypeName: string;
    materialTypeOriginID: number;
    materialTypeOriginName: string;

    activityMetadata: any;
    activityData: any;

    constructor(data?: PurchasedGoodsServicesI) {
        if (data) {
            this.$setData(data);
        }
    }

    $setData(data: PurchasedGoodsServicesI): this {
        Object.assign(this, data);
        return this;
    }

    getID(): number {
        return this.id;
    }

    getRecordID(): number {
        return this.recordID;
    }

    getActivityKeyID(): number {
        return this.activityKeyID;
    }

    getActivityDataID(): number {
        return this.activityDataID;
    }

    getSupplierID(): number {
        return this.supplierID;
    }

    getProductName(): number {
        return this.supplierID;
    }

    getProductID(): number {
        return this.supplierID;
    }

    getSupplierName(): string {
        return this.supplierName;
    }

    getSourceID(): number {
        return this.sourceTypeID;
    }

    getSourceName(): string {
        return this.sourceTypeName;
    }

    getProductQuantity(): number {
        return this.productQuantity;
    }

    getProductQuantityUnitName(): string {
        return this.productQuantityUnitName;
    }

    getProductQuantityUnitID(): number {
        return this.productQuantityUnitID;
    }

    getRecordDate(): string {
        return this.recordDate;
    }

    getStartDate(): string {
        return this.startDate;
    }

    getEndDate(): string {
        return this.endDate;
    }

    getFile(): any {
        return this.file;
    }

    getDocName(): string {
        return this.docName;
    }

    getDocID(): number {
        return this.docID;
    }

    getDocType(): string {
        return this.docType;
    }

    getDocPath(): string {
        return this.docPath;
    }

    getUserName(): string {
        return this.userName;
    }

    getNote(): number {
        return this.note;
    }

    getCreatedBy(): number {
        return this.createdBy;
    }

    getCreationDate(): string {
        return this.creationDate;
    }

    getLastUpdatedBy(): number {
        return this.lastUpdatedBy;
    }

    getLastUpdationDate(): string {
        return this.lastUpdationDate;
    }

    getMaterialTypeID(): number {
        return this.materialTypeID;
    }

    getMaterialTypeName(): string {
        return this.materialTypeName;
    }

    getMaterialTypeOriginID(): number {
        return this.materialTypeOriginID;
    }

    getMaterialTypeOriginName(): string {
        return this.materialTypeOriginName;
    }

    setID(id: number): this {
        this.id = id;
        return this;
    }

    setRecordID(recordID: number): this {
        this.recordID = recordID;
        return this;
    }

    setSourceID(id: number): this {
        this.sourceTypeID = id;
        return this;
    }

    setSourceName(name: string): this {
        this.sourceTypeName = name;
        return this;
    }

    setRecordDate(recordDate: string): this {
        this.recordDate = recordDate;
        return this;
    }

    setProductQuantity(productQuantity: number): this {
        this.productQuantity = productQuantity;
        return this;
    }

    setProductQuantityUnitName(productQuantityUnitName: string): this {
        this.productQuantityUnitName = productQuantityUnitName;
        return this;
    }

    setProductQuantityUnitID(productQuantityUnitID: number): this {
        this.productQuantityUnitID = productQuantityUnitID;
        return this;
    }

    setDocName(docName: string): this {
        this.docName = docName;
        return this;
    }

    setDocID(docID: number): this {
        this.docID = docID;
        return this;
    }

    setDocPath(docPath: string): this {
        this.docPath = docPath;
        return this;
    }

    setUserName(userName: string): this {
        this.userName = userName;
        return this;
    }

    setNote(note: number): this {
        this.note = note;
        return this;
    }

    setCreatedBy(createdBy: number): this {
        this.createdBy = createdBy;
        return this;
    }

    setCreationDate(creationDate: string): this {
        this.creationDate = creationDate;
        return this;
    }

    setLastUpdatedBy(lastUpdatedBy: number): this {
        this.lastUpdatedBy = lastUpdatedBy;
        return this;
    }

}

export interface PurchasedGoodsServicesTypesI {
    id: number,
    recordID: number,
    productID: number,
    productName: string,
    recordDate: string,
    productQuantity: number,
    productQuantityUnitName: string,
    productQuantityUnitID: number,
    docName: string,
    docID: number,
    docPath: string,
    userName: string,
    note: number,
    createdBy: number,
    creationDate: string,
    lastUpdatedBy: number,
    lastUpdationDate: string
}

export class PurchasedGoodsServicesTypesM implements PurchasedGoodsServicesTypesI {
    id;
    recordID;
    productID;
    productName;
    recordDate;
    productQuantity;
    productQuantityUnitName;
    productQuantityUnitID;
    docName;
    docID;
    docPath;
    userName;
    note;
    createdBy;
    creationDate;
    lastUpdatedBy;
    lastUpdationDate;
}