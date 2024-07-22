import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContractualInstrumentController {

    constructor(
        private http: HttpClient
    ) { }

    getContracturalInstrumentList() {
        return this.http.get(`${environment.CARBON_ACCOUNTING_PUBLIC_API_URL}contractual-instrument`)
    }
}
