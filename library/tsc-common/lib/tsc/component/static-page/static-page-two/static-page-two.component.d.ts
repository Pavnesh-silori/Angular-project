import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticPageTwo } from '../../../model/static-page-two.model';
import * as i0 from "@angular/core";
export declare class StaticPageTwoComponent implements OnInit {
    private activatedRoute;
    data: StaticPageTwo;
    constructor(activatedRoute: ActivatedRoute);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StaticPageTwoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StaticPageTwoComponent, "app-static-page-two", never, {}, {}, never, never>;
}
