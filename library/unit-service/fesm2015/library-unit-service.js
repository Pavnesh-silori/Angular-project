import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Inject } from '@angular/core';
import { __awaiter } from 'tslib';
import * as i1 from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

class UnitServiceService {
    constructor() { }
}
UnitServiceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitServiceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
UnitServiceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitServiceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitServiceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class UnitServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
UnitServiceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitServiceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UnitServiceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: UnitServiceComponent, selector: "lib-unit-service", ngImport: i0, template: `
    <p>
      unit-service works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitServiceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-unit-service',
                    template: `
    <p>
      unit-service works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class UnitServiceModule {
    static forRoot(environment) {
        return {
            ngModule: UnitServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
UnitServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UnitServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitServiceModule, declarations: [UnitServiceComponent], exports: [UnitServiceComponent] });
UnitServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UnitServiceComponent
                    ],
                    imports: [],
                    exports: [
                        UnitServiceComponent
                    ]
                }]
        }] });

var UnitTypeKeyID;
(function (UnitTypeKeyID) {
    UnitTypeKeyID["LENGTH"] = "LENGTH";
    UnitTypeKeyID["VOLUME"] = "VOLUME";
    UnitTypeKeyID["ENERGY"] = "ENERGY";
    UnitTypeKeyID["EQUIVALENT_EMISSION"] = "EQUIVALENT_EMISSION";
    UnitTypeKeyID["MASS"] = "MASS";
})(UnitTypeKeyID || (UnitTypeKeyID = {}));
var UomCode;
(function (UomCode) {
    UomCode["TCO2E"] = "tCO2e";
})(UomCode || (UomCode = {}));

class OldUnit {
    constructor() {
        this.unitID = null;
        this.uomName = null;
        this.uomCode = null;
        this.unitType = null;
        this.unitSubType = null;
    }
}
class Unit {
    constructor() {
        this.id = null;
        this.name = null;
        this.uomCode = null;
        this.type = null;
        this.subType = null;
    }
}

class UnitController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getUnit(filters) {
        let params = new HttpParams();
        filters.forEach(filter => {
            params = params.append('filter', filter);
        });
        return this.http.get(`${this.environment.COMMON_API_URL}units/filter`, { params: params });
    }
    getUnitUsingPublicUrl(filters) {
        let params = new HttpParams();
        filters.forEach(filter => {
            params = params.append('filter', filter);
        });
        return this.http.get(`${this.environment.COMMON_PUBLIC_API_URL}units/filter`, { params: params });
    }
}
UnitController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
UnitController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class UnitService {
    constructor(unitController) {
        this.unitController = unitController;
    }
    getUnit(apiFilter) {
        return __awaiter(this, void 0, void 0, function* () {
            let oldUnitM;
            let unitM;
            try {
                oldUnitM = yield this.unitController.getUnit(apiFilter).toPromise();
                if (oldUnitM) {
                    unitM = oldUnitM.map(this.transformUnit);
                    unitM.unshift({
                        id: null,
                        name: 'Select none',
                        uomCode: null,
                        type: null,
                        typeName: null,
                        subType: null
                    });
                    return unitM;
                }
                else {
                    return [new Unit()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Unit()];
            }
        });
    }
    getUnitUsingPublicUrl(apiFilter) {
        return __awaiter(this, void 0, void 0, function* () {
            let oldUnitM;
            let unitM;
            try {
                oldUnitM = yield this.unitController.getUnitUsingPublicUrl(apiFilter).toPromise();
                if (oldUnitM) {
                    unitM = oldUnitM.map(this.transformUnit);
                    unitM.unshift({
                        id: null,
                        name: 'Select none',
                        uomCode: null,
                        type: null,
                        typeName: null,
                        subType: null
                    });
                    return unitM;
                }
                else {
                    return [new Unit()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Unit()];
            }
        });
    }
    transformUnit(oldUnit) {
        return {
            id: oldUnit.unitID,
            name: oldUnit.uomName,
            uomCode: oldUnit.uomCode,
            type: oldUnit.unitType,
            typeName: oldUnit.unitTypeName,
            subType: oldUnit.unitSubType,
        };
    }
    filterUnit(unit, unitTypeFilter) {
        let unitM;
        unitM = unit.filter((unit) => unitTypeFilter.includes(unit.type));
        unitM.unshift({
            id: null,
            name: 'Select none',
            uomCode: null,
            type: null,
            typeName: null,
            subType: null
        });
        return unitM;
    }
}
UnitService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitService, deps: [{ token: UnitController }], target: i0.ɵɵFactoryTarget.Injectable });
UnitService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: UnitController }]; } });

/*
 * Public API Surface of unit-service
 */

/**
 * Generated bundle index. Do not edit.
 */

export { OldUnit, Unit, UnitService, UnitServiceComponent, UnitServiceModule, UnitServiceService, UnitTypeKeyID, UomCode };
//# sourceMappingURL=library-unit-service.js.map
