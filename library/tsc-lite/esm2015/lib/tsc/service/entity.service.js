import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Entity, ParameterEntity, EntityType } from '../model/entity.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/entity.controller";
export class EntityService {
    constructor(entityController) {
        this.entityController = entityController;
    }
    getEntitiesHavingDevicesByOrgID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityM;
            try {
                entityM = yield this.entityController.getEntitiesHavingDevicesByOrgID(orgID).toPromise();
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
    getEntitiesByParameterID(orgID, parameterID) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityTreeM;
            try {
                entityTreeM = yield this.entityController.getEntitiesByParameterID(orgID, parameterID).toPromise();
                if (entityTreeM) {
                    return entityTreeM;
                }
                else {
                    return [new ParameterEntity()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new ParameterEntity()];
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
    getEntitiesWithDevicesByLayoutID(orgID, layoutID, requestBody, skipLoader) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityDeviceM;
            try {
                entityDeviceM = yield this.entityController.getEntitiesWithDevicesByLayoutID(orgID, layoutID, requestBody, skipLoader).toPromise();
                if (entityDeviceM) {
                    return entityDeviceM;
                }
                else {
                    return new ParameterEntity();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new ParameterEntity();
            }
        });
    }
    getEntityByID(orgID, layoutID, entityID) {
        return __awaiter(this, void 0, void 0, function* () {
            let layoutM;
            try {
                layoutM = yield this.entityController.getEntityByID(orgID, layoutID, entityID).toPromise();
                if (layoutM) {
                    return layoutM;
                }
                else {
                    return new Entity();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new Entity();
            }
        });
    }
    getEntitiesByParamMetric(orgID, paramName) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityM;
            try {
                entityM = yield this.entityController.getEntitiesByParamMetric(orgID, paramName).toPromise();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL3NlcnZpY2UvZW50aXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBVyxlQUFlLEVBQW9CLFVBQVUsRUFBZSxNQUFNLHVCQUF1QixDQUFDOzs7QUFRcEgsTUFBTSxPQUFPLGFBQWE7SUFFdEIsWUFDWSxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUMxQyxDQUFDO0lBRUMsK0JBQStCLENBQUMsS0FBSzs7WUFDdkMsSUFBSSxPQUFrQixDQUFDO1lBQ3ZCLElBQUk7Z0JBQ0EsT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLCtCQUErQixDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUV6RixJQUFJLE9BQU8sRUFBRTtvQkFDVCxPQUFPLE9BQU8sQ0FBQztpQkFDbEI7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztpQkFDekI7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ3pCO1FBQ0wsQ0FBQztLQUFBO0lBRUssd0JBQXdCLENBQUMsS0FBSyxFQUFFLFdBQVc7O1lBQzdDLElBQUksV0FBK0IsQ0FBQztZQUNwQyxJQUFJO2dCQUNBLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUMsU0FBUyxF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LEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDekI7UUFDTCxDQUFDO0tBQUE7OzJHQXBHUSxhQUFhOytHQUFiLGFBQWEsY0FIVixNQUFNOzRGQUdULGFBQWE7a0JBSnpCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFbnRpdHksIEVudGl0eU0sIFBhcmFtZXRlckVudGl0eSwgUGFyYW1ldGVyRW50aXR5TSwgRW50aXR5VHlwZSwgRW50aXR5VHlwZU0gfSBmcm9tICcuLi9tb2RlbC9lbnRpdHkubW9kZWwnO1xuXG5pbXBvcnQgeyBFbnRpdHlDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlci9lbnRpdHkuY29udHJvbGxlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVudGl0eUNvbnRyb2xsZXI6IEVudGl0eUNvbnRyb2xsZXJcbiAgICApIHsgfVxuXG4gICAgYXN5bmMgZ2V0RW50aXRpZXNIYXZpbmdEZXZpY2VzQnlPcmdJRChvcmdJRCk6IFByb21pc2U8RW50aXR5TVtdPiB7XG4gICAgICAgIGxldCBlbnRpdHlNOiBFbnRpdHlNW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlbnRpdHlNID0gYXdhaXQgdGhpcy5lbnRpdHlDb250cm9sbGVyLmdldEVudGl0aWVzSGF2aW5nRGV2aWNlc0J5T3JnSUQob3JnSUQpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAoZW50aXR5TSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRpdHlNO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBFbnRpdHkoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgRW50aXR5KCldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RW50aXRpZXNCeVBhcmFtZXRlcklEKG9yZ0lELCBwYXJhbWV0ZXJJRCk6IFByb21pc2U8UGFyYW1ldGVyRW50aXR5TVtdPiB7XG4gICAgICAgIGxldCBlbnRpdHlUcmVlTTogUGFyYW1ldGVyRW50aXR5TVtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZW50aXR5VHJlZU0gPSBhd2FpdCB0aGlzLmVudGl0eUNvbnRyb2xsZXIuZ2V0RW50aXRpZXNCeVBhcmFtZXRlcklEKG9yZ0lELCBwYXJhbWV0ZXJJRCkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChlbnRpdHlUcmVlTSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRpdHlUcmVlTTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgUGFyYW1ldGVyRW50aXR5KCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFBhcmFtZXRlckVudGl0eSgpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEVudGl0eVR5cGVCeUxheW91dElEKG9yZ0lELCBza2lwTG9hZGVyKTogUHJvbWlzZTxFbnRpdHlUeXBlTVtdPiB7XG4gICAgICAgIGxldCBlbnRpdHlUeXBlTTogRW50aXR5VHlwZU1bXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGVudGl0eVR5cGVNID0gYXdhaXQgdGhpcy5lbnRpdHlDb250cm9sbGVyLmdldEVudGl0eVR5cGVCeUxheW91dElEKG9yZ0lELCBza2lwTG9hZGVyKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKGVudGl0eVR5cGVNKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudGl0eVR5cGVNO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBFbnRpdHlUeXBlKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IEVudGl0eVR5cGUoKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRFbnRpdGllc1dpdGhEZXZpY2VzQnlMYXlvdXRJRChvcmdJRCwgbGF5b3V0SUQsIHJlcXVlc3RCb2R5LCBza2lwTG9hZGVyKTogUHJvbWlzZTxQYXJhbWV0ZXJFbnRpdHlNPiB7XG4gICAgICAgIGxldCBlbnRpdHlEZXZpY2VNOiBQYXJhbWV0ZXJFbnRpdHlNO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZW50aXR5RGV2aWNlTSA9IGF3YWl0IHRoaXMuZW50aXR5Q29udHJvbGxlci5nZXRFbnRpdGllc1dpdGhEZXZpY2VzQnlMYXlvdXRJRChvcmdJRCwgbGF5b3V0SUQsIHJlcXVlc3RCb2R5LCBza2lwTG9hZGVyKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKGVudGl0eURldmljZU0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50aXR5RGV2aWNlTTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQYXJhbWV0ZXJFbnRpdHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFBhcmFtZXRlckVudGl0eSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RW50aXR5QnlJRChvcmdJRCwgbGF5b3V0SUQsIGVudGl0eUlEKTogUHJvbWlzZTxFbnRpdHlNPiB7XG4gICAgICAgIGxldCBsYXlvdXRNOiBFbnRpdHlNO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGF5b3V0TSA9IGF3YWl0IHRoaXMuZW50aXR5Q29udHJvbGxlci5nZXRFbnRpdHlCeUlEKG9yZ0lELCBsYXlvdXRJRCwgZW50aXR5SUQpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAobGF5b3V0TSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsYXlvdXRNO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVudGl0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRW50aXR5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRFbnRpdGllc0J5UGFyYW1NZXRyaWMob3JnSUQsIHBhcmFtTmFtZSk6IFByb21pc2U8RW50aXR5TVtdPiB7XG4gICAgICAgIGxldCBlbnRpdHlNOiBFbnRpdHlNW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlbnRpdHlNID0gYXdhaXQgdGhpcy5lbnRpdHlDb250cm9sbGVyLmdldEVudGl0aWVzQnlQYXJhbU1ldHJpYyhvcmdJRCwgcGFyYW1OYW1lKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKGVudGl0eU0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50aXR5TTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgRW50aXR5KCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IEVudGl0eSgpXTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==