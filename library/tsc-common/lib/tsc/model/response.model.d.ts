export interface ResponseM {
    status: string;
    message: string;
    errorCode: number;
    response: any;
}
export declare class Response implements ResponseM {
    status: string;
    message: string;
    errorCode: number;
    response: any;
}
