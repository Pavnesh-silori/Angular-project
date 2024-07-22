import { Injectable } from '@angular/core';

import { ActiveFugitiveApproachM, ShowFugitiveApproachM } from '@carbon/model/fugitive.model';
import { FugitiveActivityConfiguratorController } from '@carbon/controller/fugitive-activity-configurator.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
// / tsc-library

@Injectable({
    providedIn: 'root'
})

export class FugitiveConfiguratorService {
    constructor(
		private storageService: StorageService,
        private fugitiveActivityConfiguratorController: FugitiveActivityConfiguratorController,
    ) { }

    async getConfiguredActivityConfiguration(): Promise<ShowFugitiveApproachM> {
        const currentOrgID = this.storageService.getStorage('currentOrgID');
        let fugitiveApproachM: ShowFugitiveApproachM;
        try {
            fugitiveApproachM = await this.fugitiveActivityConfiguratorController.getConfiguredApproach(currentOrgID).toPromise();
            if (fugitiveApproachM) {
                return fugitiveApproachM;
            } else {
                return new ShowFugitiveApproachM;
            }
        } catch (error) {
            console.error('Error -', error);
            return new ShowFugitiveApproachM;
        }
    }

    async getActiveActivityConfiguration(currentOrgID): Promise<ActiveFugitiveApproachM> {
        let activeFugitiveApproachM: ActiveFugitiveApproachM;
        try {
            activeFugitiveApproachM = await this.fugitiveActivityConfiguratorController.getActiveConfiguredApproach(currentOrgID).toPromise();
            if (activeFugitiveApproachM) {
                return activeFugitiveApproachM;
            } else {
                return new ActiveFugitiveApproachM;
            }
        } catch (error) {
            console.error('Error -', error);
            return new ActiveFugitiveApproachM;
        }
    }
    
}



