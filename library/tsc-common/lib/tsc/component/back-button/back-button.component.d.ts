import { OnInit } from '@angular/core';
import { TSCCommonService } from '../../service/tsc-common.service';
import * as i0 from "@angular/core";
export declare class BackButtonComponent implements OnInit {
    private tSCCommonService;
    faArrowAltCircleLeft: import("@fortawesome/fontawesome-common-types").IconDefinition;
    constructor(tSCCommonService: TSCCommonService);
    ngOnInit(): void;
    backBtnClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BackButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BackButtonComponent, "lib-back-button", never, {}, {}, never, never>;
}
