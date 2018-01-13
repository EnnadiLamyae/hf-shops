import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit , OnDestroy{
  private shopsUrl = '/api/shops?username='
  private preferredShopsUrl = '/api/preferredShops/add'
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded','x-auth-token': localStorage.getItem('current-token')});
  private shops: any
  private latitude:number
  private longitude:number
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
  getShops(latitude:number,longitude:number) {
    let promise = new Promise((resolve, reject) => {
      if(latitude != 0 && !isNaN(latitude) && !isNaN(longitude) && longitude != 0)
        this.http.get(this.shopsUrl+localStorage.getItem('current-username')+"&latitude="+latitude+"&longitude="+longitude, {headers: this.headers})
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
  
  dislike(id: string){
    console.log("Dislike  "+ id)
  }
  like(name: string){
    let body= "username="+localStorage.getItem('current-username')+"&name="+name
    this.http.post(this.preferredShopsUrl,body,{headers: this.headers})
    .subscribe(res => {
      window.location.reload()
      console.log("added to preferred list ")
    })
  }
  ngOnInit() {
    this.getCoordinates()
    this.latitude = parseFloat(localStorage.getItem('current-latitude'))
    this.longitude = parseFloat(localStorage.getItem('current-longitude'))
    this.total =parseFloat(localStorage.getItem('total'))
    this.getShops(this.latitude,this.longitude)
    console.log('pages: '+this.total)
  }

  ngOnDestroy(){
    localStorage.removeItem('current-latitude')
    localStorage.removeItem('current-longitude')
    localStorage.removeItem('total')
  }
}
