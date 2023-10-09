import { Iproduct } from './../../../models/iproduct';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{
  productId: any ;
  product:any ;
  constructor(private router: Router, private activatedRoute: ActivatedRoute
    ,private ProductService: ProductsWithApiService){}
  
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id']
    if(this.productId != 0){
    this.ProductService.getProductById(this.productId).subscribe({
      next:(myProduct:Iproduct) => {this.product = myProduct }
      })
      this.getProductId.setValue(this.product)
      this.getProductName.setValue(this.product)
      this.getProductPrice.setValue(this.product)
      this.getProductQuantity.setValue(this.product)
    // }
  }}

  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl()
  })

  get getProductId(){
    return this.productForm.controls['id'];
  }
  get getProductName(){
    return this.productForm.controls['name'];
  }
  get getProductPrice(){
    return this.productForm.controls['price'];
  }
  get getProductQuantity(){
    return this.productForm.controls['quantity'];
  }
  FormOperation(e: Event){
    e.preventDefault();
    console.log(this.productForm.value);
    if(this.productId == 0 ){
      this.ProductService.addNewProduct(this.productForm.value).subscribe()
    }else{
      this.ProductService.editProduct(this.productId,this.productForm.value).subscribe()
    }
    this.router.navigate(['./products'])
    }
  
}
