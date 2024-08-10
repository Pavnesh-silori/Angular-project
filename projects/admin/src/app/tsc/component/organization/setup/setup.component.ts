import {
    Component,
    OnInit
} from '@angular/core';

import {
    ActivatedRoute,
    Router,
} from '@angular/router';

import {
    FormBuilder,
    FormGroup,
    Validators,
    FormControl,
} from '@angular/forms';

import {
    Subject,
    ReplaySubject
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Month } from '@Admin/constants/month.constant';
import { OrganizationController } from '@Admin/controller/organization.controller';

//tsc-library
import { 
    CountryService, 
    StateService, 
    InvalidForm, 
    MatSelectSearchService,
    CountryM, 
    StateM,
    MATERIAL_CONSTANT,
    MaterialFormFieldAppearance,
    ImageTypeEnum,
    ImageService
} from '@library/tsc-common';

import {
    Organization,
    OrganizationM,
    OrgStatus,
    OrganizationService
} from '@library/organization-service';

import {
    ToastrService,
    ToastrTitle,
    ToastrColor
} from '@library/toastr-service';

import { StorageService } from '@library/storage-service';
// /tsc-library

@Component({
    selector: 'app-setup',
    templateUrl: './setup.component.html',
    styleUrls: ['./setup.component.scss'
    ]
})
export class SetupComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    organizationM = new Organization();
    orgID: any;
    setupOrgFG: FormGroup;
    orgLogoImgData = null;
    subscriptionStatus: string;

    month = Month;
    monthFilterFC: FormControl = new FormControl();
    monthFilterUnsubscribe = new Subject<void>();
    monthFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
    stateSearch = new MatSelectSearchService(['name']);

    countryM: CountryM[] = [];
    countryFilterFC: FormControl = new FormControl();
    countryFilterUnsubscribe = new Subject<void>();
    countryFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
    countrySearch = new MatSelectSearchService(['countryName']);

    stateM: StateM[] = [];
    stateFilterFC: FormControl = new FormControl();
    stateFilterUnsubscribe = new Subject<void>();
    stateFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    getImageRes: any;
    logoImg: any;
    showDeleteBtnInp: boolean = false;
    previewBtnLabelInp: string = 'OK';
    removeImgActionInp: string = 'REMOVE';

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private setupOrgFB: FormBuilder,
        private toastrService: ToastrService,
        private countryService: CountryService,
        private stateService: StateService,
        private organizationController: OrganizationController,
        private organizationService: OrganizationService,
        private imageService: ImageService
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((param) => {
            this.orgID = param['orgID'];
            this.getUploadImage(ImageTypeEnum.ORG_LOGO, null);
            this.getOrganizationByID(this.orgID);
        });

        this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (queryParams['subscriptionStatus']) {
                this.subscriptionStatus = queryParams['subscriptionStatus'];
            }
        });

        this.setupOrgInit();
        this.getCountry();
        this.monthSearch();
    }

    async getOrganizationByID(orgID) {
        this.organizationM = <OrganizationM>await this.organizationService.getOrganizationByID(orgID);

        if (this.organizationM.status != OrgStatus.SETUP_PENDING_STATUS) {
            this.router.navigate([`/`]);
        } else {
            this.patchOrgDetail();
        }
    }

    setupOrgInit() {
        this.setupOrgFG = this.setupOrgFB.group({
            name: [, Validators.required],
            fiscalStartMonth: ['JANUARY', Validators.required],
            address1: [, Validators.required],
            city: [, Validators.required],
            zipCode: [, Validators.required],
            countryCode: [, Validators.required],
            stateCode: [, Validators.required],
        });
    }

    monthSearch() {
        // ngx mat select search for month
        this.monthFiltered.next(this.month.slice());
        this.monthFilterFC.valueChanges
            .pipe(takeUntil(this.monthFilterUnsubscribe)).subscribe(async () => {
                this.monthFiltered = await this.stateSearch.filterMultipleValue(this.month, this.monthFilterFC.value, ['name']);
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

    patchOrgDetail() {
        this.setupOrgFG.patchValue({
            name: this.organizationM.name
        });
    }

    toFormData(): FormData {
        const formData = new FormData();
        formData.append('orgLogo', this.orgLogoImgData);
        formData.append('payload', JSON.stringify(this.setupOrgFG.value));

        return formData;
    }


    getUploadImage(type: string, image) {
        this.getImageRes = this.imageService.getUploadImage(type, image);        
        this.logoImg = this.getImageRes.returnImage;
        this.showDeleteBtnInp = this.getImageRes.showDeleteBtn;
    }

    imageSelectedEvent($event) {
        this.logoImg = null;
        this.orgLogoImgData = $event.image;
        this.showDeleteBtnInp = true;
    }

    removeImage() {
        this.orgLogoImgData = null;
        this.getUploadImage(ImageTypeEnum.ORG_LOGO, null);
    }

    setupOrg() {
        if (this.setupOrgFG.invalid) {
            console.error('invalid form -', this.setupOrgFG.value);
            this.toastrService.openToast(ToastrTitle.ERROR, (InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE), ToastrColor.ERROR);
            return;
        }

        this.organizationController.setupOrg(this.orgID, this.toFormData()).subscribe(setupOrgRes => {
            if (this.subscriptionStatus != 'ACTIVE') {
                this.router.navigate([`/subscription-new/plan`]);
            } else if (setupOrgRes['response']['redirectUrl']) {
                window.location.href = setupOrgRes['response']['redirectUrl'];
            } else {
                this.router.navigate([`/`]);
            }
        },
            error => {
                console.log('error in setupOrg -', error);
            });
    }

    public errorHandling = (control: string, error: string) => {
        return this.setupOrgFG.controls[control].hasError(error);
    }

    ngOnDestroy() {
        this.monthFilterUnsubscribe.next();
        this.monthFilterUnsubscribe.complete();

        this.monthFilterUnsubscribe.next();
        this.monthFilterUnsubscribe.complete();

        this.stateFilterUnsubscribe.next();
        this.stateFilterUnsubscribe.complete();
    }

}
