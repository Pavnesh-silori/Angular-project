import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FrequencyController {

    constructor(
        private http: HttpClient
    ) { }

    getAllFrequency() {
        return this.http.get(`${environment.COMMON_API_URL}frequency`);
    }
}
