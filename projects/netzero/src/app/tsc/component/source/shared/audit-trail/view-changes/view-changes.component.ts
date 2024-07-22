import { Component, OnInit } from '@angular/core';
import { ChangesComponent } from './changes/changes.component';
import { ButtonTooltipEnum, MATERIAL_CONSTANT } from '@library/tsc-common';

@Component({
    selector: 'app-view-changes',
    templateUrl: './view-changes.component.html',
    styles: [
    ]
})
export class ViewChangesComponent implements OnInit {

    MATERIAL_CONSTANT= MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;

    isUpdate = true;

    constructor() { }

    ngOnInit(): void {
    }

}
