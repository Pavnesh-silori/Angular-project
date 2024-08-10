import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { isEqual } from "lodash";
import { Subject, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Subsidiary, SubsidiaryM } from '@Admin/model/subsidiary.model';
import { SubsidiaryService } from '@Admin/service/subsidiary.service';
import { SubsidiaryController } from '@Admin/controller/subsidiary.controller';

import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { CountryService, MatSelectSearchService, MaterialFormFieldAppearance, StateService, CountryM, StateM, InvalidForm, COMMON_CONSTANT, ButtonLabelEnum } from '@library/tsc-common';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styles: []
})

export class EditComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;

    updateSubsidiaryFG: FormGroup;

    initialObject: any;
    isEqual: boolean = true;

    rootOrgID: any;
    subsidiaryID: any;

    subsidiaryM = new Subsidiary;

    stateM: StateM[] = [];
    stateFilterFC: FormControl = new FormControl();
    stateFilterUnsubscribe = new Subject<void>();
    stateFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    countryM: CountryM[] = [];
    countryFilterFC: FormControl = new FormControl();
    countryFilterUnsubscribe = new Subject<void>();
    countryFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    entityName: any;
    countrySearch = new MatSelectSearchService(['countryName']);
    stateSearch = new MatSelectSearchService(['name']);

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private updateSubsidiaryFB: FormBuilder,
        private countryService: CountryService,
        private stateService: StateService,
        private SubsidiaryService: SubsidiaryService,
        private SubsidiaryController: SubsidiaryController,
        private toasterService: ToastrService,
        private storageService: StorageService,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');

        this.activatedRoute.params.subscribe((param) => {
            this.subsidiaryID = param['subsidiaryID']
        });

        this.updateSubsidiaryInit();
        this.getSubsidiaryByID();
        this.getCountry();

        this.updateSubsidiaryFG.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.updateSubsidiaryFG.value));
    }

    updateSubsidiaryInit() {
        this.updateSubsidiaryFG = this.updateSubsidiaryFB.group({
            id: [{ value: null, disabled: true }],
            name: ['', [Validators.required]],
            operationalControlPct: ['', [Validators.required]],
            financialControlPct: ['', [Validators.required]],
            equityControlPct: ['', [Validators.required]],
            address1: ['', [Validators.required]],
            countryCode: [, Validators.required],
            stateCode: ['', [Validators.required]],
            city: ['', [Validators.required]],
            zipCode: [, [Validators.required, Validators.pattern(COMMON_CONSTANT['ZIPCODE_PATTERN'])]],
            useSustainabilityCloud: [{ value: null, disabled: true }],
            subsidiaryOrgID: [],
            type: [{ value: null, disabled: true }]
        });
    }

    async getSubsidiaryByID() {
        this.subsidiaryM = <SubsidiaryM>await this.SubsidiaryService.getSubsidiaryByID(this.rootOrgID, this.subsidiaryID);
        if (this.subsidiaryM['type'] == 'SUBSIDIARY') {
            this.entityName = 'Subsidiary';
        } else {
            this.entityName = 'Joint Venture';
        }
        this.patchSubsidiaryDetails();
    }

    patchSubsidiaryDetails() {
        this.updateSubsidiaryFG.patchValue({
            id: this.subsidiaryM['id'],
            name: this.subsidiaryM['name'],
            operationalControlPct: this.subsidiaryM['operationalControlPct'],
            financialControlPct: this.subsidiaryM['financialControlPct'],
            equityControlPct: this.subsidiaryM['equityControlPct'],
            address1: this.subsidiaryM['address1'],
            countryCode: this.subsidiaryM['countryCode'],
            stateCode: this.subsidiaryM['stateCode'],
            city: this.subsidiaryM['city'],
            zipCode: this.subsidiaryM['zipCode'],
            useSustainabilityCloud: this.subsidiaryM['useSustainabilityCloud'],
            subsidiaryOrgID: this.subsidiaryM['subsidiaryOrgID'],
            type: this.subsidiaryM['type']
        });

        this.getStatesByCountry(this.subsidiaryM['countryCode']);
        this.updateSubsidiaryFG.patchValue({ 'stateCode': this.subsidiaryM['stateCode'] });

        this.initialObject = this.updateSubsidiaryFG.value;
        this.isEqual = true;
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

    async getStatesByCountry(countryCode) {
        this.stateM = <StateM[]>await this.stateService.getState(countryCode);

        // ngx mat select search
        this.stateFiltered.next(this.stateM.slice());
        this.stateFilterFC.valueChanges
            .pipe(takeUntil(this.stateFilterUnsubscribe)).subscribe(async () => {
                this.stateFiltered = await this.stateSearch.filterMultipleValue(this.stateM, this.stateFilterFC.value, ['name']);
            });
    }

    updateSubsidiary() {
        if (this.isEqual) return;

        if (this.updateSubsidiaryFG.invalid) {
            this.toasterService.openToast("Error", InvalidForm.INVALID_FORM_MESSAGE, "error");
            return;
        }

        this.SubsidiaryController.updateSubsidiary(this.rootOrgID, this.subsidiaryID, this.updateSubsidiaryFG.value)
            .subscribe((updatedOrgRes) => {
                let toast = this.toasterService.getToastStatus(updatedOrgRes['status']);
                this.toasterService.openToast(toast['title'], updatedOrgRes['message'], toast['color']);

                this.cancelButtonAction();
            },
                error => {
                    console.log('error in updateSubsidiary - ', error);
                });
    }

    cancelButtonAction() {
        this.location.back();
    }
    public errorHandling = (control: string, error: string) => {
        return this.updateSubsidiaryFG.controls[control].hasError(error);
    }

}
