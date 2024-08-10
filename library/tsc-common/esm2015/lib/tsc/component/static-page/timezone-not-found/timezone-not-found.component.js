import { Component, Inject } from '@angular/core';
import { StaticPageOne } from '../../../model/static-page-one.model';
// tsc-library
import { OrgType } from '@library/organization-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@library/storage-service";
import * as i3 from "@angular/common";
// /tsc-library/
export class TimezoneNotFoundComponent {
    constructor(activatedRoute, storageService, environment) {
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.environment = environment;
        this.data = new StaticPageOne();
    }
    ngOnInit() {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.currentOrgType = this.storageService.getStorage('currentOrgType');
        this.token = this.storageService.getStorage('token');
        this.userID = this.storageService.getStorage('userID');
        this.activatedRoute.data.subscribe(data => {
            this.data = data.data;
        });
        if (this.currentOrgType == OrgType.ORGANIZATION) {
            this.redirectUrl = `organization/${this.currentOrgID}/update`;
        }
        else if (this.currentOrgType == OrgType.SITE) {
            this.redirectUrl = `facility/${this.currentOrgID}/update`;
        }
        else {
            this.redirectUrl = `organization/view`;
        }
        this.appRedirectUrl = `${this.environment.ADMIN_URL}login?token=${this.token}&userID=${this.userID}&orgID=${this.rootOrgID}&redirectUrl=${this.redirectUrl}`;
        this.storageService.clearStorage();
    }
}
TimezoneNotFoundComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimezoneNotFoundComponent, deps: [{ token: i1.ActivatedRoute }, { token: i2.StorageService }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Component });
TimezoneNotFoundComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TimezoneNotFoundComponent, selector: "lib-timezone-not-found", ngImport: i0, template: "<div [ngClass]=\"{'container': !data.containsHeaderFooter}\">\n    <div class=\"card main-card centerAlignHorizontal cardOverwrite\" [class]=\"data.cardClass\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 p-5 centerAlign\">\n                <img [class]=\"data.imgClass\" [src]=\"data.imgPath\" [alt]=\"data.imgAlt\" />\n            </div>\n            <div class=\"col-sm-6 p-5 centerAlign\">\n                <div class=\"card-body\">\n                    <div class=\"fs-4 fw-bold\">\n                        {{ data.title }}\n                    </div>\n                    <br />\n                    <p class=\"d-flex align-items-center\" [innerHTML]=\"data.body\">\n                    </p>\n                    <a [href]=\"redirectUrl\">Click here to set timezone.</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>", directives: [{ type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimezoneNotFoundComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-timezone-not-found',
                    templateUrl: './timezone-not-found.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i2.StorageService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUtbm90LWZvdW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9jb21wb25lbnQvc3RhdGljLXBhZ2UvdGltZXpvbmUtbm90LWZvdW5kL3RpbWV6b25lLW5vdC1mb3VuZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L3N0YXRpYy1wYWdlL3RpbWV6b25lLW5vdC1mb3VuZC90aW1lem9uZS1ub3QtZm91bmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXJFLGNBQWM7QUFDZCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBRXhELGdCQUFnQjtBQVFoQixNQUFNLE9BQU8seUJBQXlCO0lBWWxDLFlBQ1ksY0FBOEIsRUFDOUIsY0FBOEIsRUFDUCxXQUFnQjtRQUZ2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ1AsZ0JBQVcsR0FBWCxXQUFXLENBQUs7UUFMbkQsU0FBSSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7SUFNdkIsQ0FBQztJQUVMLFFBQVE7UUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsSUFBSSxDQUFDLFlBQVksU0FBUyxDQUFDO1NBQ2pFO2FBQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLElBQUksQ0FBQyxZQUFZLFNBQVMsQ0FBQztTQUM3RDthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQTtTQUN6QztRQUVELElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsZUFBZSxJQUFJLENBQUMsS0FBSyxXQUFXLElBQUksQ0FBQyxNQUFNLFVBQVUsSUFBSSxDQUFDLFNBQVMsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUU3SixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7O3VIQXhDUSx5QkFBeUIsOEVBZXRCLGFBQWE7MkdBZmhCLHlCQUF5Qiw4RENoQnRDLDgyQkFtQk07NEZESE8seUJBQXlCO2tCQU5yQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFdBQVcsRUFBRSxxQ0FBcUM7b0JBQ2xELE1BQU0sRUFBRSxFQUNQO2lCQUNKOzswQkFnQlEsTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdGF0aWNQYWdlT25lIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvc3RhdGljLXBhZ2Utb25lLm1vZGVsJztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IE9yZ1R5cGUgfSBmcm9tICdAbGlicmFyeS9vcmdhbml6YXRpb24tc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3N0b3JhZ2Utc2VydmljZSc7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLXRpbWV6b25lLW5vdC1mb3VuZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RpbWV6b25lLW5vdC1mb3VuZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaW1lem9uZU5vdEZvdW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHJvb3RPcmdJRDogYW55O1xuICAgIGN1cnJlbnRPcmdJRDogYW55O1xuICAgIGN1cnJlbnRPcmdUeXBlOiBhbnk7XG4gICAgdG9rZW46IHN0cmluZztcbiAgICB1c2VySUQ6IHN0cmluZztcbiAgICByZWRpcmVjdFVybDogYW55O1xuICAgIGFwcFJlZGlyZWN0VXJsOiBzdHJpbmc7XG5cbiAgICBkYXRhID0gbmV3IFN0YXRpY1BhZ2VPbmUoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55XG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvb3RPcmdJRCA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgncm9vdE9yZ0lEJyk7XG4gICAgICAgIHRoaXMuY3VycmVudE9yZ0lEID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdjdXJyZW50T3JnSUQnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50T3JnVHlwZSA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgnY3VycmVudE9yZ1R5cGUnKTtcbiAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgndG9rZW4nKTtcbiAgICAgICAgdGhpcy51c2VySUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ3VzZXJJRCcpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLmRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcmdUeXBlID09IE9yZ1R5cGUuT1JHQU5JWkFUSU9OKSB7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0VXJsID0gYG9yZ2FuaXphdGlvbi8ke3RoaXMuY3VycmVudE9yZ0lEfS91cGRhdGVgO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudE9yZ1R5cGUgPT0gT3JnVHlwZS5TSVRFKSB7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0VXJsID0gYGZhY2lsaXR5LyR7dGhpcy5jdXJyZW50T3JnSUR9L3VwZGF0ZWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0VXJsID0gYG9yZ2FuaXphdGlvbi92aWV3YFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hcHBSZWRpcmVjdFVybCA9IGAke3RoaXMuZW52aXJvbm1lbnQuQURNSU5fVVJMfWxvZ2luP3Rva2VuPSR7dGhpcy50b2tlbn0mdXNlcklEPSR7dGhpcy51c2VySUR9Jm9yZ0lEPSR7dGhpcy5yb290T3JnSUR9JnJlZGlyZWN0VXJsPSR7dGhpcy5yZWRpcmVjdFVybH1gO1xuXG4gICAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UuY2xlYXJTdG9yYWdlKCk7XG4gICAgfVxuXG59XG4iLCI8ZGl2IFtuZ0NsYXNzXT1cInsnY29udGFpbmVyJzogIWRhdGEuY29udGFpbnNIZWFkZXJGb290ZXJ9XCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQgbWFpbi1jYXJkIGNlbnRlckFsaWduSG9yaXpvbnRhbCBjYXJkT3ZlcndyaXRlXCIgW2NsYXNzXT1cImRhdGEuY2FyZENsYXNzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBwLTUgY2VudGVyQWxpZ25cIj5cbiAgICAgICAgICAgICAgICA8aW1nIFtjbGFzc109XCJkYXRhLmltZ0NsYXNzXCIgW3NyY109XCJkYXRhLmltZ1BhdGhcIiBbYWx0XT1cImRhdGEuaW1nQWx0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IHAtNSBjZW50ZXJBbGlnblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZzLTQgZnctYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgZGF0YS50aXRsZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiIFtpbm5lckhUTUxdPVwiZGF0YS5ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGEgW2hyZWZdPVwicmVkaXJlY3RVcmxcIj5DbGljayBoZXJlIHRvIHNldCB0aW1lem9uZS48L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=