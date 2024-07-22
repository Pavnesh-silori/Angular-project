import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../controller/time-zone.controller";
export class TimeZoneService {
    constructor(timeZoneController) {
        this.timeZoneController = timeZoneController;
    }
    getTimeZone() {
        return __awaiter(this, void 0, void 0, function* () {
            let timeZoneM;
            try {
                timeZoneM = yield this.timeZoneController.getTimeZone().toPromise();
                return timeZoneM;
            }
            catch (error) {
                console.error('Error -', error);
            }
        });
    }
}
TimeZoneService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimeZoneService, deps: [{ token: i1.TimeZoneController }], target: i0.ɵɵFactoryTarget.Injectable });
TimeZoneService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimeZoneService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimeZoneService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.TimeZoneController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS16b25lLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2Mvc2VydmljZS90aW1lLXpvbmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUTNDLE1BQU0sT0FBTyxlQUFlO0lBRXhCLFlBQ1ksa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFDN0MsQ0FBQztJQUVBLFdBQVc7O1lBQ1osSUFBSSxTQUFxQixDQUFBO1lBQ3pCLElBQUk7Z0JBQ0EsU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNwRSxPQUFPLFNBQVMsQ0FBQzthQUNwQjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ25DO1FBQ0wsQ0FBQztLQUFBOzs2R0FkUSxlQUFlO2lIQUFmLGVBQWUsY0FIWixNQUFNOzRGQUdULGVBQWU7a0JBSjNCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1RpbWVab25lQ29udHJvbGxlcn0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvdGltZS16b25lLmNvbnRyb2xsZXJcIjtcbmltcG9ydCB7VGltZVpvbmVNLCBUaW1lWm9uZX0gZnJvbSAnLi4vbW9kZWwvdGltZS16b25lLm1vZGVsJ1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgVGltZVpvbmVTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHRpbWVab25lQ29udHJvbGxlcjpUaW1lWm9uZUNvbnRyb2xsZXJcbiAgICApIHsgfVxuXG4gICBhc3luYyBnZXRUaW1lWm9uZSgpOlByb21pc2U8VGltZVpvbmVNW10+e1xuICAgICAgICBsZXQgdGltZVpvbmVNOlRpbWVab25lTVtdXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aW1lWm9uZU0gPSBhd2FpdCB0aGlzLnRpbWVab25lQ29udHJvbGxlci5nZXRUaW1lWm9uZSgpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRpbWVab25lTTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICBcbn0iXX0=