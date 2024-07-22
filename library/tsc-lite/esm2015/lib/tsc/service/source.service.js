import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { UtilitySourceType } from '../model/source-consumer.model';
// tsc-library
import { Static } from '@library/tsc-common';
import * as i0 from "@angular/core";
import * as i1 from "../controller/source.controller";
// /tsc-library/
export class SourceService {
    constructor(sourceController) {
        this.sourceController = sourceController;
    }
    getUtilitySourceAndType(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let utlitySourceType;
            try {
                utlitySourceType = yield this.sourceController.getUtilitySourceAndType(orgID).toPromise();
                if (utlitySourceType) {
                    return utlitySourceType;
                }
                else {
                    return new UtilitySourceType();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new UtilitySourceType();
            }
        });
    }
    getSourceConsumerType(orgID, type) {
        return __awaiter(this, void 0, void 0, function* () {
            let sourceLoadType;
            try {
                sourceLoadType = yield this.sourceController.getSourceConsumerType(orgID, type).toPromise();
                if (sourceLoadType) {
                    return sourceLoadType;
                }
                else {
                    return [new Static()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Static()];
            }
        });
    }
}
SourceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceService, deps: [{ token: i1.SourceController }], target: i0.ɵɵFactoryTarget.Injectable });
SourceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.SourceController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL3NlcnZpY2Uvc291cmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFzQixNQUFNLGdDQUFnQyxDQUFDO0FBSXZGLGNBQWM7QUFDZCxPQUFPLEVBQUUsTUFBTSxFQUFXLE1BQU0scUJBQXFCLENBQUM7OztBQUN0RCxnQkFBZ0I7QUFNaEIsTUFBTSxPQUFPLGFBQWE7SUFFdEIsWUFDWSxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUMxQyxDQUFDO0lBRUMsdUJBQXVCLENBQUMsS0FBSzs7WUFDL0IsSUFBSSxnQkFBb0MsQ0FBQztZQUN6QyxJQUFJO2dCQUNBLGdCQUFnQixHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUUxRixJQUFJLGdCQUFnQixFQUFFO29CQUNsQixPQUFPLGdCQUFnQixDQUFDO2lCQUMzQjtxQkFBTTtvQkFDSCxPQUFPLElBQUksaUJBQWlCLEVBQUUsQ0FBQztpQkFDbEM7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLElBQUksaUJBQWlCLEVBQUUsQ0FBQzthQUNsQztRQUNMLENBQUM7S0FBQTtJQUVLLHFCQUFxQixDQUFDLEtBQUssRUFBRSxJQUFJOztZQUNuQyxJQUFJLGNBQXlCLENBQUM7WUFDOUIsSUFBSTtnQkFDQSxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUU1RixJQUFJLGNBQWMsRUFBRTtvQkFDaEIsT0FBTyxjQUFjLENBQUM7aUJBQ3pCO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7aUJBQ3pCO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQzthQUN6QjtRQUNMLENBQUM7S0FBQTs7MkdBcENRLGFBQWE7K0dBQWIsYUFBYSxjQUhWLE1BQU07NEZBR1QsYUFBYTtrQkFKekIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFV0aWxpdHlTb3VyY2VUeXBlLCBVdGlsaXR5U291cmNlVHlwZU0gfSBmcm9tICcuLi9tb2RlbC9zb3VyY2UtY29uc3VtZXIubW9kZWwnO1xuXG5pbXBvcnQgeyBTb3VyY2VDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlci9zb3VyY2UuY29udHJvbGxlcic7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBTdGF0aWMsIFN0YXRpY0kgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFNvdXJjZVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc291cmNlQ29udHJvbGxlcjogU291cmNlQ29udHJvbGxlclxuICAgICkgeyB9XG5cbiAgICBhc3luYyBnZXRVdGlsaXR5U291cmNlQW5kVHlwZShvcmdJRCk6IFByb21pc2U8VXRpbGl0eVNvdXJjZVR5cGVNPiB7XG4gICAgICAgIGxldCB1dGxpdHlTb3VyY2VUeXBlOiBVdGlsaXR5U291cmNlVHlwZU07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB1dGxpdHlTb3VyY2VUeXBlID0gYXdhaXQgdGhpcy5zb3VyY2VDb250cm9sbGVyLmdldFV0aWxpdHlTb3VyY2VBbmRUeXBlKG9yZ0lEKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKHV0bGl0eVNvdXJjZVR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXRsaXR5U291cmNlVHlwZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVdGlsaXR5U291cmNlVHlwZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXRpbGl0eVNvdXJjZVR5cGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFNvdXJjZUNvbnN1bWVyVHlwZShvcmdJRCwgdHlwZSk6IFByb21pc2U8U3RhdGljSVtdPiB7XG4gICAgICAgIGxldCBzb3VyY2VMb2FkVHlwZTogU3RhdGljSVtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc291cmNlTG9hZFR5cGUgPSBhd2FpdCB0aGlzLnNvdXJjZUNvbnRyb2xsZXIuZ2V0U291cmNlQ29uc3VtZXJUeXBlKG9yZ0lELCB0eXBlKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKHNvdXJjZUxvYWRUeXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZUxvYWRUeXBlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBTdGF0aWMoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgU3RhdGljKCldO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=