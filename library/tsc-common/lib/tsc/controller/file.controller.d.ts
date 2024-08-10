import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class FileController {
    private http;
    constructor(http: HttpClient);
    updateFile(apiUrl: string, orgID: any, fileID: any, file: any): Observable<any>;
    updateFileNew(apiUrl: string, orgID: any, fileID: any, fileFormData: any): Observable<any>;
    deleteFile(apiUrl: string, orgID: any, fileID: any): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FileController>;
}
