import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferenceDataStationaryCombustionComponent } from './stationary-combustion.component';

const routes: Routes = [
    {
        path: '', 
        component: ReferenceDataStationaryCombustionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReferenceDataStationaryCombustionRoutingModule { }
