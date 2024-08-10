import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Layout } from '../model/layout.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/layout.controller";
export class LayoutService {
    constructor(layoutController) {
        this.layoutController = layoutController;
    }
    getLayoutByOrgID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let layoutM;
            try {
                layoutM = yield this.layoutController.getLayoutByOrgID(orgID).toPromise();
                if (layoutM) {
                    return layoutM;
                }
                else {
                    return [new Layout()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Layout()];
            }
        });
    }
}
LayoutService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutService, deps: [{ token: i1.LayoutController }], target: i0.ɵɵFactoryTarget.Injectable });
LayoutService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.LayoutController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L2xheW91dC1zZXJ2aWNlL3NyYy9saWIvdHNjL3NlcnZpY2UvbGF5b3V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBVyxNQUFNLHVCQUF1QixDQUFDOzs7QUFPeEQsTUFBTSxPQUFPLGFBQWE7SUFFdEIsWUFDWSxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUMxQyxDQUFDO0lBRUMsZ0JBQWdCLENBQUMsS0FBSzs7WUFDeEIsSUFBSSxPQUFrQixDQUFDO1lBQ3ZCLElBQUk7Z0JBQ0EsT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUUxRSxJQUFJLE9BQU8sRUFBRTtvQkFDVCxPQUFPLE9BQU8sQ0FBQztpQkFDbEI7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztpQkFDekI7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ3pCO1FBQ0wsQ0FBQztLQUFBOzsyR0FwQlEsYUFBYTsrR0FBYixhQUFhLGNBSFYsTUFBTTs0RkFHVCxhQUFhO2tCQUp6QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGF5b3V0LCBMYXlvdXRNIH0gZnJvbSAnLi4vbW9kZWwvbGF5b3V0Lm1vZGVsJztcbmltcG9ydCB7IExheW91dENvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVyL2xheW91dC5jb250cm9sbGVyJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIExheW91dFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbGF5b3V0Q29udHJvbGxlcjogTGF5b3V0Q29udHJvbGxlcixcbiAgICApIHsgfVxuXG4gICAgYXN5bmMgZ2V0TGF5b3V0QnlPcmdJRChvcmdJRCk6IFByb21pc2U8TGF5b3V0TVtdPiB7XG4gICAgICAgIGxldCBsYXlvdXRNOiBMYXlvdXRNW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsYXlvdXRNID0gYXdhaXQgdGhpcy5sYXlvdXRDb250cm9sbGVyLmdldExheW91dEJ5T3JnSUQob3JnSUQpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAobGF5b3V0TSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsYXlvdXRNO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBMYXlvdXQoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgTGF5b3V0KCldO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==