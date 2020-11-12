import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(
    private http: HttpClient
  ) { }

  getAllBill(): Observable<any> {
    return this.http.get('http://localhost:8000/api/app/bill/allBill');
  }

  

}
