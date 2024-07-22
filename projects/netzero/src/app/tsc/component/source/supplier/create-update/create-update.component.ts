import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';

import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    ValidatorFn,
    Validators,
} from '@angular/forms';

import { isEqual } from "lodash";

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import {
    faCheckCircle,
    faPlus
} from '@fortawesome/free-solid-svg-icons';

import { SupplierController } from '@netzero/controller/supplier.controller';
import { SupplierTypeKeyIDEnum } from '@netzero/enum/supplier.enum';

import {
    CountryISO,
    PhoneNumberFormat,
    SearchCountryField,
} from 'ngx-intl-tel-input';

// tsc-library
import { FormErrorEnum } from '@library/tsc-common';
import { OrganizationService } from '@library/organization-service';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { ButtonTooltipEnum, COMMON_CONSTANT, CountryM, CountryService, FormAction, InvalidForm, MATERIAL_CONSTANT, MatSelectSearchService, MaterialFormFieldAppearance, TSCCommonService } from '@library/tsc-common';
import { CountryCode } from 'ngx-intl-tel-input/lib/data/country-code';
// import 
// /tsc-library/

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styleUrls: []
})
export class CreateUpdateComponent implements OnInit {
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    FormAction = FormAction;
    FormErrorEnum = FormErrorEnum;

    faPlus = faPlus;
    faCheckCircle = faCheckCircle;

    currentOrgID: any;
    supplierID: any;
    supplierType: any[] = [];
    supplierTiers: any[] = [];

    energySupplierID: any;
    wasteDisposalSupplierID: any;

    isAWasteDisposalSupplier: boolean = false;
    isEnergySupplier: boolean = false;

    supplierFG: FormGroup;

    supplier: any;
    organization: any;

    Title: string = 'Create';
    action: string = FormAction.CREATE;

    supplierTypeId: any[] = null;

    isEqual: boolean = true;
    initialObject: any;

    countryM: CountryM[] = [];
    countrySelectSearch: MatSelectSearchService = new MatSelectSearchService(['countryName', 'countryCode']);

    grid: any[] = [];
    gridSelectSearch: MatSelectSearchService = new MatSelectSearchService(['gridName']);
    isGridAvailable: boolean = false;

