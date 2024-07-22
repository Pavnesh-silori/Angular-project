import { Injectable } from "@angular/core";

import { CalculationApproach, CalculationApproachI } from "@carbon/model/calculation-approach.model";
import { CalculationApproachController } from "@carbon/controller/calculation-approach.controller";

@Injectable({
    providedIn: 'root'
})

export class CalculationApproachService {

    constructor(
        private calculationApproachController: CalculationApproachController
    ) { }

    async getCalculationApproachScope(scopeKeyID): Promise<CalculationApproachI[]> {
        let calculationApproachM: CalculationApproachI[];

        try {
            calculationApproachM = await this.calculationApproachController.getCalculationApproachByScope(scopeKeyID).toPromise();

            if (calculationApproachM) {
                return calculationApproachM;
            } else {
                return [new CalculationApproach()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new CalculationApproach()];
        }
    }

}