import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityKeyIDEnum, MethodKeyIDEnum } from '@carbon/enum/activity.enum';

const routes: Routes = [
	{
		path: ActivityKeyIDEnum.WASTE_GENERATED_IN_OPERATIONS,
		loadChildren: () => import('./waste-generated/page/page.module').then(m => m.PageModule)
	},
	{
		path: ActivityKeyIDEnum.SPEND_BASED_METHOD,
		loadChildren: () => import('./spend-based/spend-based.module').then(m => m.SpendBasedModule)
	},
	{
		path: ActivityKeyIDEnum.EMPLOYEE_COMMUTING,
		loadChildren: () => import('./employee-commuting/employee-commuting.module').then(m => m.EmployeeCommutingModule)
	},
	// {
	// 	path: MethodKeyIDEnum.SPEND_BASED_METHOD,
	// 	loadChildren: () => import('./spend-based/spend-based.module').then(m => m.SpendBasedModule)
	// },
	{
		path: `method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}`,
		loadChildren: () => import('./method/average-based-method/list/average-based-method.module').then(m => m.AverageBasedMethodModule)
	},
	{
		path: `activity/${ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES}`,
		loadChildren: () => import('./activity/purchased-goods-services/purchased-goods-services.module').then(m => m.PurchasedGoodsServicesModule)
	},
	{
		path: `activity/${ActivityKeyIDEnum.CAPITAL_GOODS}`,
		loadChildren: () => import('./activity/capital-goods/capital-goods.module').then(m => m.CapitalGoodsModule)
	},
	// {
	// 	path: `activity/${ActivityKeyIDEnum.FUEL_ENERGY_RELATED_ACTIVITIES}`,
	// 	loadChildren: () => import('./activity/capital-goods/capital-goods.module').then(m => m.CapitalGoodsModule)
	// },
	// {
	// 	path: `activity/${ActivityKeyIDEnum.UPSTREAM_TRANSPORTATION_AND_DISTRIBUTION}`,
	// 	loadChildren: () => import('./activity/capital-goods/capital-goods.module').then(m => m.CapitalGoodsModule)
	// },
	// {
	// 	path: `activity/${ActivityKeyIDEnum.BUSINESS_TRAVEL}`,
	// 	loadChildren: () => import('./activity/capital-goods/capital-goods.module').then(m => m.CapitalGoodsModule)
	// },
	// {
	// 	path: `activity/${ActivityKeyIDEnum.UPSTREAM_LEASED_ASSETS}`,
	// 	loadChildren: () => import('./activity/capital-goods/capital-goods.module').then(m => m.CapitalGoodsModule)
	// },
	// {
	// 	path: `activity/${ActivityKeyIDEnum.DOWNSTREAM_TRANSPORTATION_AND_DISTRIBUTION}`,
	// 	loadChildren: () => import('./activity/capital-goods/capital-goods.module').then(m => m.CapitalGoodsModule)
	// },
	// {
	// 	path: `activity/${ActivityKeyIDEnum.DOWNSTREAM_LEASED_ASSETS}`,
	// 	loadChildren: () => import('./activity/capital-goods/capital-goods.module').then(m => m.CapitalGoodsModule)
	// },
	// {
	// 	path: `activity/${ActivityKeyIDEnum.PROCESSING_SOLD_PRODUCTS}`,
	// 	loadChildren: () => import('./activity/capital-goods/capital-goods.module').then(m => m.CapitalGoodsModule)
	// },
	// {
	// 	path: `activity/${ActivityKeyIDEnum.USE_SOLD_PRODUCTS}`,
	// 	loadChildren: () => import('./activity/capital-goods/capital-goods.module').then(m => m.CapitalGoodsModule)
	// },
	// {
	// 	path: `activity/${ActivityKeyIDEnum.END_OF_LIFE_TREATMENT_OF_SOLD_PRODUCTS}`,
	// 	loadChildren: () => import('./activity/capital-goods/capital-goods.module').then(m => m.CapitalGoodsModule)
	// },
	// {
	// 	path: `activity/${ActivityKeyIDEnum.FRANCHISES}`,
	// 	loadChildren: () => import('./activity/capital-goods/capital-goods.module').then(m => m.CapitalGoodsModule)
	// },
	// {
	// 	path: `activity/${ActivityKeyIDEnum.INVESTMENTS}`,
	// 	loadChildren: () => import('./activity/capital-goods/capital-goods.module').then(m => m.CapitalGoodsModule)
	// },
	// {
	// 	path: ActivityKeyIDEnum.EMPLOYEE_COMMUTING,
	// 	loadChildren: () => import('./employee-commuting/employee-commuting.module').then(m => m.EmployeeCommutingModule)
	// }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class Scope3RoutingModule { }
