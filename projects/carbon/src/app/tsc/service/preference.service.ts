import { Injectable } from '@angular/core';
import { PreferenceController } from '@carbon/controller/preference.controller';


@Injectable({
    providedIn: 'root'
})
export class PreferenceService {

    constructor(
        private preferenceController: PreferenceController
    ) { }

    async getOrgPreference(orgID): Promise<any> {
        let preference: any = null;

        try {
            preference = await this.preferenceController.getOrgPreference(orgID).toPromise();

            if (preference) {
                return preference;
            } else {
                throw new Error('Preference not found');
            }
        } catch (error) {
            console.error('Error -', error);
            return null;
        }
    }
}
