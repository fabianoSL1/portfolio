import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardUserComponent } from './card-user/card-user.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardUserComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatButtonModule
  ]
})
export class HomeModule { }
