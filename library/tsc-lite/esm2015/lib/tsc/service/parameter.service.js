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
}
ParameterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterService, deps: [{ token: i1.ParameterController }, { token: i2.StorageService }], target: i0.ɵɵFactoryTarget.Injectable });
ParameterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ParameterController }, { type: i2.StorageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL3NlcnZpY2UvcGFyYW1ldGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBYyxNQUFNLDBCQUEwQixDQUFDOzs7O0FBTWpFLGdCQUFnQjtBQU1oQixNQUFNLE9BQU8sZ0JBQWdCO0lBRXpCLFlBQ1ksbUJBQXdDLEVBQ3hDLGNBQThCO1FBRDlCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3RDLENBQUM7SUFFQyxzQkFBc0IsQ0FBQyxLQUFLOztZQUM5QixJQUFJLFVBQXdCLENBQUM7WUFDN0IsSUFBSTtnQkFDQSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRXRGLElBQUksVUFBVSxFQUFFO29CQUNaLE9BQU8sVUFBVSxDQUFDO2lCQUNyQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2lCQUM1QjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7YUFDNUI7UUFDTCxDQUFDO0tBQUE7SUFFSyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsV0FBVzs7WUFDM0MsSUFBSSxVQUF3QixDQUFDO1lBQzdCLElBQUk7Z0JBQ0EsVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFbkcsSUFBSSxVQUFVLEVBQUU7b0JBQ1osT0FBTyxVQUFVLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7aUJBQzVCO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQzthQUM1QjtRQUNMLENBQUM7S0FBQTs7OEdBckNRLGdCQUFnQjtrSEFBaEIsZ0JBQWdCLGNBSGIsTUFBTTs0RkFHVCxnQkFBZ0I7a0JBSjVCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYXJhbWV0ZXIsIFBhcmFtZXRlck0gfSBmcm9tICcuLi9tb2RlbC9wYXJhbWV0ZXIubW9kZWwnO1xuXG5pbXBvcnQgeyBQYXJhbWV0ZXJDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlci9wYXJhbWV0ZXIuY29udHJvbGxlcic7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3N0b3JhZ2Utc2VydmljZSc7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhcmFtZXRlckNvbnRyb2xsZXI6IFBhcmFtZXRlckNvbnRyb2xsZXIsXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgICkgeyB9XG5cbiAgICBhc3luYyBnZXRQYXJhbWV0ZXJCeUxheW91dElEKG9yZ0lEKTogUHJvbWlzZTxQYXJhbWV0ZXJNW10+IHtcbiAgICAgICAgbGV0IHBhcmFtZXRlck06IFBhcmFtZXRlck1bXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhcmFtZXRlck0gPSBhd2FpdCB0aGlzLnBhcmFtZXRlckNvbnRyb2xsZXIuZ2V0UGFyYW1ldGVyQnlMYXlvdXRJRChvcmdJRCkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJNKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtZXRlck07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFBhcmFtZXRlcigpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBQYXJhbWV0ZXIoKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRQYXJhbWV0ZXJCeURldmljZUlEKG9yZ0lELCByZXF1ZXN0Qm9keSk6IFByb21pc2U8UGFyYW1ldGVyTVtdPiB7XG4gICAgICAgIGxldCBwYXJhbWV0ZXJNOiBQYXJhbWV0ZXJNW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYXJhbWV0ZXJNID0gYXdhaXQgdGhpcy5wYXJhbWV0ZXJDb250cm9sbGVyLmdldFBhcmFtZXRlckJ5RGV2aWNlSUQob3JnSUQsIHJlcXVlc3RCb2R5KS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlck0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyTTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgUGFyYW1ldGVyKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFBhcmFtZXRlcigpXTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==