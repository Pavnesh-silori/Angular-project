import { StaticI } from "@library/tsc-common";

export interface SourceConsumerPageM {
    id: number;
    name: string;
    utilitySourceName: string;
    type: string;
}

export class SourceConsumerPage implements SourceConsumerPageM {
    id;
    name;
    utilitySourceName;
    type;
}

export interface SourceM {
    id: number;
    name: string;
    utilitySourceID: number;
    typeID: number[];
}

export class Source implements SourceM {
    id;
    name;
    utilitySourceID;
    typeID;
}

export interface ConsumerM {
    id: number;
    name: string;
    utilitySourceID: number;
    type: number;
}

export class Consumer implements ConsumerM {
    id;
    name;
    utilitySourceID;
    type;
}

export interface UtilitySourceTypeM {
    utilitySource: Array<{
        id: number;
        name: string;
        keyID: string;
        type: StaticI[];
    }>
}

export class UtilitySourceType implements UtilitySourceTypeM {
    utilitySource;
}

export interface SourceConsumerConfigureM {
    sourceTypeConfigured: boolean;
    consumerTypeConfigured: boolean;
}

export class SourceConsumerConfigure implements SourceConsumerConfigureM {
    sourceTypeConfigured;
    consumerTypeConfigured;
}