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
    getLayoutByID(orgID, layoutID) {
        return __awaiter(this, void 0, void 0, function* () {
            let layoutM;
            try {
                layoutM = yield this.layoutController.getLayoutByID(orgID, layoutID).toPromise();
                if (layoutM) {
                    return layoutM;
                }
                else {
                    return new Layout();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new Layout();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L2xheW91dC1zZXJ2aWNlL3NyYy9saWIvdHNjL3NlcnZpY2UvbGF5b3V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBVyxNQUFNLHVCQUF1QixDQUFDOzs7QUFPeEQsTUFBTSxPQUFPLGFBQWE7SUFFdEIsWUFDWSxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUMxQyxDQUFDO0lBRUMsZ0JBQWdCLENBQUMsS0FBSzs7WUFDeEIsSUFBSSxPQUFrQixDQUFDO1lBQ3ZCLElBQUk7Z0JBQ0EsT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUUxRSxJQUFJLE9BQU8sRUFBRTtvQkFDVCxPQUFPLE9BQU8sQ0FBQztpQkFDbEI7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztpQkFDekI7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ3pCO1FBQ0wsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFROztZQUMvQixJQUFJLE9BQWdCLENBQUM7WUFDckIsSUFBSTtnQkFDQSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFakYsSUFBSSxPQUFPLEVBQUU7b0JBQ1QsT0FBTyxPQUFPLENBQUM7aUJBQ2xCO3FCQUFNO29CQUNILE9BQU8sSUFBSSxNQUFNLEVBQUUsQ0FBQztpQkFDdkI7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLElBQUksTUFBTSxFQUFFLENBQUM7YUFDdkI7UUFDTCxDQUFDO0tBQUE7OzJHQXBDUSxhQUFhOytHQUFiLGFBQWEsY0FIVixNQUFNOzRGQUdULGFBQWE7a0JBSnpCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMYXlvdXQsIExheW91dE0gfSBmcm9tICcuLi9tb2RlbC9sYXlvdXQubW9kZWwnO1xuaW1wb3J0IHsgTGF5b3V0Q29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXIvbGF5b3V0LmNvbnRyb2xsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgTGF5b3V0U2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBsYXlvdXRDb250cm9sbGVyOiBMYXlvdXRDb250cm9sbGVyLFxuICAgICkgeyB9XG5cbiAgICBhc3luYyBnZXRMYXlvdXRCeU9yZ0lEKG9yZ0lEKTogUHJvbWlzZTxMYXlvdXRNW10+IHtcbiAgICAgICAgbGV0IGxheW91dE06IExheW91dE1bXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxheW91dE0gPSBhd2FpdCB0aGlzLmxheW91dENvbnRyb2xsZXIuZ2V0TGF5b3V0QnlPcmdJRChvcmdJRCkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChsYXlvdXRNKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxheW91dE07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IExheW91dCgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBMYXlvdXQoKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRMYXlvdXRCeUlEKG9yZ0lELCBsYXlvdXRJRCk6IFByb21pc2U8TGF5b3V0TT4ge1xuICAgICAgICBsZXQgbGF5b3V0TTogTGF5b3V0TTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxheW91dE0gPSBhd2FpdCB0aGlzLmxheW91dENvbnRyb2xsZXIuZ2V0TGF5b3V0QnlJRChvcmdJRCwgbGF5b3V0SUQpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAobGF5b3V0TSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsYXlvdXRNO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExheW91dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGF5b3V0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=