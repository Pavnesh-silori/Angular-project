import { Component, OnInit } from '@angular/core';

import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styles: [
    ]
})
export class ViewComponent implements OnInit {

    activityConfig: any;

    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    constructor() { }

    ngOnInit(): void { }

    getSouceList(source) {
        let sourceList: any;
        sourceList = source.map(source => source.description).join(', ');
        return sourceList;
    }
}
