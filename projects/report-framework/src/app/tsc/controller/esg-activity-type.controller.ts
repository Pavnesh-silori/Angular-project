import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EsgActivityTypeI } from "@report-framework/model/esg-activity-type.model";
import { StandardI } from "@report-framework/model/standard.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})

export class EsgActivityTypeController {

    constructor(
        private http: HttpClient
    ) { }

    getEsgActivityTypeList(): Observable<EsgActivityTypeI[]> {
        return this.http.get<EsgActivityTypeI[]>(`${environment.MOCK_SERVER}activity-type`);
    }

    getConsolidationLogicList(): Observable<StandardI[]> {
        return this.http.get<StandardI[]>(`${environment.MOCK_SERVER}consolidation-logic-list`);

    }

}