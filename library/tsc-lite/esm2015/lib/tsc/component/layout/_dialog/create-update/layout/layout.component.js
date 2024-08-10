import { __awaiter } from "tslib";
import { Component, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isEqual } from 'lodash';
// tsc-library
import { InvalidForm, MaterialFormFieldAppearance, ButtonLabelEnum, DialogEnum } from '@library/tsc-common';
import { ToastrColor } from '@library/toastr-service';
import { Layout } from '@library/layout-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@library/storage-service";
import * as i3 from "@angular/forms";
import * as i4 from "@library/toastr-service";
import * as i5 from "@library/layout-service";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/tooltip";
import * as i9 from "@angular/material/input";
import * as i10 from "@angular/common";
// /tsc-library/
export class CreateUpdateLayoutComponent {
    constructor(dialogRef, data, storageService, layoutFB, toastService, layoutController, layoutService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.storageService = storageService;
        this.layoutFB = layoutFB;
        this.toastService = toastService;
        this.layoutController = layoutController;
        this.layoutService = layoutService;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.DialogEnum = DialogEnum;
        this.title = 'Create';
        this.action = 'create';
        this.maxLength = 200;
        this.layout = new Layout();
        this.isEqual = false;
        this.errorHandling = (control, error) => {
            return this.layoutFG.controls[control].hasError(error);
        };
        this.action = data['action'];
        this.layoutID = data['layoutID'];
        this.dialogRef.disableClose = true;
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.layoutInit();
        if (this.action == 'update') {
            this.title = 'Update';
            this.getLayoutByID();
        }
        this.layoutFG.valueChanges.subscribe(() => { this.isEqual = isEqual(this.initialObject, this.layoutFG.getRawValue()); });
    }
    layoutInit() {
        this.layoutFG = this.layoutFB.group({
            name: ['', [Validators.required]],
            description: []
        });
    }
    getLayoutByID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.layout = yield this.layoutService.getLayoutByID(this.orgID, this.layoutID);
            this.patchLayout(this.layout);
        });
    }
    patchLayout(layout) {
        this.layoutFG.patchValue({
            name: layout['name'],
            description: layout['description']
        });
        this.isEqual = true;
    }
    createLayout() {
        if (this.layoutFG.invalid) {
            this.layoutFG.markAllAsTouched();
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        this.layoutController.createLayout(this.orgID, this.layoutFG.value)
            .subscribe((layoutCreateRes) => {
            this.dialogRef.close({
                result: DialogEnum.SUCCESS_DR,
                layoutID: layoutCreateRes.response.id
            });
        }, error => {
            console.log('error in createLayout() - ', error);
        });
    }
    updateLayout() {
        if (this.layoutFG.invalid) {
            this.layoutFG.markAllAsTouched();
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        this.layoutController.updateLayout(this.orgID, this.layoutID, this.layoutFG.value)
            .subscribe((updateLayoutRes) => {
            this.dialogRef.close({ result: DialogEnum.SUCCESS_DR, layoutID: null });
        }, error => {
            console.log('error in updateLayout() - ', error);
        });
    }
}
CreateUpdateLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateLayoutComponent, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }, { token: i2.StorageService }, { token: i3.FormBuilder }, { token: i4.ToastrService }, { token: i5.LayoutController }, { token: i5.LayoutService }], target: i0.ɵɵFactoryTarget.Component });
CreateUpdateLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CreateUpdateLayoutComponent, selector: "lib-layout", ngImport: i0, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ title }} layout\n    </strong>\n    <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\" matTooltip=\"Close\"\n        matTooltipPosition=\"before\">\n        <span class=\"material-symbols-outlined\" [mat-dialog-close]=\"DialogEnum.CLOSE_DR\">\n            close\n        </span>\n    </button>\n</div>\n\n<div class=\"matDialogContent\" mat-dialog-content>\n    <form [formGroup]=\"layoutFG\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Name</mat-label>\n                    <input matInput placeholder=\"Layout Name\" type=\"text\" formControlName=\"name\" required/>\n                    <mat-error *ngIf=\"errorHandling('name', 'required')\">\n                        Name is required\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Description</mat-label>\n                    <input class=\"formPlaceholder\" matInput formControlName=\"description\" [maxlength]=\"maxLength\"\n                        #input />\n                    <mat-hint>Total number of character remaining: {{input.value.length}}\n                        /{{ maxLength }}</mat-hint>\n                </mat-form-field>\n            </div>\n        </div>\n    </form>\n</div>\n\n<div mat-dialog-footer align=\"end\">\n    <div [ngSwitch]=\"action\" class=\"d-inline\">\n        <button *ngSwitchCase=\"'create'\" type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"createLayout()\">\n            {{ ButtonLabelEnum.CREATE_BTN_LABEL }}\n        </button>\n        <button *ngSwitchCase=\"'update'\" type=\"button\" class=\"btn btn-sm btn-success\" [ngClass]=\"{'disabled': isEqual}\"\n            (click)=\"updateLayout()\">\n            {{ ButtonLabelEnum.UPDATE_BTN_LABEL }}\n        </button>\n        <button *ngSwitchDefault class=\"d-none\"></button>\n    </div>\n</div>", components: [{ type: i6.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i7.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }], directives: [{ type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i8.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i7.MatLabel, selector: "mat-label" }, { type: i9.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i10.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.MatError, selector: "mat-error", inputs: ["id"] }, { type: i3.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i7.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i10.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i10.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i10.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i10.NgSwitchDefault, selector: "[ngSwitchDefault]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateLayoutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-layout',
                    templateUrl: './layout.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i2.StorageService }, { type: i3.FormBuilder }, { type: i4.ToastrService }, { type: i5.LayoutController }, { type: i5.LayoutService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2xheW91dC9fZGlhbG9nL2NyZWF0ZS11cGRhdGUvbGF5b3V0L2xheW91dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9sYXlvdXQvX2RpYWxvZy9jcmVhdGUtdXBkYXRlL2xheW91dC9sYXlvdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTFELE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRWpDLGNBQWM7QUFDZCxPQUFPLEVBQUUsV0FBVyxFQUFhLDJCQUEyQixFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2SCxPQUFPLEVBQWlCLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxNQUFNLEVBQW1DLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7OztBQUNsRixnQkFBZ0I7QUFRaEIsTUFBTSxPQUFPLDJCQUEyQjtJQW9CcEMsWUFDVyxTQUFvRCxFQUMzQixJQUFJLEVBQzVCLGNBQThCLEVBQzlCLFFBQXFCLEVBQ3JCLFlBQTJCLEVBQzNCLGdCQUFrQyxFQUNsQyxhQUE0QjtRQU43QixjQUFTLEdBQVQsU0FBUyxDQUEyQztRQUMzQixTQUFJLEdBQUos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LE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDZixDQUFDOzt5SEFsR1EsMkJBQTJCLDhDQXNCeEIsZUFBZTs2R0F0QmxCLDJCQUEyQixrRENwQnhDLCt4RUFnRE07NEZENUJPLDJCQUEyQjtrQkFOdkMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsV0FBVyxFQUFFLHlCQUF5QjtvQkFDdEMsTUFBTSxFQUFFLEVBQ1A7aUJBQ0o7OzBCQXVCUSxNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IGlzRXF1YWwgfSBmcm9tICdsb2Rhc2gnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgSW52YWxpZEZvcm0sIFJlc3BvbnNlTSwgTWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlLCBCdXR0b25MYWJlbEVudW0sIERpYWxvZ0VudW0gfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvc3RvcmFnZS1zZXJ2aWNlJztcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UsIFRvYXN0ckNvbG9yIH0gZnJvbSAnQGxpYnJhcnkvdG9hc3RyLXNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0LCBMYXlvdXRDb250cm9sbGVyLCBMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvbGF5b3V0LXNlcnZpY2UnO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1sYXlvdXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlVXBkYXRlTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZSA9IE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZTtcbiAgICBCdXR0b25MYWJlbEVudW0gPSBCdXR0b25MYWJlbEVudW07XG4gICAgRGlhbG9nRW51bSA9IERpYWxvZ0VudW07XG5cbiAgICB0aXRsZTogc3RyaW5nID0gJ0NyZWF0ZSc7XG4gICAgYWN0aW9uOiBzdHJpbmcgPSAnY3JlYXRlJztcblxuICAgIG9yZ0lEOiBhbnk7XG4gICAgbGF5b3V0SUQ6IGFueTtcbiAgICBtYXhMZW5ndGggPSAyMDA7XG5cbiAgICBsYXlvdXRGRzogRm9ybUdyb3VwO1xuXG4gICAgbGF5b3V0ID0gbmV3IExheW91dCgpO1xuXG4gICAgaXNFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGluaXRpYWxPYmplY3Q6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q3JlYXRlVXBkYXRlTGF5b3V0Q29tcG9uZW50PixcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhLFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsYXlvdXRGQjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgdG9hc3RTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGxheW91dENvbnRyb2xsZXI6IExheW91dENvbnRyb2xsZXIsXG4gICAgICAgIHByaXZhdGUgbGF5b3V0U2VydmljZTogTGF5b3V0U2VydmljZSxcbiAgICApIHtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBkYXRhWydhY3Rpb24nXTtcbiAgICAgICAgdGhpcy5sYXlvdXRJRCA9IGRhdGFbJ2xheW91dElEJ107XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3JnSUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2N1cnJlbnRPcmdJRCcpXG5cbiAgICAgICAgdGhpcy5sYXlvdXRJbml0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09ICd1cGRhdGUnKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gJ1VwZGF0ZSc7XG4gICAgICAgICAgICB0aGlzLmdldExheW91dEJ5SUQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheW91dEZHLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4geyB0aGlzLmlzRXF1YWwgPSBpc0VxdWFsKHRoaXMuaW5pdGlhbE9iamVjdCwgdGhpcy5sYXlvdXRGRy5nZXRSYXdWYWx1ZSgpKTsgfSk7XG4gICAgfVxuXG4gICAgbGF5b3V0SW5pdCgpIHtcbiAgICAgICAgdGhpcy5sYXlvdXRGRyA9IHRoaXMubGF5b3V0RkIuZ3JvdXAoe1xuICAgICAgICAgICAgbmFtZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFtdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldExheW91dEJ5SUQoKSB7XG4gICAgICAgIHRoaXMubGF5b3V0ID0gYXdhaXQgdGhpcy5sYXlvdXRTZXJ2aWNlLmdldExheW91dEJ5SUQodGhpcy5vcmdJRCwgdGhpcy5sYXlvdXRJRCk7XG4gICAgICAgIHRoaXMucGF0Y2hMYXlvdXQodGhpcy5sYXlvdXQpO1xuICAgIH1cblxuICAgIHBhdGNoTGF5b3V0KGxheW91dCkge1xuICAgICAgICB0aGlzLmxheW91dEZHLnBhdGNoVmFsdWUoe1xuICAgICAgICAgICAgbmFtZTogbGF5b3V0WyduYW1lJ10sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogbGF5b3V0WydkZXNjcmlwdGlvbiddXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzRXF1YWwgPSB0cnVlO1xuICAgIH1cblxuICAgIGNyZWF0ZUxheW91dCgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0RkcuaW52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5sYXlvdXRGRy5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgICAgICAgICB0aGlzLnRvYXN0U2VydmljZS5vcGVuVG9hc3QoSW52YWxpZEZvcm0uSU5WQUxJRF9GT1JNX1RJVExFLCBJbnZhbGlkRm9ybS5JTlZBTElEX0ZPUk1fTUVTU0FHRSwgVG9hc3RyQ29sb3IuRVJST1IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYXlvdXRDb250cm9sbGVyLmNyZWF0ZUxheW91dCh0aGlzLm9yZ0lELCB0aGlzLmxheW91dEZHLnZhbHVlKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgobGF5b3V0Q3JlYXRlUmVzOiBSZXNwb25zZU0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogRGlhbG9nRW51bS5TVUNDRVNTX0RSLFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXRJRDogbGF5b3V0Q3JlYXRlUmVzLnJlc3BvbnNlLmlkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gY3JlYXRlTGF5b3V0KCkgLSAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTGF5b3V0KCkge1xuICAgICAgICBpZiAodGhpcy5sYXlvdXRGRy5pbnZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLmxheW91dEZHLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICAgICAgICAgIHRoaXMudG9hc3RTZXJ2aWNlLm9wZW5Ub2FzdChJbnZhbGlkRm9ybS5JTlZBTElEX0ZPUk1fVElUTEUsIEludmFsaWRGb3JtLklOVkFMSURfRk9STV9NRVNTQUdFLCBUb2FzdHJDb2xvci5FUlJPUik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXlvdXRDb250cm9sbGVyLnVwZGF0ZUxheW91dCh0aGlzLm9yZ0lELCB0aGlzLmxheW91dElELCB0aGlzLmxheW91dEZHLnZhbHVlKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgodXBkYXRlTGF5b3V0UmVzOiBSZXNwb25zZU0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh7IHJlc3VsdDogRGlhbG9nRW51bS5TVUNDRVNTX0RSLCBsYXlvdXRJRDogbnVsbCB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiB1cGRhdGVMYXlvdXQoKSAtICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3JIYW5kbGluZyA9IChjb250cm9sOiBzdHJpbmcsIGVycm9yOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0RkcuY29udHJvbHNbY29udHJvbF0uaGFzRXJyb3IoZXJyb3IpO1xuICAgIH1cblxufVxuIiwiPGRpdiBtYXQtZGlhbG9nLXRpdGxlPlxuICAgIDxzdHJvbmcgY2xhc3M9XCJkaWFsb2dUaXRsZVwiPlxuICAgICAgICB7eyB0aXRsZSB9fSBsYXlvdXRcbiAgICA8L3N0cm9uZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlIGNka0ZvY3VzSW5pdGlhbCBjbGFzcz1cImZsb2F0LWVuZCBtYXREaWFsb2dDbG9zZVwiIG1hdFRvb2x0aXA9XCJDbG9zZVwiXG4gICAgICAgIG1hdFRvb2x0aXBQb3NpdGlvbj1cImJlZm9yZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIiBbbWF0LWRpYWxvZy1jbG9zZV09XCJEaWFsb2dFbnVtLkNMT1NFX0RSXCI+XG4gICAgICAgICAgICBjbG9zZVxuICAgICAgICA8L3NwYW4+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm1hdERpYWxvZ0NvbnRlbnRcIiBtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJsYXlvdXRGR1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJtYXRGaWVsZFdpZHRoMTAwXCIgW2FwcGVhcmFuY2VdPVwiTWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlLkZPUk1fRklFTERfQVBQRUFSQU5DRVwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsIGNsYXNzPVwiZm9ybUxhYmVsXCI+TmFtZTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJMYXlvdXQgTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiIHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImVycm9ySGFuZGxpbmcoJ25hbWUnLCAncmVxdWlyZWQnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZSBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJtYXRGaWVsZFdpZHRoMTAwXCIgW2FwcGVhcmFuY2VdPVwiTWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlLkZPUk1fRklFTERfQVBQRUFSQU5DRVwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsIGNsYXNzPVwiZm9ybUxhYmVsXCI+RGVzY3JpcHRpb248L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybVBsYWNlaG9sZGVyXCIgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZGVzY3JpcHRpb25cIiBbbWF4bGVuZ3RoXT1cIm1heExlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAjaW5wdXQgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1oaW50PlRvdGFsIG51bWJlciBvZiBjaGFyYWN0ZXIgcmVtYWluaW5nOiB7e2lucHV0LnZhbHVlLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgICAgICAve3sgbWF4TGVuZ3RoIH19PC9tYXQtaGludD5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbjwvZGl2PlxuXG48ZGl2IG1hdC1kaWFsb2ctZm9vdGVyIGFsaWduPVwiZW5kXCI+XG4gICAgPGRpdiBbbmdTd2l0Y2hdPVwiYWN0aW9uXCIgY2xhc3M9XCJkLWlubGluZVwiPlxuICAgICAgICA8YnV0dG9uICpuZ1N3aXRjaENhc2U9XCInY3JlYXRlJ1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcIiAoY2xpY2spPVwiY3JlYXRlTGF5b3V0KClcIj5cbiAgICAgICAgICAgIHt7IEJ1dHRvbkxhYmVsRW51bS5DUkVBVEVfQlROX0xBQkVMIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uICpuZ1N3aXRjaENhc2U9XCIndXBkYXRlJ1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzogaXNFcXVhbH1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInVwZGF0ZUxheW91dCgpXCI+XG4gICAgICAgICAgICB7eyBCdXR0b25MYWJlbEVudW0uVVBEQVRFX0JUTl9MQUJFTCB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwiZC1ub25lXCI+PC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=