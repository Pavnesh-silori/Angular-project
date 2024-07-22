import { MatDialogRef } from '@angular/material/dialog';
import { DialogOneEnum } from '../../../enum/dialog-one.enum';
import { MaterialFormFieldAppearance } from '../../../enum/material.enum';
import * as i0 from "@angular/core";
export declare class TypeConfirmationDialog {
    dialogRef: MatDialogRef<TypeConfirmationDialog>;
    data: any;
    MATERIAL_CONSTANT: {
        MAT_RIPPLE_CENTER: boolean;
    };
    DialogOneEnum: typeof DialogOneEnum;
    MaterialFormFieldAppearance: typeof MaterialFormFieldAppearance;
    btnFlag: boolean;
    constructor(dialogRef: MatDialogRef<TypeConfirmationDialog>, data: any);
    ngOnInit(): void;
    confirmationCheck(value: string): void;
    success(): void;
    fail(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TypeConfirmationDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TypeConfirmationDialog, "app-type-dialog", never, {}, {}, never, never>;
}
