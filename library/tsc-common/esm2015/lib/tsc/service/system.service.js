import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../controller/system.controller";
export class SystemService {
    constructor(systemController) {
        this.systemController = systemController;
    }
    getSystemInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            let systemInfo;
            try {
                systemInfo = (yield this.systemController.getSystemInfo().toPromise());
                if (systemInfo) {
                    return systemInfo;
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.error('Error -', error);
                return null;
            }
        });
    }
}
SystemService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SystemService, deps: [{ token: i1.SystemController }], target: i0.ɵɵFactoryTarget.Injectable });
SystemService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SystemService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SystemService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.SystemController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2Mvc2VydmljZS9zeXN0ZW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUTNDLE1BQU0sT0FBTyxhQUFhO0lBRXRCLFlBQ1ksZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDMUMsQ0FBQztJQUVDLGFBQWE7O1lBQ2YsSUFBSSxVQUFlLENBQUM7WUFFcEIsSUFBSTtnQkFDQSxVQUFVLElBQVEsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUEsQ0FBQztnQkFFMUUsSUFBSSxVQUFVLEVBQUU7b0JBQ1osT0FBTyxVQUFVLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNILE9BQU8sSUFBSSxDQUFDO2lCQUNmO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUM7S0FBQTs7MkdBckJRLGFBQWE7K0dBQWIsYUFBYSxjQUhWLE1BQU07NEZBR1QsYUFBYTtrQkFKekIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgU3lzdGVtQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVyL3N5c3RlbS5jb250cm9sbGVyXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTeXN0ZW1TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN5c3RlbUNvbnRyb2xsZXI6IFN5c3RlbUNvbnRyb2xsZXJcbiAgICApIHsgfVxuXG4gICAgYXN5bmMgZ2V0U3lzdGVtSW5mbygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBsZXQgc3lzdGVtSW5mbzogYW55O1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzeXN0ZW1JbmZvID0gPGFueT5hd2FpdCB0aGlzLnN5c3RlbUNvbnRyb2xsZXIuZ2V0U3lzdGVtSW5mbygpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAoc3lzdGVtSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzeXN0ZW1JbmZvO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==