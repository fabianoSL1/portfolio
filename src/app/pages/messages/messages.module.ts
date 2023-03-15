import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';

import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';


@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MatCardModule
  ]
})
export class MessagesModule { }
