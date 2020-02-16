import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Router } from '@angular/router'
import { JwtHelper } from 'angular2-jwt';
import { FlashMessagesService } from 'angular2-flash-messages';

import 'rxjs/add/operator/map'
import { map } from 'rxjs/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http,
     private router: Router,
     private flashMessage: FlashMessagesService) { }

  // signUp(input) {
  //   const options = { headers: new Headers({ 'Content-Type': 'application/json' }) };
  //   const body = JSON.stringify(input)
  //   return this.http.post()
  // }

  login(credentials) {

    const options = { headers: new Headers({ 'Content-Type': 'application/json' }) };
    const body = JSON.stringify(credentials);
    
     return this.http.post('http://localhost:8000/api/v1/users/create-session',
     body,options)
  }

    isLoggedIn() {
      let jwtHelper = new JwtHelper();
      let token = localStorage.getItem('token');

      if(!token)
      return false

      let isExpired = jwtHelper.isTokenExpired(token);
         
      return !isExpired
}

  logout() {
      localStorage.removeItem('token');
      this.flashMessage.show('Logged out successfully !', {cssClass: 'alert-success', timeout: 1500});
      this.router.navigate(['/'])

  }

   get role() {
     let token = localStorage.getItem('token');

     if(!token) return null;

     let jwtHelper = new JwtHelper();
     return jwtHelper.decodeToken(token);
   }
}
