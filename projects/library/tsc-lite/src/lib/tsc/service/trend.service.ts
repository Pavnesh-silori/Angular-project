import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TrendComponent } from '../component/_shared/dialog/trend/trend.component';

@Injectable({
    providedIn: 'root'
})

export class TrendService {

    constructor(
        private dialog: MatDialog,
    ) { }

    openDialog(trendData) {
        let dialogRef;
        dialogRef = this.dialog.open(TrendComponent, {
            data: {
                trendData: trendData
            },
            minWidth: '620px',
            maxWidth: '620px'
        });
    }
}
