import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import { Router } from '@angular/router';

import { User } from './user';



@Injectable()
export class AuthenticationService {

  private signupUrl = '/api/signup'
  private signinUrl = '/api/signin'
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http,private router:Router) { }

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
               localStorage.setItem("current-connected","true")
               this.router.navigate(['/shops'])
               window.location.reload();
            })
            .catch(this.handleError)
    
  }

  signout() {
    localStorage.removeItem('current-username')
    localStorage.removeItem('current-token')
    localStorage.removeItem('current-connected')
    window.location.reload();
    this.router.navigate([''])
  }

  private handleError(error: any): Promise<any> {
    localStorage.removeItem('current-username')
    localStorage.removeItem('current-token')
    localStorage.removeItem('current-connected')
    if(error._body.indexOf("Authentication error") !== -1)
      window.alert("Error : Credentials are not correct .")
    if(error._body.indexOf("E11000 duplicate key error index") !== -1)
      window.alert("Error : This email is already on use.")
    return Promise.reject(error.message || error);
  }
}
