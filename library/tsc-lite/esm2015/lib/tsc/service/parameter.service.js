import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { ConsumptionParameter, Parameter, SavedConsumptionParameter } from '../model/parameter.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/parameter.controller";
export class ParameterService {
    constructor(parameterController) {
        this.parameterController = parameterController;
    }
    getParameterByOrgID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let parameterM;
            try {
                parameterM = yield this.parameterController.getParameterByOrgID(orgID).toPromise();
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
    getConsumptionParameter(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let consumptionParamM;
            try {
                consumptionParamM = yield this.parameterController.getConsumptionParameter(orgID).toPromise();
                if (consumptionParamM) {
                    return consumptionParamM;
                }
                else {
                    return new ConsumptionParameter();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new ConsumptionParameter();
            }
        });
    }
    getSavedConsumptionParameter(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let savedConsumptionParamM;
            try {
                savedConsumptionParamM = yield this.parameterController.getSavedConsumptionParameter(orgID).toPromise();
                if (savedConsumptionParamM) {
                    return savedConsumptionParamM;
                }
                else {
                    return [new SavedConsumptionParameter()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new SavedConsumptionParameter()];
            }
        });
    }
}
ParameterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterService, deps: [{ token: i1.ParameterController }], target: i0.ɵɵFactoryTarget.Injectable });
ParameterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ParameterController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL3NlcnZpY2UvcGFyYW1ldGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG9CQUFvQixFQUF5QixTQUFTLEVBQWMseUJBQXlCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7OztBQVFySyxNQUFNLE9BQU8sZ0JBQWdCO0lBRXpCLFlBQ1ksbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDaEQsQ0FBQztJQUVDLG1CQUFtQixDQUFDLEtBQUs7O1lBQzNCLElBQUksVUFBd0IsQ0FBQztZQUM3QixJQUFJO2dCQUNBLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFbkYsSUFBSSxVQUFVLEVBQUU7b0JBQ1osT0FBTyxVQUFVLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7aUJBQzVCO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQzthQUM1QjtRQUNMLENBQUM7S0FBQTtJQUVLLHNCQUFzQixDQUFDLEtBQUs7O1lBQzlCLElBQUksVUFBd0IsQ0FBQztZQUM3QixJQUFJO2dCQUNBLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFdEYsSUFBSSxVQUFVLEVBQUU7b0JBQ1osT0FBTyxVQUFVLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7aUJBQzVCO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQzthQUM1QjtRQUNMLENBQUM7S0FBQTtJQUVLLHNCQUFzQixDQUFDLEtBQUssRUFBRSxXQUFXOztZQUMzQyxJQUFJLFVBQXdCLENBQUM7WUFDN0IsSUFBSTtnQkFDQSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUVuRyxJQUFJLFVBQVUsRUFBRTtvQkFDWixPQUFPLFVBQVUsQ0FBQztpQkFDckI7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztpQkFDNUI7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2FBQzVCO1FBQ0wsQ0FBQztLQUFBO0lBRUssdUJBQXVCLENBQUMsS0FBSzs7WUFDL0IsSUFBSSxpQkFBd0MsQ0FBQztZQUM3QyxJQUFJO2dCQUNBLGlCQUFpQixHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUU5RixJQUFJLGlCQUFpQixFQUFFO29CQUNuQixPQUFPLGlCQUFpQixDQUFDO2lCQUM1QjtxQkFBTTtvQkFDSCxPQUFPLElBQUksb0JBQW9CLEVBQUUsQ0FBQztpQkFDckM7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLElBQUksb0JBQW9CLEVBQUUsQ0FBQzthQUNyQztRQUNMLENBQUM7S0FBQTtJQUVLLDRCQUE0QixDQUFDLEtBQUs7O1lBQ3BDLElBQUksc0JBQW9ELENBQUM7WUFDekQsSUFBSTtnQkFDQSxzQkFBc0IsR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFeEcsSUFBSSxzQkFBc0IsRUFBRTtvQkFDeEIsT0FBTyxzQkFBc0IsQ0FBQztpQkFDakM7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUkseUJBQXlCLEVBQUUsQ0FBQyxDQUFDO2lCQUM1QzthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLHlCQUF5QixFQUFFLENBQUMsQ0FBQzthQUM1QztRQUNMLENBQUM7S0FBQTs7OEdBcEZRLGdCQUFnQjtrSEFBaEIsZ0JBQWdCLGNBSGIsTUFBTTs0RkFHVCxnQkFBZ0I7a0JBSjVCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb25zdW1wdGlvblBhcmFtZXRlciwgQ29uc3VtcHRpb25QYXJhbWV0ZXJNLCBQYXJhbWV0ZXIsIFBhcmFtZXRlck0sIFNhdmVkQ29uc3VtcHRpb25QYXJhbWV0ZXIsIFNhdmVkQ29uc3VtcHRpb25QYXJhbWV0ZXJNIH0gZnJvbSAnLi4vbW9kZWwvcGFyYW1ldGVyLm1vZGVsJztcblxuaW1wb3J0IHsgUGFyYW1ldGVyQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXIvcGFyYW1ldGVyLmNvbnRyb2xsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYXJhbWV0ZXJDb250cm9sbGVyOiBQYXJhbWV0ZXJDb250cm9sbGVyLFxuICAgICkgeyB9XG5cbiAgICBhc3luYyBnZXRQYXJhbWV0ZXJCeU9yZ0lEKG9yZ0lEKTogUHJvbWlzZTxQYXJhbWV0ZXJNW10+IHtcbiAgICAgICAgbGV0IHBhcmFtZXRlck06IFBhcmFtZXRlck1bXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhcmFtZXRlck0gPSBhd2FpdCB0aGlzLnBhcmFtZXRlckNvbnRyb2xsZXIuZ2V0UGFyYW1ldGVyQnlPcmdJRChvcmdJRCkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJNKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtZXRlck07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFBhcmFtZXRlcigpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBQYXJhbWV0ZXIoKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRQYXJhbWV0ZXJCeUxheW91dElEKG9yZ0lEKTogUHJvbWlzZTxQYXJhbWV0ZXJNW10+IHtcbiAgICAgICAgbGV0IHBhcmFtZXRlck06IFBhcmFtZXRlck1bXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhcmFtZXRlck0gPSBhd2FpdCB0aGlzLnBhcmFtZXRlckNvbnRyb2xsZXIuZ2V0UGFyYW1ldGVyQnlMYXlvdXRJRChvcmdJRCkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJNKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtZXRlck07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFBhcmFtZXRlcigpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBQYXJhbWV0ZXIoKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRQYXJhbWV0ZXJCeURldmljZUlEKG9yZ0lELCByZXF1ZXN0Qm9keSk6IFByb21pc2U8UGFyYW1ldGVyTVtdPiB7XG4gICAgICAgIGxldCBwYXJhbWV0ZXJNOiBQYXJhbWV0ZXJNW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYXJhbWV0ZXJNID0gYXdhaXQgdGhpcy5wYXJhbWV0ZXJDb250cm9sbGVyLmdldFBhcmFtZXRlckJ5RGV2aWNlSUQob3JnSUQsIHJlcXVlc3RCb2R5KS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlck0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyTTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgUGFyYW1ldGVyKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFBhcmFtZXRlcigpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldENvbnN1bXB0aW9uUGFyYW1ldGVyKG9yZ0lEKTogUHJvbWlzZTxDb25zdW1wdGlvblBhcmFtZXRlck0+IHtcbiAgICAgICAgbGV0IGNvbnN1bXB0aW9uUGFyYW1NOiBDb25zdW1wdGlvblBhcmFtZXRlck07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdW1wdGlvblBhcmFtTSA9IGF3YWl0IHRoaXMucGFyYW1ldGVyQ29udHJvbGxlci5nZXRDb25zdW1wdGlvblBhcmFtZXRlcihvcmdJRCkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChjb25zdW1wdGlvblBhcmFtTSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25zdW1wdGlvblBhcmFtTTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25zdW1wdGlvblBhcmFtZXRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29uc3VtcHRpb25QYXJhbWV0ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFNhdmVkQ29uc3VtcHRpb25QYXJhbWV0ZXIob3JnSUQpOiBQcm9taXNlPFNhdmVkQ29uc3VtcHRpb25QYXJhbWV0ZXJNW10+IHtcbiAgICAgICAgbGV0IHNhdmVkQ29uc3VtcHRpb25QYXJhbU06IFNhdmVkQ29uc3VtcHRpb25QYXJhbWV0ZXJNW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzYXZlZENvbnN1bXB0aW9uUGFyYW1NID0gYXdhaXQgdGhpcy5wYXJhbWV0ZXJDb250cm9sbGVyLmdldFNhdmVkQ29uc3VtcHRpb25QYXJhbWV0ZXIob3JnSUQpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAoc2F2ZWRDb25zdW1wdGlvblBhcmFtTSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzYXZlZENvbnN1bXB0aW9uUGFyYW1NO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBTYXZlZENvbnN1bXB0aW9uUGFyYW1ldGVyKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFNhdmVkQ29uc3VtcHRpb25QYXJhbWV0ZXIoKV07XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=