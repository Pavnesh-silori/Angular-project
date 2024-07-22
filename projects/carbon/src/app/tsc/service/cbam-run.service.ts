import { Injectable } from "@angular/core";

import { CbamRunController } from "@carbon/controller/cbam-run.controller";

@Injectable({
    providedIn: 'root'
})

export class CbamRunService {

    constructor(
        private cbamRunController: CbamRunController
    ) { }

    async getValidation(orgID, productID, prID, startDate, endDate): Promise<any> {
        try {
            const response = await this.cbamRunController.getValidation(orgID, productID, prID, startDate, endDate);
            return response;
        } catch (error) {
            console.error('Error -', error);
            return null; // or any other appropriate default value
        }
    }


    async updateCbamRunStatus(orgID: number, runID: number, data: any): Promise<any> {
        let res: any;

        try {
            res = await this.cbamRunController.updateCbamRunStatus(orgID, runID, data).toPromise();

            if (res) {
                return res;
            } else {
                return null;
            }
        } catch (error) {
            console.error('error in updateCbamRunStatus -', error);
            return null;
        }
    }

    async getCbamRunRequestByID(orgID: number, runID: number): Promise<any> {
        let res: any;

        try {
            res = await this.cbamRunController.getCbamRunRequestByID(orgID, runID).toPromise();

            if (res) {
                return res;
            } else {
                return null;
            }
        } catch (error) {
            console.error('error in getCbamRunRequestByID -', error);
            return null;
        }
    }

    async getCbamRunByID(orgID: number, runID: number): Promise<any> {
        let res: any;

        try {
            res = await this.cbamRunController.getCbamRunByID(orgID, runID).toPromise();

            if (res) {
                return res;
            } else {
                return null;
            }
        } catch (error) {
            console.error('error in getCbamRunByID -', error);
            return null;
        }
    }

}