import { ActivityKeyIDEnum as ActivityKeyID } from '@carbon/enum/activity.enum';
import { Component, OnInit } from '@angular/core';
import { ThemeOptions } from '@rootProject/theme-options';

@Component({
    selector: 'cbam-records-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    ActivityKeyID = ActivityKeyID;

    constructor(
        public themeOptions: ThemeOptions,
    ) { }

    ngOnInit(): void {
    }

    closedSidebar = false;

    navigations = [
        {
            icon: 'icon',
            name: 'CHP Attribution',
            route: `/cbam/activity-data/activity/${ActivityKeyID.CHP_ATTRIBUTION}/page`
        },
        {
            icon: 'icon',
            name: 'Process Electricity Consumption',
            route: `/cbam/activity-data/activity/${ActivityKeyID.PROCESS_ELECTRICITY_CONSUMPTION}/page`
        },
        {
            icon: 'icon',
            name: 'Process Heat Consumption',
            route: `/cbam/activity-data/activity/${ActivityKeyID.PROCESS_HEAT_CONSUMPTION}/page`
        },
        {
            icon: 'icon',
            name: 'Process Precursor Consumption',
            route: `/cbam/activity-data/activity/${ActivityKeyID.PROCESS_PRECURSOR_CONSUMPTION}/page`
        },
        {
            icon: 'icon',
            name: 'Process Precursor Export',
            route: `/cbam/activity-data/activity/${ActivityKeyID.PROCESS_PRECURSOR_EXPORT}/page`
        },
        {
            icon: 'icon',
            name: 'Purchased Precursor',
            route: `/cbam/activity-data/activity/${ActivityKeyID.PURCHASED_PRECURSOR}/page`
        },
        {
            icon: 'icon',
            name: 'Process Fuel Consumption',
            route: `/cbam/activity-data/activity/${ActivityKeyID.PROCESS_FUEL_CONSUMPTION}/page`
        },
        {
            icon: 'icon',
            name: 'Process Production Level',
            route: `/cbam/activity-data/activity/${ActivityKeyID.PROCESS_PRODUCTION_LEVEL}/page`
        },
        {
            icon: 'icon',
            name: 'Process Heat Export',
            route: `/cbam/activity-data/activity/${ActivityKeyID.PROCESS_HEAT_EXPORT}/page`
        },
        {
            icon: 'icon',
            name: 'Process Electricity Export',
            route: `/cbam/activity-data/activity/${ActivityKeyID.PROCESS_ELECTRICITY_EXPORT}/page`
        },
        {
            icon: 'icon',
            name: 'Process Waste Gases Export',
            route: `/cbam/activity-data/activity/${ActivityKeyID.PROCESS_WASTE_GAS_EXPORT}/page`
        },
        {
            icon: 'icon',
            name: 'Process Intermediate Product Export',
            route: `/cbam/activity-data/activity/${ActivityKeyID.PROCESS_INTERMEDIATE_PRODUCT_EXPORT}/page`
        },
        {
            icon: 'icon',
            name: 'Carbon Pricing',
            route: `/cbam/activity-data/activity/${ActivityKeyID.CARBON_PRICING}/page`
        }
    ]
}
