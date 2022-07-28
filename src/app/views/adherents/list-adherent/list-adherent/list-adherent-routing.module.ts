import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAdherentComponent } from '../list-adherent.component';

const routes: Routes = [
  {path:'',component:ListAdherentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAdherentRoutingModule { }
