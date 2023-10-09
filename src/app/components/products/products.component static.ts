// import { productList } from './../../models/productList';
import { ProductService } from '../../services/static.product.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
// import { productList } from 'src/app/models/productList';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: Iproduct[] = [];
  constructor(private productService: ProductService){}  
  
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
}
