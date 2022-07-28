import { AjoutEntrepriseComponent } from './ajout-entreprise.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:AjoutEntrepriseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjoutEntrepriseRoutingModule { }
