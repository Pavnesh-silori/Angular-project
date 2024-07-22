import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SurveyDetailsM, SurveyDetails } from '@carbon/model/employee-survey.model';
import { EmployeeSurveyController } from '@carbon/controller/employee-survey.controller';
//tsc-library
import {
    COMMON_CONSTANT,
} from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// /tsc-library/
@Component({
    selector: 'app-survey-details',
    templateUrl: './survey-details.component.html',
    styleUrls: ['./survey-details.component.scss']
})
export class SurveyDetailsComponent implements OnInit {
    
    @Input() surveyID: any;
    surveyDetails: SurveyDetailsM = new SurveyDetails();

    COMMON_CONSTANT = COMMON_CONSTANT;

    currentOrgID: any;

    @Output() status = new EventEmitter<string>();

    constructor(
        private storageService: StorageService,
		private employeeSurveyController: EmployeeSurveyController,
    ) { }

    statusList = [
        {
            name: 'In progress',
            keyID: 'INPROGRESS'
        },
        {
            name: 'Completed',
            keyID: 'COMPLETED'
        }
    ];

    getStatus(keyID: string): string {
        const status = this.statusList.find(status => status.keyID === keyID);
        return status ? status.name : keyID;
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
    }

    ngAfterViewInit() {
        this.employeeSurveyController.getSurveyByID(this.currentOrgID, this.surveyID).subscribe((response: SurveyDetailsM) => {
            this.surveyDetails = response;
            this.status.emit(response.status);
        });
    }
}
