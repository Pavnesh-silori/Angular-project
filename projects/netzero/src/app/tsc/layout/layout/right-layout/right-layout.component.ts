import { Component } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';

import { ThemeOptions } from '@rootProject/theme-options';

import { PagePathEnum } from '@netzero/enum/page-path.enum';
import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';
import { OrgType } from '@library/organization-service';
import { StorageService } from '@library/storage-service';

@Component({
    selector: 'app-right-layout',
    templateUrl: './right-layout.component.html',
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

export class RightLayoutComponent {
    leftSidebarArray: any;
    rightSidebarArray: any;
    pagePathEnum = PagePathEnum;

    currentOrgType: string;

    constructor(
        public globals: ThemeOptions,
        storageService: StorageService
    ) {
        this.currentOrgType = storageService.getStorage('currentOrgType');
    }

    ngOnInit() {
        this.initializeMenuArray();
    }

    initializeMenuArray() {
        this.leftSidebarArray = [
            {
                icon: 'arrow_circle_left',
                label: 'Back to main menu',
                route: PagePathEnum.NETZERO_APP_HOME_PAGE
            },
            {
                label: 'Settings',
                isSidebarHeaderLabel: true
            },
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
                        route: PagePathEnum.NETZERO_APP_HOME_PAGE
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
                        ].filter(Boolean)
                    }
                ]
            },
            (this.currentOrgType == OrgType.ORGANIZATION) ? {
                label: 'Targets',
                icon: 'target',
                type: 'DUAL_SIDEBAR',
                activeLink: ['/target-setting/sbti'],
                mainRoute: ['target-setting'],
                dualMenu: [
                    {
                        icon: 'arrow_circle_left',
                        label: 'Back to main menu',
                        route: PagePathEnum.NETZERO_APP_HOME_PAGE
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
                        route: PagePathEnum.NETZERO_APP_HOME_PAGE
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
                        route: PagePathEnum.NETZERO_APP_HOME_PAGE
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
                        ].filter(Boolean)
                    }
                ]
            },
            (this.currentOrgType == OrgType.ORGANIZATION) ? {
                label: 'Targets',
                icon: 'target',
                type: 'DUAL_SIDEBAR',
                activeLink: ['/target-setting'],
                mainRoute: ['target-setting'],
                dualMenu: [
                    {
                        icon: 'arrow_circle_left',
                        label: 'Back to main menu',
                        route: PagePathEnum.NETZERO_APP_HOME_PAGE
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
                        route: PagePathEnum.NETZERO_APP_HOME_PAGE
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
        ].filter(Boolean);

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
                            route: PagePathEnum.NETZERO_APP_HOME_PAGE
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