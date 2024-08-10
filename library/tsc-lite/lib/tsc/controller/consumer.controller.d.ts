import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SourceConsumerPageM, ConsumerM } from '../model/source-consumer.model';
import { PageM } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class ConsumerController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    createConsumerType(orgID: any, consumer: any): Observable<Object>;
    getConsumerTypeByID(orgID: any, consumerID: any): Observable<ConsumerM>;
    updateConsumerType(orgID: any, consumerID: any, consumer: any): Observable<Object>;
    deleteConsumerType(orgID: any, consumerID: any): Observable<Object>;
    getConsumerTypeByPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string, searchValue: any, filterArr: any, orgID: any): Observable<PageM<SourceConsumerPageM>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConsumerController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConsumerController>;
}
