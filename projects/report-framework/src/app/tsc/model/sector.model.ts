export interface SectorM {
    id: number,
    name: string
    reportFrameworkID: number,
}

export class Sector implements SectorM {
    id;
    name;
    reportFrameworkID;
}