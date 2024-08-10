import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class ParameterTabComponent implements OnInit {
    private router;
    orgID: any;
    activeLink: any;
    tab: any;
    constructor(router: Router);
    ngOnInit(): void;
    setActiveLink(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParameterTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ParameterTabComponent, "lib-tab", never, {}, {}, never, never>;
}
