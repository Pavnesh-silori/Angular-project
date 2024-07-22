import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CarbonRoutingModule } from './list-routing.module';
import { CarbonComponent } from './list.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EllipsisPipeModule } from '@library/tsc-common';

// import { FeatureDirectiveModule } from '@rootNetZero/directive/feature.directive';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { SearchBarOneModule } from '@library/tsc-common';
// import { DeleteDialog } from '@rootNetZero/component/_shared/delete/delete-dialog.component';
import { FunnelFilterModule } from '@library/tsc-common'; 
import { CarbonFilterModule } from '@carbon/component/_shared/filter/filter.module';
// import { ActivityConfigSelectionModule } from '@carbon/component/activity-config/activity-config-selection/activity-config-selection.module';
import { ActivityConfigSelectionModule } from '@carbon/component/activity-config/activity-config-selection-dialog/activity-config-selection.module';

// library
import { DateFilterModule } from '@library/date';
// / library
@NgModule({
    declarations: [ 
        CarbonComponent, 
        // DeleteDialog 
    ],
    imports: [
        CommonModule,
        CarbonRoutingModule,
        NgbModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSortModule,
        MatInputModule,
        MatChipsModule,
        MatCardModule,
        MatTableModule,
        MatRippleModule,
        MatButtonModule,
        MatSelectModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatButtonToggleModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatDialogModule,
        EllipsisPipeModule,
        SearchBarOneModule,
        FunnelFilterModule,
        // FeatureDirectiveModule,
        NgxDaterangepickerMd.forRoot(),
        MatSlideToggleModule,
        CarbonFilterModule,
        DateFilterModule,

        ActivityConfigSelectionModule
    ],
})
export class CarbonModule { }
