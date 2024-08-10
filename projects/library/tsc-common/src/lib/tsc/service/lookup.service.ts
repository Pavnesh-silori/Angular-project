import { Injectable } from "@angular/core";

import { LookupController } from "../controller/lookup.controller";
import { LookupRequestM, LookupValueM } from "../model/lookup.model";

@Injectable({
    providedIn: 'root'
})
export class LookupService {

    constructor(
        private lookupController: LookupController,
    ) { }

    async getLookup(baseUrl: string, lookup: LookupRequestM[]): Promise<LookupValueM[]> {
        try {
            let lookupM: LookupValueM[] = await this.lookupController.getLookupValue(baseUrl, lookup).toPromise();
            if (lookupM) { 
                return lookupM; 
            }
        } catch (error) {
            console.error('Error -', error);
        }

        return [];
    }
}