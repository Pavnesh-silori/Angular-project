import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { FormAction } from '@library/tsc-common';
import { CreateComponent } from './create.component';


// ghg
// scope-1
import { CreateUpdateComponent as MobileCombustionACComponent2 } from '../ghg/scope-1/mobile-combustion/create-update/create-update.component';

import { CreateUpdateComponent as StationaryCombustionACComponentACComponent2 } from '../ghg/scope-1/stationary-combustion/create-update/create-update.component';

import { ProcessEmissionActivityConfigCreateComponent } from '@carbon/component/activity-config/ghg/scope-1/process-emission/create/create.component';
// /scope-1/

// scope-2
import { CreateComponent as Scope2ACComponent } from '../ghg/scope-2/purchased-energy/create/create.component';
// /scope-2/

// scope-3
import { CreateComponent as WasteGeneratedActivityConfig } from '../ghg/scope-3/waste-generated/create/create.component';
// /scope-3/
// /ghg/


// non-ghg
import { CreateUpdateComponent as CHPAttributionsActivityConfig } from '../non-ghg/chp-attributions/create-update/create-update.component';

import { ElectricityConsumptionActivityConfigCreateComponent } from '../non-ghg/electricity-consumption/create/create.component';

// import { CreateUpdateComponent as ProcessHeatConsumptionActivityConfig } from '../non-ghg/process-heat-consumption/create-update/create-update.component';

import { CreateUpdateComponent as ProcessFuelConsumptionACComponent } from '../non-ghg/fuel-consumption/create-update/create-update.component';

// import { CreateUpdateComponent as ProcessPrecursorConsumptionActivityConfig } from '../non-ghg/process-precursor-consumption/create-update/create-update.component';

import { PrecursorConsumptionActivityConfigCreateComponent } from '../non-ghg/precursor-consumption/create/create.component';

import { CreateUpdateComponent as PurchasedPrecursorActivityConfig } from '../non-ghg/purchased-precursor/create-update/create-update.component';

import { CreateUpdateComponent as HeatElectricityExportACComponent } from '../non-ghg/electricity-heat-export/create-update/create-update.component';

// import { CreateUpdateComponent as ProcessWasteGasExportACComponent } from '../non-ghg/process-waste-export/create-update/create-update.component';

// import { CreateUpdateComponent as ProcessPrecursorExportActivityConfig } from '../non-ghg/process-precursor-export/create-update/create-update.component';

// import { CreateUpdateComponent as PIMEACComponent } from '../non-ghg/intermediate-product-export/create-update/create-update.component';

// import { CreateUpdateComponent as ProcessProductionLevelActivityConfig } from '../non-ghg/process-production-level/create-update/create-update.component';

import { ProductionLevelActivityConfigCreateComponent } from '../non-ghg/production-level/create/create.component';

import { CarbonPriceActivityConfigCreateUpdateComponent } from '../non-ghg/carbon-price/create-update/create-update.component';
// /non-ghg/

import { ENTITY_KEY_ID_ENUM } from '@carbon/enum/entity.enum';

