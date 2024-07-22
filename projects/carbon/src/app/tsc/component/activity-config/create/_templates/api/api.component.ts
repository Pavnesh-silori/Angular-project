import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { isEqual } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import { ActivityService } from '@carbon/service/activity.service';

import { StorageService } from '@library/storage-service';
import { MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';

@Component({
    selector: 'app-api',
    templateUrl: './api.component.html',
    styles: []
})
export class ApiComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    currentOrgID: any;

    apiFG: FormGroup;
    enableApiFC: FormControl = new FormControl(true);

    apiKey: any[] = [];

    activity: any;
    activityID: any;
    activityKeyID: any;

    validity: EventEmitter<boolean> = new EventEmitter<boolean>();
    apiKeySearchUtility: MatSelectSearchService = new MatSelectSearchService(['activityApiKey']);

    initialObject: any;
    @Output() isEqual: EventEmitter<boolean> = new EventEmitter();

    hideApiKey: boolean = true;

    constructor(
        storageService: StorageService,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private activityService: ActivityService,
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
    }

    ngOnInit(): void {

        this.activatedRoute.queryParams
            .subscribe((queryParams) => {
                if (queryParams['activityID']) {
                    this.activityID = queryParams['activityID'];
                    this.getActivityByID(this.activityID);
                }
            });
        this.activatedRoute.data.subscribe(routeData =>{
            if (routeData['activityID']) {
                this.activityID = routeData['activityID'];
                this.getActivityByID(this.activityID);
            }
        })
        this.apiFGInit();
        // this.createApiEnabledSubscription();
    }

    valueUpdated(value) {
        this.enableApiFC.patchValue(value);
    }

    createApiEnabledSubscription() {
        this.enableApiFC.valueChanges.subscribe((enable) => {
            this.apiEnabledAC.patchValue(enable);

            if (enable) this.apiFG.enable();
            else this.apiFG.disable();
        });
    }

    apiFGInit() {
        this.apiFG = this.formBuilder.group({
            apiEnabled: [true],
            apiKey: [{ value: uuidv4(), disabled: true }, Validators.required]
        });
    }

    get apiEnabledAC(): AbstractControl {
        return this.apiFG.get('apiEnabled') as AbstractControl;
    }

    get apiKeyAC(): AbstractControl {
        return this.apiFG.get('apiKey') as AbstractControl;
    }

    async getActivityByID(activityID: any) {
        this.activity = await <any>this.activityService.getActivityByID(activityID);
        this.activityKeyID = this.activity['keyID'];
    }

    apiValidity() {
        this.apiFG.valueChanges.subscribe(() => this.validity.emit(!this.apiFG.invalid));
    }

    patchApi(apiEnabled: boolean, api: any) {
        this.apiFG.valueChanges.subscribe(() => {
            this.isEqual.next(isEqual(this.initialObject, this.apiFG.getRawValue()));
        });

        this.enableApiFC.patchValue(apiEnabled);

        if (apiEnabled && api != null) {
            this.apiFG.patchValue({ apiKey: api['apiKey'] });
        }

        this.isEqual.next(true);
        this.initialObject = this.apiFG.getRawValue();
    }

    isValidForm(): boolean {
        if (this.apiFG.invalid) {
            this.apiFG.markAllAsTouched();
            console.log('invalid form -', this.apiFG);
            return false;
        }

        return true;
    }
}
