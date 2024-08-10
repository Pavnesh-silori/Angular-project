import { Component, OnInit } from '@angular/core';

import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';

import { PaymentController } from '@Admin/controller/payment.controller';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
    rootOrgID: any;
    invoiceRes: any;
    paymentHistory: any;
    dataSource: any[];

    displayedColumns: string[] = ['transactionID', 'date', 'plan', 'amount', 'invoice', 'status'];

    constructor(
        private toasterService: ToastrService,
        private storageService: StorageService,
        private paymentController: PaymentController,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage(['rootOrgID']);
        this.getPaymentHistoryList();
    }

    getPaymentHistoryList() {
        this.paymentController.getPaymentHistoryList(this.rootOrgID)
            .subscribe((paymentHistoryRes) => {
                this.paymentHistory = paymentHistoryRes;
                this.dataSource = this.paymentHistory;
            },
                error => {
                    this.dataSource = [];
                    console.log('Error in getPaymentHistoryList -', error);
                    this.toasterService.openToast('Error', 'Error in getting Payment History', 'error');
                })
    }
}
