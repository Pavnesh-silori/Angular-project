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
export class AggregationComponent {
    constructor() {
        this.listConstant = LIST_CONSTANT;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.allAggregationIDs = [];
        this.totalAggregationCount = 0;
        this.aggregationFC = new FormControl(['avg'], [Validators.required]);
        this.emitFilter = new EventEmitter();
    }
    ngOnInit() {
        let aggregationList = this.listConstant.AGGREGATION;
        this.totalAggregationCount = aggregationList.length;
        aggregationList.forEach(aggregation => this.allAggregationIDs.push(aggregation['value']));
    }
    ngAfterViewInit() {
        this.emitFilter.emit();
    }
    selectAllAggregation() {
        if (!this.aggregationFC.value.includes(-1)) {
            this.aggregationFC.reset([]);
            return;
        }
        this.aggregationFC.setValue([-1, ...this.allAggregationIDs]);
        this.emitFilter.emit();
    }
    selectedAggregation() {
        const selected = this.aggregationFC.value;
        if (selected.includes(-1)) {
            selected.shift();
            this.aggregationFC.patchValue(selected);
        }
        else if (this.aggregationFC.value.length == this.totalAggregationCount) {
            this.allAggregationIDs.splice(0, 0, -1);
            this.aggregationFC.patchValue(this.allAggregationIDs);
        }
        else {
            const filteredSelected = selected.filter(s => s != -1);
            this.aggregationFC.patchValue(filteredSelected);
        }
        this.emitFilter.emit();
    }
}
AggregationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AggregationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AggregationComponent, selector: "lib-aggregation", outputs: { emitFilter: "emitFilter" }, ngImport: i0, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select aggregation</mat-label>\n    <mat-select [formControl]=\"aggregationFC\" multiple required>\n        <mat-option [value]=\"-1\" (click)=\"selectAllAggregation()\">\n            Select all\n        </mat-option>\n        <mat-option *ngFor=\"let aggregation of listConstant.AGGREGATION\" [value]=\"aggregation.value\"\n            (click)=\"selectedAggregation()\">\n            {{ aggregation.label }}\n        </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"aggregationFC.touched && aggregationFC.hasError('required')\">\n        Select aggregation\n    </mat-error>\n</mat-form-field>", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.MatError, selector: "mat-error", inputs: ["id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-aggregation',
                    templateUrl: './aggregation.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { emitFilter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZHJvcGRvd24vYWdncmVnYXRpb24vYWdncmVnYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZHJvcGRvd24vYWdncmVnYXRpb24vYWdncmVnYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRWhFLGNBQWM7QUFDZCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQUNsRSxnQkFBZ0I7QUFRaEIsTUFBTSxPQUFPLG9CQUFvQjtJQVk3QjtRQVZBLGlCQUFZLEdBQUcsYUFBYSxDQUFDO1FBQzdCLGdDQUEyQixHQUFHLDJCQUEyQixDQUFDO1FBRTFELHNCQUFpQixHQUFVLEVBQUUsQ0FBQztRQUM5QiwwQkFBcUIsR0FBVyxDQUFDLENBQUM7UUFDbEMsa0JBQWEsR0FBZ0IsSUFBSSxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRzdFLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRWhCLENBQUM7SUFFakIsUUFBUTtRQUNKLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBRXBELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1FBQ3BELGVBQWUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxvQkFBb0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELG1CQUFtQjtRQUNmLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBRTFDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3ZCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQzthQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUN0RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0gsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNuRDtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7a0hBakRRLG9CQUFvQjtzR0FBcEIsb0JBQW9CLDhGQ2hCakMsMnRCQWNpQjs0RkRFSixvQkFBb0I7a0JBTmhDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsV0FBVyxFQUFFLDhCQUE4QjtvQkFDM0MsTUFBTSxFQUFFLEVBQ1A7aUJBQ0o7MEVBV0csVUFBVTtzQkFEVCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBMSVNUX0NPTlNUQU5UIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvbGlzdC5jb25zdGFudCc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBNYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2UgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItYWdncmVnYXRpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hZ2dyZWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBsaXN0Q29uc3RhbnQgPSBMSVNUX0NPTlNUQU5UO1xuICAgIG1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZSA9IE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZTtcblxuICAgIGFsbEFnZ3JlZ2F0aW9uSURzOiBhbnlbXSA9IFtdO1xuICAgIHRvdGFsQWdncmVnYXRpb25Db3VudDogbnVtYmVyID0gMDtcbiAgICBhZ2dyZWdhdGlvbkZDOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChbJ2F2ZyddLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pO1xuXG4gICAgQE91dHB1dCgpXG4gICAgZW1pdEZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGFnZ3JlZ2F0aW9uTGlzdCA9IHRoaXMubGlzdENvbnN0YW50LkFHR1JFR0FUSU9OO1xuXG4gICAgICAgIHRoaXMudG90YWxBZ2dyZWdhdGlvbkNvdW50ID0gYWdncmVnYXRpb25MaXN0Lmxlbmd0aDtcbiAgICAgICAgYWdncmVnYXRpb25MaXN0LmZvckVhY2goYWdncmVnYXRpb24gPT4gdGhpcy5hbGxBZ2dyZWdhdGlvbklEcy5wdXNoKGFnZ3JlZ2F0aW9uWyd2YWx1ZSddKSk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmVtaXRGaWx0ZXIuZW1pdCgpO1xuICAgIH1cblxuICAgIHNlbGVjdEFsbEFnZ3JlZ2F0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuYWdncmVnYXRpb25GQy52YWx1ZS5pbmNsdWRlcygtMSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWdncmVnYXRpb25GQy5yZXNldChbXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZ2dyZWdhdGlvbkZDLnNldFZhbHVlKFstMSwgLi4udGhpcy5hbGxBZ2dyZWdhdGlvbklEc10pO1xuICAgICAgICB0aGlzLmVtaXRGaWx0ZXIuZW1pdCgpO1xuICAgIH1cblxuICAgIHNlbGVjdGVkQWdncmVnYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5hZ2dyZWdhdGlvbkZDLnZhbHVlO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZC5pbmNsdWRlcygtMSkpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLmFnZ3JlZ2F0aW9uRkMucGF0Y2hWYWx1ZShzZWxlY3RlZCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hZ2dyZWdhdGlvbkZDLnZhbHVlLmxlbmd0aCA9PSB0aGlzLnRvdGFsQWdncmVnYXRpb25Db3VudCkge1xuICAgICAgICAgICAgdGhpcy5hbGxBZ2dyZWdhdGlvbklEcy5zcGxpY2UoMCwgMCwgLTEpO1xuICAgICAgICAgICAgdGhpcy5hZ2dyZWdhdGlvbkZDLnBhdGNoVmFsdWUodGhpcy5hbGxBZ2dyZWdhdGlvbklEcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJlZFNlbGVjdGVkID0gc2VsZWN0ZWQuZmlsdGVyKHMgPT4gcyAhPSAtMSk7XG4gICAgICAgICAgICB0aGlzLmFnZ3JlZ2F0aW9uRkMucGF0Y2hWYWx1ZShmaWx0ZXJlZFNlbGVjdGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW1pdEZpbHRlci5lbWl0KCk7XG4gICAgfVxuXG59XG4iLCI8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJtYXRGaWVsZFdpZHRoMTAwXCIgW2FwcGVhcmFuY2VdPVwibWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlLkZPUk1fRklFTERfQVBQRUFSQU5DRVwiPlxuICAgIDxtYXQtbGFiZWw+U2VsZWN0IGFnZ3JlZ2F0aW9uPC9tYXQtbGFiZWw+XG4gICAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cImFnZ3JlZ2F0aW9uRkNcIiBtdWx0aXBsZSByZXF1aXJlZD5cbiAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cIi0xXCIgKGNsaWNrKT1cInNlbGVjdEFsbEFnZ3JlZ2F0aW9uKClcIj5cbiAgICAgICAgICAgIFNlbGVjdCBhbGxcbiAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgYWdncmVnYXRpb24gb2YgbGlzdENvbnN0YW50LkFHR1JFR0FUSU9OXCIgW3ZhbHVlXT1cImFnZ3JlZ2F0aW9uLnZhbHVlXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RlZEFnZ3JlZ2F0aW9uKClcIj5cbiAgICAgICAgICAgIHt7IGFnZ3JlZ2F0aW9uLmxhYmVsIH19XG4gICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gICAgPG1hdC1lcnJvciAqbmdJZj1cImFnZ3JlZ2F0aW9uRkMudG91Y2hlZCAmJiBhZ2dyZWdhdGlvbkZDLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgICAgIFNlbGVjdCBhZ2dyZWdhdGlvblxuICAgIDwvbWF0LWVycm9yPlxuPC9tYXQtZm9ybS1maWVsZD4iXX0=