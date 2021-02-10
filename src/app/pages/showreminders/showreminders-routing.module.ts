import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowremindersPage } from './showreminders.page';

const routes: Routes = [
  {
    path: '',
    component: ShowremindersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowremindersPageRoutingModule {}
