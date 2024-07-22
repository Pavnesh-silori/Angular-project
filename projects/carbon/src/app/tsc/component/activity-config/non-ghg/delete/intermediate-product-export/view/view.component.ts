import { Component, OnInit } from '@angular/core';
//tsc-library
import { ButtonTooltipEnum, COMMON_CONSTANT, FormAction, MATERIAL_CONSTANT } from '@library/tsc-common';
// /tsc-library
@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styles: []
})
export class ViewComponent implements OnInit {
    activityConfig: any;

    COMMON_CONSTANT = COMMON_CONSTANT;

    constructor(
    ) { }

    ngOnInit(): void {
    }

}