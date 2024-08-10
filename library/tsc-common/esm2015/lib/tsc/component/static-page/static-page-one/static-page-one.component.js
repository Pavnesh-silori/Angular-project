import { Component } from '@angular/core';
import { StaticPageOne } from '../../../model/static-page-one.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
export class StaticPageOneComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.data = new StaticPageOne();
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.data = data.data;
        });
    }
}
StaticPageOneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageOneComponent, deps: [{ token: i1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
StaticPageOneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: StaticPageOneComponent, selector: "lib-static-page-one", ngImport: i0, template: "<div [ngClass]=\"{'container': !data.containsHeaderFooter}\">\n    <div class=\"card main-card centerAlignHorizontal cardOverwrite\" [class]=\"data.cardClass\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 p-5 centerAlign\">\n                <img [class]=\"data.imgClass\" [src]=\"data.imgPath\" [alt]=\"data.imgAlt\" />\n            </div>\n\n            <div class=\"col-sm-6 p-5 centerAlign\">\n                <div class=\"card-body\">\n                    <div class=\"fs-4 fw-bold\">\n                        {{ data.title }}\n                    </div>\n                    <br />\n                    <p class=\"d-flex align-items-center\" [innerHTML]=\"data.body\">\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n", directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageOneComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-static-page-one',
                    templateUrl: './static-page-one.component.html',
                    styleUrls: []
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLXBhZ2Utb25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9jb21wb25lbnQvc3RhdGljLXBhZ2Uvc3RhdGljLXBhZ2Utb25lL3N0YXRpYy1wYWdlLW9uZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L3N0YXRpYy1wYWdlL3N0YXRpYy1wYWdlLW9uZS9zdGF0aWMtcGFnZS1vbmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFRckUsTUFBTSxPQUFPLHNCQUFzQjtJQUcvQixZQUNZLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUgxQyxTQUFJLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUl2QixDQUFDO0lBRUwsUUFBUTtRQUNKLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztvSEFYUSxzQkFBc0I7d0dBQXRCLHNCQUFzQiwyRENYbkMsbXlCQW9CQTs0RkRUYSxzQkFBc0I7a0JBTmxDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsV0FBVyxFQUFFLGtDQUFrQztvQkFDL0MsU0FBUyxFQUFFLEVBQUU7aUJBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3RhdGljUGFnZU9uZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3N0YXRpYy1wYWdlLW9uZS5tb2RlbCc7IFxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1zdGF0aWMtcGFnZS1vbmUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zdGF0aWMtcGFnZS1vbmUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdGF0aWNQYWdlT25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBkYXRhID0gbmV3IFN0YXRpY1BhZ2VPbmUoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGEuZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iLCI8ZGl2IFtuZ0NsYXNzXT1cInsnY29udGFpbmVyJzogIWRhdGEuY29udGFpbnNIZWFkZXJGb290ZXJ9XCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQgbWFpbi1jYXJkIGNlbnRlckFsaWduSG9yaXpvbnRhbCBjYXJkT3ZlcndyaXRlXCIgW2NsYXNzXT1cImRhdGEuY2FyZENsYXNzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBwLTUgY2VudGVyQWxpZ25cIj5cbiAgICAgICAgICAgICAgICA8aW1nIFtjbGFzc109XCJkYXRhLmltZ0NsYXNzXCIgW3NyY109XCJkYXRhLmltZ1BhdGhcIiBbYWx0XT1cImRhdGEuaW1nQWx0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgcC01IGNlbnRlckFsaWduXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnMtNCBmdy1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBkYXRhLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCIgW2lubmVySFRNTF09XCJkYXRhLmJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=