import { Component , OnInit } from '@angular/core';
import { GeolocationService } from './geolocation.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GeolocationService]
})
export class AppComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit() {
   
  }
}
