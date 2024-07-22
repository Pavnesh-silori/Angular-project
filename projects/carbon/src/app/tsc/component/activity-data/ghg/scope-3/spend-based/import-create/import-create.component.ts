import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CreateImportRequestDialogComponent } from '../create-import-request-dialog/create-import-request-dialog.component';
import { EmissionCalculationMethodController } from '@carbon/controller/emission-calculation-method.controller';
import { SpendBasedController } from '@carbon/controller/spend-based.controller';

import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';

@Component({
    selector: 'app-create-record',
    templateUrl: './import-create.component.html',
    styles: []
})

export class RecordCreateComponent implements OnInit {
    currentOrgID: string;

    calculationEmissionMethod: any;
    methodDefination: any;
    activityList: any;

    constructor(
        private dialog: MatDialog,
        private emissionCalculationMethodController: EmissionCalculationMethodController,
        private spendBasedController: SpendBasedController,
        private toasterService: ToastrService,
        private storageService: StorageService,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.getEmissionCalculationMethods();
    }

    getEmissionCalculationMethods() {
        this.emissionCalculationMethodController.getEmissionCalculationMethod(this.currentOrgID).subscribe((getCalculationMethodRes: any) => {
            this.calculationEmissionMethod = getCalculationMethodRes;

            // Apply condition to set method definition
            this.calculationEmissionMethod.forEach((method) => {
                if (method.methodID === 11) {
                    this.getActivities(method.methodID);
                    this.methodDefination = "Spend based method uses the organization's spending on goods and services as a proxy for the emissions associated with those activities. This is a good way to get started with screening your scope 3 emissions.";
                }
            });
        }, error => {
            console.log('error in getEmissionCalculationMethods() -', error);
            this.toasterService.openToast(ToastrTitle.ERROR, 'Error in getting calculation methods', ToastrColor.ERROR);
        });
    }

    getActivities(methodID) {
        this.spendBasedController.getActivities(this.currentOrgID, methodID).subscribe((activityRes) => {
            this.activityList = activityRes;
        }, (error) => {
            console.log('error in getActivities() -', error);
            this.toasterService.openToast(ToastrTitle.ERROR, 'Error in getting activity list', ToastrColor.ERROR);
        });
    }

    createImportRequestDialog(methodID) {
        const dialogRef = this.dialog.open(CreateImportRequestDialogComponent, {
            data: {
                methodID: methodID,
            },
            minWidth: '500px',
            maxWidth: '600px'
        });
        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result == 'Success') {
                    console.log("Record create successfully")
                }
            })
    }

}
