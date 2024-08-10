import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Device, DevicesWithEntities } from '../model/device.model';
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
    getDevicesWithEntities(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let devicesWithEntitiesM;
            try {
                devicesWithEntitiesM = yield this.deviceController.getDevicesWithEntities(orgID, requestBody).toPromise();
                if (devicesWithEntitiesM) {
                    return devicesWithEntitiesM;
                }
                else {
                    return [new DevicesWithEntities()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new DevicesWithEntities()];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL3NlcnZpY2UvZGV2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBVyxtQkFBbUIsRUFBd0IsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBT25HLE1BQU0sT0FBTyxhQUFhO0lBRXRCLFlBQ1ksZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDMUMsQ0FBQztJQUVDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxXQUFXOztZQUN6QyxJQUFJLE9BQWtCLENBQUM7WUFDdkIsSUFBSTtnQkFDQSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUUzRixJQUFJLE9BQU8sRUFBRTtvQkFDVCxPQUFPLE9BQU8sQ0FBQztpQkFDbEI7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztpQkFDekI7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ3pCO1FBQ0wsQ0FBQztLQUFBO0lBRUssc0JBQXNCLENBQUMsS0FBSyxFQUFFLFdBQVc7O1lBQzNDLElBQUksb0JBQTRDLENBQUM7WUFDakQsSUFBSTtnQkFDQSxvQkFBb0IsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRTFHLElBQUksb0JBQW9CLEVBQUU7b0JBQ3RCLE9BQU8sb0JBQW9CLENBQUM7aUJBQy9CO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQztpQkFDdEM7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7YUFDdEM7UUFDTCxDQUFDO0tBQUE7OzJHQXBDUSxhQUFhOytHQUFiLGFBQWEsY0FIVixNQUFNOzRGQUdULGFBQWE7a0JBSnpCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZXZpY2UsIERldmljZU0sIERldmljZXNXaXRoRW50aXRpZXMsIERldmljZXNXaXRoRW50aXRpZXNNIH0gZnJvbSAnLi4vbW9kZWwvZGV2aWNlLm1vZGVsJztcbmltcG9ydCB7IERldmljZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVyL2RldmljZS5jb250cm9sbGVyJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIERldmljZVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZGV2aWNlQ29udHJvbGxlcjogRGV2aWNlQ29udHJvbGxlclxuICAgICkgeyB9XG5cbiAgICBhc3luYyBnZXREZXZpY2VzQnlFbnRpdHlJRChvcmdJRCwgcmVxdWVzdEJvZHkpOiBQcm9taXNlPERldmljZU1bXT4ge1xuICAgICAgICBsZXQgZGV2aWNlTTogRGV2aWNlTVtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGV2aWNlTSA9IGF3YWl0IHRoaXMuZGV2aWNlQ29udHJvbGxlci5nZXREZXZpY2VzQnlFbnRpdHlJRChvcmdJRCwgcmVxdWVzdEJvZHkpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAoZGV2aWNlTSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZXZpY2VNO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBEZXZpY2UoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgRGV2aWNlKCldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGV2aWNlc1dpdGhFbnRpdGllcyhvcmdJRCwgcmVxdWVzdEJvZHkpOiBQcm9taXNlPERldmljZXNXaXRoRW50aXRpZXNNW10+IHtcbiAgICAgICAgbGV0IGRldmljZXNXaXRoRW50aXRpZXNNOiBEZXZpY2VzV2l0aEVudGl0aWVzTVtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGV2aWNlc1dpdGhFbnRpdGllc00gPSBhd2FpdCB0aGlzLmRldmljZUNvbnRyb2xsZXIuZ2V0RGV2aWNlc1dpdGhFbnRpdGllcyhvcmdJRCwgcmVxdWVzdEJvZHkpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAoZGV2aWNlc1dpdGhFbnRpdGllc00pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGV2aWNlc1dpdGhFbnRpdGllc007XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IERldmljZXNXaXRoRW50aXRpZXMoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgRGV2aWNlc1dpdGhFbnRpdGllcygpXTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==