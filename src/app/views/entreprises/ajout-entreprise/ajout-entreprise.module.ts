import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjoutEntrepriseRoutingModule } from './ajout-entreprise-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AjoutEntrepriseRoutingModule,
    
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AjoutEntrepriseModule { }
