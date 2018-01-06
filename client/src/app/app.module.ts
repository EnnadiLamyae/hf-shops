import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { GeolocationService } from './geolocation.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestimonialComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
