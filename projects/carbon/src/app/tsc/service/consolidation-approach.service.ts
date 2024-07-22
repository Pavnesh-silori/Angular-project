import { Injectable } from "@angular/core";
import { ConsolidationApproachController } from "@carbon/controller/consolidation-approach.controller";
import { ConsolidationApproach, ConsolidationApproachM } from "@carbon/model/consolidation-approach.model";

@Injectable({
    providedIn: 'root'
})

export class ConsolidationApproachService {

    constructor(
        private consolidationApproachController: ConsolidationApproachController
    ) { }

    async getAllConsolidationApproach(): Promise<ConsolidationApproachM[]> {

        let sbtiSectorM: ConsolidationApproachM[];

        try {
            sbtiSectorM = await this.consolidationApproachController.getAllConsolidationApproach().toPromise();

            if (sbtiSectorM) {
                return sbtiSectorM;
            } else {
                return [new ConsolidationApproach()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new ConsolidationApproach()];
        }

    }

    async getAllConsolidationApproachByOrgID(rootOrgID): Promise<ConsolidationApproachM[]> {

        let consolidationApproachM: ConsolidationApproachM[];

        try {
            consolidationApproachM = await this.consolidationApproachController.getAllConsolidationApproachByOrgID(rootOrgID).toPromise();

            if (consolidationApproachM) {
                return consolidationApproachM;
            } else {
                return [];
            }
        } catch (error) {
            console.error('Error -', error);
            return [];
        }

    }

}
