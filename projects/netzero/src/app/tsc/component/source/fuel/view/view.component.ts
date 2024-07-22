import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isEqual } from 'lodash';

import { newFuel } from '@netzero/model/fuel.model'; 
import { FuelService } from '@netzero/service/fuel.service'; 
import { MatDialog } from "@angular/material/dialog";

// tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonTooltipEnum, COMMON_CONSTANT, FormAction, MATERIAL_CONSTANT} from '@library/tsc-common';
import { DialogComponent } from '../dialog/dialog.component';
// /tsc-library/

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {
    source = 'Fuel';
    currentOrgID: any;
    fuelID: number;
    fuelData = new newFuel();
    COMMON_CONSTANT = COMMON_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    FormAction = FormAction

    @Output() formStatus: EventEmitter<String> = new EventEmitter<String>();
    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;

    constructor(
        private dialog: MatDialog,
        private fuelService: FuelService,
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,

    ) { }


    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.params.subscribe(params => {
            this.fuelID = parseInt(params.fuelCode);
            this.getFuelByID();
        })
    }

    async getFuelByID() {
        this.fuelData = await this.fuelService.getFuelByID(this.currentOrgID, this.fuelID);
    }

    updateFuel(row, action) {
        let dialogRef;
        if (action == FormAction.CREATE) {
            dialogRef = this.dialog.open(DialogComponent, {
                data: {
                    action: action,
                    source: this.source,
                    code: row.code
                },
                minWidth: '40vw',
                maxWidth: '40vw',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });
        }
        else {
            dialogRef = this.dialog.open(DialogComponent, {
                data: {
                    action: action,
                    source: this.source,
                    id: row.id
                },
                minWidth: '40vw',
                maxWidth: '40vw',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });
        }

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result) {
                    this.getFuelByID();
                }
            })
    }
}
