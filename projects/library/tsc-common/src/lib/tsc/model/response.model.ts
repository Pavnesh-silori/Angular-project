export interface ResponseM {
    status: string;
    message: string;
    errorCode: number;
    response: any;
}

export class Response implements ResponseM {
    status: string;
    message: string;
    errorCode: number;
    response: any;
}
