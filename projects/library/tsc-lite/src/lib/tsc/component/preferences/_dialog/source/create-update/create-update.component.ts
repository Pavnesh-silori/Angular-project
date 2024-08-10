import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
    MAT_DIALOG_DATA,
    MatDialogRef
} from '@angular/material/dialog';

import { isEqual } from 'lodash';

import { SourceM, UtilitySourceTypeM } from '../../../../../model/source-consumer.model';

import { SourceController } from '../../../../../controller/source.controller';

import { SourceService } from '../../../../../service/source.service';

// tsc-library
import { MaterialFormFieldAppearance, ButtonLabelEnum, FormAction, PageTitleEnum, FormErrorEnum, TSCCommonService, ResponseM, InvalidForm, COMMON_CONSTANT, Static, DialogResponseEnum, ButtonTooltipEnum, MATERIAL_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
// /tsc-library/

@Component({
    selector: 'lib-create-update',
    templateUrl: './create-update.component.html',
    styles: [
    ]
})
export class SourceCreateUpdateComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    FormAction = FormAction;
    FormErrorEnum = FormErrorEnum;
    ButtonLabelEnum = ButtonLabelEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;
    PageTitleEnum = PageTitleEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    pageTitle: string = 'Source type';

    orgID: any;
    sourceID: any;
    action: string;
    isEqual: boolean = true;
    intialObject: any;

    utilitySourceTypeM: any;
    allSourceTypeID: any[] = [];
    totalSourceTypeCount: number = 0;
    utilitySourceI = [new Static()];
    sourceType = [new Static()];
    sourceM: SourceM;
    sourceFG: FormGroup;

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        private dialogRef: MatDialogRef<SourceCreateUpdateComponent>,
        private renderer: Renderer2,
        private formBuilder: FormBuilder,
        private storageService: StorageService,
        private toastrService: ToastrService,
        public tscCommonService: TSCCommonService,
        private sourceController: SourceController,
        private sourceService: SourceService
    ) {
        this.action = data.action;
        this.sourceID = data.sourceID;
    }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.getUtilitySourceAndType();
        this.sourceFGInit();

        if (this.action == FormAction.UPDATE) {
            this.getSourceTypeByID(this.sourceID);
        }
    }

    ngAfterViewInit() {
        this.heightHandler();
    }

    heightHandler(): void {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(100vh - ' + (headerHeight + footerHeight + 24) + 'px)';

        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);
    }

    async getUtilitySourceAndType() {
        const result = <UtilitySourceTypeM>await this.sourceService.getUtilitySourceAndType(this.orgID);
        this.utilitySourceTypeM = result.utilitySource;
    }

    sourceFGInit() {
        this.sourceFG = this.formBuilder.group({
            name: [, [Validators.required]],
            utilitySourceID: [, [Validators.required]],
            typeID: [, [Validators.required]]
        });
    }

    onUtilitySourceChange(utilitySourceID: number) {
        const selectedUtilitySource = this.utilitySourceTypeM.find(source => source.id == utilitySourceID);
        if (selectedUtilitySource) {
            this.sourceType = selectedUtilitySource.type;
        } else {
            this.sourceType = [];
        }
    }

    sourceSubmit() {

        if (this.sourceFG.invalid) {
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        } else {
            if (this.action == FormAction.CREATE) {
                this.createSourceType();
            } else if (this.action == FormAction.UPDATE) {
                this.updateSourceType();
            }
        }
    }

    createSourceType() {
        this.sourceController.createSourceType(this.orgID, this.sourceFG.value).subscribe((res: ResponseM) => {

            let result;
            result = {
                status: DialogResponseEnum.SUCCESS,
            }

            this.dialogRef.close(result);

        }, error => {
            console.log('error in createSourceType -', error);
        });
    }

    getSourceTypeByID(sourceID) {
        this.sourceController.getSourceTypeByID(this.orgID, sourceID).subscribe((res: SourceM) => {
            this.sourceM = res;
            this.patchSource(this.sourceM);
        }, error => {
            console.log('error in getSourceTypeByID -', error);
        });
    }

    patchSource(source: SourceM) {
        this.sourceFG.patchValue(source);

        this.onUtilitySourceChange(source.utilitySourceID);

        this.intialObject = this.sourceFG.value;

        this.sourceFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.intialObject, this.sourceFG.value);
        });

    }

    updateSourceType() {
        this.sourceController.updateSourceType(this.orgID, this.sourceID, this.sourceFG.value).subscribe((res: ResponseM) => {

            let result;
            result = {
                status: DialogResponseEnum.SUCCESS,
            }

            this.dialogRef.close(result);

        }, error => {
            console.log('error in updateSourceType -', error);
        })
    }

    errorHandling = (formGroup: FormGroup, controlPath: string, error: string): boolean => {
        return formGroup.get(controlPath).hasError(error);
    }

}