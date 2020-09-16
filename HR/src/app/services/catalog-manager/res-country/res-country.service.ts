import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
// RxJS
import { Observable, from } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { resCountryRouter } from '../../../utils';

@Injectable({
  providedIn: 'root',
})
export class ResCountryService {
  constructor(private httpClient: _HttpClient) {}
  getListResCountry(payload: any): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URI.FILENET_API + resCountryRouter.getListResCountry, payload);
  }
  createResCountry(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + resCountryRouter.createResCountry, payload);
  }
  getResCountryById(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + resCountryRouter.getResCountryById, payload);
  }
  editResCountry(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + resCountryRouter.editResCountry, payload);
  }
  deleteResCountry(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + resCountryRouter.deleteResCountry, payload);
  }
}
