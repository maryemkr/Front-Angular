import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBureauxRoutingModule } from './list-bureaux-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListBureauxRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
  ]
})
export class ListBureauxModule { }
