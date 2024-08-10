import { __awaiter } from "tslib";
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MATERIAL_CONSTANT } from '../../constant/material.constant';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
import * as i5 from "ngx-mat-select-search";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
// import { Utility } from '@rootNetZero/common/function/net-zero.function';
export class FunnelFilterComponent {
    constructor() {
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.view = 'name'; /* values visible to user in dropdown */
        this.value = 'keyID'; /* value that gets passes to form control */
        this.entityList = []; /* filter list */
        this.header = 'Filter Key'; /* header value shown next to funnel icon */
        this.headerWidth = 8; /* size of header element */
        this.width = 12; /* max width of filter in table header. Ranges from 1 to 12*/
        this.active = false;
        this.all_entities_length = 0;
        this.mono = new EventEmitter(); /* emits selected value for single select */
        this.multi = new EventEmitter(); /* emits selected value for multiple select */
        this.selected = new EventEmitter(); /* output for selected object for chip creation */
        this.filterFC = new FormControl();
        this.filterUnsubscribe = new Subject();
        this.filtered = new ReplaySubject(1);
        this.init = true;
        this.all_entities_value = [];
        this.multiFilterApplied = false;
        this.selected_entities = new Set();
    }
    ngOnInit() { }
    ngOnChanges(change) {
        if (this.entityList.length > 0 && this.init) {
            this.init = false;
            this.all_entities_length = this.entityList.length;
            this.all_entities_value = ['all'];
            this.entityList.forEach(entity => {
                this.selected_entities.add(entity);
                this.all_entities_value.push(entity[this.value]);
            });
            if (this.type == 'MULTI')
                this.selectFC.patchValue(this.all_entities_value);
        }
        // ngx mat select search
        this.filtered.next(this.entityList.slice());
        this.filterFC.valueChanges
            .pipe(takeUntil(this.filterUnsubscribe)).subscribe(() => __awaiter(this, void 0, void 0, function* () {
            // this.filtered = await this.utility.filterValue(this.entityList, this.filterFC.value, 'name');
        }));
    }
    addAllEntities() {
        this.entityList.forEach(entity => this.selected_entities.add(entity));
    }
    selectionChange(value) { this.mono.emit(value); }
    selectedEntity(entity) { this.selected.next(entity); }
    resetOnNoChange(event) {
        if (event) {
            this.prev = this.selectFC.value;
            this.multiFilterApplied = false;
        }
        else {
            if (this.prev != this.selectFC.value && !this.multiFilterApplied) {
                this.selectFC.patchValue(this.prev, { onlySelf: true });
            }
        }
    }
    selectEntity(entity /* entity: json */) {
        if (!this.selected_entities.delete(entity)) {
            this.selected_entities.add(entity);
        }
        const k = this.selectFC.value.indexOf('all');
        if (k > -1) {
            if (this.selectFC.value.length > this.all_entities_length) {
                this.selectFC.patchValue([]);
            }
            else if (this.selectFC.value.length == this.all_entities_length) {
                this.selectFC.value.splice(k, 1);
                this.selectFC.patchValue(this.selectFC.value);
            }
            else {
                this.selectFC.patchValue(this.all_entities_value);
            }
        }
        else {
            if (this.selectFC.value.length == this.all_entities_length) {
                this.selectFC.patchValue(this.all_entities_value);
            }
        }
    }
    applyFilter() {
        if (this.selectFC.value.length == 0)
            return;
        this.multiFilterApplied = true;
        this.multi.emit(this.selectFC.value);
        this.selected.next(this.selected_entities);
    }
    selectAllEntities() {
        if (!this.selectFC.value.includes('all') && this.selectFC.value.length > 0) {
            this.selectFC.reset([]);
            this.selected_entities.clear();
            return;
        }
        this.selectFC.patchValue(this.all_entities_value);
        this.entityList.forEach(entity => this.selected_entities.add(entity));
    }
}
FunnelFilterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FunnelFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FunnelFilterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FunnelFilterComponent, selector: "funnel-filter", inputs: { view: "view", value: "value", type: "type", entityList: "entityList", selectFC: "selectFC", header: "header", headerWidth: "headerWidth", width: "width", active: "active" }, outputs: { mono: "mono", multi: "multi", selected: "selected" }, usesOnChanges: true, ngImport: i0, template: "<style>\n    /* DD: dropdown */\n    .funnelFilterDD {\n        width: 0;\n        height: 0;\n        overflow: hidden;\n    }\n</style>\n<ng-container *ngIf=\"type == 'mono'\">\n    <div class=\"row\">\n        <div [ngClass]=\"'col-sm-' + width\">\n            <div class=\"row\">\n                <div class=\"centerAlignVertical justify-content-start\" [ngClass]=\"'col-sm-' + headerWidth\">\n                    {{ header }}\n                </div>\n                <div class=\"col-sm-2 centerAlign\">\n                    <button mat-icon-button (click)=\"select.open()\">\n                        <span class=\"fs-4 material-symbols-outlined funnel\" [ngClass]=\"{'text-primary': active}\">\n                            filter_alt\n                        </span>\n                        <div class=\"funnelFilterDD\">\n                            <mat-form-field>\n                                <mat-select #select [formControl]=\"selectFC\"\n                                    (selectionChange)=\"selectionChange($event);\">\n                                    <mat-select-trigger class=\"d-none\"></mat-select-trigger>\n                                    <mat-option>\n                                        <ngx-mat-select-search [formControl]=\"filterFC\"\n                                            placeholderLabel=\"Search by name\" noEntriesFoundLabel=\"No match found.\">\n                                        </ngx-mat-select-search>\n                                    </mat-option>\n\n                                    <mat-option *ngFor=\"let entity of filtered | async\" [value]=\"entity?.[value]\"\n                                        (click)=\"selectedEntity(entity)\">\n                                        <span class=\"d-flex justify-content-between\">\n                                            {{ entity?.[view] }}\n                                        </span>\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"type == 'multi'\">\n    <div class=\"row\">\n        <div class=\"col-sm-7 centerAlignVertical justify-content-start pe-0\">\n            {{ header }}\n        </div>\n        <div class=\"col-sm-2 centerAlign\">\n            <button mat-icon-button (click)=\"multiSelect.open()\">\n                <span class=\"material-symbols-outlined fs-4 funnel\" [ngClass]=\"{'text-primary': active}\">\n                    filter_alt\n                </span>\n                <div class=\"funnelFilterDD\">\n                    <mat-form-field>\n                        <mat-select #multiSelect [formControl]=\"selectFC\" (openedChange)=\"resetOnNoChange($event)\"\n                            multiple>\n                            <mat-select-trigger class=\"d-none\"></mat-select-trigger>\n                            <mat-option value=\"all\" (click)=\"selectAllEntities()\">\n                                All activity types\n                            </mat-option>\n                            <mat-option *ngFor=\"let activities of entityList\" [value]=\"activities[value]\"\n                                (click)=\"selectEntity(activities)\">\n                                {{ activities[view] }}\n                            </mat-option>\n                            <button #activityBtn class=\"button btn btn-primary applyBtn float-end me-1 mb-1\"\n                                (click)=\"applyFilter(); multiSelect.close();\" matRipple\n                                [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n                                Apply\n                            </button>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </button>\n        </div>\n    </div>\n</ng-container>", styles: ["\n    /* DD: dropdown */\n    .funnelFilterDD {\n        width: 0;\n        height: 0;\n        overflow: hidden;\n    }\n"], components: [{ type: i1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i3.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i4.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i5.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.MatSelectTrigger, selector: "mat-select-trigger" }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }], pipes: { "async": i6.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FunnelFilterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'funnel-filter',
                    templateUrl: './funnel-filter.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { view: [{
                type: Input
            }], value: [{
                type: Input
            }], type: [{
                type: Input
            }], entityList: [{
                type: Input
            }], selectFC: [{
                type: Input
            }], header: [{
                type: Input
            }], headerWidth: [{
                type: Input
            }], width: [{
                type: Input
            }], active: [{
                type: Input
            }], mono: [{
                type: Output
            }], multi: [{
                type: Output
            }], selected: [{
                type: Output
            }] } });
