import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

import { LIST_CONSTANT } from '../../../constant/list.constant';

// tsc-library
import { FileTypeEnum, MATERIAL_CONSTANT } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-download-report',
    templateUrl: './download-report.component.html',
    styleUrls: ['./download-report.component.scss']
})
export class DownloadReportComponent implements OnInit {

    listConstant = LIST_CONSTANT;
    materialConstant = MATERIAL_CONSTANT;
    fileTypeEnum = FileTypeEnum;

    @Input()
    excludeFileTypeInp: FileTypeEnum;

    @Output()
    fileTypeEmitted = new EventEmitter<string>();

    excludeFileType = '';

    constructor() { }

    ngOnInit(): void {
    }

    onChange(selectedType) {
        this.fileTypeEmitted.emit(selectedType);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.excludeFileTypeInp && this.excludeFileTypeInp) {
            this.excludeFileType = this.excludeFileTypeInp;
        }
    }

}
