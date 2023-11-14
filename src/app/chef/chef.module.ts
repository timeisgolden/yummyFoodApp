import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChefPageRoutingModule } from './chef-routing.module';

import { ChefPage } from './chef.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    ChefPageRoutingModule
  ],
  declarations: [ChefPage]
})
export class ChefPageModule { }
