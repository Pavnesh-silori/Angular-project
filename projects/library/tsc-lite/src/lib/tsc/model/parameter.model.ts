export interface ParameterM {
    id: number;
    name: string;
    type: string;
    label: string;
    unit: string;
    paramMetric: string;
    isCounter: boolean;
}

export class Parameter implements ParameterM {
    id;
    name;
    type;
    label;
    unit;
    paramMetric;
    isCounter;
}

export interface ConsumptionParameterM {
    consumptionParameter: Array<{
        consumptionParameterID: number;
        id: number;
        name: string;
        type: string;
        label: string;
        unit: string;
        isCounter: boolean;
        paramMetric: string;
        aggregation: Array<{
            keyID: string;
        }>;
        dependentParameter: ParameterM[];
    }>
}

export class ConsumptionParameter implements ConsumptionParameterM {
    consumptionParameter;
}

export interface SavedConsumptionParameterM {
    consumptionParamID: number;
    dependentParameterID: number[];
}

export class SavedConsumptionParameter implements SavedConsumptionParameterM {
    consumptionParamID;
    dependentParameterID;
}