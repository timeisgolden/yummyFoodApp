import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { MobileNumberPageRoutingModule } from './mobile-number-routing.module';

import { MobileNumberPage } from './mobile-number.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    MobileNumberPageRoutingModule
  ],
  declarations: [MobileNumberPage]
})
export class MobileNumberPageModule {}
