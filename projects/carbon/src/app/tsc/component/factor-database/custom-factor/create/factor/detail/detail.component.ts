import { Component, OnInit, ViewChild } from '@angular/core';

import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

// import { Utility } from '@rootNetZero/common/function/net-zero.function';
// import { CreateUtility } from '../../../../../../utility/create.utility';
// import { NgxMatSelectSearchUtility } from '@EnterpriseNetZero/utility/ngx-mat-select-search.utility';

// import { GlobalVariable } from '@rootNetZero/common/global/variable';
// import { GLOBAL_CONSTANT } from '@rootNetZero/constant/global.constant';

import * as moment from 'moment';

import { combineLatest } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { ScopeKeyIDEnum } from '@carbon/enum/scope.enum';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { ScopeController } from '@carbon/controller/scope.controller';
import { ActivityController } from '@carbon/controller/activity.controller';
import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { DATE_CONSTANT, DateService } from '@library/date';
import { SourceComponent } from '../source/source.component';

// import { ScopeService } from '@CarbonNetZero/service/scope.service';
// import { ActivityService } from '@CarbonNetZero/service/activity.service';
// import { AuthService } from '@accountNetzero/common/service/auth.service';

@Component({
    selector: 'factor-detail',
    templateUrl: './detail.component.html',
    styleUrls: [],
    // providers: constants.date_format_providers
})
export class DetailComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    formFields = [];

    factor = [
        {
            view: true,
            width: 'col-sm-12',
            key: 'other',
            title: 'Database',
            titleKey: 'Custom emission factor database',
            value: 'database name',
        },
        {
            view: true,
            width: 'col-sm-12',
            key: 'name',
            label: 'Name',
            control: 'name',
            value: null,
            placeholder: 'Example Boiler 31 custom factor',
            input: 'input',
            type: 'text',
            validators: [
                {
                    validator: 'required',
                    error: 'Factor name is mandatory',
                },
                {
                    validator: 'alreadyExists',
                    error: 'Factor name already exists!',
                }
            ],
        },
        {
            view: true,
            width: 'col-sm-10',
            key: 'activity',
            label: 'Select activity',
            control: 'activityID',
            value: null,
            input: 'select',
            type: 'select',
            multiple: true,
            search: true,
            searchUtil: {
                name: 'activitySearchUtil',
                placeholderLabel: 'Search by activity name',
                noEntriesFoundLabel: 'No matching activity found',
                searchBy: 'name'
            },
            entityList: [],
            validators: [
                {
                    validator: 'required',
                    error: 'Select an activity',
                },
            ],
        },
        {
            view: true,
            width: 'col-sm-2 pb-3 centerAlignVertical',
            key: 'other',
            title: 'Scope',
            value: '--',
        },
        {
            view: true,
            width: 'col-sm-12',
            key: 'calculationApproachID',
            label: 'Select calculation approach',
            control: 'calculationApproachID',
            value: null,
            input: 'select',
            type: 'select',
            multiple: true,
            search: true,
            searchUtil: {
                name: 'calculationApproachSearchUtil',
                placeholderLabel: 'Search by calculation approach name',
                noEntriesFoundLabel: 'No matching calculation approach found',
                searchBy: 'name'
            },
            entityList: [],
            validators: [
            ],
        },
        {
            view: true,
            width: 'col-sm-12',
            key: 'other',
            title: 'activityInfo',
        },
        {
            view: false,
            key: 'gwpDataset',
            label: 'Gwp dataset',
            control: 'gwpDatasetID',
            value: null,
            placeholder: 'Gwp dataset',
            input: 'input',
            type: 'number',
            validators: []
        },
        {
            view: true,
            width: 'col-sm-12',
            key: 'verison',
            label: 'Version',
            control: 'versionName',
            value: null,
            placeholder: 'Version name',
            input: 'input',
            type: 'text',
            validators: [
                {
                    validator: 'required',
                    error: 'Version name is mandatory',
                }
            ],
        },
        {
            view: true,
            width: 'col-sm-6',
            key: 'validFrom',
            id: 'validFrom',
            label: 'Valid from',
            control: 'validFrom',
            value: DATE_CONSTANT.TODAY_YYYY_MM_DD,
            placeholder: 'Valid from',
            min: null,
            max: null,
            input: 'date',
            type: 'date',
            validators: [
                {
                    validator: 'required',
                    error: 'Date is mandatory',
                }
            ],
        },
        {
            view: true,
            width: 'col-sm-6',
            key: 'validTill',
            id: 'validTill',
            label: 'Valid till',
            control: 'validTill',
            value: null,
            placeholder: 'Valid till',
            min: DATE_CONSTANT.TODAY_YYYY_MM_DD,
            max: null,
            input: 'date',
            type: 'date',
            validators: [
                {
                    validator: 'required',
                    error: 'Date is mandatory',
                }
            ],
        },
        {
            view: false,
            key: 'database',
            label: 'Database',
            control: 'databaseID',
            value: null,
            placeholder: 'Database',
            input: 'input',
            type: 'number',
            validators: [
                {
                    validator: 'required',
                    error: 'Database is mandatory',
                }
            ],
        },

    ];

    version = [
        // {
        //     view: true,
        //     width: 'col-sm-12',
        //     key: 'other',
        //     control: 'databaseName',
        //     title: 'Database',
        //     value: 'database name',
        // },
        {
            view: true,
            width: 'col-sm-12',
            key: 'other',
            title: 'Database',
            titleKey: 'Custom emission factor database',
            value: 'database name',
        },
        {
            view: true,
            width: 'col-sm-12',
            key: 'other',
            control: 'name', /* factorName */
            title: 'Factor name',
            value: 'Factor name',
        },
        {
            view: true,
            width: 'col-sm-10',
            key: 'other',
            control: 'activityName',
            title: 'Activity name',
            value: 'Activity name',
        },
        {
            view: true,
            width: 'col-sm-12',
            key: 'other',
            control: 'scopeName',
            title: 'Scope',
            value: 'Not yet selected',
        },
        {
            view: false,
            key: 'gwpDataset',
            label: 'Gwp dataset',
            control: 'gwpDatasetID',
            value: null,
            placeholder: 'Gwp dataset',
            input: 'input',
            type: 'number',
            validators: [
                {
                    validator: 'required',
                    error: '',
                }
            ],
        },
        {
            view: true,
            width: 'col-sm-12',
            key: 'verison',
            label: 'Version',
            control: 'versionName',
            value: null,
            placeholder: 'Version name',
            input: 'input',
            type: 'text',
            validators: [
                {
                    validator: 'required',
                    error: 'Version name is mandatory',
                },
                {
                    validator: 'nameAlreadyExists',
                    error: 'Version name already exists!',
                }
            ],
        },
        {
            view: true,
            width: 'col-sm-6',
            key: 'validFrom',
            id: 'validFrom',
            label: 'Valid from',
            control: 'validFrom',
            value: DATE_CONSTANT.TODAY_YYYY_MM_DD,
            placeholder: 'Valid from',
            min: null,
            max: null,
            input: 'date',
            type: 'date',
            validators: [
                {
                    validator: 'required',
                    error: 'Date is mandatory',
                }
            ],
        },
        {
            view: true,
            width: 'col-sm-6',
            key: 'validTill',
            id: 'validTill',
            label: 'Valid till',
            control: 'validTill',
            value: DATE_CONSTANT.TODAY_YYYY_MM_DD,
            placeholder: 'Valid till',
            min: null,
            max: null,
            input: 'date',
            type: 'date',
            validators: [
                {
                    validator: 'required',
                    error: 'Date is mandatory',
                }
            ],
        },
        {
            view: false,
            key: 'database',
            label: 'Database',
            control: 'databaseID',
            value: null,
            placeholder: 'Database',
            input: 'input',
            type: 'number',
            validators: [
                {
                    validator: 'required',
                    error: 'Database is mandatory',
                }
            ],
        },
        {
            view: false,
            key: 'recordID',
            control: 'recordID',
            value: null,
            validators: [],
        }
    ];

    searchUtility: any = {};
    scope: any[] = [];
    activity: any[] = [];

    currentOrgID: any;

    databaseID: any;
    databaseName: string;
    wordLength = (window.innerWidth > 1300) ? 35 : 25;

    type: string;

    customFactorType: string = 'emission';
    factorDatabaseType: string = 'custom-emission-factor';

    _selectedActivityID: number;

    createUrl: string;
    detailFG: FormGroup;
    sourceFG: FormGroup;

    init: boolean = true;
    @ViewChild('source') source: SourceComponent;
    sourceFile: any;
    isScope3Activity: boolean = false;
    calculationApproachList: any[] = [];
    selectedCalculationApproach: any;
    // selectedActivity: any;

    constructor(
        private router: Router,
        storageService: StorageService,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        public dateService: DateService,
        private toastrService: ToastrService,
        private scopeController: ScopeController,
        private activityController: ActivityController
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
    }

    ngOnInit(): void {
        console.log('detail component create...................');
        combineLatest([this.activatedRoute.params, this.activatedRoute.queryParams])
            .subscribe(([params, qParams]) => {
                this.databaseID = params['cefDBID'];
                this.databaseName = params['cefDB'];
                this.factorDatabaseType = params['factorDatabaseType'];

                if (this.factorDatabaseType == 'custom-estimation-factor') {
                    this.customFactorType = 'estimation';
                }

                /* TODO_PN dynamic create url */
                if (params['factorName']) {
                    this.type = 'version'
                    this.formFields = this.version;
                    this.createUrl = `/carbon-setting/factor-database/${this.factorDatabaseType}/custom/${this.customFactorType}/database/${params['cefDB']}/${params['cefDBID']}/factor/${params['factorName']}/${params['factorID']}/version/create`;
                } else if (params['cefDB']) {
                    this.type = 'factor'
                    this.formFields = this.factor;
                    this.createSearchUtilities();

                    this.createUrl = `/carbon-setting/factor-database/${this.factorDatabaseType}/custom/${this.customFactorType}/database/${params['cefDB']}/${params['cefDBID']}/factor/create`;

                    this.getScopeList();
                    this.getAllActivity();
                }
                this.formFields.find(ff => (ff['key'] == 'other' && ff['title'] == 'Database'))['value'] = decodeURI(decodeURI(params['cefDB']));
                this.formFields.find(ff => (ff['key'] == 'database' && ff['control'] == 'databaseID'))['value'] = Number(decodeURI(decodeURI(params['cefDBID'])));

                if (this.init) this.initFormGroup();

                if (qParams['activityID']) {
                    this._selectedActivityID = parseInt(qParams['activityID']);
                    this.detailFG.get('activityID').patchValue(this._selectedActivityID);
                }

                if (qParams['gwpDatasetID']) {
                    this.gwpDatabaseIDAC.patchValue(Number(qParams.gwpDatasetID));
                }
            })
    }

    createSearchUtilities() {
        this.formFields.forEach(ff => {
            if (ff['input'] == 'select' && ff['search']) {
                let searchUtil = ff['searchUtil'];
                let name = searchUtil['name'];
                this.searchUtility[name] = new MatSelectSearchService([searchUtil['searchBy']]);
            }
        });
    }

    getSearchUtil(util: string) {
        return this.searchUtility[util];
    }

    set scopeName(name) {
        this.formFields.find(ff => (ff['key'] == 'other' && ff['title'] == 'Scope'))['value'] = name;
    }

    setEntityList(key, list: any[]) {
        this.formFields.find(f => f?.key == key)['entityList'] = list;
    }

    initFormGroup() {
        this.init = false;
        this.detailFG = this.formBuilder.group(this.createFormGroup());
        // this.sourceFG = this.source.sourceFG;
        // this.sourceFile = this.source.file;
    }

    createFormGroup() {
        let formGroup = {};
        let formFields = this.formFields.filter((ff) => ff['key'] != 'other');
        formFields.forEach((ff) => {
            formGroup[ff['control']] =
                this.formBuilder.control(ff['value'],
                    Validators.compose(
                        ff['validators']
                            .map((v) => Validators[v['validator']])),
                )
        });
        // this.sourceFG = this.source.sourceFG;
        // this.sourceFile = this.source.file;
        return formGroup;
    }

    get gwpDatabaseIDAC(): AbstractControl {
        return this.detailFG.get('gwpDatasetID') as AbstractControl;
    }

    get viewFormFields() {
        return this.formFields.filter(ff => ff['view']);
    }

    getAllActivity() {
        this.activityController.getAllActivity()
            .subscribe((activityRes: any[]) => {
                if (this.customFactorType == 'estimation') {
                    this.activity = activityRes.filter(activity => activity['scopeKeyID'] == ScopeKeyIDEnum.SCOPE_2_KEY_ID);
                } else {
                    // let filteredActivities = activityRes.filter(activity => activity['scopeKeyID'] !== ScopeKeyIDEnum.SCOPE_3_KEY_ID);
                    let filteredActivities = activityRes;
                    this.activity = filteredActivities.filter(a => a['keyID'] != ActivityKeyIDEnum.REFRIGERATION_AC_AND_FIRE_SUPPRESSION && a['keyID'] != ActivityKeyIDEnum.OTHER_FUGITIVE_EMISSION);
                }

                this.searchUtility['activitySearchUtil'].entityArr = this.activity;
                this.searchUtility['activitySearchUtil'].createSubscription();

                if (this._selectedActivityID) {
                    this.selectionChange('activity', this._selectedActivityID)
                }
            },
                error => {
                    console.log('error in getAllActivity() -', error);
                    this.toastrService.openToast('Error', 'Error while fetching activities', 'error');
                })
    }

    getScopeList() {
        this.scopeController.getScopeList()
            .subscribe((scopeRes: any) => {
                this.scope = scopeRes;
            },
                error => {
                    console.log('error in getScopeList() -', error);
                    this.toastrService.openToast('Error', 'Error while fetching scopes', 'error');
                });
    }

    selectionChange(key, entityID) {
        console.log('selection change -', key, entityID);
        if (key == 'activity') {
            let selectedActivity = this.activity.find(activity => activity['id'] == entityID);
            let selectedActivityID = selectedActivity['id'];
            this.scopeName = this.scope.find(scope => scope['id'] == selectedActivity['scopeID'])['name'];

            if (selectedActivity['scopeKeyID'].toLowerCase() == 'scope3' && selectedActivityID) {
                this.scope3ActivitySelected(selectedActivityID);
            } else {
                this.isScope3Activity = false;
                this.formFields.find(ff => ff['key'] == 'calculationApproachID')['validators'] = [];
            }
            this.router.navigate([this.createUrl,
            {
                outlets:
                {
                    reference: [selectedActivity['keyID']],
                    value: this.customFactorType == 'emission' ?
                        [this.customFactorType, 'factor-value'] :
                        [this.customFactorType, selectedActivity['keyID']]
                }
            }], { queryParams: { activityID: selectedActivityID , calculationApproach: this.selectedCalculationApproach?.['keyID'] } });
        } else if (key == 'calculationApproachID') {
            this.selectedCalculationApproach = this.calculationApproachList.find(ca => ca['id'] == entityID);
            this.router.navigate([], { queryParams: { calculationApproach: this.selectedCalculationApproach?.['keyID'] }, queryParamsHandling: 'merge' });
        }
    }

    scope3ActivitySelected(selectedActivityID) {
        this.isScope3Activity = true;
        this.formFields.find(ff => ff['key'] == 'calculationApproachID')['validators'] =
            [{
                validator: 'required',
                error: 'Select an calculation approach',
            }];
        this.getCalculationApproachList(selectedActivityID);
    }

    getCalculationApproachList(selectedActivityID) {
        this.activityController.getActivityCalculationApproach(selectedActivityID)
            .subscribe((calculationApproachRes: any) => {
                this.calculationApproachList = calculationApproachRes;
                this.setEntityList('calculationApproachID', calculationApproachRes);
                this.searchUtility['calculationApproachSearchUtil'].entityArr = calculationApproachRes;
                this.searchUtility['calculationApproachSearchUtil'].createSubscription();
            },
                error => {
                    console.log('error in getCalculationApproachList() -', error);
                    this.toastrService.openToast('Error', 'Error while fetching calculation approach', 'error');
                });
    }

    patchFactorDetails(detail) {
        this.formFields.forEach(ff => {
            if (ff['key'] == 'other') {
                ff['value'] = detail[ff['control']];
            }
        });
    }

    set min(min) { this.formFields.find(f => f?.key == 'validTill')['min'] = min; }
    set max(max) { this.formFields.find(f => f?.key == 'validFrom')['max'] = max; }

    formatDate(date: Date, control) {
        let formatted = moment(date).format("YYYY-MM-DD");
        this.detailFG.get(control).patchValue(formatted);
        control == 'validFrom' ? this.min = formatted : this.max = formatted;
    }

    patchDetails(detail) {
        this.detailFG.patchValue(detail);
    }

    isValidForm() {
        if (this.detailFG.invalid) {
            this.detailFG.markAllAsTouched();
            console.log('invalid form -', this.detailFG);
            return false;
        }

        return true;
    }

    errorHandling = (control: string, error: string) => {
        return this.detailFG.get(control).hasError(error);
    }
}
