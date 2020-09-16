import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
// RxJS
import { Observable, from } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { loaiCongTrinhRouter } from '../../../utils';

@Injectable({
  providedIn: 'root',
})
export class LoaiCongTrinhService {
  constructor(private httpClient: _HttpClient) {}
  getListLoaiCongTrinh(currentPage: number, pageSize: number, queryString: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      loaiCongTrinhRouter.getFilter +
        '?currentPage=' +
        currentPage +
        '&pageSize=' +
        pageSize +
        '&queryString=' +
        queryString,
    );
  }
  createLoaiCongTrinh(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + loaiCongTrinhRouter.createLoaiCongTrinh, payload);
  }
  getLoaiCongTrinhById(id: string): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URL + loaiCongTrinhRouter.getLoaiCongTrinhById + '/' + id);
  }
  editLoaiCongTrinh(id: string, payload: any): Observable<any> {
    return this.httpClient.put(environment.BASE_API_URL + loaiCongTrinhRouter.editLoaiCongTrinh + '/' + id, payload);
  }
  deleteLoaiCongTrinh(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + loaiCongTrinhRouter.deleteLoaiCongTrinh, payload);
  }

  getFilterLoaiCongTrinh(currentPage: number, pageSize: number, queryString: string): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URL + loaiCongTrinhRouter.getListFilter + '?currentPage=' +
        currentPage + '&pageSize=' + pageSize + '&queryString=' + queryString);
  }
}
