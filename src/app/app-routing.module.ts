import { NgModule } from '@angular/core';
import { Routes, RouterModule, LoadChildren, CanActivate } from '@angular/router';
// import { HomeComponent } from './home/home.component'
// import { AboutComponent } from './about/about.component'
import { AuthGuard } from './modules/shared/guards/auth.guard'
import { NoAuthGuard } from './modules/shared/guards/no-auth.guard'

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: './modules/users/users.module#UsersModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule',
    canActivate: [NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
