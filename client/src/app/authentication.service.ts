import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';

import { User } from './user';


@Injectable()
export class AuthenticationService {

  private signupUrl = '/api/signup'
  private signinUrl = '/api/signin'
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  signup(user: User): Promise<User> {
    return this.http
      .post(this.signupUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(res => {
        res.json() as User
        this.signin(user)
      })
      .catch(this.handleError);
  }

  signin(user: User): Promise<string>  {
    return this.http.post(this.signinUrl, JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then(res => {
               localStorage.setItem("current-username",user.username)
               localStorage.setItem("current-token",res.json().token)
               localStorage.setItem("current-connected", 'true')
              console.log("Token : "+ res.json().token)
            })
            .catch(this.handleError)
    
  }

  signout() {
    localStorage.removeItem('current-username')
    localStorage.removeItem('current-token')
    localStorage.removeItem('current-connected')
  }

  private handleError(error: any): Promise<any> {
    localStorage.removeItem('current-username')
    localStorage.removeItem('current-token')
    localStorage.removeItem('current-connected')
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}
