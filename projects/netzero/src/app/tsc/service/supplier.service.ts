import { Injectable } from '@angular/core';

import { SupplierController } from '@netzero/controller/supplier.controller';

@Injectable({
    providedIn: 'root'
})

export class SupplierService {

    constructor(
        private supplierController: SupplierController
    ) { }

    async getSupplierByType(orgID: number, type: string): Promise<any> {
        let supplierM: any;
        let supplier : any;

        try {
            supplierM = await this.supplierController.getSupplierByType(orgID, type).toPromise();

            if (supplierM) {
                return supplierM;
            } else {
                return supplier;
            }
        } catch (error) {
            console.error('Error -', error);
            return supplier;
        }
    }
}
