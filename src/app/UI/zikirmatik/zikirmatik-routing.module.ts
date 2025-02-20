import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ZikirmatikComponent} from "./zikirmatik.component";

const routes: Routes = [
  {
    path: '',
    component: ZikirmatikComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZikirmatikRoutingModule {}
