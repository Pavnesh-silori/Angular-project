import { Injectable } from '@angular/core';

import { ScopeWithActivityM, ScopeWithActivity } from '../model/scope.model';
import { ScopeController } from '@carbon/controller/scope.controller';

@Injectable({
    providedIn: 'root'
})

export class ScopeService {

    constructor(
        private scopeController: ScopeController
    ) { }

    async getAllScopeWithActivity(): Promise<ScopeWithActivityM[]> {
        let scopeWithActivityM: ScopeWithActivityM[];

        try {
            scopeWithActivityM = await this.scopeController.getAllScopeWithActivity().toPromise();

            if (scopeWithActivityM) {
                return scopeWithActivityM;
            } else {
                return [new ScopeWithActivity()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new ScopeWithActivity()];
        }
    }
}
