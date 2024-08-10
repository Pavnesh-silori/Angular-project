export interface ClientM {
    clientID: ClientIdM[];
    generateClientID: string;
    totalCount: number;
}

export interface ClientIdM {
    clientID: string;
    clientSecretKey: string;
    creationDate: string;
    orgClientID: number;
}
