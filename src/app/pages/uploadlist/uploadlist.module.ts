import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadlistPageRoutingModule } from './uploadlist-routing.module';

import { UploadlistPage } from './uploadlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadlistPageRoutingModule
  ],
  declarations: [UploadlistPage]
})
export class UploadlistPageModule {}
