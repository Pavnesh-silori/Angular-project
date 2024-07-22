import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

import { ProductAndServiceM, ProductPageDataM } from "@netzero/model/product-service.model";

@Injectable({
    providedIn: 'root'
})

export class ProductAndServiceController {

    constructor(
        private http: HttpClient
    ) { }

    createProduct(orgID, formData) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${orgID}/product`, formData)
    }

    createService(orgID, formData) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${orgID}/service`, formData)
    }

    getProductByID(orgID, id): Observable<ProductAndServiceM> {
        return this.http.get<ProductAndServiceM>(`${environment.COMMON_API_URL}organizations/${orgID}/product/${id}`);
    }

    getProductEMFMetadataByID(orgID, id): Observable<any> {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/product/${id}/emf-source-metadata`);
    }

    getServiceEMFMetadataByID(orgID, id): Observable<any> {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/service/${id}/emf-source-metadata`);
    }

    createProductEMFMetadata(orgID, productID, formData, type) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/${type}/${productID}/emf-source-metadata`, formData);
    }

    updateProductEMFMetadata(orgID, productID, formData, ID) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/product/${productID}/emf-source-metadata/${ID}`, formData);
    }

    getServiceByID(orgID, id): Observable<ProductAndServiceM> {
        return this.http.get<ProductAndServiceM>(`${environment.COMMON_API_URL}organizations/${orgID}/service/${id}`);
    }

    updateProduct(orgID, formData, id) {
        return this.http.patch(`${environment.COMMON_API_URL}organizations/${orgID}/product/${id}`, formData)
    }

    updateService(orgID, formData, id) {
        return this.http.patch(`${environment.COMMON_API_URL}organizations/${orgID}/service/${id}`, formData)
    }

    getProductByPage(pageNo: number, pazeSize: number, sortBy: string, orderBy, orgID: any, filterArr: Array<string>, searchValue: string, searchFlag: boolean): Observable<ProductPageDataM[]> {
        let params = new HttpParams();
        // params = params.append('pageNo', pageNo);
        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pazeSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        if (searchFlag) {
            params = params.append('search', searchValue);
        }
        filterArr.forEach(filter => params = params.append('filter', filter));

        return this.http.get<ProductPageDataM[]>(`${environment.COMMON_API_URL}organizations/${orgID}/product/page`, { params: params })
    }

    getServiceByPage(pageNo: number, pazeSize: number, sortBy: string, orderBy, orgID: any, searchValue: string, filterArr: any): Observable<ProductPageDataM[]> {
        let params = new HttpParams();
        // params = params.append('pageNo', pageNo);
        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pazeSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        if (searchValue) {
            params = params.append('search', searchValue);
        }

        filterArr.forEach(filter => params = params.append('filter', filter));

        return this.http.get<ProductPageDataM[]>(`${environment.COMMON_API_URL}organizations/${orgID}/service/page`, { params: params })
    }

    bulkUploadProduct(orgID, file) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${orgID}/product/bulk-upload`, file);
    }

    bulkUploadService(orgID, file) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${orgID}/service/bulk-upload`, file);
    }

    getProductList(orgID: number, optionalParams?: any): Observable<any> {
        let params = new HttpParams();
        optionalParams?.forEach(param => {
            if (param && param.length > 0) {
                params = params.append('filter', param);
            }
        });

        return this.http.get(`${environment.COMMON_API_URL}organizations/${orgID}/product`, { params: params });
    }

    getServiceList(orgID: number): Observable<any> {
        return this.http.get(`${environment.COMMON_API_URL}organizations/${orgID}/service`);
    }

    // deleteProduct(orgID, id) {
    //     return this.http.delete(`${environment.COMMON_API_URL}organizations/${orgID}/product/${id}`);
    // }

    deleteService(orgID, id) {
        return this.http.delete(`${environment.COMMON_API_URL}organizations/${orgID}/service/${id}`);
    }

    getCnAggerated(lookUpCode, lookUpValue) {
        let params = new HttpParams();
        params = params.append('lookUpCode', lookUpCode);
        params = params.append('lookUpValue', lookUpValue);
        return this.http.get(`${environment.COMMON_API_URL}lookup`, { params: params });
    }

    getProductCategoryList() {
        return this.http.get(`${environment.COMMON_API_URL}product-category`);
    }

    getProductTypeList() {
        return this.http.get(`${environment.COMMON_API_URL}product-type`);
    }

    updateProductStatus(orgID, recordIDs: Array<number>, status: string, type: string) {
        return this.http.patch(`${environment.COMMON_API_URL}organizations/${orgID}/${type}/bulk-status`, { status: status, recordID: recordIDs });
    }

    deleteRecord(orgID, source: string, formData: any) {
        return this.http.delete(`${environment.COMMON_API_URL}organizations/${orgID}/${source}/bulk-delete`, { body: formData });
    }

    getEmissionRecordsBySourceID(orgID, source, sourceID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/${source}/${sourceID}/emission-record`);
    }

    getFilteredEmissionRecords(orgID, source, filter: any) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/${source}/emission-record`, { params: filter });
    }

    getEMFSourceMetadata(orgID, source, sourceID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/${source}/${sourceID}/emf-source-metadata`);
    }

    updateEMFMetadata(orgID, source, sourceID, formData, ID) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/${source}/${sourceID}/emf-source-metadata/${ID}`, formData);
    }

    createEMFMetadata(orgID, source, sourceID, formData) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/${source}/${sourceID}/emf-source-metadata`, formData);
    }

    bulkSaveRecords(orgID, source, formData) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${orgID}/${source}/bulk-create`, formData);
    }

    bulkValidateRecords(orgID, source, formData) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${orgID}/${source}/bulk-validate`, formData);
    }

    getCustomEmissionFactor(orgID, source, sourceID, activityKeyID, calculationApproachKeyID): any {
        let params = new HttpParams();
        params = params.append('activityKeyID', activityKeyID);
        params = params.append('calculationApproachKeyID', calculationApproachKeyID);
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/${source}/${sourceID}/custom-emission-factor`, { params: params });

    }
}
