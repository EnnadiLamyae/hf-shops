import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  connected:boolean
  
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('current-connected'))
      this.connected = true
    else 
      this.connected = false
  }

}
