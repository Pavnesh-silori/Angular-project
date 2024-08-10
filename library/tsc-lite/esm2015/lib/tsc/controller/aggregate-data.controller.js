import { Inject, Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AggregateDataController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getAggregateData(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/data/aggregate`, requestBody, { headers: headers });
        // return this.http.get(`${this.environment.MOCK_SERVER}aggregate-data`);
    }
    getWaterConsumption(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/water-consumption`, requestBody, { headers: headers });
        // return this.http.get(`${this.environment.MOCK_SERVER}aggregate-data`);
    }
}
AggregateDataController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregateDataController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
AggregateDataController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregateDataController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregateDataController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWRhdGEuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29udHJvbGxlci9hZ2dyZWdhdGUtZGF0YS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBSy9ELE1BQU0sT0FBTyx1QkFBdUI7SUFFaEMsWUFDWSxJQUFnQixFQUNPLFdBQWdCO1FBRHZDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBSztJQUMvQyxDQUFDO0lBRUwsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFdBQVc7UUFDL0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXpELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN4SSx5RUFBeUU7SUFDN0UsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQUssRUFBRSxXQUFXO1FBQ2xDLElBQUksT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV6RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssb0JBQW9CLEVBQUUsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDM0kseUVBQXlFO0lBQzdFLENBQUM7O3FIQW5CUSx1QkFBdUIsNENBSXBCLGFBQWE7eUhBSmhCLHVCQUF1QixjQUZwQixNQUFNOzRGQUVULHVCQUF1QjtrQkFIbkMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQUtRLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlRGF0YUNvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgQEluamVjdCgnZW52aXJvbm1lbnQnKSBwcml2YXRlIGVudmlyb25tZW50OiBhbnlcbiAgICApIHsgfVxuXG4gICAgZ2V0QWdncmVnYXRlRGF0YShvcmdJRCwgcmVxdWVzdEJvZHkpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ3NraXBMb2FkZXInLCAnWUVTJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vZGF0YS9hZ2dyZWdhdGVgLCByZXF1ZXN0Qm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmVudmlyb25tZW50Lk1PQ0tfU0VSVkVSfWFnZ3JlZ2F0ZS1kYXRhYCk7XG4gICAgfVxuXG4gICAgZ2V0V2F0ZXJDb25zdW1wdGlvbihvcmdJRCwgcmVxdWVzdEJvZHkpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ3NraXBMb2FkZXInLCAnWUVTJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vd2F0ZXItY29uc3VtcHRpb25gLCByZXF1ZXN0Qm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmVudmlyb25tZW50Lk1PQ0tfU0VSVkVSfWFnZ3JlZ2F0ZS1kYXRhYCk7XG4gICAgfVxuXG59XG4iXX0=