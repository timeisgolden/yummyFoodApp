import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartCookingPage } from './start-cooking.page';

const routes: Routes = [
  {
    path: '',
    component: StartCookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartCookingPageRoutingModule {}
