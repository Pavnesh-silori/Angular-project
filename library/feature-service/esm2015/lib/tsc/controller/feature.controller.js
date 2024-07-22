import { Injectable, Inject } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class FeatureController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getFeatureByOrgID(orgID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/features`);
        // return this.http.get(`${this.environment.MOCK_SERVER}feature`);
    }
}
FeatureController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
FeatureController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9mZWF0dXJlLXNlcnZpY2Uvc3JjL2xpYi90c2MvY29udHJvbGxlci9mZWF0dXJlLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU9uRCxNQUFNLE9BQU8saUJBQWlCO0lBQzFCLFlBQ1ksSUFBZ0IsRUFDTyxXQUFnQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFDaEQsQ0FBQztJQUVKLGlCQUFpQixDQUFDLEtBQUs7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLGlCQUFpQixLQUFLLFdBQVcsQ0FBQyxDQUFDO1FBRWhHLGtFQUFrRTtJQUN0RSxDQUFDOzsrR0FWUSxpQkFBaUIsNENBR2QsYUFBYTttSEFIaEIsaUJBQWlCLGNBSGQsTUFBTTs0RkFHVCxpQkFBaUI7a0JBSjdCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzswQkFLUSxNQUFNOzJCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueVxuICAgICkge31cblxuICAgIGdldEZlYXR1cmVCeU9yZ0lEKG9yZ0lEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW52aXJvbm1lbnQuT1JHQU5JWkFUSU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9mZWF0dXJlc2ApO1xuXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW52aXJvbm1lbnQuTU9DS19TRVJWRVJ9ZmVhdHVyZWApO1xuICAgIH1cbn1cbiJdfQ==