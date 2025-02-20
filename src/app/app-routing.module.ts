import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'zikirmatik',
    loadChildren: () => import('./UI/zikirmatik/zikirmatik.module').then(m => m.ZikirmatikModule)
  },
  {
    path: '',
    redirectTo: 'zikirmatik',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
