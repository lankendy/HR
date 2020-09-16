import { Observable } from 'rxjs';
import { filenetReaderProfileRouter, countryRouter } from './../../utils/api-router';
import { environment } from './../../../environments/environment';
import { _HttpClient } from '@delon/theme';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryManagerService {

  constructor(private httpClient: _HttpClient) { }
  getCountryByFilterCondition(page: number, size: number, filter: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URI.DICTIONARY_SERVICE_API +
      filenetReaderProfileRouter.getCountry +
      "?page=" + page +
      "&size=" + size +
      "&filter=" + filter +
      "&_allow_anonymous=true"
    );
  }

  getCountryByCountryCode(countryCode: string) {
    return this.httpClient.get(
      environment.BASE_API_URI.DICTIONARY_SERVICE_API +
      filenetReaderProfileRouter.getCountryByCountryCode + "/" + countryCode
    );
  }

  getProvince(page: number, size: number, sort: string, filter: string) {
    return this.httpClient.get(
      environment.BASE_API_URL +
      countryRouter.getListProvince + "/filter" +
      "?page=" + page +
      "&size=" + size +
      "&sort=" + sort +
      "&filter=" + filter
    );
  }

  getExternalProvince(page: number, size: number, sort: string, filter: string, countryCode: string = 'vn') {
    return this.httpClient.get(
      environment.BASE_API_URI.DICTIONARY_SERVICE_API +
      countryRouter.getListExternalProvince + "/" + countryCode + "/provinces" +
      "?page=" + page +
      "&size=" + size +
      "&sort=" + sort +
      "&filter=" + filter +
      "&_allow_anonymous=true"
    );
  }

  getDistrictByProvinceId(provinceId: number, page: number, size: number, sort: string, filter: string) {
    return this.httpClient.get(
      environment.BASE_API_URL +
      countryRouter.getListDistrictByProvinceId + "/filter?tinhThanh_ID=" + provinceId +
      "&page=" + page +
      "&size=" + size +
      "&sort" + sort +
      "&filter=" + filter
    );
  }

  getWardsByDistrictIdAndProvinceId(provinceId: number, districtId: number, page: number, size: number, sort: string, filter: string) {
    return this.httpClient.get(
      environment.BASE_API_URL +
      countryRouter.getWardsByDistrictIdAndProvinceId + "/filter?tinhThanh_ID=" + provinceId + "&quanHuyen_ID=" + districtId +
      "&page=" + page +
      "&size=" + size +
      "&sort" + sort +
      "&filter=" + filter
    );
  }




}
