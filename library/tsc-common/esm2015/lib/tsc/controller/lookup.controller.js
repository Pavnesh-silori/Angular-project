import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class LookupController {
    constructor(http) {
        this.http = http;
    }
    getLookupValue(baseUrl, lookup) {
        return this.http.post(`${baseUrl}lookup`, lookup);
    }
}
LookupController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LookupController, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
LookupController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LookupController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LookupController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9va3VwLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29udHJvbGxlci9sb29rdXAuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPM0MsTUFBTSxPQUFPLGdCQUFnQjtJQUV6QixZQUNZLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFDeEIsQ0FBQztJQUVMLGNBQWMsQ0FBQyxPQUFlLEVBQUUsTUFBd0I7UUFDcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBaUIsR0FBRyxPQUFPLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs4R0FSUSxnQkFBZ0I7a0hBQWhCLGdCQUFnQixjQUZiLE1BQU07NEZBRVQsZ0JBQWdCO2tCQUg1QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IExvb2t1cFJlcXVlc3RNLCBMb29rdXBWYWx1ZU0gfSBmcm9tIFwiLi4vbW9kZWwvbG9va3VwLm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9va3VwQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICkgeyB9XG5cbiAgICBnZXRMb29rdXBWYWx1ZShiYXNlVXJsOiBzdHJpbmcsIGxvb2t1cDogTG9va3VwUmVxdWVzdE1bXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8TG9va3VwVmFsdWVNW10+KGAke2Jhc2VVcmx9bG9va3VwYCwgbG9va3VwKTtcbiAgICB9XG5cbn0iXX0=