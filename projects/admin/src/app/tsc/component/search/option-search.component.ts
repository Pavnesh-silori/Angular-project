import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'option-search',
    templateUrl: './option-search.component.html',
    styles: [
    ]
})
export class OptionSearchComponent implements OnInit {

    @Input() placeholder: string;
    @Input() noEntriesFoundLabel: string;
    @Input() filterFC: FormControl;

    constructor() { }

    ngOnInit(): void { }

}
