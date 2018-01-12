import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit , OnDestroy{
  private shopsUrl = '/api/shops?'
  private headers = new Headers({'Content-Type': 'application/json','x-auth-token': localStorage.getItem('current-token')});
  private shops: any
  private latitude:number
  private longitude:number
  private page = 0
  private total: number
  private pageSize = 12
 
  
  constructor(private http:Http ,private geolocationService: GeolocationService) { }


  

  getCoordinates():any{
    this.geolocationService.getLocation().subscribe(
      function(position) {
        localStorage.setItem('current-latitude',position.coords.latitude)
        localStorage.setItem('current-longitude',position.coords.longitude)
         console.log("latitude : "+position.coords.latitude) 
         console.log("longitude : "+position.coords.longitude) 
         
        },
      function(error) { console.log("error "+error)}
    )}
  getShops(page:number,latitude:number,longitude:number) {
    let promise = new Promise((resolve, reject) => {
      if(latitude != 0 && longitude != 0)
        this.http.get(this.shopsUrl+"latitude="+latitude+"&longitude="+longitude, {headers: this.headers})
              .toPromise()
              .then(
                res => { 
                  this.shops = res.json()[0]
                  localStorage.setItem('total',res.json()[1])
                  resolve()
                  },
                  msg => { 
                  reject(msg)
                  }
              )
    })
    return promise
  }
  getShopsByPage(page:number){
    this.getShops(page,this.latitude,this.longitude)
  }
  
  ngOnInit() {
    this.getCoordinates()
    this.latitude = parseFloat(localStorage.getItem('current-latitude'))
    this.longitude = parseFloat(localStorage.getItem('current-longitude'))
    this.total =parseFloat(localStorage.getItem('total'))
    this.getShops(this.page,this.latitude,this.longitude)
    console.log('pages: '+this.total)
  }

  ngOnDestroy(){
    localStorage.removeItem('current-latitude')
    localStorage.removeItem('current-longitude')
    localStorage.removeItem('total')
  }
}
