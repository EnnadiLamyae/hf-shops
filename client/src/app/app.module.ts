import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { GeolocationService } from './geolocation.service';
import { DataService } from './data.service';
import {AuthenticationService} from './authentication.service';

import { AppRoutingModule } from './app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ShopsComponent } from './shops/shops.component';
import { from } from 'rxjs/observable/from';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestimonialComponent,
    SignupComponent,
    SigninComponent,
    ShopsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [GeolocationService,DataService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
