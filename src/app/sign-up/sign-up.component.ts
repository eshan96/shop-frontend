import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(
    private router: Router,
    private http: Http
    ) { }

  signUp(input) {
    const body = JSON.stringify(input);
    const options = { headers: new Headers({ 'Content-Type': 'application/json' }) };
     this.http.post('http://localhost:8000/api/v1/users/create', body, options)
    .subscribe(response => {
      console.log(response.json())
      
      this.router.navigate(['/'])
    })
    
  }

}
