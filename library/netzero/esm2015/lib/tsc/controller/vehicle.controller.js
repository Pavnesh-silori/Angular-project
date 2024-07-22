import { Injectable, Inject } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class VehicleController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    createVehicle(orgID, value) {
        return this.http.post(`${this.environment.COMMON_API_URL}organizations/${orgID}/vehicles`, value);
    }
    createVehicleForEmployee(orgID, employeeID, value) {
        return this.http.post(`${this.environment.COMMON_API_URL}organizations/${orgID}/employees/${employeeID}/vehicles`, value);
    }
    getVehicleByPage(pageNo, pazeSize, orgId, filterArr) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pazeSize);
        filterArr.forEach(filter => params = params.append('filter', filter));
        return this.http.get(`${this.environment.COMMON_API_URL}organizations/${orgId}/vehicles`, { params: params });
    }
    getVehicleByID(orgID, vehicleID) {
        return this.http.get(`${this.environment.COMMON_API_URL}organizations/${orgID}/${vehicleID}`);
    }
    updateVehicle(orgID, value, vehicleID) {
        return this.http.patch(`${this.environment.COMMON_API_URL}organizations/${orgID}/vehicles/${vehicleID}`, value);
    }
    vehicleExist(orgID, vehicleNumber) {
        return this.http.get(`${this.environment.COMMON_API_URL}organizations/${orgID}/vehicles/exit-vehicle/${vehicleNumber}`);
    }
    getVehicleType() {
        return this.http.get(`${this.environment.COMMON_API_URL}vehicle-type`);
    }
    getVehicleCategory() {
        return this.http.get(`${this.environment.COMMON_API_URL}vehicle-category`);
    }
    getEngineStroke() {
        return this.http.get(`${this.environment.COMMON_API_URL}engine-stroke`);
    }
    vehicleBulkUpload(orgId, file) {
        return this.http.post(`${this.environment.COMMON_API_URL}organizations/${orgId}/vehicles/bulk-upload`, file);
    }
    getVehicleByTypeID(orgID, vehicleTypeID) {
        let params = new HttpParams();
        params = params.append('vehicleTypeId', vehicleTypeID);
        return this.http.get(`${this.environment.COMMON_API_URL}organizations/${orgID}/vehicles/all`, { params: params });
    }
    getAllVehicle(orgID) {
        return this.http.get(`${this.environment.COMMON_API_URL}organizations/${orgID}/vehicles/all`);
    }
}
VehicleController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
VehicleController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVoaWNsZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9uZXR6ZXJvL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvdmVoaWNsZS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBUzlELE1BQU0sT0FBTyxpQkFBaUI7SUFFMUIsWUFDWSxJQUFnQixFQUNPLFdBQWdCO1FBRHZDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBSztJQUMvQyxDQUFDO0lBRUwsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsaUJBQWlCLEtBQUssV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUs7UUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxpQkFBaUIsS0FBSyxjQUFjLFVBQVUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxLQUFLLEVBQUUsU0FBUztRQUMvRCxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0s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amVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBWZWhpY2xlQ2F0ZWdvcnlNLCBWZWhpY2xlVHlwZU0sIFZlaGljbGVCeVR5cGVNLCBWZWhpY2xlTSwgVmVoaWNsZVBhZ2VNLCBFbmdpbmVTdHJva2VNIH0gZnJvbSAnLi4vbW9kZWwvdmVoaWNsZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVmVoaWNsZUNvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgQEluamVjdCgnZW52aXJvbm1lbnQnKSBwcml2YXRlIGVudmlyb25tZW50OiBhbnlcbiAgICApIHsgfVxuXG4gICAgY3JlYXRlVmVoaWNsZShvcmdJRCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuZW52aXJvbm1lbnQuQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS92ZWhpY2xlc2AsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVWZWhpY2xlRm9yRW1wbG95ZWUob3JnSUQsIGVtcGxveWVlSUQsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVudmlyb25tZW50LkNPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vZW1wbG95ZWVzLyR7ZW1wbG95ZWVJRH0vdmVoaWNsZXNgLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0VmVoaWNsZUJ5UGFnZShwYWdlTm86IG51bWJlciwgcGF6ZVNpemU6IG51bWJlciwgb3JnSWQsIGZpbHRlckFycik6IE9ic2VydmFibGU8VmVoaWNsZVBhZ2VNPiB7XG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdwYWdlTm8nLCBwYWdlTm8pO1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdwYWdlU2l6ZScsIHBhemVTaXplKTtcbiAgICAgICAgZmlsdGVyQXJyLmZvckVhY2goZmlsdGVyID0+IHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2ZpbHRlcicsIGZpbHRlcikpXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFZlaGljbGVQYWdlTT4oYCR7dGhpcy5lbnZpcm9ubWVudC5DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSWR9L3ZlaGljbGVzYCwgeyBwYXJhbXM6IHBhcmFtcyB9KTtcbiAgICB9XG5cbiAgICBnZXRWZWhpY2xlQnlJRChvcmdJRCwgdmVoaWNsZUlEKTogT2JzZXJ2YWJsZTxWZWhpY2xlTT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxWZWhpY2xlTT4oYCR7dGhpcy5lbnZpcm9ubWVudC5DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9LyR7dmVoaWNsZUlEfWApXG4gICAgfVxuXG4gICAgdXBkYXRlVmVoaWNsZShvcmdJRCwgdmFsdWUsIHZlaGljbGVJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKGAke3RoaXMuZW52aXJvbm1lbnQuQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS92ZWhpY2xlcy8ke3ZlaGljbGVJRH1gLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgdmVoaWNsZUV4aXN0KG9yZ0lELCB2ZWhpY2xlTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW52aXJvbm1lbnQuQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS92ZWhpY2xlcy9leGl0LXZlaGljbGUvJHt2ZWhpY2xlTnVtYmVyfWApXG4gICAgfVxuXG4gICAgZ2V0VmVoaWNsZVR5cGUoKTogT2JzZXJ2YWJsZTxWZWhpY2xlVHlwZU1bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxWZWhpY2xlVHlwZU1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5DT01NT05fQVBJX1VSTH12ZWhpY2xlLXR5cGVgKTtcbiAgICB9XG5cbiAgICBnZXRWZWhpY2xlQ2F0ZWdvcnkoKTogT2JzZXJ2YWJsZTxWZWhpY2xlQ2F0ZWdvcnlNW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VmVoaWNsZUNhdGVnb3J5TVtdPihgJHt0aGlzLmVudmlyb25tZW50LkNPTU1PTl9BUElfVVJMfXZlaGljbGUtY2F0ZWdvcnlgKTtcbiAgICB9XG5cbiAgICBnZXRFbmdpbmVTdHJva2UoKTogT2JzZXJ2YWJsZTxFbmdpbmVTdHJva2VNW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RW5naW5lU3Ryb2tlTVtdPihgJHt0aGlzLmVudmlyb25tZW50LkNPTU1PTl9BUElfVVJMfWVuZ2luZS1zdHJva2VgKTtcbiAgICB9XG5cbiAgICB2ZWhpY2xlQnVsa1VwbG9hZChvcmdJZCwgZmlsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5lbnZpcm9ubWVudC5DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSWR9L3ZlaGljbGVzL2J1bGstdXBsb2FkYCwgZmlsZSk7XG4gICAgfVxuXG4gICAgZ2V0VmVoaWNsZUJ5VHlwZUlEKG9yZ0lELCB2ZWhpY2xlVHlwZUlEKTpPYnNlcnZhYmxlPFZlaGljbGVCeVR5cGVNW10+IHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3ZlaGljbGVUeXBlSWQnLCB2ZWhpY2xlVHlwZUlEKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxWZWhpY2xlQnlUeXBlTVtdPihgJHt0aGlzLmVudmlyb25tZW50LkNPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vdmVoaWNsZXMvYWxsYCwge3BhcmFtczpwYXJhbXN9KTtcbiAgICB9XG5cbiAgICBnZXRBbGxWZWhpY2xlKG9yZ0lEKTpPYnNlcnZhYmxlPFZlaGljbGVCeVR5cGVNW10+e1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxWZWhpY2xlQnlUeXBlTVtdPihgJHt0aGlzLmVudmlyb25tZW50LkNPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vdmVoaWNsZXMvYWxsYCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==