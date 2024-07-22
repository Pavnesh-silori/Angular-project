import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeCountM } from '@carbon/model/employee-survey.model';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { SurveyDetailsM, SurveyResponseM, SurveySummaryM } from '@carbon/model/employee-survey.model';

@Injectable({
    providedIn: 'root'
})

export class EmployeeSurveyController {

    constructor(
        private http: HttpClient,
    ) { }

    createSurvey(orgID, value) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/employee-commuting/surveys`, value);
    }

    getEmployeeSurveyByPage(orgID: any, pageNo: number, pazeSize: number, sortBy: string, orderBy: string, filterArr: Array<string>, searchValue: string, dateFlag: boolean, startDate: any, endDate: any) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pazeSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        params = params.append('startDate', startDate);
        params = params.append('endDate', endDate);
        if (searchValue != null) {
            params = params.append('searchValue', searchValue)
        }

        filterArr.forEach(filter => params = params.append('filter', filter));

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/employee-commuting/surveys/page`, { params: params });
    }

    getSurveyByID(orgID, surveyID): Observable<SurveyDetailsM> {
        return this.http.get<SurveyDetailsM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/employee-commuting/surveys/${surveyID}`);
    }

    createSurveyData(value) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_PUBLIC_API_URL}employee-commuting/surveys/data`, value);
    }

    getSurveyDataByPage(orgID, surveyID, pageNo: number, pazeSize: number, sortBy: string, orderBy: string, filterArr: Array<string>, searchFlag: boolean, searchValue: string): Observable<SurveyResponseM[]> {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pazeSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        if (searchFlag) {
            params = params.append('searchValue', searchValue)
        }
        filterArr.forEach(filter => params = params.append('filter', filter))

        return this.http.get<SurveyResponseM[]>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/employee-commuting/surveys/${surveyID}/data/page`, { params: params })
    }

    getAllModeOfTransport(orgID) {
        let params = new HttpParams();
        params = params.append('rootOrgID', orgID);

        return this.http.get(`${environment.CARBON_ACCOUNTING_PUBLIC_API_URL}employee-commuting/mode-of-transports`, { params: params });
    }


    getExistingSurveyStatus(orgID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/employee-commuting/existing-survey`);
    }

    sendReminderSurvey(orgID, surveyID) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/surveys/${surveyID}/reminder`, {});
    }

    endSurvey(orgID, surveyID) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/surveys/${surveyID}/end-survey`, {});
    }

    getSurveySummary(orgID, surveyID): Observable<SurveySummaryM> {
        return this.http.get<SurveySummaryM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/employee-commuting/surveys/${surveyID}/cohort-graph`);
    }

    genreateOTP(value) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_PUBLIC_API_URL}employee-commuting/generate-otp`, value);
    }

    getEmployeeCount(orgID): Observable<EmployeeCountM> {
        return this.http.get<EmployeeCountM>(`${environment.COMMON_API_URL}organizations/${orgID}/employees/count`);
    }
    getEmployeeData(employeeID) {
        return this.http.get(`${environment.COMMON_PUBLIC_API_URL}employees/${employeeID}`);
    }

}