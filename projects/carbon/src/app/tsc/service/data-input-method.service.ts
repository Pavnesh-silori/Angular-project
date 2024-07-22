import { Injectable } from "@angular/core";

import { ToastrService } from "@library/toastr-service";

import { DataInputMethodController } from "@carbon/controller/data-input-method.controller";

@Injectable({
    providedIn: 'root'
})
export class DataInputMethodService {

    constructor(
        private dataInputMethodController: DataInputMethodController,
        private toastrService: ToastrService
    ) { }

    getDataInputMethodByActivityAndType(activityID, dataInputMehthodType): Promise<any[]> {
        return new Promise(resolve => {
            let dataInputMethod: any[];
            this.dataInputMethodController.getDataInputMethodByActivityAndType(activityID, dataInputMehthodType)
                .subscribe((result: any) => {
                    dataInputMethod = result;
                }, error => {
                    console.log('error in getDataInputMethodByActivityAndType -', error);
                    this.toastrService.openToast('Error', 'Error in getting data input method', 'error');
                }).add(() => {
                    resolve(dataInputMethod);
                });
        });
    }

    getAllDataInputMethodList(): Promise<any[]> {
        return new Promise(resolve => {
            let dataInputMethodList: any[];
            this.dataInputMethodController.getAllDataInputMethodList()
                .subscribe((res: any) => {
                    dataInputMethodList = res;
                }, error => {
                    console.log('error in getDataInputMethodByActivityAndType -', error);
                    this.toastrService.openToast('Error', 'Error in getting data input method', 'error');
                }).add(() => {
                    resolve(dataInputMethodList);
                });
        });
    }
}
