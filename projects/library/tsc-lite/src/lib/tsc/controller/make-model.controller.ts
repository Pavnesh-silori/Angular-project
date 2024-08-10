import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { MakeModelI } from '../model/make-model.model';

@Injectable({
    providedIn: 'root'
})

export class MakeModelController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getMake(type): Observable<MakeModelI[]> {
        let params = new HttpParams();

        params = params.append('type', type);

        return this.http.get<MakeModelI[]>(`${this.environment.TSC_COMMON_API_URL}make`, { params: params });
    }

    getModel(makeID, type): Observable<MakeModelI[]> {
        let params = new HttpParams();
        params = params.append('type', type);

        return this.http.get<MakeModelI[]>(`${this.environment.TSC_COMMON_API_URL}make/${makeID}/model`, { params: params });
    }

}
