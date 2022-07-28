import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembresComponent } from './membres.component';

const routes: Routes = [
  {path:'',component:MembresComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembresRoutingModule { }
