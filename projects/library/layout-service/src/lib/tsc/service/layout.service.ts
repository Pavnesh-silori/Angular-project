import { Injectable } from '@angular/core';

import { Layout, LayoutM } from '../model/layout.model';
import { LayoutController } from '../controller/layout.controller';

@Injectable({
    providedIn: 'root'
})

export class LayoutService {

    constructor(
        private layoutController: LayoutController,
    ) { }

    async getLayoutByOrgID(orgID): Promise<LayoutM[]> {
        let layoutM: LayoutM[];
        try {
            layoutM = await this.layoutController.getLayoutByOrgID(orgID).toPromise();

            if (layoutM) {
                return layoutM;
            } else {
                return [new Layout()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new Layout()];
        }
    }

    async getLayoutByID(orgID, layoutID): Promise<LayoutM> {
        let layoutM: LayoutM;
        try {
            layoutM = await this.layoutController.getLayoutByID(orgID, layoutID).toPromise();

            if (layoutM) {
                return layoutM;
            } else {
                return new Layout();
            }
        } catch (error) {
            console.error('Error -', error);
            return new Layout();
        }
    }

}