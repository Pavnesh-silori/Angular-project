import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import { Layout } from '@library/layout-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@library/layout-service";
import * as i3 from "@library/organization-service";
import * as i4 from "@library/storage-service";
// /tsc-library/
export class SuccessComponent {
    constructor(activatedRoute, router, layoutService, organizationService, storageService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.layoutService = layoutService;
        this.organizationService = organizationService;
        this.storageService = storageService;
        this.redirectUrl = '/';
        this.noTimezone = './timezone-not-found';
        this.layoutM = [new Layout()];
        this.timezone = null;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(queryParam => {
            if (queryParam.redirectUrl) {
                this.redirectUrl = queryParam.redirectUrl;
            }
        });
        // INFO: SOMYA AGRAWAL
        // Clearing layoutID from storage in switch org because previous layoutID remains in local storage even if current org does not have any layout!
        this.storageService.deleteStorage('layoutID');
        this.timeZoneCheck();
    }
    timeZoneCheck() {
        return __awaiter(this, void 0, void 0, function* () {
            this.timezone = (yield this.organizationService.getOrgTimezone());
            if (this.timezone) {
                this.storageService.setStorage('timezone', this.timezone);
                this.getLayoutsByOrgID();
            }
            else {
                this.router.navigate([this.noTimezone]);
            }
        });
    }
    getLayoutsByOrgID() {
        return __awaiter(this, void 0, void 0, function* () {
            let orgID = this.storageService.getStorage('currentOrgID');
            this.layoutM = (yield this.layoutService.getLayoutByOrgID(orgID));
            const defaultLayout = this.layoutM.find(layout => layout.isDefault);
            if (defaultLayout) {
                const defaultLayoutID = defaultLayout.id;
                this.storageService.setStorage('layoutID', defaultLayoutID);
            }
            else {
                console.error('No layout found.');
            }
            this.router.navigate([this.redirectUrl]);
        });
    }
}
SuccessComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SuccessComponent, deps: [{ token: i1.ActivatedRoute }, { token: i1.Router }, { token: i2.LayoutService }, { token: i3.OrganizationService }, { token: i4.StorageService }], target: i0.ɵɵFactoryTarget.Component });
SuccessComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SuccessComponent, selector: "app-success", ngImport: i0, template: "<div class=\"d-flex h-100 justify-content-center align-items-center\">\n    <div class=\"text-center fs-4\"><img class=\"appAuthImg\"\n            src=\"assets/images/application-logo/tsc-with-name.png\" />\n        <br />\n        <br />\n        <span class=\"spinner-border spinner-border-sm text-success\"></span> ..\n    </div>\n</div>\n", styles: [".appAuthImg{height:55px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SuccessComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-success',
                    templateUrl: './success.component.html',
                    styleUrls: ['./success.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.LayoutService }, { type: i3.OrganizationService }, { type: i4.StorageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VjY2Vzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9hdXRob3JpemF0aW9uL3N1Y2Nlc3Mvc3VjY2Vzcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9hdXRob3JpemF0aW9uL3N1Y2Nlc3Mvc3VjY2Vzcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUtsRCxPQUFPLEVBQUUsTUFBTSxFQUEwQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7QUFFekUsZ0JBQWdCO0FBUWhCLE1BQU0sT0FBTyxnQkFBZ0I7SUFNekIsWUFDWSxjQUE4QixFQUM5QixNQUFjLEVBQ2QsYUFBNEIsRUFDNUIsbUJBQXdDLEVBQ3hDLGNBQThCO1FBSjlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFWMUMsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFDMUIsZUFBVSxHQUFXLHNCQUFzQixDQUFDO1FBQzVDLFlBQU8sR0FBRyxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN6QixhQUFRLEdBQVcsSUFBSSxDQUFDO0lBUXBCLENBQUM7SUFFTCxRQUFRO1FBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25ELElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO2FBQzdDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxzQkFBc0I7UUFDdEIsZ0pBQWdKO1FBQ2hKLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUssYUFBYTs7WUFDZixJQUFJLENBQUMsUUFBUSxJQUFXLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxDQUFBLENBQUM7WUFFeEUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzVCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDM0M7UUFDTCxDQUFDO0tBQUE7SUFFSyxpQkFBaUI7O1lBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTNELElBQUksQ0FBQyxPQUFPLElBQWMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFFM0UsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFcEUsSUFBSSxhQUFhLEVBQUU7Z0JBQ2YsTUFBTSxlQUFlLEdBQUcsYUFBYSxDQUFDLEVBQUUsQ0FBQztnQkFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDO2FBQy9EO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUNyQztZQUVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQztLQUFBOzs4R0FyRFEsZ0JBQWdCO2tHQUFoQixnQkFBZ0IsbURDZjdCLHdWQVFBOzRGRE9hLGdCQUFnQjtrQkFONUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsV0FBVyxFQUFFLDBCQUEwQjtvQkFDdkMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7aUJBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS9zdG9yYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0LCBMYXlvdXRNLCBMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvbGF5b3V0LXNlcnZpY2UnO1xuaW1wb3J0IHsgT3JnYW5pemF0aW9uU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L29yZ2FuaXphdGlvbi1zZXJ2aWNlJztcbi8vIC90c2MtbGlicmFyeS9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtc3VjY2VzcycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3N1Y2Nlc3MuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3N1Y2Nlc3MuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFN1Y2Nlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHJlZGlyZWN0VXJsOiBzdHJpbmcgPSAnLyc7XG4gICAgbm9UaW1lem9uZTogc3RyaW5nID0gJy4vdGltZXpvbmUtbm90LWZvdW5kJztcbiAgICBsYXlvdXRNID0gW25ldyBMYXlvdXQoKV07XG4gICAgdGltZXpvbmU6IHN0cmluZyA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgbGF5b3V0U2VydmljZTogTGF5b3V0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBvcmdhbml6YXRpb25TZXJ2aWNlOiBPcmdhbml6YXRpb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocXVlcnlQYXJhbSA9PiB7XG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbS5yZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RVcmwgPSBxdWVyeVBhcmFtLnJlZGlyZWN0VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJTkZPOiBTT01ZQSBBR1JBV0FMXG4gICAgICAgIC8vIENsZWFyaW5nIGxheW91dElEIGZyb20gc3RvcmFnZSBpbiBzd2l0Y2ggb3JnIGJlY2F1c2UgcHJldmlvdXMgbGF5b3V0SUQgcmVtYWlucyBpbiBsb2NhbCBzdG9yYWdlIGV2ZW4gaWYgY3VycmVudCBvcmcgZG9lcyBub3QgaGF2ZSBhbnkgbGF5b3V0IVxuICAgICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmRlbGV0ZVN0b3JhZ2UoJ2xheW91dElEJyk7XG4gICAgICAgIHRoaXMudGltZVpvbmVDaGVjaygpO1xuICAgIH1cblxuICAgIGFzeW5jIHRpbWVab25lQ2hlY2soKSB7XG4gICAgICAgIHRoaXMudGltZXpvbmUgPSA8c3RyaW5nPmF3YWl0IHRoaXMub3JnYW5pemF0aW9uU2VydmljZS5nZXRPcmdUaW1lem9uZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnRpbWV6b25lKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldFN0b3JhZ2UoJ3RpbWV6b25lJywgdGhpcy50aW1lem9uZSk7XG4gICAgICAgICAgICB0aGlzLmdldExheW91dHNCeU9yZ0lEKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5ub1RpbWV6b25lXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRMYXlvdXRzQnlPcmdJRCgpIHtcbiAgICAgICAgbGV0IG9yZ0lEID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdjdXJyZW50T3JnSUQnKTtcblxuICAgICAgICB0aGlzLmxheW91dE0gPSA8TGF5b3V0TVtdPmF3YWl0IHRoaXMubGF5b3V0U2VydmljZS5nZXRMYXlvdXRCeU9yZ0lEKG9yZ0lEKTtcblxuICAgICAgICBjb25zdCBkZWZhdWx0TGF5b3V0ID0gdGhpcy5sYXlvdXRNLmZpbmQobGF5b3V0ID0+IGxheW91dC5pc0RlZmF1bHQpO1xuXG4gICAgICAgIGlmIChkZWZhdWx0TGF5b3V0KSB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0TGF5b3V0SUQgPSBkZWZhdWx0TGF5b3V0LmlkO1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXRTdG9yYWdlKCdsYXlvdXRJRCcsIGRlZmF1bHRMYXlvdXRJRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBsYXlvdXQgZm91bmQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5yZWRpcmVjdFVybF0pO1xuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImQtZmxleCBoLTEwMCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBmcy00XCI+PGltZyBjbGFzcz1cImFwcEF1dGhJbWdcIlxuICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ltYWdlcy9hcHBsaWNhdGlvbi1sb2dvL3RzYy13aXRoLW5hbWUucG5nXCIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtIHRleHQtc3VjY2Vzc1wiPjwvc3Bhbj4gLi5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19