import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GhgReportComponent } from './ghg-report.component';

const routes: Routes = [
	{
		path: '',
		component: GhgReportComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GhgReportRoutingModule { }
