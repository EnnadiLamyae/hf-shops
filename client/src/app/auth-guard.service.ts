import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }
  checkLogin(url){
    return localStorage.getItem("current-connected") === 'true'
  }

}
