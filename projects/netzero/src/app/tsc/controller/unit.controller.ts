import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class UnitController {

    constructor(
        private http: HttpClient
    ) { }

    getUnit(filters: any[]) {
        let params = new HttpParams();
        filters.forEach(filter => {
            params = params.append('filter', filter);
        });
        return this.http.get(`${environment.COMMON_API_URL}units/filter`, { params: params });
    }
}