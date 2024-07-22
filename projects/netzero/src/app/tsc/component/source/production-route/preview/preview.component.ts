import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
    max_process_name_char_length = 20;

    productionRoute: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
    ) {
        this.productionRoute = data['productionRoute'];
    }

    async ngOnInit() { }

}
