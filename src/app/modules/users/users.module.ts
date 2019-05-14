import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { SingleUserComponent } from './single-user/single-user.component';

@NgModule({
  declarations: [UsersComponent, SingleUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UsersModule { }
