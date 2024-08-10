import { Injectable } from "@angular/core";

import { Response } from "../model/response.model";
import { FileController } from "../controller/file.controller";

@Injectable({
    providedIn: 'root'
})

export class FileService {

    constructor(
        private fileController: FileController
    ) { }

    async updateFile(apiUrl: string, orgID, fileID, file): Promise<any> {
        let res = new Response();

        try {
            res = await this.fileController.updateFile(apiUrl, orgID, fileID, file).toPromise();
        } catch (error) {
            console.error('Error in updateFile -', error);
        }

        return res;
    }

    async updateFileNew(apiUrl: string, orgID, fileID, fileFormData): Promise<any> {
        let res = new Response();

        try {
            res = await this.fileController.updateFileNew(apiUrl, orgID, fileID, fileFormData).toPromise();
        } catch (error) {
            console.error('Error in updateFileNew -', error);
        }
    }

    async deleteFile(apiUrl: string, orgID, fileID): Promise<any> {
        let res = new Response();

        try {
            res = await this.fileController.deleteFile(apiUrl, orgID, fileID).toPromise();
        } catch (error) {
            console.error('Error in deleteFile -', error);
        }

        return res;
    }
    
}
