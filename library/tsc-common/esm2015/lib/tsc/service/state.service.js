import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import { State } from "../model/state.model";
import * as i0 from "@angular/core";
import * as i1 from "../controller/state.controller";
export class StateService {
    constructor(stateController) {
        this.stateController = stateController;
    }
    getState(countryCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let stateM;
            let state = [new State()];
            try {
                stateM = yield this.stateController.getState(countryCode).toPromise();
                if (stateM) {
                    return stateM;
                }
                else {
                    return state;
                }
            }
            catch (error) {
                console.error('Error -', error);
                return state;
            }
        });
    }
}
StateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StateService, deps: [{ token: i1.StateController }], target: i0.ɵɵFactoryTarget.Injectable });
StateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.StateController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9zZXJ2aWNlL3N0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBUyxNQUFNLHNCQUFzQixDQUFDOzs7QUFRcEQsTUFBTSxPQUFPLFlBQVk7SUFFckIsWUFDWSxlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDeEMsQ0FBQztJQUVDLFFBQVEsQ0FBQyxXQUFXOztZQUN0QixJQUFJLE1BQWdCLENBQUM7WUFDckIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7WUFFMUIsSUFBSTtnQkFDQSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFdEUsSUFBSSxNQUFNLEVBQUU7b0JBQ1IsT0FBTyxNQUFNLENBQUM7aUJBQ2pCO3FCQUFNO29CQUNILE9BQU8sS0FBSyxDQUFDO2lCQUNoQjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQztLQUFBOzswR0F0Qk0sWUFBWTs4R0FBWixZQUFZLGNBSFQsTUFBTTs0RkFHVCxZQUFZO2tCQUp4QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBTdGF0ZSwgU3RhdGVNfSBmcm9tIFwiLi4vbW9kZWwvc3RhdGUubW9kZWxcIjtcblxuaW1wb3J0IHsgU3RhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvc3RhdGUuY29udHJvbGxlclwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgU3RhdGVTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0YXRlQ29udHJvbGxlcjogU3RhdGVDb250cm9sbGVyLFxuICAgICkgeyB9XG5cbiAgICBhc3luYyBnZXRTdGF0ZShjb3VudHJ5Q29kZSk6IFByb21pc2U8U3RhdGVNW10+IHtcbiAgICAgICAgbGV0IHN0YXRlTTogU3RhdGVNW107XG4gICAgICAgIGxldCBzdGF0ZSA9IFtuZXcgU3RhdGUoKV07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0YXRlTSA9IGF3YWl0IHRoaXMuc3RhdGVDb250cm9sbGVyLmdldFN0YXRlKGNvdW50cnlDb2RlKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlTSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZU07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuXG59Il19