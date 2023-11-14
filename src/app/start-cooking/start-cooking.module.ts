import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { StartCookingPageRoutingModule } from './start-cooking-routing.module';

import { StartCookingPage } from './start-cooking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    StartCookingPageRoutingModule
  ],
  declarations: [StartCookingPage]
})
export class StartCookingPageModule {}
