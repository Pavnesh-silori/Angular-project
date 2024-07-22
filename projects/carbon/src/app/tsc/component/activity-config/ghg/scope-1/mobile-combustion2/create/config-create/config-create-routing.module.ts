import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { ConfigCreateComponent } from './config-create.component';

const routes: Routes = [
    {
        path: '',
        component: ConfigCreateComponent,
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfigCreateRoutingModule { }
