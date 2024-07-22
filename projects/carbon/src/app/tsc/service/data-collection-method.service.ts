import { Injectable } from '@angular/core';

import { DataCollectionMethodKeyIDEnum } from '@carbon/enum/data-collection-method.enum';
import { DataCollectionMethodController } from '@carbon/controller/data-collection-method.controller';

@Injectable({
    providedIn: 'root'
})
export class DataCollectionMethodService {

    constructor(
        private dataCollectionMethodController: DataCollectionMethodController
    ) { }

    getDataCollectionMethod(): Promise<any[]> {
        return new Promise(resolve => {
            let dataCollectionMethod: any[];
            this.dataCollectionMethodController.getDataCollectionMethodList()
                .subscribe((result: any) => {
                    dataCollectionMethod = result;
                }).add(() => {
                    resolve(dataCollectionMethod);
                });
        });
    }

    getDataCollectionMethodByKeyID(allDataCollectionMethod: any[], dataCollectionMethodKeyID: DataCollectionMethodKeyIDEnum): any {
        let dataCollectionMethod: any;

        dataCollectionMethod = allDataCollectionMethod.find(dcm => dcm.keyID == dataCollectionMethodKeyID);
        return dataCollectionMethod;
    }

}