import { DeviceRecentDataM, OrgRecentDataM } from '../model/recent-data.model';
import { RecentDataController } from '../controller/recent-data.controller';
import * as i0 from "@angular/core";
export declare class RecentDataService {
    private recentDataController;
    constructor(recentDataController: RecentDataController);
    getRecentDataWithParam(orgID: any, requestBody: any): Promise<any>;
    getOrgRecentData(orgID: any, requestBody: any): Promise<OrgRecentDataM[]>;
    getDeviceRecentData(orgID: any, requestBody: any): Promise<DeviceRecentDataM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecentDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecentDataService>;
}
