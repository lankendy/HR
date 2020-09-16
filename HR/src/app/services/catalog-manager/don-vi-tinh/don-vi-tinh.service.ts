import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
// RxJS
import { Observable, from } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { donViTinhRouter } from '../../../utils';

@Injectable({
  providedIn: 'root',
})
export class DonViTinhService {
  constructor(private httpClient: _HttpClient) {}
  getListDonViTinh(currentPage: number, pageSize: number, queryString: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      donViTinhRouter.getFilter +
        '?currentPage=' +
        currentPage +
        '&pageSize=' +
        pageSize +
        '&queryString=' +
        queryString,
    );
  }
  createDonViTinh(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + donViTinhRouter.createDonViTinh, payload);
  }
  getDonViTinhById(id: string): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URL + donViTinhRouter.getDonViTinhById + '/' + id);
  }
  editDonViTinh(id: string, payload: any): Observable<any> {
    return this.httpClient.put(environment.BASE_API_URL + donViTinhRouter.editDonViTinh + '/' + id, payload);
  }
  deleteDonViTinh(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + donViTinhRouter.deleteDonViTinh, payload);
  }
}
