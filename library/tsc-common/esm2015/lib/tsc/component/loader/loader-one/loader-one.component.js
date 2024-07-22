import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/progress-spinner";
import * as i2 from "@angular/common";
export class LoaderOneComponent {
    constructor(loaderOneService) {
        this.loaderOneService = loaderOneService;
        this.isLoading = this.loaderOneService.isLoading;
    }
}
LoaderOneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneComponent, deps: [{ token: LoaderOneService }], target: i0.ɵɵFactoryTarget.Component });
LoaderOneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LoaderOneComponent, selector: "app-loader-one", ngImport: i0, template: "<!-- loader -->\n<div class=\"d-flex justify-content-center\" *ngIf=\"isLoading | async\">\n    <div class=\"d-flex m-auto loaderContainer\">\n        <mat-spinner class=\"m-auto\"></mat-spinner>\n    </div>\n</div>\n<!-- /loader/ -->\n", styles: [".loaderContainer{position:fixed;height:100vh;width:100vw;background:black;opacity:.7;z-index:99999}\n"], components: [{ type: i1.MatSpinner, selector: "mat-spinner", inputs: ["color"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": i2.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-loader-one',
                    templateUrl: './loader-one.component.html',
                    styleUrls: ['./loader-one.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: LoaderOneService }]; } });
export class LoaderOneService {
    constructor() {
        this.isLoading = new BehaviorSubject(false);
    }
    show() {
        // console.log('in show loader');
        this.isLoading.next(true);
    }
    hide() {
        // console.log('in hide loader');
        this.isLoading.next(false);
    }
}
LoaderOneService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LoaderOneService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLW9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L2xvYWRlci9sb2FkZXItb25lL2xvYWRlci1vbmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9sb2FkZXIvbG9hZGVyLW9uZS9sb2FkZXItb25lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFRdkMsTUFBTSxPQUFPLGtCQUFrQjtJQUczQixZQUNXLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSDdDLGNBQVMsR0FBNkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztJQUlsRSxDQUFDOztnSEFMSSxrQkFBa0Isa0JBSUUsZ0JBQWdCO29HQUpwQyxrQkFBa0Isc0RDVC9CLDhPQU9BOzRGREVhLGtCQUFrQjtrQkFOOUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixXQUFXLEVBQUUsNkJBQTZCO29CQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDN0M7MERBTWdDLGdCQUFnQjtBQVFqRCxNQUFNLE9BQU8sZ0JBQWdCO0lBR3pCO1FBRkEsY0FBUyxHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUUzRCxDQUFDO0lBRWhCLElBQUk7UUFDQSxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUk7UUFDQSxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OEdBYlEsZ0JBQWdCO2tIQUFoQixnQkFBZ0IsY0FIYixNQUFNOzRGQUdULGdCQUFnQjtrQkFKNUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1sb2FkZXItb25lJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9hZGVyLW9uZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9hZGVyLW9uZS5jb21wb25lbnQuc2NzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIExvYWRlck9uZUNvbXBvbmVudCB7XG4gICAgaXNMb2FkaW5nOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSB0aGlzLmxvYWRlck9uZVNlcnZpY2UuaXNMb2FkaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBsb2FkZXJPbmVTZXJ2aWNlOiBMb2FkZXJPbmVTZXJ2aWNlXG4gICAgKSB7IH1cbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2FkZXJPbmVTZXJ2aWNlIHtcbiAgICBpc0xvYWRpbmc6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2luIHNob3cgbG9hZGVyJyk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nLm5leHQodHJ1ZSk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2luIGhpZGUgbG9hZGVyJyk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nLm5leHQoZmFsc2UpO1xuICAgIH1cbn1cbiIsIjwhLS0gbG9hZGVyIC0tPlxuPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgKm5nSWY9XCJpc0xvYWRpbmcgfCBhc3luY1wiPlxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggbS1hdXRvIGxvYWRlckNvbnRhaW5lclwiPlxuICAgICAgICA8bWF0LXNwaW5uZXIgY2xhc3M9XCJtLWF1dG9cIj48L21hdC1zcGlubmVyPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48IS0tIC9sb2FkZXIvIC0tPlxuIl19