import { Component, Inject, OnInit } from '@angular/core';

import { 
    FormBuilder, 
    FormGroup, 
    Validators 
} from '@angular/forms';

import { 
    MAT_DIALOG_DATA, 
    MatDialogRef 
} from '@angular/material/dialog';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
    FormsModule, 
    ReactiveFormsModule 
} from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

// tsc-library
import { ButtonLabelEnum, InvalidForm, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';
// / tsc-library


@Component({
    selector: 'app-create-update-hhv',
    templateUrl: './create-update-hhv.dialog.html',
    styles: []
})
export class HhvCreateUpdateDialog implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;

    readonly NUMERATOR = 'numerator';
    readonly DENOMINATOR = 'denominator';

    numeratorSearchUtility: MatSelectSearchService = new MatSelectSearchService(['name']);
    denominatorSearchUtility: MatSelectSearchService = new MatSelectSearchService(['name']);

    hhv: any;
    hhvFG: FormGroup;

    constructor(
        private dialogRef: MatDialogRef<HhvCreateUpdateDialog>,
        private formBuilder: FormBuilder,
        private toastrService : ToastrService,
        @Inject(MAT_DIALOG_DATA) private data,
    ) {
        this.dialogRef.disableClose = true;

        this.hhv = data['hhv'];
        this.numeratorSearchUtility.entityArr = data['energyUnits'];
        this.numeratorSearchUtility.createSubscription();
        this.denominatorSearchUtility.entityArr = data['massVolumeUnits'];
        this.denominatorSearchUtility.createSubscription();
    }

    ngOnInit(): void {
        this.hhvFGInit();
    }

    hhvFGInit() {
        this.hhvFG = this.formBuilder.group({
            hhv: [this.hhv?.hhv, [Validators.required, Validators.min(0)]],
            hhvNumeratorUnitID: [this.hhv?.hhvNumeratorUnitID, Validators.required],
            hhvNumeratorUomCode: [this.hhv?.hhvNumeratorUomCode],
            hhvDenominatorUnitID: [this.hhv?.hhvDenominatorUnitID, Validators.required],
            hhvDenominatorUomCode: [this.hhv?.hhvDenominatorUomCode]
        });
    }

    set hhvNumeratorUomCode(code) {
        this.hhvFG.get('hhvNumeratorUomCode').patchValue(code);
    }

    set hhvDenominatorUomCode(code) {
        this.hhvFG.get('hhvDenominatorUomCode').patchValue(code);
    }

    setHhvValue() {
        if (this.hhvFG.invalid) {
            console.log('invalid form - ', this.hhvFG);
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.dialogRef.close({ hhv: this.hhvFG.value })
    }


    unitSelected(unitID, type) {
        switch (type) {
            case this.NUMERATOR:
                this.hhvNumeratorUomCode = this.numeratorSearchUtility.entityArr.find(unit => unit['id'] == unitID)['uomCode'];
                break;
            case this.DENOMINATOR:
                this.hhvDenominatorUomCode = this.denominatorSearchUtility.entityArr.find(unit => unit['id'] ==  unitID)['uomCode']
                break
            default:
                console.log('undefined case encountered - ', type);
        }
    }

    errorHandling(control, error) {
        return this.hhvFG.get(control).hasError(error);
    }
}


@NgModule({
    declarations: [HhvCreateUpdateDialog],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDialogModule,
        MatSelectModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule
    ],
})

export class HhvCreateUpdateDialogModule { }