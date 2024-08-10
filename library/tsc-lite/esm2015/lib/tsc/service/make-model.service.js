import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { MakeModel } from '../model/make-model.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/make-model.controller";
export class MakeModelService {
    constructor(makeModelController) {
        this.makeModelController = makeModelController;
    }
    getMake(type) {
        return __awaiter(this, void 0, void 0, function* () {
            let makeI;
            try {
                makeI = yield this.makeModelController.getMake(type).toPromise();
                if (makeI) {
                    return makeI;
                }
                else {
                    return [new MakeModel()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new MakeModel()];
            }
        });
    }
    getModel(makeID, type) {
        return __awaiter(this, void 0, void 0, function* () {
            let modelI;
            try {
                modelI = yield this.makeModelController.getModel(makeID, type).toPromise();
                if (modelI) {
                    return modelI;
                }
                else {
                    return [new MakeModel()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new MakeModel()];
            }
        });
    }
}
MakeModelService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MakeModelService, deps: [{ token: i1.MakeModelController }], target: i0.ɵɵFactoryTarget.Injectable });
MakeModelService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MakeModelService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MakeModelService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.MakeModelController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFrZS1tb2RlbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9zZXJ2aWNlL21ha2UtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sMkJBQTJCLENBQUM7OztBQVFsRSxNQUFNLE9BQU8sZ0JBQWdCO0lBRXpCLFlBQ1ksbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDaEQsQ0FBQztJQUVDLE9BQU8sQ0FBQyxJQUFJOztZQUNkLElBQUksS0FBbUIsQ0FBQztZQUN4QixJQUFJO2dCQUNBLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRWpFLElBQUksS0FBSyxFQUFFO29CQUNQLE9BQU8sS0FBSyxDQUFDO2lCQUNoQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2lCQUM1QjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7YUFDNUI7UUFDTCxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUk7O1lBQ3ZCLElBQUksTUFBb0IsQ0FBQztZQUN6QixJQUFJO2dCQUNBLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUUzRSxJQUFJLE1BQU0sRUFBRTtvQkFDUixPQUFPLE1BQU0sQ0FBQztpQkFDakI7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztpQkFDNUI7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2FBQzVCO1FBQ0wsQ0FBQztLQUFBOzs4R0FwQ1EsZ0JBQWdCO2tIQUFoQixnQkFBZ0IsY0FIYixNQUFNOzRGQUdULGdCQUFnQjtrQkFKNUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1ha2VNb2RlbCwgTWFrZU1vZGVsSSB9IGZyb20gJy4uL21vZGVsL21ha2UtbW9kZWwubW9kZWwnO1xuXG5pbXBvcnQgeyBNYWtlTW9kZWxDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlci9tYWtlLW1vZGVsLmNvbnRyb2xsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgTWFrZU1vZGVsU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBtYWtlTW9kZWxDb250cm9sbGVyOiBNYWtlTW9kZWxDb250cm9sbGVyXG4gICAgKSB7IH1cblxuICAgIGFzeW5jIGdldE1ha2UodHlwZSk6IFByb21pc2U8TWFrZU1vZGVsSVtdPiB7XG4gICAgICAgIGxldCBtYWtlSTogTWFrZU1vZGVsSVtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbWFrZUkgPSBhd2FpdCB0aGlzLm1ha2VNb2RlbENvbnRyb2xsZXIuZ2V0TWFrZSh0eXBlKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKG1ha2VJKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VJO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBNYWtlTW9kZWwoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgTWFrZU1vZGVsKCldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TW9kZWwobWFrZUlELCB0eXBlKTogUHJvbWlzZTxNYWtlTW9kZWxJW10+IHtcbiAgICAgICAgbGV0IG1vZGVsSTogTWFrZU1vZGVsSVtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbW9kZWxJID0gYXdhaXQgdGhpcy5tYWtlTW9kZWxDb250cm9sbGVyLmdldE1vZGVsKG1ha2VJRCwgdHlwZSkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChtb2RlbEkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWxJO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBNYWtlTW9kZWwoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgTWFrZU1vZGVsKCldO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19