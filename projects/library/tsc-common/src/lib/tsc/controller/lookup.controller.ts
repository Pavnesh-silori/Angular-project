import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";

import { LookupRequestM, LookupValueM } from "../model/lookup.model";

@Injectable({
    providedIn: 'root'
})
export class LookupController {

    constructor(
        private http: HttpClient,
    ) { }

    getLookupValue(baseUrl: string, lookup: LookupRequestM[]) {
        return this.http.post<LookupValueM[]>(`${baseUrl}lookup`, lookup);
    }

}