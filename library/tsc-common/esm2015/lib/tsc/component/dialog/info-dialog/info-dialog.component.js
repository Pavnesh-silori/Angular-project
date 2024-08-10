import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MATERIAL_CONSTANT } from '../../../constant/material.constant';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/core";
export class InfoDialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.title = 'Title';
        this.body = 'Body';
        this.dialogRef.disableClose = false;
    }
    ngOnInit() {
        this.title = this.data['title'];
        this.body = this.data['body'];
    }
}
InfoDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InfoDialogComponent, deps: [{ token: MAT_DIALOG_DATA }, { token: i1.MatDialogRef }], target: i0.ɵɵFactoryTarget.Component });
InfoDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: InfoDialogComponent, selector: "app-info-dialog", ngImport: i0, template: "<h6 mat-dialog-title class=\"dialogTitle mb-0\">\n    <div class=\"d-flex align-items-center\">\n        <strong> {{ title }} </strong>\n    </div>\n</h6>\n\n<mat-dialog-content class=\"mat-typography\">\n    <div [innerHTML]=\"body\"></div>\n</mat-dialog-content>\n\n<mat-dialog-actions align=\"end\">\n    <button class=\"button btn btn-secondary px-4\" type=\"button\" mat-dialog-close matRipple\n    [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n        Close\n    </button>\n</mat-dialog-actions>\n", styles: [""], directives: [{ type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]" }, { type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i2.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InfoDialogComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-info-dialog',
                    templateUrl: './info-dialog.component.html',
                    styles: ['']
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1.MatDialogRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9kaWFsb2cvaW5mby1kaWFsb2cvaW5mby1kaWFsb2cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9kaWFsb2cvaW5mby1kaWFsb2cvaW5mby1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBZ0IsZUFBZSxFQUFtQixNQUFNLDBCQUEwQixDQUFDO0FBSzFGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7O0FBT3hFLE1BQU0sT0FBTyxtQkFBbUI7SUFNNUIsWUFDcUMsSUFBSSxFQUM5QixTQUE0QztRQURsQixTQUFJLEdBQUosSUFBSSxDQUFBO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQW1DO1FBUHZELHNCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBRXRDLFVBQUssR0FBUSxPQUFPLENBQUM7UUFDckIsU0FBSSxHQUFRLE1BQU0sQ0FBQztRQU1mLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7aUhBaEJRLG1CQUFtQixrQkFPaEIsZUFBZTtxR0FQbEIsbUJBQW1CLHVEQ2JoQyx5Z0JBZ0JBOzRGREhhLG1CQUFtQjtrQkFML0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2Y7OzBCQVFRLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBOZ01vZHVsZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuXG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuaW1wb3J0IHsgTUFURVJJQUxfQ09OU1RBTlQgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9tYXRlcmlhbC5jb25zdGFudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWluZm8tZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW5mby1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogWycnXVxufSlcbmV4cG9ydCBjbGFzcyBJbmZvRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBNQVRFUklBTF9DT05TVEFOVCA9IE1BVEVSSUFMX0NPTlNUQU5UO1xuXG4gICAgdGl0bGU6IGFueSA9ICdUaXRsZSc7XG4gICAgYm9keTogYW55ID0gJ0JvZHknO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGEsXG4gICAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxJbmZvRGlhbG9nQ29tcG9uZW50PixcbiAgICApIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGFbJ3RpdGxlJ107XG4gICAgICAgIHRoaXMuYm9keSA9IHRoaXMuZGF0YVsnYm9keSddO1xuICAgIH1cblxufVxuXG5cbiIsIjxoNiBtYXQtZGlhbG9nLXRpdGxlIGNsYXNzPVwiZGlhbG9nVGl0bGUgbWItMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxzdHJvbmc+IHt7IHRpdGxlIH19IDwvc3Ryb25nPlxuICAgIDwvZGl2PlxuPC9oNj5cblxuPG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCI+XG4gICAgPGRpdiBbaW5uZXJIVE1MXT1cImJvZHlcIj48L2Rpdj5cbjwvbWF0LWRpYWxvZy1jb250ZW50PlxuXG48bWF0LWRpYWxvZy1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidG4gYnRuLXNlY29uZGFyeSBweC00XCIgdHlwZT1cImJ1dHRvblwiIG1hdC1kaWFsb2ctY2xvc2UgbWF0UmlwcGxlXG4gICAgW21hdFJpcHBsZUNlbnRlcmVkXT1cIk1BVEVSSUFMX0NPTlNUQU5ULk1BVF9SSVBQTEVfQ0VOVEVSXCI+XG4gICAgICAgIENsb3NlXG4gICAgPC9idXR0b24+XG48L21hdC1kaWFsb2ctYWN0aW9ucz5cbiJdfQ==