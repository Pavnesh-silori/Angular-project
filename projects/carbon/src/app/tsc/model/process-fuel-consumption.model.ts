export interface ProcessFuelConsumptionPageI {
    id: number,
    recordID: number,
    startDate: string,
    endDate: string,
    processName: string,
    processID: number,
    source: string,
    fuel: string,
    fuelConsumed: number,
    fuelConsumedUnitID: number,
    fuelConsumedUomCode: string
}

export class ProcessFuelConsumptionPage implements ProcessFuelConsumptionPageI {
    id;
    recordID;
    startDate;
    endDate;
    processName;
    processID;
    source;
    fuel;
    fuelConsumed;
    fuelConsumedUnitID;
    fuelConsumedUomCode;
}