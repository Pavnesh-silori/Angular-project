import { Injectable } from '@angular/core';
import { UnitTypeController } from '@report-framework/controller/unit-type.controller';

import { StandardI } from '@report-framework/model/standard.model';


@Injectable({
    providedIn: 'root'
})
export class UnitTypeService {

    constructor(
        private unitTypeController: UnitTypeController

    ) { }

    async getUnitTypeList(): Promise<StandardI[]> {
        let standardI: StandardI[] = [];
        try {
            standardI = await this.unitTypeController.getUnitTypeList().toPromise();

            if (standardI) {
                return standardI;
            } else {
                return [];
            }
        } catch (error) {
            console.error('Error in getUnitTypeList() -', error);
            return [];
        }
    }
}
