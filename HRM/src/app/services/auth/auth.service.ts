import { AccountService } from 'src/app/services/account/account.service';
import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt/lib/jwthelper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    // public jwtHelper: JwtHelperService,
    private accountService: AccountService
  ) { }

  public isAuthenticated(): boolean {
    // const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    // return !this.jwtHelper.isTokenExpired(token);
    return true;
  }

}
