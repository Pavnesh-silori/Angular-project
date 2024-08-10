import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import {
    Subject,
    ReplaySubject
} from 'rxjs';

import { takeUntil } from 'rxjs/operators';
import { isEqual } from "lodash";

import { environment } from 'src/environments/environment';
// import { EnterpriseEvent } from '@Admin/component/event/enterprise.event';
import { OrganizationController } from '@Admin/controller/organization.controller';

//tsc-library
import {
    ResponseM,
    MatSelectSearchService,
    CountryService,
    StateService,
    TimeZoneM,
    StateM,
    CountryM,
    TimeZoneService,
    InvalidForm,
    FileService,
    COMMON_CONSTANT,
    MaterialFormFieldAppearance,
    ImageTypeEnum,
    ImageService,
    ButtonLabelEnum,
    TSCCommonService
} from '@library/tsc-common';

import { ToastrService, ToastrTitle, ToastrColor } from '@library/toastr-service';
import { OrganizationService, Organization, OrganizationM } from '@library/organization-service';
// /tsc-library

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'
    ]
})

export class EditComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;

    rootOrgID: any;
    organizationM = new Organization();

    stateM: StateM[] = [];
    stateFilterFC: FormControl = new FormControl();
    stateFilterUnsubscribe = new Subject<void>();
    stateFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
    stateSearch = new MatSelectSearchService(['name']);

    countryM: CountryM[] = [];
    countryFilterFC: FormControl = new FormControl();
    countryFilterUnsubscribe = new Subject<void>();
    countryFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
    countrySearch = new MatSelectSearchService(['countryName']);

    timezoneM: TimeZoneM[] = [];
    timezoneFilterFC: FormControl = new FormControl();
    timezoneFilterUnsubscribe = new Subject<void>();
    timezoneFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    updateOrganizationDetailFG: FormGroup;

    initialObject: any;
    isEqual: boolean = true;

    getImageRes: any;
    logoImg: any;
    showDeleteBtnInp: boolean = false;
    removeImgActionInp: string = 'DELETE';

    constructor(
        private toastrService: ToastrService,
        private timeZoneService: TimeZoneService,
        private countryService: CountryService,
        private stateService: StateService,
        private organizationService: OrganizationService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private updateOrganizationDetailFB: FormBuilder,
        private organizationController: OrganizationController,

        // private enterpriseEvent: EnterpriseEvent,

        private tSCCommonService: TSCCommonService,
        private imageService: ImageService,
        private fileService: FileService
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((param) => {
            this.rootOrgID = param['rootOrgID']
        });

        this.updateOrganizationInit();
        this.getOrganizationByID();
        this.getCountry();
        this.getTimeZone();
        this.getUploadImage(ImageTypeEnum.ORG_LOGO, null);
    }

    updateOrganizationInit() {
        this.updateOrganizationDetailFG = this.updateOrganizationDetailFB.group({
            id: [{ value: null, disabled: true }],
            name: ['', [Validators.required]],
            timeZoneID: [, Validators.required],
            address1: ['', [Validators.required]],
            countryCode: [, Validators.required],
            stateCode: ['', [Validators.required]],
            city: ['', [Validators.required]],
            zipCode: [, [Validators.required, Validators.pattern(COMMON_CONSTANT.ZIPCODE_PATTERN)]],
        });
    }

    async getOrganizationByID() {
        this.organizationM = <OrganizationM>await this.organizationService.getOrganizationByID(this.rootOrgID);

        this.patchOrganizationDetails();
    }

    patchOrganizationDetails() {
        this.updateOrganizationDetailFG.patchValue({
            id: this.organizationM.id,
            name: this.organizationM.name,
            timeZoneID: this.organizationM.timeZoneID,
            address1: this.organizationM.address1,
            countryCode: this.organizationM.countryCode,
            city: this.organizationM.city,
            zipCode: this.organizationM.zipCode,
        });

        this.countryChange(this.organizationM['countryCode']);
        this.updateOrganizationDetailFG.patchValue({ 'stateCode': this.organizationM['stateCode'] });


        this.initialObject = this.updateOrganizationDetailFG.value;

        this.updateOrganizationDetailFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.initialObject, this.updateOrganizationDetailFG.value);
        });

        if (this.organizationM.imgID) {
            this.showDeleteBtnInp = true;
        } else {
            this.showDeleteBtnInp = false;
        }

        this.getUploadImage(ImageTypeEnum.ORG_LOGO, this.organizationM.logoUrl);
    }

    async getTimeZone() {
        this.timezoneM = <TimeZoneM[]>await this.timeZoneService.getTimeZone();

        this.timezoneFiltered.next(this.timezoneM.slice());
        this.timezoneFilterFC.valueChanges
            .pipe(takeUntil(this.timezoneFilterUnsubscribe)).subscribe(async () => {
                this.timezoneFiltered = await this.countrySearch.filterMultipleValue(this.timezoneM, this.timezoneFilterFC.value, ['countryName']);
            });
    }

    async getCountry() {
        this.countryM = <CountryM[]>await this.countryService.getCountry();

        // ngx mat select search
        this.countryFiltered.next(this.countryM.slice());
        this.countryFilterFC.valueChanges
            .pipe(takeUntil(this.countryFilterUnsubscribe)).subscribe(async () => {
                this.countryFiltered = await this.countrySearch.filterMultipleValue(this.countryM, this.countryFilterFC.value, ['countryName']);
            });
    }

    async countryChange(countryCode) {
        this.stateM = <StateM[]>await this.stateService.getState(countryCode);

        // ngx mat select search
        this.stateFiltered.next(this.stateM.slice());
        this.stateFilterFC.valueChanges
            .pipe(takeUntil(this.stateFilterUnsubscribe)).subscribe(async () => {
                this.stateFiltered = await this.stateSearch.filterMultipleValue(this.stateM, this.stateFilterFC.value, ['name']);
            });
    }

    cancelButtonAction() {
        this.tSCCommonService.back();
    }

    updateOrganization() {
        if (this.isEqual) return;

        if (this.updateOrganizationDetailFG.invalid) {
            this.updateOrganizationDetailFG.markAllAsTouched();
            this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.organizationController.updateOrganization(this.rootOrgID, this.updateOrganizationDetailFG.value)
            .subscribe((updatedOrgRes: ResponseM) => {
                this.router.navigate(['/organization/view'])
            },
                error => {
                    console.log('error in updateOrganization - ', error);
                });
    }

    public errorHandling = (control: string, error: string) => {
        return this.updateOrganizationDetailFG.controls[control].hasError(error);
    }

    getUploadImage(type: string, image) {
        this.getImageRes = this.imageService.getUploadImage(type, image);
        this.logoImg = this.getImageRes.returnImage;
        this.showDeleteBtnInp = this.getImageRes.showDeleteBtn;
    }

    async imageSelectedEvent($event) {
        this.logoImg = null;
        let res: ResponseM;
        let formData = new FormData();

        if (this.organizationM.imgID == null) {
            formData.append('orgLogo', $event.image);

            this.organizationController.addOrgLogo(this.organizationM.id, formData)
                .subscribe((res) => {
                }, error => {
                    console.error('error in imageSelectedEvent -', error);
                }).add(() => {
                    this.getOrganizationByID();
                });
        } else {
            formData.append('file', $event.image);
            res = <any>await this.fileService.updateFile(environment.ORGANIZATION_API_URL, this.organizationM.id, this.organizationM.imgID, formData);
            this.getOrganizationByID();
        }
    }

    async deleteLogo() {
        let res: ResponseM;

        res = <any>await this.fileService.deleteFile(environment.ORGANIZATION_API_URL, this.organizationM.id, this.organizationM.imgID);
        this.getOrganizationByID();
    }

}
