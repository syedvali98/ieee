import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Custom Imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import {AngularGooglePlaceModule} from 'angular-google-place';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { RequestFormComponent } from './request/request-form/request-form.component';
import { NearbyBanksComponent } from './request/nearby-banks/nearby-banks.component';
import { LandingComponent } from './landing/landing.component';
import { PendingComponent } from './request/pending/pending.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    RequestFormComponent,
    NearbyBanksComponent,
    LandingComponent,
    PendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularGooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
