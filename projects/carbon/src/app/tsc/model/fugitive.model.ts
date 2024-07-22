export interface ShowFugitiveApproachI {
    showScreeningApproach: boolean,
    showServiceByContractorApproach: boolean,
    showServiceMyselfApproach: boolean,
    showPurchaseManufacturerApproach: boolean,
}

export class ShowFugitiveApproachM implements ShowFugitiveApproachI {
    showScreeningApproach;
    showServiceByContractorApproach;
    showServiceMyselfApproach;
    showPurchaseManufacturerApproach;
}

export interface ActiveFugitiveApproachI {
    createScreeningApproach: boolean,
    createServiceByContractorApproach: boolean,
    createServiceMyselfApproach: boolean,
    createPurchaseManufacturerApproach: boolean,
}

export class ActiveFugitiveApproachM implements ActiveFugitiveApproachI {
    createScreeningApproach;
    createServiceByContractorApproach;
    createServiceMyselfApproach;
    createPurchaseManufacturerApproach;
}


export interface InventoryI {
    id: number,
    recordID: number,
    gasID: number,
    gasName: string,
    recordDate: string,
    gasQuantity: number,
    gasQuantityUnitID: number,
    gasQuantityUnitName: string,
    userName: string,
    note: string,
    createdBy: number,
    creationDate: string,
    lastUpdatedBy: number,
    lastUpdationDate: string
}

export class InventoryM implements InventoryI {
    id;
    recordID;
    gasID;
    gasName;
    recordDate;
    gasQuantity;
    gasQuantityUnitID;
    gasQuantityUnitName;
    userName;
    note;
    createdBy;
    creationDate;
    lastUpdatedBy;
    lastUpdationDate;
}

export interface EquipmentCapacityI {
    id: number,
    recordID: number,
    equipmentGroupID: number,
    equipmentGroupName: number,
    recordDate: string,
    totalEquipmentCapacity: number,
    totalEquipmentCapacityUnitName: string,
    totalEquipmentCapacityUnitID: number,
    gasQuantity: number,
    gasQuantityUnitName: string,
    gasQuantityUnitID: number,
    docName: string,
    docID: number,
    docPath: string,
    userName: string,
    note: string,
    createdBy: number,
    creationDate: string,
    lastUpdatedBy: number,
    lastUpdationDate: string
}

export class EquipmentCapacityM implements EquipmentCapacityI {
    id;
    recordID;
    equipmentGroupID;
    equipmentGroupName;
    recordDate;
    totalEquipmentCapacity;
    totalEquipmentCapacityUnitName;
    totalEquipmentCapacityUnitID;
    gasQuantity;
    gasQuantityUnitName;
    gasQuantityUnitID;
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

export interface ProductManufactureI {
    id: number,
    recordID: number,
    gasID: number,
    gasName: string,
    recordDate: string,
    totalEquipmentCapacity: number,
    totalEquipmentCapacityUnitName: string,
    totalEquipmentCapacityUnitID: number,
    gasQuantity: number,
    gasQuantityUnitName: string,
    gasQuantityUnitID: number,
    docName: string,
    docID: number,
    docPath: string,
    equipmentTypeID: number,
    equipmentTypeKeyID: string,
    equipmentTypeName: string,
    userName: string,
    note: number,
    createdBy: number,
    creationDate: string,
    lastUpdatedBy: number,
    lastUpdationDate: string
}

export class ProductManufactureM implements ProductManufactureI {
    id;
    recordID;
    gasID;
    gasName;
    recordDate;
    totalEquipmentCapacity;
    totalEquipmentCapacityUnitName;
    totalEquipmentCapacityUnitID;
    gasQuantity;
    gasQuantityUnitName;
    gasQuantityUnitID;
    docName;
    docID;
    docPath;
    equipmentTypeID;
    equipmentTypeKeyID;
    equipmentTypeName;
    userName;
    note;
    createdBy;
    creationDate;
    lastUpdatedBy;
    lastUpdationDate;
}

export interface EquipmentServicingI {
    id: number,
    recordID: number,
    gasID: number,
    gasName: string,
    recordDate: string,
    gasQuantity: number,
    gasQuantityUnitID: number,
    gasQuantityUnitName: string,
    userName: string,
    note: string,
    createdBy: number,
    creationDate: string,
    lastUpdatedBy: number,
    lastUpdationDate: string,
    docName: string,
    docID: number,
    docPath: string
}

export class EquipmentServicingM implements EquipmentServicingI {
    id;
    recordID;
    gasID;
    gasName;
    recordDate;
    gasQuantity;
    gasQuantityUnitID;
    gasQuantityUnitName;
    userName;
    note;
    createdBy;
    creationDate;
    lastUpdatedBy;
    lastUpdationDate;
    docName;
    docID;
    docPath;
}

