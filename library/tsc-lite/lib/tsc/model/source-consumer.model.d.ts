import { StaticI } from "@library/tsc-common";
export interface SourceConsumerPageM {
    id: number;
    name: string;
    utilitySourceName: string;
    type: string;
}
export declare class SourceConsumerPage implements SourceConsumerPageM {
    id: any;
    name: any;
    utilitySourceName: any;
    type: any;
}
export interface SourceM {
    id: number;
    name: string;
    utilitySourceID: number;
    typeID: number[];
}
export declare class Source implements SourceM {
    id: any;
    name: any;
    utilitySourceID: any;
    typeID: any;
}
export interface ConsumerM {
    id: number;
    name: string;
    utilitySourceID: number;
    type: number;
}
export declare class Consumer implements ConsumerM {
    id: any;
    name: any;
    utilitySourceID: any;
    type: any;
}
export interface UtilitySourceTypeM {
    utilitySource: Array<{
        id: number;
        name: string;
        keyID: string;
        type: StaticI[];
    }>;
}
export declare class UtilitySourceType implements UtilitySourceTypeM {
    utilitySource: any;
}
export interface SourceConsumerConfigureM {
    sourceTypeConfigured: boolean;
    consumerTypeConfigured: boolean;
}
export declare class SourceConsumerConfigure implements SourceConsumerConfigureM {
    sourceTypeConfigured: any;
    consumerTypeConfigured: any;
}
