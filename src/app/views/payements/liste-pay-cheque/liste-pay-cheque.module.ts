import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListePayChequeRoutingModule } from './liste-pay-cheque-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListePayChequeRoutingModule,
    Ng2SearchPipeModule
  ]
})
export class ListePayChequeModule { }
