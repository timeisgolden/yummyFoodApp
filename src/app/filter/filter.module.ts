import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
  
import { FilterPageRoutingModule } from './filter-routing.module';

import { FilterPage } from './filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    FilterPageRoutingModule
  ],
  declarations: [FilterPage]
})
export class FilterPageModule {}
