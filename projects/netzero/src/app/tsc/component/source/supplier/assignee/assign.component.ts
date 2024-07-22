import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SupplierController } from '@netzero/controller/supplier.controller';

// tsc-common
import { ToastrService, ToastrTitle, ToastrColor } from '@library/toastr-service';
// /tsc-common/

@Component({
    selector: 'app-assign',
    templateUrl: './assign.component.html',
    styles: [
    ]
})

export class AssignComponent implements OnInit {

    formConfig: any[];

    // for assigned and unassigned
    assigned: String = null;

    numberOfFormConfig: number;
    supplierID: number;
    currentOrgID: number;
    organizationName: number;
    formConfigList: any[];

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        private supplierController: SupplierController,
        private dialogRef: MatDialogRef<AssignComponent>,
        private toastrService: ToastrService
    ) {
        this.dialogRef.disableClose = true;
        this.formConfig = data['activityForm'];
        this.assigned = data['assigned'];
        this.supplierID = data['supplierID'];
        this.currentOrgID = data['currentOrgID'];
    }

    ngOnInit(): void {
        this.numberOfFormConfig = this.formConfig['noOfActivityConfig'];
        this.organizationName = this.formConfig['orgName'];
        this.formConfigList = this.formConfig['formConfigList'];

    }

    updateAssign() {
        this.supplierController.updateAssign(this.supplierID, this.currentOrgID, this.assigned).subscribe((updateRes: any[]) => {
            this.dialogRef.close('success');
        },
            error => {
                console.log('error in update assign -', error);
                this.toastrService.openToast(ToastrTitle.ERROR, 'Assign update is failed!', ToastrColor.ERROR);
            });
    }

    closeFun() {
        this.dialogRef.close('success');
    }

}
