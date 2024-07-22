export interface RecordDataM {
    startDate: string;
    endDate: string;
    calculationApproachName: string;
    calculationApproachKeyID: string;
    dataSource: string;
    purchaseCount: number;
    salesCount: number;
    inventoryCapacity: {
        capacity: number;
        unit: string;
    }[];
}
export class RecordData implements RecordDataM {
    startDate;
    endDate;
    calculationApproachName;
    calculationApproachKeyID;
    dataSource;
    purchaseCount;
    salesCount;
    inventoryCapacity: {
        capacity;
        unit;
    }[];
}

interface GasGwpDataSetM {
    gasName: string;
    gasKeyID: string;
    gwpDatasetName: string;
    gwpDatasetkeyID: string;
    gwpValue: number;
  }

export class GasGwpDataSet implements GasGwpDataSetM{
    gasName;
    gasKeyID;
    gwpDatasetName;
    gwpDatasetkeyID;
    gwpValue;
}