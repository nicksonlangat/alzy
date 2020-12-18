import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakerPage } from './taker.page';

const routes: Routes = [
  {
    path: '',
    component: TakerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakerPageRoutingModule {}
