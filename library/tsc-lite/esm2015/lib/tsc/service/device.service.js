import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Device } from '../model/device.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/device.controller";
export class DeviceService {
    constructor(deviceController) {
        this.deviceController = deviceController;
    }
    getDevicesByEntityID(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let deviceM;
            try {
                deviceM = yield this.deviceController.getDevicesByEntityID(orgID, requestBody).toPromise();
                if (deviceM) {
                    return deviceM;
                }
                else {
                    return [new Device()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Device()];
            }
        });
    }
}
DeviceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceService, deps: [{ token: i1.DeviceController }], target: i0.ɵɵFactoryTarget.Injectable });
DeviceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DeviceController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL3NlcnZpY2UvZGV2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBc0QsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBT25HLE1BQU0sT0FBTyxhQUFhO0lBRXRCLFlBQ1ksZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDMUMsQ0FBQztJQUVDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxXQUFXOztZQUN6QyxJQUFJLE9BQWtCLENBQUM7WUFDdkIsSUFBSTtnQkFDQSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUUzRixJQUFJLE9BQU8sRUFBRTtvQkFDVCxPQUFPLE9BQU8sQ0FBQztpQkFDbEI7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztpQkFDekI7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ3pCO1FBQ0wsQ0FBQztLQUFBOzsyR0FwQlEsYUFBYTsrR0FBYixhQUFhLGNBSFYsTUFBTTs0RkFHVCxhQUFhO2tCQUp6QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGV2aWNlLCBEZXZpY2VNLCBEZXZpY2VzV2l0aEVudGl0aWVzLCBEZXZpY2VzV2l0aEVudGl0aWVzTSB9IGZyb20gJy4uL21vZGVsL2RldmljZS5tb2RlbCc7XG5pbXBvcnQgeyBEZXZpY2VDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlci9kZXZpY2UuY29udHJvbGxlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEZXZpY2VTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGRldmljZUNvbnRyb2xsZXI6IERldmljZUNvbnRyb2xsZXJcbiAgICApIHsgfVxuXG4gICAgYXN5bmMgZ2V0RGV2aWNlc0J5RW50aXR5SUQob3JnSUQsIHJlcXVlc3RCb2R5KTogUHJvbWlzZTxEZXZpY2VNW10+IHtcbiAgICAgICAgbGV0IGRldmljZU06IERldmljZU1bXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRldmljZU0gPSBhd2FpdCB0aGlzLmRldmljZUNvbnRyb2xsZXIuZ2V0RGV2aWNlc0J5RW50aXR5SUQob3JnSUQsIHJlcXVlc3RCb2R5KS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKGRldmljZU0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGV2aWNlTTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgRGV2aWNlKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IERldmljZSgpXTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==