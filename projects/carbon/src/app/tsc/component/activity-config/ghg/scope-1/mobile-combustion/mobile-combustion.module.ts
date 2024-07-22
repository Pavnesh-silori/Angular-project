import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileCombustionRoutingModule } from './mobile-combustion-routing.module';
import{CreateUpdateModule}from'./create-update/create-update.module'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MobileCombustionRoutingModule,
    CreateUpdateModule
  ]
})
export class MobileCombustionModule { }
