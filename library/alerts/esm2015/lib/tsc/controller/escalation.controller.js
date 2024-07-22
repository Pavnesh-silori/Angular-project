import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class EscalationController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getEscalationPermission(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/escalation/permission`);
    }
    getEscalationLevelCount(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/escalation/level/count`);
    }
    createEsclationByLevelID(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/escalation`, requestBody);
    }
    getAllLevelEscalation(orgID, alertRuleID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/${alertRuleID}/escalation`);
    }
    updateEsclationByLevelID(orgID, escalationRuleID, requestBody) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/escalation/${escalationRuleID}`, requestBody);
    }
    deleteEsclationByLevelID(orgID, escalationRuleID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/escalation/${escalationRuleID}`);
    }
}
EscalationController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EscalationController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
EscalationController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EscalationController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EscalationController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYWxhdGlvbi5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9hbGVydHMvc3JjL2xpYi90c2MvY29udHJvbGxlci9lc2NhbGF0aW9uLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVVuRCxNQUFNLE9BQU8sb0JBQW9CO0lBRTdCLFlBQ1ksSUFBZ0IsRUFDTyxXQUFnQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFDL0MsQ0FBQztJQUVMLHVCQUF1QixDQUFDLEtBQUs7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3RJLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxLQUFLO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUsseUJBQXlCLENBQUMsQ0FBQztJQUN2SSxDQUFDO0lBRUQsd0JBQXdCLENBQUMsS0FBSyxFQUFFLFdBQVc7UUFDdkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLG9CQUFvQixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pILENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsV0FBVztRQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF5QixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLFdBQVcsV0FBVyxhQUFhLENBQUMsQ0FBQztJQUNsSixDQUFDO0lBRUQsd0JBQXdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixFQUFFLFdBQVc7UUFDekQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLHNCQUFzQixnQkFBZ0IsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzlJLENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxzQkFBc0IsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFBO0lBQ2pJLENBQUM7O2tIQTdCUSxvQkFBb0IsNENBSWpCLGFBQWE7c0hBSmhCLG9CQUFvQixjQUhqQixNQUFNOzRGQUdULG9CQUFvQjtrQkFKaEMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQU1RLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRXNjYWxhdGlvbkxldmVsQ291bnRNLCBFc2NhbGF0aW9uTGV2ZWxJbmZvTSwgRXNjYWxhdGlvblBlcm1pc3Npb25NIH0gZnJvbSAnLi4vbW9kZWwvZXNjYWxhdGlvbi5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBFc2NhbGF0aW9uQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueVxuICAgICkgeyB9XG5cbiAgICBnZXRFc2NhbGF0aW9uUGVybWlzc2lvbihvcmdJRCk6IE9ic2VydmFibGU8RXNjYWxhdGlvblBlcm1pc3Npb25NPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEVzY2FsYXRpb25QZXJtaXNzaW9uTT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9lc2NhbGF0aW9uL3Blcm1pc3Npb25gKTtcbiAgICB9XG5cbiAgICBnZXRFc2NhbGF0aW9uTGV2ZWxDb3VudChvcmdJRCk6IE9ic2VydmFibGU8RXNjYWxhdGlvbkxldmVsQ291bnRNPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEVzY2FsYXRpb25MZXZlbENvdW50TT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9lc2NhbGF0aW9uL2xldmVsL2NvdW50YCk7XG4gICAgfVxuXG4gICAgY3JlYXRlRXNjbGF0aW9uQnlMZXZlbElEKG9yZ0lELCByZXF1ZXN0Qm9keSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9hbGVydHMvZXNjYWxhdGlvbmAsIHJlcXVlc3RCb2R5KTtcbiAgICB9XG5cbiAgICBnZXRBbGxMZXZlbEVzY2FsYXRpb24ob3JnSUQsIGFsZXJ0UnVsZUlEKTogT2JzZXJ2YWJsZTxFc2NhbGF0aW9uTGV2ZWxJbmZvTVtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEVzY2FsYXRpb25MZXZlbEluZm9NW10+KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vYWxlcnRzLyR7YWxlcnRSdWxlSUR9L2VzY2FsYXRpb25gKTtcbiAgICB9XG5cbiAgICB1cGRhdGVFc2NsYXRpb25CeUxldmVsSUQob3JnSUQsIGVzY2FsYXRpb25SdWxlSUQsIHJlcXVlc3RCb2R5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9hbGVydHMvZXNjYWxhdGlvbi8ke2VzY2FsYXRpb25SdWxlSUR9YCwgcmVxdWVzdEJvZHkpO1xuICAgIH1cblxuICAgIGRlbGV0ZUVzY2xhdGlvbkJ5TGV2ZWxJRChvcmdJRCwgZXNjYWxhdGlvblJ1bGVJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2FsZXJ0cy9lc2NhbGF0aW9uLyR7ZXNjYWxhdGlvblJ1bGVJRH1gKVxuICAgIH1cblxufSJdfQ==