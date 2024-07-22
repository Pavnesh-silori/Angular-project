import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class EquipmentGroupController {

    constructor(
        private http: HttpClient,
    ) { }

    getEquipment(currentOrgID) {
        return this.http.get(`${environment.COMMON_API_URL}organizations/${currentOrgID}/equipment-group/list`);
    }
    
    getEquipmentGroupGasListByID
        (currentOrgID, equipmentGroupID) {
        return this.http.get(`${environment.COMMON_API_URL}organizations/${currentOrgID}/equipment-group/${equipmentGroupID}`);
    }

}