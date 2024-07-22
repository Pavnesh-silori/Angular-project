import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsgReportingTabComponent } from './esg-reporting-tab.component';

const routes: Routes = [
	{
		path: 'tab',
		component: EsgReportingTabComponent,
		children: [
			{
				path: 'preference',
				loadChildren: () => import('./reporting-preference/reporting-preference.module').then(m => m.ReportingPreferenceModule),
			},
            {
                path: 'esg-metrics',
                loadChildren: () => import('./esg-metrics/esg-metrics.module').then(m => m.EsgMetricsModule)
            }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EsgReportingTabRoutingModule { }
