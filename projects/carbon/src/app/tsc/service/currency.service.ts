import { Injectable } from "@angular/core";

import { ToastrService } from "@library/toastr-service";

import { CurrencyController } from "@carbon/controller/currency.controller";

@Injectable({
    providedIn: 'root'
})

export class CurrencyService {

    constructor(
        private currencyController: CurrencyController,
        private toastrService: ToastrService,
    ) { }

    getCurrency(): Promise<any[]> {
        return new Promise(resolve => {
            let currency: any[];
            this.currencyController.getCurrency().subscribe(result => {
                currency = result;
            }, error => {
                console.log('error in getFormByID -', error);
                this.toastrService.openToast('Error', 'Error in getting currency list.', 'error');
            }).add(() => {
                resolve(currency);
            });
        });
    }
}