import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Entity, EntityTree, EntityType } from '../model/entity.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/entity.controller";
export class EntityService {
    constructor(entityController) {
        this.entityController = entityController;
    }
    getEntitiesByOrgID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityM;
            try {
                entityM = yield this.entityController.getEntitiesByOrgID(orgID).toPromise();
                if (entityM) {
                    return entityM;
                }
                else {
                    return [new Entity()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Entity()];
            }
        });
    }
    getEntityHierarchyByParameterID(orgID, parameterID) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityTreeM;
            try {
                entityTreeM = yield this.entityController.getEntityHierarchyByParameterID(orgID, parameterID).toPromise();
                if (entityTreeM) {
                    return entityTreeM;
                }
                else {
                    return [new EntityTree()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new EntityTree()];
            }
        });
    }
    getEntityTypeByLayoutID(orgID, skipLoader) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityTypeM;
            try {
                entityTypeM = yield this.entityController.getEntityTypeByLayoutID(orgID, skipLoader).toPromise();
                if (entityTypeM) {
                    return entityTypeM;
                }
                else {
                    return [new EntityType()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new EntityType()];
            }
        });
    }
    getEntitiesWithDevices(orgID, layoutID, requestBody, skipLoader) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityDeviceM;
            try {
                entityDeviceM = yield this.entityController.getEntitiesWithDevices(orgID, layoutID, requestBody, skipLoader).toPromise();
                if (entityDeviceM) {
                    return entityDeviceM;
                }
                else {
                    return new EntityTree();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new EntityTree();
            }
        });
    }
    getEntityByParameterID(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityM;
            try {
                entityM = yield this.entityController.getEntityByParameterID(orgID, requestBody).toPromise();
                if (entityM) {
                    return entityM;
                }
                else {
                    return [new Entity()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Entity()];
            }
        });
    }
}
EntityService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityService, deps: [{ token: i1.EntityController }], target: i0.ɵɵFactoryTarget.Injectable });
EntityService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.EntityController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL3NlcnZpY2UvZW50aXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBVyxVQUFVLEVBQWUsVUFBVSxFQUFlLE1BQU0sdUJBQXVCLENBQUM7OztBQVExRyxNQUFNLE9BQU8sYUFBYTtJQUV0QixZQUNZLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzFDLENBQUM7SUFFQyxrQkFBa0IsQ0FBQyxLQUFLOztZQUMxQixJQUFJLE9BQWtCLENBQUM7WUFDdkIsSUFBSTtnQkFDQSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRTVFLElBQUksT0FBTyxFQUFFO29CQUNULE9BQU8sT0FBTyxDQUFDO2lCQUNsQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2lCQUN6QjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDekI7UUFDTCxDQUFDO0tBQUE7SUFFSywrQkFBK0IsQ0FBQyxLQUFLLEVBQUUsV0FBVzs7WUFDcEQsSUFBSSxXQUEwQixDQUFDO1lBQy9CLElBQUk7Z0JBQ0EsV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLCtCQUErQixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFMUcsSUFBSSxXQUFXLEVBQUU7b0JBQ2IsT0FBTyxXQUFXLENBQUM7aUJBQ3RCO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7aUJBQzdCO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQzthQUM3QjtRQUNMLENBQUM7S0FBQTtJQUVLLHVCQUF1QixDQUFDLEtBQUssRUFBRSxVQUFVOztZQUMzQyxJQUFJLFdBQTBCLENBQUM7WUFDL0IsSUFBSTtnQkFDQSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUVqRyxJQUFJLFdBQVcsRUFBRTtvQkFDYixPQUFPLFdBQVcsQ0FBQztpQkFDdEI7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQztpQkFDN0I7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxDQUFDO2FBQzdCO1FBQ0wsQ0FBQztLQUFBO0lBRUssc0JBQXNCLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsVUFBVTs7WUFDakUsSUFBSSxhQUEwQixDQUFDO1lBQy9CLElBQUk7Z0JBQ0EsYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUV6SCxJQUFJLGFBQWEsRUFBRTtvQkFDZixPQUFPLGFBQWEsQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0gsT0FBTyxJQUFJLFVBQVUsRUFBRSxDQUFDO2lCQUMzQjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sSUFBSSxVQUFVLEVBQUUsQ0FBQzthQUMzQjtRQUNMLENBQUM7S0FBQTtJQUVLLHNCQUFzQixDQUFDLEtBQUssRUFBRSxXQUFXOztZQUMzQyxJQUFJLE9BQWtCLENBQUM7WUFDdkIsSUFBSTtnQkFDQSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUU3RixJQUFJLE9BQU8sRUFBRTtvQkFDVCxPQUFPLE9BQU8sQ0FBQztpQkFDbEI7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztpQkFDekI7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ3pCO1FBQ0wsQ0FBQztLQUFBOzsyR0FwRlEsYUFBYTsrR0FBYixhQUFhLGNBSFYsTUFBTTs0RkFHVCxhQUFhO2tCQUp6QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRW50aXR5LCBFbnRpdHlNLCBFbnRpdHlUcmVlLCBFbnRpdHlUcmVlTSwgRW50aXR5VHlwZSwgRW50aXR5VHlwZU0gfSBmcm9tICcuLi9tb2RlbC9lbnRpdHkubW9kZWwnO1xuXG5pbXBvcnQgeyBFbnRpdHlDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlci9lbnRpdHkuY29udHJvbGxlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVudGl0eUNvbnRyb2xsZXI6IEVudGl0eUNvbnRyb2xsZXJcbiAgICApIHsgfVxuXG4gICAgYXN5bmMgZ2V0RW50aXRpZXNCeU9yZ0lEKG9yZ0lEKTogUHJvbWlzZTxFbnRpdHlNW10+IHtcbiAgICAgICAgbGV0IGVudGl0eU06IEVudGl0eU1bXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGVudGl0eU0gPSBhd2FpdCB0aGlzLmVudGl0eUNvbnRyb2xsZXIuZ2V0RW50aXRpZXNCeU9yZ0lEKG9yZ0lEKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKGVudGl0eU0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50aXR5TTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgRW50aXR5KCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IEVudGl0eSgpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEVudGl0eUhpZXJhcmNoeUJ5UGFyYW1ldGVySUQob3JnSUQsIHBhcmFtZXRlcklEKTogUHJvbWlzZTxFbnRpdHlUcmVlTVtdPiB7XG4gICAgICAgIGxldCBlbnRpdHlUcmVlTTogRW50aXR5VHJlZU1bXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGVudGl0eVRyZWVNID0gYXdhaXQgdGhpcy5lbnRpdHlDb250cm9sbGVyLmdldEVudGl0eUhpZXJhcmNoeUJ5UGFyYW1ldGVySUQob3JnSUQsIHBhcmFtZXRlcklEKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKGVudGl0eVRyZWVNKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudGl0eVRyZWVNO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBFbnRpdHlUcmVlKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IEVudGl0eVRyZWUoKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRFbnRpdHlUeXBlQnlMYXlvdXRJRChvcmdJRCwgc2tpcExvYWRlcik6IFByb21pc2U8RW50aXR5VHlwZU1bXT4ge1xuICAgICAgICBsZXQgZW50aXR5VHlwZU06IEVudGl0eVR5cGVNW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlbnRpdHlUeXBlTSA9IGF3YWl0IHRoaXMuZW50aXR5Q29udHJvbGxlci5nZXRFbnRpdHlUeXBlQnlMYXlvdXRJRChvcmdJRCwgc2tpcExvYWRlcikudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChlbnRpdHlUeXBlTSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRpdHlUeXBlTTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgRW50aXR5VHlwZSgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBFbnRpdHlUeXBlKCldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RW50aXRpZXNXaXRoRGV2aWNlcyhvcmdJRCwgbGF5b3V0SUQsIHJlcXVlc3RCb2R5LCBza2lwTG9hZGVyKTogUHJvbWlzZTxFbnRpdHlUcmVlTT4ge1xuICAgICAgICBsZXQgZW50aXR5RGV2aWNlTTogRW50aXR5VHJlZU07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlbnRpdHlEZXZpY2VNID0gYXdhaXQgdGhpcy5lbnRpdHlDb250cm9sbGVyLmdldEVudGl0aWVzV2l0aERldmljZXMob3JnSUQsIGxheW91dElELCByZXF1ZXN0Qm9keSwgc2tpcExvYWRlcikudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChlbnRpdHlEZXZpY2VNKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudGl0eURldmljZU07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRW50aXR5VHJlZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRW50aXR5VHJlZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RW50aXR5QnlQYXJhbWV0ZXJJRChvcmdJRCwgcmVxdWVzdEJvZHkpOiBQcm9taXNlPEVudGl0eU1bXT4ge1xuICAgICAgICBsZXQgZW50aXR5TTogRW50aXR5TVtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZW50aXR5TSA9IGF3YWl0IHRoaXMuZW50aXR5Q29udHJvbGxlci5nZXRFbnRpdHlCeVBhcmFtZXRlcklEKG9yZ0lELCByZXF1ZXN0Qm9keSkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChlbnRpdHlNKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudGl0eU07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IEVudGl0eSgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBFbnRpdHkoKV07XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=