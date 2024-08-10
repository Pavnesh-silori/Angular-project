export interface VehicleTypeM {
    id: number;
    name: string;
    keyID: string;
    status: string;
}
export declare class VehicleType implements VehicleTypeM {
    id: any;
    name: any;
    keyID: any;
    status: any;
}
export interface VehicleCategoryM {
    id: number;
    status: string;
    name: string;
    description: string | null;
    typeID: number;
}
export declare class VehicleCategory implements VehicleCategoryM {
    id: any;
    status: any;
    name: any;
    description: any;
    typeID: any;
}
export interface EngineStrokeM {
    id: number;
    name: string;
    keyID: number;
    status: string;
}
export declare class EngineStroke implements EngineStrokeM {
    id: any;
    name: any;
    keyID: any;
    status: any;
}
export interface VehicleM {
    id: number;
    vehicleName: string;
    vehicleNumber: string;
    vehicleType: {
        id: number;
        name: string;
        keyID: string;
        status: string;
    };
    sourceTypeID: number;
    vehicleCategory: {
        id: number;
        status: string;
        name: string;
        description: string;
        typeID: number;
    };
    year: string;
    odoMeterUnit: {
        unitID: number;
        uomName: string;
        uomCode: string;
        unitTypeName: string;
        unitType: string;
        unitSubType: string;
    };
    engineStroke: string;
}
export declare class Vehicle implements VehicleM {
    id: any;
    vehicleName: any;
    vehicleNumber: any;
    vehicleType: {
        id: any;
        name: any;
        keyID: any;
        status: any;
    };
    sourceTypeID: any;
    vehicleCategory: {
        id: any;
        status: any;
        name: any;
        description: any;
        typeID: any;
    };
    year: any;
    odoMeterUnit: {
        unitID: any;
        uomName: any;
        uomCode: any;
        unitTypeName: any;
        unitType: any;
        unitSubType: any;
    };
    engineStroke: any;
}
export interface VehiclePageM {
    totalCount: number;
    vehicle: VehicleM[];
}
export declare class VehiclePage implements VehiclePageM {
    totalCount: any;
    vehicle: [
        {
            id: any;
            vehicleName: any;
            vehicleNumber: any;
            vehicleType: {
                id: any;
                name: any;
                keyID: any;
                status: any;
            };
            sourceTypeID: any;
            vehicleCategory: {
                id: any;
                status: any;
                name: any;
                description: any;
                typeID: any;
            };
            year: any;
            odoMeterUnit: {
                unitID: any;
                uomName: any;
                uomCode: any;
                unitTypeName: any;
                unitType: any;
                unitSubType: any;
            };
            engineStroke: any;
        }
    ];
}
export interface VehicleByTypeM {
    id: number;
    vehicleName: string;
    vehicleNumber: string;
    sourceTypeID: number;
    vehicleTypeID: number;
}
export declare class VehicleByType implements VehicleByTypeM {
    id: any;
    vehicleName: any;
    vehicleNumber: any;
    sourceTypeID: any;
    vehicleTypeID: any;
}
