export interface CategoryRecordDataM {
    recordID: number,
    transactionDate: string,
    enableRecord: boolean,
    account: string,
    supplier: string,
    amount: number,
    categoryStdID: number,
    activityStdID: number;
}

export interface CategoryRecordM {
    configuration: CategoryRecordDataM[];
    totalCount: number,
    categorizedRecord: number,
    startDate: string,
    endDate: string,
    currencySymbol: string;
}

export interface ImportRecordPreviewDataM {
    recordID: number,
    transactionDate: string,
    account: string,
    supplier: string,
    amount: number,
    category: string,
    activityName: string;
}

export interface ImportRecordPreviewM {
    configRecord: ImportRecordPreviewDataM[];
    totalCount: number;
    currencySymbol: string;
}

export interface ImportRecordHistoryFormDataM {
    configID: number,
    configName: string,
    methodID: string,
    methodType: string,
    startDate: string,
    endDate: string,
    createdDate: string,
    uploadedDate: string,
    categorizedDate: string,
    status: string,
    categorizedRecords: number,
    totalRecords: number,
    configPermission: {
        isConfigEdit: boolean;
        isCategorizeEdit: boolean;
    },
    uploadedBy: {
        name: string,
        profileImgUrl: string
    },
    categorizedBy: {
        name: string,
        profileImgUrl: string
    },
    createdBy: {
        name: string,
        profileImgUrl: string
    };
}

export interface ImportRecordHistoryM {
    records: ImportRecordHistoryFormDataM[];
    totalCount: number;
}

export interface ImportRecordsDataM {
    recordID: number,
    transactionDate: string,
    account: string,
    supplier: string,
    currencySymbol: string,
    amount: number,
    categoryID: number,
    categoryName: string,
    activityID: number,
    activityType: string,
    categorizePermission: string;
}

export interface ImportRecordM {
    records: ImportRecordsDataM[];
    totalCount: number;
}

export interface ImportRecordsEmissionDataM {
    recordID: 1,
    activityType: string,
    source: string,
    accountingPeriod: string,
    emission: string,
    emissionUnit: string
    databaseName: string,
    emissionFactor: string,
    lastUpdatedDate: string,
    lastUpdatedBy: {
        name: string,
        profileImgUrl: string;
    }
}

export interface ImportRecordsEmissionM {
    records: ImportRecordsEmissionDataM[];
    totalCount: number;
}

export interface CategoryMappingM {
    id: number,
    databaseName: string,
    categoryName: string
}
