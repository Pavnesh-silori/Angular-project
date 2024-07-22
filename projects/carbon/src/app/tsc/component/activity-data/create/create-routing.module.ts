import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormAction } from '@library/tsc-common';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { ENTITY_KEY_ID_ENUM } from '@carbon/enum/entity.enum';

import { CreateComponent as ActivityConfigCreateComponent } from '@carbon/component/activity-config/create/create.component';

// ghg
// scope-1
import { ConfigCreateComponent as MobileCombustionActivtyConfigComponent } from '../../activity-config/ghg/scope-1/mobile-combustion2/create/config-create/config-create.component';
import { CreateUpdateComponent as MobileCombustionActivtyDataComponent } from '../../activity-data/ghg/scope-1/mobile-combustion/create-update/create-update.component';

import { CreateUpdateComponent as StationaryCombustionActivtyConfigComponent } from '../../activity-config/ghg/scope-1/stationary-combustion/create-update/create-update.component';
import { CreateComponent as StationaryCombustionActivtyDataComponent } from '../../activity-data/ghg/scope-1/stationary-combustion/create/create.component';

import { ProcessEmissionActivityConfigCreateComponent } from '@carbon/component/activity-config/ghg/scope-1/process-emission/create/create.component';
import { ProcessEmissionActivityDataCreateComponent } from '../ghg/scope-1/process-emission/create/create.component';
// /scope-1/

// scope-2
import { CreateComponent as PurchasedEnergyActivtyConfigComponent } from '../../activity-config/ghg/scope-2/purchased-energy/create/create.component';
import { CreateComponent as PurchasedEnergyActivtyDataComponent } from '../../activity-data/ghg/scope-2/create/create.component';
// /scope-2/

// scope-3
import { CreateComponent as WasteGeneratingInOperationsACComponent } from '@carbon/component/activity-config/ghg/scope-3/waste-generated/create/create.component';
import { CreateUpdateComponent as WasteGeneratingInOperationsADComponent } from '../ghg/scope-3/waste-generated/create-update/create-update.component';
// /scope-3/
// /ghg/


// non-ghg
import { CreateUpdateComponent as ChpAttributionActivityConfigComponent } from '@carbon/component/activity-config/non-ghg/chp-attributions/create-update/create-update.component';

import { CreateUpdateComponent as ChpAttributionActivityDataComponent } from '../non-ghg/chp-attribution/create-update/create-update.component';

import { ElectricityConsumptionActivityConfigCreateComponent } from '@carbon/component/activity-config/non-ghg/electricity-consumption/create/create.component';

import { ElectricityConsumptionActivityDataCreateComponent } from '../non-ghg/electricity-consumption/create/create.component';

// import { CreateUpdateComponent as ProcessHeatConsumptionActivityDataComponent } from '../non-ghg/process-consumption/create-update/create-update.component';

import { PrecursorConsumptionActivityConfigCreateComponent } from '@carbon/component/activity-config/non-ghg/precursor-consumption/create/create.component';

import { CreateUpdateComponent as ProcessProductionLevelActivityDataComponent } from '../non-ghg/production-level-old/create-update/create-update.component';

import { CreateUpdateComponent as HeatElectricityExportACComponent } from '@carbon/component/activity-config/non-ghg/electricity-heat-export/create-update/create-update.component';

import { ElectricityHeatExportActivityDataCreateComponent } from '../non-ghg/electricity-heat-export/create/create.component';

import { CreateUpdateComponent as PurchasedPrecursorActivityConfigComponent } from '@carbon/component/activity-config/non-ghg/purchased-precursor/create-update/create-update.component';
import { CreateUpdateComponent as PurchasedPrecursorActivityDataComponent } from '../non-ghg/purchased-precursor/create-update/create-update.component';

import { CreateUpdateComponent as ProcessFuelConsumptionACComponent } from '@carbon/component/activity-config/non-ghg/fuel-consumption/create-update/create-update.component';
import { FuelConsumptionActivityDataCreateComponent } from '../non-ghg/fuel-consumption/create/create.component';

import { WasteGasExportCreateComponent as ProcessWasteGasExportADComponent } from '../non-ghg/waste-gas-export/create/create.component';

import { ProductionLevelActivityConfigCreateComponent } from '@carbon/component/activity-config/non-ghg/production-level/create/create.component';
import { CarbonPriceActivityDataCreateUpdateComponent } from '../non-ghg/carbon-price/create-update/create-update.component';
import { CarbonPriceActivityConfigCreateUpdateComponent } from '@carbon/component/activity-config/non-ghg/carbon-price/create-update/create-update.component';
// non-ghg

