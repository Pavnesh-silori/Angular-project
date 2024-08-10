import { Injectable } from '@angular/core';

import { Unit, UnitM } from '../model/unit.model';

import { UnitController } from '../controller/unit.controller';

@Injectable({
    providedIn: 'root'
})

export class UnitService {

    constructor(
        private unitController: UnitController,
    ) { }

    async getUnitByParameterID(orgID, parameterID): Promise<UnitM[]> {
        let unitM: UnitM[];
        try {
            unitM = await this.unitController.getUnitByParameterID(orgID, parameterID).toPromise();

            if (unitM) {
                return unitM;
            } else {
                return [new Unit()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new Unit()];
        }
    }
}