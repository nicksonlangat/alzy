import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { LoginPage } from '../pages/login/login.page';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private router: Router, private api: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);
    
    let authInfo = {
      authenticated: false
    };

    if (!authInfo.authenticated) {
      this.router.navigate(["login"]);
      return false;
    }

    return true;
  }
}