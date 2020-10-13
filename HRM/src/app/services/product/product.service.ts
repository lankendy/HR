import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProduct(): Observable<any> {
    return this.http.get('http://localhost:8000/api/app/product/allProduct');
  }

  createProduct(body: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/app/product/addProduct', body);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.post('http://localhost:8000/api/app/product/deleteProduct', {id: id});
  }

  editProduct(body: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/app/product/editProduct', body);
  }

}
