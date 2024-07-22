import { Injectable } from "@angular/core";
import { AssetController } from '@netzero/controller/asset.controller';
@Injectable({
    providedIn: 'root'
})

export class AssetService {

    constructor(
        private assetController: AssetController,
    ) { }

    async getAllAsset(orgID): Promise<any[]> {
        let assetM: any;
        let asset:any;
        try{
            assetM = await this.assetController.getAllAsset(orgID).toPromise();
            if(assetM){
                return assetM;
            } else {
                return asset;
            }
        } catch (error) {
            console.log('Error -',error);
            return asset;
        }
    }
}