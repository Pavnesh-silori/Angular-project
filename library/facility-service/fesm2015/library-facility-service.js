import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Inject } from '@angular/core';
import * as i1 from '@angular/common/http';
import { __awaiter } from 'tslib';

class FacilityServiceService {
    constructor() { }
}
FacilityServiceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityServiceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FacilityServiceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityServiceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityServiceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class FacilityServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
FacilityServiceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityServiceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FacilityServiceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FacilityServiceComponent, selector: "lib-facility-service", ngImport: i0, template: `
    <p>
      facility-service works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityServiceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-facility-service',
                    template: `
    <p>
      facility-service works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class FacilityServiceModule {
    static forRoot(environment) {
        return {
            ngModule: FacilityServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
FacilityServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FacilityServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityServiceModule, declarations: [FacilityServiceComponent], exports: [FacilityServiceComponent] });
FacilityServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FacilityServiceComponent
                    ],
                    imports: [],
                    exports: [
                        FacilityServiceComponent
                    ]
                }]
        }] });

class Facility {
}

class FacilityController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getFacilityByID(rootOrgID, facilityID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${rootOrgID}/facility/${facilityID}`);
    }
}
FacilityController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
FacilityController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class FacilityService {
    constructor(facilityController) {
        this.facilityController = facilityController;
    }
    getFacilityByID(rootOrgID, facilityID) {
        return __awaiter(this, void 0, void 0, function* () {
            let facilityM;
            let facility = new Facility();
            try {
                facilityM = yield this.facilityController.getFacilityByID(rootOrgID, facilityID).toPromise();
                if (facilityM) {
                    return facilityM;
                }
                else {
                    return facility;
                }
            }
            catch (error) {
                console.error('Error -', error);
                return facility;
            }
        });
    }
}
FacilityService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityService, deps: [{ token: FacilityController }], target: i0.ɵɵFactoryTarget.Injectable });
FacilityService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: FacilityController }]; } });

/*
 * Public API Surface of facility-service
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Facility, FacilityController, FacilityService, FacilityServiceComponent, FacilityServiceModule, FacilityServiceService };
//# sourceMappingURL=library-facility-service.js.map
