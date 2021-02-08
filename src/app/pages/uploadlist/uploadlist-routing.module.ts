import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadlistPage } from './uploadlist.page';

const routes: Routes = [
  {
    path: '',
    component: UploadlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadlistPageRoutingModule {}
