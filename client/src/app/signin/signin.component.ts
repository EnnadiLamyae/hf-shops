import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user = new User()
  
  constructor(private authentication: AuthenticationService ,private router:Router) { }

  ngOnInit() { }

  signin(user:User): any {
    this.authentication.signin(user)
  }

  onSubmit() {
    this.signin(this.user)
    this.router.navigate(['/shops'])
    window.location.reload();
  }
  
  }
