import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { GeolocationService } from '../geolocation.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
  providers: [DataService]
})
export class ShopsComponent implements OnInit {

  shops
  coordinates:{
    latitude:number,
    longitude:number
  }
  page = 0
  pages
  private shopsUrl = '/api/shops?';
  
  constructor(private http:Http ,private geolocationService: GeolocationService) { }


  

  getCoordinates():any{
    this.geolocationService.getLocation().subscribe(
      function(position) {
        this.coordinates.latitude  = position.coords.latitude;
        this.coordinates.longitude = position.coords.longitude;
         console.log("latitude : "+position.coords.latitude) 
         console.log("longitude : "+position.coords.longitude) 
         
        },
      function(error) { console.log("error "+error)}
    )}
  getShops(page:number,latitude:number,longitude:number) {
    let promise = new Promise((resolve, reject) => {
      if(latitude != 0 && longitude != 0)
        this.http.get(this.shopsUrl+"latitude="+latitude+"&longitude="+longitude+"&page="+page)
              .toPromise()
              .then(
                res => { 
                  this.shops = res.json()[0]
                  this.pages = res.json()[1]
                  resolve()
                  },
                  msg => { 
                  reject(msg)
                  }
              )
    })
    return promise
  }

  
  ngOnInit() {
     this.getCoordinates()
    this.getShops(this.page,this.coordinates.latitude,this.coordinates.longitude)
  }

}
