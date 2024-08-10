import { __awaiter } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { ExpiringSubscriptionM } from '../model/subscription.model';
import * as i0 from "@angular/core";
import * as i1 from "@library/storage-service";
import * as i2 from "../controller/subscription.controller";
export class SubscriptionService {
    constructor(environment, storageService, subscriptionController) {
        this.environment = environment;
        this.storageService = storageService;
        this.subscriptionController = subscriptionController;
    }
    orgPlanType(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            try {
                res = yield this.subscriptionController.orgPlanType(orgID).toPromise();
                return res;
            }
            catch (error) {
                console.error('error in orgPlanType -', error);
                return res;
            }
        });
    }
    redirectOnSubscriptionExpire() {
        this.storageService.clearStorage();
        window.location.href = this.environment.ADMIN_URL + 'subscription-new/active';
    }
    getExpiringSubscribtion(orgID, applicationID) {
        let expiringSubscriptionM = new ExpiringSubscriptionM();
        let expiringSubscription = new ExpiringSubscriptionM();
        return new Promise(resolve => {
            this.subscriptionController.getExpiringSubscription(orgID, applicationID).subscribe((res) => {
                expiringSubscriptionM = res;
            }, error => {
                expiringSubscriptionM = expiringSubscription;
                console.error('error in getExpiringSubscribtion -', error);
            }).add(() => {
                resolve(expiringSubscriptionM);
            });
        });
    }
}
SubscriptionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionService, deps: [{ token: 'environment' }, { token: i1.StorageService }, { token: i2.SubscriptionController }], target: i0.ɵɵFactoryTarget.Injectable });
SubscriptionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }, { type: i1.StorageService }, { type: i2.SubscriptionController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3N1YnNjcmlwdGlvbi1zZXJ2aWNlL3NyYy9saWIvdHNjL3NlcnZpY2Uvc3Vic2NyaXB0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBU3BFLE1BQU0sT0FBTyxtQkFBbUI7SUFDNUIsWUFDbUMsV0FBZ0IsRUFDdkMsY0FBOEIsRUFDOUIsc0JBQThDO1FBRnZCLGdCQUFXLEdBQVgsV0FBVyxDQUFLO1FBQ3ZDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBQ3RELENBQUM7SUFFQyxXQUFXLENBQUMsS0FBYTs7WUFDM0IsSUFBSSxHQUFHLENBQUM7WUFFUixJQUFJO2dCQUNBLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3ZFLE9BQU8sR0FBRyxDQUFDO2FBQ2Q7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLEdBQUcsQ0FBQzthQUNkO1FBQ0wsQ0FBQztLQUFBO0lBRUQsNEJBQTRCO1FBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcseUJBQXlCLENBQUM7SUFDbEYsQ0FBQztJQUVELHVCQUF1QixDQUFDLEtBQUssRUFBRSxhQUFhO1FBQ3hDLElBQUkscUJBQXFCLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1FBQ3hELElBQUksb0JBQW9CLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1FBRXZELE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDeEYscUJBQXFCLEdBQUcsR0FBRyxDQUFDO1lBQ2hDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtnQkFDUCxxQkFBcUIsR0FBRyxvQkFBb0IsQ0FBQztnQkFDN0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNSLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztpSEF0Q1EsbUJBQW1CLGtCQUVoQixhQUFhO3FIQUZoQixtQkFBbUIsY0FIaEIsTUFBTTs0RkFHVCxtQkFBbUI7a0JBSi9CLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzswQkFJUSxNQUFNOzJCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRXhwaXJpbmdTdWJzY3JpcHRpb25NIH0gZnJvbSAnLi4vbW9kZWwvc3Vic2NyaXB0aW9uLm1vZGVsJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVyL3N1YnNjcmlwdGlvbi5jb250cm9sbGVyJztcblxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS9zdG9yYWdlLXNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55LFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25Db250cm9sbGVyOiBTdWJzY3JpcHRpb25Db250cm9sbGVyXG4gICAgKSB7IH1cblxuICAgIGFzeW5jIG9yZ1BsYW5UeXBlKG9yZ0lEOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBsZXQgcmVzO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXMgPSBhd2FpdCB0aGlzLnN1YnNjcmlwdGlvbkNvbnRyb2xsZXIub3JnUGxhblR5cGUob3JnSUQpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGluIG9yZ1BsYW5UeXBlIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVkaXJlY3RPblN1YnNjcmlwdGlvbkV4cGlyZSgpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5jbGVhclN0b3JhZ2UoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmVudmlyb25tZW50LkFETUlOX1VSTCArICdzdWJzY3JpcHRpb24tbmV3L2FjdGl2ZSc7XG4gICAgfVxuXG4gICAgZ2V0RXhwaXJpbmdTdWJzY3JpYnRpb24ob3JnSUQsIGFwcGxpY2F0aW9uSUQpOiBQcm9taXNlPEV4cGlyaW5nU3Vic2NyaXB0aW9uTT4ge1xuICAgICAgICBsZXQgZXhwaXJpbmdTdWJzY3JpcHRpb25NID0gbmV3IEV4cGlyaW5nU3Vic2NyaXB0aW9uTSgpO1xuICAgICAgICBsZXQgZXhwaXJpbmdTdWJzY3JpcHRpb24gPSBuZXcgRXhwaXJpbmdTdWJzY3JpcHRpb25NKCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25Db250cm9sbGVyLmdldEV4cGlyaW5nU3Vic2NyaXB0aW9uKG9yZ0lELCBhcHBsaWNhdGlvbklEKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGlyaW5nU3Vic2NyaXB0aW9uTSA9IHJlcztcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBleHBpcmluZ1N1YnNjcmlwdGlvbk0gPSBleHBpcmluZ1N1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdlcnJvciBpbiBnZXRFeHBpcmluZ1N1YnNjcmlidGlvbiAtJywgZXJyb3IpO1xuICAgICAgICAgICAgfSkuYWRkKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGV4cGlyaW5nU3Vic2NyaXB0aW9uTSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19