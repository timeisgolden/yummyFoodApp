import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookingFinishPage } from './cooking-finish.page';

const routes: Routes = [
  {
    path: '',
    component: CookingFinishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookingFinishPageRoutingModule {}
