import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class StorageServiceService {
    constructor() { }
}
StorageServiceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StorageServiceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StorageServiceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StorageServiceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StorageServiceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class StorageServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
StorageServiceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StorageServiceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
StorageServiceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: StorageServiceComponent, selector: "lib-storage-service", ngImport: i0, template: `
    <p>
      storage-service works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StorageServiceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-storage-service',
                    template: `
    <p>
      storage-service works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class StorageServiceModule {
}
StorageServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StorageServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StorageServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StorageServiceModule, declarations: [StorageServiceComponent], exports: [StorageServiceComponent] });
StorageServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StorageServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StorageServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        StorageServiceComponent
                    ],
                    imports: [],
                    exports: [
                        StorageServiceComponent
                    ]
                }]
        }] });

class StorageService {
    constructor() { }
    setStorage(key, value) {
        return localStorage.setItem(key, value);
    }
    getStorage(key) {
        return localStorage.getItem(key);
    }
    deleteStorage(key) {
        localStorage.removeItem(key);
    }
    clearStorage() {
        localStorage.clear();
        sessionStorage.clear();
    }
}
StorageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StorageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StorageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StorageService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StorageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

/*
 * Public API Surface of storage-service
 */

/**
 * Generated bundle index. Do not edit.
 */

export { StorageService, StorageServiceComponent, StorageServiceModule, StorageServiceService };
//# sourceMappingURL=library-storage-service.js.map
