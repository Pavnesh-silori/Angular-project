import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import * as i1 from 'ngx-toastr';

class ToastrServiceService {
    constructor() { }
}
ToastrServiceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ToastrServiceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ToastrServiceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ToastrServiceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ToastrServiceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ToastrServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
ToastrServiceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ToastrServiceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ToastrServiceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ToastrServiceComponent, selector: "lib-toastr-service", ngImport: i0, template: `
    <p>
      toastr-service works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ToastrServiceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-toastr-service',
                    template: `
    <p>
      toastr-service works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class ToastrServiceModule {
}
ToastrServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ToastrServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ToastrServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ToastrServiceModule, declarations: [ToastrServiceComponent], exports: [ToastrServiceComponent] });
ToastrServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ToastrServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ToastrServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ToastrServiceComponent
                    ],
                    imports: [],
                    exports: [
                        ToastrServiceComponent
                    ]
                }]
        }] });

var ToastrTitle;
(function (ToastrTitle) {
    ToastrTitle["SUCCESS"] = "Success";
    ToastrTitle["WARNING"] = "Warning";
    ToastrTitle["ERROR"] = "Error";
    ToastrTitle["INFO"] = "Info";
})(ToastrTitle || (ToastrTitle = {}));
var ToastrColor;
(function (ToastrColor) {
    ToastrColor["SUCCESS"] = "success";
    ToastrColor["WARNING"] = "warning";
    ToastrColor["ERROR"] = "error";
    ToastrColor["INFO"] = "info";
})(ToastrColor || (ToastrColor = {}));

class ToastrService {
    constructor(ngxToastrService) {
        this.ngxToastrService = ngxToastrService;
    }
    openToast(title, message, notiType) {
        // Clone current config so it doesn't change when ngModel updates
        const opt = cloneDeep(this.ngxToastrService.toastrConfig);
        const inserted = this.ngxToastrService.show(message, title, opt, this.ngxToastrService.toastrConfig.iconClasses[notiType]);
        return inserted;
    }
    getToastStatus(status) {
        let toast = {
            title: '',
            color: '',
        };
        switch (status) {
            case "error":
                toast.title = ToastrTitle.ERROR;
                toast.color = ToastrColor.ERROR;
                break;
            case 'warning':
                toast.title = ToastrTitle.WARNING;
                toast.color = ToastrColor.WARNING;
                break;
            case 'info':
                toast.title = ToastrTitle.INFO;
                toast.color = ToastrColor.INFO;
                break;
            case 'success':
                toast.title = ToastrTitle.SUCCESS;
                toast.color = ToastrColor.SUCCESS;
                break;
            default:
                toast.title = ToastrTitle.ERROR;
                toast.color = ToastrColor.ERROR;
        }
        return toast;
    }
}
ToastrService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ToastrService, deps: [{ token: i1.ToastrService }], target: i0.ɵɵFactoryTarget.Injectable });
ToastrService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ToastrService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ToastrService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ToastrService }]; } });

/*
 * Public API Surface of toastr-service
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ToastrColor, ToastrService, ToastrServiceComponent, ToastrServiceModule, ToastrServiceService, ToastrTitle };
//# sourceMappingURL=library-toastr-service.js.map
