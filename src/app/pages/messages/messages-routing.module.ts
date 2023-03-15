import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { MessagesComponent } from './messages.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MessagesRoutingModule { }
