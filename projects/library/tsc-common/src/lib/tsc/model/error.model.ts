export interface ErrorM {
    message: string;
    status: string;
    response: any;
    errorCode: number;
}

export class Error implements ErrorM {
    message: string;
    status: string;
    response: any;
    errorCode: number;
}
