import { Component, OnInit } from '@angular/core';

import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft';

import { TSCCommonService } from '../../service/tsc-common.service'; 

@Component({
    selector: 'lib-back-button',
    templateUrl: './back-button.component.html',
    styles: []
})

export class BackButtonComponent implements OnInit {
    faArrowAltCircleLeft = faArrowAltCircleLeft;

    constructor(
        private tSCCommonService: TSCCommonService
    ) { }

    ngOnInit(): void {
    }

    backBtnClick() {
        this.tSCCommonService.back();
    }

}
