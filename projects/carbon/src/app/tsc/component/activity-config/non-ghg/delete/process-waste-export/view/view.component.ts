import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';

import { ActivityConfigController } from '@carbon/controller/activity-config.controller';

import { AssetService } from '@carbon/service/asset.service';

//tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonTooltipEnum, COMMON_CONSTANT, FormAction, MATERIAL_CONSTANT } from '@library/tsc-common';
// /tsc-library
@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styles: []
})
export class ViewComponent implements OnInit {
    activityConfig: any;

    COMMON_CONSTANT = COMMON_CONSTANT;
    constructor() { }

    ngOnInit(): void {}
 
}