import { Component } from '@angular/core';
import { StaticPageTwo } from '../../../model/static-page-two.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class StaticPageTwoComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.data = new StaticPageTwo();
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.data = data.data;
        });
    }
}
StaticPageTwoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageTwoComponent, deps: [{ token: i1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
StaticPageTwoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: StaticPageTwoComponent, selector: "app-static-page-two", ngImport: i0, template: "<div class=\"d-flex align-items-center justify-content-center position-fixed top-0 start-0 end-0 bottom-0 fs-3\">\n    <p [innerHTML]=\"data.body\"></p>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageTwoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-static-page-two',
                    templateUrl: './static-page-two.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLXBhZ2UtdHdvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9jb21wb25lbnQvc3RhdGljLXBhZ2Uvc3RhdGljLXBhZ2UtdHdvL3N0YXRpYy1wYWdlLXR3by5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L3N0YXRpYy1wYWdlL3N0YXRpYy1wYWdlLXR3by9zdGF0aWMtcGFnZS10d28uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQVNyRSxNQUFNLE9BQU8sc0JBQXNCO0lBRy9CLFlBQ1ksY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSDFDLFNBQUksR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO0lBSXZCLENBQUM7SUFFTCxRQUFRO1FBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O29IQVhRLHNCQUFzQjt3R0FBdEIsc0JBQXNCLDJEQ1puQyxvS0FHQTs0RkRTYSxzQkFBc0I7a0JBUGxDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsV0FBVyxFQUFFLGtDQUFrQztvQkFDL0MsTUFBTSxFQUFFLEVBQ1A7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdGF0aWNQYWdlVHdvIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvc3RhdGljLXBhZ2UtdHdvLm1vZGVsJzsgXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXN0YXRpYy1wYWdlLXR3bycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3N0YXRpYy1wYWdlLXR3by5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFN0YXRpY1BhZ2VUd29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGRhdGEgPSBuZXcgU3RhdGljUGFnZVR3bygpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YS5kYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgcG9zaXRpb24tZml4ZWQgdG9wLTAgc3RhcnQtMCBlbmQtMCBib3R0b20tMCBmcy0zXCI+XG4gICAgPHAgW2lubmVySFRNTF09XCJkYXRhLmJvZHlcIj48L3A+XG48L2Rpdj5cbiJdfQ==