import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { CalculationApproachKeyIDEnum } from '@carbon/enum/equiment.enum';
import { FugitiveConstant } from '../fugitive.constant';

import { MatDialog } from '@angular/material/dialog';
import { CapacityChangesComponent } from '../capacity-changes/capacity-changes.component';
import { Router } from '@angular/router';

import { COMMON_CONSTANT } from '@library/tsc-common';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['../../record-details.component.scss']
})
export class DetailsComponent implements OnInit {
    CalculationApproachKeyIDEnum = CalculationApproachKeyIDEnum

    recordDataCount: any
    openingInventory: any
    closingInventory: any
    dataSource: any
    initialCapacity: any;
    lastCapacity: any;

    COMMON_CONSTANT = COMMON_CONSTANT;

    @Input() recordData: any;
    @Input() gasName: any;
    @Input() screeningRecordData: any;

    constructor(
        public dialog: MatDialog,
        private router: Router,
    ) { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.recordData?.currentValue != null) {
            if (this.recordData['calculationApproachKeyID'] === CalculationApproachKeyIDEnum.CALCULATION_PRODUCT_MANUFACTURER || this.recordData['calculationApproachKeyID'] == CalculationApproachKeyIDEnum.CALCULATION_SERVICE_MYSELF) {
                this.openingInventory = this.recordData['inventoryCapacity'][0];
                this.closingInventory = this.recordData['inventoryCapacity'][1];
            }
        }

        if (changes.screeningRecordData?.currentValue != null) {
            this.recordDataCount = this.screeningRecordData['equipmentPurchaseAndSalesCount'];
            this.dataSource = this.screeningRecordData['equipmentPurchaseSaleDetail'];
            if (this.dataSource.length > 0) {
                this.initialCapacity = this.dataSource[0];
                this.lastCapacity = this.dataSource[this.dataSource.length - 1];
            }
        }
    }

    navigateToRecordPage(calculationApproach, activityType) {
        if (calculationApproach == CalculationApproachKeyIDEnum.CALCULATION_PRODUCT_MANUFACTURER) {
            this.router.navigate(['/' + FugitiveConstant.product_manufacture + '/' + activityType]);
        } else {
            let approach = this.getFugitiveCalculationApproach(calculationApproach);
            this.router.navigate(['/' + FugitiveConstant.refrigeration + '/' + approach + '/' + activityType]);
        }
    }

    getFugitiveCalculationApproach(calculationApproach) {
        if (calculationApproach == CalculationApproachKeyIDEnum.CALCULATION_SERVICE_MYSELF) {
            return 'service-myself';
        } else if (calculationApproach == CalculationApproachKeyIDEnum.CALCULATION_SERVICE_BY_CONTRACTOR) {
            return 'service-by-contractor';
        } else {
            return 'screening';
        }
    }

    capacityChanges() {
        this.dialog.open(CapacityChangesComponent, {
            data: {
                capacityData: this.screeningRecordData['equipmentPurchaseSaleDetail']
            },
            minWidth: '600px',
            maxWidth: '600px',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });
    }

}