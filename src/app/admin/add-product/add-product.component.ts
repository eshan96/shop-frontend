import { Component } from '@angular/core';
import { AdminAddProductService } from 'app/services/admin-add-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(
    private adminAddProductService: AdminAddProductService,
    private router: Router
  ) { }

  addProduct(productDetails) {
     this.adminAddProductService.addProduct(productDetails)
         .subscribe(response => {
           console.log(response.json())
           if(response.json().product_info) {
             alert('Product added successfully')
             this.router.navigate(['/admin/add-product'])
           }else if(response.json().message === 'Error in adding the product') {
             alert('Error in adding the product')
           }
         })
  }

}
