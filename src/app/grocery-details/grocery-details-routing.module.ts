import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroceryDetailsPage } from './grocery-details.page';

const routes: Routes = [
  {
    path: '',
    component: GroceryDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroceryDetailsPageRoutingModule {}
