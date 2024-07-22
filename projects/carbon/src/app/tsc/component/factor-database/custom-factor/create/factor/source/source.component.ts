import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '@library/toastr-service';
import { MaterialFormFieldAppearance, NocFileUploadEnum } from '@library/tsc-common';

@Component({
    selector: 'factor-source',
    templateUrl: './source.component.html',
    styleUrls: []
})
export class SourceComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    formFields = [
        {
            width: 'col-sm-12',
            label: 'Source name',
            control: 'name',
            placeholder: 'Example heat supplier',
            input: 'input',
            type: 'text',
            validators: [
                {
                    validator: 'required',
                    error: 'Name is mandatory',
                }
            ],
        },
        {
            input: 'file',
            control: '',
            Validators: []
        }
    ];

    sourceFG: FormGroup;

    constructor(
        private activatedRoute: ActivatedRoute,
        private toastrService: ToastrService,
        private formBuilder: FormBuilder,
    ) { }

    isUpdate: boolean = false;
    ngOnInit(): void {
        this.initFormGroup();

        this.activatedRoute.params.subscribe(params => {
            if (params['versionID']) { this.isUpdate = true }
        });
    }

    initFormGroup() {
        this.sourceFG = this.formBuilder.group(this.createFG())
    }

    createFG() {
        let formGroup = {};
        let formFields = this.formFields.filter((ff) => ff['input'] == 'input');
        formFields.forEach((ff) => {
            formGroup[ff['control']] =
                this.formBuilder.control(null,
                    Validators.compose(
                        ff['validators']
                            .map((v) => Validators[v['validator']]))
                );
        });
        return formGroup;
    }

    file: File = null;
    fileName: string = null;
    fileUpload(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            if (file.type !== 'application/pdf') {
                this.resetFileInput();
                this.toastrService.openToast("Error", `${NocFileUploadEnum.INVALID_FILE_TYPE_ERROR}`, "error");
                return;
            } else if (file.size > NocFileUploadEnum.INVAID_FILE_SIZE_ERROR) {
                this.resetFileInput();
                this.toastrService.openToast("Error", `${NocFileUploadEnum.MAX_FILE_SIZE}`, "error");
                return;
            }

            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.addEventListener("load", () => {
                this.fileUrl = null;

                this.file = file;
                this.fileName = file.name;
                this.invalidFile = false;
            });
            reader.addEventListener("abort", () => {
                this.resetFileInput();
                this.toastrService.openToast("Error", "Something went wrong!", "error");
            });
            reader.addEventListener("error", () => {
                this.resetFileInput();
                this.toastrService.openToast("Error", "Error while uploading file!", "error");
            });
        }
    }

    @ViewChild('fileInput') fileInput: ElementRef;
    resetFileInput() {
        this.file = null;
        this.fileName = null;
        this.fileInput.nativeElement.value = null;
    }

    fileUrl: string = null;
    patchSource(source) {
        this.sourceFG.patchValue(source);
        if (source['fileName'] && source['fileUrl']) {
            this.fileName = source['fileName'];
            this.fileUrl = source['fileUrl'];
        }
    }

    invalidFile: boolean = false;
    isValidForm() {
        if (this.sourceFG.invalid) {
            if (!this.isUpdate && this.file == null) this.invalidFile = true;
            this.sourceFG.markAllAsTouched();
            return false;
        }

        if (!this.isUpdate && this.file == null) {
            this.invalidFile = true;
            return false;
        }

        return true;
    }

    errorHandling = (control: string, error: string) => {
        return this.sourceFG.get(control).hasError(error);
    }
}
