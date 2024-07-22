import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SystemController {
    constructor(http) {
        this.http = http;
    }
    getSystemInfo() {
        let headers = new HttpHeaders();
        headers = headers.append('skipAuth', '1');
        headers = headers.append('skipSuccessStatus', '1');
        headers = headers.append('skipErrorStatus', '1');
        return this.http.get(`https://ipinfo.io/json`, { headers: headers });
    }
}
SystemController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SystemController, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
SystemController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SystemController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SystemController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29udHJvbGxlci9zeXN0ZW0uY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFDekIsWUFDWSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3hCLENBQUM7SUFFTCxhQUFhO1FBQ1QsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNoQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFakQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSx3QkFBd0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7OzhHQVpRLGdCQUFnQjtrSEFBaEIsZ0JBQWdCLGNBSGIsTUFBTTs0RkFHVCxnQkFBZ0I7a0JBSjVCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTeXN0ZW1Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XG4gICAgKSB7IH1cblxuICAgIGdldFN5c3RlbUluZm8oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuYXBwZW5kKCdza2lwQXV0aCcsICcxJyk7XG4gICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLmFwcGVuZCgnc2tpcFN1Y2Nlc3NTdGF0dXMnLCAnMScpO1xuICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5hcHBlbmQoJ3NraXBFcnJvclN0YXR1cycsICcxJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PihgaHR0cHM6Ly9pcGluZm8uaW8vanNvbmAsIHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB9XG59XG4iXX0=