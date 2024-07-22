import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update.component';

/* scope-1 */
import { CreateUpdateComponent as StationaryCombustionActivtyConfigComponent } from '../../activity-config/ghg/scope-1/stationary-combustion/create-update/create-update.component';
import { CreateComponent as StationaryCombustionActivtyDataComponent } from '../../activity-data/ghg/scope-1/stationary-combustion/create/create.component';

import { ProcessEmissionActivityConfigCreateComponent } from '@carbon/component/activity-config/ghg/scope-1/process-emission/create/create.component';
import { CreateUpdateComponent as MobileCombustionActivtyConfigComponent } from '../../activity-config/ghg/scope-1/mobile-combustion/create-update/create-update.component';
import { CreateUpdateComponent as MobileCombustionActivtyDataComponent } from '../../activity-data/ghg/scope-1/mobile-combustion/create-update/create-update.component';
import { ProcessEmissionActivityDataCreateComponent } from '../ghg/scope-1/process-emission/create/create.component';
/* scope-1 */

/* scope-2 */
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { CreateComponent as PurchasedEnergyActivtyConfigComponent } from '../../activity-config/ghg/scope-2/purchased-energy/create/create.component';
import { CreateComponent as PurchasedEnergyActivtyDataComponent } from '../../activity-data/ghg/scope-2/create/create.component';
import { ElectricityConsumptionActivityDataCreateComponent } from '../non-ghg/electricity-consumption/create/create.component';
/* scope-2 */

// scope-3
import { CreateComponent as WasteGeneratingInOperationsACComponent } from '@carbon/component/activity-config/ghg/scope-3/waste-generated/create/create.component';
// import { ProductionLevelActivityConfigCreateComponent } from '@carbon/component/activity-config/non-ghg/production-level/create/create.component';
import { ElectricityConsumptionActivityConfigCreateComponent } from '@carbon/component/activity-config/non-ghg/electricity-consumption/create/create.component';
import { ENTITY_KEY_ID_ENUM } from '@carbon/enum/entity.enum';
import { FormAction } from '@library/tsc-common';
import { CreateUpdateComponent as WasteGeneratingInOperationsADComponent } from '../ghg/scope-3/waste-generated/create-update/create-update.component';


/* non-ghg */
import { CreateUpdateComponent as ChpAttributionActivityConfigComponent } from '@carbon/component/activity-config/non-ghg/chp-attributions/create-update/create-update.component';
import { CreateUpdateComponent as ChpAttributionActivityDataComponent } from '../non-ghg/chp-attribution/create-update/create-update.component';
import { CreateUpdateComponent as PurchasedPrecursorActivityConfigComponent } from '@carbon/component/activity-config/non-ghg/purchased-precursor/create-update/create-update.component';
import { CreateUpdateComponent as PurchasedPrecursorActivityDataComponent } from '../non-ghg/purchased-precursor/create-update/create-update.component';
// import { CreateUpdateComponent as ProcessProductionLevelActivityConfigComponent } from '@carbon/component/activity-config/non-ghg/process-production-level/create-update/create-update.component';
import { CreateUpdateComponent as HeatElectricityExportACComponent } from '@carbon/component/activity-config/non-ghg/electricity-heat-export/create-update/create-update.component';
import { CreateUpdateComponent as ProcessFuelConsumptionACComponent } from '@carbon/component/activity-config/non-ghg/fuel-consumption/create-update/create-update.component';
import { ElectricityHeatExportActivityDataCreateComponent } from '../non-ghg/electricity-heat-export/create/create.component';
import { FuelConsumptionActivityDataCreateComponent } from '../non-ghg/fuel-consumption/create/create.component';
import { CreateUpdateComponent as ProcessProductionLevelActivityDataComponent } from '../non-ghg/production-level-old/create-update/create-update.component';
import { WasteGasExportCreateComponent as ProcessWasteGasExportADComponent } from '../non-ghg/waste-gas-export/create/create.component';

import { PrecursorConsumptionActivityConfigCreateComponent } from '@carbon/component/activity-config/non-ghg/precursor-consumption/create/create.component';

import { ProductionLevelActivityConfigCreateComponent } from '@carbon/component/activity-config/non-ghg/production-level/create/create.component';
import { CarbonPriceActivityConfigCreateUpdateComponent } from '@carbon/component/activity-config/non-ghg/carbon-price/create-update/create-update.component';
import { CarbonPriceActivityDataCreateUpdateComponent } from '../non-ghg/carbon-price/create-update/create-update.component';
/* non-ghg */

