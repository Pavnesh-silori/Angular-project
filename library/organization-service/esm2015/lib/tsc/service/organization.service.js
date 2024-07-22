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
    getOrganizationsByType(orgID, type) {
        return __awaiter(this, void 0, void 0, function* () {
            let orgAccessM;
            try {
                orgAccessM = yield this.organizationController.getOrganizationsByType(orgID, type).toPromise();
                return orgAccessM;
            }
            catch (error) {
                console.error('Error in getOrganizationsByType -', error);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L29yZ2FuaXphdGlvbi1zZXJ2aWNlL3NyYy9saWIvdHNjL3NlcnZpY2Uvb3JnYW5pemF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXhFLE9BQU8sRUFBOEIsWUFBWSxFQUFpQixNQUFNLDZCQUE2QixDQUFDO0FBTXRHLE9BQU8sRUFBRSxRQUFRLEVBQThCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7QUFNakYsTUFBTSxPQUFPLG1CQUFtQjtJQWE1QixZQUNZLE1BQWMsRUFDZCxjQUE4QixFQUM5QixrQkFBc0MsRUFDdEMsc0JBQThDLEVBQzlDLGVBQWdDO1FBSmhDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVY1QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsY0FBUyxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFFM0IsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUFRckIsQ0FBQztJQUVMLFNBQVMsQ0FBQyxLQUFLLEVBQUUsaUJBQXlCO1FBQ3RDLElBQUksZ0JBQXdCLENBQUM7UUFDN0IsSUFBSSxLQUFhLENBQUM7UUFDbEIsSUFBSSxNQUFXLENBQUM7UUFDaEIsSUFBSSxVQUFrQixDQUFDO1FBQ3ZCLElBQUksVUFBVSxHQUFXLEVBQUUsQ0FBQztRQUc1QixnQkFBZ0IsR0FB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LElBQUksRUFBRTtnQkFDNUMsSUFBSSxDQUFDLFNBQVMsSUFBYyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUM7Z0JBRTFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7b0JBQzdCLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztpQkFDMUM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLGFBQWEsSUFBa0IsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7b0JBRW5GLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7d0JBQ2pDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztxQkFDOUM7aUJBQ0o7YUFDSjtZQUNELE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7S0FBQTs7aUhBN0lRLG1CQUFtQjtxSEFBbkIsbUJBQW1CLGNBSGhCLE1BQU07NEZBR1QsbUJBQW1CO2tCQUovQixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBPcmdUeXBlLCBPcmdhbml6YXRpb25TdGF0dXMgfSBmcm9tIFwiLi4vZW51bS9vcmdhbml6YXRpb24uZW51bVwiO1xuXG5pbXBvcnQgeyBPcmdBY2Nlc3NNLCBPcmdTaXRlQWNjZXNzTSwgT3JnYW5pemF0aW9uLCBPcmdhbml6YXRpb25NIH0gZnJvbSBcIi4uL21vZGVsL29yZ2FuaXphdGlvbi5tb2RlbFwiO1xuXG5pbXBvcnQgeyBPcmdhbml6YXRpb25Db250cm9sbGVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvb3JnYW5pemF0aW9uLmNvbnRyb2xsZXJcIjtcblxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tIFwiQGxpYnJhcnkvc3RvcmFnZS1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblNlcnZpY2UgfSBmcm9tIFwiQGxpYnJhcnkvYXBwbGljYXRpb24tc2VydmljZVwiO1xuaW1wb3J0IHsgRmFjaWxpdHksIEZhY2lsaXR5TSwgRmFjaWxpdHlTZXJ2aWNlIH0gZnJvbSBcIkBsaWJyYXJ5L2ZhY2lsaXR5LXNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIE9yZ2FuaXphdGlvblNlcnZpY2Uge1xuXG4gICAgT3JnVHlwZTogT3JnVHlwZTtcblxuICAgIGN1cnJlbnRPcmdUeXBlOiBhbnk7XG4gICAgcm9vdE9yZ0lEOiBhbnk7XG4gICAgY3VycmVudE9yZ0lEOiBhbnk7XG5cbiAgICBvcmdhbml6YXRpb25NID0gbmV3IE9yZ2FuaXphdGlvbigpO1xuICAgIGZhY2lsaXR5TSA9IG5ldyBGYWNpbGl0eSgpO1xuXG4gICAgcmVkaXJlY3RVcmw6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGFwcGxpY2F0aW9uU2VydmljZTogQXBwbGljYXRpb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG9yZ2FuaXphdGlvbkNvbnRyb2xsZXI6IE9yZ2FuaXphdGlvbkNvbnRyb2xsZXIsXG4gICAgICAgIHByaXZhdGUgZmFjaWxpdHlTZXJ2aWNlOiBGYWNpbGl0eVNlcnZpY2UsXG4gICAgKSB7IH1cblxuICAgIG9yZ1N3aXRjaChvcmdJRCwgb3JnU3dpdGNoUmVkaXJlY3Q6IHN0cmluZykge1xuICAgICAgICBsZXQgYXBwbGljYXRpb25LZXlJRDogc3RyaW5nO1xuICAgICAgICBsZXQgdG9rZW46IHN0cmluZztcbiAgICAgICAgbGV0IHVzZXJJRDogYW55O1xuICAgICAgICBsZXQgcXVlcnlQYXJhbTogc3RyaW5nO1xuICAgICAgICBsZXQgY3VycmVudFVybDogc3RyaW5nID0gJyc7XG5cblxuICAgICAgICBhcHBsaWNhdGlvbktleUlEID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdhcHBsaWNhdGlvbktleUlEJyk7XG4gICAgICAgIHRva2VuID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCd0b2tlbicpO1xuICAgICAgICB1c2VySUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ3VzZXJJRCcpO1xuXG4gICAgICAgIGlmIChvcmdTd2l0Y2hSZWRpcmVjdCA9PSAnTk8nKSB7XG4gICAgICAgICAgICBjdXJyZW50VXJsID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50VXJsID0gdGhpcy5yb3V0ZXIudXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgcXVlcnlQYXJhbSA9IGBsb2dpbj90b2tlbj0ke3Rva2VufSZ1c2VySUQ9JHt1c2VySUR9Jm9yZ0lEPSR7b3JnSUR9JnJlZGlyZWN0VXJsPSR7Y3VycmVudFVybH1gO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuYXBwbGljYXRpb25TZXJ2aWNlLmFwcFJlZGlyZWN0KGFwcGxpY2F0aW9uS2V5SUQpICsgcXVlcnlQYXJhbTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRPcmdhbml6YXRpb25CeUlEKG9yZ0lEOiBudW1iZXIpOiBQcm9taXNlPE9yZ2FuaXphdGlvbk0+IHtcbiAgICAgICAgbGV0IG9yZ2FuaXphdGlvbk06IE9yZ2FuaXphdGlvbk07XG4gICAgICAgIGxldCBvcmdhbml6YXRpb24gPSBuZXcgT3JnYW5pemF0aW9uKCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbk0gPSBhd2FpdCB0aGlzLm9yZ2FuaXphdGlvbkNvbnRyb2xsZXIuZ2V0T3JnYW5pemF0aW9uQnlJRChvcmdJRCkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChvcmdhbml6YXRpb25NKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yZ2FuaXphdGlvbk07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmdhbml6YXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG9yZ2FuaXphdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldE9yZ0J5QWNjZXNzKHVzZXJJRDogbnVtYmVyKTogUHJvbWlzZTxPcmdBY2Nlc3NNW10+IHtcbiAgICAgICAgbGV0IG9yZ0FjY2Vzc006IE9yZ0FjY2Vzc01bXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9yZ0FjY2Vzc00gPSBhd2FpdCB0aGlzLm9yZ2FuaXphdGlvbkNvbnRyb2xsZXIuZ2V0T3JnQnlBY2Nlc3ModXNlcklEKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBvcmdBY2Nlc3NNO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldE9yZ2FuaXphdGlvbnMob3JnSUQpOiBQcm9taXNlPE9yZ0FjY2Vzc01bXT4ge1xuICAgICAgICBsZXQgb3JnQWNjZXNzTTogT3JnQWNjZXNzTVtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3JnQWNjZXNzTSA9IGF3YWl0IHRoaXMub3JnYW5pemF0aW9uQ29udHJvbGxlci5nZXRPcmdhbml6YXRpb25zKG9yZ0lEKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBvcmdBY2Nlc3NNO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldE9yZ2FuaXphdGlvbnNCeVR5cGUob3JnSUQsIHR5cGU6IHN0cmluZyk6IFByb21pc2U8T3JnQWNjZXNzTVtdPiB7XG4gICAgICAgIGxldCBvcmdBY2Nlc3NNOiBPcmdBY2Nlc3NNW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvcmdBY2Nlc3NNID0gYXdhaXQgdGhpcy5vcmdhbml6YXRpb25Db250cm9sbGVyLmdldE9yZ2FuaXphdGlvbnNCeVR5cGUob3JnSUQsIHR5cGUpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIG9yZ0FjY2Vzc007XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBnZXRPcmdhbml6YXRpb25zQnlUeXBlIC0nLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRPcmdTaXRlV2l0aFVzZXJBY2Nlc3ModXNlcklEOiBudW1iZXIpOiBQcm9taXNlPE9yZ1NpdGVBY2Nlc3NNPiB7XG4gICAgICAgIGxldCBvcmdTaXRlQWNjZXNzTTogT3JnU2l0ZUFjY2Vzc007XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvcmdTaXRlQWNjZXNzTSA9IGF3YWl0IHRoaXMub3JnYW5pemF0aW9uQ29udHJvbGxlci5nZXRPcmdTaXRlV2l0aFVzZXJBY2Nlc3ModXNlcklEKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBvcmdTaXRlQWNjZXNzTTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRPcmdTdGF0dXMoc3RhdHVzKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIE9yZ2FuaXphdGlvblN0YXR1cy5BQ1RJVkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBY3RpdmUnO1xuICAgICAgICAgICAgY2FzZSBPcmdhbml6YXRpb25TdGF0dXMuSU5BQ1RJVkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdJbmFjdGl2ZSc7XG4gICAgICAgICAgICBjYXNlIE9yZ2FuaXphdGlvblN0YXR1cy5QRU5ESU5HX1NFVFVQOlxuICAgICAgICAgICAgICAgIHJldHVybiAnUGVuZGluZyBzZXR1cCc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIG9yZ2FuaXphdGlvbiBzdGF0dXMnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldE9yZ1RpbWV6b25lKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHRoaXMuY3VycmVudE9yZ1R5cGUgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2N1cnJlbnRPcmdUeXBlJyk7XG4gICAgICAgIHRoaXMucm9vdE9yZ0lEID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdyb290T3JnSUQnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50T3JnSUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2N1cnJlbnRPcmdJRCcpO1xuXG4gICAgICAgIGxldCB0aW1lem9uZTogc3RyaW5nID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50T3JnVHlwZSA9PSBPcmdUeXBlLk9SR0FOSVpBVElPTikge1xuICAgICAgICAgICAgdGhpcy5vcmdhbml6YXRpb25NID0gPE9yZ2FuaXphdGlvbk0+YXdhaXQgdGhpcy5nZXRPcmdhbml6YXRpb25CeUlEKHRoaXMuY3VycmVudE9yZ0lEKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3JnYW5pemF0aW9uTS50aW1lWm9uZU5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aW1lem9uZSA9IHRoaXMub3JnYW5pemF0aW9uTS50aW1lWm9uZU5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50T3JnVHlwZSA9PSBPcmdUeXBlLlNJVEUpIHtcbiAgICAgICAgICAgIHRoaXMuZmFjaWxpdHlNID0gPEZhY2lsaXR5TT5hd2FpdCB0aGlzLmZhY2lsaXR5U2VydmljZS5nZXRGYWNpbGl0eUJ5SUQodGhpcy5yb290T3JnSUQsIHRoaXMuY3VycmVudE9yZ0lEKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZmFjaWxpdHlNLnRpbWVab25lTmFtZSkge1xuICAgICAgICAgICAgICAgIHRpbWV6b25lID0gdGhpcy5mYWNpbGl0eU0udGltZVpvbmVOYW1lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZ2FuaXphdGlvbk0gPSA8T3JnYW5pemF0aW9uTT5hd2FpdCB0aGlzLmdldE9yZ2FuaXphdGlvbkJ5SUQodGhpcy5yb290T3JnSUQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3JnYW5pemF0aW9uTS50aW1lWm9uZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZXpvbmUgPSB0aGlzLm9yZ2FuaXphdGlvbk0udGltZVpvbmVOYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGltZXpvbmU7XG4gICAgfVxuXG59Il19