import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Unit } from '../model/unit.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/unit.controller";
export class UnitService {
    constructor(unitController) {
        this.unitController = unitController;
    }
    getUnit(apiFilter) {
        return __awaiter(this, void 0, void 0, function* () {
            let oldUnitM;
            let unitM;
            try {
                oldUnitM = yield this.unitController.getUnit(apiFilter).toPromise();
                if (oldUnitM) {
                    unitM = oldUnitM.map(this.transformUnit);
                    unitM.unshift({
                        id: null,
                        name: 'Select none',
                        uomCode: null,
                        type: null,
                        typeName: null,
                        subType: null
                    });
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
    getUnitUsingPublicUrl(apiFilter) {
        return __awaiter(this, void 0, void 0, function* () {
            let oldUnitM;
            let unitM;
            try {
                oldUnitM = yield this.unitController.getUnitUsingPublicUrl(apiFilter).toPromise();
                if (oldUnitM) {
                    unitM = oldUnitM.map(this.transformUnit);
                    unitM.unshift({
                        id: null,
                        name: 'Select none',
                        uomCode: null,
                        type: null,
                        typeName: null,
                        subType: null
                    });
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
    transformUnit(oldUnit) {
        return {
            id: oldUnit.unitID,
            name: oldUnit.uomName,
            uomCode: oldUnit.uomCode,
            type: oldUnit.unitType,
            typeName: oldUnit.unitTypeName,
            subType: oldUnit.unitSubType,
        };
    }
    filterUnit(unit, unitTypeFilter) {
        let unitM;
        unitM = unit.filter((unit) => unitTypeFilter.includes(unit.type));
        unitM.unshift({
            id: null,
            name: 'Select none',
            uomCode: null,
            type: null,
            typeName: null,
            subType: null
        });
        return unitM;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS91bml0LXNlcnZpY2Uvc3JjL2xpYi90c2Mvc2VydmljZS91bml0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFTLElBQUksRUFBWSxNQUFNLHFCQUFxQixDQUFDOzs7QUFPNUQsTUFBTSxPQUFPLFdBQVc7SUFDcEIsWUFDWSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDdEMsQ0FBQztJQUVDLE9BQU8sQ0FBQyxTQUFTOztZQUNuQixJQUFJLFFBQW9CLENBQUM7WUFDekIsSUFBSSxLQUFjLENBQUM7WUFFbkIsSUFBSTtnQkFDQSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFcEUsSUFBSSxRQUFRLEVBQUU7b0JBQ1YsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUV6QyxLQUFLLENBQUMsT0FBTyxDQUFDO3dCQUNWLEVBQUUsRUFBRSxJQUFJO3dCQUNSLElBQUksRUFBRSxhQUFhO3dCQUNuQixPQUFPLEVBQUUsSUFBSTt3QkFDYixJQUFJLEVBQUUsSUFBSTt3QkFDVixRQUFRLEVBQUUsSUFBSTt3QkFDZCxPQUFPLEVBQUUsSUFBSTtxQkFDaEIsQ0FBQyxDQUFDO29CQUVILE9BQU8sS0FBSyxDQUFDO2lCQUNoQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUN2QjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7YUFDdkI7UUFDTCxDQUFDO0tBQUE7SUFFSyxxQkFBcUIsQ0FBQyxTQUFTOztZQUNqQyxJQUFJLFFBQW9CLENBQUM7WUFDekIsSUFBSSxLQUFjLENBQUM7WUFFbkIsSUFBSTtnQkFDQSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUVsRixJQUFJLFFBQVEsRUFBRTtvQkFDVixLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBRXpDLEtBQUssQ0FBQyxPQUFPLENBQUM7d0JBQ1YsRUFBRSxFQUFFLElBQUk7d0JBQ1IsSUFBSSxFQUFFLGFBQWE7d0JBQ25CLE9BQU8sRUFBRSxJQUFJO3dCQUNiLElBQUksRUFBRSxJQUFJO3dCQUNWLFFBQVEsRUFBRSxJQUFJO3dCQUNkLE9BQU8sRUFBRSxJQUFJO3FCQUNoQixDQUFDLENBQUM7b0JBRUgsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQ3ZCO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQzthQUN2QjtRQUNMLENBQUM7S0FBQTtJQUVELGFBQWEsQ0FBQyxPQUFpQjtRQUMzQixPQUFPO1lBQ0gsRUFBRSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ2xCLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTztZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87WUFDeEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLFFBQVEsRUFBRSxPQUFPLENBQUMsWUFBWTtZQUM5QixPQUFPLEVBQUUsT0FBTyxDQUFDLFdBQVc7U0FDL0IsQ0FBQztJQUNOLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYSxFQUFFLGNBQXdCO1FBQzlDLElBQUksS0FBYyxDQUFDO1FBRW5CLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBVyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXpFLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDVixFQUFFLEVBQUUsSUFBSTtZQUNSLElBQUksRUFBRSxhQUFhO1lBQ25CLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsSUFBSTtZQUNkLE9BQU8sRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQztRQUVILE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7O3lHQXpGUSxXQUFXOzZHQUFYLFdBQVcsY0FIUixNQUFNOzRGQUdULFdBQVc7a0JBSnZCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBVbml0TSwgVW5pdCwgT2xkVW5pdE0gfSBmcm9tICcuLi9tb2RlbC91bml0Lm1vZGVsJztcbmltcG9ydCB7IFVuaXRDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlci91bml0LmNvbnRyb2xsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgVW5pdFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHVuaXRDb250cm9sbGVyOiBVbml0Q29udHJvbGxlclxuICAgICkgeyB9XG5cbiAgICBhc3luYyBnZXRVbml0KGFwaUZpbHRlcik6IFByb21pc2U8VW5pdE1bXT4ge1xuICAgICAgICBsZXQgb2xkVW5pdE06IE9sZFVuaXRNW107XG4gICAgICAgIGxldCB1bml0TTogVW5pdE1bXTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgb2xkVW5pdE0gPSBhd2FpdCB0aGlzLnVuaXRDb250cm9sbGVyLmdldFVuaXQoYXBpRmlsdGVyKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKG9sZFVuaXRNKSB7XG4gICAgICAgICAgICAgICAgdW5pdE0gPSBvbGRVbml0TS5tYXAodGhpcy50cmFuc2Zvcm1Vbml0KTtcblxuICAgICAgICAgICAgICAgIHVuaXRNLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1NlbGVjdCBub25lJyxcbiAgICAgICAgICAgICAgICAgICAgdW9tQ29kZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZU5hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHN1YlR5cGU6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB1bml0TTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgVW5pdCgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBVbml0KCldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VW5pdFVzaW5nUHVibGljVXJsKGFwaUZpbHRlcik6IFByb21pc2U8VW5pdE1bXT4ge1xuICAgICAgICBsZXQgb2xkVW5pdE06IE9sZFVuaXRNW107XG4gICAgICAgIGxldCB1bml0TTogVW5pdE1bXTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgb2xkVW5pdE0gPSBhd2FpdCB0aGlzLnVuaXRDb250cm9sbGVyLmdldFVuaXRVc2luZ1B1YmxpY1VybChhcGlGaWx0ZXIpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAob2xkVW5pdE0pIHtcbiAgICAgICAgICAgICAgICB1bml0TSA9IG9sZFVuaXRNLm1hcCh0aGlzLnRyYW5zZm9ybVVuaXQpO1xuXG4gICAgICAgICAgICAgICAgdW5pdE0udW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU2VsZWN0IG5vbmUnLFxuICAgICAgICAgICAgICAgICAgICB1b21Db2RlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0eXBlTmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc3ViVHlwZTogbnVsbFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuaXRNO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBVbml0KCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFVuaXQoKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1Vbml0KG9sZFVuaXQ6IE9sZFVuaXRNKTogVW5pdE0ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IG9sZFVuaXQudW5pdElELFxuICAgICAgICAgICAgbmFtZTogb2xkVW5pdC51b21OYW1lLFxuICAgICAgICAgICAgdW9tQ29kZTogb2xkVW5pdC51b21Db2RlLFxuICAgICAgICAgICAgdHlwZTogb2xkVW5pdC51bml0VHlwZSxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBvbGRVbml0LnVuaXRUeXBlTmFtZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IG9sZFVuaXQudW5pdFN1YlR5cGUsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZmlsdGVyVW5pdCh1bml0OiBVbml0TVtdLCB1bml0VHlwZUZpbHRlcjogc3RyaW5nW10pOiBVbml0TVtdIHtcbiAgICAgICAgbGV0IHVuaXRNOiBVbml0TVtdO1xuXG4gICAgICAgIHVuaXRNID0gdW5pdC5maWx0ZXIoKHVuaXQ6IFVuaXRNKSA9PiB1bml0VHlwZUZpbHRlci5pbmNsdWRlcyh1bml0LnR5cGUpKTtcblxuICAgICAgICB1bml0TS51bnNoaWZ0KHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgbmFtZTogJ1NlbGVjdCBub25lJyxcbiAgICAgICAgICAgIHVvbUNvZGU6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdHlwZU5hbWU6IG51bGwsXG4gICAgICAgICAgICBzdWJUeXBlOiBudWxsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1bml0TTtcbiAgICB9XG59XG4iXX0=