export class FunnelFilterModule {
}
FunnelFilterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FunnelFilterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FunnelFilterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FunnelFilterModule, declarations: [FunnelFilterComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatRippleModule,
        MatSelectModule,
        MatButtonModule], exports: [FunnelFilterComponent] });
FunnelFilterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FunnelFilterModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatInputModule,
            MatSelectModule,
            MatRadioModule,
            MatFormFieldModule,
            NgxMatSelectSearchModule,
            MatSlideToggleModule,
            MatCheckboxModule,
            MatRippleModule,
            MatSelectModule,
            MatButtonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FunnelFilterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatInputModule,
                        MatSelectModule,
                        MatRadioModule,
                        MatFormFieldModule,
                        NgxMatSelectSearchModule,
                        MatSlideToggleModule,
                        MatCheckboxModule,
                        MatRippleModule,
                        MatSelectModule,
                        MatButtonModule
                    ],
                    declarations: [FunnelFilterComponent],
                    exports: [FunnelFilterComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVubmVsLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L2Z1bm5lbC1maWx0ZXIvZnVubmVsLWZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L2Z1bm5lbC1maWx0ZXIvZnVubmVsLWZpbHRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBVSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXhHLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFN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O1FBQ2YsY0FBYztRQUNkLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGVBQWUsYUFoSUoscUJBQXFCO2lIQXFJckIsa0JBQWtCLFlBbkJyQjtZQUNSLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixjQUFjO1lBQ2QsZUFBZTtZQUNmLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsd0JBQXdCO1lBQ3hCLG9CQUFvQjtZQUNwQixpQkFBaUI7WUFDakIsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1NBQ2Y7NEZBSVcsa0JBQWtCO2tCQXBCOUIsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLHdCQUF3Qjt3QkFDeEIsb0JBQW9CO3dCQUNwQixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixlQUFlO3FCQUNmO29CQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNyQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nTW9kdWxlLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0UmFkaW9Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRTbGlkZVRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XG5cbmltcG9ydCB7IE5neE1hdFNlbGVjdFNlYXJjaE1vZHVsZSB9IGZyb20gJ25neC1tYXQtc2VsZWN0LXNlYXJjaCc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE1BVEVSSUFMX0NPTlNUQU5UIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQvbWF0ZXJpYWwuY29uc3RhbnQnO1xuLy8gaW1wb3J0IHsgVXRpbGl0eSB9IGZyb20gJ0Byb290TmV0WmVyby9jb21tb24vZnVuY3Rpb24vbmV0LXplcm8uZnVuY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdmdW5uZWwtZmlsdGVyJyxcblx0dGVtcGxhdGVVcmw6ICcuL2Z1bm5lbC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEZ1bm5lbEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdE1BVEVSSUFMX0NPTlNUQU5UID0gTUFURVJJQUxfQ09OU1RBTlQ7XG5cdEBJbnB1dCgpIHZpZXc6IHN0cmluZyA9ICduYW1lJzsgLyogdmFsdWVzIHZpc2libGUgdG8gdXNlciBpbiBkcm9wZG93biAqL1xuXHRASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gJ2tleUlEJzsgLyogdmFsdWUgdGhhdCBnZXRzIHBhc3NlcyB0byBmb3JtIGNvbnRyb2wgKi9cblx0QElucHV0KCkgdHlwZTogYW55OyAvKiB0eXBlIG9mIHNlbGVjdCBhY2NlcHRzIHZhbHVlczogbW9uby9tdWx0aSAqL1xuXHRASW5wdXQoKSBlbnRpdHlMaXN0OiBhbnkgPSBbXTsgLyogZmlsdGVyIGxpc3QgKi9cblx0QElucHV0KCkgc2VsZWN0RkM6IEZvcm1Db250cm9sOyAvKiBmb3JtY29udHJvbCBmb3IgZmlsdGVyIHNlbGVjdCAqL1xuXHRASW5wdXQoKSBoZWFkZXI6IHN0cmluZyA9ICdGaWx0ZXIgS2V5JzsgLyogaGVhZGVyIHZhbHVlIHNob3duIG5leHQgdG8gZnVubmVsIGljb24gKi9cblx0QElucHV0KCkgaGVhZGVyV2lkdGg6IG51bWJlciA9IDg7IC8qIHNpemUgb2YgaGVhZGVyIGVsZW1lbnQgKi9cblx0QElucHV0KCkgd2lkdGg6IG51bWJlciA9IDEyOyAvKiBtYXggd2lkdGggb2YgZmlsdGVyIGluIHRhYmxlIGhlYWRlci4gUmFuZ2VzIGZyb20gMSB0byAxMiovXG5cdEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGFsbF9lbnRpdGllc19sZW5ndGg6IG51bWJlciA9IDA7XG5cblx0QE91dHB1dCgpIG1vbm86IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvKiBlbWl0cyBzZWxlY3RlZCB2YWx1ZSBmb3Igc2luZ2xlIHNlbGVjdCAqL1xuXHRAT3V0cHV0KCkgbXVsdGk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvKiBlbWl0cyBzZWxlY3RlZCB2YWx1ZSBmb3IgbXVsdGlwbGUgc2VsZWN0ICovXG5cdEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8qIG91dHB1dCBmb3Igc2VsZWN0ZWQgb2JqZWN0IGZvciBjaGlwIGNyZWF0aW9uICovXG5cblx0ZmlsdGVyRkM6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cdGZpbHRlclVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblx0ZmlsdGVyZWQ6IFJlcGxheVN1YmplY3Q8YW55W10+ID0gbmV3IFJlcGxheVN1YmplY3Q8YW55W10+KDEpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdC8vIHByaXZhdGUgdXRpbGl0eTogVXRpbGl0eSxcblx0KSB7IH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHsgfVxuXG5cdGluaXQ6IGJvb2xlYW4gPSB0cnVlO1xuXHRhbGxfZW50aXRpZXNfdmFsdWU6IGFueVtdID0gW107XG5cdG5nT25DaGFuZ2VzKGNoYW5nZTogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmICh0aGlzLmVudGl0eUxpc3QubGVuZ3RoID4gMCAmJiB0aGlzLmluaXQpIHtcblx0XHRcdHRoaXMuaW5pdCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5hbGxfZW50aXRpZXNfbGVuZ3RoID0gdGhpcy5lbnRpdHlMaXN0Lmxlbmd0aDtcblx0XHRcdHRoaXMuYWxsX2VudGl0aWVzX3ZhbHVlID0gWydhbGwnXTtcblx0XHRcdHRoaXMuZW50aXR5TGlzdC5mb3JFYWNoKGVudGl0eSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRfZW50aXRpZXMuYWRkKGVudGl0eSlcblx0XHRcdFx0dGhpcy5hbGxfZW50aXRpZXNfdmFsdWUucHVzaChlbnRpdHlbdGhpcy52YWx1ZV0pXG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKHRoaXMudHlwZSA9PSAnTVVMVEknKSB0aGlzLnNlbGVjdEZDLnBhdGNoVmFsdWUodGhpcy5hbGxfZW50aXRpZXNfdmFsdWUpO1xuXHRcdH1cblxuXHRcdC8vIG5neCBtYXQgc2VsZWN0IHNlYXJjaFxuXHRcdHRoaXMuZmlsdGVyZWQubmV4dCh0aGlzLmVudGl0eUxpc3Quc2xpY2UoKSk7XG5cdFx0dGhpcy5maWx0ZXJGQy52YWx1ZUNoYW5nZXNcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLmZpbHRlclVuc3Vic2NyaWJlKSkuc3Vic2NyaWJlKGFzeW5jICgpID0+IHtcblx0XHRcdFx0Ly8gdGhpcy5maWx0ZXJlZCA9IGF3YWl0IHRoaXMudXRpbGl0eS5maWx0ZXJWYWx1ZSh0aGlzLmVudGl0eUxpc3QsIHRoaXMuZmlsdGVyRkMudmFsdWUsICduYW1lJyk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGFkZEFsbEVudGl0aWVzKCkge1xuXHRcdHRoaXMuZW50aXR5TGlzdC5mb3JFYWNoKGVudGl0eSA9PiB0aGlzLnNlbGVjdGVkX2VudGl0aWVzLmFkZChlbnRpdHkpKTtcblx0fVxuXHRzZWxlY3Rpb25DaGFuZ2UodmFsdWUpIHsgdGhpcy5tb25vLmVtaXQodmFsdWUpOyB9XG5cdHNlbGVjdGVkRW50aXR5KGVudGl0eSkgeyB0aGlzLnNlbGVjdGVkLm5leHQoZW50aXR5KTsgfVxuXG5cdHByZXY7XG5cdG11bHRpRmlsdGVyQXBwbGllZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZXNldE9uTm9DaGFuZ2UoZXZlbnQpIHtcblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdHRoaXMucHJldiA9IHRoaXMuc2VsZWN0RkMudmFsdWU7XG5cdFx0XHR0aGlzLm11bHRpRmlsdGVyQXBwbGllZCA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5wcmV2ICE9IHRoaXMuc2VsZWN0RkMudmFsdWUgJiYgIXRoaXMubXVsdGlGaWx0ZXJBcHBsaWVkKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RkMucGF0Y2hWYWx1ZSh0aGlzLnByZXYsIHsgb25seVNlbGY6IHRydWUgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c2VsZWN0ZWRfZW50aXRpZXM6IFNldDxhbnk+ID0gbmV3IFNldDxhbnk+KCk7XG5cdHNlbGVjdEVudGl0eShlbnRpdHkgLyogZW50aXR5OiBqc29uICovKSB7XG5cdFx0aWYgKCF0aGlzLnNlbGVjdGVkX2VudGl0aWVzLmRlbGV0ZShlbnRpdHkpKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkX2VudGl0aWVzLmFkZChlbnRpdHkpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGsgPSB0aGlzLnNlbGVjdEZDLnZhbHVlLmluZGV4T2YoJ2FsbCcpO1xuXHRcdGlmIChrID4gLTEpIHtcblx0XHRcdGlmICh0aGlzLnNlbGVjdEZDLnZhbHVlLmxlbmd0aCA+IHRoaXMuYWxsX2VudGl0aWVzX2xlbmd0aCkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdEZDLnBhdGNoVmFsdWUoW10pO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnNlbGVjdEZDLnZhbHVlLmxlbmd0aCA9PSB0aGlzLmFsbF9lbnRpdGllc19sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RGQy52YWx1ZS5zcGxpY2UoaywgMSk7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RkMucGF0Y2hWYWx1ZSh0aGlzLnNlbGVjdEZDLnZhbHVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RkMucGF0Y2hWYWx1ZSh0aGlzLmFsbF9lbnRpdGllc192YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0aGlzLnNlbGVjdEZDLnZhbHVlLmxlbmd0aCA9PSB0aGlzLmFsbF9lbnRpdGllc19sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RGQy5wYXRjaFZhbHVlKHRoaXMuYWxsX2VudGl0aWVzX3ZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRhcHBseUZpbHRlcigpIHtcblx0XHRpZiAodGhpcy5zZWxlY3RGQy52YWx1ZS5sZW5ndGggPT0gMCkgcmV0dXJuO1xuXG5cdFx0dGhpcy5tdWx0aUZpbHRlckFwcGxpZWQgPSB0cnVlO1xuXHRcdHRoaXMubXVsdGkuZW1pdCh0aGlzLnNlbGVjdEZDLnZhbHVlKTtcblx0XHR0aGlzLnNlbGVjdGVkLm5leHQodGhpcy5zZWxlY3RlZF9lbnRpdGllcyk7XG5cdH1cblxuXHRzZWxlY3RBbGxFbnRpdGllcygpIHtcblx0XHRpZiAoIXRoaXMuc2VsZWN0RkMudmFsdWUuaW5jbHVkZXMoJ2FsbCcpICYmIHRoaXMuc2VsZWN0RkMudmFsdWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5zZWxlY3RGQy5yZXNldChbXSk7XG5cdFx0XHR0aGlzLnNlbGVjdGVkX2VudGl0aWVzLmNsZWFyKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zZWxlY3RGQy5wYXRjaFZhbHVlKHRoaXMuYWxsX2VudGl0aWVzX3ZhbHVlKTtcblx0XHR0aGlzLmVudGl0eUxpc3QuZm9yRWFjaChlbnRpdHkgPT4gdGhpcy5zZWxlY3RlZF9lbnRpdGllcy5hZGQoZW50aXR5KSk7XG5cdH1cbn1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdE1hdENhcmRNb2R1bGUsXG5cdFx0TWF0SW5wdXRNb2R1bGUsXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxuXHRcdE1hdFJhZGlvTW9kdWxlLFxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcblx0XHROZ3hNYXRTZWxlY3RTZWFyY2hNb2R1bGUsXG5cdFx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXG5cdFx0TWF0UmlwcGxlTW9kdWxlLFxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcblx0XHRNYXRCdXR0b25Nb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbRnVubmVsRmlsdGVyQ29tcG9uZW50XSxcblx0ZXhwb3J0czogW0Z1bm5lbEZpbHRlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRnVubmVsRmlsdGVyTW9kdWxlIHsgfSIsIjxzdHlsZT5cbiAgICAvKiBERDogZHJvcGRvd24gKi9cbiAgICAuZnVubmVsRmlsdGVyREQge1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbjwvc3R5bGU+XG48bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PSAnbW9ubydcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiJ2NvbC1zbS0nICsgd2lkdGhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyQWxpZ25WZXJ0aWNhbCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIiBbbmdDbGFzc109XCInY29sLXNtLScgKyBoZWFkZXJXaWR0aFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBoZWFkZXIgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgY2VudGVyQWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInNlbGVjdC5vcGVuKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnMtNCBtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGZ1bm5lbFwiIFtuZ0NsYXNzXT1cInsndGV4dC1wcmltYXJ5JzogYWN0aXZlfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmdW5uZWxGaWx0ZXJERFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgI3NlbGVjdCBbZm9ybUNvbnRyb2xdPVwic2VsZWN0RkNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0LXRyaWdnZXIgY2xhc3M9XCJkLW5vbmVcIj48L21hdC1zZWxlY3QtdHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtbWF0LXNlbGVjdC1zZWFyY2ggW2Zvcm1Db250cm9sXT1cImZpbHRlckZDXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJMYWJlbD1cIlNlYXJjaCBieSBuYW1lXCIgbm9FbnRyaWVzRm91bmRMYWJlbD1cIk5vIG1hdGNoIGZvdW5kLlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmd4LW1hdC1zZWxlY3Qtc2VhcmNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZW50aXR5IG9mIGZpbHRlcmVkIHwgYXN5bmNcIiBbdmFsdWVdPVwiZW50aXR5Py5bdmFsdWVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0ZWRFbnRpdHkoZW50aXR5KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVudGl0eT8uW3ZpZXddIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PSAnbXVsdGknXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTcgY2VudGVyQWxpZ25WZXJ0aWNhbCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgcGUtMFwiPlxuICAgICAgICAgICAge3sgaGVhZGVyIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgY2VudGVyQWxpZ25cIj5cbiAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJtdWx0aVNlbGVjdC5vcGVuKClcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgZnMtNCBmdW5uZWxcIiBbbmdDbGFzc109XCJ7J3RleHQtcHJpbWFyeSc6IGFjdGl2ZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyX2FsdFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnVubmVsRmlsdGVyRERcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgI211bHRpU2VsZWN0IFtmb3JtQ29udHJvbF09XCJzZWxlY3RGQ1wiIChvcGVuZWRDaGFuZ2UpPVwicmVzZXRPbk5vQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0LXRyaWdnZXIgY2xhc3M9XCJkLW5vbmVcIj48L21hdC1zZWxlY3QtdHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImFsbFwiIChjbGljayk9XCJzZWxlY3RBbGxFbnRpdGllcygpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbCBhY3Rpdml0eSB0eXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgYWN0aXZpdGllcyBvZiBlbnRpdHlMaXN0XCIgW3ZhbHVlXT1cImFjdGl2aXRpZXNbdmFsdWVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdEVudGl0eShhY3Rpdml0aWVzKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBhY3Rpdml0aWVzW3ZpZXddIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gI2FjdGl2aXR5QnRuIGNsYXNzPVwiYnV0dG9uIGJ0biBidG4tcHJpbWFyeSBhcHBseUJ0biBmbG9hdC1lbmQgbWUtMSBtYi0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFwcGx5RmlsdGVyKCk7IG11bHRpU2VsZWN0LmNsb3NlKCk7XCIgbWF0UmlwcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXRSaXBwbGVDZW50ZXJlZF09XCJNQVRFUklBTF9DT05TVEFOVC5NQVRfUklQUExFX0NFTlRFUlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9uZy1jb250YWluZXI+Il19