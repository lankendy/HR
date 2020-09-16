import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
// RxJS
import { Observable, from } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { loaiTramRouter } from '../../../utils';

@Injectable({
  providedIn: 'root',
})
export class LoaiTramService {
  constructor(private httpClient: _HttpClient) {}
  getListLoaiTram(currentPage: number, pageSize: number, queryString: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      loaiTramRouter.getFilter +
        '?currentPage=' +
        currentPage +
        '&pageSize=' +
        pageSize +
        '&queryString=' +
        queryString,
    );
  }
  createLoaiTram(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + loaiTramRouter.createLoaiTram, payload);
  }
  getLoaiTramById(id: string): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URL + loaiTramRouter.getLoaiTramById + '/' + id);
  }
  editLoaiTram(id: string, payload: any): Observable<any> {
    return this.httpClient.put(environment.BASE_API_URL + loaiTramRouter.editLoaiTram + '/' + id, payload);
  }
  deleteLoaiTram(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + loaiTramRouter.deleteLoaiTram, payload);
  }
}
