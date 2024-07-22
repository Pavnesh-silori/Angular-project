import { __awaiter } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Parameter } from '../../../model/parameter.model';
// tsc-library
import { COMMON_CONSTANT, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import * as i0 from "@angular/core";
import * as i1 from "@library/storage-service";
import * as i2 from "../../../service/parameter.service";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "ngx-mat-select-search";
import * as i6 from "@angular/material/core";
import * as i7 from "@angular/forms";
import * as i8 from "@angular/common";
// /tsc-library/
export class ParamMetricComponent {
    constructor(storageService, parameterService) {
        this.storageService = storageService;
        this.parameterService = parameterService;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.commonConstant = COMMON_CONSTANT;
        this.FormErrorEnum = FormErrorEnum;
        this.parameterM = [new Parameter()];
        this.allParameterID = [];
        this.totalParameterCount = 0;
        this.parameterFC = new FormControl([], [Validators.required]);
        this.paramSearchUtil = new MatSelectSearchService(['label']);
        this.emitFilter = new EventEmitter();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
    }
    ngOnChanges(changes) {
        if (changes.deviceInp && this.deviceInp) {
            this.getParameterByDeviceID(this.deviceInp);
            this.parameterFC.reset([]);
            this.emitFilter.emit();
        }
    }
    getParameterByDeviceID(selectedDevices) {
        return __awaiter(this, void 0, void 0, function* () {
            this.allParameterID = [];
            let requestBody = {};
            requestBody['deviceID'] = [selectedDevices];
            this.parameterM = (yield this.parameterService.getParameterByDeviceID(this.orgID, requestBody));
            this.paramSearchUtil.entityArr = this.parameterM;
            this.paramSearchUtil.createSubscription();
            this.totalParameterCount = this.parameterM.length;
            this.parameterM.forEach(parameter => this.allParameterID.push(parameter['paramMetric']));
            this.emitFilter.emit();
        });
    }
    selectAllParameters() {
        if (!this.parameterFC.value.includes(-1)) {
            this.parameterFC.reset([]);
            return;
        }
        this.parameterFC.setValue([-1, ...this.allParameterID]);
        this.emitFilter.emit();
    }
    selectedParameters() {
        const selected = this.parameterFC.value;
        if (selected.includes(-1)) {
            selected.shift();
            this.parameterFC.patchValue(selected);
        }
        else if (this.parameterFC.value.length == this.totalParameterCount) {
            this.allParameterID.splice(0, 0, -1);
            this.parameterFC.patchValue(this.allParameterID);
        }
        else {
            const filteredSelected = selected.filter(s => s != -1);
            this.parameterFC.patchValue(filteredSelected);
        }
        this.emitFilter.emit();
    }
}
ParamMetricComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParamMetricComponent, deps: [{ token: i1.StorageService }, { token: i2.ParameterService }], target: i0.ɵɵFactoryTarget.Component });
ParamMetricComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParamMetricComponent, selector: "lib-param-metric", inputs: { deviceInp: "deviceInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0, template: "<mat-form-field class=\"matFieldWidth100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n    <mat-label>Select parameter</mat-label>\n\n    <mat-select [formControl]=\"parameterFC\" multiple required>\n        <ng-container *ngIf=\"parameterM && parameterM.length > 0 && parameterM[0]['id']; else noDataOption\">\n            <ngx-mat-select-search [formControl]=\"paramSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                noEntriesFoundLabel=\"No matching name found.\">\n            </ngx-mat-select-search>\n            <mat-option [value]=\"-1\" (click)=\"selectAllParameters()\" [hidden]=\"paramSearchUtil.filterFC.value\">\n                Select all\n            </mat-option>\n            <mat-option *ngFor=\"let parameter of paramSearchUtil.filteredEntities | async\" [value]=\"parameter.paramMetric\"\n                (click)=\"selectedParameters()\">\n                {{ parameter.label }}\n            </mat-option>\n        </ng-container>\n        <ng-template #noDataOption>\n            <mat-option disabled>\n                {{ commonConstant.NO_DATA_FOUND }}\n            </mat-option>\n        </ng-template>\n    </mat-select>\n\n    <mat-error *ngIf=\"!deviceInp\">\n        Please select device first\n    </mat-error>\n    <mat-error *ngIf=\"parameterFC.touched && parameterFC.hasError('required') && deviceInp\">\n        {{ FormErrorEnum.REQUIRED }}\n    </mat-error>\n</mat-form-field>", components: [{ type: i3.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i3.MatLabel, selector: "mat-label" }, { type: i7.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i8.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParamMetricComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-param-metric',
                    templateUrl: './param-metric.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.StorageService }, { type: i2.ParameterService }]; }, propDecorators: { deviceInp: [{
                type: Input
            }], emitFilter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW0tbWV0cmljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2Ryb3Bkb3duL3BhcmFtLW1ldHJpYy9wYXJhbS1tZXRyaWMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZHJvcGRvd24vcGFyYW0tbWV0cmljL3BhcmFtLW1ldHJpYy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sZ0NBQWdDLENBQUM7QUFJdkUsY0FBYztBQUNkLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixFQUFFLDJCQUEyQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7QUFFMUgsZ0JBQWdCO0FBUWhCLE1BQU0sT0FBTyxvQkFBb0I7SUFxQjdCLFlBQ1ksY0FBOEIsRUFDOUIsZ0JBQWtDO1FBRGxDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBdEI5QyxnQ0FBMkIsR0FBRywyQkFBMkIsQ0FBQTtRQUN6RCxtQkFBYyxHQUFHLGVBQWUsQ0FBQztRQUVqQyxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQU05QixlQUFVLEdBQUcsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFL0IsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFDM0Is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QUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3BEO2FBQU07WUFDSCxNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOztrSEFqRlEsb0JBQW9CO3NHQUFwQixvQkFBb0Isd0pDbEJqQyxtN0NBNkJpQjs0RkRYSixvQkFBb0I7a0JBTmhDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsV0FBVyxFQUFFLCtCQUErQjtvQkFDNUMsTUFBTSxFQUFFLEVBQ1A7aUJBQ0o7b0lBUUcsU0FBUztzQkFEUixLQUFLO2dCQWFOLFVBQVU7c0JBRFQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBQYXJhbWV0ZXIsIFBhcmFtZXRlck0gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wYXJhbWV0ZXIubW9kZWwnO1xuXG5pbXBvcnQgeyBQYXJhbWV0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZS9wYXJhbWV0ZXIuc2VydmljZSc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBDT01NT05fQ09OU1RBTlQsIEZvcm1FcnJvckVudW0sIE1hdFNlbGVjdFNlYXJjaFNlcnZpY2UsIE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZSB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS9zdG9yYWdlLXNlcnZpY2UnO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1wYXJhbS1tZXRyaWMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYXJhbS1tZXRyaWMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFyYW1NZXRyaWNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZSA9IE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZVxuICAgIGNvbW1vbkNvbnN0YW50ID0gQ09NTU9OX0NPTlNUQU5UO1xuXG4gICAgRm9ybUVycm9yRW51bSA9IEZvcm1FcnJvckVudW07XG5cbiAgICBASW5wdXQoKVxuICAgIGRldmljZUlucDogYW55O1xuXG4gICAgb3JnSUQ6IGFueTtcbiAgICBwYXJhbWV0ZXJNID0gW25ldyBQYXJhbWV0ZXIoKV07XG5cbiAgICBhbGxQYXJhbWV0ZXJJRDogYW55W10gPSBbXTtcbiAgICB0b3RhbFBhcmFtZXRlckNvdW50OiBudW1iZXIgPSAwO1xuXG4gICAgcGFyYW1ldGVyRkM6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFtdLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pO1xuICAgIHBhcmFtU2VhcmNoVXRpbDogTWF0U2VsZWN0U2VhcmNoU2VydmljZSA9IG5ldyBNYXRTZWxlY3RTZWFyY2hTZXJ2aWNlKFsnbGFiZWwnXSk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBlbWl0RmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhcmFtZXRlclNlcnZpY2U6IFBhcmFtZXRlclNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3JnSUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2N1cnJlbnRPcmdJRCcpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuZGV2aWNlSW5wICYmIHRoaXMuZGV2aWNlSW5wKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBhcmFtZXRlckJ5RGV2aWNlSUQodGhpcy5kZXZpY2VJbnApO1xuXG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlckZDLnJlc2V0KFtdKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdEZpbHRlci5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRQYXJhbWV0ZXJCeURldmljZUlEKHNlbGVjdGVkRGV2aWNlcykge1xuICAgICAgICB0aGlzLmFsbFBhcmFtZXRlcklEID0gW107XG5cbiAgICAgICAgbGV0IHJlcXVlc3RCb2R5ID0ge307XG4gICAgICAgIHJlcXVlc3RCb2R5WydkZXZpY2VJRCddID0gW3NlbGVjdGVkRGV2aWNlc107XG5cbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJNID0gPFBhcmFtZXRlck1bXT5hd2FpdCB0aGlzLnBhcmFtZXRlclNlcnZpY2UuZ2V0UGFyYW1ldGVyQnlEZXZpY2VJRCh0aGlzLm9yZ0lELCByZXF1ZXN0Qm9keSk7XG5cbiAgICAgICAgdGhpcy5wYXJhbVNlYXJjaFV0aWwuZW50aXR5QXJyID0gdGhpcy5wYXJhbWV0ZXJNO1xuICAgICAgICB0aGlzLnBhcmFtU2VhcmNoVXRpbC5jcmVhdGVTdWJzY3JpcHRpb24oKTtcblxuICAgICAgICB0aGlzLnRvdGFsUGFyYW1ldGVyQ291bnQgPSB0aGlzLnBhcmFtZXRlck0ubGVuZ3RoO1xuICAgICAgICB0aGlzLnBhcmFtZXRlck0uZm9yRWFjaChwYXJhbWV0ZXIgPT4gdGhpcy5hbGxQYXJhbWV0ZXJJRC5wdXNoKHBhcmFtZXRlclsncGFyYW1NZXRyaWMnXSkpO1xuXG4gICAgICAgIHRoaXMuZW1pdEZpbHRlci5lbWl0KCk7XG4gICAgfVxuXG4gICAgc2VsZWN0QWxsUGFyYW1ldGVycygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhcmFtZXRlckZDLnZhbHVlLmluY2x1ZGVzKC0xKSkge1xuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJGQy5yZXNldChbXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJGQy5zZXRWYWx1ZShbLTEsIC4uLnRoaXMuYWxsUGFyYW1ldGVySURdKTtcblxuICAgICAgICB0aGlzLmVtaXRGaWx0ZXIuZW1pdCgpO1xuICAgIH1cblxuICAgIHNlbGVjdGVkUGFyYW1ldGVycygpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnBhcmFtZXRlckZDLnZhbHVlO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZC5pbmNsdWRlcygtMSkpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlckZDLnBhdGNoVmFsdWUoc2VsZWN0ZWQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFyYW1ldGVyRkMudmFsdWUubGVuZ3RoID09IHRoaXMudG90YWxQYXJhbWV0ZXJDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5hbGxQYXJhbWV0ZXJJRC5zcGxpY2UoMCwgMCwgLTEpO1xuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJGQy5wYXRjaFZhbHVlKHRoaXMuYWxsUGFyYW1ldGVySUQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRTZWxlY3RlZCA9IHNlbGVjdGVkLmZpbHRlcihzID0+IHMgIT0gLTEpO1xuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJGQy5wYXRjaFZhbHVlKGZpbHRlcmVkU2VsZWN0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbWl0RmlsdGVyLmVtaXQoKTtcbiAgICB9XG5cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIm1hdEZpZWxkV2lkdGgxMDBcIiBbYXBwZWFyYW5jZV09XCJtYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2UuRk9STV9GSUVMRF9BUFBFQVJBTkNFXCI+XG4gICAgPG1hdC1sYWJlbD5TZWxlY3QgcGFyYW1ldGVyPC9tYXQtbGFiZWw+XG5cbiAgICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwicGFyYW1ldGVyRkNcIiBtdWx0aXBsZSByZXF1aXJlZD5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhcmFtZXRlck0gJiYgcGFyYW1ldGVyTS5sZW5ndGggPiAwICYmIHBhcmFtZXRlck1bMF1bJ2lkJ107IGVsc2Ugbm9EYXRhT3B0aW9uXCI+XG4gICAgICAgICAgICA8bmd4LW1hdC1zZWxlY3Qtc2VhcmNoIFtmb3JtQ29udHJvbF09XCJwYXJhbVNlYXJjaFV0aWwuZmlsdGVyRkNcIiBwbGFjZWhvbGRlckxhYmVsPVwiU2VhcmNoIGJ5IG5hbWVcIlxuICAgICAgICAgICAgICAgIG5vRW50cmllc0ZvdW5kTGFiZWw9XCJObyBtYXRjaGluZyBuYW1lIGZvdW5kLlwiPlxuICAgICAgICAgICAgPC9uZ3gtbWF0LXNlbGVjdC1zZWFyY2g+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwiLTFcIiAoY2xpY2spPVwic2VsZWN0QWxsUGFyYW1ldGVycygpXCIgW2hpZGRlbl09XCJwYXJhbVNlYXJjaFV0aWwuZmlsdGVyRkMudmFsdWVcIj5cbiAgICAgICAgICAgICAgICBTZWxlY3QgYWxsXG4gICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgcGFyYW1ldGVyIG9mIHBhcmFtU2VhcmNoVXRpbC5maWx0ZXJlZEVudGl0aWVzIHwgYXN5bmNcIiBbdmFsdWVdPVwicGFyYW1ldGVyLnBhcmFtTWV0cmljXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0ZWRQYXJhbWV0ZXJzKClcIj5cbiAgICAgICAgICAgICAgICB7eyBwYXJhbWV0ZXIubGFiZWwgfX1cbiAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjbm9EYXRhT3B0aW9uPlxuICAgICAgICAgICAgPG1hdC1vcHRpb24gZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAge3sgY29tbW9uQ29uc3RhbnQuTk9fREFUQV9GT1VORCB9fVxuICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvbWF0LXNlbGVjdD5cblxuICAgIDxtYXQtZXJyb3IgKm5nSWY9XCIhZGV2aWNlSW5wXCI+XG4gICAgICAgIFBsZWFzZSBzZWxlY3QgZGV2aWNlIGZpcnN0XG4gICAgPC9tYXQtZXJyb3I+XG4gICAgPG1hdC1lcnJvciAqbmdJZj1cInBhcmFtZXRlckZDLnRvdWNoZWQgJiYgcGFyYW1ldGVyRkMuaGFzRXJyb3IoJ3JlcXVpcmVkJykgJiYgZGV2aWNlSW5wXCI+XG4gICAgICAgIHt7IEZvcm1FcnJvckVudW0uUkVRVUlSRUQgfX1cbiAgICA8L21hdC1lcnJvcj5cbjwvbWF0LWZvcm0tZmllbGQ+Il19