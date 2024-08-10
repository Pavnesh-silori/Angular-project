import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ParameterEntity, EntityType, EntityTypeM } from '../../../model/entity.model';
import { OrgRecentData, OrgRecentDataM, RecentDataRequestWithoutParam } from '../../../model/recent-data.model';

import { EntityService } from '../../../service/entity.service';
import { RecentDataService } from '../../../service/recent-data.service';
import { TrendService } from '../../../service/trend.service';

// tsc-library
import { COMMON_CONSTANT, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance, SearchBarTwoComponent } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { DateService } from '@library/date';
// /tsc-library/

@Component({
    selector: 'lib-entity',
    templateUrl: './entity.component.html',
    styleUrls: ['./entity.component.scss']
})
export class EntityDashboardComponent implements OnInit {

    commonConstant = COMMON_CONSTANT;
    materialFormFieldAppearance = MaterialFormFieldAppearance;

    FormErrorEnum = FormErrorEnum;

    orgID: any;
    layoutID: any;
    timezone: any;
    facilityName: string;
    isAccordionOpen: boolean = true;

    //loader variable declaration
    entityTypeLoader: boolean = true;
    entityDeviceLoader: boolean = false;
    realTimeDeviceDataLoader: boolean = false;

    entityTypeM = [new EntityType()];
    entityDeviceM = new ParameterEntity();
    filteredEntityDeviceM: any[] = [];
    orgRecentDataM = [new OrgRecentData()];

    entityTypeFC: FormControl = new FormControl('', Validators.required);
    entityFC: FormControl = new FormControl('', Validators.required);

    entityTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['type']);

    @ViewChild('searchBar') searchBar: SearchBarTwoComponent;
    @ViewChild('scrollContainer') scrollContainer: ElementRef;

    constructor(
        private storageService: StorageService,
        private entityService: EntityService,
        private recentDataService: RecentDataService,
        public dateService: DateService,
        private trendService: TrendService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.layoutID = this.storageService.getStorage('layoutID');
        this.timezone = this.storageService.getStorage('timezone');

        this.getEntityTypeByLayoutID();
    }

    async getEntityTypeByLayoutID() {
        try {
            this.entityTypeM = <EntityTypeM[]>await this.entityService.getEntityTypeByLayoutID(this.orgID, 'YES');

            this.entityTypeSearchUtil.entityArr = this.entityTypeM;
            this.entityTypeSearchUtil.createSubscription();

            if (this.entityTypeM && this.entityTypeM.length > 0) {
                const defaultEntityType = this.entityTypeM[0].type;

                if (defaultEntityType) {
                    this.entityTypeFC.patchValue(defaultEntityType);
                    this.getEntitiesWithDevicesByLayoutID(this.entityTypeFC.value);
                }
            }
        } catch (error) {
            console.error("Error in getEntityTypeByLayoutID()", error);
        } finally {
            this.entityTypeLoader = false;
        }
    }

    entityTypeChange(selectedType) {
        this.entityFC.setValue('');
        this.entityTypeFC.patchValue(selectedType);

        this.orgRecentDataM = [new OrgRecentData()];
        this.getEntitiesWithDevicesByLayoutID(selectedType);
    }

    async getEntitiesWithDevicesByLayoutID(entityType) {
        try {
            this.entityDeviceLoader = true;

            let requestBody = {
                'entityType': [entityType]
            };

            this.entityDeviceM = await this.entityService.getEntitiesWithDevicesByLayoutID(this.orgID, this.layoutID, requestBody, 'YES');
            this.filteredEntityDeviceM = [this.entityDeviceM];

        } catch (error) {
            console.error("Error in getEntitiesWithDevicesByLayoutID()", error);
        } finally {
            this.entityDeviceLoader = false;
        }
    }

    searchFn(value: string) {
        const searchTerm = value.trim().toLowerCase();

        if (searchTerm.length > 0) {
            this.filteredEntityDeviceM = this.searchEntities([this.entityDeviceM], searchTerm);
        } else {
            this.searchBar.searchClear();
            this.filteredEntityDeviceM = [this.entityDeviceM];
        }
    }

    searchEntities(entities: any[], searchTerm: string): any[] {
        let results: any[] = [];

        entities.forEach(entity => {
            if (entity.name.toLowerCase().includes(searchTerm)) {
                results.push(entity);
            } else if (entity.children && entity.children.length > 0) {
                const matchingChildren = this.searchEntities(entity.children, searchTerm);
                if (matchingChildren.length > 0) {
                    const parentCopy = Object.assign({}, entity);
                    parentCopy.children = matchingChildren;
                    results.push(parentCopy);
                }
            }
        });

        return results;
    }

    openAccordion() {
        this.isAccordionOpen = true;
    }

    closeAccordion() {
        this.isAccordionOpen = false;
    }

    isDeviceAttached(entity: any): boolean {
        return (entity.type == 'FACILITY' || entity.type == 'ENTITY') && entity.children && entity.children.some(child => child.type == 'DEVICE');
    }

    onEntityDeviceSelection() {
        const selectedValue = this.entityFC.value;
        this.realTimeDeviceDataLoader = true;
        this.getOrgRecentData(selectedValue);
    }

    getTooltipLabel(entity: any): string {
        if (entity.type == 'FACILITY') {
            return 'Facility';
        } else if (entity.type == 'ENTITY') {
            return 'Entity';
        } else if (entity.type == 'DEVICE') {
            return 'Device';
        }
    }

    async getOrgRecentData(selectedValue) {
        try {
            let requestBody = new RecentDataRequestWithoutParam();

            requestBody.entityID = selectedValue;
            requestBody.timezone = this.timezone;
            requestBody.backscan = 1;

            this.orgRecentDataM = <OrgRecentDataM[]>await this.recentDataService.getOrgRecentData(this.orgID, requestBody);
        } catch (error) {
            console.error("Error in getOrgRecentData()", error);
        } finally {
            this.realTimeDeviceDataLoader = false;
        }
    }

    showTrend(paramMetric, entityID, deviceID) {
        let requestBody = {
            paramMetric: paramMetric,
            entityID: entityID,
            deviceID: deviceID
        };
        this.trendService.openDialog(requestBody);
    }

}
