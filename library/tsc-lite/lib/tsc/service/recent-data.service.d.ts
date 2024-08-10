import { RecentDataController } from '../controller/recent-data.controller';
import { OrgRecentDataM } from '../model/recent-data.model';
import * as i0 from "@angular/core";
export declare class RecentDataService {
    private recentDataController;
    constructor(recentDataController: RecentDataController);
    getRecentDataWithParam(orgID: any, requestBody: any): Promise<any>;
    getOrgRecentData(orgID: any, requestBody: any): Promise<OrgRecentDataM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecentDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecentDataService>;
}
