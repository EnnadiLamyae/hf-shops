import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private connected:boolean

  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
    if(localStorage.getItem('current-connected'))
      this.connected = true
    else 
      this.connected = false
  }

  signout(){
    this.authentication.signout()
  }

}
