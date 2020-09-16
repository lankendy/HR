import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { khaiThacNuocMatRouter } from 'src/app/utils/api-router';

@Injectable({
  providedIn: 'root'
})
export class KhaiThacNuocMatService {
  public dataGiayPhep: any;
  public dataIndicators: any;

  constructor(private httpClient: _HttpClient) { }

  getListKhaiThacNuocMat(licenseNo?: string, constructionType?: string, lastDeviceStatus?: string, lastIndicatorStatus?: string,
    provinceCode?: string, districtCode?: string, wardCode?: string, pageSize?: number, currentPage?: number): Observable<any> {
    // return this.httpClient.get(environment.INDICATOR_API + khaiThacNuocMatRouter.getList);
    let url = environment.BASE_API_URI.IOT_INGEST_SERVICE_API + khaiThacNuocMatRouter.getList + '?';
    if (licenseNo) url = url + "&licenseNo=" + licenseNo;
    if (constructionType) url = url + "&constructionType=" + constructionType;
    if (lastDeviceStatus) url = url + "&lastDeviceStatus=" + Number(lastDeviceStatus);
    if (lastIndicatorStatus) url = url + "&lastIndicatorStatus=" + Number(lastIndicatorStatus);
    if (provinceCode) url = url + "&provinceCode=" + provinceCode;
    if (districtCode) url = url + "&districtCode=" + districtCode;
    if (wardCode) url = url + "&wardCode=" + wardCode;
    if (pageSize) url = url + "&pageSize=" + pageSize;
    if (currentPage) url = url + "&currentPage=" + currentPage;
    return this.httpClient.get(url);
  }


}
