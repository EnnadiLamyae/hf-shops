import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Component({
  selector: 'app-preferred-shops',
  templateUrl: './preferred-shops.component.html',
  styleUrls: ['./preferred-shops.component.scss']
})
export class PreferredShopsComponent implements OnInit {
  private preferredShopsUrl = '/api/preferredShops?username='
  private shops: any
  private pageSize = 8
  private total: number
  private headers = new Headers({'x-auth-token': localStorage.getItem('current-token')});

  constructor(private http:Http ) { }

  getPreferredShops(){
    this.http.get(this.preferredShopsUrl+localStorage.getItem('current-username'),{headers: this.headers})
    .subscribe(res => {
      this.shops = res.json()[0]
      this.total = res.json()[1]
    })
  }
  ngOnInit() {
    this.getPreferredShops()
  }

}
