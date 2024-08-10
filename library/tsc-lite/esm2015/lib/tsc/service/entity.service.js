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
    getEntityTypeByLayoutID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityTypeM;
            try {
                entityTypeM = yield this.entityController.getEntityTypeByLayoutID(orgID).toPromise();
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
    getEntitiesWithDevices(orgID, layoutID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityDeviceM;
            try {
                entityDeviceM = yield this.entityController.getEntitiesWithDevices(orgID, layoutID, requestBody).toPromise();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL3NlcnZpY2UvZW50aXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBVyxVQUFVLEVBQWUsVUFBVSxFQUFlLE1BQU0sdUJBQXVCLENBQUM7OztBQVExRyxNQUFNLE9BQU8sYUFBYTtJQUV0QixZQUNZLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzFDLENBQUM7SUFFQyxrQkFBa0IsQ0FBQyxLQUFLOztZQUMxQixJQUFJLE9BQWtCLENBQUM7WUFDdkIsSUFBSTtnQkFDQSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRTVFLElBQUksT0FBTyxFQUFFO29CQUNULE9BQU8sT0FBTyxDQUFDO2lCQUNsQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2lCQUN6QjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDekI7UUFDTCxDQUFDO0tBQUE7SUFFSywrQkFBK0IsQ0FBQyxLQUFLLEVBQUUsV0FBVzs7WUFDcEQsSUFBSSxXQUEwQixDQUFDO1lBQy9CLElBQUk7Z0JBQ0EsV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLCtCQUErQixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFMUcsSUFBSSxXQUFXLEVBQUU7b0JBQ2IsT0FBTyxXQUFXLENBQUM7aUJBQ3RCO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7aUJBQzdCO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQzthQUM3QjtRQUNMLENBQUM7S0FBQTtJQUVLLHVCQUF1QixDQUFDLEtBQUs7O1lBQy9CLElBQUksV0FBMEIsQ0FBQztZQUMvQixJQUFJO2dCQUNBLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFckYsSUFBSSxXQUFXLEVBQUU7b0JBQ2IsT0FBTyxXQUFXLENBQUM7aUJBQ3RCO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7aUJBQzdCO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQzthQUM3QjtRQUNMLENBQUM7S0FBQTtJQUVLLHNCQUFzQixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVzs7WUFDckQsSUFBSSxhQUEwQixDQUFDO1lBQy9CLElBQUk7Z0JBQ0EsYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRTdHLElBQUksYUFBYSxFQUFFO29CQUNmLE9BQU8sYUFBYSxDQUFDO2lCQUN4QjtxQkFBTTtvQkFDSCxPQUFPLElBQUksVUFBVSxFQUFFLENBQUM7aUJBQzNCO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxJQUFJLFVBQVUsRUFBRSxDQUFDO2FBQzNCO1FBQ0wsQ0FBQztLQUFBO0lBRUssc0JBQXNCLENBQUMsS0FBSyxFQUFFLFdBQVc7O1lBQzNDLElBQUksT0FBa0IsQ0FBQztZQUN2QixJQUFJO2dCQUNBLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRTdGLElBQUksT0FBTyxFQUFFO29CQUNULE9BQU8sT0FBTyxDQUFDO2lCQUNsQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2lCQUN6QjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDekI7UUFDTCxDQUFDO0tBQUE7OzJHQXBGUSxhQUFhOytHQUFiLGFBQWEsY0FIVixNQUFNOzRGQUdULGFBQWE7a0JBSnpCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFbnRpdHksIEVudGl0eU0sIEVudGl0eVRyZWUsIEVudGl0eVRyZWVNLCBFbnRpdHlUeXBlLCBFbnRpdHlUeXBlTSB9IGZyb20gJy4uL21vZGVsL2VudGl0eS5tb2RlbCc7XG5cbmltcG9ydCB7IEVudGl0eUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVyL2VudGl0eS5jb250cm9sbGVyJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIEVudGl0eVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZW50aXR5Q29udHJvbGxlcjogRW50aXR5Q29udHJvbGxlclxuICAgICkgeyB9XG5cbiAgICBhc3luYyBnZXRFbnRpdGllc0J5T3JnSUQob3JnSUQpOiBQcm9taXNlPEVudGl0eU1bXT4ge1xuICAgICAgICBsZXQgZW50aXR5TTogRW50aXR5TVtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZW50aXR5TSA9IGF3YWl0IHRoaXMuZW50aXR5Q29udHJvbGxlci5nZXRFbnRpdGllc0J5T3JnSUQob3JnSUQpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAoZW50aXR5TSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRpdHlNO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBFbnRpdHkoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgRW50aXR5KCldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RW50aXR5SGllcmFyY2h5QnlQYXJhbWV0ZXJJRChvcmdJRCwgcGFyYW1ldGVySUQpOiBQcm9taXNlPEVudGl0eVRyZWVNW10+IHtcbiAgICAgICAgbGV0IGVudGl0eVRyZWVNOiBFbnRpdHlUcmVlTVtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZW50aXR5VHJlZU0gPSBhd2FpdCB0aGlzLmVudGl0eUNvbnRyb2xsZXIuZ2V0RW50aXR5SGllcmFyY2h5QnlQYXJhbWV0ZXJJRChvcmdJRCwgcGFyYW1ldGVySUQpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAoZW50aXR5VHJlZU0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50aXR5VHJlZU07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IEVudGl0eVRyZWUoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgRW50aXR5VHJlZSgpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEVudGl0eVR5cGVCeUxheW91dElEKG9yZ0lEKTogUHJvbWlzZTxFbnRpdHlUeXBlTVtdPiB7XG4gICAgICAgIGxldCBlbnRpdHlUeXBlTTogRW50aXR5VHlwZU1bXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGVudGl0eVR5cGVNID0gYXdhaXQgdGhpcy5lbnRpdHlDb250cm9sbGVyLmdldEVudGl0eVR5cGVCeUxheW91dElEKG9yZ0lEKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKGVudGl0eVR5cGVNKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudGl0eVR5cGVNO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBFbnRpdHlUeXBlKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IEVudGl0eVR5cGUoKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRFbnRpdGllc1dpdGhEZXZpY2VzKG9yZ0lELCBsYXlvdXRJRCwgcmVxdWVzdEJvZHkpOiBQcm9taXNlPEVudGl0eVRyZWVNPiB7XG4gICAgICAgIGxldCBlbnRpdHlEZXZpY2VNOiBFbnRpdHlUcmVlTTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGVudGl0eURldmljZU0gPSBhd2FpdCB0aGlzLmVudGl0eUNvbnRyb2xsZXIuZ2V0RW50aXRpZXNXaXRoRGV2aWNlcyhvcmdJRCwgbGF5b3V0SUQsIHJlcXVlc3RCb2R5KS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKGVudGl0eURldmljZU0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50aXR5RGV2aWNlTTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFbnRpdHlUcmVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFbnRpdHlUcmVlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRFbnRpdHlCeVBhcmFtZXRlcklEKG9yZ0lELCByZXF1ZXN0Qm9keSk6IFByb21pc2U8RW50aXR5TVtdPiB7XG4gICAgICAgIGxldCBlbnRpdHlNOiBFbnRpdHlNW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlbnRpdHlNID0gYXdhaXQgdGhpcy5lbnRpdHlDb250cm9sbGVyLmdldEVudGl0eUJ5UGFyYW1ldGVySUQob3JnSUQsIHJlcXVlc3RCb2R5KS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKGVudGl0eU0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50aXR5TTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgRW50aXR5KCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IEVudGl0eSgpXTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==