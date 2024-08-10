import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@library/storage-service";
// /tsc-library/
export class Interceptor {
    constructor(storageService) {
        this.storageService = storageService;
    }
    intercept(request, next) {
        let layoutID = this.storageService.getStorage('layoutID');
        request = request.clone({
            setHeaders: { layoutID: `${layoutID}` }
        });
        return next.handle(request).pipe();
    }
}
Interceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Interceptor, deps: [{ token: i1.StorageService }], target: i0.ɵɵFactoryTarget.Injectable });
Interceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Interceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Interceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.StorageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2ludGVyY2VwdG9yL2ludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU8zQyxnQkFBZ0I7QUFJaEIsTUFBTSxPQUFPLFdBQVc7SUFFcEIsWUFDWSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDdEMsQ0FBQztJQUVMLFNBQVMsQ0FBQyxPQUF5QixFQUFFLElBQWlCO1FBQ2xELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTFELE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3BCLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLFFBQVEsRUFBRSxFQUFFO1NBQzFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQy9CLENBQUE7SUFDTCxDQUFDOzt5R0FmUSxXQUFXOzZHQUFYLFdBQVc7NEZBQVgsV0FBVztrQkFGdkIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIkBsaWJyYXJ5L3N0b3JhZ2Utc2VydmljZVwiO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgKSB7IH1cblxuICAgIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICAgICAgbGV0IGxheW91dElEID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdsYXlvdXRJRCcpO1xuXG4gICAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgICAgIHNldEhlYWRlcnM6IHsgbGF5b3V0SUQ6IGAke2xheW91dElEfWAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgICAgKVxuICAgIH1cblxufVxuIl19