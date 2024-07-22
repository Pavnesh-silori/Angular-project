import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogOneM } from '../../../model/dialog-one.model';
import { DialogOneEnum } from '../../../enum/dialog-one.enum';
import * as i0 from "@angular/core";
export declare class DialogOneComponent implements OnInit {
    dialogRef: MatDialogRef<DialogOneComponent>;
    data: DialogOneM;
    MATERIAL_CONSTANT: {
        MAT_RIPPLE_CENTER: boolean;
    };
    constructor(dialogRef: MatDialogRef<DialogOneComponent>, data: DialogOneM);
    dialogOne: typeof DialogOneEnum;
    ngOnInit(): void;
    success(): void;
    fail(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogOneComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogOneComponent, "lib-dialog-one", never, {}, {}, never, never>;
}
