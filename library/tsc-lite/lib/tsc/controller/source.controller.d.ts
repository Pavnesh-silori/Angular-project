import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SourceConsumerConfigureM, SourceConsumerPageM, SourceM, UtilitySourceTypeM } from '../model/source-consumer.model';
import { PageM, StaticI } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class SourceController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    createSourceType(orgID: any, source: any): Observable<Object>;
    getSourceTypeByID(orgID: any, sourceID: any): Observable<SourceM>;
    updateSourceType(orgID: any, sourceID: any, source: any): Observable<Object>;
    deleteSourceType(orgID: any, sourceID: any): Observable<Object>;
    getSourceTypeByPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string, searchValue: any, filterArr: any, orgID: any): Observable<PageM<SourceConsumerPageM>>;
    getUtilitySourceAndType(orgID: any): Observable<UtilitySourceTypeM>;
    getSourceConsumerType(orgID: any, type: any): Observable<StaticI[]>;
    getSourceConsumerConfig(orgID: any): Observable<SourceConsumerConfigureM>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SourceController>;
}
