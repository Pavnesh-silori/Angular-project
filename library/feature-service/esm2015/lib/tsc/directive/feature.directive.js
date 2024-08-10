import { Directive, Input, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../service/feature.service";
export class FeatureDirective {
    constructor(_er, renderer, isFeatureAvailable) {
        this._er = _er;
        this.renderer = renderer;
        this.isFeatureAvailable = isFeatureAvailable;
    }
    set isDisableFeature(featureKeyID) {
        if (!this.isFeatureAvailable.isFeatureAvailable(featureKeyID)) {
            // this.renderer.setAttribute(this._er.nativeElement, 'disabled', 'true');
            this.renderer.setProperty(this._er.nativeElement, 'disabled', true);
            // this._er.nativeElement.disabled = true;
        }
        // else {
        //     this.renderer.setProperty(this._er.nativeElement, 'disabled', false);
        // }
    }
}
FeatureDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.IsFeatureAvailable }], target: i0.ɵɵFactoryTarget.Directive });
FeatureDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: FeatureDirective, selector: "[isDisableFeature]", inputs: { isDisableFeature: "isDisableFeature" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isDisableFeature]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.IsFeatureAvailable }]; }, propDecorators: { isDisableFeature: [{
                type: Input
            }] } });
export class FeatureDirectiveModule {
}
FeatureDirectiveModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirectiveModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FeatureDirectiveModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirectiveModule, declarations: [FeatureDirective], exports: [FeatureDirective] });
FeatureDirectiveModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirectiveModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirectiveModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FeatureDirective],
                    exports: [FeatureDirective]
                }]
        }] });
export class FeatureDirective2 {
    constructor(templateRef, viewContainer, isFeatureAvailable) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.isFeatureAvailable = isFeatureAvailable;
    }
    set isRenderFeature(featureKeyID) {
        let renderFeature = false;
        renderFeature = featureKeyID ? this.isFeatureAvailable.isFeatureAvailable(featureKeyID) : true;
        if (renderFeature) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    }
}
FeatureDirective2.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirective2, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.IsFeatureAvailable }], target: i0.ɵɵFactoryTarget.Directive });
FeatureDirective2.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: FeatureDirective2, selector: "[isRenderFeature]", inputs: { isRenderFeature: "isRenderFeature" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirective2, decorators: [{
            type: Directive,
            args: [{
                    selector: '[isRenderFeature]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.IsFeatureAvailable }]; }, propDecorators: { isRenderFeature: [{
                type: Input
            }] } });
