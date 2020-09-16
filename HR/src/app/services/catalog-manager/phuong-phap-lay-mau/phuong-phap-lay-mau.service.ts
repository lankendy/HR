import { phuongPhapLayMauRouter } from './../../../utils/api-router';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhuongPhapLayMauService {

  constructor(private httpClient: _HttpClient) { }

  getListPhuongPhapLayMau(currentPage: number, pageSize: number, queryString: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      phuongPhapLayMauRouter.getFilter +
        '?currentPage=' +
        currentPage +
        '&pageSize=' +
        pageSize +
        '&queryString=' +
        queryString,
    );
  }
}
