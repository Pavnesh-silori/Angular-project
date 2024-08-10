import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/material/tabs";
import * as i3 from "@angular/common";
export class ParameterTabComponent {
    constructor(router) {
        this.router = router;
        this.tab = [];
    }
    ngOnInit() {
        this.tab = [
            {
                icon: 'stacked_line_chart',
                label: 'By Entity',
                routerLink: '/dashboard/all-parameters',
            },
            {
                icon: 'show_chart',
                label: 'By parameter',
                routerLink: '/dashboard/single-parameter',
            }
        ];
        this.setActiveLink();
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.setActiveLink();
            }
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
ParameterTabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterTabComponent, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
ParameterTabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParameterTabComponent, selector: "lib-tab", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Parameter Dashboard</div>\n        </div>\n    </div>\n\n    <nav mat-tab-nav-bar>\n        <ng-container *ngFor=\"let tabs of tab; let i = index;\">\n            <a mat-tab-link [routerLink]=\"tabs.routerLink\" (click)=\"activeLink = tabs.routerLink\"\n                [active]=\"activeLink == tabs.routerLink\">\n                <div class=\"d-flex align-items-center\">\n                    <span class=\"material-symbols-outlined me-2\">\n                        {{ tabs.icon }}\n                    </span>\n                    {{ tabs.label }}\n                </div>\n            </a>\n        </ng-container>\n    </nav>\n    <router-outlet></router-outlet>\n\n</div>", components: [{ type: i2.MatTabNav, selector: "[mat-tab-nav-bar]", inputs: ["color"], exportAs: ["matTabNavBar", "matTabNav"] }], directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i2.MatTabLink, selector: "[mat-tab-link], [matTabLink]", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matTabLink"] }, { type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterTabComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-tab',
                    templateUrl: './tab.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2Rhc2hib2FyZC9wYXJhbWV0ZXIvdGFiL3RhYi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9kYXNoYm9hcmQvcGFyYW1ldGVyL3RhYi90YWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsYUFBYSxFQUFVLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBU3hELE1BQU0sT0FBTyxxQkFBcUI7SUFPOUIsWUFDWSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUgxQixRQUFHLEdBQVEsRUFBRSxDQUFDO0lBSVYsQ0FBQztJQUVMLFFBQVE7UUFDSixJQUFJLENBQUMsR0FBRyxHQUFHO1lBQ1A7Z0JBQ0ksSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLFVBQVUsRUFBRSwyQkFBMkI7YUFDMUM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLFVBQVUsRUFBRSw2QkFBNkI7YUFDNUM7U0FDSixDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2pDLElBQUksR0FBRyxZQUFZLGFBQWEsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3hCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsYUFBYTtRQUNULElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRTNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztnQkFDekMsTUFBTTthQUNUO1NBQ0o7SUFDTCxDQUFDOzttSEEzQ1EscUJBQXFCO3VHQUFyQixxQkFBcUIsK0NDWGxDLCswQkFzQk07NEZEWE8scUJBQXFCO2tCQVBqQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO29CQUNuQixXQUFXLEVBQUUsc0JBQXNCO29CQUNuQyxNQUFNLEVBQUUsRUFDUDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLXRhYicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlclRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBvcmdJRDogYW55O1xuICAgIGFjdGl2ZUxpbms6IGFueTtcblxuICAgIHRhYjogYW55ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFiID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGljb246ICdzdGFja2VkX2xpbmVfY2hhcnQnLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnQnkgRW50aXR5JyxcbiAgICAgICAgICAgICAgICByb3V0ZXJMaW5rOiAnL2Rhc2hib2FyZC9hbGwtcGFyYW1ldGVycycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGljb246ICdzaG93X2NoYXJ0JyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0J5IHBhcmFtZXRlcicsXG4gICAgICAgICAgICAgICAgcm91dGVyTGluazogJy9kYXNoYm9hcmQvc2luZ2xlLXBhcmFtZXRlcicsXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5zZXRBY3RpdmVMaW5rKCk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgodmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlTGluaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVMaW5rKCk6IHZvaWQge1xuICAgICAgICBsZXQgY3VycmVudFBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYXRoLmluY2x1ZGVzKHRoaXMudGFiW2ldLnJvdXRlckxpbmspKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVMaW5rID0gdGhpcy50YWJbaV0ucm91dGVyTGluaztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmQgbWFpbi1jYXJkIGNhcmRPdmVyd3JpdGUgaDEwMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlckxlZnRDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlVGl0bGVcIj5QYXJhbWV0ZXIgRGFzaGJvYXJkPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPG5hdiBtYXQtdGFiLW5hdi1iYXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHRhYnMgb2YgdGFiOyBsZXQgaSA9IGluZGV4O1wiPlxuICAgICAgICAgICAgPGEgbWF0LXRhYi1saW5rIFtyb3V0ZXJMaW5rXT1cInRhYnMucm91dGVyTGlua1wiIChjbGljayk9XCJhY3RpdmVMaW5rID0gdGFicy5yb3V0ZXJMaW5rXCJcbiAgICAgICAgICAgICAgICBbYWN0aXZlXT1cImFjdGl2ZUxpbmsgPT0gdGFicy5yb3V0ZXJMaW5rXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIG1lLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRhYnMuaWNvbiB9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHt7IHRhYnMubGFiZWwgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uYXY+XG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuXG48L2Rpdj4iXX0=