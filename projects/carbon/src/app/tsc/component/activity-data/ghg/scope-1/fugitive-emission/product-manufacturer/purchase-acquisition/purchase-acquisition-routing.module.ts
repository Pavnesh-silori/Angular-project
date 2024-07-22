import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseAcquisitionComponent } from './purchase-acquisition.component';

const routes: Routes = [
	{
		path: '',
		component: PurchaseAcquisitionComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PurchaseAcquisitionRoutingModule { }
