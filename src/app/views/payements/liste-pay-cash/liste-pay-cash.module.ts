import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListePayCashRoutingModule } from './liste-pay-cash-routing.module';
import { ListePayChequeComponent } from '../liste-pay-cheque/liste-pay-cheque.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ListePayCashRoutingModule,
    Ng2SearchPipeModule
  ]
})
export class ListePayCashModule { }
