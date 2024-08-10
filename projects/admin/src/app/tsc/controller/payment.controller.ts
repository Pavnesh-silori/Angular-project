import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { PaymentHistoryM } from '@Admin/model/payment.model';
import { ResponseM } from '@Admin/model/response.model';

@Injectable({
    providedIn: 'root'
})

export class PaymentController {

    constructor(
        private http: HttpClient,
    ) { }

    getPaymentHistoryList(rootOrgID) {
        return this.http.get<PaymentHistoryM[]>(`${environment.SUBSCRIPTION_API_URL}organizations/${rootOrgID}/transaction`);
    }

    getPaymentLink(rootOrgID, selectedPlanID, billingProfileID, loggedInOrgCountryCode) {
        let params = new HttpParams();
        params = params.append('loggedInOrgCountryCode', loggedInOrgCountryCode);
        return this.http.get<ResponseM>(`${environment.SUBSCRIPTION_API_URL}organizations/${rootOrgID}/plan/${selectedPlanID}/billing/profile/${billingProfileID}/payment/url`, { params: params });
    }

    paymentInformation(rootOrgID, transactionID, invoiceNo, invoiceAmount) {
        let params = new HttpParams();
        params = params.append('transactionID', transactionID);
        params = params.append('invoiceNo', invoiceNo);
        params = params.append('invoiceAmount', invoiceAmount);
        return this.http.get<ResponseM>(`${environment.SUBSCRIPTION_API_URL}organizations/${rootOrgID}/transaction/status`, { params: params });
    }

}
