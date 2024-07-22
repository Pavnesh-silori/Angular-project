export interface CurrencyM {
    currencyID: number,
    currencyName: string,
    currencyCode: string
    currencySymbol: any,
}

export class Currency implements CurrencyM{
    currencyID;
    currencyName;
    currencyCode;
    currencySymbol; 
}