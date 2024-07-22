import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { DevicesWithEntities } from '../model/device.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/entity-device.controller";
export class EntityDeviceService {
    constructor(entityDeviceController) {
        this.entityDeviceController = entityDeviceController;
    }
    getDevicesWithEntities(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let devicesWithEntitiesM;
            try {
                devicesWithEntitiesM = yield this.entityDeviceController.getDevicesWithEntities(orgID, requestBody).toPromise();
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
    getDevicesWithEntitiesByParameter(orgID, paramMetric) {
        return __awaiter(this, void 0, void 0, function* () {
            let devicesWithEntitiesM;
            try {
                devicesWithEntitiesM = yield this.entityDeviceController.getDevicesWithEntitiesByParameter(orgID, paramMetric).toPromise();
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
EntityDeviceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDeviceService, deps: [{ token: i1.EntityDeviceController }], target: i0.ɵɵFactoryTarget.Injectable });
EntityDeviceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDeviceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDeviceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.EntityDeviceController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWRldmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9zZXJ2aWNlL2VudGl0eS1kZXZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQXdCLE1BQU0sdUJBQXVCLENBQUM7OztBQVFsRixNQUFNLE9BQU8sbUJBQW1CO0lBRTVCLFlBQ1ksc0JBQThDO1FBQTlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFDdEQsQ0FBQztJQUVDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxXQUFXOztZQUMzQyxJQUFJLG9CQUE0QyxDQUFDO1lBQ2pELElBQUk7Z0JBQ0Esb0JBQW9CLEdBQUcsTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUVoSCxJQUFJLG9CQUFvQixFQUFFO29CQUN0QixPQUFPLG9CQUFvQixDQUFDO2lCQUMvQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7aUJBQ3RDO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO2FBQ3RDO1FBQ0wsQ0FBQztLQUFBO0lBRUssaUNBQWlDLENBQUMsS0FBSyxFQUFFLFdBQVc7O1lBQ3RELElBQUksb0JBQTRDLENBQUM7WUFDakQsSUFBSTtnQkFDQSxvQkFBb0IsR0FBRyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxpQ0FBaUMsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRTNILElBQUksb0JBQW9CLEVBQUU7b0JBQ3RCLE9BQU8sb0JBQW9CLENBQUM7aUJBQy9CO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQztpQkFDdEM7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7YUFDdEM7UUFDTCxDQUFDO0tBQUE7O2lIQXBDUSxtQkFBbUI7cUhBQW5CLG1CQUFtQixjQUhoQixNQUFNOzRGQUdULG1CQUFtQjtrQkFKL0IsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERldmljZXNXaXRoRW50aXRpZXMsIERldmljZXNXaXRoRW50aXRpZXNNIH0gZnJvbSAnLi4vbW9kZWwvZGV2aWNlLm1vZGVsJztcblxuaW1wb3J0IHsgRW50aXR5RGV2aWNlQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXIvZW50aXR5LWRldmljZS5jb250cm9sbGVyJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIEVudGl0eURldmljZVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZW50aXR5RGV2aWNlQ29udHJvbGxlcjogRW50aXR5RGV2aWNlQ29udHJvbGxlclxuICAgICkgeyB9XG5cbiAgICBhc3luYyBnZXREZXZpY2VzV2l0aEVudGl0aWVzKG9yZ0lELCByZXF1ZXN0Qm9keSk6IFByb21pc2U8RGV2aWNlc1dpdGhFbnRpdGllc01bXT4ge1xuICAgICAgICBsZXQgZGV2aWNlc1dpdGhFbnRpdGllc006IERldmljZXNXaXRoRW50aXRpZXNNW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkZXZpY2VzV2l0aEVudGl0aWVzTSA9IGF3YWl0IHRoaXMuZW50aXR5RGV2aWNlQ29udHJvbGxlci5nZXREZXZpY2VzV2l0aEVudGl0aWVzKG9yZ0lELCByZXF1ZXN0Qm9keSkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChkZXZpY2VzV2l0aEVudGl0aWVzTSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZXZpY2VzV2l0aEVudGl0aWVzTTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgRGV2aWNlc1dpdGhFbnRpdGllcygpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBEZXZpY2VzV2l0aEVudGl0aWVzKCldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGV2aWNlc1dpdGhFbnRpdGllc0J5UGFyYW1ldGVyKG9yZ0lELCBwYXJhbU1ldHJpYyk6IFByb21pc2U8RGV2aWNlc1dpdGhFbnRpdGllc01bXT4ge1xuICAgICAgICBsZXQgZGV2aWNlc1dpdGhFbnRpdGllc006IERldmljZXNXaXRoRW50aXRpZXNNW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkZXZpY2VzV2l0aEVudGl0aWVzTSA9IGF3YWl0IHRoaXMuZW50aXR5RGV2aWNlQ29udHJvbGxlci5nZXREZXZpY2VzV2l0aEVudGl0aWVzQnlQYXJhbWV0ZXIob3JnSUQsIHBhcmFtTWV0cmljKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKGRldmljZXNXaXRoRW50aXRpZXNNKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRldmljZXNXaXRoRW50aXRpZXNNO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBEZXZpY2VzV2l0aEVudGl0aWVzKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IERldmljZXNXaXRoRW50aXRpZXMoKV07XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=