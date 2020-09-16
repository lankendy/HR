import { Injectable } from '@angular/core';

import { SettingsService, _HttpClient } from '@delon/theme';

import { environment } from '@env/environment';

import { authenticationRouter, idmUser } from '../../../utils';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: _HttpClient) {}

  login(model: any) {
    return this.http.post(environment.BASE_API_URI.AUTHENTICATION_API + authenticationRouter.getToken, model);
  }
  getLoginInfo() {
    return this.http.post(environment.BASE_API_URI.AUTHENTICATION_API + authenticationRouter.getLoginInfo);
  }
  getRightOfUser(userId: string, applicationId: string) {
    return this.http.get(
      // environment.BASE_API_URL + idmUser.getListRight + `/right?id=${userId}&applicationId=${applicationId}`,
      environment.BASE_API_URL + idmUser.getListRight + `right/owner`,
    );
  }
  filter(filter: any) {
    return this.http.get(
      // environment.BASE_API_URL + idmUser.getListRight + `/right?id=${userId}&applicationId=${applicationId}`,
      environment.BASE_API_URI.AUTHENTICATION_API + idmUser.filter,
      filter,
    );
  }
}
