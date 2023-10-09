import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productId: any = '';
  product: any = '';
  constructor
  (private activatedRoute: ActivatedRoute,
private productServices:ProductsWithApiService){}

  ngOnInit(): void {
  this.productId = this.activatedRoute.snapshot.params['id'];
  this.product = this.productServices.getProductById(this.productId).subscribe({
    next:(myProduct:Iproduct) => this.product = myProduct
  }) ;
  }

}
