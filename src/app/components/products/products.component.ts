// import { productList } from './../../models/productList';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';
// import { productList } from 'src/app/models/productList';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products:Iproduct[] = [];
  constructor(private productService:ProductsWithApiService){}  
  
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe({
      next:(myProducts:Iproduct[]) => {
        this.products = myProducts ;
      }
    })
  }
}
