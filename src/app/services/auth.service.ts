import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login(credentials) {

    const options = { headers: new Headers({ 'Content-Type': 'application/json' }) };
    const body = JSON.stringify(credentials);
    console.table(body)
     return this.http.post('http://localhost:8000/api/v1/users/create-session',
     body,options)
  }
}
