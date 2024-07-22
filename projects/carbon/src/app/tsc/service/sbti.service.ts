import { Injectable } from '@angular/core';

import { SbtiSectorM, SbtiSector, SbtiSettingM, SbtiSetting, SbtiSettingDifferenceM, SbtiSettingDifference } from '../model/sbti.model';
import { SbtiController } from '@carbon/controller/sbti.controller';

@Injectable({
    providedIn: 'root'
})

export class SbtiService {

    constructor(
        private sbtiController: SbtiController
    ) { }

    async getAllSbtiSector(): Promise<SbtiSectorM[]> {
        let sbtiSectorM: SbtiSectorM[];

        try {
            sbtiSectorM = await this.sbtiController.getAllSbtiSector().toPromise();

            if (sbtiSectorM) {
                return sbtiSectorM;
            } else {
                return [new SbtiSector()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new SbtiSector()];
        }
    }

    async getSbtiSettingsByOrgID(orgID): Promise<SbtiSettingM> {
        let sbtiSettingsM: SbtiSettingM;

        try {
            sbtiSettingsM = await this.sbtiController.getSbtiSettingsByOrgID(orgID).toPromise();

            if (sbtiSettingsM) {
                return sbtiSettingsM;
            } else {
                return new SbtiSetting();
            }
        } catch (error) {
            console.error('Error -', error);
            return new SbtiSetting();
        }
    }

    async getSettingEmissionDifference(orgID, formData): Promise<SbtiSettingDifferenceM[]> {
        let sbtiDifferenceM: SbtiSettingDifferenceM[];
        try {
            sbtiDifferenceM = await this.sbtiController.getSettingEmissionDifference(orgID, formData).toPromise();

            if (sbtiDifferenceM) {
                return sbtiDifferenceM;
            } else {
                return [new SbtiSettingDifference()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new SbtiSettingDifference()];
        }
    }

}
