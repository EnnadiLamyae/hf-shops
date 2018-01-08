import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import { User } from './user';

@Injectable()
export class AuthenticationService {

  private signupUrl = '/api/signup';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  signup(user: User): Promise<User> {
    return this.http
      .post(this.signupUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}
