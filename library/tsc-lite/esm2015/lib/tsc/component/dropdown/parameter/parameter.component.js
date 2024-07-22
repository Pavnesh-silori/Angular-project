import { __awaiter } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Parameter } from '../../../model/parameter.model';
import { COMMON_CONSTANT, FormErrorEnum, MaterialFormFieldAppearance, MatSelectSearchService } from '@library/tsc-common';
import * as i0 from "@angular/core";
import * as i1 from "@library/storage-service";
import * as i2 from "../../../service/parameter.service";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/material/core";
import * as i6 from "ngx-mat-select-search";
import * as i7 from "@angular/forms";
import * as i8 from "@angular/common";
// /tsc-library/
export class ParameterComponent {
    constructor(storageService, parameterService) {
        this.storageService = storageService;
        this.parameterService = parameterService;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.FormErrorEnum = FormErrorEnum;
        this.emitFilter = new EventEmitter();
        this.parameterM = [new Parameter()];
        this.selectedParameterFC = new FormControl('', [Validators.required]);
        this.parameterSearchUtil = new MatSelectSearchService(['label']);
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getParameterByLayoutID();
    }
    getParameterByLayoutID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.parameterM = (yield this.parameterService.getParameterByLayoutID(this.orgID));
            this.parameterSearchUtil.entityArr = this.parameterM;
            this.parameterSearchUtil.createSubscription();
        });
    }
    parameterChange(selectedParameter) {
        this.selectedParameterFC.patchValue(selectedParameter);
        this.emitFilter.emit();
    }
}
ParameterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterComponent, deps: [{ token: i1.StorageService }, { token: i2.ParameterService }], target: i0.ɵɵFactoryTarget.Component });
ParameterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParameterComponent, selector: "lib-parameter", outputs: { emitFilter: "emitFilter" }, ngImport: i0, template: "<div class=\"row\">\n    <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n        <mat-label>Select parameter</mat-label>\n        <mat-select (selectionChange)=\"parameterChange($event.value)\" [formControl]=\"selectedParameterFC\" required>\n            <ng-container *ngIf=\"parameterM && parameterM.length > 0 && parameterM[0]['id']; else noDataFound\">\n                <mat-option>\n                    <ngx-mat-select-search [formControl]=\"parameterSearchUtil.filterFC\"\n                        placeholderLabel=\"Search by name\" noEntriesFoundLabel=\"No matching name found.\">\n                    </ngx-mat-select-search>\n                </mat-option>\n                <mat-option *ngFor=\"let parameter of parameterSearchUtil.filteredEntities | async\" [value]=\"parameter.id\">\n                    {{ parameter.label }}\n                </mat-option>\n            </ng-container>\n            <ng-template #noDataFound>\n                <mat-option disabled>\n                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                </mat-option>\n            </ng-template>\n        </mat-select>\n        <mat-error *ngIf=\"selectedParameterFC.hasError('required')\">\n            {{ FormErrorEnum.REQUIRED }}\n        </mat-error>\n    </mat-form-field>\n</div>", components: [{ type: i3.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i6.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i3.MatLabel, selector: "mat-label" }, { type: i7.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i8.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-parameter',
                    templateUrl: './parameter.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.StorageService }, { type: i2.ParameterService }]; }, propDecorators: { emitFilter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2Ryb3Bkb3duL3BhcmFtZXRlci9wYXJhbWV0ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZHJvcGRvd24vcGFyYW1ldGVyL3BhcmFtZXRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLFNBQVMsRUFBYyxNQUFNLGdDQUFnQyxDQUFDO0FBTXZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLDJCQUEyQixFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7QUFDMUgsZ0JBQWdCO0FBUWhCLE1BQU0sT0FBTyxrQkFBa0I7SUFrQjNCLFlBQ1ksY0FBOEIsRUFDOUIsZ0JBQWtDO1FBRGxDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBbEI5QyxvQkFBZSxHQUFHLGVBQWUsQ0FBQztRQUNsQyxnQ0FBMkIsR0FBRywyQkFBMkIsQ0FBQztRQUUxRCxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUc5QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUloQyxlQUFVLEdBQUcsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFL0Isd0JBQW1CLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTlFLHdCQUFtQixHQUEyQixJQUFJLHNCQUFzQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUtoRixDQUFDO0lBRUwsUUFBUTtRQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVLLHNCQUFzQjs7WUFDeEIsSUFBSSxDQUFDLFVBQVUsSUFBaUIsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFFL0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3JELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xELENBQUM7S0FBQTtJQUVELGVBQWUsQ0FBQyxpQkFBaUI7UUFDN0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0hBdkNRLGtCQUFrQjtvR0FBbEIsa0JBQWtCLDRGQ2xCL0IsazBDQXdCTTs0RkROTyxrQkFBa0I7a0JBTjlCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7b0JBQ3pDLE1BQU0sRUFBRSxFQUNQO2lCQUNKO29JQVNHLFVBQVU7c0JBRFQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFBhcmFtZXRlciwgUGFyYW1ldGVyTSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3BhcmFtZXRlci5tb2RlbCc7XG5cbmltcG9ydCB7IFBhcmFtZXRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlL3BhcmFtZXRlci5zZXJ2aWNlJztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvc3RvcmFnZS1zZXJ2aWNlJztcbmltcG9ydCB7IENPTU1PTl9DT05TVEFOVCwgRm9ybUVycm9yRW51bSwgTWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlLCBNYXRTZWxlY3RTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLXBhcmFtZXRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhcmFtZXRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQ09NTU9OX0NPTlNUQU5UID0gQ09NTU9OX0NPTlNUQU5UO1xuICAgIE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZSA9IE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZTtcblxuICAgIEZvcm1FcnJvckVudW0gPSBGb3JtRXJyb3JFbnVtO1xuXG4gICAgQE91dHB1dCgpXG4gICAgZW1pdEZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIG9yZ0lEOiBhbnk7XG5cbiAgICBwYXJhbWV0ZXJNID0gW25ldyBQYXJhbWV0ZXIoKV07XG5cbiAgICBzZWxlY3RlZFBhcmFtZXRlckZDOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKTtcblxuICAgIHBhcmFtZXRlclNlYXJjaFV0aWw6IE1hdFNlbGVjdFNlYXJjaFNlcnZpY2UgPSBuZXcgTWF0U2VsZWN0U2VhcmNoU2VydmljZShbJ2xhYmVsJ10pO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhcmFtZXRlclNlcnZpY2U6IFBhcmFtZXRlclNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3JnSUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2N1cnJlbnRPcmdJRCcpO1xuXG4gICAgICAgIHRoaXMuZ2V0UGFyYW1ldGVyQnlMYXlvdXRJRCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFBhcmFtZXRlckJ5TGF5b3V0SUQoKSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyTSA9IDxQYXJhbWV0ZXJNW10+YXdhaXQgdGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLmdldFBhcmFtZXRlckJ5TGF5b3V0SUQodGhpcy5vcmdJRCk7XG5cbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJTZWFyY2hVdGlsLmVudGl0eUFyciA9IHRoaXMucGFyYW1ldGVyTTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJTZWFyY2hVdGlsLmNyZWF0ZVN1YnNjcmlwdGlvbigpO1xuICAgIH1cblxuICAgIHBhcmFtZXRlckNoYW5nZShzZWxlY3RlZFBhcmFtZXRlcikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUGFyYW1ldGVyRkMucGF0Y2hWYWx1ZShzZWxlY3RlZFBhcmFtZXRlcik7XG4gICAgICAgIHRoaXMuZW1pdEZpbHRlci5lbWl0KCk7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwibWF0RmllbGRXaWR0aDEwMFwiIFthcHBlYXJhbmNlXT1cIk1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZS5GT1JNX0ZJRUxEX0FQUEVBUkFOQ0VcIj5cbiAgICAgICAgPG1hdC1sYWJlbD5TZWxlY3QgcGFyYW1ldGVyPC9tYXQtbGFiZWw+XG4gICAgICAgIDxtYXQtc2VsZWN0IChzZWxlY3Rpb25DaGFuZ2UpPVwicGFyYW1ldGVyQ2hhbmdlKCRldmVudC52YWx1ZSlcIiBbZm9ybUNvbnRyb2xdPVwic2VsZWN0ZWRQYXJhbWV0ZXJGQ1wiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhcmFtZXRlck0gJiYgcGFyYW1ldGVyTS5sZW5ndGggPiAwICYmIHBhcmFtZXRlck1bMF1bJ2lkJ107IGVsc2Ugbm9EYXRhRm91bmRcIj5cbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG5neC1tYXQtc2VsZWN0LXNlYXJjaCBbZm9ybUNvbnRyb2xdPVwicGFyYW1ldGVyU2VhcmNoVXRpbC5maWx0ZXJGQ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckxhYmVsPVwiU2VhcmNoIGJ5IG5hbWVcIiBub0VudHJpZXNGb3VuZExhYmVsPVwiTm8gbWF0Y2hpbmcgbmFtZSBmb3VuZC5cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtbWF0LXNlbGVjdC1zZWFyY2g+XG4gICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBwYXJhbWV0ZXIgb2YgcGFyYW1ldGVyU2VhcmNoVXRpbC5maWx0ZXJlZEVudGl0aWVzIHwgYXN5bmNcIiBbdmFsdWVdPVwicGFyYW1ldGVyLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHBhcmFtZXRlci5sYWJlbCB9fVxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNub0RhdGFGb3VuZD5cbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAge3sgQ09NTU9OX0NPTlNUQU5ULk5PX0RBVEFfRk9VTkQgfX1cbiAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJzZWxlY3RlZFBhcmFtZXRlckZDLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgICAgICAgICB7eyBGb3JtRXJyb3JFbnVtLlJFUVVJUkVEIH19XG4gICAgICAgIDwvbWF0LWVycm9yPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj4iXX0=