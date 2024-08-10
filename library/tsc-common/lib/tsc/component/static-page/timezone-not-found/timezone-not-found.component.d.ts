import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticPageOne } from '../../../model/static-page-one.model';
import { StorageService } from '@library/storage-service';
import * as i0 from "@angular/core";
export declare class TimezoneNotFoundComponent implements OnInit {
    private activatedRoute;
    private storageService;
    private environment;
    rootOrgID: any;
    currentOrgID: any;
    currentOrgType: any;
    token: string;
    userID: string;
    redirectUrl: any;
    appRedirectUrl: string;
    data: StaticPageOne;
    constructor(activatedRoute: ActivatedRoute, storageService: StorageService, environment: any);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimezoneNotFoundComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimezoneNotFoundComponent, "lib-timezone-not-found", never, {}, {}, never, never>;
}
