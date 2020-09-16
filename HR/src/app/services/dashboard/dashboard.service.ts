import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { environment } from '@env/environment';

import { DATE_UTC_FORMAT } from '../../utils';

import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  date = new Date();
  firstDayOfYear = new Date(this.date.getFullYear(), 0, 1);
  firstDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);

  constructor(private http: _HttpClient) {}

  datePipe = new DatePipe('en-US');
}
