import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentServicingComponent } from './equipment-servicing.component';

const routes: Routes = [
	{
		path: '',
		component: EquipmentServicingComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EquipmentServicingRoutingModule { }
