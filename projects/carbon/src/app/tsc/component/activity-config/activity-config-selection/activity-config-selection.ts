import { Component, OnInit } from '@angular/core';

import {
    MatDialogRef,
} from '@angular/material/dialog';

@Component({
    selector: 'app-activity-config-selection',
    templateUrl: './activity-config-selection.html',
    styles: [
    ]
})
export class ActivityConfigSelection implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<ActivityConfigSelection>,
    ) { }

    ngOnInit(): void {
    }

    closeDialog() {
        this.dialogRef.close();
    }

}
