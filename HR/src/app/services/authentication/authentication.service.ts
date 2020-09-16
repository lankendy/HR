import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { authenticationRouter } from 'src/app/utils';
import { _HttpClient } from '@delon/theme';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: _HttpClient
  ) { }

  forgotPassword(email: string, language: string): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URI.AUTHENTICATION_API + authenticationRouter.forgotPassword +
    "?email=" + email + "&language=" + language + "&_allow_anonymous=true");
  }

  registerAnUser(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URI.AUTHENTICATION_API + authenticationRouter.registerUser + "?_allow_anonymous=true", payload);
  }

  validateToken(token: string): Observable<any>{
    return this.httpClient.get(environment.BASE_API_URI.AUTHENTICATION_API + authenticationRouter.validateToken + "?_allow_anonymous=true&token=" + token);
  }

  changePassword(payload: any): Observable<any>{
    return this.httpClient.put(environment.BASE_API_URI.AUTHENTICATION_API + authenticationRouter.changePassword + "?_allow_anonymous=true", payload);
  }
}
