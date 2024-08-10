export interface FacilityI {
    id: number;
    name: string;
    status: string;
    timeZone: string;
    address: {
        addressLineOne: string;
        country: {
            name: string;
            code: string;
        }
        state: {
            name: string;
            code: string;
        },
        city: string;
        zipCode: string;
    },
}

export class Facility implements FacilityI {
    id;
    name;
    status;
    timeZone;
    address = {
        addressLineOne: null,
        country: {
            name: null,
            code: null
        },
        state: {
            name: null,
            code: null
        },
        city: null,
        zipCode: null
    };
}
