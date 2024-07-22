import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StandardI } from "@report-framework/model/standard.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})

export class UnitTypeController {

    constructor(
        private http: HttpClient
    ) { }

    getUnitTypeList(): Observable<StandardI[]> {
        return this.http.get<StandardI[]>(`${environment.COMMON_API_URL}unit-type`);
    }

}