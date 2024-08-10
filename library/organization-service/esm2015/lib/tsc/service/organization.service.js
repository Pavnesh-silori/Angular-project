import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import { OrgType, OrganizationStatus } from "../enum/organization.enum";
import { Organization } from "../model/organization.model";
import { Facility } from "@library/facility-service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@library/storage-service";
import * as i3 from "@library/application-service";
import * as i4 from "../controller/organization.controller";
import * as i5 from "@library/facility-service";
export class OrganizationService {
    constructor(router, storageService, applicationService, organizationController, facilityService) {
        this.router = router;
        this.storageService = storageService;
        this.applicationService = applicationService;
        this.organizationController = organizationController;
        this.facilityService = facilityService;
        this.organizationM = new Organization();
        this.facilityM = new Facility();
        this.redirectUrl = '';
    }
    orgSwitch(orgID, orgSwitchRedirect) {
        let applicationKeyID;
        let token;
        let userID;
        let queryParam;
        let currentUrl = '';
        applicationKeyID = this.storageService.getStorage('applicationKeyID');
        token = this.storageService.getStorage('token');
        userID = this.storageService.getStorage('userID');
        if (orgSwitchRedirect == 'NO') {
            currentUrl = '';
        }
        else {
            currentUrl = this.router.url;
        }
        queryParam = `login?token=${token}&userID=${userID}&orgID=${orgID}&redirectUrl=${currentUrl}`;
        window.location.href = this.applicationService.appRedirect(applicationKeyID) + queryParam;
    }
    getOrganizationByID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let organizationM;
            let organization = new Organization();
            try {
                organizationM = yield this.organizationController.getOrganizationByID(orgID).toPromise();
                if (organizationM) {
                    return organizationM;
                }
                else {
                    return organization;
                }
            }
            catch (error) {
                console.error('Error -', error);
                return organization;
            }
        });
    }
    getOrgByAccess(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            let orgAccessM;
            try {
                orgAccessM = yield this.organizationController.getOrgByAccess(userID).toPromise();
                return orgAccessM;
            }
            catch (error) {
                console.error('Error -', error);
            }
        });
    }
    getOrganizations(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let orgAccessM;
            try {
                orgAccessM = yield this.organizationController.getOrganizations(orgID).toPromise();
                return orgAccessM;
            }
            catch (error) {
                console.error('Error -', error);
            }
        });
    }
    getOrgSiteWithUserAccess(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            let orgSiteAccessM;
            try {
                orgSiteAccessM = yield this.organizationController.getOrgSiteWithUserAccess(userID).toPromise();
                return orgSiteAccessM;
            }
            catch (error) {
                console.error('Error -', error);
            }
        });
    }
    getOrgStatus(status) {
        switch (status) {
            case OrganizationStatus.ACTIVE:
                return 'Active';
            case OrganizationStatus.INACTIVE:
                return 'Inactive';
            case OrganizationStatus.PENDING_SETUP:
                return 'Pending setup';
            default:
                console.log('Invalid organization status');
        }
    }
    getOrgTimezone() {
        return __awaiter(this, void 0, void 0, function* () {
            this.currentOrgType = this.storageService.getStorage('currentOrgType');
            this.rootOrgID = this.storageService.getStorage('rootOrgID');
            this.currentOrgID = this.storageService.getStorage('currentOrgID');
            let timezone = null;
            if (this.currentOrgType == OrgType.ORGANIZATION) {
                this.organizationM = (yield this.getOrganizationByID(this.currentOrgID));
                if (this.organizationM.timeZoneName) {
                    timezone = this.organizationM.timeZoneName;
                }
            }
            else if (this.currentOrgType == OrgType.SITE) {
                this.facilityM = (yield this.facilityService.getFacilityByID(this.rootOrgID, this.currentOrgID));
                if (this.facilityM.timeZoneName) {
                    timezone = this.facilityM.timeZoneName;
                }
                else {
                    this.organizationM = (yield this.getOrganizationByID(this.rootOrgID));
                    if (this.organizationM.timeZoneName) {
                        timezone = this.organizationM.timeZoneName;
                    }
                }
            }
            return timezone;
        });
    }
}
OrganizationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationService, deps: [{ token: i1.Router }, { token: i2.StorageService }, { token: i3.ApplicationService }, { token: i4.OrganizationController }, { token: i5.FacilityService }], target: i0.ɵɵFactoryTarget.Injectable });
OrganizationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.StorageService }, { type: i3.ApplicationService }, { type: i4.OrganizationController }, { type: i5.FacilityService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L29yZ2FuaXphdGlvbi1zZXJ2aWNlL3NyYy9saWIvdHNjL3NlcnZpY2Uvb3JnYW5pemF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXhFLE9BQU8sRUFBOEIsWUFBWSxFQUFpQixNQUFNLDZCQUE2QixDQUFDO0FBTXRHLE9BQU8sRUFBRSxRQUFRLEVBQThCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7QUFNakYsTUFBTSxPQUFPLG1CQUFtQjtJQWE1QixZQUNZLE1BQWMsRUFDZCxjQUE4QixFQUM5QixrQkFBc0MsRUFDdEMsc0JBQThDLEVBQzlDLGVBQWdDO1FBSmhDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVY1QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsY0FBUyxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFFM0IsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUFRckIsQ0FBQztJQUVMLFNBQVMsQ0FBQyxLQUFLLEVBQUUsaUJBQXlCO1FBQ3RDLElBQUksZ0JBQXdCLENBQUM7UUFDN0IsSUFBSSxLQUFhLENBQUM7UUFDbEIsSUFBSSxNQUFXLENBQUM7UUFDaEIsSUFBSSxVQUFrQixDQUFDO1FBQ3ZCLElBQUksVUFBVSxHQUFXLEVBQUUsQ0FBQztRQUc1QixnQkFBZ0IsR0FB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LENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQztvQkFFbkYsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRTt3QkFDakMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO3FCQUM5QztpQkFDSjthQUNKO1lBQ0QsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQztLQUFBOztpSEFuSVEsbUJBQW1CO3FIQUFuQixtQkFBbUIsY0FIaEIsTUFBTTs0RkFHVCxtQkFBbUI7a0JBSi9CLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IE9yZ1R5cGUsIE9yZ2FuaXphdGlvblN0YXR1cyB9IGZyb20gXCIuLi9lbnVtL29yZ2FuaXphdGlvbi5lbnVtXCI7XG5cbmltcG9ydCB7IE9yZ0FjY2Vzc00sIE9yZ1NpdGVBY2Nlc3NNLCBPcmdhbml6YXRpb24sIE9yZ2FuaXphdGlvbk0gfSBmcm9tIFwiLi4vbW9kZWwvb3JnYW5pemF0aW9uLm1vZGVsXCI7XG5cbmltcG9ydCB7IE9yZ2FuaXphdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlci9vcmdhbml6YXRpb24uY29udHJvbGxlclwiO1xuXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gXCJAbGlicmFyeS9zdG9yYWdlLXNlcnZpY2VcIjtcbmltcG9ydCB7IEFwcGxpY2F0aW9uU2VydmljZSB9IGZyb20gXCJAbGlicmFyeS9hcHBsaWNhdGlvbi1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGYWNpbGl0eSwgRmFjaWxpdHlNLCBGYWNpbGl0eVNlcnZpY2UgfSBmcm9tIFwiQGxpYnJhcnkvZmFjaWxpdHktc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgT3JnYW5pemF0aW9uU2VydmljZSB7XG5cbiAgICBPcmdUeXBlOiBPcmdUeXBlO1xuXG4gICAgY3VycmVudE9yZ1R5cGU6IGFueTtcbiAgICByb290T3JnSUQ6IGFueTtcbiAgICBjdXJyZW50T3JnSUQ6IGFueTtcblxuICAgIG9yZ2FuaXphdGlvbk0gPSBuZXcgT3JnYW5pemF0aW9uKCk7XG4gICAgZmFjaWxpdHlNID0gbmV3IEZhY2lsaXR5KCk7XG5cbiAgICByZWRpcmVjdFVybDogc3RyaW5nID0gJyc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYXBwbGljYXRpb25TZXJ2aWNlOiBBcHBsaWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgb3JnYW5pemF0aW9uQ29udHJvbGxlcjogT3JnYW5pemF0aW9uQ29udHJvbGxlcixcbiAgICAgICAgcHJpdmF0ZSBmYWNpbGl0eVNlcnZpY2U6IEZhY2lsaXR5U2VydmljZSxcbiAgICApIHsgfVxuXG4gICAgb3JnU3dpdGNoKG9yZ0lELCBvcmdTd2l0Y2hSZWRpcmVjdDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBhcHBsaWNhdGlvbktleUlEOiBzdHJpbmc7XG4gICAgICAgIGxldCB0b2tlbjogc3RyaW5nO1xuICAgICAgICBsZXQgdXNlcklEOiBhbnk7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtOiBzdHJpbmc7XG4gICAgICAgIGxldCBjdXJyZW50VXJsOiBzdHJpbmcgPSAnJztcblxuXG4gICAgICAgIGFwcGxpY2F0aW9uS2V5SUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2FwcGxpY2F0aW9uS2V5SUQnKTtcbiAgICAgICAgdG9rZW4gPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ3Rva2VuJyk7XG4gICAgICAgIHVzZXJJRCA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgndXNlcklEJyk7XG5cbiAgICAgICAgaWYgKG9yZ1N3aXRjaFJlZGlyZWN0ID09ICdOTycpIHtcbiAgICAgICAgICAgIGN1cnJlbnRVcmwgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRVcmwgPSB0aGlzLnJvdXRlci51cmw7XG4gICAgICAgIH1cblxuICAgICAgICBxdWVyeVBhcmFtID0gYGxvZ2luP3Rva2VuPSR7dG9rZW59JnVzZXJJRD0ke3VzZXJJRH0mb3JnSUQ9JHtvcmdJRH0mcmVkaXJlY3RVcmw9JHtjdXJyZW50VXJsfWA7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5hcHBsaWNhdGlvblNlcnZpY2UuYXBwUmVkaXJlY3QoYXBwbGljYXRpb25LZXlJRCkgKyBxdWVyeVBhcmFtO1xuICAgIH1cblxuICAgIGFzeW5jIGdldE9yZ2FuaXphdGlvbkJ5SUQob3JnSUQ6IG51bWJlcik6IFByb21pc2U8T3JnYW5pemF0aW9uTT4ge1xuICAgICAgICBsZXQgb3JnYW5pemF0aW9uTTogT3JnYW5pemF0aW9uTTtcbiAgICAgICAgbGV0IG9yZ2FuaXphdGlvbiA9IG5ldyBPcmdhbml6YXRpb24oKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3JnYW5pemF0aW9uTSA9IGF3YWl0IHRoaXMub3JnYW5pemF0aW9uQ29udHJvbGxlci5nZXRPcmdhbml6YXRpb25CeUlEKG9yZ0lEKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKG9yZ2FuaXphdGlvbk0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JnYW5pemF0aW9uTTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yZ2FuaXphdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gb3JnYW5pemF0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0T3JnQnlBY2Nlc3ModXNlcklEOiBudW1iZXIpOiBQcm9taXNlPE9yZ0FjY2Vzc01bXT4ge1xuICAgICAgICBsZXQgb3JnQWNjZXNzTTogT3JnQWNjZXNzTVtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3JnQWNjZXNzTSA9IGF3YWl0IHRoaXMub3JnYW5pemF0aW9uQ29udHJvbGxlci5nZXRPcmdCeUFjY2Vzcyh1c2VySUQpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIG9yZ0FjY2Vzc007XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0T3JnYW5pemF0aW9ucyhvcmdJRCk6IFByb21pc2U8T3JnQWNjZXNzTVtdPiB7XG4gICAgICAgIGxldCBvcmdBY2Nlc3NNOiBPcmdBY2Nlc3NNW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvcmdBY2Nlc3NNID0gYXdhaXQgdGhpcy5vcmdhbml6YXRpb25Db250cm9sbGVyLmdldE9yZ2FuaXphdGlvbnMob3JnSUQpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIG9yZ0FjY2Vzc007XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0T3JnU2l0ZVdpdGhVc2VyQWNjZXNzKHVzZXJJRDogbnVtYmVyKTogUHJvbWlzZTxPcmdTaXRlQWNjZXNzTT4ge1xuICAgICAgICBsZXQgb3JnU2l0ZUFjY2Vzc006IE9yZ1NpdGVBY2Nlc3NNO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3JnU2l0ZUFjY2Vzc00gPSBhd2FpdCB0aGlzLm9yZ2FuaXphdGlvbkNvbnRyb2xsZXIuZ2V0T3JnU2l0ZVdpdGhVc2VyQWNjZXNzKHVzZXJJRCkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gb3JnU2l0ZUFjY2Vzc007XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0T3JnU3RhdHVzKHN0YXR1cykge1xuICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSBPcmdhbml6YXRpb25TdGF0dXMuQUNUSVZFOlxuICAgICAgICAgICAgICAgIHJldHVybiAnQWN0aXZlJztcbiAgICAgICAgICAgIGNhc2UgT3JnYW5pemF0aW9uU3RhdHVzLklOQUNUSVZFOlxuICAgICAgICAgICAgICAgIHJldHVybiAnSW5hY3RpdmUnO1xuICAgICAgICAgICAgY2FzZSBPcmdhbml6YXRpb25TdGF0dXMuUEVORElOR19TRVRVUDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1BlbmRpbmcgc2V0dXAnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBvcmdhbml6YXRpb24gc3RhdHVzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRPcmdUaW1lem9uZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRPcmdUeXBlID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdjdXJyZW50T3JnVHlwZScpO1xuICAgICAgICB0aGlzLnJvb3RPcmdJRCA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgncm9vdE9yZ0lEJyk7XG4gICAgICAgIHRoaXMuY3VycmVudE9yZ0lEID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdjdXJyZW50T3JnSUQnKTtcblxuICAgICAgICBsZXQgdGltZXpvbmU6IHN0cmluZyA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9yZ1R5cGUgPT0gT3JnVHlwZS5PUkdBTklaQVRJT04pIHtcbiAgICAgICAgICAgIHRoaXMub3JnYW5pemF0aW9uTSA9IDxPcmdhbml6YXRpb25NPmF3YWl0IHRoaXMuZ2V0T3JnYW5pemF0aW9uQnlJRCh0aGlzLmN1cnJlbnRPcmdJRCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9yZ2FuaXphdGlvbk0udGltZVpvbmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgdGltZXpvbmUgPSB0aGlzLm9yZ2FuaXphdGlvbk0udGltZVpvbmVOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudE9yZ1R5cGUgPT0gT3JnVHlwZS5TSVRFKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2lsaXR5TSA9IDxGYWNpbGl0eU0+YXdhaXQgdGhpcy5mYWNpbGl0eVNlcnZpY2UuZ2V0RmFjaWxpdHlCeUlEKHRoaXMucm9vdE9yZ0lELCB0aGlzLmN1cnJlbnRPcmdJRCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZhY2lsaXR5TS50aW1lWm9uZU5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aW1lem9uZSA9IHRoaXMuZmFjaWxpdHlNLnRpbWVab25lTmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmdhbml6YXRpb25NID0gPE9yZ2FuaXphdGlvbk0+YXdhaXQgdGhpcy5nZXRPcmdhbml6YXRpb25CeUlEKHRoaXMucm9vdE9yZ0lEKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9yZ2FuaXphdGlvbk0udGltZVpvbmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWV6b25lID0gdGhpcy5vcmdhbml6YXRpb25NLnRpbWVab25lTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpbWV6b25lO1xuICAgIH1cblxufSJdfQ==