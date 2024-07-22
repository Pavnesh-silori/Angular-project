import {
    OnInit,
    Component,
} from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

import { BoundaryQuestionController } from '@carbon/controller/boundary-question.controller'; 

import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { InvalidForm, TABLE_CONSTANT } from '@library/tsc-common';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styles: []
})

export class ActivityComponent implements OnInit {
    TABLE_CONSTANT = TABLE_CONSTANT;

    currentOrgID: any;

    dataSource;
    displayedColumns: string[] = ['activityName', 'scopeName', 'activityEnable'];

    constructor(
        private boundaryQuestionController: BoundaryQuestionController,
        private storageService: StorageService,
        private toasterService: ToastrService,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.getAllActivityFlagList();
    }

    getAllActivityFlagList() {
        this.boundaryQuestionController.getAllActivityFlagList(this.currentOrgID).subscribe((allFormRes: any[]) => {
            let formOrganized: any[] = [];

            formOrganized = formOrganized.concat(
                allFormRes.filter((form) => { return form['scopeName'] == 'Scope 1'; }));
            formOrganized = formOrganized.concat(
                allFormRes.filter((form) => { return form['scopeName'] == 'Scope 2'; }));
            formOrganized = formOrganized.concat(
                allFormRes.filter((form) => { return form['scopeName'] == 'Scope 3'; }));
            this.dataSource = new MatTableDataSource(formOrganized);
        },
            error => {
                console.log('error in getAllActivityFlagList() -', error);
                this.toasterService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            });
    }
}
