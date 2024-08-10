import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StorageService } from '@library/storage-service';

import { SubsidiaryService } from '@Admin/service/subsidiary.service';
import { Subsidiary, SubsidiaryM } from '@Admin/model/subsidiary.model';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styles: []
})
export class ViewComponent implements OnInit {
    rootOrgID: any;
    subsidiaryID: any;

    subsidiaryM = new Subsidiary();

    constructor(
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private SubsidiaryService: SubsidiaryService,
    ) { }

    ngOnInit(): void {

        this.rootOrgID = this.storageService.getStorage('rootOrgID');

        this.activatedRoute.params.subscribe((param) => {
            this.subsidiaryID = param['subsidiaryID']
        });

        this.getSubsidiaryByID();

    }

    async getSubsidiaryByID() {
        this.subsidiaryM = <SubsidiaryM>await this.SubsidiaryService.getSubsidiaryByID(this.rootOrgID, this.subsidiaryID);
    }

}