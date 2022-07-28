import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListAdherentRoutingModule } from './list-adherent-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListAdherentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ]
})
export class ListAdherentModule { }
