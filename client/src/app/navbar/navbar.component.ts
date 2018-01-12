import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private connected:boolean

  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('current-connected'))
      this.connected = true
    else 
      this.connected = false
    console.log("auth state : "+ this.connected)
  }

  signout(){
    this.authentication.signout()
    window.location.reload();
    this.router.navigate([''])
  }

}
