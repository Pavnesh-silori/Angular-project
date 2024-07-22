import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { LayoutComponent } from '@carbon/component/cbam/layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: ActivityKeyIDEnum.CHP_ATTRIBUTION,
                loadChildren: () => import('./chp-attribution/chp-attribution.module').then(m => m.ChpAttributionModule),
                data: { activityKeyID: ActivityKeyIDEnum.CHP_ATTRIBUTION }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION,
                loadChildren: () => import('./electricity-consumption/process-electricity-consumption.module').then(m => m.ElectricityConsumptionActivityDataModule),
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION,
                loadChildren: () => import('./electricity-consumption/process-electricity-consumption.module').then(m => m.ElectricityConsumptionActivityDataModule),
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION }
            },
            // TODO-CBAM
            // {
            //     path: ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION,
            //     loadChildren: () => import('./precursor-consumption-export/precursor-consumption-export.module').then(m => m.PrecursorConsumptionExportModule),
            //     data: { activityKeyID: ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION }
            // },
            // {
            //     path: ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT,
            //     loadChildren: () => import('./precursor-consumption-export/precursor-consumption-export.module').then(m => m.PrecursorConsumptionExportModule),
            //     data: { activityKeyID: ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT }
            // },
            {
                path: ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL,
                loadChildren: () => import('./production-level-old/production-level.module').then(m => m.ProductionLevelModule),
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL }
            },
            {
                path: ActivityKeyIDEnum.PURCHASED_PRECURSOR,
                loadChildren: () => import('./purchased-precursor/purchased-precursor.module').then(m => m.PurchasedPrecursorModule),
                data: { activityKeyID: ActivityKeyIDEnum.PURCHASED_PRECURSOR }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_FUEL_CONSUMPTION,
                loadChildren: () => import('./fuel-consumption/fuel-consumption.module').then(m => m.FuelConsumptionModule),
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_FUEL_CONSUMPTION }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT,
                loadChildren: () => import('./electricity-heat-export/electricity-heat-export.module').then(m => m.ElectricityHeatExportModule),
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_HEAT_EXPORT,
                loadChildren: () => import('./electricity-heat-export/electricity-heat-export.module').then(m => m.ElectricityHeatExportModule),
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_HEAT_EXPORT
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT,
                loadChildren: () => import('./electricity-heat-export/electricity-heat-export.module').then(m => m.ElectricityHeatExportModule),
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT,
                loadChildren: () => import('./waste-gas-export/waste-gas-export.module').then(m => m.WasteGasExportModule),
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT,
                loadChildren: () => import('./production-level-old/production-level.module').then(m => m.ProductionLevelModule),
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION,
                loadChildren: () => import('./production-level-old/production-level.module').then(m => m.ProductionLevelModule),
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT,
                loadChildren: () => import('./production-level-old/production-level.module').then(m => m.ProductionLevelModule),
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT
                }
            },
            {
                path: ActivityKeyIDEnum.CARBON_PRICING,
                loadChildren: () => import('./carbon-price/carbon-price.module').then(m => m.CarbonPriceModule),
                data: {
                    activityKeyID: ActivityKeyIDEnum.CARBON_PRICING
                }
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NonGhgRoutingModule { }
