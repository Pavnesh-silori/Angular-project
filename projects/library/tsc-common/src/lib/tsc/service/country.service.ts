import { Injectable } from "@angular/core";

import { Country, CountryM } from "../model/country.model";
import { CountryController } from "../controller/country.controller";
import { SystemService } from "./system.service";

@Injectable({
    providedIn: 'root'
})

export class CountryService {

    redirectUrl: string = '';

    constructor(
        private countryController: CountryController,
        private systemService: SystemService
    ) { }

    async getCountry(): Promise<CountryM[]> {
        let countryM: CountryM[];
        let country = [new Country()];

        try {
            countryM = await this.countryController.getCountry().toPromise();

            if (countryM) {
                return countryM;
            } else {
                return country;
            }
        } catch (error) {
            console.error('Error -', error);
            return country;
        }
    }

    async getCurrentCountry() {
        let systemInfo: any
        let countryCode: string;

        systemInfo = <any>await this.systemService.getSystemInfo();

        if (systemInfo) {
            countryCode = systemInfo.country
        } else {
            countryCode = null;
        }

        return countryCode;
    }

}