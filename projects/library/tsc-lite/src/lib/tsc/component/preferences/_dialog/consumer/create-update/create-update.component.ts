import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
    MAT_DIALOG_DATA,
    MatDialogRef
} from '@angular/material/dialog';

import { isEqual } from 'lodash';

import { ConsumerM, UtilitySourceTypeM } from '../../../../../model/source-consumer.model';

import { ConsumerController } from '../../../../../controller/consumer.controller';

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
export class ConsumerCreateUpdateComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    FormAction = FormAction;
    FormErrorEnum = FormErrorEnum;
    ButtonLabelEnum = ButtonLabelEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;
    PageTitleEnum = PageTitleEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    orgID: any;
    consumerID: any;
    action: string;
    isEqual: boolean = true;
    intialObject: any;

    utilitySourceTypeM: any;

    consumerM: ConsumerM;
    consumerFG: FormGroup;

    pageTitle: string = 'Consumer type';

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        private dialogRef: MatDialogRef<ConsumerCreateUpdateComponent>,
        private renderer: Renderer2,
        private formBuilder: FormBuilder,
        private storageService: StorageService,
        private toastrService: ToastrService,
        public tscCommonService: TSCCommonService,
        private sourceService: SourceService,
        private consumerController: ConsumerController,
    ) {
        this.action = data.action;
        this.consumerID = data.consumerID;
    }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.getUtilitySourceAndType();
        this.consumerFGInit();

        if (this.action == FormAction.UPDATE) {
            this.getConsumerTypeByID(this.consumerID);
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

    consumerFGInit() {
        this.consumerFG = this.formBuilder.group({
            name: [, [Validators.required]],
            utilitySourceID: [, [Validators.required]],
            type: [, [Validators.required]]
        });
    }

    consumerSubmit() {
        if (this.consumerFG.invalid) {
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        } else {
            if (this.action == FormAction.CREATE) {
                this.createConsumerType();
            } else if (this.action == FormAction.UPDATE) {
                this.updateConsumerType();
            }
        }
    }

    createConsumerType() {
        this.consumerController.createConsumerType(this.orgID, this.consumerFG.value).subscribe((res: ResponseM) => {

            let result;
            result = {
                status: DialogResponseEnum.SUCCESS,
            }

            this.dialogRef.close(result);

        }, error => {
            console.log('error in createConsumerType -', error);
        });
    }

    getConsumerTypeByID(consumerID) {
        this.consumerController.getConsumerTypeByID(this.orgID, consumerID).subscribe((res: ConsumerM) => {
            this.consumerM = res;
            this.patchConsumer(this.consumerM);
        }, error => {
            console.log('error in getConsumerTypeByID -', error);
        });
    }

    patchConsumer(consumer: ConsumerM) {
        this.consumerFG.patchValue(consumer);

        this.intialObject = this.consumerFG.value;

        this.consumerFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.intialObject, this.consumerFG.value);
        });

    }

    updateConsumerType() {
        this.consumerController.updateConsumerType(this.orgID, this.consumerID, this.consumerFG.value).subscribe((res: ResponseM) => {

            let result;
            result = {
                status: DialogResponseEnum.SUCCESS,
            }

            this.dialogRef.close(result);

        }, error => {
            console.log('error in updateConsumerType -', error);
        })
    }

    errorHandling = (formGroup: FormGroup, controlPath: string, error: string): boolean => {
        return formGroup.get(controlPath).hasError(error);
    }

}
