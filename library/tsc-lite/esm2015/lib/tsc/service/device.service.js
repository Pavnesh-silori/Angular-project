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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL3NlcnZpY2UvZGV2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBVyxNQUFNLHVCQUF1QixDQUFDOzs7QUFReEQsTUFBTSxPQUFPLGFBQWE7SUFFdEIsWUFDWSxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUMxQyxDQUFDO0lBRUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLFdBQVc7O1lBQ3pDLElBQUksT0FBa0IsQ0FBQztZQUN2QixJQUFJO2dCQUNBLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRTNGLElBQUksT0FBTyxFQUFFO29CQUNULE9BQU8sT0FBTyxDQUFDO2lCQUNsQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2lCQUN6QjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDekI7UUFDTCxDQUFDO0tBQUE7OzJHQXBCUSxhQUFhOytHQUFiLGFBQWEsY0FIVixNQUFNOzRGQUdULGFBQWE7a0JBSnpCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZXZpY2UsIERldmljZU0gfSBmcm9tICcuLi9tb2RlbC9kZXZpY2UubW9kZWwnO1xuXG5pbXBvcnQgeyBEZXZpY2VDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlci9kZXZpY2UuY29udHJvbGxlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEZXZpY2VTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGRldmljZUNvbnRyb2xsZXI6IERldmljZUNvbnRyb2xsZXJcbiAgICApIHsgfVxuXG4gICAgYXN5bmMgZ2V0RGV2aWNlc0J5RW50aXR5SUQob3JnSUQsIHJlcXVlc3RCb2R5KTogUHJvbWlzZTxEZXZpY2VNW10+IHtcbiAgICAgICAgbGV0IGRldmljZU06IERldmljZU1bXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRldmljZU0gPSBhd2FpdCB0aGlzLmRldmljZUNvbnRyb2xsZXIuZ2V0RGV2aWNlc0J5RW50aXR5SUQob3JnSUQsIHJlcXVlc3RCb2R5KS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKGRldmljZU0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGV2aWNlTTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgRGV2aWNlKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IERldmljZSgpXTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==