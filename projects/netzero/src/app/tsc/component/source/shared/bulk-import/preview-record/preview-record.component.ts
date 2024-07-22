import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { ButtonLabelEnum, COMMON_CONSTANT, MaterialFormFieldAppearance, TABLE_CONSTANT } from '@library/tsc-common';
import { ProductAndServiceController } from '@netzero/controller/product-and-service.controller';
@Component({
    selector: 'app-preview-record',
    templateUrl: './preview-record.component.html',
})


export class PreviewRecordComponent implements OnInit {


    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    currentOrgID: string | number;

    COMMON_CONSTANT = COMMON_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum;
    isDisabled: boolean = false;

    @Input('previewRecords') previewRecords: any;
    @Output() nextEmit: EventEmitter<number> = new EventEmitter<number>(null);
    @Output() configureRecordsEmit: EventEmitter<number> = new EventEmitter<number>();

    TABLE_CONSTANT = TABLE_CONSTANT;

    maxLength: number = 500;
    remainingChars: number = this.maxLength;

    dataSource: any[] = [];
    displayedColumns: string[] = [];
    otherColumns: string[] = [];

    // validationError: string[] = [];

    constructor(
        private location: Location,
        private productAndServiceController: ProductAndServiceController,
        private toasterService: ToastrService,
        private storageService: StorageService

    ) { }

    ngOnInit(): void {
        console.log('previewRecords', this.previewRecords);
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.displayedColumns = this.previewRecords['displayedColumns'].filter((column) => column !== 'includeExcludeRecord');
        this.otherColumns = this.previewRecords['otherColumns'];
        // this.header
        this.dataSource = this.previewRecords['records'];
    }

    cancelBtn() {
        this.location.back();
    }

    submit() {
        this.saveRecords();
    }

    saveRecords() {
        try {
            const formData = { records: this.previewRecords['records'], headers: this.previewRecords['headers'] };
            this.productAndServiceController.bulkSaveRecords(this.currentOrgID, 'product', formData)
                .subscribe((response) => {
                    if (response['title'] == 'Success') {
                        this.toasterService.openToast(ToastrTitle.SUCCESS, response['message'], ToastrColor.SUCCESS);
                        this.location.back();
                        // this.configureRecordsEmit.emit(response['response']);
                    } else if (response['title'] == 'Error') {
                        this.toasterService.openToast(ToastrTitle.ERROR, response['message'], ToastrColor.ERROR);
                    }
                });
        } catch (error) {
            console.log("error", error);
        }
    }

    categoryDisplayCount(category: any[]): string {
        if (category.length > 0) {
            const categoryCount = category.length - 1;
            return `+${categoryCount}`;
        }
    }

    formatCaegoryTooltip(category: any[]): string {
        return category.slice(1).join('\n');
    }

}