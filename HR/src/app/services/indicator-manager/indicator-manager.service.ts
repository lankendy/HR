import { formatDate } from '@angular/common';
import { indicatorRouter } from './../../utils/api-router';
import { environment } from '@env/environment';
import { _HttpClient } from '@delon/theme';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndicatorManagerService {

  constructor(private httpClient: _HttpClient) { }

  getIndicatorFilter(licenseNo?: string, stationSymbol?: string, paramSymbol?: string, dateFrom?: Date, dateTo?: Date) {
    let url = environment.BASE_API_URI.IOT_INGEST_SERVICE_API + indicatorRouter.getIndicatorFilter + '?';
    if (licenseNo) url = url + "&licenseNo=" + licenseNo;
    if (stationSymbol) url = url + "&stationSymbol=" + stationSymbol;
    if (paramSymbol) url = url + "&paramSymbol=" + paramSymbol;
    if (dateFrom) url = url + "&dateFrom=" + formatDate(dateFrom, 'yyyy-MM-dd HH:mm:ss', 'en_US');
    if (dateTo) url = url + "&dateTo=" + formatDate(dateTo, 'yyyy-MM-dd HH:mm:ss', 'en_US');
    return this.httpClient.get(url);
  }

}
