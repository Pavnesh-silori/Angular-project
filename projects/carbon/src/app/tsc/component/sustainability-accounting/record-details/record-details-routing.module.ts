import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordDetailsComponent } from './record-details.component' 
const routes: Routes = [
    {
        path: '',
        component: RecordDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecordDetailsRoutingModule { }