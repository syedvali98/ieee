import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { RequestFormComponent } from './request/request-form/request-form.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'signin', component:SignInComponent},
  {path:'signup', component:SignUpComponent},
  {path:'receive', component:RequestFormComponent},
  {path:'home', component:LandingComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
