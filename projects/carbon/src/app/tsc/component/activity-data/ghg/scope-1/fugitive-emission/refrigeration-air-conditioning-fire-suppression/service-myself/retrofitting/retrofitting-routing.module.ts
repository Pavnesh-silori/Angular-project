import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetrofittingComponent } from './retrofitting.component';

const routes: Routes = [
	{
		path: '',
		component: RetrofittingComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RetrofittingRoutingModule { }
