import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
// RxJS
import { Observable, from } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { loaiHinhGPRouter } from '../../../utils';

@Injectable({
  providedIn: 'root',
})
export class LoaiHinhGiayPhepService {
  constructor(private httpClient: _HttpClient) {}
  getListLoaiHinhGiayPhep(currentPage: number, pageSize: number, queryString: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      loaiHinhGPRouter.getFilter +
        '?currentPage=' +
        currentPage +
        '&pageSize=' +
        pageSize +
        '&queryString=' +
        queryString,
    );
  }
  createLoaiHinhGiayPhep(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + loaiHinhGPRouter.createLoaiHinhGP, payload);
  }
  getLoaiHinhGiayPhepById(id: string): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URL + loaiHinhGPRouter.getLoaiHinhGPById + '/' + id);
  }
  editLoaiHinhGiayPhep(id: string, payload: any): Observable<any> {
    return this.httpClient.put(environment.BASE_API_URL + loaiHinhGPRouter.editLoaiHinhGP + '/' + id, payload);
  }
  deleteLoaiHinhGiayPhep(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + loaiHinhGPRouter.deleteLoaiHinhGP, payload);
  }
}
