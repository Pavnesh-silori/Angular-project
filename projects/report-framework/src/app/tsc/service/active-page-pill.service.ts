import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ActivePagePillService {

    #ongoing_reports = new BehaviorSubject<any>(null);
    ongoingReports = this.#ongoing_reports.asObservable();
    set setOngoingReportBSubject(or: any) {  this.#ongoing_reports.next(or); }


    private ongoingReportSubject = new BehaviorSubject<any>(null);

    ongoingReport = this.ongoingReportSubject.asObservable();



    setOngoing(report: any) {
        this.ongoingReportSubject.next(report);
    }

    clearOngoing() {
        this.ongoingReportSubject.next(null);
    }
}