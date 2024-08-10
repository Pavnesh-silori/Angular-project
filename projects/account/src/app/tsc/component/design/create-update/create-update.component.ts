import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    Renderer2,
    Inject
} from '@angular/core';

import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';

import {
    MAT_DIALOG_DATA,
    MatDialogRef
} from '@angular/material/dialog';

import { isEqual } from 'lodash';

import { FacilityI } from '../tsc/model/facility.model';
import { FacilityController } from '../tsc/controller/facility.controller';
import { FacilityService } from '../tsc/service/facility.service';

// tsc-library
import { StorageService } from '@library/storage-service';

import {
    COMMON_CONSTANT,
    MATERIAL_CONSTANT,
    ButtonTooltipEnum,
    MaterialFormFieldAppearance,
    InvalidForm,
    FormErrorEnum,
    FormAction,
    DialogResponseEnum,
    CountryM,
    StateM,
    ResponseM,
    TSCCommonService,
    MatSelectSearchService,
    CountryService,
    StateService
} from '@library/tsc-common';

import {
    ToastrColor,
    ToastrService,
} from '@library/toastr-service';
// /tsc-library/

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styleUrls: ['./create-update.component.scss']
})

export class CreateUpdateComponent implements OnInit {
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    FormAction = FormAction;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    FormErrorEnum = FormErrorEnum;

    pageTitle: string = 'Facility';
    pageSubtitle: string = 'Create facility inside organization';

    rootOrgID: any;
    facilityID: any;
    facility: FacilityI;
    action: FormAction;
    intialObject: any;
    isEqual: boolean = true;
    createFacilityFG: FormGroup;
    addressCharMaxLength: number = 100;
    country: CountryM[] = [];
    state: StateM[] = [];
    countrySelectSearch: MatSelectSearchService = new MatSelectSearchService(['countryName', 'countryCode']);
    stateSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        private dialogRef: MatDialogRef<CreateUpdateComponent>,
        private renderer: Renderer2,
        private formBuilder: FormBuilder,
        private facilityController: FacilityController,
        private facilityService: FacilityService,

        // tsc-library
        storageService: StorageService,
        public tSCCommonService: TSCCommonService,
        private toastrService: ToastrService,
        private countryService: CountryService,
        private stateService: StateService        
        // /tsc-library/
    ) {
        this.rootOrgID = storageService.getStorage('rootOrgID');
        this.action = data.action;
        this.facilityID = data.facilityID;
    }

    ngOnInit(): void {
        this.createFacilityFGInit();
        this.getCountry();

        if (this.action == FormAction.UPDATE) {
            this.getFacilityByID(this.rootOrgID, this.facilityID);
        }
    }

    ngAfterViewInit() {
        this.heightHandler();
    }

    createFacilityFGInit() {
        this.createFacilityFG = this.formBuilder.group({
            name: [, Validators.required],
            timeZone: [],
            address: this.formBuilder.group({
                addressLineOne: [, Validators.required],
                country: this.formBuilder.group({
                    code: [, Validators.required]
                }),
                state: this.formBuilder.group({
                    code: [, Validators.required]
                }),
                city: [, Validators.required],
                zipCode: [, Validators.required]
            })
        });
    }

    // createFacilityFGInit() {
    //     this.createFacilityFG = this.formBuilder.group({
    //         name: ['Facility 1', Validators.required],
    //         timeZone: [],
    //         address: this.formBuilder.group({
    //             addressLineOne: ['Address 1', Validators.required],
    //             country: this.formBuilder.group({
    //                 code: ['IN', Validators.required]
    //             }),
    //             state: this.formBuilder.group({
    //                 code: ['IN-DL', Validators.required]
    //             }),
    //             city: ['Delhi', Validators.required],
    //             zipCode: ['123456', Validators.required]
    //         })
    //     });
    // }

    heightHandler(): void {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(100vh - ' + (headerHeight + footerHeight + 24) + 'px)';

        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);
    }

    async getCountry() {
        this.country = <CountryM[]>await this.countryService.getCountry();
        this.countrySelectSearch.entityArr = this.country;
        this.countrySelectSearch.createSubscription();
    }

    async countryChange(countryCode: string) {
        this.state = <StateM[]>await this.stateService.getState(countryCode);
        this.stateSelectSearch.entityArr = this.state;
        this.stateSelectSearch.createSubscription();
    }

    async getFacilityByID(rootOrgID: number, facilityID: number) {
        this.facility = <FacilityI>await this.facilityService.getFacilityByID(rootOrgID, facilityID);

        this.patchFacility(this.facility);
    }

    patchFacility(facility: FacilityI) {
        this.createFacilityFG.patchValue(facility);

        this.intialObject = this.createFacilityFG.value;

        this.createFacilityFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.intialObject, this.createFacilityFG.value);
        });
    }

    // errorHandling = (control: string, error: string): boolean => {
    //     return this.createFacilityFG.get(control).hasError(error);
    // }

    errorHandling = (formGroup: FormGroup, controlPath: string, error: string): boolean => {
        return formGroup.get(controlPath).hasError(error);
    }

    // errorHandling = (formGroup: FormGroup, controlPath: string, error: string): boolean => {
    //     const control = this.getNestedControl(controlPath, formGroup);
    //     return control && control.hasError(error);
    // }

    // // recursive function to get nested controls
    // private getNestedControl(controlPath: string, formGroup: FormGroup | AbstractControl): AbstractControl | null {
    //     const pathArray = controlPath.split('.');
    //     let control: AbstractControl | null = formGroup;

    //     for (const path of pathArray) {
    //         if (control instanceof FormGroup) {
    //             control = control.get(path);
    //         } else {
    //             return null;
    //         }
    //     }

    //     return control;
    // }

    onSubmit(action: FormAction) {
        if (this.createFacilityFG.invalid) {
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        } else {
            switch (action) {
                case FormAction.CREATE:
                    this.createFacility();
                    break;
                case FormAction.UPDATE:
                    this.updateFacility();
                    break;
            }
        }
    }

    createFacility() {
        this.facilityController.createFacility(this.rootOrgID, this.createFacilityFG.value).subscribe((response: ResponseM) => {
            let result;

            result = {
                status: DialogResponseEnum.SUCCESS,
                // facilityID: response.response.facilityID     // in real need to do something like this
                facilityID: 1234
            }

            this.dialogRef.close(result);
        }, error => {
            console.log('error in createFacility -', error);
        });
    }

    updateFacility() {
        this.facilityController.updateFacility(this.rootOrgID, this.facilityID, this.createFacilityFG.value).subscribe((response: ResponseM) => {
            let result;

            result = {
                status: DialogResponseEnum.SUCCESS,
                // facilityID: response.response.facilityID     // in real need to do something like this
                facilityID: 1234
            }

            this.dialogRef.close(result);
        }, error => {
            console.log('error in updateFacility -', error);
        });
    }
}
