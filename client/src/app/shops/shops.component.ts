import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit{

  private shopsUrl = '/api/shops?username='
  private preferredShopsUrl = '/api/preferredShops/add'
  private dislikedShopsUrl = '/api/shops/dislike'
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
        },
      function(error) { console.log("error "+error)}
  )}

  getShops() {
    let promise = new Promise((resolve, reject) => {
      if(isNaN(this.latitude) || isNaN(this.longitude)){
        this.getCoordinates()
        this.latitude = parseFloat(localStorage.getItem('current-latitude'))
        this.longitude = parseFloat(localStorage.getItem('current-longitude'))
        this.total = parseFloat(localStorage.getItem('total'))
      }
      if(!isNaN(this.latitude) && !isNaN(this.longitude))
        this.http.get(this.shopsUrl+localStorage.getItem('current-username')+"&latitude="+this.latitude+"&longitude="+this.longitude, {headers: this.headers})
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
    let body= "username="+localStorage.getItem('current-username')+"&id="+id
    this.http.post(this.dislikedShopsUrl,body,{headers: this.headers})
    .subscribe(res => {
      this.getShops()
      console.log("Dislike  "+ id)
    })
  }
  like(id: string){
    let body= "username="+localStorage.getItem('current-username')+"&id="+id
    this.http.post(this.preferredShopsUrl,body,{headers: this.headers})
    .subscribe(res => {
      this.getShops()
    })
  }
  ngOnInit() {
    this.getShops()
  }
}
