import { Injectable } from "@angular/core";

import { ProductController } from "@carbon/controller/product.conroller";
import { Product, ProductM } from "@netzero/model/product-service.model";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    constructor(
        private productController: ProductController
    ) { }

    async getProductionRoute(orgID: number): Promise<ProductM[]> {
        let productM: ProductM[];
        let product = [new Product()]
        try {
            productM = await this.productController.getProductionRoute(orgID).toPromise();

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
}