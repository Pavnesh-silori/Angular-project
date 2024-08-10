export interface AggregateDataRequestM {
    interval: string;
    entityType: string;
    shiftKey: string;
    deviceID: number[];
    entityID: number[];
    params: Array<{
        name: string;
        dsAgg: string;
        agg: string;
        source_or_load: string;
        sourceLoadType: string;
    }>;
    showImmediateChildOnly: boolean;
    groupAll: boolean;
    startTime: string;
    endTime: string;
}
export declare class AggregateDataRequest implements AggregateDataRequestM {
    interval: any;
    entityType: any;
    shiftKey: any;
    deviceID: any;
    entityID: any;
    params: any;
    showImmediateChildOnly: boolean;
    groupAll: boolean;
    startTime: any;
    endTime: any;
    nullifyParams(): void;
}
