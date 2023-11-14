import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
 
import { GroceryDetailsPageRoutingModule } from './grocery-details-routing.module';

import { GroceryDetailsPage } from './grocery-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    GroceryDetailsPageRoutingModule
  ],
  declarations: [GroceryDetailsPage]
})
export class GroceryDetailsPageModule {}
