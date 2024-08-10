export interface SessionM {
    id: number;
    device: string;
    loginTime: string;
    location: string;
    sessionFlag: boolean;
    operatingSystem: string;
    browser: string;
    ipAddress: number;
    macAddress: number;
}

export class Session implements SessionM {
    id = 0;
    device: string = '';
    loginTime: string = '';
    location: string = '';
    sessionFlag: boolean = true;
    operatingSystem: string = '';
    browser: string = '';
    ipAddress: number = 0;
    macAddress: number = 0;
}