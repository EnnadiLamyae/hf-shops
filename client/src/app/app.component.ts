import { Component , OnInit } from '@angular/core';
import { GeolocationService } from './geolocation.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GeolocationService]
})
export class AppComponent implements OnInit {
  public coords = {}
  constructor(private geolocationService: GeolocationService) { }

  ngOnInit() {
    this.coords = this.geolocationService.getLocation().subscribe(
      function(position) {
        this.coords.latitude  = position.coords.latitude;
        this.coords.longitude = position.coords.longitude;
         console.log("Position"+this.coords) },
      function(error) { console.log("error "+error)}
    );
    
  }
}
