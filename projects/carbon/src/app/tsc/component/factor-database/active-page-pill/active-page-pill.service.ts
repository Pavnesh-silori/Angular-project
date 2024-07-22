import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ActivePagePillService {

    private stdEFSubject = new BehaviorSubject<any>(null);
    private cusEmissionFSubject = new BehaviorSubject<any>(null);
    private cusEstimationFSubject = new BehaviorSubject<any>(null);
    private equipmentCapacitySubject = new BehaviorSubject<any>(null);
    private equipmentEmissionSubject = new BehaviorSubject<any>(null);
    private fugitiveReleaseSubject = new BehaviorSubject<any>(null);
    private fugitiveEmissionSubject = new BehaviorSubject<any>(null);

    #ongoing_reports = new BehaviorSubject<any>(null);
    ongoingReports = this.#ongoing_reports.asObservable();
    set ongoingReportBSubject(or: any) {  this.#ongoing_reports.next(or); }

    data$ = this.stdEFSubject.asObservable();
    custEF = this.cusEmissionFSubject.asObservable();
    custEstimationFactor = this.cusEstimationFSubject.asObservable();
    equipmentCapacityData = this.equipmentCapacitySubject.asObservable();
    equipmentEmissionData = this.equipmentEmissionSubject.asObservable();
    fugitiveReleaseData = this.fugitiveReleaseSubject.asObservable();
    fugitiveEmissionData = this.fugitiveEmissionSubject.asObservable();
    
    setData(data: any) {
        this.stdEFSubject.next(data);
    }

    set cef(cef: any) {
        this.cusEmissionFSubject.next(cef);
    }

    set customEstimationFactor(cef: any) {
        this.cusEstimationFSubject.next(cef);
    }

    set equipmentCapacity(ec: any) {
        this.equipmentCapacitySubject.next(ec);
    }

    set equipmentEmission(ec: any) {
        this.equipmentEmissionSubject.next(ec);
    }

    set fugitiveRelease(fr: any) {
        this.fugitiveEmissionSubject.next(fr);
    }

    set fugitiveEmission(fe: any) {
        this.fugitiveEmissionSubject.next(fe);
    }

    clearCustomEmissionFactor() {
        this.cusEmissionFSubject.next(null);
    }

    clearCustomEstimationFactor() {
        this.cusEstimationFSubject.next(null);
    }

    clearData() {
        this.stdEFSubject.next(null);
    }

    clearEquipmentCapacity() {
        this.equipmentCapacitySubject.next(null);
    }

    clearEquipmentEmission() {
        this.equipmentEmissionSubject.next(null);
    }

    clearFugitiveRelease() {
        this.fugitiveEmissionSubject.next(null);
    }

    clearFugitiveEmission() {
        this.fugitiveEmissionSubject.next(null);
    }
}