export class FeatureDirectiveModule2 {
}
FeatureDirectiveModule2.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirectiveModule2, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FeatureDirectiveModule2.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirectiveModule2, declarations: [FeatureDirective2], exports: [FeatureDirective2] });
FeatureDirectiveModule2.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirectiveModule2 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureDirectiveModule2, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FeatureDirective2],
                    exports: [FeatureDirective2]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L2ZlYXR1cmUtc2VydmljZS9zcmMvbGliL3RzYy9kaXJlY3RpdmUvZmVhdHVyZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQUUsUUFBUSxFQUE0QyxNQUFNLGVBQWUsQ0FBQzs7O0FBUWpILE1BQU0sT0FBTyxnQkFBZ0I7SUFFekIsWUFDWSxHQUFlLEVBQ2YsUUFBbUIsRUFDbkIsa0JBQXNDO1FBRnRDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDOUMsQ0FBQztJQUVMLElBQWEsZ0JBQWdCLENBQUMsWUFBa0M7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUMzRCwwRUFBMEU7WUFFMUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3BFLDBDQUEwQztTQUM3QztRQUNELFNBQVM7UUFDVCw0RUFBNEU7UUFDNUUsSUFBSTtJQUNSLENBQUM7OzhHQWxCUSxnQkFBZ0I7a0dBQWhCLGdCQUFnQjs0RkFBaEIsZ0JBQWdCO2tCQUo1QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7aUJBQ2pDOzBKQVVnQixnQkFBZ0I7c0JBQTVCLEtBQUs7O0FBa0JWLE1BQU0sT0FBTyxzQkFBc0I7O29IQUF0QixzQkFBc0I7cUhBQXRCLHNCQUFzQixpQkExQnRCLGdCQUFnQixhQUFoQixnQkFBZ0I7cUhBMEJoQixzQkFBc0I7NEZBQXRCLHNCQUFzQjtrQkFMbEMsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDaEMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQzlCOztBQVdELE1BQU0sT0FBTyxpQkFBaUI7SUFDMUIsWUFDWSxXQUE2QixFQUM3QixhQUErQixFQUMvQixrQkFBc0M7UUFGdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQzlDLENBQUM7SUFFTCxJQUFhLGVBQWUsQ0FBQyxZQUFrQztRQUMzRCxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDMUIsYUFBYSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFL0YsSUFBSSxhQUFhLEVBQUU7WUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzRDthQUFNO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM5QjtJQUNMLENBQUM7OytHQWhCUSxpQkFBaUI7bUdBQWpCLGlCQUFpQjs0RkFBakIsaUJBQWlCO2tCQUo3QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxtQkFBbUI7aUJBQ2hDO2tLQVNnQixlQUFlO3NCQUEzQixLQUFLOztBQWlCVixNQUFNLE9BQU8sdUJBQXVCOztxSEFBdkIsdUJBQXVCO3NIQUF2Qix1QkFBdUIsaUJBeEJ2QixpQkFBaUIsYUFBakIsaUJBQWlCO3NIQXdCakIsdUJBQXVCOzRGQUF2Qix1QkFBdUI7a0JBTG5DLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE5nTW9kdWxlLCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElzRmVhdHVyZUF2YWlsYWJsZSB9IGZyb20gJy4uL3NlcnZpY2UvZmVhdHVyZS5zZXJ2aWNlJzsgXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lzRGlzYWJsZUZlYXR1cmVdJ1xufSlcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVEaXJlY3RpdmUge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2VyOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgaXNGZWF0dXJlQXZhaWxhYmxlOiBJc0ZlYXR1cmVBdmFpbGFibGVcbiAgICApIHsgfVxuXG4gICAgQElucHV0KCkgc2V0IGlzRGlzYWJsZUZlYXR1cmUoZmVhdHVyZUtleUlEOiBBcnJheTxBcnJheTxzdHJpbmc+Pikge1xuICAgICAgICBpZiAoIXRoaXMuaXNGZWF0dXJlQXZhaWxhYmxlLmlzRmVhdHVyZUF2YWlsYWJsZShmZWF0dXJlS2V5SUQpKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lci5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VyLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgLy8gdGhpcy5fZXIubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0gXG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lci5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbRmVhdHVyZURpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0ZlYXR1cmVEaXJlY3RpdmVdXG59KVxuXG5leHBvcnQgY2xhc3MgRmVhdHVyZURpcmVjdGl2ZU1vZHVsZSB7IH1cblxuXG5cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaXNSZW5kZXJGZWF0dXJlXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlRGlyZWN0aXZlMiB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSBpc0ZlYXR1cmVBdmFpbGFibGU6IElzRmVhdHVyZUF2YWlsYWJsZVxuICAgICkgeyB9XG5cbiAgICBASW5wdXQoKSBzZXQgaXNSZW5kZXJGZWF0dXJlKGZlYXR1cmVLZXlJRDogQXJyYXk8QXJyYXk8c3RyaW5nPj4pIHtcbiAgICAgICAgbGV0IHJlbmRlckZlYXR1cmUgPSBmYWxzZTtcbiAgICAgICAgcmVuZGVyRmVhdHVyZSA9IGZlYXR1cmVLZXlJRCA/IHRoaXMuaXNGZWF0dXJlQXZhaWxhYmxlLmlzRmVhdHVyZUF2YWlsYWJsZShmZWF0dXJlS2V5SUQpIDogdHJ1ZTtcblxuICAgICAgICBpZiAocmVuZGVyRmVhdHVyZSkge1xuICAgICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0ZlYXR1cmVEaXJlY3RpdmUyXSxcbiAgICBleHBvcnRzOiBbRmVhdHVyZURpcmVjdGl2ZTJdXG59KVxuXG5leHBvcnQgY2xhc3MgRmVhdHVyZURpcmVjdGl2ZU1vZHVsZTIgeyB9XG4iXX0=