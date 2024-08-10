import { Injectable } from '@angular/core';

import { cloneDeep } from 'lodash-es';
import { ToastrService as NgxToastrService } from 'ngx-toastr';

import { ToastrTitle, ToastrColor } from '../enum/toastr.enum';

@Injectable({
    providedIn: 'root'
})

export class ToastrService {

    constructor(
        private ngxToastrService: NgxToastrService
    ) { }

    openToast(title, message, notiType) {
        // Clone current config so it doesn't change when ngModel updates
        const opt = cloneDeep(this.ngxToastrService.toastrConfig);

        const inserted = this.ngxToastrService.show(
            message,
            title,
            opt,
            this.ngxToastrService.toastrConfig.iconClasses[notiType],
        );
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

    success = (message: String) => {
        this.openToast(ToastrTitle.SUCCESS, message, ToastrColor.SUCCESS);
    }

    error = (message: String) => {
        this.openToast(ToastrTitle.ERROR, message, ToastrColor.ERROR);
    }

    warn = (message: String) => {
        this.openToast(ToastrTitle.WARNING, message, ToastrColor.WARNING);
    }

    info = (message: String) => {
        this.openToast(ToastrTitle.INFO, message, ToastrColor.INFO);
    }
}
