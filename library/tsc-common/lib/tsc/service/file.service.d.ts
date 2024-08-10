import { FileController } from "../controller/file.controller";
import * as i0 from "@angular/core";
export declare class FileService {
    private fileController;
    constructor(fileController: FileController);
    updateFile(apiUrl: string, orgID: any, fileID: any, file: any): Promise<any>;
    updateFileNew(apiUrl: string, orgID: any, fileID: any, fileFormData: any): Promise<any>;
    deleteFile(apiUrl: string, orgID: any, fileID: any): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FileService>;
}
