import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';

import { ViewModule } from '../../target-benchmark/view/view.module';
import { PageModule } from '../page/page.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DialogModule } from '../create/sme/dialog/dialog.module';
import { CreateHomeModule as EnterpriseTargetCreateModule } from '../create/enterprise/create-home/create-home.module';
import { CriteriaProgressBarComponent } from '../criteria-progress-bar/criteria-progress-bar.component';

@NgModule({
    declarations: [
        LandingPageComponent,
        CriteriaProgressBarComponent
    ],
    imports: [
        CommonModule,
        LandingPageRoutingModule,
        ViewModule,
        PageModule,
        FontAwesomeModule,
        MatCardModule,
        MatButtonModule,
        MatExpansionModule,
        MatDialogModule,
        MatTooltipModule,
        DialogModule,
        EnterpriseTargetCreateModule
    ]
})
export class LandingPageModule { }
