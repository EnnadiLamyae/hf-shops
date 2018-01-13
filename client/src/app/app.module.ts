import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgxPaginationModule} from 'ngx-pagination';

import { GeolocationService } from './geolocation.service';
import {AuthenticationService} from './authentication.service';

import { AppRoutingModule } from './app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ShopsComponent } from './shops/shops.component';
import { from } from 'rxjs/observable/from';
import { HomeComponent } from './home/home.component';
import { PreferredShopsComponent } from './preferred-shops/preferred-shops.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestimonialComponent,
    SignupComponent,
    SigninComponent,
    ShopsComponent,
    HomeComponent,
    PreferredShopsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [GeolocationService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
