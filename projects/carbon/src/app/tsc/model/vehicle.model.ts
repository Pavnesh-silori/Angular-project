export interface VehicleTypeM {
    id: number;
    vehicleName: string;
    vehicleNumber: string;
    sourceTypeID: number;
    vehicleTypeID: number;
  }

export class VehicleType implements VehicleTypeM{
    id;
    vehicleName;
    vehicleNumber;
    sourceTypeID;
    vehicleTypeID;
}