export interface VehicleTypeM {
    id: number;
    name: string;
    keyID: string;
    status: string;
}

export class VehicleType implements VehicleTypeM {
    id;
    name;
    keyID;
    status;
}

export interface VehicleCategoryM {
    id: number;
    status: string;
    name: string;
    description: string | null;
    typeID: number;
}

export class VehicleCategory implements VehicleCategoryM {
    id;
    status;
    name;
    description;
    typeID;
}

export interface EngineStrokeM {
    id: number;
    name: string;
    keyID: number,
    status: string;
}

export class EngineStroke implements EngineStrokeM {
    id;
    name;
    keyID;
    status;
}

export interface VehicleM {
    id: number,
    vehicleName: string,
    vehicleNumber: string,
    vehicleType: {
        id: number,
        name: string,
        keyID: string,
        status: string
    },
    sourceTypeID: number,
    vehicleCategory: {
        id: number,
        status: string,
        name: string,
        description: string,
        typeID: number
    },
    year: string,
    odoMeterUnit: {
        unitID: number,
        uomName: string,
        uomCode: string,
        unitTypeName: string,
        unitType: string,
        unitSubType: string
    },
    engineStroke: string,
};

export class Vehicle implements VehicleM {
    id;
    vehicleName;
    vehicleNumber;
    vehicleType: {
        id;
        name;
        keyID;
        status;
    };
    sourceTypeID;
    vehicleCategory: {
        id;
        status;
        name;
        description;
        typeID;
    };
    year;
    odoMeterUnit: {
        unitID;
        uomName;
        uomCode;
        unitTypeName;
        unitType;
        unitSubType;
    };
    engineStroke;
}

export interface VehiclePageM {
    totalCount: number,
    vehicle: VehicleM[]
}

export class VehiclePage implements VehiclePageM {
    totalCount;
    vehicle: [
        {
            id;
            vehicleName;
            vehicleNumber;
            vehicleType: {
                id;
                name;
                keyID;
                status;
            },
            sourceTypeID;
            vehicleCategory: {
                id;
                status;
                name;
                description;
                typeID;
            },
            year;
            odoMeterUnit: {
                unitID;
                uomName;
                uomCode;
                unitTypeName;
                unitType;
                unitSubType;
            }
            engineStroke;
        }
    ]
}

export interface VehicleByTypeM {
    id: number;
    vehicleName: string;
    vehicleNumber: string;
    sourceTypeID: number;
    vehicleTypeID: number;
  }

export class VehicleByType implements VehicleByTypeM{
    id;
    vehicleName;
    vehicleNumber;
    sourceTypeID;
    vehicleTypeID;
}



