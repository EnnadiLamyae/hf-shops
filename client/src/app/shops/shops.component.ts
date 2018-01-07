import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Shop } from '../shop';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
  providers: [DataService]
})
export class ShopsComponent implements OnInit {

  shops: Shop[];
  constructor(private dataService: DataService) { }

  getShops(){
    return this.dataService.getShops().then(shops => this.shops = shops);
  }
  
  ngOnInit() {
    this.getShops();
  }

}
