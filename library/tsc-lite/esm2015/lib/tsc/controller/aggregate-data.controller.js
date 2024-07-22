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
    }
    getMeterAggregateDataForReport(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/meter-data`, requestBody, { headers: headers });
    }
    getDeviceAggregateData(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/data/aggregate`, requestBody, { headers: headers });
    }
    getCumulativeConsumption(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumption`, requestBody, { headers: headers });
    }
    getEntityParameterData(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entity/parameter-data`, requestBody, { headers: headers });
    }
    getAvoidedEmissionData(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/avoided-emissions`, requestBody, { headers: headers });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWRhdGEuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29udHJvbGxlci9hZ2dyZWdhdGUtZGF0YS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBUy9ELE1BQU0sT0FBTyx1QkFBdUI7SUFFaEMsWUFDWSxJQUFnQixFQUNPLFdBQWdCO1FBRHZDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBSztJQUMvQyxDQUFDO0lBRUwsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFdBQVc7UUFDL0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXpELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1SSxDQUFDO0lBRUQsOEJBQThCLENBQUMsS0FBSyxFQUFFLFdBQVc7UUFDN0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXpELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxhQUFhLEVBQUUsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7SUFDckosQ0FBQztJQUVELHNCQUFzQixDQUFDLEtBQUssRUFBRSxXQUFXO1FBQ3JDLElBQUksT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV6RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUsseUJBQXlCLEVBQUUsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7SUFDbkosQ0FBQztJQUVELHdCQUF3QixDQUFDLEtBQUssRUFBRSxXQUFXO1FBQ3ZDLElBQUksT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV6RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssY0FBYyxFQUFFLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3pJLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsV0FBVztRQUNyQyxJQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFekQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLHdCQUF3QixFQUFFLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ25KLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsV0FBVztRQUNyQyxJQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFekQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLG9CQUFvQixFQUFFLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQy9JLENBQUM7O3FIQXpDUSx1QkFBdUIsNENBSXBCLGFBQWE7eUhBSmhCLHVCQUF1QixjQUZwQixNQUFNOzRGQUVULHVCQUF1QjtrQkFIbkMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQUtRLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTWV0ZXJEYXRhSSB9IGZyb20gJy4uL21vZGVsL2FnZ3JlZ2F0ZS1kYXRhLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGVEYXRhQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueVxuICAgICkgeyB9XG5cbiAgICBnZXRBZ2dyZWdhdGVEYXRhKG9yZ0lELCByZXF1ZXN0Qm9keSkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnc2tpcExvYWRlcicsICdZRVMnKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9kYXRhL2FnZ3JlZ2F0ZWAsIHJlcXVlc3RCb2R5LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgfVxuXG4gICAgZ2V0TWV0ZXJBZ2dyZWdhdGVEYXRhRm9yUmVwb3J0KG9yZ0lELCByZXF1ZXN0Qm9keSk6IE9ic2VydmFibGU8TWV0ZXJEYXRhSVtdPiB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdza2lwTG9hZGVyJywgJ1lFUycpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxNZXRlckRhdGFJW10+KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vbWV0ZXItZGF0YWAsIHJlcXVlc3RCb2R5LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICB9XG5cbiAgICBnZXREZXZpY2VBZ2dyZWdhdGVEYXRhKG9yZ0lELCByZXF1ZXN0Qm9keSkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnc2tpcExvYWRlcicsICdZRVMnKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9kZXZpY2VzL2RhdGEvYWdncmVnYXRlYCwgcmVxdWVzdEJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgIH1cblxuICAgIGdldEN1bXVsYXRpdmVDb25zdW1wdGlvbihvcmdJRCwgcmVxdWVzdEJvZHkpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ3NraXBMb2FkZXInLCAnWUVTJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vY29uc3VtcHRpb25gLCByZXF1ZXN0Qm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIH1cblxuICAgIGdldEVudGl0eVBhcmFtZXRlckRhdGEob3JnSUQsIHJlcXVlc3RCb2R5KSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdza2lwTG9hZGVyJywgJ1lFUycpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2VudGl0eS9wYXJhbWV0ZXItZGF0YWAsIHJlcXVlc3RCb2R5LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgfVxuXG4gICAgZ2V0QXZvaWRlZEVtaXNzaW9uRGF0YShvcmdJRCwgcmVxdWVzdEJvZHkpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ3NraXBMb2FkZXInLCAnWUVTJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vYXZvaWRlZC1lbWlzc2lvbnNgLCByZXF1ZXN0Qm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIH1cblxufVxuIl19