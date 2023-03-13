import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'projetos',
    loadChildren: () => import('./pages/projects/projects.module').then(module => module.ProjectsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
