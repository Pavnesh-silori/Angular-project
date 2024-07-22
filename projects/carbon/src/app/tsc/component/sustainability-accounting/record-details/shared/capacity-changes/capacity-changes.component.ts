import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
    selector: 'app-capacity-changes',
    templateUrl: './capacity-changes.component.html',
})

export class CapacityChangesComponent implements OnInit {

    capacityData: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
    ) { }

    displayedColumns = ['date', 'capacity'];

    ngOnInit() {
        this.capacityData = this.data['capacityData'];
    }

}


