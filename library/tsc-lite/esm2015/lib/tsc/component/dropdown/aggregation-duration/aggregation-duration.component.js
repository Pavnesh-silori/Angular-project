import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LIST_CONSTANT } from '../../../constant/list.constant';
// tsc-library
import { MaterialFormFieldAppearance } from '@library/tsc-common';
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
AggregationDurationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AggregationDurationComponent, selector: "lib-aggregation-duration", outputs: { emitFilter: "emitFilter" }, ngImport: i0, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select aggregation duration</mat-label>\n    <mat-select (selectionChange)=\"onChange($event.value)\" [formControl]=\"aggDurationFC\" required>\n        <mat-option *ngFor=\"let duration of listConstant.AGGREGATION_DURATION\" [value]=\"duration.value\">\n            {{ duration.label }}\n        </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"aggDurationFC.touched && aggDurationFC.hasError('required')\">\n        Select aggregation duration\n    </mat-error>\n</mat-form-field>", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.MatError, selector: "mat-error", inputs: ["id"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24tZHVyYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZHJvcGRvd24vYWdncmVnYXRpb24tZHVyYXRpb24vYWdncmVnYXRpb24tZHVyYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZHJvcGRvd24vYWdncmVnYXRpb24tZHVyYXRpb24vYWdncmVnYXRpb24tZHVyYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRWhFLGNBQWM7QUFDZCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQUNsRSxnQkFBZ0I7QUFTaEIsTUFBTSxPQUFPLDRCQUE0QjtJQVVyQztRQVJBLGlCQUFZLEdBQUcsYUFBYSxDQUFDO1FBQzdCLGdDQUEyQixHQUFHLDJCQUEyQixDQUFDO1FBRTFELGtCQUFhLEdBQWdCLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRzlFLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRWhCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsUUFBUSxDQUFDLFVBQVU7UUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7OzBIQXRCUSw0QkFBNEI7OEdBQTVCLDRCQUE0Qix1R0NqQnpDLDJtQkFVaUI7NEZET0osNEJBQTRCO2tCQVB4QyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFdBQVcsRUFBRSx1Q0FBdUM7b0JBQ3BELE1BQU0sRUFBRSxFQUNQO2lCQUNKOzBFQVVHLFVBQVU7c0JBRFQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTElTVF9DT05TVEFOVCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L2xpc3QuY29uc3RhbnQnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgTWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWFnZ3JlZ2F0aW9uLWR1cmF0aW9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWdncmVnYXRpb24tZHVyYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW1xuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGlvbkR1cmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxpc3RDb25zdGFudCA9IExJU1RfQ09OU1RBTlQ7XG4gICAgbWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlID0gTWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlO1xuXG4gICAgYWdnRHVyYXRpb25GQzogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ21pbl8xNScsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBlbWl0RmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5lbWl0RmlsdGVyLmVtaXQoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZShzZWxlY3RlZEFEKSB7XG4gICAgICAgIHRoaXMuYWdnRHVyYXRpb25GQy5wYXRjaFZhbHVlKHNlbGVjdGVkQUQpO1xuICAgICAgICB0aGlzLmVtaXRGaWx0ZXIuZW1pdCgpO1xuICAgIH1cblxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwibWF0RmllbGRXaWR0aDEwMFwiIFthcHBlYXJhbmNlXT1cIm1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZS5GT1JNX0ZJRUxEX0FQUEVBUkFOQ0VcIj5cbiAgICA8bWF0LWxhYmVsPlNlbGVjdCBhZ2dyZWdhdGlvbiBkdXJhdGlvbjwvbWF0LWxhYmVsPlxuICAgIDxtYXQtc2VsZWN0IChzZWxlY3Rpb25DaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50LnZhbHVlKVwiIFtmb3JtQ29udHJvbF09XCJhZ2dEdXJhdGlvbkZDXCIgcmVxdWlyZWQ+XG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBkdXJhdGlvbiBvZiBsaXN0Q29uc3RhbnQuQUdHUkVHQVRJT05fRFVSQVRJT05cIiBbdmFsdWVdPVwiZHVyYXRpb24udmFsdWVcIj5cbiAgICAgICAgICAgIHt7IGR1cmF0aW9uLmxhYmVsIH19XG4gICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gICAgPG1hdC1lcnJvciAqbmdJZj1cImFnZ0R1cmF0aW9uRkMudG91Y2hlZCAmJiBhZ2dEdXJhdGlvbkZDLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgICAgIFNlbGVjdCBhZ2dyZWdhdGlvbiBkdXJhdGlvblxuICAgIDwvbWF0LWVycm9yPlxuPC9tYXQtZm9ybS1maWVsZD4iXX0=