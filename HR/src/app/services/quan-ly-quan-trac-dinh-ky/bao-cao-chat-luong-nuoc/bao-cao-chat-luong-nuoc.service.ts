import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { environment } from '@env/environment';
import { _HttpClient } from '@delon/theme';
import { baoCaoChatLuongNuocRouter } from '../../../utils';
@Injectable({
  providedIn: 'root'
})
export class BaoCaoChatLuongNuocService {

  constructor(private httpClient: _HttpClient, private http: HttpClient) { }

  getListBaoCaoChatLuongNuoc(currentPage: number, pageSize: number, queryString: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      baoCaoChatLuongNuocRouter.getList +
      '?currentPage=' +
      currentPage +
      '&pageSize=' +
      pageSize +
      '&queryString=' +
      queryString,
    );
  }

  getBaoCaoChatLuongNuocById(id: string) {
    return this.httpClient.get(environment.BASE_API_URL + baoCaoChatLuongNuocRouter.getDetail + '/' + id);
  }

  getKQQTById(id: string) {
    return this.httpClient.get(environment.BASE_API_URL + baoCaoChatLuongNuocRouter.getKQQT + '/' + id);
  }

  createBaoCaoChatLuongNuoc(payload): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + baoCaoChatLuongNuocRouter.createBaoCaoChatLuongNuoc, payload);
  }

  updateBaoCaoChatLuongNuoc(id: string, payload): Observable<any> {
    return this.httpClient.put(environment.BASE_API_URL + baoCaoChatLuongNuocRouter.updateBaoCaoChatLuongNuoc + '/' + id, payload);
  }

  deleteManyBaoCaoChatLuongNuoc(payload: any): Observable<any> {
    return this.httpClient.post(
      environment.BASE_API_URL + baoCaoChatLuongNuocRouter.deleteManyBaoCaoChatLuongNuoc, payload);
  }

  readFile(File: any): Observable<any>
  {
    const frmData = new FormData();
    frmData.append('File', File);
    return this.httpClient.post(
      environment.BASE_API_URL + baoCaoChatLuongNuocRouter.readFile, frmData);
  }

  exportFile(tramQuanTracId: any): Observable<any>{
    return this.http.get(environment.BASE_API_URL + baoCaoChatLuongNuocRouter.exportFile + '/' + tramQuanTracId, { responseType: 'blob' } );
  }
}
