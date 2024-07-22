import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { DeviceRecentData, OrgRecentData } from '../model/recent-data.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/recent-data.controller";
export class RecentDataService {
    constructor(recentDataController) {
        this.recentDataController = recentDataController;
    }
    getRecentDataWithParam(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let recentDataWithParam;
            try {
                recentDataWithParam = yield this.recentDataController.getRecentDataWithParam(orgID, requestBody).toPromise();
                if (recentDataWithParam) {
                    return recentDataWithParam;
                }
            }
            catch (error) {
                console.error('Error -', error);
                throw error;
            }
        });
    }
    getOrgRecentData(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let orgRes;
            try {
                orgRes = yield this.recentDataController.getOrgRecentData(orgID, requestBody).toPromise();
                if (orgRes) {
                    return orgRes;
                }
                else {
                    return [new OrgRecentData()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                throw error;
            }
        });
    }
    getDeviceRecentData(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let deviceRes;
            try {
                deviceRes = yield this.recentDataController.getDeviceRecentData(orgID, requestBody).toPromise();
                if (deviceRes) {
                    return deviceRes;
                }
                else {
                    return [new DeviceRecentData()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                throw error;
            }
        });
    }
}
RecentDataService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RecentDataService, deps: [{ token: i1.RecentDataController }], target: i0.ɵɵFactoryTarget.Injectable });
RecentDataService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RecentDataService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RecentDataService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.RecentDataController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZW50LWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2Mvc2VydmljZS9yZWNlbnQtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBcUIsYUFBYSxFQUFrQixNQUFNLDRCQUE0QixDQUFDOzs7QUFRaEgsTUFBTSxPQUFPLGlCQUFpQjtJQUUxQixZQUNZLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ2xELENBQUM7SUFFQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsV0FBVzs7WUFDM0MsSUFBSSxtQkFBbUIsQ0FBQztZQUN4QixJQUFJO2dCQUNBLG1CQUFtQixHQUFHLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFN0csSUFBSSxtQkFBbUIsRUFBRTtvQkFDckIsT0FBTyxtQkFBbUIsQ0FBQztpQkFDOUI7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxNQUFNLEtBQUssQ0FBQzthQUNmO1FBQ0wsQ0FBQztLQUFBO0lBRUssZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFdBQVc7O1lBQ3JDLElBQUksTUFBTSxDQUFDO1lBQ1gsSUFBSTtnQkFDQSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUUxRixJQUFJLE1BQU0sRUFBRTtvQkFDUixPQUFPLE1BQU0sQ0FBQztpQkFDakI7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksYUFBYSxFQUFFLENBQUMsQ0FBQztpQkFDaEM7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxNQUFNLEtBQUssQ0FBQzthQUNmO1FBQ0wsQ0FBQztLQUFBO0lBRUssbUJBQW1CLENBQUMsS0FBSyxFQUFFLFdBQVc7O1lBQ3hDLElBQUksU0FBUyxDQUFDO1lBQ2QsSUFBSTtnQkFDQSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUVoRyxJQUFJLFNBQVMsRUFBRTtvQkFDWCxPQUFPLFNBQVMsQ0FBQztpQkFDcEI7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO2lCQUNuQzthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU0sS0FBSyxDQUFDO2FBQ2Y7UUFDTCxDQUFDO0tBQUE7OytHQWxEUSxpQkFBaUI7bUhBQWpCLGlCQUFpQixjQUhkLE1BQU07NEZBR1QsaUJBQWlCO2tCQUo3QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGV2aWNlUmVjZW50RGF0YSwgRGV2aWNlUmVjZW50RGF0YU0sIE9yZ1JlY2VudERhdGEsIE9yZ1JlY2VudERhdGFNIH0gZnJvbSAnLi4vbW9kZWwvcmVjZW50LWRhdGEubW9kZWwnO1xuXG5pbXBvcnQgeyBSZWNlbnREYXRhQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXIvcmVjZW50LWRhdGEuY29udHJvbGxlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBSZWNlbnREYXRhU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWNlbnREYXRhQ29udHJvbGxlcjogUmVjZW50RGF0YUNvbnRyb2xsZXJcbiAgICApIHsgfVxuXG4gICAgYXN5bmMgZ2V0UmVjZW50RGF0YVdpdGhQYXJhbShvcmdJRCwgcmVxdWVzdEJvZHkpIHtcbiAgICAgICAgbGV0IHJlY2VudERhdGFXaXRoUGFyYW07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZWNlbnREYXRhV2l0aFBhcmFtID0gYXdhaXQgdGhpcy5yZWNlbnREYXRhQ29udHJvbGxlci5nZXRSZWNlbnREYXRhV2l0aFBhcmFtKG9yZ0lELCByZXF1ZXN0Qm9keSkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChyZWNlbnREYXRhV2l0aFBhcmFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2VudERhdGFXaXRoUGFyYW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRPcmdSZWNlbnREYXRhKG9yZ0lELCByZXF1ZXN0Qm9keSk6IFByb21pc2U8T3JnUmVjZW50RGF0YU1bXT4ge1xuICAgICAgICBsZXQgb3JnUmVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3JnUmVzID0gYXdhaXQgdGhpcy5yZWNlbnREYXRhQ29udHJvbGxlci5nZXRPcmdSZWNlbnREYXRhKG9yZ0lELCByZXF1ZXN0Qm9keSkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChvcmdSZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JnUmVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBPcmdSZWNlbnREYXRhKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGV2aWNlUmVjZW50RGF0YShvcmdJRCwgcmVxdWVzdEJvZHkpOiBQcm9taXNlPERldmljZVJlY2VudERhdGFNW10+IHtcbiAgICAgICAgbGV0IGRldmljZVJlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRldmljZVJlcyA9IGF3YWl0IHRoaXMucmVjZW50RGF0YUNvbnRyb2xsZXIuZ2V0RGV2aWNlUmVjZW50RGF0YShvcmdJRCwgcmVxdWVzdEJvZHkpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAoZGV2aWNlUmVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRldmljZVJlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgRGV2aWNlUmVjZW50RGF0YSgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==