import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import { VehicleType, VehicleByType, VehicleCategory, EngineStroke } from '../model/vehicle.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/vehicle.controller";
export class VehicleService {
    constructor(vehicleController) {
        this.vehicleController = vehicleController;
    }
    getVehicleType() {
        return __awaiter(this, void 0, void 0, function* () {
            let vehicleTypeM;
            try {
                vehicleTypeM = yield this.vehicleController.getVehicleType().toPromise();
                if (vehicleTypeM) {
                    return vehicleTypeM;
                }
                else {
                    return [new VehicleType()];
                }
            }
            catch (error) {
                console.error('Error in getVehicleType -', error);
                return [new VehicleType()];
            }
        });
    }
    getVehicleCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            let vehicleCategoryM;
            try {
                vehicleCategoryM = yield this.vehicleController.getVehicleCategory().toPromise();
                if (vehicleCategoryM) {
                    return vehicleCategoryM;
                }
                else {
                    return [new VehicleCategory()];
                }
            }
            catch (error) {
                console.error('Error in getVehicleCategory -', error);
                return [new VehicleCategory()];
            }
        });
    }
    getEngineStroke() {
        return __awaiter(this, void 0, void 0, function* () {
            let engineStrokeM;
            try {
                engineStrokeM = yield this.vehicleController.getEngineStroke().toPromise();
                if (engineStrokeM) {
                    return engineStrokeM;
                }
                else {
                    return [new EngineStroke()];
                }
            }
            catch (error) {
                console.error('Error in getEngineStroke -', error);
                return [new EngineStroke()];
            }
        });
    }
    getVehicleByTypeID(currentOrgID, VechileTypeID) {
        return __awaiter(this, void 0, void 0, function* () {
            let vechileTypeM;
            let vechileType = [new VehicleByType()];
            try {
                vechileTypeM = yield this.vehicleController.getVehicleByTypeID(currentOrgID, VechileTypeID).toPromise();
                if (vechileTypeM) {
                    return vechileTypeM;
                }
                else {
                    return vechileType;
                }
            }
            catch (error) {
                console.error('Error -', error);
                return vechileType;
            }
        });
    }
    getAllVehicle(currentOrgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let vechileTypeM;
            let vechileType = [new VehicleByType()];
            try {
                vechileTypeM = yield this.vehicleController.getAllVehicle(currentOrgID).toPromise();
                if (vechileTypeM) {
                    return vechileTypeM;
                }
                else {
                    return vechileType;
                }
            }
            catch (error) {
                console.error('Error -', error);
                return vechileType;
            }
        });
    }
}
VehicleService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleService, deps: [{ token: i1.VehicleController }], target: i0.ɵɵFactoryTarget.Injectable });
VehicleService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.VehicleController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVoaWNsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9uZXR6ZXJvL3NyYy9saWIvdHNjL3NlcnZpY2UvdmVoaWNsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBZ0IsV0FBVyxFQUFrQixhQUFhLEVBQW9CLGVBQWUsRUFBaUIsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQU9sSyxNQUFNLE9BQU8sY0FBYztJQUN2QixZQUNZLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzVDLENBQUM7SUFFQyxjQUFjOztZQUNoQixJQUFJLFlBQTRCLENBQUM7WUFFakMsSUFBSTtnQkFDQSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRXpFLElBQUksWUFBWSxFQUFFO29CQUNkLE9BQU8sWUFBWSxDQUFDO2lCQUN2QjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDO2lCQUM5QjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbEQsT0FBTyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsQ0FBQzthQUM5QjtRQUNMLENBQUM7S0FBQTtJQUVLLGtCQUFrQjs7WUFDcEIsSUFBSSxnQkFBb0MsQ0FBQztZQUV6QyxJQUFJO2dCQUNBLGdCQUFnQixHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRWpGLElBQUksZ0JBQWdCLEVBQUU7b0JBQ2xCLE9BQU8sZ0JBQWdCLENBQUM7aUJBQzNCO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7aUJBQ2xDO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLCtCQUErQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN0RCxPQUFPLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO2FBQ2xDO1FBQ0wsQ0FBQztLQUFBO0lBRUssZUFBZTs7WUFDakIsSUFBSSxhQUE4QixDQUFDO1lBRW5DLElBQUk7Z0JBQ0EsYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUUzRSxJQUFJLGFBQWEsRUFBRTtvQkFDZixPQUFPLGFBQWEsQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQztpQkFDL0I7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ25ELE9BQU8sQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUM7YUFDL0I7UUFDTCxDQUFDO0tBQUE7SUFFSyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsYUFBYTs7WUFDaEQsSUFBSSxZQUE4QixDQUFDO1lBQ25DLElBQUksV0FBVyxHQUFHLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLElBQUk7Z0JBQ0EsWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDeEcsSUFBSSxZQUFZLEVBQUU7b0JBQ2QsT0FBTyxZQUFZLENBQUM7aUJBQ3ZCO3FCQUFNO29CQUNILE9BQU8sV0FBVyxDQUFDO2lCQUN0QjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sV0FBVyxDQUFDO2FBQ3RCO1FBQ0wsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLFlBQVk7O1lBQzVCLElBQUksWUFBOEIsQ0FBQztZQUNuQyxJQUFJLFdBQVcsR0FBRyxDQUFDLElBQUksYUFBYSxFQUFFLENBQUMsQ0FBQztZQUN4QyxJQUFJO2dCQUNBLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3BGLElBQUksWUFBWSxFQUFFO29CQUNkLE9BQU8sWUFBWSxDQUFDO2lCQUN2QjtxQkFBTTtvQkFDSCxPQUFPLFdBQVcsQ0FBQztpQkFDdEI7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLFdBQVcsQ0FBQzthQUN0QjtRQUNMLENBQUM7S0FBQTs7NEdBdEZRLGNBQWM7Z0hBQWQsY0FBYyxjQUhYLE1BQU07NEZBR1QsY0FBYztrQkFKMUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVmVoaWNsZVR5cGVNLCBWZWhpY2xlVHlwZSwgVmVoaWNsZUJ5VHlwZU0sIFZlaGljbGVCeVR5cGUsIFZlaGljbGVDYXRlZ29yeU0sIFZlaGljbGVDYXRlZ29yeSwgRW5naW5lU3Ryb2tlTSwgRW5naW5lU3Ryb2tlIH0gZnJvbSAnLi4vbW9kZWwvdmVoaWNsZS5tb2RlbCc7XG5pbXBvcnQgeyBWZWhpY2xlQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVyL3ZlaGljbGUuY29udHJvbGxlclwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgVmVoaWNsZVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHZlaGljbGVDb250cm9sbGVyOiBWZWhpY2xlQ29udHJvbGxlclxuICAgICkgeyB9XG5cbiAgICBhc3luYyBnZXRWZWhpY2xlVHlwZSgpOiBQcm9taXNlPFZlaGljbGVUeXBlTVtdPiB7XG4gICAgICAgIGxldCB2ZWhpY2xlVHlwZU06IFZlaGljbGVUeXBlTVtdO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2ZWhpY2xlVHlwZU0gPSBhd2FpdCB0aGlzLnZlaGljbGVDb250cm9sbGVyLmdldFZlaGljbGVUeXBlKCkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmICh2ZWhpY2xlVHlwZU0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmVoaWNsZVR5cGVNO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBWZWhpY2xlVHlwZSgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldFZlaGljbGVUeXBlIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBWZWhpY2xlVHlwZSgpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFZlaGljbGVDYXRlZ29yeSgpOiBQcm9taXNlPFZlaGljbGVDYXRlZ29yeU1bXT4ge1xuICAgICAgICBsZXQgdmVoaWNsZUNhdGVnb3J5TTogVmVoaWNsZUNhdGVnb3J5TVtdO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2ZWhpY2xlQ2F0ZWdvcnlNID0gYXdhaXQgdGhpcy52ZWhpY2xlQ29udHJvbGxlci5nZXRWZWhpY2xlQ2F0ZWdvcnkoKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKHZlaGljbGVDYXRlZ29yeU0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmVoaWNsZUNhdGVnb3J5TTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgVmVoaWNsZUNhdGVnb3J5KCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZ2V0VmVoaWNsZUNhdGVnb3J5IC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBWZWhpY2xlQ2F0ZWdvcnkoKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRFbmdpbmVTdHJva2UoKTogUHJvbWlzZTxFbmdpbmVTdHJva2VNW10+IHtcbiAgICAgICAgbGV0IGVuZ2luZVN0cm9rZU06IEVuZ2luZVN0cm9rZU1bXTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZW5naW5lU3Ryb2tlTSA9IGF3YWl0IHRoaXMudmVoaWNsZUNvbnRyb2xsZXIuZ2V0RW5naW5lU3Ryb2tlKCkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChlbmdpbmVTdHJva2VNKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZ2luZVN0cm9rZU07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IEVuZ2luZVN0cm9rZSgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldEVuZ2luZVN0cm9rZSAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgRW5naW5lU3Ryb2tlKCldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VmVoaWNsZUJ5VHlwZUlEKGN1cnJlbnRPcmdJRCwgVmVjaGlsZVR5cGVJRCk6IFByb21pc2U8VmVoaWNsZUJ5VHlwZU1bXT4ge1xuICAgICAgICBsZXQgdmVjaGlsZVR5cGVNOiBWZWhpY2xlQnlUeXBlTVtdO1xuICAgICAgICBsZXQgdmVjaGlsZVR5cGUgPSBbbmV3IFZlaGljbGVCeVR5cGUoKV07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2ZWNoaWxlVHlwZU0gPSBhd2FpdCB0aGlzLnZlaGljbGVDb250cm9sbGVyLmdldFZlaGljbGVCeVR5cGVJRChjdXJyZW50T3JnSUQsIFZlY2hpbGVUeXBlSUQpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgaWYgKHZlY2hpbGVUeXBlTSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2ZWNoaWxlVHlwZU07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB2ZWNoaWxlVHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gdmVjaGlsZVR5cGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRBbGxWZWhpY2xlKGN1cnJlbnRPcmdJRCk6IFByb21pc2U8VmVoaWNsZUJ5VHlwZU1bXT4ge1xuICAgICAgICBsZXQgdmVjaGlsZVR5cGVNOiBWZWhpY2xlQnlUeXBlTVtdO1xuICAgICAgICBsZXQgdmVjaGlsZVR5cGUgPSBbbmV3IFZlaGljbGVCeVR5cGUoKV07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2ZWNoaWxlVHlwZU0gPSBhd2FpdCB0aGlzLnZlaGljbGVDb250cm9sbGVyLmdldEFsbFZlaGljbGUoY3VycmVudE9yZ0lEKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIGlmICh2ZWNoaWxlVHlwZU0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmVjaGlsZVR5cGVNO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmVjaGlsZVR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHZlY2hpbGVUeXBlO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19