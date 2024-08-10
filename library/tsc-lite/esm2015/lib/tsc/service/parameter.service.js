import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Parameter } from '../model/parameter.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/parameter.controller";
import * as i2 from "@library/storage-service";
// /tsc-library/
export class ParameterService {
    constructor(parameterController, storageService) {
        this.parameterController = parameterController;
        this.storageService = storageService;
    }
    getParameterByLayoutID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let parameterM;
            try {
                parameterM = yield this.parameterController.getParameterByLayoutID(orgID).toPromise();
                if (parameterM) {
                    return parameterM;
                }
                else {
                    return [new Parameter()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Parameter()];
            }
        });
    }
    getParameterByDeviceID(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let parameterM;
            try {
                parameterM = yield this.parameterController.getParameterByDeviceID(orgID, requestBody).toPromise();
                if (parameterM) {
                    return parameterM;
                }
                else {
                    return [new Parameter()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Parameter()];
            }
        });
    }
    getDerivedParameterByLayoutID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let derivedParameterM;
            try {
                derivedParameterM = yield this.parameterController.getDerivedParameterByLayoutID(orgID).toPromise();
                if (derivedParameterM) {
                    return derivedParameterM;
                }
                else {
                    return [new Parameter()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Parameter()];
            }
        });
    }
}
ParameterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterService, deps: [{ token: i1.ParameterController }, { token: i2.StorageService }], target: i0.ɵɵFactoryTarget.Injectable });
ParameterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ParameterController }, { type: i2.StorageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL3NlcnZpY2UvcGFyYW1ldGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBYyxNQUFNLDBCQUEwQixDQUFDOzs7O0FBTWpFLGdCQUFnQjtBQU1oQixNQUFNLE9BQU8sZ0JBQWdCO0lBRXpCLFlBQ1ksbUJBQXdDLEVBQ3hDLGNBQThCO1FBRDlCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3RDLENBQUM7SUFFQyxzQkFBc0IsQ0FBQyxLQUFLOztZQUM5QixJQUFJLFVBQXdCLENBQUM7WUFDN0IsSUFBSTtnQkFDQSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRXRGLElBQUksVUFBVSxFQUFFO29CQUNaLE9BQU8sVUFBVSxDQUFDO2lCQUNyQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2lCQUM1QjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7YUFDNUI7UUFDTCxDQUFDO0tBQUE7SUFFSyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsV0FBVzs7WUFDM0MsSUFBSSxVQUF3QixDQUFDO1lBQzdCLElBQUk7Z0JBQ0EsVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFbkcsSUFBSSxVQUFVLEVBQUU7b0JBQ1osT0FBTyxVQUFVLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7aUJBQzVCO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQzthQUM1QjtRQUNMLENBQUM7S0FBQTtJQUVLLDZCQUE2QixDQUFDLEtBQUs7O1lBQ3JDLElBQUksaUJBQStCLENBQUM7WUFDcEMsSUFBSTtnQkFDQSxpQkFBaUIsR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFcEcsSUFBSSxpQkFBaUIsRUFBRTtvQkFDbkIsT0FBTyxpQkFBaUIsQ0FBQztpQkFDNUI7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztpQkFDNUI7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2FBQzVCO1FBQ0wsQ0FBQztLQUFBOzs4R0FyRFEsZ0JBQWdCO2tIQUFoQixnQkFBZ0IsY0FIYixNQUFNOzRGQUdULGdCQUFnQjtrQkFKNUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhcmFtZXRlciwgUGFyYW1ldGVyTSB9IGZyb20gJy4uL21vZGVsL3BhcmFtZXRlci5tb2RlbCc7XG5cbmltcG9ydCB7IFBhcmFtZXRlckNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVyL3BhcmFtZXRlci5jb250cm9sbGVyJztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvc3RvcmFnZS1zZXJ2aWNlJztcbi8vIC90c2MtbGlicmFyeS9cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlclNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGFyYW1ldGVyQ29udHJvbGxlcjogUGFyYW1ldGVyQ29udHJvbGxlcixcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgKSB7IH1cblxuICAgIGFzeW5jIGdldFBhcmFtZXRlckJ5TGF5b3V0SUQob3JnSUQpOiBQcm9taXNlPFBhcmFtZXRlck1bXT4ge1xuICAgICAgICBsZXQgcGFyYW1ldGVyTTogUGFyYW1ldGVyTVtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFyYW1ldGVyTSA9IGF3YWl0IHRoaXMucGFyYW1ldGVyQ29udHJvbGxlci5nZXRQYXJhbWV0ZXJCeUxheW91dElEKG9yZ0lEKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlck0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyTTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgUGFyYW1ldGVyKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFBhcmFtZXRlcigpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFBhcmFtZXRlckJ5RGV2aWNlSUQob3JnSUQsIHJlcXVlc3RCb2R5KTogUHJvbWlzZTxQYXJhbWV0ZXJNW10+IHtcbiAgICAgICAgbGV0IHBhcmFtZXRlck06IFBhcmFtZXRlck1bXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhcmFtZXRlck0gPSBhd2FpdCB0aGlzLnBhcmFtZXRlckNvbnRyb2xsZXIuZ2V0UGFyYW1ldGVyQnlEZXZpY2VJRChvcmdJRCwgcmVxdWVzdEJvZHkpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyTSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXJNO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBQYXJhbWV0ZXIoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgUGFyYW1ldGVyKCldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGVyaXZlZFBhcmFtZXRlckJ5TGF5b3V0SUQob3JnSUQpOiBQcm9taXNlPFBhcmFtZXRlck1bXT4ge1xuICAgICAgICBsZXQgZGVyaXZlZFBhcmFtZXRlck06IFBhcmFtZXRlck1bXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRlcml2ZWRQYXJhbWV0ZXJNID0gYXdhaXQgdGhpcy5wYXJhbWV0ZXJDb250cm9sbGVyLmdldERlcml2ZWRQYXJhbWV0ZXJCeUxheW91dElEKG9yZ0lEKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKGRlcml2ZWRQYXJhbWV0ZXJNKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlcml2ZWRQYXJhbWV0ZXJNO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBQYXJhbWV0ZXIoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgUGFyYW1ldGVyKCldO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19