import { Injectable } from '@angular/core';

import { SubsidiaryController } from '@Admin/controller/subsidiary.controller';

import { Subsidiary, SubsidiaryM } from '@Admin/model/subsidiary.model';

@Injectable({
    providedIn: 'root'
})

export class SubsidiaryService {

    constructor(
        private SubsidiaryController: SubsidiaryController
    ) { }

    async getSubsidiaryByID(orgID: number, subsidiaryID: number): Promise<SubsidiaryM> {
        let subsidiaryDetailM: SubsidiaryM;
        try {
            subsidiaryDetailM = await this.SubsidiaryController.getSubsidiaryByID(orgID, subsidiaryID).toPromise();
            if (subsidiaryDetailM) {
                return subsidiaryDetailM;
            } else {
                return new Subsidiary();
            }
        } catch (error) {
            console.error('Error -', error);
            return new Subsidiary();
        }
    }
}

