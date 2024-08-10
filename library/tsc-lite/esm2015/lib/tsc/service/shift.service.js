import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Shift } from '../model/shift.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/shift.controller";
export class ShiftService {
    constructor(shiftController) {
        this.shiftController = shiftController;
    }
    getShift(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let shiftM;
            try {
                shiftM = yield this.shiftController.getShift(orgID).toPromise();
                if (shiftM) {
                    return shiftM;
                }
                else {
                    return [new Shift()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Shift()];
            }
        });
    }
}
ShiftService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftService, deps: [{ token: i1.ShiftController }], target: i0.ɵɵFactoryTarget.Injectable });
ShiftService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShiftService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ShiftController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpZnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2Mvc2VydmljZS9zaGlmdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQVUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBUXJELE1BQU0sT0FBTyxZQUFZO0lBRXJCLFlBQ1ksZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3hDLENBQUM7SUFFQyxRQUFRLENBQUMsS0FBSzs7WUFDaEIsSUFBSSxNQUFnQixDQUFDO1lBQ3JCLElBQUk7Z0JBQ0EsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRWhFLElBQUksTUFBTSxFQUFFO29CQUNSLE9BQU8sTUFBTSxDQUFDO2lCQUNqQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUN4QjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDeEI7UUFDTCxDQUFDO0tBQUE7OzBHQXBCUSxZQUFZOzhHQUFaLFlBQVksY0FIVCxNQUFNOzRGQUdULFlBQVk7a0JBSnhCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTaGlmdCwgU2hpZnRNIH0gZnJvbSAnLi4vbW9kZWwvc2hpZnQubW9kZWwnO1xuXG5pbXBvcnQgeyBTaGlmdENvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVyL3NoaWZ0LmNvbnRyb2xsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgU2hpZnRTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHNoaWZ0Q29udHJvbGxlcjogU2hpZnRDb250cm9sbGVyXG4gICAgKSB7IH1cblxuICAgIGFzeW5jIGdldFNoaWZ0KG9yZ0lEKTogUHJvbWlzZTxTaGlmdE1bXT4ge1xuICAgICAgICBsZXQgc2hpZnRNOiBTaGlmdE1bXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNoaWZ0TSA9IGF3YWl0IHRoaXMuc2hpZnRDb250cm9sbGVyLmdldFNoaWZ0KG9yZ0lEKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKHNoaWZ0TSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaGlmdE07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFNoaWZ0KCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFNoaWZ0KCldO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19