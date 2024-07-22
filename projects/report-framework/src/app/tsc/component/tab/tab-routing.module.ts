import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabComponent } from './tab.component';

import { ReportTabTypeEnum } from '@report-framework/enum/report-tab-type.enum';
import { PdfComponent } from '../report-tracking/pdf/pdf.component';

const routes: Routes = [
	{
		path: 'tab',
		component: TabComponent,
		children: [
			{
				path: 'tracking',
				loadChildren: () => import('../report-tracking/report-tracking.module').then(m => m.ReportTrackingModule),
				data: { tabType: ReportTabTypeEnum.TRACKING }
			},
			{
				path: 'history',
				loadChildren: () => import('../report-history/report-history.module').then(m => m.ReportHistoryModule),
				data: { tabType: ReportTabTypeEnum.HISTORY }
			},
		]
	},
	{
		path: 'assignment',
		loadChildren: () => import('../assignment/assignment/assignment.module').then(m => m.AssignmentModule),
	},
	{
		path: 'detail',
		loadChildren: () => import('../report-config/stepper/stepper.module').then(m => m.StepperModule),
	},
	{
		path: 'config',
		loadChildren: () => import('../report-config/report-config.module').then(m => m.ReportConfigModule),
	},
	{
		path: 'pdf',
		component: PdfComponent
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabRoutingModule { }
