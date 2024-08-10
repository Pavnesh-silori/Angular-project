import { ElementRef, OnInit, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from '@library/toastr-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/dialog";
import * as i3 from "@angular/material/progress-bar";
export declare class BulkUploadDialogLib implements OnInit {
    private dialogRef;
    private data;
    private toastrService;
    progress: any;
    fileName: string;
    error: any;
    response: [];
    message: string;
    duplicateData: any;
    mandatoryData: any;
    loaded: number;
    source: string;
    templateFileSrc: string;
    bulkUpload: any;
    fileUploaded: EventEmitter<File>;
    bulkUploadFile: ElementRef;
    constructor(dialogRef: MatDialogRef<BulkUploadDialogLib>, data: any, toastrService: ToastrService);
    ngOnInit(): void;
    onFileChange(event: any): void;
    resetFileInput(): void;
    isFileAllowed(fileName: string): boolean;
    bulkUploadBtn(controlName: any): void;
    toFormData(bulkUpload: any): FormData;
    bulkUploadFun(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BulkUploadDialogLib, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BulkUploadDialogLib, "app-bulk-upload-dialog", never, {}, { "fileUploaded": "fileUploaded"; }, never, never>;
}
export declare class BulkUploadDialogLibModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BulkUploadDialogLibModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BulkUploadDialogLibModule, [typeof BulkUploadDialogLib], [typeof i1.CommonModule, typeof i2.MatDialogModule, typeof i3.MatProgressBarModule], [typeof BulkUploadDialogLib]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BulkUploadDialogLibModule>;
}
