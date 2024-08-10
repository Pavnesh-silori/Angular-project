import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class SystemController {
    private http;
    constructor(http: HttpClient);
    getSystemInfo(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SystemController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SystemController>;
}
