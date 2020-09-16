import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
// RxJS
import { Observable, from } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { yeuCauKetNoiRouter } from '../../../utils';

@Injectable({
  providedIn: 'root',
})
export class YeuCauKetNoiService {
  constructor(private httpClient: _HttpClient) {}
  getListYeuCauKetNoi(page: number, size: number, queryString: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      yeuCauKetNoiRouter.getFilter +
        '?page=' +
        page +
        '&size=' +
        size +
        '&queryString=' +
        queryString,
    );
  }
  getFilterYeuCauKetNoi(page: number, size: number, queryString: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      yeuCauKetNoiRouter.getFilterV2 +
        '?page=' +
        page +
        '&size=' +
        size +
        '&queryString=' +
        queryString,
    );
  }
  createYeuCauKetNoi(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + yeuCauKetNoiRouter.createYeuCauKetNoi, payload);
  }
  createYeuCauKetNoiV2(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + yeuCauKetNoiRouter.createYeuCauKetNoiV2, payload);
  }
  refreshFTPAccount(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + yeuCauKetNoiRouter.refreshFTPAccountYeuCauKetNoi, payload);
  }
  sendToApproveYeuCauKetNoi(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + yeuCauKetNoiRouter.sendToApproveYeuCauKetNoi, payload);
  }
  sendToExpertYeuCauKetNoi(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + yeuCauKetNoiRouter.sendToExpertYeuCauKetNoi, payload);
  }
  trinhPheDuyet(payload: any): Observable<any>{
    return this.httpClient.post(environment.BASE_API_URL + yeuCauKetNoiRouter.trinhPheDuyetYeuCauKetNoi, payload);
  }
  cancelYeuCauKetNoi(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + yeuCauKetNoiRouter.sendToApproveYeuCauKetNoi, payload);
  }
  approval(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + yeuCauKetNoiRouter.approval, payload);
  }
  tuChoiYeuCauKetNoi(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + yeuCauKetNoiRouter.tuChoiYeuCauKetNoi, payload);
  }
  createFTPAccount(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + yeuCauKetNoiRouter.ftpAccount, payload);
  }
  getYeuCauKetNoiById(id: string): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URL + yeuCauKetNoiRouter.getYeuCauKetNoiById + '/' + id);
  }
  editYeuCauKetNoi(id: string, payload: any): Observable<any> {
    return this.httpClient.put(environment.BASE_API_URL + yeuCauKetNoiRouter.editYeuCauKetNoi + '/' + id, payload);
  }
  deleteYeuCauKetNoi(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URL + yeuCauKetNoiRouter.deleteYeuCauKetNoi, payload);
  }
  checkSoGiayPhep(payload: any) : Observable<any> {
    let re = /\-/gi;
    let url = '?sogiayphep=' + payload.soGiayPhep + '&ngaycapphep=' + payload.ngayCapPhep.replace(re, '/');
    return this.httpClient.get(environment.GOV_API_URL + yeuCauKetNoiRouter.checkSoGiayPhep + url);
  }
}