const routes: Routes = [
    {
        path: 'activity',
        component: CreateComponent,
        children: [
            // ghg
            // scope-1
            // {
            //     path: ActivityKeyIDEnum.MOBILE_COMBUSTION,
            //     children: [
            //         {
            //             path: 'create',
            //             component: MobileCombustionACComponent2,
            //             outlet: 'activityConfig'
            //         },
            //         {
            //             path: 'update',
            //             component: MobileCombustionACComponent2,
            //             outlet: 'activityConfig'
            //         },
            //     ], data: { activityKeyID: ActivityKeyIDEnum.MOBILE_COMBUSTION }
            // },
            {
                path: ActivityKeyIDEnum.STATIONARY_COMBUSTION,
                children: [
                    {
                        path: 'create',
                        component: StationaryCombustionACComponentACComponent2,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        component: StationaryCombustionACComponentACComponent2,
                        outlet: 'activityConfig'
                    },
                ],
                data: { keyID: ActivityKeyIDEnum.STATIONARY_COMBUSTION }
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
                        path: 'update',
                        component: ProcessEmissionActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_EMISSION }
            },
            // /scope-1/

            // scope-2
            {
                path: ActivityKeyIDEnum.PURCHASED_ELECTRICITY,
                children: [
                    {
                        path: 'create',
                        component: Scope2ACComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        component: Scope2ACComponent,
                        outlet: 'activityConfig'
                    }
                ],
                data: { keyID: ActivityKeyIDEnum.PURCHASED_ELECTRICITY }
            },
            {
                path: ActivityKeyIDEnum.PURCHASED_COOLING,
                children: [
                    {
                        path: 'create',
                        component: Scope2ACComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        component: Scope2ACComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: { keyID: ActivityKeyIDEnum.PURCHASED_COOLING }
            },
            {
                path: ActivityKeyIDEnum.PURCHASED_HEAT_STEAM,
                children: [
                    {
                        path: 'create',
                        component: Scope2ACComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        component: Scope2ACComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: { keyID: ActivityKeyIDEnum.PURCHASED_HEAT_STEAM }
            },
            // /scope-2/

            // scope-3
            {
                path: ActivityKeyIDEnum.WASTE_GENERATED_IN_OPERATIONS,
                children: [
                    {
                        path: 'create',
                        component: WasteGeneratedActivityConfig,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        component: WasteGeneratedActivityConfig,
                        outlet: 'activityConfig'
                    },
                ], data: { keyID: ActivityKeyIDEnum.WASTE_GENERATED_IN_OPERATIONS }

            },
            // /scope-3/
            // /ghg/


            // non-ghg
            {
                path: ActivityKeyIDEnum.CHP_ATTRIBUTION,
                children: [
                    {
                        path: 'create',
                        component: CHPAttributionsActivityConfig,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        component: CHPAttributionsActivityConfig,
                        outlet: 'activityConfig'
                    },
                ],
                data: { activityKeyID: ActivityKeyIDEnum.CHP_ATTRIBUTION }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION,
                children: [
                    {
                        path: 'create',
                        component: ElectricityConsumptionActivityConfigCreateComponent,
                        outlet: 'activityConfig',
                        data: { action: FormAction.CREATE }
                    },
                    {
                        path: 'update',
                        component: ElectricityConsumptionActivityConfigCreateComponent,
                        outlet: 'activityConfig',
                        data: { action: FormAction.UPDATE }
                    },
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_ELECTRICITY_CONSUMPTION }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION,
                children: [
                    {
                        path: 'create',
                        // component: ProcessHeatConsumptionActivityConfig,
                        component: ElectricityConsumptionActivityConfigCreateComponent,
                        outlet: 'activityConfig',
                        data: { action: FormAction.CREATE }
                    },
                    {
                        path: 'update',
                        // component: ProcessHeatConsumptionActivityConfig,
                        component: ElectricityConsumptionActivityConfigCreateComponent,
                        outlet: 'activityConfig',
                        data: { action: FormAction.UPDATE }
                    },
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_HEAT_CONSUMPTION }
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
                        path: 'update',
                        component: ProcessFuelConsumptionACComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_FUEL_CONSUMPTION }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION,
                children: [
                    {
                        path: 'create',
                        // component: ProcessPrecursorConsumptionActivityConfig,
                        component: PrecursorConsumptionActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        // component: ProcessPrecursorConsumptionActivityConfig,
                        component: PrecursorConsumptionActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION }
            },
            {
                path: ActivityKeyIDEnum.PURCHASED_PRECURSOR,
                children: [
                    {
                        path: 'create',
                        component: PurchasedPrecursorActivityConfig,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        component: PurchasedPrecursorActivityConfig,
                        outlet: 'activityConfig'
                    },
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PURCHASED_PRECURSOR }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT,
                children: [
                    {
                        path: 'create',
                        component: HeatElectricityExportACComponent,
                        outlet: 'activityConfig',
                        data: {
                            action: FormAction.CREATE,
                            entity: ENTITY_KEY_ID_ENUM.ACTIVITY_FORM
                        }
                    },
                    {
                        path: 'update',
                        component: HeatElectricityExportACComponent,
                        outlet: 'activityConfig',
                        data: {
                            action: FormAction.UPDATE,
                            entity: ENTITY_KEY_ID_ENUM.ACTIVITY_FORM
                        }
                    },
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_HEAT_EXPORT,
                children: [
                    {
                        path: 'create',
                        component: HeatElectricityExportACComponent,
                        outlet: 'activityConfig',
                        data: {
                            action: FormAction.CREATE,
                            entity: ENTITY_KEY_ID_ENUM.ACTIVITY_FORM
                        }
                    },
                    {
                        path: 'update',
                        component: HeatElectricityExportACComponent,
                        outlet: 'activityConfig',
                        data: {
                            action: FormAction.UPDATE,
                            entity: ENTITY_KEY_ID_ENUM.ACTIVITY_FORM
                        }
                    },
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_HEAT_EXPORT }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT,
                children: [
                    {
                        path: 'create',
                        // component: ProcessWasteGasExportACComponent,
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        // component: ProcessWasteGasExportACComponent,
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                ], data: { activityKeyID: ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT,
                children: [
                    {
                        path: 'create',
                        // component: ProcessPrecursorExportActivityConfig,
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        // component: ProcessPrecursorExportActivityConfig,
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT,
                children: [
                    {
                        path: 'create',
                        // component: PIMEACComponent,
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        // component: PIMEACComponent,
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT }
            },
            {
                path: ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL,
                children: [
                    {
                        path: 'create',
                        // component: ProcessProductionLevelActivityConfig,
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                    {
                        path: 'update',
                        // component: ProcessProductionLevelActivityConfig,
                        component: ProductionLevelActivityConfigCreateComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: { activityKeyID: ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL }
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
                        path: 'update',
                        component: CarbonPriceActivityConfigCreateUpdateComponent,
                        outlet: 'activityConfig'
                    },
                ],
                data: { activityKeyID: ActivityKeyIDEnum.CARBON_PRICING }
            }
            // non-ghg
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CreateTRoutingModule { }
