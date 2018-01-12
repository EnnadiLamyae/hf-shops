import { Component, OnInit } from '@angular/core';

import { User } from '../user';

import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user = new User()
  
  constructor(private authentication: AuthenticationService) { }

  ngOnInit() { }

  signin(user:User): any {
    this.authentication.signin(user)
  }

  onSubmit() {
    this.signin(this.user)
  }
  
  }
