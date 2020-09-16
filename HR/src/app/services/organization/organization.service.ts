import { Injectable } from '@angular/core';

import { SettingsService, _HttpClient } from '@delon/theme';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  constructor(private http: _HttpClient) {}

  filter(filter: any) {
    return this.http.get(`${environment.BASE_API_URL}api/v${environment.API_VERSION}/cms/organizations/filter`, filter);
  }
}
