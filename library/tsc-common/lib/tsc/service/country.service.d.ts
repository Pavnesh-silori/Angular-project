import { CountryM } from "../model/country.model";
import { CountryController } from "../controller/country.controller";
import { SystemService } from "./system.service";
import * as i0 from "@angular/core";
export declare class CountryService {
    private countryController;
    private systemService;
    redirectUrl: string;
    constructor(countryController: CountryController, systemService: SystemService);
    getCountry(): Promise<CountryM[]>;
    getCurrentCountry(): Promise<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CountryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CountryService>;
}
