import { OnInit } from '@angular/core';
import { ExpiringSubscriptionM } from '../../model/subscription.model';
import { SubscriptionService } from '../../service/subscription.service';
import { StorageService } from '@library/storage-service';
import * as i0 from "@angular/core";
export declare class ExpiryAlertComponent implements OnInit {
    private environment;
    private subscriptionService;
    private storageService;
    MATERIAL_CONSTANT: {
        MAT_RIPPLE_CENTER: boolean;
    };
    rootOrgID: any;
    applicationID: any;
    showSubscriptionMessage: boolean;
    message: string;
    showCloseBtn: boolean;
    buyLink: string;
    buyLinkMsg: string;
    expiredSubscribtionMsg: string;
    subscriptionM: ExpiringSubscriptionM;
    constructor(environment: any, subscriptionService: SubscriptionService, storageService: StorageService);
    ngOnInit(): void;
    getMessage(rootOrgID: any, applicationID: any): Promise<void>;
    hideSubscriptionMessage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpiryAlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpiryAlertComponent, "lib-expiry-alert", never, {}, {}, never, never>;
}
