import { CountryM } from "../model/country.model";
import { CountryController } from "../controller/country.controller";
import { StorageService } from "@library/storage-service";
import * as i0 from "@angular/core";
export declare class CountryService {
    private countryController;
    private storageService;
    redirectUrl: string;
    constructor(countryController: CountryController, storageService: StorageService);
    getCountry(): Promise<CountryM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CountryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CountryService>;
}
