import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

import { LIST_CONSTANT } from '../../../../constant/list.constant';

@Component({
    selector: 'lib-source-load',
    templateUrl: './source-load.component.html',
    styles: [
    ]
})
export class SourceLoadComponent implements OnInit {

    @Input()
    defaultCategoryInp: string;

    listConstant = LIST_CONSTANT;

    categoryFC = new FormControl("source");

    @Output()
    emitFilter = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.defaultCategoryInp && this.defaultCategoryInp) {
            this.categoryFC.patchValue(this.defaultCategoryInp);
        }
    }

    ngAfterViewInit() {
        this.emitFilter.emit();
    }

    categoryChange(selectedCategory) {
        this.categoryFC.patchValue(selectedCategory);
        this.emitFilter.emit();
    }

}
