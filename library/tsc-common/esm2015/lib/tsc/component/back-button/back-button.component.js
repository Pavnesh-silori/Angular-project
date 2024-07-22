import { Component } from '@angular/core';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft';
import * as i0 from "@angular/core";
import * as i1 from "../../service/tsc-common.service";
import * as i2 from "@fortawesome/angular-fontawesome";
export class BackButtonComponent {
    constructor(tSCCommonService) {
        this.tSCCommonService = tSCCommonService;
        this.faArrowAltCircleLeft = faArrowAltCircleLeft;
    }
    ngOnInit() {
    }
    backBtnClick() {
        this.tSCCommonService.back();
    }
}
BackButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BackButtonComponent, deps: [{ token: i1.TSCCommonService }], target: i0.ɵɵFactoryTarget.Component });
BackButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BackButtonComponent, selector: "lib-back-button", ngImport: i0, template: "<button class=\"btn btn-outline-light text-dark rounded-pill\" (click)=\"backBtnClick();\">\n    <fa-icon [icon]=\"faArrowAltCircleLeft\"></fa-icon> &nbsp;Back\n</button>\n", components: [{ type: i2.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BackButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-back-button',
                    templateUrl: './back-button.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.TSCCommonService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9iYWNrLWJ1dHRvbi9iYWNrLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L2JhY2stYnV0dG9uL2JhY2stYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7Ozs7QUFVOUYsTUFBTSxPQUFPLG1CQUFtQjtJQUc1QixZQUNZLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSDlDLHlCQUFvQixHQUFHLG9CQUFvQixDQUFDO0lBSXhDLENBQUM7SUFFTCxRQUFRO0lBQ1IsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQzs7aUhBWlEsbUJBQW1CO3FHQUFuQixtQkFBbUIsdURDWmhDLDhLQUdBOzRGRFNhLG1CQUFtQjtrQkFOL0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxNQUFNLEVBQUUsRUFBRTtpQkFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGZhQXJyb3dBbHRDaXJjbGVMZWZ0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQXJyb3dBbHRDaXJjbGVMZWZ0JztcblxuaW1wb3J0IHsgVFNDQ29tbW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvdHNjLWNvbW1vbi5zZXJ2aWNlJzsgXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWJhY2stYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmFjay1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW11cbn0pXG5cbmV4cG9ydCBjbGFzcyBCYWNrQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBmYUFycm93QWx0Q2lyY2xlTGVmdCA9IGZhQXJyb3dBbHRDaXJjbGVMZWZ0O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdFNDQ29tbW9uU2VydmljZTogVFNDQ29tbW9uU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBiYWNrQnRuQ2xpY2soKSB7XG4gICAgICAgIHRoaXMudFNDQ29tbW9uU2VydmljZS5iYWNrKCk7XG4gICAgfVxuXG59XG4iLCI8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IHRleHQtZGFyayByb3VuZGVkLXBpbGxcIiAoY2xpY2spPVwiYmFja0J0bkNsaWNrKCk7XCI+XG4gICAgPGZhLWljb24gW2ljb25dPVwiZmFBcnJvd0FsdENpcmNsZUxlZnRcIj48L2ZhLWljb24+ICZuYnNwO0JhY2tcbjwvYnV0dG9uPlxuIl19