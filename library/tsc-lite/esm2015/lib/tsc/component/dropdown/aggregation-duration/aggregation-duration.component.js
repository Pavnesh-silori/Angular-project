import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LIST_CONSTANT } from '../../../constant/list.constant';
// tsc-library
import { FormErrorEnum, MaterialFormFieldAppearance } from '@library/tsc-common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
// /tsc-library/
export class AggregationDurationComponent {
    constructor() {
        this.listConstant = LIST_CONSTANT;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.FormErrorEnum = FormErrorEnum;
        this.aggDurationFC = new FormControl('min_15', [Validators.required]);
        this.emitFilter = new EventEmitter();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.emitFilter.emit();
    }
    onChange(selectedAD) {
        this.aggDurationFC.patchValue(selectedAD);
        this.emitFilter.emit();
    }
}
AggregationDurationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregationDurationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AggregationDurationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: { emitFilter: "emitFilter" }, ngImport: i0, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select aggregation duration</mat-label>\n    <mat-select (selectionChange)=\"onChange($event.value)\" [formControl]=\"aggDurationFC\" required>\n        <mat-option *ngFor=\"let duration of listConstant.AGGREGATION_DURATION\" [value]=\"duration.value\">\n            {{ duration.label }}\n        </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"aggDurationFC.touched && aggDurationFC.hasError('required')\">\n        {{ FormErrorEnum.REQUIRED }}\n    </mat-error>\n</mat-form-field>", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.MatError, selector: "mat-error", inputs: ["id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregationDurationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-aggregation-duration',
                    templateUrl: './aggregation-duration.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { emitFilter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24tZHVyYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZHJvcGRvd24vYWdncmVnYXRpb24tZHVyYXRpb24vYWdncmVnYXRpb24tZHVyYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZHJvcGRvd24vYWdncmVnYXRpb24tZHVyYXRpb24vYWdncmVnYXRpb24tZHVyYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRWhFLGNBQWM7QUFDZCxPQUFPLEVBQUUsYUFBYSxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7QUFDakYsZ0JBQWdCO0FBU2hCLE1BQU0sT0FBTyw0QkFBNEI7SUFZckM7UUFWQSxpQkFBWSxHQUFHLGFBQWEsQ0FBQztRQUM3QixnQ0FBMkIsR0FBRywyQkFBMkIsQ0FBQztRQUUxRCxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUU5QixrQkFBYSxHQUFnQixJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUc5RSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVoQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFVO1FBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOzswSEF4QlEsNEJBQTRCOzhHQUE1Qiw0QkFBNEIsdUdDaEJ6Qyw0bUJBVWlCOzRGRE1KLDRCQUE0QjtrQkFQeEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxXQUFXLEVBQUUsdUNBQXVDO29CQUNwRCxNQUFNLEVBQUUsRUFDUDtpQkFDSjswRUFZRyxVQUFVO3NCQURULE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBMSVNUX0NPTlNUQU5UIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvbGlzdC5jb25zdGFudCc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBGb3JtRXJyb3JFbnVtLCBNYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2UgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItYWdncmVnYXRpb24tZHVyYXRpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hZ2dyZWdhdGlvbi1kdXJhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0aW9uRHVyYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbGlzdENvbnN0YW50ID0gTElTVF9DT05TVEFOVDtcbiAgICBtYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2UgPSBNYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2U7XG5cbiAgICBGb3JtRXJyb3JFbnVtID0gRm9ybUVycm9yRW51bTtcblxuICAgIGFnZ0R1cmF0aW9uRkM6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCdtaW5fMTUnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pO1xuXG4gICAgQE91dHB1dCgpXG4gICAgZW1pdEZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuZW1pdEZpbHRlci5lbWl0KCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2Uoc2VsZWN0ZWRBRCkge1xuICAgICAgICB0aGlzLmFnZ0R1cmF0aW9uRkMucGF0Y2hWYWx1ZShzZWxlY3RlZEFEKTtcbiAgICAgICAgdGhpcy5lbWl0RmlsdGVyLmVtaXQoKTtcbiAgICB9XG5cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIm1hdEZpZWxkV2lkdGgxMDBcIiBbYXBwZWFyYW5jZV09XCJtYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2UuRk9STV9GSUVMRF9BUFBFQVJBTkNFXCI+XG4gICAgPG1hdC1sYWJlbD5TZWxlY3QgYWdncmVnYXRpb24gZHVyYXRpb248L21hdC1sYWJlbD5cbiAgICA8bWF0LXNlbGVjdCAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudC52YWx1ZSlcIiBbZm9ybUNvbnRyb2xdPVwiYWdnRHVyYXRpb25GQ1wiIHJlcXVpcmVkPlxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZHVyYXRpb24gb2YgbGlzdENvbnN0YW50LkFHR1JFR0FUSU9OX0RVUkFUSU9OXCIgW3ZhbHVlXT1cImR1cmF0aW9uLnZhbHVlXCI+XG4gICAgICAgICAgICB7eyBkdXJhdGlvbi5sYWJlbCB9fVxuICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJhZ2dEdXJhdGlvbkZDLnRvdWNoZWQgJiYgYWdnRHVyYXRpb25GQy5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICAgICAgICB7eyBGb3JtRXJyb3JFbnVtLlJFUVVJUkVEIH19XG4gICAgPC9tYXQtZXJyb3I+XG48L21hdC1mb3JtLWZpZWxkPiJdfQ==