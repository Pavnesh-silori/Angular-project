import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Shift } from '../model/shift.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/shift.controller";
export class ShiftService {
    constructor(shiftController) {
        this.shiftController = shiftController;
    }
    getShift(orgID, skipLoader) {
        return __awaiter(this, void 0, void 0, function* () {
            let shiftM;
            try {
                shiftM = yield this.shiftController.getShift(orgID, skipLoader).toPromise();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpZnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2Mvc2VydmljZS9zaGlmdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQVUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBUXJELE1BQU0sT0FBTyxZQUFZO0lBRXJCLFlBQ1ksZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3hDLENBQUM7SUFFQyxRQUFRLENBQUMsS0FBSyxFQUFFLFVBQVU7O1lBQzVCLElBQUksTUFBZ0IsQ0FBQztZQUNyQixJQUFJO2dCQUNBLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFNUUsSUFBSSxNQUFNLEVBQUU7b0JBQ1IsT0FBTyxNQUFNLENBQUM7aUJBQ2pCO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ3hCO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQzthQUN4QjtRQUNMLENBQUM7S0FBQTs7MEdBcEJRLFlBQVk7OEdBQVosWUFBWSxjQUhULE1BQU07NEZBR1QsWUFBWTtrQkFKeEIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNoaWZ0LCBTaGlmdE0gfSBmcm9tICcuLi9tb2RlbC9zaGlmdC5tb2RlbCc7XG5cbmltcG9ydCB7IFNoaWZ0Q29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXIvc2hpZnQuY29udHJvbGxlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTaGlmdFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc2hpZnRDb250cm9sbGVyOiBTaGlmdENvbnRyb2xsZXJcbiAgICApIHsgfVxuXG4gICAgYXN5bmMgZ2V0U2hpZnQob3JnSUQsIHNraXBMb2FkZXIpOiBQcm9taXNlPFNoaWZ0TVtdPiB7XG4gICAgICAgIGxldCBzaGlmdE06IFNoaWZ0TVtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2hpZnRNID0gYXdhaXQgdGhpcy5zaGlmdENvbnRyb2xsZXIuZ2V0U2hpZnQob3JnSUQsIHNraXBMb2FkZXIpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAoc2hpZnRNKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNoaWZ0TTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgU2hpZnQoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgU2hpZnQoKV07XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=