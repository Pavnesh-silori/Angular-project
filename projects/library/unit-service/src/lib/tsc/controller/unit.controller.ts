import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { OldUnitM } from '../model/unit.model'; 

@Injectable({
    providedIn: 'root'
})

export class UnitController {
    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getUnit(filters: string[]): Observable<OldUnitM[]> {
        let params = new HttpParams();

        filters.forEach(filter => {
            params = params.append('filter', filter);
        });

        return this.http.get<OldUnitM[]>(`${this.environment.COMMON_API_URL}units/filter`, { params: params });
    }

    getUnitUsingPublicUrl(filters: string[]): Observable<OldUnitM[]> {
        let params = new HttpParams();

        filters.forEach(filter => {
            params = params.append('filter', filter);
        });

        return this.http.get<OldUnitM[]>(`${this.environment.COMMON_PUBLIC_API_URL}units/filter`, { params: params });
    }
}
