import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import { Response } from "../model/response.model";
import * as i0 from "@angular/core";
import * as i1 from "../controller/file.controller";
export class FileService {
    constructor(fileController) {
        this.fileController = fileController;
    }
    updateFile(apiUrl, orgID, fileID, file) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = new Response();
            try {
                res = yield this.fileController.updateFile(apiUrl, orgID, fileID, file).toPromise();
            }
            catch (error) {
                console.error('Error in updateFile -', error);
            }
            return res;
        });
    }
    updateFileNew(apiUrl, orgID, fileID, fileFormData) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = new Response();
            try {
                res = yield this.fileController.updateFileNew(apiUrl, orgID, fileID, fileFormData).toPromise();
            }
            catch (error) {
                console.error('Error in updateFileNew -', error);
            }
        });
    }
    deleteFile(apiUrl, orgID, fileID) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = new Response();
            try {
                res = yield this.fileController.deleteFile(apiUrl, orgID, fileID).toPromise();
            }
            catch (error) {
                console.error('Error in deleteFile -', error);
            }
            return res;
        });
    }
}
FileService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileService, deps: [{ token: i1.FileController }], target: i0.ɵɵFactoryTarget.Injectable });
FileService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.FileController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL3NlcnZpY2UvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBT25ELE1BQU0sT0FBTyxXQUFXO0lBRXBCLFlBQ1ksY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3RDLENBQUM7SUFFQyxVQUFVLENBQUMsTUFBYyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSTs7WUFDaEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUV6QixJQUFJO2dCQUNBLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZGO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNqRDtZQUVELE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLE1BQWMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVk7O1lBQzNELElBQUksR0FBRyxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7WUFFekIsSUFBSTtnQkFDQSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNsRztZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDcEQ7UUFDTCxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsTUFBYyxFQUFFLEtBQUssRUFBRSxNQUFNOztZQUMxQyxJQUFJLEdBQUcsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBRXpCLElBQUk7Z0JBQ0EsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNqRjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDakQ7WUFFRCxPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7S0FBQTs7eUdBdENRLFdBQVc7NkdBQVgsV0FBVyxjQUhSLE1BQU07NEZBR1QsV0FBVztrQkFKdkIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tIFwiLi4vbW9kZWwvcmVzcG9uc2UubW9kZWxcIjtcbmltcG9ydCB7IEZpbGVDb250cm9sbGVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvZmlsZS5jb250cm9sbGVyXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBGaWxlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBmaWxlQ29udHJvbGxlcjogRmlsZUNvbnRyb2xsZXJcbiAgICApIHsgfVxuXG4gICAgYXN5bmMgdXBkYXRlRmlsZShhcGlVcmw6IHN0cmluZywgb3JnSUQsIGZpbGVJRCwgZmlsZSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGxldCByZXMgPSBuZXcgUmVzcG9uc2UoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzID0gYXdhaXQgdGhpcy5maWxlQ29udHJvbGxlci51cGRhdGVGaWxlKGFwaVVybCwgb3JnSUQsIGZpbGVJRCwgZmlsZSkudG9Qcm9taXNlKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB1cGRhdGVGaWxlIC0nLCBlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZUZpbGVOZXcoYXBpVXJsOiBzdHJpbmcsIG9yZ0lELCBmaWxlSUQsIGZpbGVGb3JtRGF0YSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGxldCByZXMgPSBuZXcgUmVzcG9uc2UoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzID0gYXdhaXQgdGhpcy5maWxlQ29udHJvbGxlci51cGRhdGVGaWxlTmV3KGFwaVVybCwgb3JnSUQsIGZpbGVJRCwgZmlsZUZvcm1EYXRhKS50b1Byb21pc2UoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHVwZGF0ZUZpbGVOZXcgLScsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGRlbGV0ZUZpbGUoYXBpVXJsOiBzdHJpbmcsIG9yZ0lELCBmaWxlSUQpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBsZXQgcmVzID0gbmV3IFJlc3BvbnNlKCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IHRoaXMuZmlsZUNvbnRyb2xsZXIuZGVsZXRlRmlsZShhcGlVcmwsIG9yZ0lELCBmaWxlSUQpLnRvUHJvbWlzZSgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZGVsZXRlRmlsZSAtJywgZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgXG59XG4iXX0=