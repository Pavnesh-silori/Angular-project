import { Injectable } from '@angular/core';

import { UnitM, Unit, OldUnitM } from '../model/unit.model';
import { UnitController } from '../controller/unit.controller';

@Injectable({
    providedIn: 'root'
})

export class UnitService {
    constructor(
        private unitController: UnitController
    ) { }

    async getUnit(apiFilter): Promise<UnitM[]> {
        let oldUnitM: OldUnitM[];
        let unitM: UnitM[];

        try {
            oldUnitM = await this.unitController.getUnit(apiFilter).toPromise();

            if (oldUnitM) {
                unitM = oldUnitM.map(this.transformUnit);

                unitM.unshift({
                    id: null,
                    name: 'Select none',
                    uomCode: null,
                    type: null,
                    typeName: null,
                    subType: null
                });

                return unitM;
            } else {
                return [new Unit()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new Unit()];
        }
    }

    async getUnitUsingPublicUrl(apiFilter): Promise<UnitM[]> {
        let oldUnitM: OldUnitM[];
        let unitM: UnitM[];

        try {
            oldUnitM = await this.unitController.getUnitUsingPublicUrl(apiFilter).toPromise();

            if (oldUnitM) {
                unitM = oldUnitM.map(this.transformUnit);

                unitM.unshift({
                    id: null,
                    name: 'Select none',
                    uomCode: null,
                    type: null,
                    typeName: null,
                    subType: null
                });

                return unitM;
            } else {
                return [new Unit()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new Unit()];
        }
    }

    transformUnit(oldUnit: OldUnitM): UnitM {
        return {
            id: oldUnit.unitID,
            name: oldUnit.uomName,
            uomCode: oldUnit.uomCode,
            type: oldUnit.unitType,
            typeName: oldUnit.unitTypeName,
            subType: oldUnit.unitSubType,
        };
    }

    filterUnit(unit: UnitM[], unitTypeFilter: string[]): UnitM[] {
        let unitM: UnitM[];

        unitM = unit.filter((unit: UnitM) => unitTypeFilter.includes(unit.type));

        unitM.unshift({
            id: null,
            name: 'Select none',
            uomCode: null,
            type: null,
            typeName: null,
            subType: null
        });

        return unitM;
    }
}
