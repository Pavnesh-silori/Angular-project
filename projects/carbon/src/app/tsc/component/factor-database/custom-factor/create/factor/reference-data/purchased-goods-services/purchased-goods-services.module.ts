import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasedEnergyRoutingModule } from './purchased-goods-services-routing.module';
import { PurchasedGoodsServicesComponent } from './purchased-goods-services.component';

import { 
    FormsModule, 
    ReactiveFormsModule 
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
    declarations: [ PurchasedGoodsServicesComponent ],
    imports: [
        CommonModule,
        PurchasedEnergyRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        NgxMatSelectSearchModule
    ],
    exports: [ PurchasedGoodsServicesComponent ]
})
export class PurchasedGoodsServicesModule { }
