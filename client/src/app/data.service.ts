import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Shop } from './shop';

@Injectable()
export class DataService {
  private shopsUrl = '/shops';

  constructor(private http: Http) { }

  getShops(): Promise<Shop[]> {
    return this.http.get(this.shopsUrl)
             .toPromise()
             .then(response => response.json() as Shop[])
             .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}
