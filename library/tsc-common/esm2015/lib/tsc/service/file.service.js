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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL3NlcnZpY2UvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBT25ELE1BQU0sT0FBTyxXQUFXO0lBRXBCLFlBQ1ksY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3RDLENBQUM7SUFFQyxVQUFVLENBQUMsTUFBYyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSTs7WUFDaEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUV6QixJQUFJO2dCQUNBLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZGO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNqRDtZQUVELE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLE1BQWMsRUFBRSxLQUFLLEVBQUUsTUFBTTs7WUFDMUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUV6QixJQUFJO2dCQUNBLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDakY7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2pEO1lBRUQsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO0tBQUE7O3lHQTVCUSxXQUFXOzZHQUFYLFdBQVcsY0FIUixNQUFNOzRGQUdULFdBQVc7a0JBSnZCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSBcIi4uL21vZGVsL3Jlc3BvbnNlLm1vZGVsXCI7XG5pbXBvcnQgeyBGaWxlQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVyL2ZpbGUuY29udHJvbGxlclwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgRmlsZVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZmlsZUNvbnRyb2xsZXI6IEZpbGVDb250cm9sbGVyXG4gICAgKSB7IH1cblxuICAgIGFzeW5jIHVwZGF0ZUZpbGUoYXBpVXJsOiBzdHJpbmcsIG9yZ0lELCBmaWxlSUQsIGZpbGUpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBsZXQgcmVzID0gbmV3IFJlc3BvbnNlKCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IHRoaXMuZmlsZUNvbnRyb2xsZXIudXBkYXRlRmlsZShhcGlVcmwsIG9yZ0lELCBmaWxlSUQsIGZpbGUpLnRvUHJvbWlzZSgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdXBkYXRlRmlsZSAtJywgZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBhc3luYyBkZWxldGVGaWxlKGFwaVVybDogc3RyaW5nLCBvcmdJRCwgZmlsZUlEKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgbGV0IHJlcyA9IG5ldyBSZXNwb25zZSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXMgPSBhd2FpdCB0aGlzLmZpbGVDb250cm9sbGVyLmRlbGV0ZUZpbGUoYXBpVXJsLCBvcmdJRCwgZmlsZUlEKS50b1Byb21pc2UoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGRlbGV0ZUZpbGUgLScsIGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIFxufVxuIl19