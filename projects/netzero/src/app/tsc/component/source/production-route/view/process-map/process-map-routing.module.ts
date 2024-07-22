import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessMapComponent } from './process-map.component';

const routes: Routes = [
    {
        path: '',
        component: ProcessMapComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProcessMapRoutingModule { }
