export interface PaymentHistoryM {
    transactionID: string;
    orgID: number;
    planName: string;
    currencyCode: string;
    billedAmount: number;
    transactionDate: string;
    userEmail: string;
    paymentStatus: string;
    invoiceNumber: string;
    invoiceZohoApiUrl: string;
}