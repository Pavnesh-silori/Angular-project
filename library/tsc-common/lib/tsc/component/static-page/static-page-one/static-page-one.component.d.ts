import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticPageOne } from '../../../model/static-page-one.model';
import * as i0 from "@angular/core";
export declare class StaticPageOneComponent implements OnInit {
    private activatedRoute;
    data: StaticPageOne;
    constructor(activatedRoute: ActivatedRoute);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StaticPageOneComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StaticPageOneComponent, "lib-static-page-one", never, {}, {}, never, never>;
}
