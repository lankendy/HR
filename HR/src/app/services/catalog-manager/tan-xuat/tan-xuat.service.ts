import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
// RxJS
import { Observable, from } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { tanXuatRouter } from '../../../utils';

@Injectable({
  providedIn: 'root',
})
export class TanXuatService {
  constructor(private httpClient: _HttpClient) {}
  getListTanXuat(currentPage: number, pageSize: number, queryString: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      tanXuatRouter.getFilter +
        '?currentPage=' +
        currentPage +
        '&pageSize=' +
        pageSize +
        '&queryString=' +
        queryString,
    );
  }
  createTanXuat(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + tanXuatRouter.createTanXuat, payload);
  }
  getTanXuatById(id: string): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URL + tanXuatRouter.getTanXuatById + '/' + id);
  }
  editTanXuat(id: string, payload: any): Observable<any> {
    return this.httpClient.put(environment.BASE_API_URL + tanXuatRouter.editTanXuat + '/' + id, payload);
  }
  deleteTanXuat(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + tanXuatRouter.deleteTanXuat, payload);
  }
}
