import { Component} from '@angular/core';
import { Http } from '@angular/http'
import { Router } from '@angular/router'
import { AuthService } from './../services/auth.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
  constructor(
    private authService: AuthService,
    private router: Router) { }

  signIn(credentials) {
    this.authService.login(credentials)
    .subscribe(response => {
      console.log(response.json())
      if(response.json().data.decoded._id === '5dff85d18f99c14a01fdeaa3') {
        this.router.navigate(['/'])
      }else{
        console.log('It is admin user')
      }
    },
    error => {
      console.log('Error in code', error)
    })
  }
}
