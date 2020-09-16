import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
// RxJS
import { Observable, from } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { nhomLoaiCongTrinhRouter } from '../../../utils';

@Injectable({
  providedIn: 'root',
})
export class NhomLoaiCongTrinhService {
  constructor(private httpClient: _HttpClient) {}
  getListNhomLoaiCongTrinh(currentPage: number, pageSize: number, queryString: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      nhomLoaiCongTrinhRouter.getFilter +
        '?currentPage=' +
        currentPage +
        '&pageSize=' +
        pageSize +
        '&queryString=' +
        queryString,
    );
  }
  createNhomLoaiCongTrinh(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + nhomLoaiCongTrinhRouter.createNhomLoaiCongTrinh, payload);
  }
  getNhomLoaiCongTrinhById(id: string): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URL + nhomLoaiCongTrinhRouter.getNhomLoaiCongTrinhById + '/' + id);
  }
  editNhomLoaiCongTrinh(id: string, payload: any): Observable<any> {
    return this.httpClient.put(environment.BASE_API_URL + nhomLoaiCongTrinhRouter.editNhomLoaiCongTrinh + '/' + id, payload);
  }
  deleteNhomLoaiCongTrinh(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + nhomLoaiCongTrinhRouter.deleteNhomLoaiCongTrinh, payload);
  }
}
