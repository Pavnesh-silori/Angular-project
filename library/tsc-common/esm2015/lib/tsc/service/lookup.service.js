import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../controller/lookup.controller";
export class LookupService {
    constructor(lookupController) {
        this.lookupController = lookupController;
    }
    getLookup(baseUrl, lookup) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let lookupM = yield this.lookupController.getLookupValue(baseUrl, lookup).toPromise();
                if (lookupM) {
                    return lookupM;
                }
            }
            catch (error) {
                console.error('Error -', error);
            }
            return [];
        });
    }
}
LookupService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LookupService, deps: [{ token: i1.LookupController }], target: i0.ɵɵFactoryTarget.Injectable });
LookupService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LookupService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LookupService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.LookupController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9va3VwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2Mvc2VydmljZS9sb29rdXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUTNDLE1BQU0sT0FBTyxhQUFhO0lBRXRCLFlBQ1ksZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDMUMsQ0FBQztJQUVDLFNBQVMsQ0FBQyxPQUFlLEVBQUUsTUFBd0I7O1lBQ3JELElBQUk7Z0JBQ0EsSUFBSSxPQUFPLEdBQW1CLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3RHLElBQUksT0FBTyxFQUFFO29CQUNULE9BQU8sT0FBTyxDQUFDO2lCQUNsQjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDbkM7WUFFRCxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7S0FBQTs7MkdBakJRLGFBQWE7K0dBQWIsYUFBYSxjQUZWLE1BQU07NEZBRVQsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgTG9va3VwQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVyL2xvb2t1cC5jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBMb29rdXBSZXF1ZXN0TSwgTG9va3VwVmFsdWVNIH0gZnJvbSBcIi4uL21vZGVsL2xvb2t1cC5tb2RlbFwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvb2t1cFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbG9va3VwQ29udHJvbGxlcjogTG9va3VwQ29udHJvbGxlcixcbiAgICApIHsgfVxuXG4gICAgYXN5bmMgZ2V0TG9va3VwKGJhc2VVcmw6IHN0cmluZywgbG9va3VwOiBMb29rdXBSZXF1ZXN0TVtdKTogUHJvbWlzZTxMb29rdXBWYWx1ZU1bXT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGxvb2t1cE06IExvb2t1cFZhbHVlTVtdID0gYXdhaXQgdGhpcy5sb29rdXBDb250cm9sbGVyLmdldExvb2t1cFZhbHVlKGJhc2VVcmwsIGxvb2t1cCkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICBpZiAobG9va3VwTSkgeyBcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9va3VwTTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn0iXX0=