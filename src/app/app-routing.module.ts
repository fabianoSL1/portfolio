import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'projetos',
    loadChildren: () => import('./pages/projects/projects.module').then(module => module.ProjectsModule),
  },
  {
    path: 'mensagens',
    loadChildren: () => import('./pages/messages/messages.module').then(module => module.MessagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