const routes: Routes = [

    {
        path: 'activity',
        component: UpdateComponent,
        children: [
            {
                path: ActivityKeyIDEnum.PURCHASED_ELECTRICITY,
                children: [
                    {
                        path: 'update',
                        component: PurchasedEnergyActivtyConfigComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        component: PurchasedEnergyActivtyDataComponent,
                        outlet: 'activityData'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PURCHASED_ELECTRICITY }
            },
            {
                path: ActivityKeyIDEnum.PURCHASED_COOLING,
                children: [
                    {
                        path: 'update',
                        component: PurchasedEnergyActivtyConfigComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        component: PurchasedEnergyActivtyDataComponent,
                        outlet: 'activityData'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PURCHASED_COOLING }
            },
            {
                path: ActivityKeyIDEnum.PURCHASED_HEAT_STEAM,
                children: [
                    {
                        path: 'update',
                        component: PurchasedEnergyActivtyConfigComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        component: PurchasedEnergyActivtyDataComponent,
                        outlet: 'activityData'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PURCHASED_HEAT_STEAM }
            },
            // {
            //     path: ActivityKeyIDEnum.MOBILE_COMBUSTION,
            //     children: [
            //         {
            //             path: 'update',
            //             component: MobileCombustionActivtyConfigComponent,
            //             outlet: 'activityConfig'
            //         },
            //         {
            //             path: 'update',
            //             component: MobileCombustionActivtyDataComponent,
            //             outlet: 'activityData'
            //         }
            //     ],
            //     data: { activityKeyID: ActivityKeyIDEnum.MOBILE_COMBUSTION }
            // },
            {
                path: ActivityKeyIDEnum.STATIONARY_COMBUSTION,
                children: [
                    {
                        path: 'update',
                        component: StationaryCombustionActivtyConfigComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        component: StationaryCombustionActivtyDataComponent,
                        outlet: 'activityData'
                    }
                ],
                data: { activityKeyID: ActivityKeyIDEnum.STATIONARY_COMBUSTION }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_EMISSION,
                children: [
                    {
                        path: 'update',
                        component: ProcessEmissionActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        component: ProcessEmissionActivityDataCreateComponent,
                        outlet: 'activityData'
                    }
                ],
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_EMISSION,
                    action: FormAction.UPDATE,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA
                }
            },
            {
                path: 'waste-generated-in-operations',
                children: [
                    {
                        path: 'update',
                        component: WasteGeneratingInOperationsADComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: WasteGeneratingInOperationsACComponent,
                        outlet: 'activityConfig'
                    },
                ]
            },
            {
                path: ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT,
                children: [
                    {
                        path: 'update',
                        component: ElectricityHeatExportActivityDataCreateComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: HeatElectricityExportACComponent,
                        outlet: 'activityConfig'
                    }
                ],
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA,
                    action: FormAction.UPDATE
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_HEAT_EXPORT,
                children: [
                    {
                        path: 'update',
                        component: ElectricityHeatExportActivityDataCreateComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: HeatElectricityExportACComponent,
                        outlet: 'activityConfig'
                    }

                ],
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_HEAT_EXPORT,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA,
                    action: FormAction.UPDATE
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_FUEL_CONSUMPTION,
                children: [
                    {
                        path: 'update',
                        component: FuelConsumptionActivityDataCreateComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: ProcessFuelConsumptionACComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_FUEL_CONSUMPTION,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA,
                    action: FormAction.UPDATE
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION,
                children: [
                    {
                        path: 'update',
                        component: ElectricityConsumptionActivityDataCreateComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: ElectricityConsumptionActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    }
                ],
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA,
                    action: FormAction.UPDATE
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION,
                children: [
                    {
                        path: 'update',
                        component: ElectricityConsumptionActivityDataCreateComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: ElectricityConsumptionActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    }
                ],
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA,
                    action: FormAction.UPDATE
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT,
                children: [
                    {
                        path: 'update',
                        component: ProcessWasteGasExportADComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA,
                    action: FormAction.UPDATE
                }
            },

            {
                path: ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL,
                children: [
                    {
                        path: 'update',
                        component: ProcessProductionLevelActivityDataComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA,
                    action: FormAction.UPDATE
                }
            },

            {
                path: ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT,
                children: [
                    {
                        path: 'update',
                        component: ProcessProductionLevelActivityDataComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: { 
                    activityKeyID: ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA,
                    action: FormAction.UPDATE
                 }
            },

            {
                path: ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT,
                children: [
                    {
                        path: 'update',
                        component: ProcessProductionLevelActivityDataComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: { 
                    activityKeyID: ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA,
                    action: FormAction.UPDATE
                 }
            },

            {
                path: ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION,
                children: [
                    {
                        path: 'update',
                        component: ProcessProductionLevelActivityDataComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: PrecursorConsumptionActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: { 
                    activityKeyID: ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA,
                    action: FormAction.UPDATE
                 }
            },

            {
                path: ActivityKeyIDEnum.CHP_ATTRIBUTION,
                children: [
                    {
                        path: 'update',
                        component: ChpAttributionActivityDataComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: ChpAttributionActivityConfigComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: {
                    activityKeyID: ActivityKeyIDEnum.CHP_ATTRIBUTION,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA,
                    action: FormAction.UPDATE
                }
            },
            {
                path: ActivityKeyIDEnum.PURCHASED_PRECURSOR,
                children: [
                    {
                        path: 'update',
                        component: PurchasedPrecursorActivityDataComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: PurchasedPrecursorActivityConfigComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: {
                    activityKeyID: ActivityKeyIDEnum.PURCHASED_PRECURSOR,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA,
                    action: FormAction.UPDATE
                }
            },
            {
                path: ActivityKeyIDEnum.CARBON_PRICING,
                children: [
                    {
                        path: 'update',
                        component: CarbonPriceActivityDataCreateUpdateComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: CarbonPriceActivityConfigCreateUpdateComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: {
                    activityKeyID: ActivityKeyIDEnum.CARBON_PRICING,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA,
                    action: FormAction.UPDATE
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UpdateRoutingModule { }
