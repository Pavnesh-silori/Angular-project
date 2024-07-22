import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

// tsc-library
import { 
    COMMON_CONSTANT, 
    StatusService 
} from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'app-config-view',
    templateUrl: './config-view.component.html',
    styles: [
    ]
})

export class ConfigViewComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;

    @Input() configInp: any;

    config: any;

    constructor(
        private statusService: StatusService
    ) { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.configInp && this.configInp) {
            this.config = this.configInp;
        }
    }
}
