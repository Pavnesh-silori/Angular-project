import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LIST_CONSTANT } from '../../../../constant/list.constant';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
export class SourceLoadComponent {
    constructor() {
        this.listConstant = LIST_CONSTANT;
        this.categoryFC = new FormControl("source");
        this.emitFilter = new EventEmitter();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.defaultCategoryInp && this.defaultCategoryInp) {
            this.categoryFC.patchValue(this.defaultCategoryInp);
        }
    }
    ngAfterViewInit() {
        this.emitFilter.emit();
    }
    categoryChange(selectedCategory) {
        this.categoryFC.patchValue(selectedCategory);
        this.emitFilter.emit();
    }
}
SourceLoadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SourceLoadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SourceLoadComponent, selector: "lib-source-load", inputs: { defaultCategoryInp: "defaultCategoryInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0, template: "<mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"categoryFC\" (change)=\"categoryChange(categoryFC.value)\">\n    <mat-button-toggle *ngFor=\"let category of listConstant.SOURCE_LOAD\" value=\"{{ category.value }}\">\n        {{ category.label }}\n    </mat-button-toggle>\n</mat-button-toggle-group>", components: [{ type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }], directives: [{ type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-source-load',
                    templateUrl: './source-load.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { defaultCategoryInp: [{
                type: Input
            }], emitFilter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvX3NoYXJlZC9maWx0ZXIvc291cmNlLWxvYWQvc291cmNlLWxvYWQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvX3NoYXJlZC9maWx0ZXIvc291cmNlLWxvYWQvc291cmNlLWxvYWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFRbkUsTUFBTSxPQUFPLG1CQUFtQjtJQVk1QjtRQVBBLGlCQUFZLEdBQUcsYUFBYSxDQUFDO1FBRTdCLGVBQVUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUd2QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVoQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUN2RDtJQUNMLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsY0FBYyxDQUFDLGdCQUFnQjtRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7aUhBOUJRLG1CQUFtQjtxR0FBbkIsbUJBQW1CLHlLQ1hoQyw2VEFJMEI7NEZET2IsbUJBQW1CO2tCQU4vQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7b0JBQzNDLE1BQU0sRUFBRSxFQUNQO2lCQUNKOzBFQUlHLGtCQUFrQjtzQkFEakIsS0FBSztnQkFRTixVQUFVO3NCQURULE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTElTVF9DT05TVEFOVCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnN0YW50L2xpc3QuY29uc3RhbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1zb3VyY2UtbG9hZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NvdXJjZS1sb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KClcbiAgICBkZWZhdWx0Q2F0ZWdvcnlJbnA6IHN0cmluZztcblxuICAgIGxpc3RDb25zdGFudCA9IExJU1RfQ09OU1RBTlQ7XG5cbiAgICBjYXRlZ29yeUZDID0gbmV3IEZvcm1Db250cm9sKFwic291cmNlXCIpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgZW1pdEZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmRlZmF1bHRDYXRlZ29yeUlucCAmJiB0aGlzLmRlZmF1bHRDYXRlZ29yeUlucCkge1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeUZDLnBhdGNoVmFsdWUodGhpcy5kZWZhdWx0Q2F0ZWdvcnlJbnApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmVtaXRGaWx0ZXIuZW1pdCgpO1xuICAgIH1cblxuICAgIGNhdGVnb3J5Q2hhbmdlKHNlbGVjdGVkQ2F0ZWdvcnkpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeUZDLnBhdGNoVmFsdWUoc2VsZWN0ZWRDYXRlZ29yeSk7XG4gICAgICAgIHRoaXMuZW1pdEZpbHRlci5lbWl0KCk7XG4gICAgfVxuXG59XG4iLCI8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgY2xhc3M9XCJtYXRCdG5GaWx0ZXJcIiBbZm9ybUNvbnRyb2xdPVwiY2F0ZWdvcnlGQ1wiIChjaGFuZ2UpPVwiY2F0ZWdvcnlDaGFuZ2UoY2F0ZWdvcnlGQy52YWx1ZSlcIj5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGxpc3RDb25zdGFudC5TT1VSQ0VfTE9BRFwiIHZhbHVlPVwie3sgY2F0ZWdvcnkudmFsdWUgfX1cIj5cbiAgICAgICAge3sgY2F0ZWdvcnkubGFiZWwgfX1cbiAgICA8L21hdC1idXR0b24tdG9nZ2xlPlxuPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD4iXX0=