const routes: Routes = [
    {
        path: 'activity',
        component: ActivityConfigCreateComponent,
        children: [
            // ghg
            // scope-1
            // {
            //     path: ActivityKeyIDEnum.MOBILE_COMBUSTION,
            //     children: [
            //         {
            //             path: 'create',
            //             component: MobileCombustionActivtyConfigComponent,
            //             outlet: 'activityConfig'
            //         },
            //         {
            //             path: 'create',
            //             component: MobileCombustionActivtyDataComponent,
            //             outlet: 'activityData'
            //         },
            //         {
            //             path: 'update',
            //             component: MobileCombustionActivtyConfigComponent,
            //             outlet: 'activityConfig'
            //         },
            //     ],
            //     data: { activityKeyID: ActivityKeyIDEnum.MOBILE_COMBUSTION }
            // },
            {
                path: ActivityKeyIDEnum.STATIONARY_COMBUSTION,
                children: [
                    {
                        path: 'create',
                        component: StationaryCombustionActivtyConfigComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
                        component: StationaryCombustionActivtyDataComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: StationaryCombustionActivtyConfigComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: { activityKeyID: ActivityKeyIDEnum.MOBILE_COMBUSTION }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_EMISSION,
                children: [
                    {
                        path: 'create',
                        component: ProcessEmissionActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
                        component: ProcessEmissionActivityDataCreateComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: ProcessEmissionActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_EMISSION,
                    action: FormAction.CREATE,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA
                }
            },
            // /scope-1/

            // scope-2
            {
                path: ActivityKeyIDEnum.PURCHASED_ELECTRICITY,
                children: [
                    {
                        path: 'create',
                        component: PurchasedEnergyActivtyConfigComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
                        component: PurchasedEnergyActivtyDataComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: PurchasedEnergyActivtyConfigComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PURCHASED_ELECTRICITY }
            },
            {
                path: ActivityKeyIDEnum.PURCHASED_COOLING,
                children: [
                    {
                        path: 'create',
                        component: PurchasedEnergyActivtyConfigComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
                        component: PurchasedEnergyActivtyDataComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: PurchasedEnergyActivtyConfigComponent,
                        outlet: 'activityConfig'
                    },

                ],
                data: { activityKeyID: ActivityKeyIDEnum.PURCHASED_COOLING }
            },
            {
                path: ActivityKeyIDEnum.PURCHASED_HEAT_STEAM,
                children: [
                    {
                        path: 'create',
                        component: PurchasedEnergyActivtyConfigComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
                        component: PurchasedEnergyActivtyDataComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: PurchasedEnergyActivtyConfigComponent,
                        outlet: 'activityConfig'
                    },

                ],
                data: { activityKeyID: ActivityKeyIDEnum.PURCHASED_HEAT_STEAM }
            },
            // /scope-2/

            // scope-3
            {
                path: ActivityKeyIDEnum.WASTE_GENERATED_IN_OPERATIONS,
                children: [
                    {
                        path: 'create',
                        component: WasteGeneratingInOperationsACComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
                        component: WasteGeneratingInOperationsADComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: WasteGeneratingInOperationsACComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: { activityKeyID: ActivityKeyIDEnum.MOBILE_COMBUSTION }
            },
            // /scope-3/
            // /ghg/


            // non-ghg
            {
                path: ActivityKeyIDEnum.CHP_ATTRIBUTION,
                children: [
                    {
                        path: 'create',
                        component: ChpAttributionActivityConfigComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
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
                    action: FormAction.CREATE
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION,
                children: [
                    {
                        path: 'create',
                        // component: ProcessElectricityConsumptionActivityConfigComponent,
                        component: ElectricityConsumptionActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
                        // component: ProcessElectricityConsumptionActivityDataComponent,
                        component: ElectricityConsumptionActivityDataCreateComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        // component: ProcessElectricityConsumptionActivityConfigComponent,
                        component: ElectricityConsumptionActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA,
                    action: FormAction.CREATE
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION,
                children: [
                    {
                        path: 'create',
                        component: ElectricityConsumptionActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
                        component: ElectricityConsumptionActivityDataCreateComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        component: ElectricityConsumptionActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA,
                    action: FormAction.CREATE
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION,
                children: [
                    {
                        path: 'create',
                        component: PrecursorConsumptionActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
                        component: ProcessProductionLevelActivityDataComponent,
                        // component: ProcessPrecursorConsumptionActivityDataComponent,
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
                    action: FormAction.CREATE
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT,
                children: [
                    {
                        path: 'create',
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
                        // component: ProcessPrecursorExportActivityDataComponent,
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
                    action: FormAction.CREATE
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL,
                children: [
                    {
                        path: 'create',
                        // component: ProcessProductionLevelActivityConfigComponent,
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
                        component: ProcessProductionLevelActivityDataComponent,
                        outlet: 'activityData'
                    },
                    {
                        path: 'update',
                        // component: ProcessProductionLevelActivityConfigComponent,
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: {
                    activityKeyID: ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL,
                    entity: ENTITY_KEY_ID_ENUM.ACTIVITY_DATA,
                    action: FormAction.CREATE
                }
            },
            {
                path: ActivityKeyIDEnum.PURCHASED_PRECURSOR,
                children: [
                    {
                        path: 'create',
                        component: PurchasedPrecursorActivityConfigComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
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
                    action: FormAction.CREATE
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT,
                children: [
                    {
                        path: 'create',
                        component: HeatElectricityExportACComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
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
                    action: FormAction.CREATE
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_HEAT_EXPORT,
                children: [
                    {
                        path: 'create',
                        component: HeatElectricityExportACComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
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
                    action: FormAction.CREATE
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_FUEL_CONSUMPTION,
                children: [
                    {
                        path: 'create',
                        component: ProcessFuelConsumptionACComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
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
                    action: FormAction.CREATE
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT,
                children: [
                    {
                        path: 'create',
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
                        // component: PIMEADComponent,
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
                    action: FormAction.CREATE
                }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT,
                children: [
                    {
                        path: 'create',
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
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
                    action: FormAction.CREATE
                }
            },
            {
                path: ActivityKeyIDEnum.CARBON_PRICING,
                children: [
                    {
                        path: 'create',
                        component: CarbonPriceActivityConfigCreateUpdateComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'create',
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
                    action: FormAction.CREATE
                }
            }
            // /non-ghg/
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateRoutingModule { }
