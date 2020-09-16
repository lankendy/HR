import { ftpRouter } from './../../utils/api-router';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { _HttpClient } from '@delon/theme';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FtpManagerService {

  constructor(private httpClient: _HttpClient) { }

  createFtpAccount(payload): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URI.FTP_SERVICE_API + ftpRouter.createFtpUser, payload);
  }

  checkExist(parentId: string): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URI.FTP_SERVICE_API + ftpRouter.checkExist + '/' + parentId);
  }

  getDetailFtp(parentId: string): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URI.FTP_SERVICE_API + ftpRouter.getByParentId + '/' + parentId);
  }

  generateNewPassword(parentId: string): Observable<any> {
    return this.httpClient.put(environment.BASE_API_URI.FTP_SERVICE_API + ftpRouter.generateNewPassword + '/' + parentId);
  }
}
