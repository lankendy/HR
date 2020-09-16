import { _HttpClient } from '@delon/theme';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { giayPhep } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class GiayPhepService {

  constructor(private httpClient: _HttpClient) { }

  getFilterGiayPhep(currentPage: number, pageSize: number, queryString: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      giayPhep.getFilter +
      '?currentPage=' +
      currentPage +
      '&pageSize=' +
      pageSize +
      '&queryString=' +
      queryString,
    );
  }

  getListGiayPhepByUserId(currentPage: number, pageSize: number, queryString: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URL +
      giayPhep.getByUserId +
      '?currentPage=' +
      currentPage +
      '&pageSize=' +
      pageSize +
      '&queryString=' +
      queryString
    )
  }
  getGiayPhepById(id: string): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URL + giayPhep.getById + "/" + id);
  }

  getGiayPhepByLicenseNo(licenseNo: string): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URL + giayPhep.getByLicenseNo + "/" + encodeURIComponent(licenseNo) + '/get-by-code');
  }

  updateGiayPhepFtpInfo(id:string, payload: any): Observable<any> {
    return this.httpClient.put(environment.BASE_API_URL + giayPhep.updateFtpInfo + "/" + id, payload);
  }

  formatFtpUserName(soGiayPhep: string){
    return soGiayPhep.replace('/', '.');
  }

}
