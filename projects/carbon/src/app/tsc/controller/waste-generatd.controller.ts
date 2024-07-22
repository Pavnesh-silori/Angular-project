import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { WasteTreatmentM, WasteTypeM } from '@carbon/model/waste-generated.model';

@Injectable({
  providedIn: 'root'
})
export class WasteGeneratedController {

  constructor(
    private http: HttpClient
  ) { }

  getWasteGenerationActivities( orgID,activityKeyID,pageNo: number, pageSize: number, sortBy: string, orderBy: string, filterArr: string[], searchValue: string,searchFlag:boolean, startDate: any, endDate: any){
    let params = new HttpParams();

    params = params.append('pageNo', (pageNo + 1).toString());
    params = params.append('pageSize', pageSize.toString());
    params = params.append('sortBy', sortBy);
    params = params.append('orderBy', orderBy);

    if (startDate != null) {
        params = params.append('startDate', startDate);
        params = params.append('endDate', endDate);
    }

    if (searchFlag) {
      params = params.append('searchValue', searchValue)
    }
    filterArr.forEach(filter => params = params.append('filter', filter))

    return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity/${activityKeyID}/data/page`, { params: params })
  }

  getAllWasteTypes(activityID): Observable<WasteTypeM> {
    let params = new HttpParams();
    params = params.append('activityID', activityID);
    return this.http.get<WasteTypeM>(`${environment.CARBON_ACCOUNTING_API_URL}waste-types`,{params:params})
  }

  getAllWasteTreatmentMethod(activityID): Observable<WasteTreatmentM> {
    let params = new HttpParams();
    params = params.append('activityID', activityID);
    return this.http.get<WasteTreatmentM>(`${environment.CARBON_ACCOUNTING_API_URL}waste-treatment-method`,{params:params})
  }

}
