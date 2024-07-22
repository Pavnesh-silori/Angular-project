import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxEchartsModule } from 'ngx-echarts';

//tsc-library 
import { SearchBarOneModule } from '@library/tsc-common';

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        NgbModule,
        MatTableModule,
        FontAwesomeModule,
        MatSortModule,
        FormsModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        SearchBarOneModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
    ],
    exports: [
        PageComponent
    ]
})
export class PageModule { }

