import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
// RxJS
import { Observable, from } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { configurationRouter } from '../../utils/api-router';
// import { SelectItem } from '../../models';
@Injectable({
  providedIn: 'root',
})
export class ConfigutationService {
  constructor(private httpClient: _HttpClient) {}
  selectdata(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + configurationRouter.selectdata, payload);
  }
  sysParams(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + configurationRouter.sysParams, payload);
  }
}
