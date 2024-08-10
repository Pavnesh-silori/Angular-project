import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Inject } from '@angular/core';
import * as i1 from '@angular/common/http';
import { __awaiter } from 'tslib';

class LayoutServiceService {
    constructor() { }
}
LayoutServiceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutServiceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LayoutServiceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutServiceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutServiceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class LayoutServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutServiceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutServiceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LayoutServiceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LayoutServiceComponent, selector: "lib-layout-service", ngImport: i0, template: `
    <p>
      layout-service works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutServiceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-layout-service',
                    template: `
    <p>
      layout-service works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class LayoutServiceModule {
    static forRoot(environment) {
        return {
            ngModule: LayoutServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
LayoutServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LayoutServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutServiceModule, declarations: [LayoutServiceComponent], exports: [LayoutServiceComponent] });
LayoutServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LayoutServiceComponent
                    ],
                    imports: [],
                    exports: [
                        LayoutServiceComponent
                    ]
                }]
        }] });

class Layout {
}

class LayoutController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getLayoutByOrgID(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts`);
    }
}
LayoutController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
LayoutController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class LayoutService {
    constructor(layoutController) {
        this.layoutController = layoutController;
    }
    getLayoutByOrgID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let layoutM;
            try {
                layoutM = yield this.layoutController.getLayoutByOrgID(orgID).toPromise();
                if (layoutM) {
                    return layoutM;
                }
                else {
                    return [new Layout()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Layout()];
            }
        });
    }
}
LayoutService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutService, deps: [{ token: LayoutController }], target: i0.ɵɵFactoryTarget.Injectable });
LayoutService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: LayoutController }]; } });

/*
 * Public API Surface of layout-service
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Layout, LayoutController, LayoutService, LayoutServiceComponent, LayoutServiceModule, LayoutServiceService };
//# sourceMappingURL=library-layout-service.js.map
