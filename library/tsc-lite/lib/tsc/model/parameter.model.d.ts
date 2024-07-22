export interface ParameterM {
    id: number;
    name: string;
    type: string;
    label: string;
    unit: string;
    paramMetric: string;
    isCounter: boolean;
}
export declare class Parameter implements ParameterM {
    id: any;
    name: any;
    type: any;
    label: any;
    unit: any;
    paramMetric: any;
    isCounter: any;
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
    }>;
}
export declare class ConsumptionParameter implements ConsumptionParameterM {
    consumptionParameter: any;
}
export interface SavedConsumptionParameterM {
    consumptionParamID: number;
    dependentParameterID: number[];
}
export declare class SavedConsumptionParameter implements SavedConsumptionParameterM {
    consumptionParamID: any;
    dependentParameterID: any;
}
