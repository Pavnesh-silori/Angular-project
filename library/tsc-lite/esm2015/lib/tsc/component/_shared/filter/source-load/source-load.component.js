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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvX3NoYXJlZC9maWx0ZXIvc291cmNlLWxvYWQvc291cmNlLWxvYWQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvX3NoYXJlZC9maWx0ZXIvc291cmNlLWxvYWQvc291cmNlLWxvYWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFRbkUsTUFBTSxPQUFPLG1CQUFtQjtJQVk1QjtRQVBBLGlCQUFZLEdBQUcsYUFBYSxDQUFDO1FBRTdCLGVBQVUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUd2QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVoQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUN2RDtJQUNMLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsY0FBYyxDQUFDLGdCQUFnQjtRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7aUhBOUJRLG1CQUFtQjtxR0FBbkIsbUJBQW1CLHlLQ1poQyw2VEFJMEI7NEZEUWIsbUJBQW1CO2tCQU4vQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7b0JBQzNDLE1BQU0sRUFBRSxFQUNQO2lCQUNKOzBFQUlHLGtCQUFrQjtzQkFEakIsS0FBSztnQkFRTixVQUFVO3NCQURULE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBMSVNUX0NPTlNUQU5UIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uc3RhbnQvbGlzdC5jb25zdGFudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLXNvdXJjZS1sb2FkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc291cmNlLWxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU291cmNlTG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKVxuICAgIGRlZmF1bHRDYXRlZ29yeUlucDogc3RyaW5nO1xuXG4gICAgbGlzdENvbnN0YW50ID0gTElTVF9DT05TVEFOVDtcblxuICAgIGNhdGVnb3J5RkMgPSBuZXcgRm9ybUNvbnRyb2woXCJzb3VyY2VcIik7XG5cbiAgICBAT3V0cHV0KClcbiAgICBlbWl0RmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuZGVmYXVsdENhdGVnb3J5SW5wICYmIHRoaXMuZGVmYXVsdENhdGVnb3J5SW5wKSB7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5RkMucGF0Y2hWYWx1ZSh0aGlzLmRlZmF1bHRDYXRlZ29yeUlucCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuZW1pdEZpbHRlci5lbWl0KCk7XG4gICAgfVxuXG4gICAgY2F0ZWdvcnlDaGFuZ2Uoc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgICB0aGlzLmNhdGVnb3J5RkMucGF0Y2hWYWx1ZShzZWxlY3RlZENhdGVnb3J5KTtcbiAgICAgICAgdGhpcy5lbWl0RmlsdGVyLmVtaXQoKTtcbiAgICB9XG5cbn1cbiIsIjxtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCBjbGFzcz1cIm1hdEJ0bkZpbHRlclwiIFtmb3JtQ29udHJvbF09XCJjYXRlZ29yeUZDXCIgKGNoYW5nZSk9XCJjYXRlZ29yeUNoYW5nZShjYXRlZ29yeUZDLnZhbHVlKVwiPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgbGlzdENvbnN0YW50LlNPVVJDRV9MT0FEXCIgdmFsdWU9XCJ7eyBjYXRlZ29yeS52YWx1ZSB9fVwiPlxuICAgICAgICB7eyBjYXRlZ29yeS5sYWJlbCB9fVxuICAgIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG48L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPiJdfQ==