import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { forkJoin } from 'rxjs';

import { AccountingPreference, AccountingPreferenceM } from '@carbon/model/accounting-preference.model';
import { ProductAndServiceM } from '@netzero/model/product-service.model';

import { OnGoingRunController } from '@carbon/controller/ongoing-run.controller';
import { ProductionRouteController } from '@netzero/controller/production-route.controller';

import { ProcessService } from '@carbon/service/process.service';
import { ProductAndServiceService } from '@netzero/service/product-and-service.service';
import { AccountingPreferenceService } from '@carbon/service/accounting-preference.service';

//tsc-library
import { StorageService } from '@library/storage-service';
// /tsc-library

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

    currentOrgID: any;
    image: string;

    accountingPrefrenceType = new AccountingPreference();
    cbamEnabled: boolean = false;

    allProducts: any;
    createProduct: boolean = false;

    allProcess: any;
    createProcess: boolean = false;

    allProductionRoute: any;
    createProductionRoute: boolean = false;

    ongoingRunPageRecordCount: any;
    ledgerPagePageRecordCount: any;
    createRun: boolean = false;
    showLandingPage: boolean = false;

    constructor(
        private router: Router,
        private productionRouteController: ProductionRouteController,
        private runController: OnGoingRunController,
        private productService: ProductAndServiceService,
        private processService: ProcessService,
        private accountingPreferenceService: AccountingPreferenceService,
        private storageService: StorageService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.showlink();
    }

    showlink() {
        let requestedRunBody = {
            search: '',
            pageNo: 0,
            pageSize: 50,
            sortBy: 'id',
            orderBy: 'desc',
            filter: []
        };

        let requestedLedgerBody = {
            pageNo: 0,
            pageSize: 50,
            sortBy: 'id',
            orderBy: 'desc',
        };

        forkJoin([
            this.accountingPreferenceService.getAccountingPreferenceByOrgID(this.currentOrgID),
            this.productService.getProductList(this.currentOrgID),
            this.processService.getProcessList(this.currentOrgID),
            this.productionRouteController.getProductionRoutePage(this.currentOrgID, 0, 50, 'name', 'desc', null),
            this.runController.getByPage(this.currentOrgID, requestedRunBody),
            this.runController.getLedgerByPage(this.currentOrgID, requestedLedgerBody)
        ]).subscribe(([prefResponse, productResponse, processResponse, routeResponse, runResponse, ledgerResponse]: [AccountingPreferenceM, ProductAndServiceM[], any[], any[], any, any]) => {
            this.accountingPrefrenceType = prefResponse;
            if (this.accountingPrefrenceType && this.accountingPrefrenceType.isProductEmbeddedEmission == true) {
                this.cbamEnabled = true;
            }

            this.allProducts = productResponse.filter(product => product.isCbamCompliant);
            if (this.allProducts.length > 0 && this.cbamEnabled == true) {
                this.createProduct = true;
            }

            this.allProcess = processResponse.filter(process => process.isCBAMProcess);
            if (this.allProcess.length > 0 && this.createProduct == true) {
                this.createProcess = true;
            }

            this.allProductionRoute = routeResponse['totalCount'];
            if (this.allProductionRoute > 0 && this.createProcess == true) {
                this.createProductionRoute = true;
            }

            this.ongoingRunPageRecordCount = runResponse.totalCount;
            this.ledgerPagePageRecordCount = ledgerResponse.totalCount;
            if ((this.ongoingRunPageRecordCount || this.ledgerPagePageRecordCount) > 0) {
                this.createRun = true;   
            }

            this.redirectTo();
            this.updateImage();
        });
    }

    updateImage() {
        if (this.createProductionRoute) {
            this.image = '/assets/images/cbam-run.jpg';
        } else if (this.createProcess) {
            this.image = '/assets/images/create-production-route.jpg';
        } else if (this.createProduct) {
            this.image = '/assets/images/create-process.jpg';
        } else if (this.cbamEnabled) {
            this.image = '/assets/images/create-product.jpg';
        } else {
            this.image = '/assets/images/preference3.jpg';
        }
    }

    redirectTo() {
        if (this.cbamEnabled && this.createRun) {
            this.router.navigate(['/cbam/run/page']);
        } else {
            this.showLandingPage = true;
        }
    }
}
