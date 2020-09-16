import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RxJS
import { Observable, from } from 'rxjs';
import { ApiInvokerService } from '../../common/api-invoker.service';
import { ResourceCalendar } from '../../utils/api-router';
// import { BASE_API_URL } from '../../utils/constant';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root',
})
export class ResourceCalendarService {
  constructor(private apiInvokerService: ApiInvokerService) {}
  getListResourceCalendar(payload: any): Observable<any> {
    return this.apiInvokerService.post(payload, environment.BASE_API_URL + ResourceCalendar.GetListResourceCalendar);
  }
}
