import { Component, OnInit ,Input ,Output,EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import {NgForm} from '@angular/forms';

import {AuthenticationService} from '../authentication.service';

import { User } from '../user'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user = new User("lolo","lolo@g.co","123456")
  name:string
  username:string
  password:string

  submitted = false;
  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
  }

   signup(): void {
    this.authentication.signup(this.user);
  }



  onSubmit() {
  //  this.signup()
  console.log("name : "+this.user.name)
  console.log("username : "+this.user.username)
  console.log("password : "+this.user.password)
  }

}