    showTooltip: boolean = false;
    preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.UnitedStates, CountryISO.UnitedKingdom];
    currentCountryCode: string;
    SearchCountryField = SearchCountryField;
    PhoneNumberFormat = PhoneNumberFormat;

    separateDialCode = false;
    CountryISO = CountryISO;
    addressCharMaxLength: number = 100;

    isToggleEnabel: boolean = false;

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;

    constructor(
        private renderer: Renderer2,
        private formBuilder: FormBuilder,
        // private dialog: MatDialog,
        private supplierController: SupplierController,
        private dialogRef: MatDialogRef<CreateUpdateComponent>,
        @Inject(MAT_DIALOG_DATA) public data,

        private storageService: StorageService,
        private toastrService: ToastrService,
        private organizationService: OrganizationService,
        private countryService: CountryService,
        public tSCCommonService: TSCCommonService,
    ) {
        this.action = data['action']?.toUpperCase() || FormAction.CREATE;
        this.currentOrgID = data['currentOrgID'];

        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.supplierFGInit();

        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.getOrgByID(this.currentOrgID);

        this.getCountry();
        this.getSupplierType();
        this.getSupplierTiers();

        if (this.action === FormAction.UPDATE) {
            this.Title = 'Update';
            this.supplierID = this.data['supplier'].supplierID;
            this.getSupplierByID(this.data['supplier']);
        }
    }

    supplierFGInit() {
        this.supplierFG = this.formBuilder.group({
            name: [, Validators.required],
            supplierCode: [],
            supplierTypeIDs: [, Validators.required],
            email: [],
            address: [],
            countryCode: [, Validators.required],
            gridID: [],
            supplierTierID: [, Validators.required],
            isPortalEnabled: [false],
            contactUsers: this.createPortalAccessForm(),
        });
    }

    get contactPersonControls() {
        return (this.contactPersons).controls;
    }

    get contactPersons(): FormArray {
        return this.supplierFG.get('contactUsers') as FormArray;
    }

    createPortalAccessForm(): any {
        return this.formBuilder.array([
            this.createContactPersonForm(true)
        ]);
    }

    createContactPersonForm(isPrimary: boolean): any {
        return this.formBuilder.group({
            id: [],
            firstName: [, Validators.required],
            lastName: [],
            emailID: [, [Validators.required, Validators.email]],
            phoneNumber: new FormControl({
                countryCode: "IN",
                // dialCode: null,
                // e164Number: null,
                // internationalNumber: null,
                // nationalNumber: null,
                number: null
            }, Validators.compose([Validators.required])),
            isPrimary: [isPrimary],
        });
    }

    resetAndClearControl(control: string, _reset: any = '') {
        this.supplierFG.get(control).reset('', { onlySelf: true, emitEvent: false });
        this.supplierFG.get(control).clearValidators();

        this.supplierFG.get(control).updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }

    addValidators(control: string, validators: ValidatorFn | ValidatorFn[]) {
        this.supplierFG.get(control).addValidators(validators);

        this.supplierFG.get(control).updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }

    ngAfterViewInit() {
        this.heightHandler();
        console.log('supplier 2 -');
        this.supplierFG.valueChanges 
            .subscribe(() => {
                console.log('supplier 4 -');
                console.log(this.initialObject, this.supplierFG.value);
                this.isEqual = isEqual(this.initialObject, this.supplierFG.getRawValue());
                // console.log(this.isEqual);
            });
    }

    getSupplierType() {
        this.supplierController.getSupplierType()
            .subscribe((supplierRes: any) => {
                this.supplierType = supplierRes;

                // WASTE_DISPOSAL_TYPE_SUPPLIER'S IDv
                let wasteDisposalSupplier = this.supplierType.find(sType => sType['keyID'] === SupplierTypeKeyIDEnum.WASTE_DISPOSAL_AND_TREATMENT);

                // comment for prod development because WASTE_DISPOSAL_AND_TREATMENT_KEY_ID is not use..
                // this.wasteDisposalSupplierID = wasteDisposalSupplier['typeID'];

                // ENERGY_TYPE_SUPPLIER'S ID
                let energySupplier = this.supplierType.find(sType => sType['keyID'] === SupplierTypeKeyIDEnum.ENERGY_SUPPLIER);
                this.energySupplierID = energySupplier['typeID'];
            },
                error => {
                    console.log('error in getSupplierType -', error);
                    this.toastrService.openToast(ToastrTitle.ERROR, 'Error in getting supplier types', ToastrColor.ERROR);
                })
    }

    getSupplierTiers() {
        this.supplierController.getSupplierTiers()
            .subscribe((supplierRes: any) => {
                this.supplierTiers = supplierRes;
            },
                error => {
                    console.log('error in getSupplierTier -', error);
                    this.toastrService.openToast(ToastrTitle.ERROR, 'Error in getting supplier tiers', ToastrColor.ERROR);
                })
    }

    async getCountry() {
        this.countryM = <CountryM[]>await this.countryService.getCountry();

        this.countrySelectSearch.entityArr = this.countryM;
        this.countrySelectSearch.createSubscription();
    }

    async getOrgByID(orgID) {
        this.organization = await this.organizationService.getOrganizationByID(orgID);

        if (this.action != FormAction.UPDATE) {
            this.supplierFG.patchValue({ countryCode: this.organization['countryCode'] });
        }
    }

    getSupplierByID(supplier) {
        this.supplierController.getSupplierByID(supplier['supplierID'], this.currentOrgID)
            .subscribe((supplierRes: any) => {
                this.supplierTypeId = supplierRes['supplierTypeIDs'];
                this.supplier = supplierRes;
                this.patchSupplier(supplierRes);
                this.initialObject = this.supplierFG.getRawValue();
            },
                error => {
                    console.log('error in getSupplier -', error);
                    this.toastrService.openToast(ToastrTitle.ERROR, 'Error in getting supplier', ToastrColor.ERROR);
                });
    }

    patchSupplier(supplier) {
        if (supplier) {
            const { name, supplierCode, supplierTypeIDs, email, address, countryCode, gridID, supplierTierID, isPortalEnabled } = supplier;
            this.supplierFG.patchValue({
                name: name || '',
                supplierCode: supplierCode || '',
                supplierTypeIDs: supplierTypeIDs || [],
                email: email || '',
                address: address || '',
                countryCode: countryCode || '',
                gridID: gridID || null,
                supplierTierID: supplierTierID || null,
                isPortalEnabled: isPortalEnabled || false,
            });
            if(isPortalEnabled) {
                this.patchSupplierContacts(supplier);
            }
            this.checkSupplierType(supplierTypeIDs || []);
        }
    }

    patchSupplierContacts(supplier) {
        const contactUsersFormArray = this.supplierFG.get('contactUsers') as FormArray;
        supplier.contactUsers.forEach((contactUser, index) => {
            const { id, firstName, lastName, emailID, contactNumber, contactCountryCode, isPrimary } = contactUser;
            const contactPersonForm = this.createContactPersonForm(isPrimary);
            contactPersonForm.patchValue({
                id: id || null,
                firstName: firstName || '',
                lastName: lastName || '',
                emailID: emailID || '',
                phoneNumber: {
                    number: contactNumber || '',
                    countryCode: contactCountryCode || '',
                    // dialCode: null,
                    // e164Number: null,
                    // internationalNumber: null,
                    // nationalNumber: null,
                },
                isPrimary: isPrimary || false,
            });
            if (contactUsersFormArray.at(index)) {
                // Patch existing contact person form
                contactUsersFormArray.at(index).patchValue(contactPersonForm.value);
            } else {
                // Create new contact person form
                contactUsersFormArray.push(contactPersonForm);
            }
        });
    }

    checkSupplierType(supplierTypeIDs: any[]) {
        if (supplierTypeIDs.find(id => id == this.wasteDisposalSupplierID)) {
            this.isAWasteDisposalSupplier = true;

            this.addValidators('email', [Validators.required, Validators.email])
        } else {
            if (this.isAWasteDisposalSupplier) {
                this.isAWasteDisposalSupplier = false;

                this.resetAndClearControl('email');
            }
        }
        if (supplierTypeIDs.find(id => id == this.energySupplierID)) {
            if (!this.isEnergySupplier) {
                this.isEnergySupplier = true;
                this.getGrid(this.supplierFG.get('countryCode').value);
            }
        } else {
            this.isEnergySupplier = false;
            this.resetAndClearControl('gridID');
        }
    }

    countryChange(countryCode) {
        this.supplierFG.get('gridID').reset(null);
        this.getGrid(countryCode);
    }

    getGrid(countryCode) {
        this.supplierController.getGrid(countryCode)
            .subscribe((gridRes: any[]) => {
                this.grid = gridRes;

                if (this.grid.length < 1) {
                    this.isGridAvailable = false;
                    this.supplierFG.get('gridID').clearValidators();
                } else {
                    this.isGridAvailable = true;
                    if (this.isEnergySupplier) {
                        this.supplierFG.get('gridID').addValidators(Validators.required);
                    }
                }

                this.supplierFG.get('gridID').updateValueAndValidity();
                this.gridSelectSearch.entityArr = this.grid;
                this.gridSelectSearch.createSubscription();
            },
                error => {
                    console.log('error in getGrid() -', error);
                    this.toastrService.openToast(ToastrTitle.ERROR, 'Error in getting grids', ToastrColor.ERROR);
                });
    }

    createUpdateSupplierForm(action) {
        const checkToggleButton = this.supplierFG.get('isPortalEnabled').value;
        this.isToggleEnabel = checkToggleButton;
        if(!checkToggleButton) {
            this.supplierFG.removeControl('contactUsers');
        } 
        if (this.supplierFG.invalid) {
            this.supplierFG.markAllAsTouched();
            console.log('invalid form -', this.supplierFG);
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        if (action == FormAction.CREATE) {
            // if (this.isAWasteDisposalSupplier) {
            //     // this.InviteScopeThreeSupplier(action);
            // } else {
            //     this.createSupplier();
            // }
            this.createSupplier();
        } else if (action == FormAction.UPDATE) {
            this.updateSupplier();
        } else {
            console.log('error in create/update supplier');
        }
    }

    checkSupplierCodeAvailability(action) {
        if (this.supplierFG.invalid) {
            this.supplierFG.markAllAsTouched();
            console.log('invalid form -', this.supplierFG.value);
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return [];
        }

        let supplierCode = this.supplierFG.controls['supplierCode'].value;
        if (supplierCode !== null && supplierCode !== '' && supplierCode.trim() !== '') {
            this.supplierController.isSupplierCodeExist(this.currentOrgID, supplierCode)
                .subscribe((isAvailableRes) => {
                    if (isAvailableRes['isSupplierCodeExist'] == 'NO') {
                        this.createUpdateSupplierForm(action);
                    } else {
                        this.supplierFG.get('supplierCode').setErrors({ 'duplicate_supplier_code': true });
                        this.toastrService.openToast(ToastrTitle.ERROR, 'Supplier Code already exists!', ToastrColor.ERROR);
                        return [];
                    }
                },
                    error => {
                        console.log('error in supplierCodValidity -', error);
                        this.toastrService.openToast(ToastrTitle.ERROR, 'Error in validating supplier code', ToastrColor.ERROR);
                    });
        } else {
            this.createUpdateSupplierForm(action);
        }
    }

    contains(supplierID): boolean {
        if (this.supplierTypeId.indexOf(supplierID) > -1) {
            this.showTooltip = true;
            return true;
        } else {
            return false;
        }
    }

    createSupplierObject() {
        const supplier = { ...this.supplierFG.value }; // Make a copy of the supplier object
        
        if(this.isToggleEnabel) {
            supplier.contactUsers = supplier.contactUsers.map((contactPerson) => {
                const { id, firstName, lastName, emailID, phoneNumber, isPrimary } = contactPerson;
                const { number: contactNumber, countryCode: contactCountryCode } = phoneNumber;
                return {
                    id,
                    firstName,
                    lastName,
                    emailID,
                    contactNumber,
                    contactCountryCode,
                    isPrimary
                };
            });
        }
        return supplier;
    }

    createSupplier() {
        this.supplierController.createSupplier(this.createSupplierObject(), this.currentOrgID)
            .subscribe((_supplierRes) => {
                this.dialogRef.close('opSuccess');
            },
                error => {
                    console.log('error in createSupplier -', error);
                });
    }

    updateSupplier() {
        this.supplierController.updateSupplier(this.createSupplierObject(), this.supplierID, this.currentOrgID)
            .subscribe((_supplierRes) => {
                this.dialogRef.close('opSuccess');
            },
                error => {
                    console.log('error in updateSupplier -', error);
                });
    }

    errorHandling = (control: string, error: string) => {
        return this.supplierFG.get(control).hasError(error);
    }

    errorHandlingContactPerson = (index: number, control: string, error: string) => {
        return this.contactPersons.controls[index].get(control).hasError(error);
    }

    async getCurrentCountry() {
        this.currentCountryCode = <any>await this.countryService.getCurrentCountry();
    }

    heightHandler(): void {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(100vh - ' + (headerHeight + footerHeight + 24) + 'px)';

        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);
    }

    deletePerson(index: number) {
        const contactPersons = this.contactPersons;
        // console.log('contactPerson -', contactPersons);
        if (contactPersons.length > 1) {
            // let contactPerson = contactPersons.controls[index].get('id').value;
            (contactPersons).removeAt(index);
        }
    }

    addContactPerson() {
        (this.contactPersons).push(this.createContactPersonForm(false));
    }

    hasSupplierPortal(): boolean {
        return this.supplierFG.get('isPortalEnabled').value;
    }

    canRemoveContactPerson(index: number): boolean {
        const contactPerson = this.contactPersons;
        const isPrimaryContact = contactPerson.controls[index].get('isPrimary').value;
        return contactPerson.length > 1 && !isPrimaryContact;
    }

    canUpdatePrimaryContact(index: number): boolean {
        const contactPerson = this.contactPersons;
        return contactPerson.length > 1 && this.isSomePrimaryContact(index);
    }

    isSomePrimaryContact(index: number): boolean {
        const contactPersonControls = this.contactPersonControls;
        return contactPersonControls.some((control, i) => i !== index && control.get('isPrimary').value);
    }

    updatePrimaryContact(index: number) {
        const contactPersonControls = this.contactPersonControls;
        const isPrimaryContact = contactPersonControls[index].get('isPrimary').value;

        if (isPrimaryContact) {
            contactPersonControls.forEach((control, i) => {
                if (i !== index) {
                    control.get('isPrimary').setValue(false);
                }
            });
        }
    }

    handlePortalAccess(check) {
    }

}