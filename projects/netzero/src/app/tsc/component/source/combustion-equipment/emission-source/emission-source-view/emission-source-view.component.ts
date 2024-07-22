import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductServiceTypeEnum, ProductServiceTabTypeEnum } from '@netzero/enum/product-service-type.enum';

import { ProductAndServiceController } from '@netzero/controller/product-and-service.controller';

import { ButtonTooltipEnum, MATERIAL_CONSTANT, COMMON_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';



@Component({
    selector: 'app-emission-source-view',
    templateUrl: './emission-source-view.component.html',
    styleUrls: ['./emission-source-view.component.scss']
})
export class EmissionSourceViewComponent implements OnInit {

    ButtonTooltipEnum = ButtonTooltipEnum;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    productID: any;
    source: any;

    currentOrgID: string | number;

    prodctAndServiceDataBase: any;
    ukedefraDataBase: any;
    useeioDataBase: any;
    COMMON_CONSTANT = COMMON_CONSTANT;


    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private productAndServiceController: ProductAndServiceController,
        private stroageService: StorageService,
    ) {
    }

    ngOnInit(): void {
        this.currentOrgID = this.stroageService.getStorage('currentOrgID');
        this.activatedRoute.parent.parent.params.subscribe(params => {
            this.productID = params.productID;
        });

        this.activatedRoute.data.subscribe(data => {
            this.source = data['tabType'];
        });

        // if(this.source.toLowerCase() == ProductServiceTypeEnum.PRODUCT_KEY_ID) {
        //     this.getProductByID();
        // } else {
        //     this.getServiceByID();
        // }

    }

    getServiceByID() {
        this.productAndServiceController.getServiceEMFMetadataByID(this.currentOrgID, this.productID).subscribe((res) => {
            this.ukedefraDataBase = res.ukDefraMetadata;
            this.useeioDataBase = res.usEeioMetadata;
        })
    }

    getProductByID() {
        this.productAndServiceController.getProductEMFMetadataByID(this.currentOrgID, this.productID).subscribe((res) => {
            this.ukedefraDataBase = res.ukDefraMetadata;
            this.useeioDataBase = res.usEeioMetadata;
        })
    }
}
