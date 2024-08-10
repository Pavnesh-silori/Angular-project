import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Unit } from '../model/unit.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/unit.controller";
export class UnitService {
    constructor(unitController) {
        this.unitController = unitController;
    }
    getUnitByParameterID(orgID, parameterID) {
        return __awaiter(this, void 0, void 0, function* () {
            let unitM;
            try {
                unitM = yield this.unitController.getUnitByParameterID(orgID, parameterID).toPromise();
                if (unitM) {
                    return unitM;
                }
                else {
                    return [new Unit()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Unit()];
            }
        });
    }
}
UnitService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitService, deps: [{ token: i1.UnitController }], target: i0.ɵɵFactoryTarget.Injectable });
UnitService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.UnitController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9zZXJ2aWNlL3VuaXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsSUFBSSxFQUFTLE1BQU0scUJBQXFCLENBQUM7OztBQVFsRCxNQUFNLE9BQU8sV0FBVztJQUVwQixZQUNZLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUN0QyxDQUFDO0lBRUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLFdBQVc7O1lBQ3pDLElBQUksS0FBYyxDQUFDO1lBQ25CLElBQUk7Z0JBQ0EsS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRXZGLElBQUksS0FBSyxFQUFFO29CQUNQLE9BQU8sS0FBSyxDQUFDO2lCQUNoQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUN2QjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7YUFDdkI7UUFDTCxDQUFDO0tBQUE7O3lHQXBCUSxXQUFXOzZHQUFYLFdBQVcsY0FIUixNQUFNOzRGQUdULFdBQVc7a0JBSnZCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBVbml0LCBVbml0TSB9IGZyb20gJy4uL21vZGVsL3VuaXQubW9kZWwnO1xuXG5pbXBvcnQgeyBVbml0Q29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXIvdW5pdC5jb250cm9sbGVyJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFVuaXRTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHVuaXRDb250cm9sbGVyOiBVbml0Q29udHJvbGxlcixcbiAgICApIHsgfVxuXG4gICAgYXN5bmMgZ2V0VW5pdEJ5UGFyYW1ldGVySUQob3JnSUQsIHBhcmFtZXRlcklEKTogUHJvbWlzZTxVbml0TVtdPiB7XG4gICAgICAgIGxldCB1bml0TTogVW5pdE1bXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHVuaXRNID0gYXdhaXQgdGhpcy51bml0Q29udHJvbGxlci5nZXRVbml0QnlQYXJhbWV0ZXJJRChvcmdJRCwgcGFyYW1ldGVySUQpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAodW5pdE0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5pdE07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFVuaXQoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgVW5pdCgpXTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=