import { Injectable } from "@angular/core";

import { ProductAndServiceController } from "@netzero/controller/product-and-service.controller";
import { ProductAndService, ProductAndServiceM, ProductM } from "@netzero/model/product-service.model";
@Injectable({
    providedIn: 'root'
})

export class ProductAndServiceService {

    constructor(
        private productAndServiceController: ProductAndServiceController
    ) { }

    async getProductByID(orgID: number, id: number): Promise<ProductAndServiceM> {
        let productM: ProductAndServiceM;
        let product = new ProductAndService();

        try {
            productM = await this.productAndServiceController.getProductByID(orgID, id).toPromise();

            if (productM) {
                return productM;
            } else {
                return product;
            }
        } catch (error) {
            console.error('Error -', error);
            return product;
        }
    }

    async getServiceByID(orgID: number, id: number): Promise<ProductAndServiceM> {
        let serviceM: ProductAndServiceM;
        let service = new ProductAndService();

        try {
            serviceM = await this.productAndServiceController.getServiceByID(orgID, id).toPromise();

            if (serviceM) {
                return serviceM;
            } else {
                return service;
            }
        } catch (error) {
            console.error('Error -', error);
            return service;
        }
    }

    async getProductList(orgID: number, params?: any): Promise<ProductAndServiceM[]> {
        let productList: ProductAndServiceM[];

        try {
            productList = await this.productAndServiceController.getProductList(orgID, params).toPromise();
            if (productList) return productList;
        } catch (error) {
            console.error('Error -', error);
        }
        return [];
    }

    async getServiceList(orgID: number): Promise<ProductAndServiceM[]> {
        let list: ProductAndServiceM[];

        try {
            list = await this.productAndServiceController.getServiceList(orgID).toPromise();
            if (list) return list;
        } catch (error) {
            console.error('Error -', error);
        }
        return [];
    }
}