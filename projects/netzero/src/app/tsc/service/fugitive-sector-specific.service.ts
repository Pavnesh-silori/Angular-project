import { Injectable } from "@angular/core";

import { FugitiveSectorSpecificController } from "@netzero/controller/fugitive-sector-specific.controller";

@Injectable({
    providedIn: 'root'
})

export class FugitiveSectorSpecificService {

    constructor(
        private fugitiveSectorSpecificController: FugitiveSectorSpecificController,
    ) { }

    async getSourceByID(orgID: number, sourceID: number): Promise<any> {
        let source: any;

        try {
            source = await this.fugitiveSectorSpecificController.getSourceByID(orgID, sourceID).toPromise();

            if (source) {
                return source;
                // return new Facility(facilityI);
            } else {
                // return new Facility();
                return null;
            }
        } catch (error) {
            console.error('error in getSourceByID -', error);
            // return new Facility();
            return null;
        }
    }

}
