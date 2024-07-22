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

    getProductList(product){
        let productList: any;
        productList = product.map(source => source.name).join(', ');
        return productList
    }

    // this.supplierID = this.response.activityConfigSource[0].sourceID[0];

}
