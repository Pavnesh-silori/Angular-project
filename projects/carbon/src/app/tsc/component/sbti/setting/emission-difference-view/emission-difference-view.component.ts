import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { StatusEnum } from '@carbon/enum/sbti.enum';

import { COMMON_CONSTANT, DialogResponseEnum } from '@library/tsc-common';

@Component({
    selector: 'app-emission-difference-view',
    templateUrl: './emission-difference-view.component.html',
    styleUrls: ['./emission-difference-view.component.scss']
})
export class EmissionDifferenceViewComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    StatusEnum = StatusEnum;

    dataArray: any = [];
    targetList: any = [];

    constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        private dialogRef: MatDialogRef<EmissionDifferenceViewComponent>,
    ) { }

    ngOnInit(): void {
        this.dataArray = this.data['sbtiSettingDifference'];
        this.getTargetList();
    }

    getTargetList() {
        this.dataArray.forEach(data => {
            this.targetList.push(data['targetName']);
        });
    }

    createTarget() {
        this.dialogRef.close(DialogResponseEnum.YES);
    }
}

@NgModule({
    declarations: [EmissionDifferenceViewComponent],
    imports: [
        BrowserModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
    ],
})
export class EmissionDifferenceViewModule { }
