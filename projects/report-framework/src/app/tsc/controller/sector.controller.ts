import { SectorM } from '@report-framework/model/sector.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class SectorController {

	constructor(
		private http: HttpClient
	) { }

	getAllSectorList(): Observable<SectorM[]> {
		return this.http.get<SectorM[]>(`${environment.REPORTING_FRAMEWORK_API_URL}sector`);
	}
}
