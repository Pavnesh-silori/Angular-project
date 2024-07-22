import { Component, Inject, OnInit } from '@angular/core';

import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import {
    MAT_DIALOG_DATA,
    MatDialogRef
} from '@angular/material/dialog';

import { isEqual } from 'lodash';

import { CustomDatabaseController } from '@carbon/controller/custom-database.service';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { COMMON_CONSTANT, DialogResponseEnum, InvalidForm, MaterialFormFieldAppearance } from '@library/tsc-common';

@Component({
    selector: 'app-create-database',
    templateUrl: './create-update-database-dialog.component.html',
    styles: []
})
export class CreateDatabaseDialog implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    currentOrgID: any;

    databaseID: any;
    databaseFG: FormGroup;
    customFactorTypeStdID: string;

    isUpdate: boolean = false;

    initialObject: any;
    isEqual: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) private data,
        private dialogRef: MatDialogRef<CreateDatabaseDialog>,
        storageService: StorageService,
        private toastrService: ToastrService,
        private customDatabaseController: CustomDatabaseController,
    ) {
        this.dialogRef.disableClose = true;
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
    }

    ngOnInit(): void {

        this.formGroupInit();
        this.customFactorTypeStdID = this.data['customFactorTypeStdID'];
        if (this.data['isUpdate']) {
            this.isUpdate = true;
            this.databaseID = this.data['databaseID'];

            this.getDatabaseByID();
        } else {
            this.databaseFG.patchValue({ customFactorTypeStdID: this.customFactorTypeStdID });
        }
    }

    formGroupInit() {
        this.databaseFG = this.formBuilder.group({
            name: [, Validators.required],
            customFactorTypeStdID: [this.customFactorTypeStdID, Validators.required]
        });
    }

    get name(): AbstractControl {
        return this.databaseFG.get('name') as AbstractControl;
    }

    getDatabaseByID() {
        this.customDatabaseController.getDatabaseByID(this.currentOrgID, this.databaseID)
            .subscribe((databaseRes) => {
                this.patchDatabaseFG(databaseRes);
            },
                error => {
                    console.log('error in getDatabaseByID() -', error);
                    this.toastrService.openToast(`${error.error['title']}`, `${error.error['message']}`, `${error.error['result']}`)
                });
    }

    patchDatabaseFG(database) {
        this.databaseFG.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.databaseFG.value));

        this.databaseFG.patchValue({
            name: database['name'],
            customFactorTypeStdID: database['customFactorTypeStdID']
        });

        this.isEqual = true;
        this.initialObject = this.databaseFG.value;
    }

    isValidForm() {
        if (this.databaseFG.invalid) {
            console.log('invalid form -', this.databaseFG);
            this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        if (this.isUpdate) {
            this.updateDatabase();
        } else {
            this.createDatabase();
        }
    }

    createDatabase() {
        this.customDatabaseController.createDatabase(this.currentOrgID, this.databaseFG.value)
            .subscribe((createRes) => {
                if (createRes?.['response'] &&
                    createRes['response']['nameAlreadyExists'] == 'YES') {
                    this.name.setErrors({ 'nameAlreadyExists': true });
                    this.toastrService.openToast(`${createRes['title']}`, `${createRes['message']}`, `${createRes['result']}`)
                    return;
                }
                this.dialogRef.close(DialogResponseEnum.SUCCESS);
            }, error => {
                console.log('error in createDatabase() - ', error);
                this.toastrService.openToast(`${error.error['title']}`, `${error.error['message']}`, `${error.error['result']}`)
            });
    }

    updateDatabase() {
        this.customDatabaseController.updateDatabase(this.currentOrgID, this.databaseFG.value, this.databaseID)
            .subscribe((updateRes) => {
                if (updateRes?.['response'] &&
                    updateRes['response']['nameAlreadyExists'] == 'YES') {
                    this.name.setErrors({ nameAlreadyExists: true });
                    this.toastrService.openToast(`${updateRes['title']}`, `${updateRes['message']}`, `${updateRes['result']}`)
                    return;
                }
                this.dialogRef.close(DialogResponseEnum.SUCCESS);
            }, error => {
                console.log('error in updateDatabase() - ', error);
                this.toastrService.openToast(`${error.error['title']}`, `${error.error['message']}`, `${error.error['result']}`)
            });
    }
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDialogModule,
        MatFormFieldModule,
    ],
    declarations: [CreateDatabaseDialog],
    exports: [CreateDatabaseDialog]
})
export class CreateDatabaseModule { }