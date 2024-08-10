import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { OrgRecentData } from '../model/recent-data.model';
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
    getEntityLevelRecentData(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityLevelRes;
            try {
                entityLevelRes = yield this.recentDataController.getEntityLevelRecentData(orgID, requestBody).toPromise();
                if (entityLevelRes) {
                    return entityLevelRes;
                }
            }
            catch (error) {
                console.error('Error -', error);
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
}
RecentDataService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RecentDataService, deps: [{ token: i1.RecentDataController }], target: i0.ɵɵFactoryTarget.Injectable });
RecentDataService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RecentDataService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RecentDataService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.RecentDataController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZW50LWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2Mvc2VydmljZS9yZWNlbnQtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxhQUFhLEVBQWtCLE1BQU0sNEJBQTRCLENBQUM7OztBQU0zRSxNQUFNLE9BQU8saUJBQWlCO0lBRTFCLFlBQ1ksb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDbEQsQ0FBQztJQUVDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxXQUFXOztZQUMzQyxJQUFJLG1CQUFtQixDQUFDO1lBQ3hCLElBQUk7Z0JBQ0EsbUJBQW1CLEdBQUcsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUU3RyxJQUFJLG1CQUFtQixFQUFFO29CQUNyQixPQUFPLG1CQUFtQixDQUFDO2lCQUM5QjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU0sS0FBSyxDQUFDO2FBQ2Y7UUFDTCxDQUFDO0tBQUE7SUFFSyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsV0FBVzs7WUFDN0MsSUFBSSxjQUFjLENBQUM7WUFDbkIsSUFBSTtnQkFDQSxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUUxRyxJQUFJLGNBQWMsRUFBRTtvQkFDaEIsT0FBTyxjQUFjLENBQUM7aUJBQ3pCO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNuQztRQUNMLENBQUM7S0FBQTtJQUVLLGdCQUFnQixDQUFDLEtBQUssRUFBRSxXQUFXOztZQUNyQyxJQUFJLE1BQU0sQ0FBQztZQUNYLElBQUk7Z0JBQ0EsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFMUYsSUFBSSxNQUFNLEVBQUU7b0JBQ1IsT0FBTyxNQUFNLENBQUM7aUJBQ2pCO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLGFBQWEsRUFBRSxDQUFDLENBQUM7aUJBQ2hDO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxLQUFLLENBQUM7YUFDZjtRQUNMLENBQUM7S0FBQTs7K0dBL0NRLGlCQUFpQjttSEFBakIsaUJBQWlCLGNBSGQsTUFBTTs0RkFHVCxpQkFBaUI7a0JBSjdCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZWNlbnREYXRhQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXIvcmVjZW50LWRhdGEuY29udHJvbGxlcic7XG5pbXBvcnQgeyBPcmdSZWNlbnREYXRhLCBPcmdSZWNlbnREYXRhTSB9IGZyb20gJy4uL21vZGVsL3JlY2VudC1kYXRhLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFJlY2VudERhdGFTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlY2VudERhdGFDb250cm9sbGVyOiBSZWNlbnREYXRhQ29udHJvbGxlclxuICAgICkgeyB9XG5cbiAgICBhc3luYyBnZXRSZWNlbnREYXRhV2l0aFBhcmFtKG9yZ0lELCByZXF1ZXN0Qm9keSkge1xuICAgICAgICBsZXQgcmVjZW50RGF0YVdpdGhQYXJhbTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlY2VudERhdGFXaXRoUGFyYW0gPSBhd2FpdCB0aGlzLnJlY2VudERhdGFDb250cm9sbGVyLmdldFJlY2VudERhdGFXaXRoUGFyYW0ob3JnSUQsIHJlcXVlc3RCb2R5KS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKHJlY2VudERhdGFXaXRoUGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjZW50RGF0YVdpdGhQYXJhbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEVudGl0eUxldmVsUmVjZW50RGF0YShvcmdJRCwgcmVxdWVzdEJvZHkpIHtcbiAgICAgICAgbGV0IGVudGl0eUxldmVsUmVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZW50aXR5TGV2ZWxSZXMgPSBhd2FpdCB0aGlzLnJlY2VudERhdGFDb250cm9sbGVyLmdldEVudGl0eUxldmVsUmVjZW50RGF0YShvcmdJRCwgcmVxdWVzdEJvZHkpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAoZW50aXR5TGV2ZWxSZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50aXR5TGV2ZWxSZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0T3JnUmVjZW50RGF0YShvcmdJRCwgcmVxdWVzdEJvZHkpOiBQcm9taXNlPE9yZ1JlY2VudERhdGFNW10+IHtcbiAgICAgICAgbGV0IG9yZ1JlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9yZ1JlcyA9IGF3YWl0IHRoaXMucmVjZW50RGF0YUNvbnRyb2xsZXIuZ2V0T3JnUmVjZW50RGF0YShvcmdJRCwgcmVxdWVzdEJvZHkpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAob3JnUmVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yZ1JlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgT3JnUmVjZW50RGF0YSgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==