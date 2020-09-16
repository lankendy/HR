import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { nhapLieuDinhKyRouter } from 'src/app/utils';
import { Observable, from } from 'rxjs';
import { _HttpClient } from '@delon/theme';

@Injectable({
  providedIn: 'root'
})
export class NhapLieuDinhKyService {


  constructor(private httpClient: _HttpClient) { }

  getListNhapLieuDinhKi(licenseNo?: string, constructionType?: string, dateFrom?: string, dateTo?: string, pageSize?: number, currentPage?:number, fullTextSearch?: string): Observable<any> {
    let url = environment.BASE_API_URI.IOT_INGEST_SERVICE_API + nhapLieuDinhKyRouter.getFilterPeriodicIndicatorHistory + "?";
    if(licenseNo) url = url + "&licenseNo=" + licenseNo;
    if(constructionType) url = url + "&constructionType=" + constructionType;
    if(dateFrom) url = url + "&dateFrom=" + dateFrom;
    if(dateTo) url = url + "&dateTo=" + dateTo;
    if(pageSize) url = url + "&pageSize=" + pageSize;
    if(currentPage) url = url + "&currentPage=" + currentPage;
    if(fullTextSearch) url = url + "&fullTextSearch=" + fullTextSearch;
    return this.httpClient.get(url);
    // return this.httpClient.get(environment.INDICATOR_API_URL + nhapLieuDinhKyRouter.getFilter);
  }

  getFilterIndicator(licenseNo?: string, inputDate?: string, stationSymbol?: string, paramSymbol?: string, dateFrom?: string, dateTo?: string, pageSize?: number, currentPage?:number, fullTextSearch?: string): Observable<any> {
    let url = environment.BASE_API_URI.IOT_INGEST_SERVICE_API + nhapLieuDinhKyRouter.getFilterIndicator + "?";
    if(licenseNo) url = url + "&licenseNo=" + licenseNo;
    if(inputDate) url = url + "&inputDate=" + inputDate;
    if(stationSymbol) url = url + "&stationSymbol=" + stationSymbol;
    if(paramSymbol) url = url + "&stationSymbol=" + paramSymbol;
    if(dateFrom) url = url + "&dateFrom=" + dateFrom;
    if(dateTo) url = url + "&dateTo=" + dateTo;
    if(pageSize) url = url + "&pageSize=" + pageSize;
    if(currentPage) url = url + "&currentPage=" + currentPage;
    if(fullTextSearch) url = url + "&fullTextSearch=" + fullTextSearch;
    return this.httpClient.get(url);
  }

  createMultiDulieuDinhKy(payload: any): Observable<any> {
    return this.httpClient.post(environment.BASE_API_URI.IOT_INGEST_SERVICE_API + nhapLieuDinhKyRouter.createMultiple, payload);
  }



}
