import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// tsc-library
import { DialogEnum } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-entity',
    templateUrl: './entity.component.html',
    styles: [
    ]
})
export class EntityDialogComponent implements OnInit {

    DialogEnum = DialogEnum;

    entityID: any;
    entityType: any;
    entityObject: any;

    entityFC: FormControl = new FormControl('', Validators.required);

    constructor(
        public dialogRef: MatDialogRef<EntityDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
    ) {
        this.entityID = data?.entityID;
        this.entityType = data?.entityType;
        this.entityObject = data?.entityObject;
        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        if (this.entityID) {
            this.entityFC.patchValue(this.entityID);
        }
    }

    onEntityChange(selectedValue) {
        this.entityFC.patchValue(selectedValue);

        this.dialogRef.close({
            result: DialogEnum.CLOSE_DR,
            entityID: this.entityFC.value
        })
    }

}