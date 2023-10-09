import { productList } from './../models/productList';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {
  baseURL:String ='  http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  getAllProduct():Observable<any> {
    return this.http.get<Iproduct>(`${this.baseURL}`);
  }

  getProductById(productId:number):Observable<Iproduct>{
    return this.http.get<Iproduct>(`${this.baseURL}/${productId}`)
  }

  addNewProduct(product:any):Observable<any>{
    return this.http.post<any>(`${this.baseURL}`,product);
  }

  editProduct(productId:number,product:any):Observable<Iproduct>{
    return this.http.put<any>(`${this.baseURL}/${productId}`,product)
  }

  deleteProduct(productId:number){
    return this.http.delete(`${this.baseURL}/${productId}`);
  }
}
