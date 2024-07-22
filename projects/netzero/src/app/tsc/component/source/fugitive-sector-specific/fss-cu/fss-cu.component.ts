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

import { FugitiveSectorSpecificController } from '@netzero/controller/fugitive-sector-specific.controller';
import { FugitiveSectorSpecificService } from '@netzero/service/fugitive-sector-specific.service';
import { GasService } from '@carbon/service/gas.service';

// tsc-library
import { StorageService } from '@library/storage-service';

import {
    MATERIAL_CONSTANT,
    COMMON_CONSTANT,
    ButtonTooltipEnum,
    FormAction,
    MaterialFormFieldAppearance,
    FormErrorEnum,
    InvalidForm,
    ResponseM,
    DialogResponseEnum,
    TSCCommonService,
    MatSelectSearchService
} from '@library/tsc-common';

import {
    ToastrColor,
    ToastrService,
} from '@library/toastr-service';
// /tsc-library/

@Component({
    selector: 'app-fss-cu',
    templateUrl: './fss-cu.component.html',
    styles: [
    ]
})

export class FssCuComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        private dialogRef: MatDialogRef<FssCuComponent>,
        private renderer: Renderer2,
        private formBuilder: FormBuilder,
        private fugitiveSectorSpecificController: FugitiveSectorSpecificController,
        private fugitiveSectorSpecificService: FugitiveSectorSpecificService,
        private gasService: GasService,

        // tsc-library
        storageService: StorageService,
        public tSCCommonService: TSCCommonService,
        private toastrService: ToastrService
        // /tsc-library/
    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');
        this.action = data.action;
        this.sourceID = data.sourceID;
    }

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    FormAction = FormAction;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    FormErrorEnum = FormErrorEnum;

    pageTitle: string = 'Sector Specific Fugitive Source';
    pageSubtitle: string = '';

    maxLength: number = 100;

    currentOrgID: any;
    sourceID: any;
    source: any;
    action: FormAction;
    intialObject: any;
    isEqual: boolean = true;
    sourceFG: FormGroup;
    descriptionCharMaxLength: number = 100;
    allGas: any[] = [];
    gasSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;

    ngOnInit(): void {
        this.sourceFGInit();
        this.getAllGas();

        if (this.action == FormAction.UPDATE) {
            this.getSourceByID(this.currentOrgID, this.sourceID);
        }
    }

    ngAfterViewInit() {
        this.heightHandler();
    }

    sourceFGInit() {
        this.sourceFG = this.formBuilder.group({
            name: [, Validators.required],
            gasID: [, Validators.required],
            description: ['', [Validators.maxLength(100)]]
        })
    }

    heightHandler(): void {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(100vh - ' + (headerHeight + footerHeight + 24) + 'px)';

        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);
    }

    errorHandling = (formGroup: FormGroup, controlPath: string, error: string): boolean => {
        return formGroup.get(controlPath).hasError(error);
    }

    async getAllGas() {
        this.allGas = <any[]>await this.gasService.getGas();
        this.gasSelectSearch.entityArr = this.allGas;
        this.gasSelectSearch.createSubscription();
    }

    async getSourceByID(orgID: number, sourceID: number) {
        console.log('in getSourceByID', orgID, sourceID);

        this.source = <any>await this.fugitiveSectorSpecificService.getSourceByID(orgID, sourceID);
        console.log('this.source', this.source);

        this.patchSource(this.source);
    }

    patchSource(source: any) {
        this.sourceFG.patchValue(source);
        this.intialObject = this.sourceFG.value;

        this.sourceFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.intialObject, this.sourceFG.value);
        });
    }

    onSubmit(action: FormAction) {
        if (this.sourceFG.invalid) {
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        } else {
            switch (action) {
                case FormAction.CREATE:
                    this.createSource();
                    break;
                case FormAction.UPDATE:
                    this.updateSource();
                    break;
            }
        }
    }

    createSource() {
        this.fugitiveSectorSpecificController.createSource(this.currentOrgID, this.sourceFG.value).subscribe((response: ResponseM) => {
            let result;

            result = {
                status: DialogResponseEnum.SUCCESS
            }

            this.dialogRef.close(result);
        }, error => {
            console.log('error in createSource -', error);
        });
    }

    updateSource() {
        this.fugitiveSectorSpecificController.updateSourceByID(this.currentOrgID, this.sourceID, this.sourceFG.value).subscribe((response: ResponseM) => {
            let result;

            result = {
                status: DialogResponseEnum.SUCCESS
            }

            this.dialogRef.close(result);
        }, error => {
            console.log('error in updateSource -', error);
        });
    }

    charactersRemainingFn = (fg: FormGroup): number => {
        let description = fg.get('description').value;
        if (description) return (this.maxLength - description.length);
        else return this.maxLength;
    }

}
