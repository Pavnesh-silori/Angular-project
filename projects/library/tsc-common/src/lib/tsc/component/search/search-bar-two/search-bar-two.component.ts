import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormControl } from '@angular/forms';

import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'lib-search-bar-two',
    templateUrl: './search-bar-two.component.html',
    styleUrls: ['./search-bar-two.component.scss']
})

export class SearchBarTwoComponent implements OnInit {

    faTimes = faTimes;
    faSearch = faSearch;

    searchFC: FormControl = new FormControl('');

    @Input()
    type: string = 'text';

    @Input()
    searchBy: string = '';

    @Input()
    clear: boolean = false;

    @Output()
    emitSearch = new EventEmitter<String>();

    active: boolean = false;

    constructor() { }

    ngOnInit(): void { }

    ngOnChanges() {
        if (!this.clear) {
            this.searchFC.reset('', { onlySelf: true, emitEvent: false });
        }
    }

    searchFn() {
        if (this.searchFC.value.length > 0) {
            this.active = true;
            this.emitSearch.emit(this.searchFC.value);
            return;
        }

        if (!this.active) {
            return;
        }

        if (this.searchFC.value.length == 0 && this.active) {
            this.active = false;
            this.emitSearch.emit('');
            return;
        }
    }

    searchReset() {
        this.searchFC.reset('');
        this.searchFn();
    }

    searchClear() {
        this.active = false;
        this.searchFC.reset('');
    }

}
