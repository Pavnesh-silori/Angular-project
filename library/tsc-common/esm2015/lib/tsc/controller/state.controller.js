import { HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class StateController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getState(countryCode) {
        let headers = new HttpHeaders().set('skipAuth', '1');
        return this.http.get(`${this.environment.ORGANIZATION_PUBLIC_API_URL}states/${countryCode}`, { headers: headers });
    }
}
StateController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StateController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
StateController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StateController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StateController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9jb250cm9sbGVyL3N0YXRlLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPbkQsTUFBTSxPQUFPLGVBQWU7SUFDeEIsWUFDWSxJQUFnQixFQUNPLFdBQWdCO1FBRHZDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBSztJQUMvQyxDQUFDO0lBRUwsUUFBUSxDQUFDLFdBQVc7UUFDaEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLDJCQUEyQixVQUFVLFdBQVcsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDakksQ0FBQzs7NkdBVFEsZUFBZSw0Q0FHWixhQUFhO2lIQUhoQixlQUFlLGNBSFosTUFBTTs0RkFHVCxlQUFlO2tCQUozQixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7MEJBS1EsTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1N0YXRlTX0gZnJvbSAnLi4vbW9kZWwvc3RhdGUubW9kZWwnXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdGF0ZUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55XG4gICAgKSB7IH1cblxuICAgIGdldFN0YXRlKGNvdW50cnlDb2RlKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdza2lwQXV0aCcsICcxJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFN0YXRlTVtdPihgJHt0aGlzLmVudmlyb25tZW50Lk9SR0FOSVpBVElPTl9QVUJMSUNfQVBJX1VSTH1zdGF0ZXMvJHtjb3VudHJ5Q29kZX1gLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgfVxuICBcbn0iXX0=