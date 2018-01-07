import { Component , OnInit } from '@angular/core';
import { GeolocationService } from './geolocation.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router/src/router_state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GeolocationService]
})
export class AppComponent implements OnInit {
  
  public latitude : number
  public longitude : number
  constructor(private geolocationService: GeolocationService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.geolocationService.getLocation().subscribe(
      function(position) {
        this.latitude  = position.coords.latitude;
        this.longitude = position.coords.longitude;
         console.log("latitude : "+position.coords.latitude) 
         console.log("longitude : "+position.coords.longitude) 
        },
      function(error) { console.log("error "+error)}
    );
    
  }
}
