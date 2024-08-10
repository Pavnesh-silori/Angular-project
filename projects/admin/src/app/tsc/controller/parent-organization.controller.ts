import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { PageM } from '@Admin/model/page.model';
import { ParentOrganizationM } from '@Admin/model/parent-organization.model';

@Injectable({
	providedIn: 'root'
})

export class ParentOrganizationController {

	constructor(
		private http: HttpClient,
	) { }

	getParentOrganizationByPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string, search: any[], filter: any[], orgID: number): Observable<PageM<ParentOrganizationM>> {
		let params = new HttpParams();

		params = params.append('pageNo', pageNo);
		params = params.append('pageSize', pageSize);
		params = params.append('sortBy', sortBy);
		params = params.append('orderBy', orderBy);

		search.forEach(search => params = params.append('search', search));
		filter.forEach(filter => params = params.append('filter', filter));

		return this.http.get<PageM<ParentOrganizationM>>(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/parent-organization/page`, { params: params });
	}

	updateParentOrgStatusByID(orgID, requestBody) {
		return this.http.patch(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/parent-organization/approval-status`, requestBody);
	}

}
