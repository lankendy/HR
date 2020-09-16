import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
// RxJS
import { Observable, from } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { lichSuYCKNRouter } from '../../../utils';

@Injectable({
  providedIn: 'root',
})
export class LichSuYCKNService {
  constructor(private httpClient: _HttpClient) {}
  getListLichSuYCKN(id): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      lichSuYCKNRouter.getFilter +
        '?ycknId=' +
        id,
    );
  }
}
