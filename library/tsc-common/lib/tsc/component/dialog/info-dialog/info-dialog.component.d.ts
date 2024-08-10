import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class InfoDialogComponent implements OnInit {
    private data;
    dialogRef: MatDialogRef<InfoDialogComponent>;
    MATERIAL_CONSTANT: {
        MAT_RIPPLE_CENTER: boolean;
    };
    title: any;
    body: any;
    constructor(data: any, dialogRef: MatDialogRef<InfoDialogComponent>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InfoDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InfoDialogComponent, "app-info-dialog", never, {}, {}, never, never>;
}
