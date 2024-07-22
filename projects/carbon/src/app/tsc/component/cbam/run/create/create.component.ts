import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';

import { CbamRunController } from '@carbon/controller/cbam-run.controller';

import { ProductService } from '@carbon/service/product.service ';

// tsc-library
import {
    ButtonTooltipEnum,
    COMMON_CONSTANT,
    FormErrorEnum,
    InvalidForm,
    MATERIAL_CONSTANT,
    MatSelectSearchService,
    MaterialFormFieldAppearance,
    ResponseM
} from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { DateService } from '@library/date';
// /tsc-library/

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styles: []
})
export class CreateComponent implements OnInit {
    currentOrgID: any;
    newRunFG: FormGroup;

    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonTooltipEnum = ButtonTooltipEnum;
    formErrorEnum = FormErrorEnum

    configFound: boolean;

    products: any[] = [];
    productSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    productionRoute: any[] = [];
    productionRouteSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    reportingPeriod: any[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<CreateComponent>,
        private productService: ProductService,
        private storageService: StorageService,
        private toastrService: ToastrService,
        private dateService: DateService,
        private cbamRunController: CbamRunController
    ) {
        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.formDetailsInit();
        this.getProducts();
        this.getReportingPeriod();
    }

    formDetailsInit() {
        this.newRunFG = this.formBuilder.group({
            productID: [, Validators.required],
            productionRouteID: [, Validators.required],
            reportingPeriod: [, Validators.required]
        });

        this.newRunFG.get('productID').valueChanges.subscribe((value) => {
            this.newRunFG.get('productionRouteID').reset();
            this.getProductionRoutes(value);
        });
    }

    async getProducts() {
        this.products = await this.productService.getProductionRoute(this.currentOrgID);
        let cbamProducts = this.products.filter(source => source.isCbam == true);
        this.products = cbamProducts;
        this.productSearchUtil.entityArr = this.products;
        this.productSearchUtil.createSubscription();
    }

    getProductionRoutes(value) {
        const selectedProduct = this.products.find(product => product.id == value);
        this.productionRoute = selectedProduct.productionRoute ? selectedProduct.productionRoute : [];
        this.productionRouteSearchUtil.entityArr = this.productionRoute;
        this.productionRouteSearchUtil.createSubscription();
    }

    async getReportingPeriod() {
        this.reportingPeriod = await this.dateService.getReportingPeriodList(this.currentOrgID, 2);
    }

    getValidation() {
        if (this.newRunFG.invalid) {
            this.newRunFG.markAllAsTouched();
            this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return false;
        }

        this.cbamRunController.getValidation(
            this.currentOrgID,
            this.newRunFG.value.productID,
            this.newRunFG.value.productionRouteID,
            this.newRunFG.value.reportingPeriod.startDate,
            this.newRunFG.value.reportingPeriod.endDate).subscribe((res: ResponseM) => {
                this.configFound = res.response.configFound;
                if (this.configFound) {
                    this.toastrService.openToast(ToastrTitle.ERROR, res.message, ToastrColor.ERROR);
                    return
                } else {
                    if (!this.newRunFG.invalid)
                        this.dialogRef.close({ newRunFG: this.newRunFG.value, status: true });
                    return
                }
            });
    }

    errorHandling = (control: string, error: string) => {
        return this.newRunFG.controls[control].hasError(error);
    }
}
