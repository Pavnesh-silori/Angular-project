import { Component, OnInit } from '@angular/core';

import { SourceKeyID } from '@carbon/enum/cbam.enum';
import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styles: [
    ]
})
export class ViewComponent implements OnInit {
    activityConfig: any;
    value: any;

    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;
    SourceKeyID = SourceKeyID;

    constructor() { }

    ngOnInit(): void {
        this.value=this.activityConfig.activityConfigData.inputOutputSource.keyID == SourceKeyID.GRID
        console.log(this.value);
        
     }

    // this.value=activityConfig.activityConfigData.inputOutputSource.keyID == SourceKeyID.GRID

    getSouceList(source) {
        let sourceList: any;
        sourceList = source.map(source => source.description).join(', ');
        return sourceList;
    }

    getGridSupplierList(source) {
        // let supplierList: any;
        // supplierList = source[0].source.filter(source => source.keyID === 'grid-electricity');
        // const supplierNames = gridSuppliers.map(supplier => supplier.name);
        // console.log(supplierList);

        // return supplierList.name;

        const gridSuppliers = source[0].source.filter(supplier => supplier.keyID === 'grid-electricity');

        // Map the names of grid suppliers
        const supplierNames = gridSuppliers.map(supplier => supplier.name);
        console.log(supplierNames)

        // Join the names with a comma if there are more than one supplier
        if (supplierNames.length > 1) {
            return supplierNames.join(', ');
        } else if (supplierNames.length === 1) {
            return supplierNames[0];
        } else {
            return ''; // Return empty string if there are no grid suppliers
        }
    }

    getPrivateSupplierList(source) {
        let supplierList: any;
        supplierList = source[0].source.find(source => source.keyID === 'contractual-electricity');
        console.log(supplierList);
        return supplierList.name;
    }

}
