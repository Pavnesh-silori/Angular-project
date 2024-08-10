import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CountryM } from '../model/country.model';
import * as i0 from "@angular/core";
export declare class CountryController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getCountry(): Observable<CountryM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CountryController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CountryController>;
}
