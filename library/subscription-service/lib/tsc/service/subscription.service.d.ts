import { ExpiringSubscriptionM } from '../model/subscription.model';
import { SubscriptionController } from '../controller/subscription.controller';
import { StorageService } from '@library/storage-service';
import * as i0 from "@angular/core";
export declare class SubscriptionService {
    private environment;
    private storageService;
    private subscriptionController;
    constructor(environment: any, storageService: StorageService, subscriptionController: SubscriptionController);
    orgPlanType(orgID: number): Promise<any>;
    redirectOnSubscriptionExpire(): void;
    getExpiringSubscribtion(orgID: any, applicationID: any): Promise<ExpiringSubscriptionM>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubscriptionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SubscriptionService>;
}
