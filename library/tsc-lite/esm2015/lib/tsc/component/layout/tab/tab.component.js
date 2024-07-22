import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Layout } from '@library/layout-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@library/storage-service";
import * as i3 from "@library/layout-service";
import * as i4 from "@angular/material/tabs";
import * as i5 from "@angular/common";
// /tsc-library/
export class TabComponent {
    constructor(router, activatedRoute, storageService, layoutService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.layoutService = layoutService;
        this.layoutM = new Layout();
        this.tab = [];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.paramMap.subscribe((params) => {
            this.layoutID = params.get('layoutID');
            this.getLayoutByID();
            this.tab = [
                {
                    icon: 'list',
                    label: 'List Representation',
                    routerLink: `/layout/${this.layoutID}/list`
                },
                {
                    icon: 'grid_view',
                    label: 'Chart Representation',
                    routerLink: `/layout/${this.layoutID}/chart`
                }
            ];
            this.setActiveLink();
        });
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.setActiveLink();
            }
        });
    }
    getLayoutByID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.layoutM = (yield this.layoutService.getLayoutByID(this.orgID, this.layoutID));
        });
    }
    setActiveLink() {
        let currentPath = window.location.pathname;
        for (let i = 0; i < this.tab.length; i++) {
            if (currentPath.includes(this.tab[i].routerLink)) {
                this.activeLink = this.tab[i].routerLink;
                break;
            }
        }
    }
}
TabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TabComponent, deps: [{ token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2.StorageService }, { token: i3.LayoutService }], target: i0.ɵɵFactoryTarget.Component });
TabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TabComponent, selector: "app-tab", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Layout <span *ngIf=\"layoutM\">\n                    - ({{ layoutM?.name }})\n                </span></div>\n        </div>\n    </div>\n\n    <nav mat-tab-nav-bar>\n        <ng-container *ngFor=\"let tabs of tab; let i = index;\">\n            <a mat-tab-link [routerLink]=\"tabs.routerLink\" (click)=\"activeLink = tabs.routerLink\"\n                [active]=\"activeLink == tabs.routerLink\">\n                <div class=\"d-flex align-items-center\">\n                    <span class=\"material-symbols-outlined me-2\">\n                        {{ tabs.icon }}\n                    </span>\n                    {{ tabs.label }}\n                </div>\n            </a>\n        </ng-container>\n    </nav>\n    <router-outlet></router-outlet>\n\n</div>", components: [{ type: i4.MatTabNav, selector: "[mat-tab-nav-bar]", inputs: ["color"], exportAs: ["matTabNavBar", "matTabNav"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i4.MatTabLink, selector: "[mat-tab-link], [matTabLink]", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matTabLink"] }, { type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TabComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-tab',
                    templateUrl: './tab.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.StorageService }, { type: i3.LayoutService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2xheW91dC90YWIvdGFiLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2xheW91dC90YWIvdGFiLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBa0IsYUFBYSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFJeEUsT0FBTyxFQUFFLE1BQU0sRUFBMEIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztBQUN6RSxnQkFBZ0I7QUFRaEIsTUFBTSxPQUFPLFlBQVk7SUFVckIsWUFDWSxNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsYUFBNEI7UUFINUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFSeEMsWUFBTyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFFdkIsUUFBRyxHQUFRLEVBQUUsQ0FBQztJQU9WLENBQUM7SUFFTCxRQUFRO1FBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFdkMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRXJCLElBQUksQ0FBQyxHQUFHLEdBQUc7Z0JBQ1A7b0JBQ0ksSUFBSSxFQUFFLE1BQU07b0JBQ1osS0FBSyxFQUFFLHFCQUFxQjtvQkFDNUIsVUFBVSxFQUFFLFdBQVcsSUFBSSxDQUFDLFFBQVEsT0FBTztpQkFDOUM7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLEtBQUssRUFBRSxzQkFBc0I7b0JBQzdCLFVBQVUsRUFBRSxXQUFXLElBQUksQ0FBQyxRQUFRLFFBQVE7aUJBQy9DO2FBQ0osQ0FBQztZQUVGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2pDLElBQUksR0FBRyxZQUFZLGFBQWEsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3hCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUssYUFBYTs7WUFDZixJQUFJLENBQUMsT0FBTyxJQUFZLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztRQUM5RixDQUFDO0tBQUE7SUFFRCxhQUFhO1FBQ1QsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFFM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUN6QyxNQUFNO2FBQ1Q7U0FDSjtJQUNMLENBQUM7OzBHQTdEUSxZQUFZOzhGQUFaLFlBQVksK0NDZHpCLGk2QkF3Qk07NEZEVk8sWUFBWTtrQkFOeEIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsV0FBVyxFQUFFLHNCQUFzQjtvQkFDbkMsTUFBTSxFQUFFLEVBQ1A7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3N0b3JhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXQsIExheW91dE0sIExheW91dFNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS9sYXlvdXQtc2VydmljZSc7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXRhYicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgb3JnSUQ6IGFueTtcbiAgICBsYXlvdXRJRDogYW55O1xuICAgIGFjdGl2ZUxpbms6IGFueTtcblxuICAgIGxheW91dE0gPSBuZXcgTGF5b3V0KCk7XG5cbiAgICB0YWI6IGFueSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsYXlvdXRTZXJ2aWNlOiBMYXlvdXRTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9yZ0lEID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdjdXJyZW50T3JnSUQnKTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxheW91dElEID0gcGFyYW1zLmdldCgnbGF5b3V0SUQnKTtcblxuICAgICAgICAgICAgdGhpcy5nZXRMYXlvdXRCeUlEKCk7XG5cbiAgICAgICAgICAgIHRoaXMudGFiID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0xpc3QgUmVwcmVzZW50YXRpb24nLFxuICAgICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rOiBgL2xheW91dC8ke3RoaXMubGF5b3V0SUR9L2xpc3RgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdncmlkX3ZpZXcnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NoYXJ0IFJlcHJlc2VudGF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyTGluazogYC9sYXlvdXQvJHt0aGlzLmxheW91dElEfS9jaGFydGBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZUxpbmsoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgodmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlTGluaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRMYXlvdXRCeUlEKCkge1xuICAgICAgICB0aGlzLmxheW91dE0gPSA8TGF5b3V0TT5hd2FpdCB0aGlzLmxheW91dFNlcnZpY2UuZ2V0TGF5b3V0QnlJRCh0aGlzLm9yZ0lELCB0aGlzLmxheW91dElEKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVMaW5rKCk6IHZvaWQge1xuICAgICAgICBsZXQgY3VycmVudFBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYXRoLmluY2x1ZGVzKHRoaXMudGFiW2ldLnJvdXRlckxpbmspKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVMaW5rID0gdGhpcy50YWJbaV0ucm91dGVyTGluaztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmQgbWFpbi1jYXJkIGNhcmRPdmVyd3JpdGUgaDEwMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlckxlZnRDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlVGl0bGVcIj5MYXlvdXQgPHNwYW4gKm5nSWY9XCJsYXlvdXRNXCI+XG4gICAgICAgICAgICAgICAgICAgIC0gKHt7IGxheW91dE0/Lm5hbWUgfX0pXG4gICAgICAgICAgICAgICAgPC9zcGFuPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxuYXYgbWF0LXRhYi1uYXYtYmFyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB0YWJzIG9mIHRhYjsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICAgICAgICAgIDxhIG1hdC10YWItbGluayBbcm91dGVyTGlua109XCJ0YWJzLnJvdXRlckxpbmtcIiAoY2xpY2spPVwiYWN0aXZlTGluayA9IHRhYnMucm91dGVyTGlua1wiXG4gICAgICAgICAgICAgICAgW2FjdGl2ZV09XCJhY3RpdmVMaW5rID09IHRhYnMucm91dGVyTGlua1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBtZS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB0YWJzLmljb24gfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7eyB0YWJzLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmF2PlxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cblxuPC9kaXY+Il19