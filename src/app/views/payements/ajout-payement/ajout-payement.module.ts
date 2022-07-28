import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjoutPayementRoutingModule } from './ajout-payement-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AjoutPayementRoutingModule,
    ReactiveFormsModule,
    FormsModule
  
  ]
})
export class AjoutPayementModule { }
