import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AverageBasedMethodComponent } from './average-based-method.component';

const routes: Routes = [
	{
		path: 'page',
		component: AverageBasedMethodComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AverageBasedMethodRoutingModule { }
