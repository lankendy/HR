import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
// RxJS
import { Observable, from } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { phuongXaRouter } from '../../../utils';

@Injectable({
  providedIn: 'root',
})
export class PhuongXaService {
  constructor(private httpClient: _HttpClient) {}
  getTinhThanhPhuongXaQuanHuyen(maTinhThanh: string, maQuanHuyen: string, maPhuongXa: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      phuongXaRouter.getTenPhuongXaQuanHuyenTinhThanh +
        '?maTinhThanh=' +
        maTinhThanh +
        '&maQuanHuyen=' +
        maQuanHuyen +
        '&maPhuongXa=' +
        maPhuongXa,
    );
  }
}
