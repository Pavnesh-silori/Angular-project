import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import {
    faPlus,
    faSearch,
    faEllipsisH,
    faCheck,
    faCheckCircle,
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { OrganizationService } from '@library/organization-service';
import { ApplicationM } from '@library/application-service';
import { OrganizationM } from '@library/organization-service';
import { COMMON_CONSTANT } from '@library/tsc-common';
import { PlanGroupType } from '@library/subscription-service';

import { PlanController } from '@Admin/controller/plan.controller';
import { BillingController } from '@Admin/controller/billing.controller';
import { PaymentController } from '@Admin/controller/payment.controller';

import { AppPlanM, PlanM } from '@Admin/model/plan.model';

import { CreateUpdateBillingProfileDialog } from '@Admin/component/billing/create-update-billing-profile/create-update-billing-profile.dialog';
import { ChangeBillingProfileDialog } from '@Admin/component/billing/change-billing-profile-dialog/change-billing-profile-dialog';

// library
import { ApplicationKeyID, ApplicationService } from '@library/application-service';
// /library/

@Component({
    selector: 'app-list',
    templateUrl: './buy-plan.component.html',
    styleUrls: ['./buy-plan.component.scss'],
    providers: [
        {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: { displayDefaultIndicatorType: false }
        }
    ]
})

export class BuyPlanComponent implements OnInit {
    ApplicationKeyID = ApplicationKeyID;
    COMMON_CONSTANT = COMMON_CONSTANT;
    PlanGroupType = PlanGroupType;
    
    planM: PlanM[] = [];
    application: ApplicationM[] = [];
    applicationFilter: ApplicationM[] = [];
    appPlanM: AppPlanM[] = [];
    OrganizationM: any;

    faPlus = faPlus;
    faSearch = faSearch;
    faEllipsisH = faEllipsisH;
    faCheck = faCheck;
    faCheckCircle = faCheckCircle;
    faChevronDown = faChevronDown;

    rootOrgID: any;
    loggedInOrgCountryCode: any;

    planGroupType: any;

    standardPlan: any;
    activeStandardPlans: any;
    inactiveStandardPlans: any;
    standardPlanDetails = [];

    standardPlanAppName: any;
    standardPlanAppIcon: any;
    standardPlanAppKeyID: any;

    // bundledPlan: any;
    // activeBundledPlans: any;
    // inactiveBundledPlans: any;
    // bundledPlanDetails: any;

    defaultBillingProfileM: any;

    subscriptionID: any = '';
    selectedAppKeyID: any;


    billedAmount: any;
    currencyCode: any;

    step: any;
    queryParam: any;

    billingProfileMessage: any;
    paymentLinkRes: any;

    filter: string = '';
    selectedStepIndex: number = 0;
    isEditable = false;
    termsCondition = false;

    defaultAppKeyID = "TSC_NETZERO"; // set the default selected value

    selectedPlanFC: FormControl = new FormControl('', Validators.required);
    appFormControl = new FormControl(this.defaultAppKeyID);
    appLogoBasePath: string = '/assets/images/application-logo/with-side-name/';

    constructor(
        private authService: StorageService,
        private toasterService: ToastrService,
        private applicationService: ApplicationService,
        private organizationService: OrganizationService,
        private activatedRoute: ActivatedRoute,
        private planController: PlanController,
        private billingController: BillingController,
        private paymentController: PaymentController,
        private dialog: MatDialog,
        protected formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.authService.getStorage(['rootOrgID']);

        this.appFormControl.setValue(this.defaultAppKeyID);

        this.activatedRoute.queryParams.subscribe((queryParam) => {
            if (queryParam.subscriptionID) {
                this.subscriptionID = parseInt(queryParam.subscriptionID);
            }
            if (queryParam.planGroupType) {
                this.planGroupType = queryParam.planGroupType;
            }
        });

        this.getOrgByID(this.rootOrgID);
        if (this.planGroupType == PlanGroupType.PLAN_BUNDLED) {
            this.getApplication();
        }

        this.selectedPlanFC.valueChanges.subscribe((planID: number) => {
            if (planID) {
                this.getBillDetails(planID);
            }
        });
    }

    onStepChange(event) {
        this.selectedStepIndex = event.selectedIndex;
        let step = this.selectedStepIndex;
        switch (step) {
            case 1:
                this.getCurrentBillingProfile();
                break;
            default:
                break;
        }
    }

    async getOrgByID(orgID) {
        // this.organizationService.getOrganizationByID(orgID)
        //     .subscribe((orgDetailRes: OrganizationM) => {
        //         this.OrganizationM = orgDetailRes;
        //         this.loggedInOrgCountryCode = this.OrganizationM['countryCode'];
        //         if (this.loggedInOrgCountryCode != null) {
        //             this.getPlanList(this.rootOrgID, this.subscriptionID, this.loggedInOrgCountryCode);
        //         }
        //     },
        //         error => {
        //             console.log('error in getOrgByID - ', error);
        //             this.toasterService.openToast("Error", "Error while getting organization details.", "error");
        //         });

        this.OrganizationM = <OrganizationM>await this.organizationService.getOrganizationByID(orgID);
        this.loggedInOrgCountryCode = this.OrganizationM['countryCode'];
        if (this.loggedInOrgCountryCode != null) {
            this.getPlanList(this.rootOrgID, this.subscriptionID, this.loggedInOrgCountryCode);
        }
    }

    getPlanList(rootOrgID, subscriptionID, loggedInOrgCountryCode) {
        this.planController.getPlanList(rootOrgID, subscriptionID, loggedInOrgCountryCode)
            .subscribe((planRes: PlanM[]) => {
                this.planM = planRes;

                this.standardPlan = this.planM['standardPlan']['planDetails'];
                this.activeStandardPlans = this.standardPlan.filter(plan => plan.isCurrentPlan);
                this.inactiveStandardPlans = this.standardPlan.filter(plan => !plan.isCurrentPlan);
                this.standardPlanDetails = this.activeStandardPlans.concat(this.inactiveStandardPlans);

                this.standardPlanAppName = this.planM['standardPlan']['application']['applicationName'];
                this.standardPlanAppIcon = this.planM['standardPlan']['application']['applicationIcon'];
                this.standardPlanAppKeyID = this.planM['standardPlan']['application']['applicationKeyID'];

                // this.bundledPlan = this.planM['bundledPlan'];
                // this.activeBundledPlans = this.bundledPlan.filter(plan => plan.isCurrentPlan);
                // this.inactiveBundledPlans = this.bundledPlan.filter(plan => !plan.isCurrentPlan);
                // this.bundledPlanDetails = this.activeBundledPlans.concat(this.inactiveBundledPlans);
            },
                error => {
                    console.log('Error in getPlanList -', error);
                    this.toasterService.openToast('Error', 'Error in getting Plan List', 'error');
                })
    }

    async getApplication() {
        // this.applicationService.getApplication().subscribe((getApplicationRes: any) => {
        //     this.application = getApplicationRes;

        //     // Filter applications with "ACCOUNT" and "TSC_OFFSET" applicationKeyID
        //     this.applicationFilter = getApplicationRes.filter(applicationFilter =>
        //         applicationFilter['applicationKeyID'] !== 'ACCOUNT' && applicationFilter['applicationKeyID'] !== 'TSC_OFFSET'
        //     );
        // },
        //     error => {
        //         console.log('Error in getApplication -', error);
        //         this.toasterService.openToast('Error', 'Error in getting Application List', 'error');
        //     });
        this.application = <ApplicationM[]>await this.applicationService.getAllApplication();
        this.applicationFilter = this.application.filter(applicationFilter =>
            applicationFilter['applicationKeyID'] !== 'ACCOUNT' && applicationFilter['applicationKeyID'] !== 'TSC_OFFSET'
        );
    }

    onAppSelectionChangePlan(selectedAppKeyID) {
        this.planController.getApplicationPlan(this.rootOrgID, selectedAppKeyID, this.loggedInOrgCountryCode).subscribe((appPlanRes: AppPlanM[]) => {
            this.appPlanM = appPlanRes;
            if (appPlanRes['planDetails'].length > 0) {
                this.standardPlanDetails = appPlanRes['planDetails'];
                this.standardPlanAppName = appPlanRes['application']['applicationName'];
                this.standardPlanAppIcon = appPlanRes['application']['applicationIcon'];
                this.standardPlanAppKeyID = appPlanRes['application']['applicationKeyID'];
            } else {
                this.standardPlanDetails = [];
                this.standardPlanAppName = appPlanRes['application']['applicationName'];
                this.standardPlanAppIcon = appPlanRes['application']['applicationIcon'];
                this.standardPlanAppKeyID = appPlanRes['application']['applicationKeyID'];
                this.toasterService.openToast('Info', `Oops! No Plan available for the following application.`, 'info');
            }
        },
            error => {
                console.log('Error in onAppSelectionChangePlan -', error);
                this.toasterService.openToast('Error', 'Error in getting Application Plans', 'error');
            });
    }

    getBillDetails(planID) {
        if (this.standardPlanDetails.find(plan => plan.planID == planID)) {
            const plan = this.standardPlanDetails.find(plan => plan.planID == planID);
            this.billedAmount = plan.billedAmount;
            this.currencyCode = plan.currencyCode;
        }
        //  else if (this.bundledPlanDetails) {
        //     const plan = this.bundledPlanDetails.find(plan => plan.planID === planID);
        //     this.billedAmount = plan.billedAmount;
        //     this.currencyCode = plan.currencyCode;
        // }
    }

    getCurrentBillingProfile() {
        this.billingController.getCurrentBillingProfile(this.rootOrgID, this.subscriptionID).subscribe((billingProfileRes) => {
            if (billingProfileRes.status == 'SUCCESS') {
                this.defaultBillingProfileM = billingProfileRes['response'];
            } else {
                this.toasterService.openToast('Warning', 'You cannot make a payment unless you have a billing profile.', 'warning');
                this.billingProfileMessage = "You do not have any billing profile. Please create the billing profile.";
            }
        },
            error => {
                console.log('Error in getCurrentBillingProfile -', error);
                this.toasterService.openToast(error.error['title'], error.error['message'], error.error['result']);
            })
    }

    createBillingProfile(operation) {
        let dialogRef;
        if (operation == 'create') {
            dialogRef = this.dialog.open(CreateUpdateBillingProfileDialog, {
                data: {
                    action: operation,
                    rootOrgID: this.rootOrgID,
                },
                minWidth: '600px',
                maxWidth: '600px',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });
        }
        dialogRef.afterClosed().subscribe((closeRes) => {
            if (this.defaultBillingProfileM == null) {
                this.getCurrentBillingProfile();
            }
        })
    }

    changeBillingProfile() {
        let dialogRef;
        let billingProfileID = this.defaultBillingProfileM.billingProfileID;
        dialogRef = this.dialog.open(ChangeBillingProfileDialog, {
            data: {
                rootOrgID: this.rootOrgID,
                billingProfileID: billingProfileID,
            },
            minWidth: '600px',
            maxWidth: '600px',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });

        dialogRef.afterClosed().subscribe((closeRes) => {
            if (closeRes['result'] == 'BillingProfileChangedSuccessfuly') {
                this.defaultBillingProfileM = closeRes['billingProfile'];
            }
        })
    }

    onCheckboxChange(event: any) {
        this.termsCondition = event.checked;
    }

    redirectToPayment() {
        let selectedPlanID = this.selectedPlanFC.value;
        let billingProfileID = this.defaultBillingProfileM.billingProfileID;
        this.paymentController.getPaymentLink(this.rootOrgID, selectedPlanID, billingProfileID, this.loggedInOrgCountryCode).subscribe((paymentLinkRes) => {
            if (paymentLinkRes.status == 'SUCCESS') {
                this.paymentLinkRes = paymentLinkRes['response']['url'];
                window.location.href = this.paymentLinkRes;
            } else {
                this.toasterService.openToast('Info', 'You cannot make payment', 'info');
            }
        },
            error => {
                console.log('Error in redirectToPayment -', error);
                this.toasterService.openToast(error.error['title'], error.error['message'], error.error['result']);
            })
    }

    getApplicationLogoFileName(keyID: string): string {
        let logo: string;
        logo = this.appLogoBasePath + this.applicationService.getApplicationLogoFileName(keyID) + '.png';
        return logo;
    }

}
