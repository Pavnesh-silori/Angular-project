import { Component } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';

import { ThemeOptions } from '@rootProject/theme-options';

import { PagePathEnum } from '@netzero/enum/page-path.enum';
import { ActivityKeyIDEnum, MethodKeyIDEnum } from '@carbon/enum/activity.enum';
import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';
import { OrgType } from '@library/organization-service';
import { StorageService } from '@library/storage-service';

@Component({
    selector: 'app-left-layout',
    templateUrl: './left-layout.component.html',
    animations: [
        trigger('architectUIAnimation', [
            transition('* <=> *', [
                query(':enter, :leave', [
                    style({
                        opacity: 0,
                        display: 'flex',
                        flex: '1',
                        flexDirection: 'column'
                    }),
                ], { optional: true }),
                query(':enter', [
                    animate('100ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
                ], { optional: true }),

                query(':leave', [
                    animate('100ms ease', style({ opacity: 0, transform: 'translateY(-10px)' })),
                ], { optional: true })
            ]),
        ])
    ]
})

export class LeftLayoutComponent {
    PagePathEnum = PagePathEnum;

    leftSidebarArray: any;
    rightSidebarArray: any;

    enableModule: any;
    currentOrgType: string;

    constructor(
        public globals: ThemeOptions,
        storageService: StorageService
    ) {
        this.enableModule = storageService.getStorage('enableModule');
        this.currentOrgType = storageService.getStorage('currentOrgType');
    }

    ngOnInit() {
        this.initializeMenuArray();
    }

    initializeMenuArray() {
        this.leftSidebarArray = [
            // {
            //     label: 'Home',
            //     icon: 'home',
            //     route: '/home',
            //     activeLink: ['/home'],
            //     isLandingPage: true,
            //     // featureKeyID: WATER_FEATURE_CONSTANT.HOME,
            //     // resourcePermission: [WATER_RBAC_CONSTANT.HOME_READ]
            // },
            {
                label: 'Dashboards',
                icon: 'dashboard',
                type: 'DUAL_SIDEBAR',
                activeLink: ['/dashboard'],
                mainRoute: ['dashboard'],
                // featureKeyID: WATER_FEATURE_CONSTANT.DASHBOARDS,
                // resourcePermission: [WATER_RBAC_CONSTANT.DASHBOARDS_READ],
                dualMenu: [
                    {
                        icon: 'arrow_circle_left',
                        label: 'Back to main menu',
                        isBackButton: true
                    },
                    {
                        label: 'Dashboards',
                        type: 'OPEN_MENU',
                        children: [
                            (this.enableModule == 'YES') ? {
                                label: 'Netzero',
                                icon: 'eco',
                                route: 'dashboard/netzero',
                                activeLink: ['dashboard/netzero'],
                                // featureKeyID: WATER_FEATURE_CONSTANT.FACILITY_DASHBOARD,
                                // resourcePermission: [WATER_RBAC_CONSTANT.FACILITY_DASHBOARD_READ]
                            } : null,
                            {
                                label: 'Carbon Footprint',
                                icon: 'co2',
                                route: '/dashboard/carbon/footprint',
                                activeLink: ['/dashboard/carbon/footprint'],
                                isDefaultLandingPage: true,
                                // featureKeyID: WATER_FEATURE_CONSTANT.FACILITY_DASHBOARD,
                                // resourcePermission: [WATER_RBAC_CONSTANT.FACILITY_DASHBOARD_READ]
                            },
                            (this.enableModule == 'YES') ? {
                                label: 'Water Footprint',
                                icon: 'water_drop',
                                route: '/dashboard/water/footprint',
                                activeLink: ['/dashboard/water/footprint'],
                                // featureKeyID: WATER_FEATURE_CONSTANT.FACILITY_DASHBOARD,
                                // resourcePermission: [WATER_RBAC_CONSTANT.FACILITY_DASHBOARD_READ]
                            } : null,
                            (this.enableModule == 'YES') ? {
                                label: 'Energy Footprint',
                                icon: 'bolt',
                                route: '/dashboard/energy/footprint',
                                activeLink: ['/dashboard/energy/footprint'],
                                // featureKeyID: WATER_FEATURE_CONSTANT.FACILITY_DASHBOARD,
                                // resourcePermission: [WATER_RBAC_CONSTANT.FACILITY_DASHBOARD_READ]
                            } : null,
                            (this.enableModule == 'YES') ? {
                                label: 'Waste Footprint',
                                icon: 'delete',
                                route: '/dashboard/waste/footprint',
                                activeLink: ['/dashboard/waste/footprint'],
                                // featureKeyID: WATER_FEATURE_CONSTANT.FACILITY_DASHBOARD,
                                // resourcePermission: [WATER_RBAC_CONSTANT.FACILITY_DASHBOARD_READ]
                            } : null,
                            (this.enableModule == 'YES') ? {
                                label: 'Enviro Footprint',
                                icon: 'forest',
                                route: '/dashboard/enviro/footprint',
                                activeLink: ['/dashboard/enviro/footprint'],
                                // featureKeyID: WATER_FEATURE_CONSTANT.FACILITY_DASHBOARD,
                                // resourcePermission: [WATER_RBAC_CONSTANT.FACILITY_DASHBOARD_READ]
                            } : null
                        ].filter(Boolean)
                    }
                ],
            },
            {
                label: 'Tasks',
                icon: 'event',
                route: '/reminder/view',
                activeLink: ['/reminder/view']
            },
            {
                label: 'Carbon',
                icon: 'co2',
                type: 'DUAL_SIDEBAR',
                activeLink: [
                    '/sustainability-accounting',
                    '/activity-data',
                    '/fugitive-emission-racfs',
                    '/product-manufacturer',
                    '/fugitive-release-list'
                ],
                mainRoute: [
                    'sustainability-accounting',
                    'activity-data',
                    'fugitive-emission-racfs',
                    'product-manufacturer',
                    'fugitive-release-list'
                ],
                dualMenu: [
                    {
                        icon: 'arrow_circle_left',
                        label: 'Back to main menu',
                        isBackButton: true
                    },
                    {
                        label: 'Carbon',
                        type: 'OPEN_MENU',
                        children: [
                            {
                                label: 'Carbon Ledger',
                                icon: 'menu_book',
                                isDefaultLandingPage: true,
                                route: '/sustainability-accounting/carbon/page',
                                activeLink: ['/sustainability-accounting/carbon']
                            }
                        ]
                    },
                    {
                        label: 'Scope 1',
                        type: 'ACCORDION',
                        defaultState: 'OPEN',
                        activeLink: [
                            '/activity-data/stationary-combustion',
                            '/activity-data/activity/stationary-combustion',
                            '/activity-data/mobile-combustion',
                            '/activity-data/activity/mobile-combustion',
                            '/activity-data/process-emission',
                            '/fugitive-emission-racfs',
                            '/fugitive-release-list',
                            '/product-manufacturer/inventory'
                        ],
                        children: [
                            {
                                label: 'Stationary Combustion',
                                icon: 'local_fire_department',
                                route: '/activity-data/stationary-combustion/page',
                                activeLink: [
                                    '/activity-data/stationary-combustion',
                                    '/activity-data/activity/stationary-combustion'
                                ]
                            },
                            {
                                label: 'Mobile Combustion',
                                icon: 'airport_shuttle',
                                route: '/activity-data/mobile-combustion/page',
                                activeLink: [
                                    '/activity-data/mobile-combustion',
                                    '/activity-data/activity/mobile-combustion'
                                ]
                            },
                            {
                                label: 'Process Emission',
                                icon: 'route',
                                route: '/activity-data/process-emission/page',
                                activeLink: ['/activity-data/process-emission']
                            },
                            {
                                label: 'Fugitive - Refrigeration',
                                icon: 'kitchen',
                                route: '/fugitive-emission-racfs/service-myself/inventory',
                                activeLink: ['/fugitive-emission-racfs']
                            },
                            {
                                label: 'Fugitive - Sector Specific',
                                icon: 'coronavirus',
                                route: '/fugitive-release-list',
                                activeLink: ['/fugitive-release-list']
                            },
                            {
                                label: 'Fugitive - Product Manufacture',
                                icon: 'factory',
                                route: '/product-manufacturer/inventory',
                                activeLink: ['/product-manufacturer/inventory']
                            }
                        ]
                    },
                    {
                        label: 'Scope 2',
                        type: 'ACCORDION',
                        defaultState: 'OPEN',
                        children: [
                            {
                                label: 'Purchased Electricity',
                                icon: 'bolt',
                                route: '/activity-data/purchased-electricity/page',
                                activeLink: [
                                    '/activity-data/purchased-electricity',
                                    'activity-data/activity/purchased-electricity'
                                ]
                            },
                            {
                                label: 'Purchased Heat-Steam',
                                icon: 'onsen',
                                route: '/activity-data/purchased-heat-steam/page',
                                activeLink: [
                                    '/activity-data/purchased-heat-steam',
                                    'activity-data/activity/purchased-heat-steam'
                                ]
                            },
                            {
                                label: 'Purchased Cooling',
                                icon: 'mode_cool',
                                route: '/activity-data/purchased-cooling/page',
                                activeLink: [
                                    '/activity-data/purchased-cooling',
                                    'activity-data/activity/purchased-cooling'
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Scope 3',
                        type: 'ACCORDION',
                        defaultState: 'OPEN',
                        activeLink: [
                            '/activity-data/spend-based-method/records',
                            '/activity-data/waste-generated-in-operations/page',
                            `/activity-data/${ActivityKeyIDEnum.EMPLOYEE_COMMUTING}/survey/page`
                        ],
                        children: [
                            {
                                subLabel: 'By Method',
                            },
                            {
                                label: 'Spend Based Method',
                                icon: 'currency_exchange',
                                route: '/activity-data/spend-based-method/records',
                                activeLink: ['/activity-data/spend-based-method/records']
                            },
                            // {
                            //     label: 'Average Based Method',
                            //     icon: 'functions',
                            //     route: `/activity-data/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
                            //     activeLink: [`/activity-data/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`]
                            // },
                            {
                                subLabel: 'By Activity',
                            },
                            {
                                //working
                                label: 'Purchased Goods & Services',
                                icon: 'shopping_cart',
                                route: `/activity-data/activity/${ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
                                // route: '/activity-data/activity/purchased-goods-and-services/method/average-based-method/page',
                                activeLink: [`/activity-data/activity/${ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`]
                            },
                            {
                                label: 'Capital Goods',
                                icon: 'auto_towing',
                                route: `/activity-data/activity/${ActivityKeyIDEnum.CAPITAL_GOODS}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
                                // route: '/activity-data/activity/purchased-goods-and-services/method/average-based-method/page',
                                activeLink: [`/activity-data/activity/${ActivityKeyIDEnum.CAPITAL_GOODS}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`]
                            },
                            // {
                            //     label: 'Fuel & energy related activities',
                            //     icon: 'outdoor_grill',
                            //     route: `/activity-data/activity/${ActivityKeyIDEnum.PROCESS_FUEL_CONSUMPTION}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
                            //     // route: '/activity-data/activity/purchased-goods-and-services/method/average-based-method/page',
                            //     activeLink: [`/activity-data/activity/${ActivityKeyIDEnum.PROCESS_FUEL_CONSUMPTION}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`]
                            // },
                            // {
                            //     label: 'Upstream transportation & distribution',
                            //     icon: 'package_2',
                            //     route: `/activity-data/activity/${ActivityKeyIDEnum.UPSTREAM_TRANSPORTATION_AND_DISTRIBUTION}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
                            //     // route: '/activity-data/activity/purchased-goods-and-services/method/average-based-method/page',
                            //     activeLink: [`/activity-data/activity/${ActivityKeyIDEnum.UPSTREAM_TRANSPORTATION_AND_DISTRIBUTION}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`]
                            // },
                            {
                                //done
                                label: 'Waste generated in operations',
                                icon: 'delete',
                                route: '/activity-data/waste-generated-in-operations/page',
                                activeLink: ['/activity-data/waste-generated-in-operations/page']
                            },
                            // {
                            //     label: 'Business travel',
                            //     icon: 'flight_takeoff',
                            //     route: `/activity-data/activity/${ActivityKeyIDEnum.BUSINESS_TRAVEL}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
                            //     // route: '/activity-data/activity/purchased-goods-and-services/method/average-based-method/page',
                            //     activeLink: [`/activity-data/activity/${ActivityKeyIDEnum.BUSINESS_TRAVEL}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`]
                            // },
                            {
                                //done
                                label: 'Employee Commuting',
                                icon: 'commute',
                                route: `/activity-data/${`${ActivityKeyIDEnum.EMPLOYEE_COMMUTING}`}/survey/page`,
                                activeLink: [`/activity-data/${ActivityKeyIDEnum.EMPLOYEE_COMMUTING}/survey/page`]
                            },
                            // {
                            //     label: 'Upstream leased assets',
                            //     icon: 'apartment',
                            //     route: `/activity-data/activity/${ActivityKeyIDEnum.UPSTREAM_LEASED_ASSETS}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
                            //     // route: '/activity-data/activity/purchased-goods-and-services/method/average-based-method/page',
                            //     activeLink: [`/activity-data/activity/${ActivityKeyIDEnum.UPSTREAM_LEASED_ASSETS}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`]
                            // },
                            // {
                            //     label: 'Downstream transportation & distribution',
                            //     icon: 'package_2',
                            //     route: `/activity-data/activity/${ActivityKeyIDEnum.DOWNSTREAM_TRANSPORTATION_AND_DISTRIBUTION}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
                            //     // route: '/activity-data/activity/purchased-goods-and-services/method/average-based-method/page',
                            //     activeLink: [`/activity-data/activity/${ActivityKeyIDEnum.DOWNSTREAM_TRANSPORTATION_AND_DISTRIBUTION}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`]
                            // },
                            // {
                            //     label: 'Downstream leased assets',
                            //     icon: 'apartment',
                            //     route: `/activity-data/activity/${ActivityKeyIDEnum.DOWNSTREAM_LEASED_ASSETS}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
                            //     // route: '/activity-data/activity/purchased-goods-and-services/method/average-based-method/page',
                            //     activeLink: [`/activity-data/activity/${ActivityKeyIDEnum.DOWNSTREAM_LEASED_ASSETS}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`]
                            // },
                            // {
                            //     label: 'Processing of sold products',
                            //     icon: 'factory',
                            //     route: `/activity-data/activity/${ActivityKeyIDEnum.PROCESSING_SOLD_PRODUCTS}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
                            //     // route: '/activity-data/activity/purchased-goods-and-services/method/average-based-method/page',
                            //     activeLink: [`/activity-data/activity/${ActivityKeyIDEnum.PROCESSING_SOLD_PRODUCTS}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`]
                            // },
                            // {
                            //     label: 'Use of sold products',
                            //     icon: 'lightbulb',
                            //     route: `/activity-data/activity/${ActivityKeyIDEnum.USE_SOLD_PRODUCTS}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
                            //     // route: '/activity-data/activity/purchased-goods-and-services/method/average-based-method/page',
                            //     activeLink: [`/activity-data/activity/${ActivityKeyIDEnum.USE_SOLD_PRODUCTS}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`]
                            // },
                            // {
                            //     label: 'End-of-life treatment of sold products',
                            //     icon: 'recycling',
                            //     route: `/activity-data/activity/${ActivityKeyIDEnum.END_OF_LIFE_TREATMENT_OF_SOLD_PRODUCTS}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
                            //     // route: '/activity-data/activity/purchased-goods-and-services/method/average-based-method/page',
                            //     activeLink: [`/activity-data/activity/${ActivityKeyIDEnum.END_OF_LIFE_TREATMENT_OF_SOLD_PRODUCTS}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`]
                            // },
                            // {
                            //     label: 'Franchises',
                            //     icon: 'store',
                            //     route: `/activity-data/activity/${ActivityKeyIDEnum.FRANCHISES}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
                            //     // route: '/activity-data/activity/purchased-goods-and-services/method/average-based-method/page',
                            //     activeLink: [`/activity-data/activity/${ActivityKeyIDEnum.FRANCHISES}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`]
                            // },
                            // {
                            //     label: 'Investments',
                            //     icon: 'payments',
                            //     route: `/activity-data/activity/${ActivityKeyIDEnum.INVESTMENTS}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
                            //     // route: '/activity-data/activity/purchased-goods-and-services/method/average-based-method/page',
                            //     activeLink: [`/activity-data/activity/${ActivityKeyIDEnum.INVESTMENTS}/method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`]
                            // }
                        ]
                    }
                ]
            },
            // {
            //     label: 'ESG',
            //     icon: 'menu_book',
            //     type: 'DUAL_SIDEBAR',
            //     activeLink: ['/sustainability-accounting', '/activity-data'],
            //     dualMenu: [
            //         {
            //             icon: 'arrow_circle_left',
            //             label: 'Back to main menu',
            //             isBackButton: true
            //         },
            //         {
            //             label: 'ESG',
            //             type: 'OPEN_MENU',
            //             children: [
            //                 {
            //                     label: 'ESG Ledger',
            //                     icon: 'menu_book',
            //                     isDefaultLandingPage: true,
            //                     route: '/sustainability-accounting/carbon/page',
            //                     activeLink: ['/sustainability-accounting/carbon']
            //                 }
            //             ]
            //         },
            //         {
            //             label: 'Enivironmental',
            //             type: 'ACCORDION',
            //             defaultState: 'OPEN',
            //             children: [
            //                 {
            //                     label: 'GHG Emissions',
            //                     icon: 'local_fire_department',
            //                     route: '/activity-data/stationary-combustion/page',
            //                     activeLink: ['/activity-data/stationary-combustion']
            //                 },
            //                 {
            //                     label: 'Water Usage',
            //                     icon: 'water_voc',
            //                     route: '/activity-data/mobile-combustion/page',
            //                     activeLink: ['/activity-data/mobile-combustion']
            //                 },
            //                 {
            //                     label: 'Energy Consumption',
            //                     icon: 'bolt',
            //                     route: '/activity-data/process-emission/page',
            //                     activeLink: ['/activity-data/process-emission']
            //                 },
            //                 {
            //                     label: 'Waste Management',
            //                     icon: 'recycling',
            //                     route: '/fugitive-emission-racfs/service-myself/inventory',
            //                     activeLink: ['/fugitive-emission-racfs']
            //                 },
            //                 {
            //                     label: 'Resource Effciency',
            //                     icon: 'light_mode',
            //                     route: '/fugitive-release-list',
            //                     activeLink: ['/fugitive-release-list']
            //                 },
            //                 {
            //                     label: 'Biodiversity',
            //                     icon: 'compost',
            //                     route: '/product-manufacturer/inventory',
            //                     activeLink: ['/product-manufacturer/inventory']
            //                 }
            //             ]
            //         },
            //         {
            //             label: 'Social',
            //             type: 'ACCORDION',
            //             defaultState: 'OPEN',
            //             children: [
            //                 {
            //                     label: 'Employee Health & Safety',
            //                     icon: 'health_and_safety',
            //                     route: '/activity-data/purchased-electricity/page',
            //                     activeLink: ['/activity-data/purchased-electricity']
            //                 },
            //                 {
            //                     label: 'Labor Practies',
            //                     icon: 'groups',
            //                     route: '/activity-data/purchased-heat-steam/page',
            //                     activeLink: ['/activity-data/purchased-heat-steam']
            //                 },
            //                 {
            //                     label: 'Human Rights',
            //                     icon: 'person',
            //                     route: '/activity-data/purchased-cooling/page',
            //                     activeLink: ['/activity-data/purchased-cooling']
            //                 },
            //             ]
            //         },
            //         {
            //             label: 'Governance',
            //             type: 'ACCORDION',
            //             defaultState: 'OPEN',
            //             children: [
            //                 {
            //                     label: 'Ethics',
            //                     icon: 'currency_exchange',
            //                     route: '/activity-data/spend-based-method/records',
            //                     activeLink: ['/activity-data/spend-based-method/records']
            //                 },
            //                 {
            //                     label: 'Board Members & Diversity',
            //                     icon: 'frame_person_mic',
            //                     route: '/activity-data/waste-generated-in-operations/page',
            //                     activeLink: ['/activity-data/waste-generated-in-operations/page']
            //                 },
            //                 {
            //                     label: 'Tax Transparency',
            //                     icon: 'commute',
            //                     route: `/activity-data/${`${ActivityKeyIDEnum.EMPLOYEE_COMMUTING}`}/survey/page`,
            //                     activeLink: [`/activity-data/${ActivityKeyIDEnum.EMPLOYEE_COMMUTING}/survey/page`]
            //                 },
            //             ]
            //         }
            //     ]
            // },
            {
                label: 'CBAM',
                icon: 'vignette',
                route: '/cbam/landing-page',
                activeLink: ['/cbam']
            },
            (this.currentOrgType == OrgType.ORGANIZATION) ? {
                label: 'Subsidiary Accounting',
                icon: 'humidity_percentage',
                route: '/subsidiary/emission/data/page',
                activeLink: ['/subsidiary'],
            } : null,
            (this.currentOrgType == OrgType.ORGANIZATION) ? {
                label: 'Targeting & Planning',
                icon: 'target',
                type: 'ACCORDION',
                activeLink: ['/target'],
                // featureKeyID: WATER_FEATURE_CONSTANT.ALARM_ESCALATION,
                // resourcePermission: [WATER_RBAC_CONSTANT.ALARM_ESCALATION_READ],
                children: [
                    {
                        label: 'Sciend Based Targets (SBTi)',
                        icon: 'target',
                        route: '/target/page',
                        activeLink: ['/target/page'],
                        isDefaultLandingPage: true,
                        // featureKeyID: WATER_FEATURE_CONSTANT.CONFIGURED_ALARM,
                        // resourcePermission: [WATER_RBAC_CONSTANT.CONFIGURED_ALARM_READ]
                    },
                    (this.enableModule == 'YES') ? {
                        label: 'Forecasting',
                        icon: 'thermostat',
                        route: '/target/forecast',
                        activeLink: ['/target/forecast'],
                        // featureKeyID: WATER_FEATURE_CONSTANT.GENERATED_ALARM,
                        // resourcePermission: [WATER_RBAC_CONSTANT.GENERATED_ALARM_READ]
                    } : null,
                    (this.enableModule == 'YES') ? {
                        label: 'Anomaly Detector',
                        icon: 'sensors',
                        route: '/target/anomaly-detector',
                        activeLink: ['/target/anomaly-detector'],
                        // featureKeyID: WATER_FEATURE_CONSTANT.GENERATED_ALARM,
                        // resourcePermission: [WATER_RBAC_CONSTANT.GENERATED_ALARM_READ]
                    } : null
                ].filter(Boolean)
            } : null,
            {
                label: 'Reports',
                icon: 'receipt_long',
                type: 'ACCORDION',
                activeLink: [
                    '/reporting-framework/tab/tracking',
                    '/report/ghg-emission-report'
                ],
                children: [
                    (this.currentOrgType == OrgType.ORGANIZATION) ? {
                        label: 'Global Frameworks',
                        icon: 'public',
                        route: '/reporting-framework/tab/tracking',
                        activeLink: ['/reporting-framework/tab/tracking'],
                    } : null,
                    {
                        label: 'Internal Reports',
                        icon: 'summarize',
                        route: '/report/ghg-emission-report',
                        activeLink: ['/report/ghg-emission-report'],
                    }
                ].filter(Boolean)
            },
            (this.enableModule == 'YES') ? {
                label: 'Water',
                icon: 'water_drop',
                route: '/water',
                activeLink: ['/water']
            } : null,
            (this.enableModule == 'YES') ? {
                label: 'Energy',
                icon: 'bolt',
                route: '/energy',
                activeLink: ['/energy']
            } : null,
            (this.enableModule == 'YES') ? {
                label: 'Waste',
                icon: 'delete',
                route: '/waste',
                activeLink: ['/waste']
            } : null,
            (this.enableModule == 'YES') ? {
                label: 'Enviro',
                icon: 'forest',
                route: '/enviro',
                activeLink: ['/enviro']
            } : null
        ].filter(Boolean);

        this.rightSidebarArray = [
            {
                label: 'Carbon',
                icon: 'co2',
                type: 'DUAL_SIDEBAR',
                activeLink: ['/carbon-setting'],
                mainRoute: ['carbon-setting'],
                dualMenu: [
                    {
                        icon: 'arrow_circle_left',
                        label: 'Back to main menu',
                        isBackButton: true,
                        navigateToLandingPage: true,
                        backMenuItem: this.leftSidebarArray
                    },
                    {
                        label: 'Settings',
                        isSidebarHeaderLabel: true
                    },
                    {
                        icon: 'arrow_circle_left',
                        label: 'Back to settings menu',
                        isBackButton: true,
                        menuItemType: 'RIGHT'
                    },
                    {
                        label: 'Carbon',
                        type: 'OPEN_MENU',
                        children: [
                            {
                                label: 'Boundary Questions',
                                icon: 'quiz',
                                route: '/carbon-setting/boundary-question',
                                activeLink: ['/carbon-setting/boundary-question'],
                                isDefaultLandingPage: true
                            },
                            {
                                label: 'Activity Types',
                                icon: 'hdr_auto',
                                route: '/carbon-setting/activity',
                                activeLink: ['/carbon-setting/activity']
                            },
                            (this.currentOrgType == OrgType.ORGANIZATION) ? {
                                label: 'Carbon Preferences',
                                icon: 'settings_account_box',
                                route: '/carbon-setting/preference/calculation',
                                activeLink: ['/carbon-setting/preference/calculation']
                            } : null,
                            {
                                label: 'Activity Configurator',
                                icon: 'tv_options_input_settings',
                                route: '/carbon-setting/activity-configurator',
                                activeLink: ['/carbon-setting/activity-configurator']
                            },
                            (this.currentOrgType == OrgType.ORGANIZATION) ? {
                                label: 'Base Year',
                                icon: 'public',
                                route: '/carbon-setting/base-year',
                                activeLink: ['/carbon-setting/base-year']
                            } : null,
                            (this.currentOrgType == OrgType.ORGANIZATION) ? {
                                label: 'Structural Changes',
                                icon: 'component_exchange',
                                route: '/carbon-setting/structural-change/merger-acquisition/page',
                                activeLink: ['/carbon-setting/structural-change/merger-acquisition/page']
                            } : null,
                            {
                                label: 'Factor Databases',
                                icon: 'folder_open',
                                route: '/carbon-setting/factor-database/standard-emission-factor/standard/emission/database',
                                activeLink: ['/carbon-setting/factor-database/standard-emission-factor/standard/emission/database']
                            },
                            {
                                label: 'Activity Forms',
                                icon: 'grading',
                                route: '/carbon-setting/activity-config/page',
                                activeLink: ['/carbon-setting/activity-config/page'],
                                queryParam: [
                                    {
                                        key: 'origin',
                                        param: ActivityConfigEnum.PFF
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            (this.currentOrgType == OrgType.ORGANIZATION) ? {
                label: 'Targets',
                icon: 'target',
                type: 'DUAL_SIDEBAR',
                activeLink: ['/target-setting'],
                mainRoute: ['target-setting'],
                // featureKeyID: WATER_FEATURE_CONSTANT.LAYOUT,
                // resourcePermission: [WATER_RBAC_CONSTANT.LAYOUT_READ],
                dualMenu: [
                    {
                        icon: 'arrow_circle_left',
                        label: 'Back to main menu',
                        isBackButton: true,
                        navigateToLandingPage: true,
                        backMenuItem: this.leftSidebarArray
                    },
                    {
                        label: 'Settings',
                        isSidebarHeaderLabel: true
                    },
                    {
                        icon: 'arrow_circle_left',
                        label: 'Back to settings menu',
                        isBackButton: true,
                        menuItemType: 'RIGHT'
                    },
                    {
                        label: 'Targets',
                        type: 'OPEN_MENU',
                        children: [
                            {
                                label: 'Science Based Targets (SBTi)',
                                icon: 'target',
                                route: '/target-setting/sbti',
                                activeLink: ['/target-setting/sbti'],
                                isDefaultLandingPage: true
                            }
                        ]
                    }
                ]
            } : null,
            {
                label: 'Sources and Consumers',
                icon: 'grid_view',
                type: 'DUAL_SIDEBAR',
                activeLink: ['/source'],
                mainRoute: ['source'],
                // featureKeyID: WATER_FEATURE_CONSTANT.LAYOUT,
                // resourcePermission: [WATER_RBAC_CONSTANT.LAYOUT_READ],
                dualMenu: [
                    {
                        icon: 'arrow_circle_left',
                        label: 'Back to main menu',
                        isBackButton: true,
                        navigateToLandingPage: true,
                        backMenuItem: this.leftSidebarArray
                    },
                    {
                        label: 'Settings',
                        isSidebarHeaderLabel: true
                    },
                    {
                        icon: 'arrow_circle_left',
                        label: 'Back to settings menu',
                        isBackButton: true,
                        menuItemType: 'RIGHT'
                    },
                    {
                        label: 'Sources and Consumers',
                        type: 'OPEN_MENU',
                        children: [
                            {
                                label: 'Combustion Equipments',
                                icon: 'coffee_maker',
                                route: '/source/asset/page',
                                activeLink: ['/source/asset/page'],
                                isDefaultLandingPage: true
                            },
                            {
                                label: 'Suppliers',
                                icon: 'store',
                                route: '/source/supplier/page',
                                activeLink: ['/source/supplier/page']
                            },
                            {
                                label: 'Vehicles',
                                icon: 'directions_car',
                                route: '/source/vehicle/page',
                                activeLink: ['/source/vehicle/page']
                            },
                            {
                                label: 'Refrigeration and Fire Suppression Equipments',
                                icon: 'kitchen',
                                route: '/source/refrigeration-fire-suppressiong-equipments/page',
                                activeLink: ['/source/refrigeration-fire-suppressiong-equipments/page']
                            },
                            {
                                label: 'Sector Specific Fugitive Sources',
                                icon: 'factory',
                                route: '/source/sector-specific/page',
                                activeLink: ['/source/sector-specific/page']
                            },
                            {
                                label: 'Employees',
                                icon: 'badge',
                                route: '/source/employee/page',
                                activeLink: ['/source/employee/page']
                            },
                            {
                                label: 'Products and Services',
                                icon: 'production_quantity_limits',
                                route: '/source/product-service/product/page',
                                activeLink: ['/source/product-service']
                            },
                            {
                                label: 'Fuels',
                                icon: 'local_gas_station',
                                route: '/source/fuel/page',
                                activeLink: ['/source/fuel/page']
                            },
                            {
                                label: 'Processes',
                                icon: 'route',
                                route: '/source/process/page',
                                activeLink: ['/source/process/page']
                            },
                            {
                                label: 'Production Routes',
                                icon: 'rebase_edit',
                                route: '/source/production-route/page',
                                activeLink: ['/source/production-route/page']
                            }
                        ]
                    }
                ]
            },
            (this.currentOrgType == OrgType.ORGANIZATION) ? {
                label: 'ESG Preference',
                icon: 'settings_account_box',
                route: '/reporting-preference/tab',
                activeLink: ['/reporting-preference/tab']
            } : null
        ].filter(Boolean)

        this.leftSidebarArray.forEach(item => {
            if (item.dualMenu) {
                const leftMenuItem = item.dualMenu.find(subItem => subItem?.isBackButton);
                if (leftMenuItem) {
                    leftMenuItem.backMenuItem = this.leftSidebarArray;
                }
            }
        });

        this.rightSidebarArray.forEach(item => {
            if (item.dualMenu) {
                const leftMenuItem = item.dualMenu.find(subItem => subItem?.menuItemType == 'RIGHT');
                if (leftMenuItem) {
                    leftMenuItem.backMenuItem = [
                        {
                            icon: 'arrow_circle_left',
                            label: 'Back to main menu',
                            isBackButton: true,
                            navigateToLandingPage: true,
                            backMenuItem: this.leftSidebarArray
                        },
                        {
                            label: 'Settings',
                            isSidebarHeaderLabel: true
                        },
                        ...this.rightSidebarArray
                    ];
                }
            }
        });
    }

}
