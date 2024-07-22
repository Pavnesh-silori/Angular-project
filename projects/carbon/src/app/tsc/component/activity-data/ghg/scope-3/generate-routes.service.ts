import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})

export class GenerateRoutesService {
    constructor() { }

    // getPurchasedGoodsServicesCreateUrl(): string {
    //     const activityKeyID = ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES;
    //     const methodKeyID = MethodKeyIDEnum.AVERAGE_BASED_METHOD;
    //     return this.getAcitivityMethodActionUrl(activityKeyID, methodKeyID, 'create');
    // }

    // getPurchasedGoodsServicesUpdateUrl(): string {
    //     const activityKeyID = ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES;
    //     const methodKeyID = MethodKeyIDEnum.AVERAGE_BASED_METHOD;
    //     return this.getAcitivityMethodActionUrl(activityKeyID, methodKeyID, 'update');
    // }

    // getPurchasedGoodsServicesPageUrl(): string {
    //     const activityKeyID = ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES;
    //     const methodKeyID = MethodKeyIDEnum.AVERAGE_BASED_METHOD;
    //     return this.getAcitivityMethodActionUrl(activityKeyID, methodKeyID, 'page');
    // }

    getAcitivityMethodActionUrl(activityKeyID: any, methodKeyID: any, action: string): string {
        return `/activity-data/activity/${activityKeyID}/method/${methodKeyID}/${action}`;
    }

}