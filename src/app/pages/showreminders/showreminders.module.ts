import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowremindersPageRoutingModule } from './showreminders-routing.module';

import { ShowremindersPage } from './showreminders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowremindersPageRoutingModule
  ],
  declarations: [ShowremindersPage]
})
export class ShowremindersPageModule {}
