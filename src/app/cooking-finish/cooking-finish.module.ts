import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { CookingFinishPageRoutingModule } from './cooking-finish-routing.module';

import { CookingFinishPage } from './cooking-finish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    CookingFinishPageRoutingModule
  ],
  declarations: [CookingFinishPage]
})
export class CookingFinishPageModule {}
