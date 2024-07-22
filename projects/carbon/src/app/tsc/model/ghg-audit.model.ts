export interface GhgAuditDetailsI {
    id: number,
    year: number,
    date: string,
    name: string,
    email: string,
    phone: number,
    address: string,
}

export class GhgAuditDetailsM implements GhgAuditDetailsI {
    id;
    year;
    date;
    name;
    email;
    phone;
    address;
}