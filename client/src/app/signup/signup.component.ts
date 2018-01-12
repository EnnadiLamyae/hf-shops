import { Component, OnInit ,Input ,Output,EventEmitter } from '@angular/core';
import {FormsModule } from '@angular/forms';

import {AuthenticationService} from '../authentication.service';

import { User } from '../user'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user = new User()
  constructor(private authentication: AuthenticationService) { }

  ngOnInit() { }

  signup(user:User): any {
    this.authentication.signup(user)
  }

  onSubmit() {
   this.signup(this.user)
  }

}
