import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
// RxJS
import { Observable, from } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { tramQuanTracRouter } from 'src/app/utils';

@Injectable({
  providedIn: 'root',
})
export class TramQuanTracService {
  constructor(private httpClient: _HttpClient) {}
  getAllByGiayPhep(id: string, type: number): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      tramQuanTracRouter.getAllByGiayPhep +
        '?giayPhepID=' +
        id +
        '&typeYKCN=' +
        type,
    );
  }
}
