import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogEnum } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class EntityDialogComponent implements OnInit {
    dialogRef: MatDialogRef<EntityDialogComponent>;
    data: any;
    DialogEnum: typeof DialogEnum;
    entityID: any;
    entityType: any;
    entityObject: any;
    entityFC: FormControl;
    constructor(dialogRef: MatDialogRef<EntityDialogComponent>, data: any);
    ngOnInit(): void;
    onEntityChange(selectedValue: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityDialogComponent, "lib-entity", never, {}, {}, never, never>;
}
