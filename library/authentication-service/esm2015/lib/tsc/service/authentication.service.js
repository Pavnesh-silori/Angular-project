import { Inject, Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@library/storage-service";
export class AuthenticationService {
    constructor(environment, storageService) {
        this.environment = environment;
        this.storageService = storageService;
        this.ACCOUNT_KEY_ID = "ACCOUNT";
    }
    isLoggedIn() {
        // return this.getStorage('token');
        let userID = '';
        // let netZeroA: string = '';
        // let primaryOrgID: string = '';
        // let defaultApp: string = '';
        // let currentApp: string = '';
        // let currentOrgID: string = '';
        let token = '';
        // let resourcePermissions: string = '';
        // let currentOrgType: string = '';
        userID = this.storageService.getStorage('userID');
        // netZeroA = this.getStorage('netZeroA');
        // primaryOrgID = this.getStorage('primaryOrgID');
        // defaultApp = this.getStorage('defaultApp');
        // currentApp = this.getStorage('currentApp');
        // currentOrgID = this.getStorage('currentOrgID');
        token = this.storageService.getStorage('token');
        // resourcePermissions = this.getStorage('resourcePermissions');
        // currentOrgType = this.getStorage('currentOrgType');
        // console.log('userID', userID);
        // console.log('netZeroA', netZeroA);
        // console.log('primaryOrgID', primaryOrgID);
        // console.log('defaultApp', defaultApp);
        // console.log('currentApp', currentApp);
        // console.log('currentOrgID', currentOrgID);
        // console.log('token', token);
        // console.log('resourcePermissions', resourcePermissions);
        // console.log('currentOrgType', currentOrgType);
        // let userIDLength = userID.length;
        // let netZeroALength = netZeroA.length;
        // let primaryOrgIDLength = primaryOrgID.length;
        // let defaultAppLength = defaultApp.length;
        // let currentAppLength = currentApp.length;
        // let currentOrgIDLength = currentOrgID.length;
        // let tokenLength = token.length;
        // let permissionsLength = resourcePermissions.length;
        // let currentOrgTypeLength = currentOrgType.length;
        if (userID == 'undefined' ||
            // netZeroA == 'undefined' ||
            // primaryOrgID == 'undefined' ||
            // defaultApp == 'undefined' ||
            // currentApp == 'undefined' ||
            // currentOrgID == 'undefined' ||
            token == 'undefined' ||
            // resourcePermissions == 'undefined' ||
            // currentOrgType == 'undefined' ||
            userID == 'null' ||
            // netZeroA == 'null' ||
            // primaryOrgID == 'null' ||
            // defaultApp == 'null' ||
            // currentApp == 'null' ||
            // currentOrgID == 'null' ||
            token == 'null' ||
            // resourcePermissions == 'null' ||
            // currentOrgType == 'null' ||
            userID == null ||
            // netZeroA == null ||
            // primaryOrgID == null ||
            // defaultApp == null ||
            // currentApp == null ||
            // currentOrgID == null ||
            token == null ||
            // resourcePermissions == null ||
            // currentOrgType == null ||
            userID == '' ||
            // netZeroA == '' ||
            // primaryOrgID == '' ||
            // defaultApp == '' ||
            // currentApp == '' ||
            // currentOrgID == '' ||
            token == ''
        // resourcePermissions == '' ||
        // currentOrgType == ''
        // userIDLength == 0 ||
        // netZeroALength == 0 ||
        // primaryOrgIDLength == 0 ||
        // defaultAppLength == 0 ||
        // currentAppLength == 0 ||
        // currentOrgIDLength == 0 ||
        // tokenLength == 0 ||
        // permissionsLength == 0 ||
        // currentOrgTypeLength == 0 
        ) {
            return false;
        }
        else {
            return true;
        }
    }
    logout(redirectUrl, pageUrl, action, applicationKeyID = '') {
        localStorage.clear();
        sessionStorage.clear();
        if (applicationKeyID != this.ACCOUNT_KEY_ID && action == 'interceptor') {
            window.location.href = `${this.environment.ACCOUNT_URL}login?redirectUrl=${redirectUrl}&pageUrl=${pageUrl}`;
        }
        else {
            window.location.href = `${this.environment.ACCOUNT_URL}login?redirectUrl=${redirectUrl}&pageUrl=${pageUrl}&action=${action}`;
        }
    }
}
AuthenticationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationService, deps: [{ token: 'environment' }, { token: i1.StorageService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthenticationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }, { type: i1.StorageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvYXV0aGVudGljYXRpb24tc2VydmljZS9zcmMvbGliL3RzYy9zZXJ2aWNlL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU9uRCxNQUFNLE9BQU8scUJBQXFCO0lBSTlCLFlBQ21DLFdBQWdCLEVBQ3ZDLGNBQThCO1FBRFAsZ0JBQVcsR0FBWCxXQUFXLENBQUs7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSjFDLG1CQUFjLEdBQUcsU0FBUyxDQUFDO0lBS3ZCLENBQUM7SUFFTCxVQUFVO1FBQ04sbUNBQW1DO1FBRW5DLElBQUksTUFBTSxHQUFXLEVBQUUsQ0FBQztRQUN4Qiw2QkFBNkI7UUFDN0IsaUNBQWlDO1FBQ2pDLCtCQUErQjtRQUMvQiwrQkFBK0I7UUFDL0IsaUNBQWlDO1FBQ2pDLElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQztRQUN2Qix3Q0FBd0M7UUFDeEMsbUNBQW1DO1FBRW5DLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCwwQ0FBMEM7UUFDMUMsa0RBQWtEO1FBQ2xELDhDQUE4QztRQUM5Qyw4Q0FBOEM7UUFDOUMsa0RBQWtEO1FBQ2xELEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxnRUFBZ0U7UUFDaEUsc0RBQXNEO1FBRXRELGlDQUFpQztRQUNqQyxxQ0FBcUM7UUFDckMsNkNBQTZDO1FBQzdDLHlDQUF5QztRQUN6Qyx5Q0FBeUM7UUFDekMsNkNBQTZDO1FBQzdDLCtCQUErQjtRQUMvQiwyREFBMkQ7UUFDM0QsaURBQWlEO1FBRWpELG9DQUFvQztRQUNwQyx3Q0FBd0M7UUFDeEMsZ0RBQWdEO1FBQ2hELDRDQUE0QztRQUM1Qyw0Q0FBNEM7UUFDNUMsZ0RBQWdEO1FBQ2hELGtDQUFrQztRQUNsQyxzREFBc0Q7UUFDdEQsb0RBQW9EO1FBRXBELElBQ0ksTUFBTSxJQUFJLFdBQVc7WUFDckIsNkJBQTZCO1lBQzdCLGlDQUFpQztZQUNqQywrQkFBK0I7WUFDL0IsK0JBQStCO1lBQy9CLGlDQUFpQztZQUNqQyxLQUFLLElBQUksV0FBVztZQUNwQix3Q0FBd0M7WUFDeEMsbUNBQW1DO1lBQ25DLE1BQU0sSUFBSSxNQUFNO1lBQ2hCLHdCQUF3QjtZQUN4Qiw0QkFBNEI7WUFDNUIsMEJBQTBCO1lBQzFCLDBCQUEwQjtZQUMxQiw0QkFBNEI7WUFDNUIsS0FBSyxJQUFJLE1BQU07WUFDZixtQ0FBbUM7WUFDbkMsOEJBQThCO1lBQzlCLE1BQU0sSUFBSSxJQUFJO1lBQ2Qsc0JBQXNCO1lBQ3RCLDBCQUEwQjtZQUMxQix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLDBCQUEwQjtZQUMxQixLQUFLLElBQUksSUFBSTtZQUNiLGlDQUFpQztZQUNqQyw0QkFBNEI7WUFDNUIsTUFBTSxJQUFJLEVBQUU7WUFDWixvQkFBb0I7WUFDcEIsd0JBQXdCO1lBQ3hCLHNCQUFzQjtZQUN0QixzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLEtBQUssSUFBSSxFQUFFO1FBQ1gsK0JBQStCO1FBQy9CLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3QixzQkFBc0I7UUFDdEIsNEJBQTRCO1FBQzVCLDZCQUE2QjtVQUMvQjtZQUNFLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsR0FBRyxFQUFFO1FBQ3RELFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFdkIsSUFBSSxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLE1BQU0sSUFBSSxhQUFhLEVBQUU7WUFDcEUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcscUJBQXFCLFdBQVcsWUFBWSxPQUFPLEVBQUUsQ0FBQztTQUMvRzthQUFNO1lBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcscUJBQXFCLFdBQVcsWUFBWSxPQUFPLFdBQVcsTUFBTSxFQUFFLENBQUM7U0FDaEk7SUFDTCxDQUFDOzttSEFsSFEscUJBQXFCLGtCQUtsQixhQUFhO3VIQUxoQixxQkFBcUIsY0FIbEIsTUFBTTs0RkFHVCxxQkFBcUI7a0JBSmpDLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzswQkFPUSxNQUFNOzJCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tIFwiQGxpYnJhcnkvc3RvcmFnZS1zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xuXG4gICAgQUNDT1VOVF9LRVlfSUQgPSBcIkFDQ09VTlRcIjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueSxcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgKSB7IH1cblxuICAgIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLmdldFN0b3JhZ2UoJ3Rva2VuJyk7XG5cbiAgICAgICAgbGV0IHVzZXJJRDogc3RyaW5nID0gJyc7XG4gICAgICAgIC8vIGxldCBuZXRaZXJvQTogc3RyaW5nID0gJyc7XG4gICAgICAgIC8vIGxldCBwcmltYXJ5T3JnSUQ6IHN0cmluZyA9ICcnO1xuICAgICAgICAvLyBsZXQgZGVmYXVsdEFwcDogc3RyaW5nID0gJyc7XG4gICAgICAgIC8vIGxldCBjdXJyZW50QXBwOiBzdHJpbmcgPSAnJztcbiAgICAgICAgLy8gbGV0IGN1cnJlbnRPcmdJRDogc3RyaW5nID0gJyc7XG4gICAgICAgIGxldCB0b2tlbjogc3RyaW5nID0gJyc7XG4gICAgICAgIC8vIGxldCByZXNvdXJjZVBlcm1pc3Npb25zOiBzdHJpbmcgPSAnJztcbiAgICAgICAgLy8gbGV0IGN1cnJlbnRPcmdUeXBlOiBzdHJpbmcgPSAnJztcblxuICAgICAgICB1c2VySUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ3VzZXJJRCcpO1xuICAgICAgICAvLyBuZXRaZXJvQSA9IHRoaXMuZ2V0U3RvcmFnZSgnbmV0WmVyb0EnKTtcbiAgICAgICAgLy8gcHJpbWFyeU9yZ0lEID0gdGhpcy5nZXRTdG9yYWdlKCdwcmltYXJ5T3JnSUQnKTtcbiAgICAgICAgLy8gZGVmYXVsdEFwcCA9IHRoaXMuZ2V0U3RvcmFnZSgnZGVmYXVsdEFwcCcpO1xuICAgICAgICAvLyBjdXJyZW50QXBwID0gdGhpcy5nZXRTdG9yYWdlKCdjdXJyZW50QXBwJyk7XG4gICAgICAgIC8vIGN1cnJlbnRPcmdJRCA9IHRoaXMuZ2V0U3RvcmFnZSgnY3VycmVudE9yZ0lEJyk7XG4gICAgICAgIHRva2VuID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCd0b2tlbicpO1xuICAgICAgICAvLyByZXNvdXJjZVBlcm1pc3Npb25zID0gdGhpcy5nZXRTdG9yYWdlKCdyZXNvdXJjZVBlcm1pc3Npb25zJyk7XG4gICAgICAgIC8vIGN1cnJlbnRPcmdUeXBlID0gdGhpcy5nZXRTdG9yYWdlKCdjdXJyZW50T3JnVHlwZScpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1c2VySUQnLCB1c2VySUQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbmV0WmVyb0EnLCBuZXRaZXJvQSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwcmltYXJ5T3JnSUQnLCBwcmltYXJ5T3JnSUQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGVmYXVsdEFwcCcsIGRlZmF1bHRBcHApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnY3VycmVudEFwcCcsIGN1cnJlbnRBcHApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnY3VycmVudE9yZ0lEJywgY3VycmVudE9yZ0lEKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Rva2VuJywgdG9rZW4pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzb3VyY2VQZXJtaXNzaW9ucycsIHJlc291cmNlUGVybWlzc2lvbnMpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnY3VycmVudE9yZ1R5cGUnLCBjdXJyZW50T3JnVHlwZSk7XG5cbiAgICAgICAgLy8gbGV0IHVzZXJJRExlbmd0aCA9IHVzZXJJRC5sZW5ndGg7XG4gICAgICAgIC8vIGxldCBuZXRaZXJvQUxlbmd0aCA9IG5ldFplcm9BLmxlbmd0aDtcbiAgICAgICAgLy8gbGV0IHByaW1hcnlPcmdJRExlbmd0aCA9IHByaW1hcnlPcmdJRC5sZW5ndGg7XG4gICAgICAgIC8vIGxldCBkZWZhdWx0QXBwTGVuZ3RoID0gZGVmYXVsdEFwcC5sZW5ndGg7XG4gICAgICAgIC8vIGxldCBjdXJyZW50QXBwTGVuZ3RoID0gY3VycmVudEFwcC5sZW5ndGg7XG4gICAgICAgIC8vIGxldCBjdXJyZW50T3JnSURMZW5ndGggPSBjdXJyZW50T3JnSUQubGVuZ3RoO1xuICAgICAgICAvLyBsZXQgdG9rZW5MZW5ndGggPSB0b2tlbi5sZW5ndGg7XG4gICAgICAgIC8vIGxldCBwZXJtaXNzaW9uc0xlbmd0aCA9IHJlc291cmNlUGVybWlzc2lvbnMubGVuZ3RoO1xuICAgICAgICAvLyBsZXQgY3VycmVudE9yZ1R5cGVMZW5ndGggPSBjdXJyZW50T3JnVHlwZS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdXNlcklEID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICAvLyBuZXRaZXJvQSA9PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAgICAgLy8gcHJpbWFyeU9yZ0lEID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICAvLyBkZWZhdWx0QXBwID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICAvLyBjdXJyZW50QXBwID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICAvLyBjdXJyZW50T3JnSUQgPT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgICAgIHRva2VuID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICAvLyByZXNvdXJjZVBlcm1pc3Npb25zID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICAvLyBjdXJyZW50T3JnVHlwZSA9PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAgICAgdXNlcklEID09ICdudWxsJyB8fFxuICAgICAgICAgICAgLy8gbmV0WmVyb0EgPT0gJ251bGwnIHx8XG4gICAgICAgICAgICAvLyBwcmltYXJ5T3JnSUQgPT0gJ251bGwnIHx8XG4gICAgICAgICAgICAvLyBkZWZhdWx0QXBwID09ICdudWxsJyB8fFxuICAgICAgICAgICAgLy8gY3VycmVudEFwcCA9PSAnbnVsbCcgfHxcbiAgICAgICAgICAgIC8vIGN1cnJlbnRPcmdJRCA9PSAnbnVsbCcgfHxcbiAgICAgICAgICAgIHRva2VuID09ICdudWxsJyB8fFxuICAgICAgICAgICAgLy8gcmVzb3VyY2VQZXJtaXNzaW9ucyA9PSAnbnVsbCcgfHxcbiAgICAgICAgICAgIC8vIGN1cnJlbnRPcmdUeXBlID09ICdudWxsJyB8fFxuICAgICAgICAgICAgdXNlcklEID09IG51bGwgfHxcbiAgICAgICAgICAgIC8vIG5ldFplcm9BID09IG51bGwgfHxcbiAgICAgICAgICAgIC8vIHByaW1hcnlPcmdJRCA9PSBudWxsIHx8XG4gICAgICAgICAgICAvLyBkZWZhdWx0QXBwID09IG51bGwgfHxcbiAgICAgICAgICAgIC8vIGN1cnJlbnRBcHAgPT0gbnVsbCB8fFxuICAgICAgICAgICAgLy8gY3VycmVudE9yZ0lEID09IG51bGwgfHxcbiAgICAgICAgICAgIHRva2VuID09IG51bGwgfHxcbiAgICAgICAgICAgIC8vIHJlc291cmNlUGVybWlzc2lvbnMgPT0gbnVsbCB8fFxuICAgICAgICAgICAgLy8gY3VycmVudE9yZ1R5cGUgPT0gbnVsbCB8fFxuICAgICAgICAgICAgdXNlcklEID09ICcnIHx8XG4gICAgICAgICAgICAvLyBuZXRaZXJvQSA9PSAnJyB8fFxuICAgICAgICAgICAgLy8gcHJpbWFyeU9yZ0lEID09ICcnIHx8XG4gICAgICAgICAgICAvLyBkZWZhdWx0QXBwID09ICcnIHx8XG4gICAgICAgICAgICAvLyBjdXJyZW50QXBwID09ICcnIHx8XG4gICAgICAgICAgICAvLyBjdXJyZW50T3JnSUQgPT0gJycgfHxcbiAgICAgICAgICAgIHRva2VuID09ICcnXG4gICAgICAgICAgICAvLyByZXNvdXJjZVBlcm1pc3Npb25zID09ICcnIHx8XG4gICAgICAgICAgICAvLyBjdXJyZW50T3JnVHlwZSA9PSAnJ1xuICAgICAgICAgICAgLy8gdXNlcklETGVuZ3RoID09IDAgfHxcbiAgICAgICAgICAgIC8vIG5ldFplcm9BTGVuZ3RoID09IDAgfHxcbiAgICAgICAgICAgIC8vIHByaW1hcnlPcmdJRExlbmd0aCA9PSAwIHx8XG4gICAgICAgICAgICAvLyBkZWZhdWx0QXBwTGVuZ3RoID09IDAgfHxcbiAgICAgICAgICAgIC8vIGN1cnJlbnRBcHBMZW5ndGggPT0gMCB8fFxuICAgICAgICAgICAgLy8gY3VycmVudE9yZ0lETGVuZ3RoID09IDAgfHxcbiAgICAgICAgICAgIC8vIHRva2VuTGVuZ3RoID09IDAgfHxcbiAgICAgICAgICAgIC8vIHBlcm1pc3Npb25zTGVuZ3RoID09IDAgfHxcbiAgICAgICAgICAgIC8vIGN1cnJlbnRPcmdUeXBlTGVuZ3RoID09IDAgXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dvdXQocmVkaXJlY3RVcmwsIHBhZ2VVcmwsIGFjdGlvbiwgYXBwbGljYXRpb25LZXlJRCA9ICcnKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xuXG4gICAgICAgIGlmIChhcHBsaWNhdGlvbktleUlEICE9IHRoaXMuQUNDT1VOVF9LRVlfSUQgJiYgYWN0aW9uID09ICdpbnRlcmNlcHRvcicpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dGhpcy5lbnZpcm9ubWVudC5BQ0NPVU5UX1VSTH1sb2dpbj9yZWRpcmVjdFVybD0ke3JlZGlyZWN0VXJsfSZwYWdlVXJsPSR7cGFnZVVybH1gO1xuICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt0aGlzLmVudmlyb25tZW50LkFDQ09VTlRfVVJMfWxvZ2luP3JlZGlyZWN0VXJsPSR7cmVkaXJlY3RVcmx9JnBhZ2VVcmw9JHtwYWdlVXJsfSZhY3Rpb249JHthY3Rpb259YDtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==