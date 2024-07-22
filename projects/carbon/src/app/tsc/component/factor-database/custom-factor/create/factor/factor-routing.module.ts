import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FactorComponent } from './factor.component';
import { MobileCombustionComponent as refDataMobileCombustion } from './reference-data/mobile-combustion/mobile-combustion.component';
import { PurchasedEnergyComponent as refDataPurchasedEnergy } from './reference-data/purchased-energy/purchased-energy.component';
import { PurchasedEnergyComponent as factorValuePurchasedEnergy } from './value/emission/purchased-energy/purchased-energy.component';

import { ReferenceDataStationaryCombustionComponent } from './reference-data/stationary-combustion/stationary-combustion.component';
import { PurchasedEnergyComponent as purchasedEnergyEstimationFactorValue } from './value/estimation/purchased-energy/purchased-energy.component';
import { PurchasedGoodsServicesComponent } from './reference-data/purchased-goods-services/purchased-goods-services.component';

const routes: Routes = [
    {
        path: 'create',
        component: FactorComponent,
        children: [
            {
                path: 'emission/factor-value',
                component: factorValuePurchasedEnergy,
                outlet: 'value'
            },
            {
                path: 'estimation/purchased-electricity',
                component: purchasedEnergyEstimationFactorValue,
                outlet: 'value'
            },
            {
                path: 'estimation/purchased-cooling',
                component: purchasedEnergyEstimationFactorValue,
                outlet: 'value'
            },
            {
                path: 'estimation/purchased-heat-steam',
                component: purchasedEnergyEstimationFactorValue,
                outlet: 'value'
            },
            {
                path: 'estimation/purchased-goods-services',
                component: purchasedEnergyEstimationFactorValue,
                outlet: 'value'
            },
            {
                path: 'estimation/capital-goods',
                component: purchasedEnergyEstimationFactorValue,
                outlet: 'value'
            },
            {
                path: 'purchased-electricity',
                component: refDataPurchasedEnergy,
                outlet: 'reference'
            },
            {
                path: 'purchased-cooling',
                component: refDataPurchasedEnergy,
                outlet: 'reference'
            },
            {
                path: 'purchased-heat-steam',
                component: refDataPurchasedEnergy,
                outlet: 'reference'
            },
            {
                path: 'mobile-combustion',
                component: refDataMobileCombustion,
                outlet: 'reference'
            },
            {
                path: 'stationary-combustion',
                component: ReferenceDataStationaryCombustionComponent,
                outlet: 'reference'
            },
            {
                path: 'purchased-goods-and-services',
                component: PurchasedGoodsServicesComponent,
                outlet: 'reference'
            },
            {
                path: 'capital-goods',
                component: PurchasedGoodsServicesComponent,
                outlet: 'reference'
            }
        ]
    },
    {
        path: ':factorName/:factorID/version',
        children: [
            {
                path: 'create',
                component: FactorComponent,
                children: [
                    {
                        path: 'emission/factor-value',
                        component: factorValuePurchasedEnergy,
                        outlet: 'value'
                    },
                    {
                        path: 'estimation/purchased-electricity',
                        component: purchasedEnergyEstimationFactorValue,
                        outlet: 'value'
                    },
                    {
                        path: 'estimation/purchased-cooling',
                        component: purchasedEnergyEstimationFactorValue,
                        outlet: 'value'
                    },
                    {
                        path: 'estimation/purchased-heat-steam',
                        component: purchasedEnergyEstimationFactorValue,
                        outlet: 'value'
                    },
                    {
                        path: 'purchased-electricity',
                        component: refDataPurchasedEnergy,
                        outlet: 'reference'
                    },
                    {
                        path: 'purchased-cooling',
                        component: refDataPurchasedEnergy,
                        outlet: 'reference'
                    },
                    {
                        path: 'purchased-heat-steam',
                        component: refDataPurchasedEnergy,
                        outlet: 'reference'
                    },
                    {
                        path: 'mobile-combustion',
                        component: refDataMobileCombustion,
                        outlet: 'reference'
                    },
                    {
                        path: 'stationary-combustion',
                        component: ReferenceDataStationaryCombustionComponent,
                        outlet: 'reference'
                    },
                    {
                        path: 'purchased-goods-and-services',
                        component: PurchasedGoodsServicesComponent,
                        outlet: 'reference'
                    },
                    {
                        path: 'capital-goods',
                        component: PurchasedGoodsServicesComponent,
                        outlet: 'reference'
                    }
                ]
            },
            {
                path: ':versionID/update',
                component: FactorComponent,
                children: [
                    {
                        path: 'emission/factor-value',
                        component: factorValuePurchasedEnergy,
                        outlet: 'value'
                    },
                    {
                        path: 'estimation/purchased-electricity',
                        component: purchasedEnergyEstimationFactorValue,
                        outlet: 'value'
                    },
                    {
                        path: 'estimation/purchased-cooling',
                        component: purchasedEnergyEstimationFactorValue,
                        outlet: 'value'
                    },
                    {
                        path: 'estimation/purchased-heat-steam',
                        component: purchasedEnergyEstimationFactorValue,
                        outlet: 'value'
                    },
                    {
                        path: 'purchased-electricity',
                        component: refDataPurchasedEnergy,
                        outlet: 'reference'
                    },
                    {
                        path: 'purchased-cooling',
                        component: refDataPurchasedEnergy,
                        outlet: 'reference'
                    },
                    {
                        path: 'purchased-heat-steam',
                        component: refDataPurchasedEnergy,
                        outlet: 'reference'
                    },
                    {
                        path: 'mobile-combustion',
                        component: refDataMobileCombustion,
                        outlet: 'reference'
                    },
                    {
                        path: 'stationary-combustion',
                        component: ReferenceDataStationaryCombustionComponent,
                        outlet: 'reference'
                    },
                    {
                        path: 'purchased-goods-and-services',
                        component: PurchasedGoodsServicesComponent,
                        outlet: 'reference'
                    },
                    {
                        path: 'capital-goods',
                        component: PurchasedGoodsServicesComponent,
                        outlet: 'reference'
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FactorRoutingModule { }
