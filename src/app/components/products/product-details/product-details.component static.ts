import { ProductService } from '../../../services/static.product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private productServices:ProductService){}

  ngOnInit(): void {
  this.productId = this.activatedRoute.snapshot.params['id'];
  this.product = this.productServices.getProductById(this.productId) ;
  }

}
