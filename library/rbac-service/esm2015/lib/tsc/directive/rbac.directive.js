import { Directive, Input, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../service/rbac.service";
export class RBACDirective2 {
    constructor(templateRef, viewContainer, isResourcePermission) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.isResourcePermission = isResourcePermission;
    }
    set isRenderRBAC(resourcePermission) {
        let renderRBAC = false;
        renderRBAC = resourcePermission ? this.isResourcePermission.isResourcePermission(resourcePermission) : true;
        if (renderRBAC) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    }
}
RBACDirective2.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACDirective2, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.IsResourcePermission }], target: i0.ɵɵFactoryTarget.Directive });
RBACDirective2.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: RBACDirective2, selector: "[isRenderRBAC]", inputs: { isRenderRBAC: "isRenderRBAC" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACDirective2, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isRenderRBAC]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.IsResourcePermission }]; }, propDecorators: { isRenderRBAC: [{
                type: Input
            }] } });
export class RBACDirectiveModule2 {
}
RBACDirectiveModule2.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACDirectiveModule2, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RBACDirectiveModule2.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACDirectiveModule2, declarations: [RBACDirective2], exports: [RBACDirective2] });
RBACDirectiveModule2.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACDirectiveModule2 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACDirectiveModule2, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [RBACDirective2],
                    exports: [RBACDirective2]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3JiYWMtc2VydmljZS9zcmMvbGliL3RzYy9kaXJlY3RpdmUvcmJhYy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFpQyxNQUFNLGVBQWUsQ0FBQzs7O0FBUTFGLE1BQU0sT0FBTyxjQUFjO0lBQ3ZCLFlBQ1ksV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0Isb0JBQTBDO1FBRjFDLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNsRCxDQUFDO0lBRUwsSUFBYSxZQUFZLENBQUMsa0JBQXdDO1FBQzlELElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN2QixVQUFVLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFNUcsSUFBSSxVQUFVLEVBQUU7WUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzRDthQUFNO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM5QjtJQUNMLENBQUM7OzRHQWhCUSxjQUFjO2dHQUFkLGNBQWM7NEZBQWQsY0FBYztrQkFKMUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUM3QjtvS0FTZ0IsWUFBWTtzQkFBeEIsS0FBSzs7QUFpQlYsTUFBTSxPQUFPLG9CQUFvQjs7a0hBQXBCLG9CQUFvQjttSEFBcEIsb0JBQW9CLGlCQXhCcEIsY0FBYyxhQUFkLGNBQWM7bUhBd0JkLG9CQUFvQjs0RkFBcEIsb0JBQW9CO2tCQUxoQyxRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE5nTW9kdWxlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJc1Jlc291cmNlUGVybWlzc2lvbiB9IGZyb20gJy4uL3NlcnZpY2UvcmJhYy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaXNSZW5kZXJSQkFDXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBSQkFDRGlyZWN0aXZlMiB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSBpc1Jlc291cmNlUGVybWlzc2lvbjogSXNSZXNvdXJjZVBlcm1pc3Npb25cbiAgICApIHsgfVxuXG4gICAgQElucHV0KCkgc2V0IGlzUmVuZGVyUkJBQyhyZXNvdXJjZVBlcm1pc3Npb246IEFycmF5PEFycmF5PHN0cmluZz4+KSB7XG4gICAgICAgIGxldCByZW5kZXJSQkFDID0gZmFsc2U7XG4gICAgICAgIHJlbmRlclJCQUMgPSByZXNvdXJjZVBlcm1pc3Npb24gPyB0aGlzLmlzUmVzb3VyY2VQZXJtaXNzaW9uLmlzUmVzb3VyY2VQZXJtaXNzaW9uKHJlc291cmNlUGVybWlzc2lvbikgOiB0cnVlO1xuXG4gICAgICAgIGlmIChyZW5kZXJSQkFDKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbUkJBQ0RpcmVjdGl2ZTJdLFxuICAgIGV4cG9ydHM6IFtSQkFDRGlyZWN0aXZlMl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBSQkFDRGlyZWN0aXZlTW9kdWxlMiB7IH1cbiJdfQ==