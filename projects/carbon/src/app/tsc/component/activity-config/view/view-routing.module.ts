import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { ActivityConfigViewComponent } from './view.component';

// ghg
import { ProcessEmissionActivityConfigViewComponent } from '../ghg/scope-1/process-emission/view/view.component';
// /ghg/

// non-ghg
import { ChpAttributionActivityConfigViewComponent } from '../non-ghg/chp-attributions/chp-attribution-ac-view/chp-attribution-ac-view.component';

import { ElectricityConsumptionActivityConfigViewComponent } from '../non-ghg/electricity-consumption/view/view.component';

// import { ViewComponent as ProcessHeatConsumptionActivityConfigView } from '../non-ghg/process-heat-consumption/view/view.component';

import { ViewComponent as ProcessFuelConsumptionView } from '../non-ghg/fuel-consumption/view/view.component';

// import { ViewComponent as ProcessPrecursorConsumptionActivityConfigView } from '../non-ghg/process-precursor-consumption/view/view.component';

import { PrecursorConsumptionActivityConfigViewComponent } from '../non-ghg/precursor-consumption/view/view.component';

import { ViewComponent as PurchasedPrecursorActivityConfigView } from '../non-ghg/purchased-precursor/view/view.component';

import { ElectricityHeatExportViewComponent as ProcessHeatElectricityExportView } from '../non-ghg/electricity-heat-export/view/view.component';

// import { ViewComponent as WasteGasExportView } from '../non-ghg/process-waste-export/view/view.component';

// import { ViewComponent as ProcessPrecursorExportActivityConfigView } from '../non-ghg/process-precursor-export/view/view.component';

// import { ViewComponent as InterMediateProductExportView } from '../non-ghg/intermediate-product-export/view/view.component';

// import { ViewComponent as ProcessProductionlevelActivityConfigView } from '../non-ghg/process-production-level/view/view.component';

import { ProductionLevelActivityConfigViewComponent } from '../non-ghg/production-level/view/view.component';
import { CarbonPriceViewComponent } from '../non-ghg/carbon-price/view/view.component';
// /non-ghg/

const routes: Routes = [
    {
        path: 'activity',
        component: ActivityConfigViewComponent,
        children: [
            // ghg
            {
                path: ActivityKeyIDEnum.PROCESS_EMISSION,
                children: [
                    {
                        path: 'view',
                        component: ProcessEmissionActivityConfigViewComponent,
                        outlet: 'activityConfig'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_EMISSION }
            },
            // /ghg/

            // non-ghg
            {
                path: ActivityKeyIDEnum.CHP_ATTRIBUTION,
                children: [
                    {
                        path: 'view',
                        component: ChpAttributionActivityConfigViewComponent,
                        outlet: 'activityConfig'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.CHP_ATTRIBUTION }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION,
                children: [
                    {
                        path: 'view',
                        component: ElectricityConsumptionActivityConfigViewComponent,
                        outlet: 'activityConfig'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION,
                children: [
                    {
                        path: 'view',
                        // component: ProcessHeatConsumptionActivityConfigView,
                        component: ElectricityConsumptionActivityConfigViewComponent,
                        outlet: 'activityConfig'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_FUEL_CONSUMPTION,
                children: [
                    {
                        path: 'view',
                        component: ProcessFuelConsumptionView,
                        outlet: 'activityConfig'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_FUEL_CONSUMPTION }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION,
                children: [
                    {
                        path: 'view',
                        // component: ProcessPrecursorConsumptionActivityConfigView,
                        component: PrecursorConsumptionActivityConfigViewComponent,
                        outlet: 'activityConfig'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION }
            },
            {
                path: ActivityKeyIDEnum.PURCHASED_PRECURSOR,
                children: [
                    {
                        path: 'view',
                        component: PurchasedPrecursorActivityConfigView,
                        outlet: 'activityConfig'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PURCHASED_PRECURSOR }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT,
                children: [
                    {
                        path: 'view',
                        component: ProcessHeatElectricityExportView,
                        outlet: 'activityConfig'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_HEAT_EXPORT,
                children: [
                    {
                        path: 'view',
                        component: ProcessHeatElectricityExportView,
                        outlet: 'activityConfig'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_HEAT_EXPORT }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT,
                children: [
                    {
                        path: 'view',
                        // component: WasteGasExportView,
                        component: ProductionLevelActivityConfigViewComponent,
                        outlet: 'activityConfig'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT,
                children: [
                    {
                        path: 'view',
                        // component: ProcessPrecursorExportActivityConfigView,
                        component: ProductionLevelActivityConfigViewComponent,
                        outlet: 'activityConfig'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT,
                children: [
                    {
                        path: 'view',
                        // component: InterMediateProductExportView,
                        component: ProductionLevelActivityConfigViewComponent,
                        outlet: 'activityConfig'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL,
                children: [
                    {
                        path: 'view',
                        // component: ProcessProductionlevelActivityConfigView,
                        component: ProductionLevelActivityConfigViewComponent,
                        outlet: 'activityConfig'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL }
            },
            {
                path: ActivityKeyIDEnum.CARBON_PRICING,
                children: [
                    {
                        path: 'view',
                        // component: ProcessProductionlevelActivityConfigView,
                        component: CarbonPriceViewComponent,
                        outlet: 'activityConfig'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.CARBON_PRICING }
            },
            // /non-ghg/
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ActivityConfigViewRoutingModule { }
