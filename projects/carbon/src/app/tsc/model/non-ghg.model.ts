export interface CbamRecordsM {
    recordID: number,
    reportingPeriod: string;
}
export class CbamRecords implements CbamRecordsM {
    recordID;
    reportingPeriod;
}
export interface ProcessM<T extends CbamRecordsM> {
    totalCount: number;
    records: T[];
}
export class Process<T extends CbamRecordsM> implements ProcessM<T> {
    totalCount;
    records;
}
export interface ChpPageM extends CbamRecordsM {
    quantityElectricity: string;
    quantityHeat: string;
}
export class ChpPage extends CbamRecords implements ChpPageM {
    quantityElectricity;
    quantityHeat;
}
export interface ProcessEPageM extends CbamRecordsM {
    process: string;
    electricitySource: string;
    quantityElectrictyConsumed: string;
}
export class ProcessEPage extends CbamRecords implements ProcessEPageM {
    process;
    electricitySource;
    quantityElectrictyConsumed;
}
export interface ProcessHPageM extends CbamRecordsM {
    process: string;
    heatSource: string;
    quantityHeatConsumed: string;
}
export class ProcessHPage extends CbamRecords implements ProcessHPageM {
    process;
    heatSource;
    quantityHeatConsumed;
}
export interface PrecursorCPageM extends CbamRecordsM {
    process: string;
    precursor: string;
    quantityConsumed: string;
}
export class PrecursorCPage extends CbamRecords implements PrecursorCPageM {
    process;
    precursor;
    quantityConsumed;
}
export interface PrecursorEPageM extends CbamRecordsM {
    process: string;
    precursor: string;
    quantityConsumed: string;
}
export class PrecursorEPage extends CbamRecords implements PrecursorEPageM {
    process;
    precursor;
    quantityConsumed;
}
export interface PurchasedPrecursorM extends CbamRecordsM {
    process: string;
    precursor: string;
    quantityExported: string;
}
export class PurchasedPrecursor extends CbamRecords implements PurchasedPrecursorM {
    process;
    precursor;
    quantityExported;
}
export interface ProductionLevelM extends CbamRecordsM {
    productionRoute: string;
    process: string;
    productName: string;
    quantityProduced: string;
}
export class ProductionLevel extends CbamRecords implements ProductionLevelM {
    productionRoute;
    process;
    productName;
    quantityProduced;
}


// export interface ChpAttributionsM {
//     totalCount: number;
//     records: ChpPageM[];
// }
// export class ChpAttributions implements ChpAttributionsM {
//     totalCount;
//     records;
// }
// export interface ChpPageM {
//     recordID: number;
//     reportingPeriod: string;
//     quantityElectricity: string;
//     quantityHeat: string;
// }
// export class ChpPage implements ChpPageM {
//     recordID;
//     reportingPeriod;
//     quantityElectricity;
//     quantityHeat;
// }
// export interface ElectricityConsumptionM {
//     totalCount: number;
//     records: ProcessEPageM[];
// }
// export class ElectricityConsumption implements ElectricityConsumptionM {
//     totalCount;
//     records;
// }
// export interface ProcessEPageM {
//     recordID: number;
//     reportingPeriod: string;
//     process: string;
//     electricitySource: string;
//     quantityElectrictyConsumed: string;
// }
// export class ProcessEPage implements ProcessEPageM {
//     recordID;
//     reportingPeriod;
//     process;
//     electricitySource;
//     quantityElectrictyConsumed;
// }
// export interface HeatConsumptionM {
//     totalCount: number;
//     records: ProcessHPageM[];
// }
// export class HeatConsumption implements HeatConsumptionM {
//     totalCount;
//     records;
// }
// export interface ProcessHPageM {
//     recordID: number;
//     reportingPeriod: string;
//     process: string;
//     heatSource: string;
//     quantityHeatConsumed: string;
// }
// export class ProcessHPage implements ProcessHPageM {
//     recordID;
//     reportingPeriod;
//     process;
//     heatSource;
//     quantityHeatConsumed;
// }

// export interface PrecursorConsumptionM {
//     totalCount: number;
//     records: PrecursorPageM[];
// }
// export class PrecursorConsumption implements PrecursorConsumptionM {
//     totalCount;
//     records;
// }
// export interface PrecursorPageM {
//     recordID: number;
//     reportingPeriod: string;
//     process: string;
//     precursor: string;
//     quantityConsumed: string;
// }
// export class PrecursorPage implements PrecursorPageM {
//     recordID;
//     reportingPeriod;
//     process;
//     precursor;
//     quantityConsumed;
// }
// export interface PurchasedPrecursorM {
//     totalCount: number;
//     records: PurchasedPrecursorPageM[];
// }
// export class PurchasedPrecursor implements PurchasedPrecursorM {
//     totalCount;
//     records;
// }
// export interface PurchasedPrecursorPageM {
//     recordID: number;
//     reportingPeriod: string;
//     process: string;
//     precursor: string;
//     quantityConsumed: string;
// }
// export class PurchasedPrecursorPage implements PurchasedPrecursorPageM {
//     recordID;
//     reportingPeriod;
//     process;
//     precursor;
//     quantityConsumed;

// }

export interface PageM {
    recordID: number,
    reportingPeriod: string,
    process: string,
    quantityOfSourceConsumed: string,
}

export class Page implements PageM {
    recordID;
    reportingPeriod;
    process;
    quantityOfSourceConsumed;
}
export interface ProcessFuelConsumptionByPageM extends PageM {
    combustionEquipment: string,
    fuelType: string,
    doc: any
}

export class ProcessFuelConsumptionByPage extends Page implements ProcessFuelConsumptionByPageM {
    combustionEquipment;
    fuelType;
    doc;
}
export interface ProcessFuelConsumptionM {
    totalCount: number;
    records: [ProcessFuelConsumptionByPageM];
}
export class ProcessFuelConsumption implements ProcessFuelConsumptionM {
    totalCount;
    records;
}