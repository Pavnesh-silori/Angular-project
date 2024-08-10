import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';

import { PaymentController } from '@Admin/controller/payment.controller';

@Component({
    selector: 'app-payment-successful',
    templateUrl: './payment-successful.component.html',
    styles: []
})

export class PaymentSuccessfulComponent implements OnInit {
    rootOrgID: any;
    transactionID: any;
    invoiceNo: any;
    invoiceAmount: any;
    paymentRes: any;
    paymentConfirmationUpdate: any;
    isSubscriptionMade: string = 'default';

    constructor(
        private toasterService: ToastrService,
        private authorizationService: StorageService,
        private activatedRoute: ActivatedRoute,
        private paymentController: PaymentController,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.authorizationService.getStorage(['rootOrgID']);

        this.activatedRoute.queryParams.subscribe((queryParam) => {
            if (queryParam.TransactionID) {
                this.transactionID = decodeURIComponent(queryParam.TransactionID);
            }
            if (queryParam.InvoiceNumber) {
                this.invoiceNo = decodeURIComponent(queryParam.InvoiceNumber);
            }
            if (queryParam.InvoiceAmount) {
                this.invoiceAmount = decodeURIComponent(queryParam.InvoiceAmount);
            }
        });

        this.paymentInformation();
    }

    paymentInformation() {
        this.paymentController.paymentInformation(this.rootOrgID, this.transactionID, this.invoiceNo, this.invoiceAmount)
            .subscribe((paymentRes) => {
                this.paymentRes = paymentRes;
                if (this.paymentRes.status == 'SUCCESS') {
                    this.isSubscriptionMade = 'YES';
                    this.paymentConfirmationUpdate = 'Thank you for choosing The Sustainability Cloud. Your subscription is now active. We hope you enjoy using the platform.';
                } else {
                    this.isSubscriptionMade = 'NO';
                    this.paymentConfirmationUpdate = 'Oops! It seems that something went wrong while creating your subscription. Please check back later, or contact our support team for assistance.';
                }
                let toast = this.toasterService.getToastStatus(paymentRes['status']);
                this.toasterService.openToast(toast['title'], paymentRes['message'], toast['color']);
            },
                error => {
                    this.isSubscriptionMade = 'NO';
                    console.log('Error in paymentInformation -', error);
                    this.toasterService.openToast(error.error['title'], error.error['message'], error.error['result']);
                });
    }

}
