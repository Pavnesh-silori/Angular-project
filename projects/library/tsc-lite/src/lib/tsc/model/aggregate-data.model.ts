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

export class AggregateDataRequest implements AggregateDataRequestM {
    interval = null;
    entityType = null;
    shiftKey = null;
    deviceID = null;
    entityID = null;
    params = null;
    showImmediateChildOnly = false;
    groupAll = false;
    startTime = null;
    endTime = null;

    nullifyParams() {
        this.params?.forEach(param => {
            param.name = param.name || null;
            param.dsAgg = param.dsAgg || null;
            param.agg = param.agg || null;
            param.source_or_load = param.source_or_load || null;
            param.sourceLoadType = param.sourceLoadType || null;
        });
    }
}

export interface MeterDataI {
    date: string;
    meterName: string;
    parameterName: string;
    meterStartReading: number;
    meterEndReading: number;
    meterConsumption: number;
}

export class MeterData implements MeterDataI {
    date: string;
    meterName: string;
    parameterName: string;
    meterStartReading: number;
    meterEndReading: number;
    meterConsumption: number;
}