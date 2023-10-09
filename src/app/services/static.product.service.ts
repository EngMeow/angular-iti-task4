import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { productList } from '../models/productList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any[];
  constructor() {
    this.products = productList;
   }

  getAllProducts(){
    return this.products;
   }

  getProductById (productId:number):Iproduct | undefined{
    return this.products.find( (product:Iproduct)=> product.id == productId)
   }

  addProduct(product:any){
    return this.products.push(product);
  }

  editProduct(productId:number):any[] | undefined {
    this.products.find( (product:any) => product.id == productId)
    return
  }

  deleteProduct(productId:number) :any[] | undefined {
    return this.products.filter( (product) => product.id != productId)
  }
}
