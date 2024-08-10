import { ToastrService as NgxToastrService } from 'ngx-toastr';
import * as i0 from "@angular/core";
export declare class ToastrService {
    private ngxToastrService;
    constructor(ngxToastrService: NgxToastrService);
    openToast(title: any, message: any, notiType: any): import("ngx-toastr").ActiveToast<any>;
    getToastStatus(status: any): {
        title: string;
        color: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastrService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToastrService>;
}
