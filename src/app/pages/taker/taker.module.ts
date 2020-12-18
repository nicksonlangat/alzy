import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakerPageRoutingModule } from './taker-routing.module';

import { TakerPage } from './taker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakerPageRoutingModule
  ],
  declarations: [TakerPage]
})
export class TakerPageModule {}
