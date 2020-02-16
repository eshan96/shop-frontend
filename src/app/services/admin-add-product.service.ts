import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AdminAddProductService {

  constructor(
    private http: Http,
    private router: Router
  ) { }


  addProduct(productDetails) {
    let token = localStorage.getItem('token')
    let bearer = 'Bearer '
    const options = { headers: new Headers(
      {
         'Content-Type': 'application/json',
         'Authorization': bearer.concat(token) 
        }
      ) };
    const body = JSON.stringify(productDetails);
    
     return this.http.post('http://localhost:8000/api/v1/products/admin/add-product',
     body,options)
  }
}
