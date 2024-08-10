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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWRldmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9zZXJ2aWNlL2VudGl0eS1kZXZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQXdCLE1BQU0sdUJBQXVCLENBQUM7OztBQU9sRixNQUFNLE9BQU8sbUJBQW1CO0lBRTVCLFlBQ1ksc0JBQThDO1FBQTlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFDdEQsQ0FBQztJQUVDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxXQUFXOztZQUMzQyxJQUFJLG9CQUE0QyxDQUFDO1lBQ2pELElBQUk7Z0JBQ0Esb0JBQW9CLEdBQUcsTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUVoSCxJQUFJLG9CQUFvQixFQUFFO29CQUN0QixPQUFPLG9CQUFvQixDQUFDO2lCQUMvQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7aUJBQ3RDO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO2FBQ3RDO1FBQ0wsQ0FBQztLQUFBO0lBRUssaUNBQWlDLENBQUMsS0FBSyxFQUFFLFdBQVc7O1lBQ3RELElBQUksb0JBQTRDLENBQUM7WUFDakQsSUFBSTtnQkFDQSxvQkFBb0IsR0FBRyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxpQ0FBaUMsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRTNILElBQUksb0JBQW9CLEVBQUU7b0JBQ3RCLE9BQU8sb0JBQW9CLENBQUM7aUJBQy9CO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQztpQkFDdEM7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7YUFDdEM7UUFDTCxDQUFDO0tBQUE7O2lIQXBDUSxtQkFBbUI7cUhBQW5CLG1CQUFtQixjQUhoQixNQUFNOzRGQUdULG1CQUFtQjtrQkFKL0IsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERldmljZXNXaXRoRW50aXRpZXMsIERldmljZXNXaXRoRW50aXRpZXNNIH0gZnJvbSAnLi4vbW9kZWwvZGV2aWNlLm1vZGVsJztcbmltcG9ydCB7IEVudGl0eURldmljZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVyL2VudGl0eS1kZXZpY2UuY29udHJvbGxlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlEZXZpY2VTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVudGl0eURldmljZUNvbnRyb2xsZXI6IEVudGl0eURldmljZUNvbnRyb2xsZXJcbiAgICApIHsgfVxuXG4gICAgYXN5bmMgZ2V0RGV2aWNlc1dpdGhFbnRpdGllcyhvcmdJRCwgcmVxdWVzdEJvZHkpOiBQcm9taXNlPERldmljZXNXaXRoRW50aXRpZXNNW10+IHtcbiAgICAgICAgbGV0IGRldmljZXNXaXRoRW50aXRpZXNNOiBEZXZpY2VzV2l0aEVudGl0aWVzTVtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGV2aWNlc1dpdGhFbnRpdGllc00gPSBhd2FpdCB0aGlzLmVudGl0eURldmljZUNvbnRyb2xsZXIuZ2V0RGV2aWNlc1dpdGhFbnRpdGllcyhvcmdJRCwgcmVxdWVzdEJvZHkpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAoZGV2aWNlc1dpdGhFbnRpdGllc00pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGV2aWNlc1dpdGhFbnRpdGllc007XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IERldmljZXNXaXRoRW50aXRpZXMoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgRGV2aWNlc1dpdGhFbnRpdGllcygpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldERldmljZXNXaXRoRW50aXRpZXNCeVBhcmFtZXRlcihvcmdJRCwgcGFyYW1NZXRyaWMpOiBQcm9taXNlPERldmljZXNXaXRoRW50aXRpZXNNW10+IHtcbiAgICAgICAgbGV0IGRldmljZXNXaXRoRW50aXRpZXNNOiBEZXZpY2VzV2l0aEVudGl0aWVzTVtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGV2aWNlc1dpdGhFbnRpdGllc00gPSBhd2FpdCB0aGlzLmVudGl0eURldmljZUNvbnRyb2xsZXIuZ2V0RGV2aWNlc1dpdGhFbnRpdGllc0J5UGFyYW1ldGVyKG9yZ0lELCBwYXJhbU1ldHJpYykudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChkZXZpY2VzV2l0aEVudGl0aWVzTSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZXZpY2VzV2l0aEVudGl0aWVzTTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgRGV2aWNlc1dpdGhFbnRpdGllcygpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBEZXZpY2VzV2l0aEVudGl0aWVzKCldO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19