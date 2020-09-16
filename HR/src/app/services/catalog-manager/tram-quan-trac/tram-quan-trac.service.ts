import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { tramQuanTrac } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class TramQuanTracService {

  constructor(
    private httpClient: _HttpClient
  ) { }

  getTramQuanTracById(id: string): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URL + tramQuanTrac.getById + '/' + id);
  }

  getListTramQuanTrac(giayPhepID: string, typeYKCN?: number): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URL + tramQuanTrac.getList);
  }

  getAllByGiayPhep(id: string, type: number): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      tramQuanTrac.getAllByGiayPhep +
        '?giayPhepID=' +
        id +
        '&typeYKCN=' +
        type,
    );
  }

}
