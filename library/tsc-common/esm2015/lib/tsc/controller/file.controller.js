import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class FileController {
    constructor(http) {
        this.http = http;
    }
    updateFile(apiUrl, orgID, fileID, file) {
        return this.http.patch(`${apiUrl}files/${fileID}`, file);
    }
    deleteFile(apiUrl, orgID, fileID) {
        return this.http.delete(`${apiUrl}organizations/${orgID}/files/${fileID}`);
    }
}
FileController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileController, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
FileController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvZmlsZS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVEzQyxNQUFNLE9BQU8sY0FBYztJQUN2QixZQUNZLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFDeEIsQ0FBQztJQUVMLFVBQVUsQ0FBQyxNQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJO1FBQzFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQU0sR0FBRyxNQUFNLFNBQVMsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU07UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBTSxHQUFHLE1BQU0saUJBQWlCLEtBQUssVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7OzRHQVhRLGNBQWM7Z0hBQWQsY0FBYyxjQUhYLE1BQU07NEZBR1QsY0FBYztrQkFKMUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEh0dHBDbGllbnRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIEZpbGVDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XG4gICAgKSB7IH1cblxuICAgIHVwZGF0ZUZpbGUoYXBpVXJsOiBzdHJpbmcsIG9yZ0lELCBmaWxlSUQsIGZpbGUpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoPGFueT4oYCR7YXBpVXJsfWZpbGVzLyR7ZmlsZUlEfWAsIGZpbGUpO1xuICAgIH1cblxuICAgIGRlbGV0ZUZpbGUoYXBpVXJsOiBzdHJpbmcsIG9yZ0lELCBmaWxlSUQpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxhbnk+KGAke2FwaVVybH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2ZpbGVzLyR7ZmlsZUlEfWApO1xuICAgIH1cblxufVxuIl19