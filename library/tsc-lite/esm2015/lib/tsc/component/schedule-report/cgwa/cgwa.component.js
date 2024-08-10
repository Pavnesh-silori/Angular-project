import { __awaiter, __rest } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { isEqual } from 'lodash';
import { ScheduleReportTypeEnum } from '../../../enum/schedule-report.enum';
import { ScheduleReport } from '../../../model/schedule-report.model';
// tsc-library
import { MaterialFormFieldAppearance, InvalidForm, ButtonLabelEnum, FormAction, FormErrorEnum, COMMON_CONSTANT, MATERIAL_CONSTANT, ButtonTooltipEnum } from '@library/tsc-common';
import { ToastrColor } from '@library/toastr-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "../../../controller/schedule-report.controller";
import * as i4 from "../../../service/schedule-report.service";
import * as i5 from "@library/storage-service";
import * as i6 from "@library/tsc-common";
import * as i7 from "@library/toastr-service";
import * as i8 from "@angular/material/card";
import * as i9 from "../_shared/configuration/configuration.component";
import * as i10 from "@angular/common";
// /tsc-library/
export class ScheduleReportCgwaComponent {
    constructor(activatedRoute, router, formBuilder, scheduleReportController, scheduleReportService, 
    // tsc-library
    storageService, tscCommonService, toastrService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.scheduleReportController = scheduleReportController;
        this.scheduleReportService = scheduleReportService;
        this.storageService = storageService;
        this.tscCommonService = tscCommonService;
        this.toastrService = toastrService;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.FormAction = FormAction;
        this.FormErrorEnum = FormErrorEnum;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.ButtonTooltipEnum = ButtonTooltipEnum;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.isEqual = true;
        this.scheduleReportI = new ScheduleReport();
        this.errorHandling = (formGroup, controlPath, error) => {
            return formGroup.get(controlPath).hasError(error);
        };
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.scheduleCgwaReportFGInit();
        this.activatedRoute.data.subscribe(data => {
            this.action = data.action;
            this.setPageTitle();
        });
        this.activatedRoute.params.subscribe(params => {
            if (this.action == FormAction.UPDATE) {
                this.scheduleReportID = params.scheduleReportID;
                this.getScheduleReportByID(this.scheduleReportID);
            }
        });
    }
    setPageTitle() {
        if (this.action == FormAction.CREATE) {
            this.pageTitle = `Schedule CGWA Report`;
        }
        else if (this.action == FormAction.UPDATE) {
            this.pageTitle = `Update Scheduled CGWA Report`;
        }
    }
    scheduleCgwaReportFGInit() {
        this.scheduleCgwaReportFG = this.formBuilder.group({
            reportConfig: this.formBuilder.group({
                reportType: [ScheduleReportTypeEnum.CGWA_REPORT, Validators.required],
                deviceID: [[]],
                entityType: [],
                entityID: [[]],
                sourceConsumer: this.formBuilder.group({
                    type: ['SOURCE', Validators.required],
                    keyID: ['BOREWELL', Validators.required]
                }),
                paramMetric: ['gwFlowTotalizer', Validators.required],
            }),
            schedulerConfig: this.formBuilder.group({
                name: [, Validators.required],
                dataInterval: [, Validators.required],
                frequency: [, Validators.required],
                userChoice: [, Validators.required],
                userID: [[], Validators.required],
                otherUserEmail: [[]],
                status: [, Validators.required],
                reportFormat: [, Validators.required],
            })
        });
    }
    patchSchedulerConfigInput() {
        this.scheduleCgwaReportFG.get('schedulerConfig').patchValue(this.schedulerConfigInput.scheduleReportFG.value);
    }
    getValidFormData() {
        this.patchSchedulerConfigInput();
        let userID = this.tscCommonService.removeSelectAllID(this.scheduleCgwaReportFG.get('schedulerConfig').get('userID').value);
        this.scheduleCgwaReportFG.get('schedulerConfig').get('userID').patchValue(userID);
        let paramsArray = [
            {
                name: this.scheduleCgwaReportFG.get('reportConfig').get('paramMetric').value,
                dsAgg: 'sum',
                agg: 'sum'
            }
        ];
        const reportConfigFG = this.scheduleCgwaReportFG.get('reportConfig').value;
        const schedulerConfigFG = this.scheduleCgwaReportFG.get('schedulerConfig').value;
        const { paramMetric } = reportConfigFG, reportConfigWithoutParamMetric = __rest(reportConfigFG, ["paramMetric"]);
        this.modifiedFG = {
            reportConfig: Object.assign(Object.assign({}, reportConfigWithoutParamMetric), { params: paramsArray }),
            schedulerConfig: Object.assign({}, schedulerConfigFG)
        };
    }
    scheduleReportSubmit() {
        this.patchSchedulerConfigInput();
        if (this.schedulerConfigInput.scheduleReportFG.invalid) {
            this.schedulerConfigInput.scheduleReportFG.markAllAsTouched();
        }
        if (this.scheduleCgwaReportFG.invalid) {
            console.log('Invalid form:', this.scheduleCgwaReportFG.value);
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        else {
            this.getValidFormData();
            if (this.action == FormAction.CREATE) {
                this.createScheduleReport();
            }
            else if (this.action == FormAction.UPDATE) {
                this.updateScheduleReport();
            }
        }
    }
    createScheduleReport() {
        this.scheduleReportController.createScheduleReport(this.orgID, this.modifiedFG).subscribe((res) => {
            this.router.navigate([`schedule-report/page`]);
        }, error => {
            console.log('error in createScheduleReport -', error);
        });
    }
    getScheduleReportByID(scheduleReportID) {
        return __awaiter(this, void 0, void 0, function* () {
            this.scheduleReportI = (yield this.scheduleReportService.getScheduleReportByID(this.orgID, scheduleReportID));
            this.patchScheduleReport(this.scheduleReportI);
        });
    }
    patchScheduleReport(scheduleReportI) {
        this.scheduleCgwaReportFG.patchValue({
            reportConfig: scheduleReportI.reportConfig,
            schedulerConfig: scheduleReportI.schedulerConfig
        });
        this.schedulerConfigInput.scheduleReportFG.patchValue(scheduleReportI.schedulerConfig);
        this.initialObject = {
            cgwaReportConfig: this.scheduleCgwaReportFG.value,
            schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
        };
        this.isValidUpdateForm();
    }
    isValidUpdateForm() {
        this.schedulerConfigInput.scheduleReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });
        this.scheduleCgwaReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });
    }
    checkEquality() {
        const currentValues = {
            cgwaReportConfig: this.scheduleCgwaReportFG.value,
            schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
        };
        this.isEqual = isEqual(this.initialObject, currentValues);
    }
    updateScheduleReport() {
        this.scheduleReportController.updateScheduleReport(this.orgID, this.scheduleReportID, this.modifiedFG).subscribe((res) => {
            this.tscCommonService.back();
        }, error => {
            console.log('error in updateScheduleReport -', error);
        });
    }
}
ScheduleReportCgwaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportCgwaComponent, deps: [{ token: i1.ActivatedRoute }, { token: i1.Router }, { token: i2.FormBuilder }, { token: i3.ScheduleReportController }, { token: i4.ScheduleReportService }, { token: i5.StorageService }, { token: i6.TSCCommonService }, { token: i7.ToastrService }], target: i0.ɵɵFactoryTarget.Component });
ScheduleReportCgwaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ScheduleReportCgwaComponent, selector: "lib-cgwa", viewQueries: [{ propertyName: "schedulerConfigInput", first: true, predicate: ["schedulerConfigInput"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">{{ pageTitle }}</div>\n            <div class=\"pageSubtitle\"></div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <form [formGroup]=\"scheduleCgwaReportFG\" (ngSubmit)=\"scheduleReportSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <mat-card class=\"border cardOverwrite\">\n                        <div class=\"cardTitle\">\n                            Report configuration\n                        </div>\n\n                        <div class=\"row mt-2\">\n                            <div class=\"col-sm-6\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-4\">\n                                        Source type\n                                    </div>\n                                    <div class=\"col-sm-6 fw-bold\">\n                                        Borewell\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row mt-2\">\n                            <div class=\"col-sm-6\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-4\">\n                                        Consumption parameter\n                                    </div>\n                                    <div class=\"col-sm-6 fw-bold\">\n                                        Water consumption\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-card>\n                </div>\n            </div>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <lib-configuration #schedulerConfigInput></lib-configuration>\n                </div>\n            </div>\n\n            <button class=\"d-none\" type=\"submit\" #formSubmitBtn></button>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <div class=\"float-end\">\n                        <button class=\"btn btn-sm btn-secondary me-2\" type=\"button\" (click)=\"tscCommonService.back()\">\n                            {{ ButtonLabelEnum.CANCEL_BTN_LABEL }}\n                        </button>\n\n                        <button class=\"btn btn-sm btn-success\" [ngClass]=\"{\n                                            'btn-success' : action == FormAction.CREATE,\n                                            'btn-primary' : action == FormAction.UPDATE,\n                                            'disabled' : action == FormAction.UPDATE && isEqual\n                                        }\" type=\"submit\">{{ action ==\n                            FormAction.CREATE ? 'Schedule' :\n                            ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>", components: [{ type: i8.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i9.ScheduleReportConfigurationComponent, selector: "lib-configuration" }], directives: [{ type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i10.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportCgwaComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-cgwa',
                    templateUrl: './cgwa.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.FormBuilder }, { type: i3.ScheduleReportController }, { type: i4.ScheduleReportService }, { type: i5.StorageService }, { type: i6.TSCCommonService }, { type: i7.ToastrService }]; }, propDecorators: { schedulerConfigInput: [{
                type: ViewChild,
                args: ['schedulerConfigInput']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2d3YS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9zY2hlZHVsZS1yZXBvcnQvY2d3YS9jZ3dhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L3NjaGVkdWxlLXJlcG9ydC9jZ3dhL2Nnd2EuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHcEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU1RSxPQUFPLEVBQUUsY0FBYyxFQUFtQixNQUFNLHNDQUFzQyxDQUFDO0FBUXZGLGNBQWM7QUFDZCxPQUFPLEVBQWEsMkJBQTJCLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFvQixlQUFlLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvTSxPQUFPLEVBQUUsV0FBVyxFQUFpQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7QUFFckUsZ0JBQWdCO0FBUWhCLE1BQU0sT0FBTywyQkFBMkI7SUEwQnBDLFlBQ1ksY0FBOEIsRUFDOUIsTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLHdCQUFrRCxFQUNsRCxxQkFBNEM7SUFFcEQsY0FBYztJQUNOLGNBQThCLEVBQy9CLGdCQUFrQyxFQUNqQyxhQUE0QjtRQVQ1QixtQkFBYyxHQUFkLGNBQWMs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QUMsQ0FBQyxHQUFjLEVBQUUsRUFBRTtZQUVoSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFakMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7O3lIQTlNUSwyQkFBMkI7NkdBQTNCLDJCQUEyQiw4S0M1QnhDLCt0R0EwRU07NEZEOUNPLDJCQUEyQjtrQkFOdkMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsV0FBVyxFQUFFLHVCQUF1QjtvQkFDcEMsTUFBTSxFQUFFLEVBQ1A7aUJBQ0o7dVRBeUJzQyxvQkFBb0I7c0JBQXRELFNBQVM7dUJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgU2NoZWR1bGVSZXBvcnRUeXBlRW51bSB9IGZyb20gJy4uLy4uLy4uL2VudW0vc2NoZWR1bGUtcmVwb3J0LmVudW0nO1xuXG5pbXBvcnQgeyBTY2hlZHVsZVJlcG9ydCwgU2NoZWR1bGVSZXBvcnRJIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvc2NoZWR1bGUtcmVwb3J0Lm1vZGVsJztcblxuaW1wb3J0IHsgU2NoZWR1bGVSZXBvcnRDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vLi4vY29udHJvbGxlci9zY2hlZHVsZS1yZXBvcnQuY29udHJvbGxlcic7XG5cbmltcG9ydCB7IFNjaGVkdWxlUmVwb3J0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2Uvc2NoZWR1bGUtcmVwb3J0LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBTY2hlZHVsZVJlcG9ydENvbmZpZ3VyYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9fc2hhcmVkL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgUmVzcG9uc2VNLCBNYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2UsIEludmFsaWRGb3JtLCBCdXR0b25MYWJlbEVudW0sIEZvcm1BY3Rpb24sIEZvcm1FcnJvckVudW0sIFRTQ0NvbW1vblNlcnZpY2UsIENPTU1PTl9DT05TVEFOVCwgTUFURVJJQUxfQ09OU1RBTlQsIEJ1dHRvblRvb2x0aXBFbnVtIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG5pbXBvcnQgeyBUb2FzdHJDb2xvciwgVG9hc3RyU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3RvYXN0ci1zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvc3RvcmFnZS1zZXJ2aWNlJztcbi8vIC90c2MtbGlicmFyeS9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItY2d3YScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Nnd2EuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVSZXBvcnRDZ3dhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIENPTU1PTl9DT05TVEFOVCA9IENPTU1PTl9DT05TVEFOVDtcbiAgICBNQVRFUklBTF9DT05TVEFOVCA9IE1BVEVSSUFMX0NPTlNUQU5UO1xuXG4gICAgRm9ybUFjdGlvbiA9IEZvcm1BY3Rpb247XG4gICAgRm9ybUVycm9yRW51bSA9IEZvcm1FcnJvckVudW07XG4gICAgQnV0dG9uTGFiZWxFbnVtID0gQnV0dG9uTGFiZWxFbnVtO1xuICAgIEJ1dHRvblRvb2x0aXBFbnVtID0gQnV0dG9uVG9vbHRpcEVudW07XG4gICAgTWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlID0gTWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlO1xuXG4gICAgb3JnSUQ6IGFueTtcblxuICAgIHNjaGVkdWxlQ2d3YVJlcG9ydEZHOiBGb3JtR3JvdXA7XG4gICAgbW9kaWZpZWRGRzogYW55O1xuICAgIHNjaGVkdWxlUmVwb3J0SUQ6IGFueTtcblxuICAgIGFjdGlvbjogc3RyaW5nO1xuICAgIHBhZ2VUaXRsZTogc3RyaW5nO1xuICAgIGlzRXF1YWw6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGluaXRpYWxPYmplY3Q6IGFueTtcblxuICAgIHNjaGVkdWxlUmVwb3J0SSA9IG5ldyBTY2hlZHVsZVJlcG9ydCgpO1xuXG4gICAgQFZpZXdDaGlsZCgnc2NoZWR1bGVyQ29uZmlnSW5wdXQnKSBzY2hlZHVsZXJDb25maWdJbnB1dDogU2NoZWR1bGVSZXBvcnRDb25maWd1cmF0aW9uQ29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSBzY2hlZHVsZVJlcG9ydENvbnRyb2xsZXI6IFNjaGVkdWxlUmVwb3J0Q29udHJvbGxlcixcbiAgICAgICAgcHJpdmF0ZSBzY2hlZHVsZVJlcG9ydFNlcnZpY2U6IFNjaGVkdWxlUmVwb3J0U2VydmljZSxcblxuICAgICAgICAvLyB0c2MtbGlicmFyeVxuICAgICAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICAgICAgcHVibGljIHRzY0NvbW1vblNlcnZpY2U6IFRTQ0NvbW1vblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdG9hc3RyU2VydmljZTogVG9hc3RyU2VydmljZSxcbiAgICAgICAgLy8gL3RzYy1saWJyYXJ5L1xuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcmdJRCA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgnY3VycmVudE9yZ0lEJyk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZUNnd2FSZXBvcnRGR0luaXQoKTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBkYXRhLmFjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuc2V0UGFnZVRpdGxlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09IEZvcm1BY3Rpb24uVVBEQVRFKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZVJlcG9ydElEID0gcGFyYW1zLnNjaGVkdWxlUmVwb3J0SUQ7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTY2hlZHVsZVJlcG9ydEJ5SUQodGhpcy5zY2hlZHVsZVJlcG9ydElEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBzZXRQYWdlVGl0bGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PSBGb3JtQWN0aW9uLkNSRUFURSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlVGl0bGUgPSBgU2NoZWR1bGUgQ0dXQSBSZXBvcnRgO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aW9uID09IEZvcm1BY3Rpb24uVVBEQVRFKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VUaXRsZSA9IGBVcGRhdGUgU2NoZWR1bGVkIENHV0EgUmVwb3J0YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjaGVkdWxlQ2d3YVJlcG9ydEZHSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZUNnd2FSZXBvcnRGRyA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgcmVwb3J0Q29uZmlnOiB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICAgICByZXBvcnRUeXBlOiBbU2NoZWR1bGVSZXBvcnRUeXBlRW51bS5DR1dBX1JFUE9SVCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAgICAgZGV2aWNlSUQ6IFtbXV0sXG4gICAgICAgICAgICAgICAgZW50aXR5VHlwZTogW10sXG4gICAgICAgICAgICAgICAgZW50aXR5SUQ6IFtbXV0sXG4gICAgICAgICAgICAgICAgc291cmNlQ29uc3VtZXI6IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBbJ1NPVVJDRScsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgICAgICAgICBrZXlJRDogWydCT1JFV0VMTCcsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgcGFyYW1NZXRyaWM6IFsnZ3dGbG93VG90YWxpemVyJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHNjaGVkdWxlckNvbmZpZzogdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAgICAgbmFtZTogWywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAgICAgZGF0YUludGVydmFsOiBbLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgICAgICBmcmVxdWVuY3k6IFssIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgICAgIHVzZXJDaG9pY2U6IFssIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgICAgIHVzZXJJRDogW1tdLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgICAgICBvdGhlclVzZXJFbWFpbDogW1tdXSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFssIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgICAgIHJlcG9ydEZvcm1hdDogWywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwYXRjaFNjaGVkdWxlckNvbmZpZ0lucHV0KCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlQ2d3YVJlcG9ydEZHLmdldCgnc2NoZWR1bGVyQ29uZmlnJykucGF0Y2hWYWx1ZSh0aGlzLnNjaGVkdWxlckNvbmZpZ0lucHV0LnNjaGVkdWxlUmVwb3J0RkcudmFsdWUpXG4gICAgfVxuXG4gICAgZ2V0VmFsaWRGb3JtRGF0YSgpIHtcbiAgICAgICAgdGhpcy5wYXRjaFNjaGVkdWxlckNvbmZpZ0lucHV0KCk7XG5cbiAgICAgICAgbGV0IHVzZXJJRCA9IHRoaXMudHNjQ29tbW9uU2VydmljZS5yZW1vdmVTZWxlY3RBbGxJRCh0aGlzLnNjaGVkdWxlQ2d3YVJlcG9ydEZHLmdldCgnc2NoZWR1bGVyQ29uZmlnJykuZ2V0KCd1c2VySUQnKS52YWx1ZSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVDZ3dhUmVwb3J0RkcuZ2V0KCdzY2hlZHVsZXJDb25maWcnKS5nZXQoJ3VzZXJJRCcpLnBhdGNoVmFsdWUodXNlcklEKTtcblxuICAgICAgICBsZXQgcGFyYW1zQXJyYXkgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zY2hlZHVsZUNnd2FSZXBvcnRGRy5nZXQoJ3JlcG9ydENvbmZpZycpLmdldCgncGFyYW1NZXRyaWMnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICBkc0FnZzogJ3N1bScsXG4gICAgICAgICAgICAgICAgYWdnOiAnc3VtJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG5cbiAgICAgICAgY29uc3QgcmVwb3J0Q29uZmlnRkcgPSB0aGlzLnNjaGVkdWxlQ2d3YVJlcG9ydEZHLmdldCgncmVwb3J0Q29uZmlnJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHNjaGVkdWxlckNvbmZpZ0ZHID0gdGhpcy5zY2hlZHVsZUNnd2FSZXBvcnRGRy5nZXQoJ3NjaGVkdWxlckNvbmZpZycpLnZhbHVlO1xuICAgICAgICBjb25zdCB7IHBhcmFtTWV0cmljLCAuLi5yZXBvcnRDb25maWdXaXRob3V0UGFyYW1NZXRyaWMgfSA9IHJlcG9ydENvbmZpZ0ZHO1xuXG4gICAgICAgIHRoaXMubW9kaWZpZWRGRyA9IHtcbiAgICAgICAgICAgIHJlcG9ydENvbmZpZzoge1xuICAgICAgICAgICAgICAgIC4uLnJlcG9ydENvbmZpZ1dpdGhvdXRQYXJhbU1ldHJpYyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHBhcmFtc0FycmF5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZWR1bGVyQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgLi4uc2NoZWR1bGVyQ29uZmlnRkdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzY2hlZHVsZVJlcG9ydFN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5wYXRjaFNjaGVkdWxlckNvbmZpZ0lucHV0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2NoZWR1bGVyQ29uZmlnSW5wdXQuc2NoZWR1bGVSZXBvcnRGRy5pbnZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlckNvbmZpZ0lucHV0LnNjaGVkdWxlUmVwb3J0RkcubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2NoZWR1bGVDZ3dhUmVwb3J0RkcuaW52YWxpZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgZm9ybTonLCB0aGlzLnNjaGVkdWxlQ2d3YVJlcG9ydEZHLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyU2VydmljZS5vcGVuVG9hc3QoSW52YWxpZEZvcm0uSU5WQUxJRF9GT1JNX1RJVExFLCBJbnZhbGlkRm9ybS5JTlZBTElEX0ZPUk1fTUVTU0FHRSwgVG9hc3RyQ29sb3IuRVJST1IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRWYWxpZEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PSBGb3JtQWN0aW9uLkNSRUFURSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU2NoZWR1bGVSZXBvcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gPT0gRm9ybUFjdGlvbi5VUERBVEUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNjaGVkdWxlUmVwb3J0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVTY2hlZHVsZVJlcG9ydCgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVJlcG9ydENvbnRyb2xsZXIuY3JlYXRlU2NoZWR1bGVSZXBvcnQodGhpcy5vcmdJRCwgdGhpcy5tb2RpZmllZEZHKS5zdWJzY3JpYmUoKHJlczogUmVzcG9uc2VNKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgc2NoZWR1bGUtcmVwb3J0L3BhZ2VgXSk7XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGluIGNyZWF0ZVNjaGVkdWxlUmVwb3J0IC0nLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNjaGVkdWxlUmVwb3J0QnlJRChzY2hlZHVsZVJlcG9ydElEKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVSZXBvcnRJID0gPFNjaGVkdWxlUmVwb3J0ST5hd2FpdCB0aGlzLnNjaGVkdWxlUmVwb3J0U2VydmljZS5nZXRTY2hlZHVsZVJlcG9ydEJ5SUQodGhpcy5vcmdJRCwgc2NoZWR1bGVSZXBvcnRJRCk7XG5cbiAgICAgICAgdGhpcy5wYXRjaFNjaGVkdWxlUmVwb3J0KHRoaXMuc2NoZWR1bGVSZXBvcnRJKTtcbiAgICB9XG5cbiAgICBwYXRjaFNjaGVkdWxlUmVwb3J0KHNjaGVkdWxlUmVwb3J0STogU2NoZWR1bGVSZXBvcnRJKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVDZ3dhUmVwb3J0RkcucGF0Y2hWYWx1ZSh7XG4gICAgICAgICAgICByZXBvcnRDb25maWc6IHNjaGVkdWxlUmVwb3J0SS5yZXBvcnRDb25maWcsXG4gICAgICAgICAgICBzY2hlZHVsZXJDb25maWc6IHNjaGVkdWxlUmVwb3J0SS5zY2hlZHVsZXJDb25maWdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZXJDb25maWdJbnB1dC5zY2hlZHVsZVJlcG9ydEZHLnBhdGNoVmFsdWUoc2NoZWR1bGVSZXBvcnRJLnNjaGVkdWxlckNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsT2JqZWN0ID0ge1xuICAgICAgICAgICAgY2d3YVJlcG9ydENvbmZpZzogdGhpcy5zY2hlZHVsZUNnd2FSZXBvcnRGRy52YWx1ZSxcbiAgICAgICAgICAgIHNjaGVkdWxlckNvbmZpZzogdGhpcy5zY2hlZHVsZXJDb25maWdJbnB1dC5zY2hlZHVsZVJlcG9ydEZHLnZhbHVlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pc1ZhbGlkVXBkYXRlRm9ybSgpO1xuICAgIH1cblxuICAgIGlzVmFsaWRVcGRhdGVGb3JtKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlckNvbmZpZ0lucHV0LnNjaGVkdWxlUmVwb3J0RkcudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRXF1YWxpdHkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZUNnd2FSZXBvcnRGRy52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tFcXVhbGl0eSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGVja0VxdWFsaXR5KCkge1xuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWVzID0ge1xuICAgICAgICAgICAgY2d3YVJlcG9ydENvbmZpZzogdGhpcy5zY2hlZHVsZUNnd2FSZXBvcnRGRy52YWx1ZSxcbiAgICAgICAgICAgIHNjaGVkdWxlckNvbmZpZzogdGhpcy5zY2hlZHVsZXJDb25maWdJbnB1dC5zY2hlZHVsZVJlcG9ydEZHLnZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaXNFcXVhbCA9IGlzRXF1YWwodGhpcy5pbml0aWFsT2JqZWN0LCBjdXJyZW50VmFsdWVzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTY2hlZHVsZVJlcG9ydCgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVJlcG9ydENvbnRyb2xsZXIudXBkYXRlU2NoZWR1bGVSZXBvcnQodGhpcy5vcmdJRCwgdGhpcy5zY2hlZHVsZVJlcG9ydElELCB0aGlzLm1vZGlmaWVkRkcpLnN1YnNjcmliZSgocmVzOiBSZXNwb25zZU0pID0+IHtcblxuICAgICAgICAgICAgdGhpcy50c2NDb21tb25TZXJ2aWNlLmJhY2soKTtcblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gdXBkYXRlU2NoZWR1bGVSZXBvcnQgLScsIGVycm9yKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBlcnJvckhhbmRsaW5nID0gKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sUGF0aDogc3RyaW5nLCBlcnJvcjogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiBmb3JtR3JvdXAuZ2V0KGNvbnRyb2xQYXRoKS5oYXNFcnJvcihlcnJvcik7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZCBtYWluLWNhcmQgY2FyZE92ZXJ3cml0ZSBoMTAwXCI+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRlckNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyTGVmdENvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VUaXRsZVwiPnt7IHBhZ2VUaXRsZSB9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VTdWJ0aXRsZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzY2hlZHVsZUNnd2FSZXBvcnRGR1wiIChuZ1N1Ym1pdCk9XCJzY2hlZHVsZVJlcG9ydFN1Ym1pdCgpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWNhcmQgY2xhc3M9XCJib3JkZXIgY2FyZE92ZXJ3cml0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcG9ydCBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvdXJjZSB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBmdy1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9yZXdlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3VtcHRpb24gcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBmdy1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2F0ZXIgY29uc3VtcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1jYXJkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpYi1jb25maWd1cmF0aW9uICNzY2hlZHVsZXJDb25maWdJbnB1dD48L2xpYi1jb25maWd1cmF0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkLW5vbmVcIiB0eXBlPVwic3VibWl0XCIgI2Zvcm1TdWJtaXRCdG4+PC9idXR0b24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsb2F0LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXNlY29uZGFyeSBtZS0yXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ0c2NDb21tb25TZXJ2aWNlLmJhY2soKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IEJ1dHRvbkxhYmVsRW51bS5DQU5DRUxfQlROX0xBQkVMIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdidG4tc3VjY2VzcycgOiBhY3Rpb24gPT0gRm9ybUFjdGlvbi5DUkVBVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdidG4tcHJpbWFyeScgOiBhY3Rpb24gPT0gRm9ybUFjdGlvbi5VUERBVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXNhYmxlZCcgOiBhY3Rpb24gPT0gRm9ybUFjdGlvbi5VUERBVEUgJiYgaXNFcXVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiB0eXBlPVwic3VibWl0XCI+e3sgYWN0aW9uID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9ybUFjdGlvbi5DUkVBVEUgPyAnU2NoZWR1bGUnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdXR0b25MYWJlbEVudW0uVVBEQVRFX0JUTl9MQUJFTCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==