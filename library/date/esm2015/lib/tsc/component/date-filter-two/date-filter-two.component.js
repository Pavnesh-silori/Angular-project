import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateInputTypeEnum } from '../../enum/date.enum';
import { FrequencyEnum } from '../../enum/frequency.enum';
import { FREQUENCY_CONSTANT } from '../../constant/frequency.constant';
// tsc-library
import { MaterialFormFieldAppearance } from '@library/tsc-common';
import * as i0 from "@angular/core";
import * as i1 from "../../service/date.service";
import * as i2 from "@angular/material/button-toggle";
import * as i3 from "../date-input/date-input.component";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
// /tsc-library/
export class DateFilterTwoComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.frequencyEnum = FrequencyEnum;
        this.dateInputTypeEnum = DateInputTypeEnum;
        this.frequencyInp = [];
        this.formFieldAppearance = MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE_STANDARD;
        this.frequency = FREQUENCY_CONSTANT;
        this.frequencyFC = new FormControl(this.frequencyEnum.DAILY);
        this.durationFC = new FormControl();
        this.startDateFC = new FormControl();
        this.endDateFC = new FormControl();
        this.dateFilterEmitter = new EventEmitter();
    }
    ngOnInit() {
        this.formFieldAppearance = this.materialFormFieldAppearanceInp;
        this.dateType = this.dateTypeInp;
        this.timezone = this.timezoneInp;
        this.label = this.labelInp;
        this.cdrFormat = this.cdrFormatInp;
        this.showDefaultDuration = this.showDefaultDurationInp;
        this.range = this.rangeInp;
        this.showRange = this.showRangeInp;
        this.showTimeInCDR = this.showTimeInCDRInp;
        this.showCdrRangeLabel = this.showCdrRangeLabelInp;
        this.showRange = this.showRangeInp;
        this.showTimeInCDR = this.showTimeInCDRInp;
    }
    ngOnChanges(changes) {
        if (changes.defaultFrequencyInp && this.defaultFrequencyInp) {
            this.frequencyFC.patchValue(this.defaultFrequencyInp);
        }
        if (changes.frequencyInp && this.frequencyInp) {
            this.frequency = this.frequencyInp;
        }
    }
    onChange() {
        let duration;
        let startDate;
        let endDate;
        switch (this.frequencyFC.value) {
            case this.frequencyEnum.DAILY:
                duration = this.dayDateInput.durationFC.value;
                startDate = this.dayDateInput.startDateFC.value;
                endDate = this.dayDateInput.endDateFC.value;
                break;
            case this.frequencyEnum.MONTHLY:
                duration = this.monthDateInput.durationFC.value;
                startDate = this.monthDateInput.startDateFC.value;
                endDate = this.monthDateInput.endDateFC.value;
                break;
            case this.frequencyEnum.YEARLY:
                duration = this.yearDateInput.durationFC.value;
                startDate = this.yearDateInput.startDateFC.value;
                endDate = this.yearDateInput.endDateFC.value;
                break;
            case this.frequencyEnum.CUSTOM:
                duration = this.customDateInput.durationFC.value;
                startDate = this.customDateInput.startDateFC.value;
                endDate = this.customDateInput.endDateFC.value;
                break;
            default:
                console.log('undefined case encountered!');
        }
        this.durationFC.patchValue(duration);
        this.startDateFC.patchValue(startDate);
        this.endDateFC.patchValue(endDate);
        this.dateFilterEmitter.emit({ frequency: this.frequencyFC.value, duration: this.durationFC.value, startDate: this.startDateFC.value, endDate: this.endDateFC.value });
    }
}
DateFilterTwoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterTwoComponent, deps: [{ token: i1.DateService }], target: i0.ɵɵFactoryTarget.Component });
DateFilterTwoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: { materialFormFieldAppearanceInp: "materialFormFieldAppearanceInp", frequencyInp: "frequencyInp", defaultFrequencyInp: "defaultFrequencyInp", dateTypeInp: "dateTypeInp", timezoneInp: "timezoneInp", labelInp: "labelInp", showDefaultDurationInp: "showDefaultDurationInp", cdrFormatInp: "cdrFormatInp", rangeInp: "rangeInp", showRangeInp: "showRangeInp", showTimeInCDRInp: "showTimeInCDRInp", showCdrRangeLabelInp: "showCdrRangeLabelInp" }, outputs: { dateFilterEmitter: "dateFilterEmitter" }, viewQueries: [{ propertyName: "dayDateInput", first: true, predicate: ["dayDateInput"], descendants: true }, { propertyName: "monthDateInput", first: true, predicate: ["monthDateInput"], descendants: true }, { propertyName: "yearDateInput", first: true, predicate: ["yearDateInput"], descendants: true }, { propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"frequencyFC\">\n    <mat-button-toggle *ngFor=\"let freq of frequency\" value=\"{{ freq.keyID }}\" (click)=\"onChange()\">\n        {{ freq.name }}\n    </mat-button-toggle>\n</mat-button-toggle-group>\n\n<lib-date-input class=\"ms-3\" [ngClass]=\"{'d-none': frequencyFC.value != frequencyEnum.DAILY}\" #dayDateInput\n    (emitFilter)=\"frequencyFC.value == frequencyEnum.DAILY && onChange()\" [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [dateTypeInp]=\"dateType\"\n    [dateInputTypeInp]=\"dateInputTypeEnum.DAY_INPUT\" [showDefaultDurationInp]=\"showDefaultDuration\" [labelInp]=\"label\"\n    [timezoneInp]=\"timezone\"></lib-date-input>\n\n<lib-date-input class=\"ms-3\" [ngClass]=\"{'d-none': frequencyFC.value != frequencyEnum.MONTHLY}\" #monthDateInput\n    (emitFilter)=\"frequencyFC.value == frequencyEnum.MONTHLY && onChange()\" [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [dateTypeInp]=\"dateType\"\n    [dateInputTypeInp]=\"dateInputTypeEnum.MONTH_INPUT\" [showDefaultDurationInp]=\"showDefaultDuration\" [labelInp]=\"label\"\n    [timezoneInp]=\"timezone\"></lib-date-input>\n\n<lib-date-input class=\"ms-3\" [ngClass]=\"{'d-none': frequencyFC.value != frequencyEnum.YEARLY}\" #yearDateInput\n    (emitFilter)=\"frequencyFC.value == frequencyEnum.YEARLY && onChange()\" [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [dateTypeInp]=\"dateType\"\n    [dateInputTypeInp]=\"dateInputTypeEnum.YEAR_INPUT\" [showDefaultDurationInp]=\"showDefaultDuration\" [labelInp]=\"label\"\n    [timezoneInp]=\"timezone\"></lib-date-input>\n\n<lib-date-input class=\"ms-3\" [ngClass]=\"{'d-none': frequencyFC.value != frequencyEnum.CUSTOM}\" #customDateInput\n    (emitFilter)=\"frequencyFC.value == frequencyEnum.CUSTOM && onChange()\" [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [dateTypeInp]=\"dateType\"\n    [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\" [showDefaultDurationInp]=\"showDefaultDuration\"\n    [showCdrRangeLabelInp]=\"showCdrRangeLabel\" [labelInp]=\"label\" [timezoneInp]=\"timezone\" [rangeInp]=\"\"\n    [showTimeInCDRInp]=\"showTimeInCDR\" [showRangeInp]=\"showRange\"></lib-date-input>", components: [{ type: i2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i3.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }], directives: [{ type: i2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterTwoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-date-filter-two',
                    templateUrl: './date-filter-two.component.html',
                    styleUrls: []
                }]
        }], ctorParameters: function () { return [{ type: i1.DateService }]; }, propDecorators: { materialFormFieldAppearanceInp: [{
                type: Input
            }], frequencyInp: [{
                type: Input
            }], defaultFrequencyInp: [{
                type: Input
            }], dateTypeInp: [{
                type: Input
            }], timezoneInp: [{
                type: Input
            }], labelInp: [{
                type: Input
            }], showDefaultDurationInp: [{
                type: Input
            }], cdrFormatInp: [{
                type: Input
            }], rangeInp: [{
                type: Input
            }], showRangeInp: [{
                type: Input
            }], showTimeInCDRInp: [{
                type: Input
            }], showCdrRangeLabelInp: [{
                type: Input
            }], dateFilterEmitter: [{
                type: Output
            }], dayDateInput: [{
                type: ViewChild,
                args: ['dayDateInput']
            }], monthDateInput: [{
                type: ViewChild,
                args: ['monthDateInput']
            }], yearDateInput: [{
                type: ViewChild,
                args: ['yearDateInput']
            }], customDateInput: [{
                type: ViewChild,
                args: ['customDateInput']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1maWx0ZXItdHdvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZGF0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZGF0ZS1maWx0ZXItdHdvL2RhdGUtZmlsdGVyLXR3by5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L2RhdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2RhdGUtZmlsdGVyLXR3by9kYXRlLWZpbHRlci10d28uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBTXZFLGNBQWM7QUFDZCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQUNsRSxnQkFBZ0I7QUFRaEIsTUFBTSxPQUFPLHNCQUFzQjtJQWlFL0IsWUFDVyxXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWpFbkMsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFDOUIsc0JBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFNdEMsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFnQ3pCLHdCQUFtQixHQUFHLDJCQUEyQixDQUFDLDhCQUE4QixDQUFDO1FBQ2pGLGNBQVMsR0FBRyxrQkFBa0IsQ0FBQztRQVkvQixnQkFBVyxHQUFH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LFdBQVc7c0JBRFYsS0FBSztnQkFJTixXQUFXO3NCQURWLEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUlOLHNCQUFzQjtzQkFEckIsS0FBSztnQkFJTixZQUFZO3NCQURYLEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUlOLFlBQVk7c0JBRFgsS0FBSztnQkFJTixnQkFBZ0I7c0JBRGYsS0FBSztnQkFJTixvQkFBb0I7c0JBRG5CLEtBQUs7Z0JBcUJJLGlCQUFpQjtzQkFBMUIsTUFBTTtnQkFFb0IsWUFBWTtzQkFBdEMsU0FBUzt1QkFBQyxjQUFjO2dCQUNJLGNBQWM7c0JBQTFDLFNBQVM7dUJBQUMsZ0JBQWdCO2dCQUNDLGFBQWE7c0JBQXhDLFNBQVM7dUJBQUMsZUFBZTtnQkFDSSxlQUFlO3NCQUE1QyxTQUFTO3VCQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGF0ZUlucHV0VHlwZUVudW0sIERhdGVUeXBlRW51bSB9IGZyb20gJy4uLy4uL2VudW0vZGF0ZS5lbnVtJztcbmltcG9ydCB7IEZyZXF1ZW5jeUVudW0gfSBmcm9tICcuLi8uLi9lbnVtL2ZyZXF1ZW5jeS5lbnVtJztcbmltcG9ydCB7IEZSRVFVRU5DWV9DT05TVEFOVCB9IGZyb20gJy4uLy4uL2NvbnN0YW50L2ZyZXF1ZW5jeS5jb25zdGFudCc7XG5cbmltcG9ydCB7IERhdGVJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uL2RhdGUtaW5wdXQvZGF0ZS1pbnB1dC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBEYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvZGF0ZS5zZXJ2aWNlJztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZSB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1kYXRlLWZpbHRlci10d28nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kYXRlLWZpbHRlci10d28uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRlRmlsdGVyVHdvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBmcmVxdWVuY3lFbnVtID0gRnJlcXVlbmN5RW51bTtcbiAgICBkYXRlSW5wdXRUeXBlRW51bSA9IERhdGVJbnB1dFR5cGVFbnVtO1xuXG4gICAgQElucHV0KClcbiAgICBtYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2VJbnA6IE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZTtcblxuICAgIEBJbnB1dCgpXG4gICAgZnJlcXVlbmN5SW5wOiBhbnlbXSA9IFtdO1xuXG4gICAgQElucHV0KClcbiAgICBkZWZhdWx0RnJlcXVlbmN5SW5wOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIGRhdGVUeXBlSW5wOiBEYXRlVHlwZUVudW07XG5cbiAgICBASW5wdXQoKVxuICAgIHRpbWV6b25lSW5wOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIGxhYmVsSW5wOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHNob3dEZWZhdWx0RHVyYXRpb25JbnA6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIGNkckZvcm1hdElucDogc3RyaW5nOyAgICAgICAgICAgICAgICAgICAvKkNEUjogQ3VzdG9tIERhdGUgUmFuZ2UgKi9cblxuICAgIEBJbnB1dCgpXG4gICAgcmFuZ2VJbnA6IGFueTtcblxuICAgIEBJbnB1dCgpXG4gICAgc2hvd1JhbmdlSW5wOiBib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBzaG93VGltZUluQ0RSSW5wOiBib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBzaG93Q2RyUmFuZ2VMYWJlbElucDogYm9vbGVhbjtcblxuICAgIGZvcm1GaWVsZEFwcGVhcmFuY2UgPSBNYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2UuRk9STV9GSUVMRF9BUFBFQVJBTkNFX1NUQU5EQVJEO1xuICAgIGZyZXF1ZW5jeSA9IEZSRVFVRU5DWV9DT05TVEFOVDtcblxuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgZGF0ZVR5cGU6IHN0cmluZztcbiAgICBjZHJGb3JtYXQ6IHN0cmluZztcbiAgICBzaG93RGVmYXVsdER1cmF0aW9uOiBib29sZWFuO1xuICAgIHJhbmdlOiBhbnk7XG4gICAgc2hvd1JhbmdlOiBib29sZWFuO1xuICAgIHNob3dUaW1lSW5DRFI6IGJvb2xlYW47XG4gICAgc2hvd0NkclJhbmdlTGFiZWw6IGJvb2xlYW47XG4gICAgdGltZXpvbmU6IHN0cmluZztcblxuICAgIGZyZXF1ZW5jeUZDID0gbmV3IEZvcm1Db250cm9sKHRoaXMuZnJlcXVlbmN5RW51bS5EQUlMWSk7XG4gICAgZHVyYXRpb25GQyA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICAgIHN0YXJ0RGF0ZUZDID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICAgZW5kRGF0ZUZDID0gbmV3IEZvcm1Db250cm9sKCk7XG5cbiAgICBAT3V0cHV0KCkgZGF0ZUZpbHRlckVtaXR0ZXI6IEV2ZW50RW1pdHRlcjx7IGZyZXF1ZW5jeTogc3RyaW5nLCBkdXJhdGlvbjogc3RyaW5nLCBzdGFydERhdGU6IHN0cmluZywgZW5kRGF0ZTogc3RyaW5nIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQFZpZXdDaGlsZCgnZGF5RGF0ZUlucHV0JykgZGF5RGF0ZUlucHV0OiBEYXRlSW5wdXRDb21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZCgnbW9udGhEYXRlSW5wdXQnKSBtb250aERhdGVJbnB1dDogRGF0ZUlucHV0Q29tcG9uZW50O1xuICAgIEBWaWV3Q2hpbGQoJ3llYXJEYXRlSW5wdXQnKSB5ZWFyRGF0ZUlucHV0OiBEYXRlSW5wdXRDb21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZCgnY3VzdG9tRGF0ZUlucHV0JykgY3VzdG9tRGF0ZUlucHV0OiBEYXRlSW5wdXRDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGRhdGVTZXJ2aWNlOiBEYXRlU2VydmljZSxcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybUZpZWxkQXBwZWFyYW5jZSA9IHRoaXMubWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlSW5wO1xuICAgICAgICB0aGlzLmRhdGVUeXBlID0gdGhpcy5kYXRlVHlwZUlucDtcbiAgICAgICAgdGhpcy50aW1lem9uZSA9IHRoaXMudGltZXpvbmVJbnA7XG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLmxhYmVsSW5wO1xuICAgICAgICB0aGlzLmNkckZvcm1hdCA9IHRoaXMuY2RyRm9ybWF0SW5wO1xuICAgICAgICB0aGlzLnNob3dEZWZhdWx0RHVyYXRpb24gPSB0aGlzLnNob3dEZWZhdWx0RHVyYXRpb25JbnA7XG4gICAgICAgIHRoaXMucmFuZ2UgPSB0aGlzLnJhbmdlSW5wO1xuICAgICAgICB0aGlzLnNob3dSYW5nZSA9IHRoaXMuc2hvd1JhbmdlSW5wO1xuICAgICAgICB0aGlzLnNob3dUaW1lSW5DRFIgPSB0aGlzLnNob3dUaW1lSW5DRFJJbnA7XG4gICAgICAgIHRoaXMuc2hvd0NkclJhbmdlTGFiZWwgPSB0aGlzLnNob3dDZHJSYW5nZUxhYmVsSW5wO1xuICAgICAgICB0aGlzLnNob3dSYW5nZSA9IHRoaXMuc2hvd1JhbmdlSW5wO1xuICAgICAgICB0aGlzLnNob3dUaW1lSW5DRFIgPSB0aGlzLnNob3dUaW1lSW5DRFJJbnA7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAoY2hhbmdlcy5kZWZhdWx0RnJlcXVlbmN5SW5wICYmIHRoaXMuZGVmYXVsdEZyZXF1ZW5jeUlucCkge1xuICAgICAgICAgICAgdGhpcy5mcmVxdWVuY3lGQy5wYXRjaFZhbHVlKHRoaXMuZGVmYXVsdEZyZXF1ZW5jeUlucCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5mcmVxdWVuY3lJbnAgJiYgdGhpcy5mcmVxdWVuY3lJbnApIHtcbiAgICAgICAgICAgIHRoaXMuZnJlcXVlbmN5ID0gdGhpcy5mcmVxdWVuY3lJbnA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgbGV0IGR1cmF0aW9uO1xuICAgICAgICBsZXQgc3RhcnREYXRlO1xuICAgICAgICBsZXQgZW5kRGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuZnJlcXVlbmN5RkMudmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5mcmVxdWVuY3lFbnVtLkRBSUxZOlxuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gdGhpcy5kYXlEYXRlSW5wdXQuZHVyYXRpb25GQy52YWx1ZTtcbiAgICAgICAgICAgICAgICBzdGFydERhdGUgPSB0aGlzLmRheURhdGVJbnB1dC5zdGFydERhdGVGQy52YWx1ZTtcbiAgICAgICAgICAgICAgICBlbmREYXRlID0gdGhpcy5kYXlEYXRlSW5wdXQuZW5kRGF0ZUZDLnZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLmZyZXF1ZW5jeUVudW0uTU9OVEhMWTpcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHRoaXMubW9udGhEYXRlSW5wdXQuZHVyYXRpb25GQy52YWx1ZTtcbiAgICAgICAgICAgICAgICBzdGFydERhdGUgPSB0aGlzLm1vbnRoRGF0ZUlucHV0LnN0YXJ0RGF0ZUZDLnZhbHVlO1xuICAgICAgICAgICAgICAgIGVuZERhdGUgPSB0aGlzLm1vbnRoRGF0ZUlucHV0LmVuZERhdGVGQy52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5mcmVxdWVuY3lFbnVtLllFQVJMWTpcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHRoaXMueWVhckRhdGVJbnB1dC5kdXJhdGlvbkZDLnZhbHVlO1xuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZSA9IHRoaXMueWVhckRhdGVJbnB1dC5zdGFydERhdGVGQy52YWx1ZTtcbiAgICAgICAgICAgICAgICBlbmREYXRlID0gdGhpcy55ZWFyRGF0ZUlucHV0LmVuZERhdGVGQy52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5mcmVxdWVuY3lFbnVtLkNVU1RPTTpcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHRoaXMuY3VzdG9tRGF0ZUlucHV0LmR1cmF0aW9uRkMudmFsdWU7XG4gICAgICAgICAgICAgICAgc3RhcnREYXRlID0gdGhpcy5jdXN0b21EYXRlSW5wdXQuc3RhcnREYXRlRkMudmFsdWU7XG4gICAgICAgICAgICAgICAgZW5kRGF0ZSA9IHRoaXMuY3VzdG9tRGF0ZUlucHV0LmVuZERhdGVGQy52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZGVmaW5lZCBjYXNlIGVuY291bnRlcmVkIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kdXJhdGlvbkZDLnBhdGNoVmFsdWUoZHVyYXRpb24pO1xuICAgICAgICB0aGlzLnN0YXJ0RGF0ZUZDLnBhdGNoVmFsdWUoc3RhcnREYXRlKTtcbiAgICAgICAgdGhpcy5lbmREYXRlRkMucGF0Y2hWYWx1ZShlbmREYXRlKTtcblxuICAgICAgICB0aGlzLmRhdGVGaWx0ZXJFbWl0dGVyLmVtaXQoeyBmcmVxdWVuY3k6IHRoaXMuZnJlcXVlbmN5RkMudmFsdWUsIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uRkMudmFsdWUsIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGVGQy52YWx1ZSwgZW5kRGF0ZTogdGhpcy5lbmREYXRlRkMudmFsdWUgfSk7XG4gICAgfVxuXG59IiwiPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIGNsYXNzPVwibWF0QnRuRmlsdGVyXCIgW2Zvcm1Db250cm9sXT1cImZyZXF1ZW5jeUZDXCI+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlICpuZ0Zvcj1cImxldCBmcmVxIG9mIGZyZXF1ZW5jeVwiIHZhbHVlPVwie3sgZnJlcS5rZXlJRCB9fVwiIChjbGljayk9XCJvbkNoYW5nZSgpXCI+XG4gICAgICAgIHt7IGZyZXEubmFtZSB9fVxuICAgIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG48L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuXG48bGliLWRhdGUtaW5wdXQgY2xhc3M9XCJtcy0zXCIgW25nQ2xhc3NdPVwieydkLW5vbmUnOiBmcmVxdWVuY3lGQy52YWx1ZSAhPSBmcmVxdWVuY3lFbnVtLkRBSUxZfVwiICNkYXlEYXRlSW5wdXRcbiAgICAoZW1pdEZpbHRlcik9XCJmcmVxdWVuY3lGQy52YWx1ZSA9PSBmcmVxdWVuY3lFbnVtLkRBSUxZICYmIG9uQ2hhbmdlKClcIiBbbWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlSW5wXT1cImZvcm1GaWVsZEFwcGVhcmFuY2VcIiBbZGF0ZVR5cGVJbnBdPVwiZGF0ZVR5cGVcIlxuICAgIFtkYXRlSW5wdXRUeXBlSW5wXT1cImRhdGVJbnB1dFR5cGVFbnVtLkRBWV9JTlBVVFwiIFtzaG93RGVmYXVsdER1cmF0aW9uSW5wXT1cInNob3dEZWZhdWx0RHVyYXRpb25cIiBbbGFiZWxJbnBdPVwibGFiZWxcIlxuICAgIFt0aW1lem9uZUlucF09XCJ0aW1lem9uZVwiPjwvbGliLWRhdGUtaW5wdXQ+XG5cbjxsaWItZGF0ZS1pbnB1dCBjbGFzcz1cIm1zLTNcIiBbbmdDbGFzc109XCJ7J2Qtbm9uZSc6IGZyZXF1ZW5jeUZDLnZhbHVlICE9IGZyZXF1ZW5jeUVudW0uTU9OVEhMWX1cIiAjbW9udGhEYXRlSW5wdXRcbiAgICAoZW1pdEZpbHRlcik9XCJmcmVxdWVuY3lGQy52YWx1ZSA9PSBmcmVxdWVuY3lFbnVtLk1PTlRITFkgJiYgb25DaGFuZ2UoKVwiIFttYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2VJbnBdPVwiZm9ybUZpZWxkQXBwZWFyYW5jZVwiIFtkYXRlVHlwZUlucF09XCJkYXRlVHlwZVwiXG4gICAgW2RhdGVJbnB1dFR5cGVJbnBdPVwiZGF0ZUlucHV0VHlwZUVudW0uTU9OVEhfSU5QVVRcIiBbc2hvd0RlZmF1bHREdXJhdGlvbklucF09XCJzaG93RGVmYXVsdER1cmF0aW9uXCIgW2xhYmVsSW5wXT1cImxhYmVsXCJcbiAgICBbdGltZXpvbmVJbnBdPVwidGltZXpvbmVcIj48L2xpYi1kYXRlLWlucHV0PlxuXG48bGliLWRhdGUtaW5wdXQgY2xhc3M9XCJtcy0zXCIgW25nQ2xhc3NdPVwieydkLW5vbmUnOiBmcmVxdWVuY3lGQy52YWx1ZSAhPSBmcmVxdWVuY3lFbnVtLllFQVJMWX1cIiAjeWVhckRhdGVJbnB1dFxuICAgIChlbWl0RmlsdGVyKT1cImZyZXF1ZW5jeUZDLnZhbHVlID09IGZyZXF1ZW5jeUVudW0uWUVBUkxZICYmIG9uQ2hhbmdlKClcIiBbbWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlSW5wXT1cImZvcm1GaWVsZEFwcGVhcmFuY2VcIiBbZGF0ZVR5cGVJbnBdPVwiZGF0ZVR5cGVcIlxuICAgIFtkYXRlSW5wdXRUeXBlSW5wXT1cImRhdGVJbnB1dFR5cGVFbnVtLllFQVJfSU5QVVRcIiBbc2hvd0RlZmF1bHREdXJhdGlvbklucF09XCJzaG93RGVmYXVsdER1cmF0aW9uXCIgW2xhYmVsSW5wXT1cImxhYmVsXCJcbiAgICBbdGltZXpvbmVJbnBdPVwidGltZXpvbmVcIj48L2xpYi1kYXRlLWlucHV0PlxuXG48bGliLWRhdGUtaW5wdXQgY2xhc3M9XCJtcy0zXCIgW25nQ2xhc3NdPVwieydkLW5vbmUnOiBmcmVxdWVuY3lGQy52YWx1ZSAhPSBmcmVxdWVuY3lFbnVtLkNVU1RPTX1cIiAjY3VzdG9tRGF0ZUlucHV0XG4gICAgKGVtaXRGaWx0ZXIpPVwiZnJlcXVlbmN5RkMudmFsdWUgPT0gZnJlcXVlbmN5RW51bS5DVVNUT00gJiYgb25DaGFuZ2UoKVwiIFttYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2VJbnBdPVwiZm9ybUZpZWxkQXBwZWFyYW5jZVwiIFtkYXRlVHlwZUlucF09XCJkYXRlVHlwZVwiXG4gICAgW2RhdGVJbnB1dFR5cGVJbnBdPVwiZGF0ZUlucHV0VHlwZUVudW0uQ1VTVE9NX0lOUFVUXCIgW3Nob3dEZWZhdWx0RHVyYXRpb25JbnBdPVwic2hvd0RlZmF1bHREdXJhdGlvblwiXG4gICAgW3Nob3dDZHJSYW5nZUxhYmVsSW5wXT1cInNob3dDZHJSYW5nZUxhYmVsXCIgW2xhYmVsSW5wXT1cImxhYmVsXCIgW3RpbWV6b25lSW5wXT1cInRpbWV6b25lXCIgW3JhbmdlSW5wXT1cIlwiXG4gICAgW3Nob3dUaW1lSW5DRFJJbnBdPVwic2hvd1RpbWVJbkNEUlwiIFtzaG93UmFuZ2VJbnBdPVwic2hvd1JhbmdlXCI+PC9saWItZGF0ZS1pbnB1dD4iXX0=