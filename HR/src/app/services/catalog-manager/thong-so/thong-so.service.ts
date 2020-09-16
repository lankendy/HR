import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
// RxJS
import { Observable, from } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { thongSoRouter } from '../../../utils';

@Injectable({
  providedIn: 'root',
})
export class ThongSoService {
  constructor(private httpClient: _HttpClient) {}
  getListThongSo(currentPage: number, pageSize: number, queryString: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      thongSoRouter.getFilter +
        '?currentPage=' +
        currentPage +
        '&pageSize=' +
        pageSize +
        '&queryString=' +
        queryString,
    );
  }
  createThongSo(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + thongSoRouter.createThongSo, payload);
  }
  getThongSoById(id: string): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URL + thongSoRouter.getThongSoById + '/' + id);
  }
  editThongSo(id: string, payload: any): Observable<any> {
    return this.httpClient.put(environment.BASE_API_URL + thongSoRouter.editThongSo + '/' + id, payload);
  }
  deleteThongSo(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + thongSoRouter.deleteThongSo, payload);
  }
  getThongSoByTramQuanTracId(tramQuanTracId: string){
    return this.httpClient.get(environment.BASE_API_URL + thongSoRouter.getThongSoByTramQuanTracId + '/' + tramQuanTracId);
  }
}
